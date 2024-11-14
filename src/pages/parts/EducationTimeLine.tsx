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
import { Slide, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const EducationTimeLine = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  });

  return (
    <Timeline position="right" sx={{ direction: "ltr" }}>
      {devEdu.map((item, idx) => (
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
        </Slide>
      ))}
    </Timeline>
  );
};

export default EducationTimeLine;
