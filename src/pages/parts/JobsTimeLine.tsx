import { HomeRepairServiceRounded } from "@mui/icons-material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";
import { devJob } from "../../components/data/devJob";
import { Typography } from "@mui/material";

const JobsTimeLine = () => {
  return (
    <Timeline position="right" sx={{ direction: "ltr" }}>
      {devJob.map((item, idx) => (
        <TimelineItem key={idx}>
          <TimelineSeparator>
            <TimelineDot color="warning" variant="outlined">
              <HomeRepairServiceRounded color="warning" />
            </TimelineDot>
            {idx !== devJob.length - 1 ? <TimelineConnector /> : null}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="caption" color="gray">
              {item.year}
            </Typography>
            <Typography variant="body1" color="black">
              {item.jobTitle}
            </Typography>
            <Typography variant="body2" color="black">
              {item.time}
            </Typography>
            <Typography variant="body2" color="black">
              {item.place}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default JobsTimeLine;
