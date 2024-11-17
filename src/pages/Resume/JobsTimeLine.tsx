import { HomeRepairServiceRounded } from "@mui/icons-material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";
import { devJob } from "../../constant/data/devJob";
import { Slide, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const JobsTimeLine = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  });

  return (
    <Timeline position="right" sx={{ direction: "ltr", width: 1 }}>
      {devJob.map((item, idx) => (
        <Slide
          key={idx}
          direction="right"
          in={loading}
          style={{
            transitionDelay: loading ? `${idx + 3}99ms` : "0ms",
          }}
        >
          <TimelineItem>
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
        </Slide>
      ))}
    </Timeline>
  );
};

export default JobsTimeLine;
