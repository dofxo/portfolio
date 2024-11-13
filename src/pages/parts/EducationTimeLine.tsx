import { SchoolRounded } from "@mui/icons-material";
import { devEdu } from "../../components/data/devEdu";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  Timeline,
} from "@mui/lab";
import { Typography } from "@mui/material";

const EducationTimeLine = () => {
  return (
    <Timeline position="right" sx={{ direction: "ltr" }}>
      {devEdu.map((item, idx) => (
        <TimelineItem key={idx}>
          <TimelineSeparator>
            <TimelineDot color="info" variant="outlined">
              <SchoolRounded color="info" />
            </TimelineDot>
            {idx !== devEdu.length - 1 ? <TimelineConnector /> : null}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="caption" color="gray">
              {item.year}
            </Typography>
            <Typography variant="body1" color="black">
              {item.cert}
            </Typography>
            <Typography variant="body2" color="black">
              {item.major}
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

export default EducationTimeLine;
