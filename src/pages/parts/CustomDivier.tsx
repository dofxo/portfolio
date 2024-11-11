import { Chip, Divider, Typography } from "@mui/material";

const CustomDivier = ({
  title,
  color,
  icon,
  textAlign,
}: {
  title: string;
  color:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  icon: any;
  textAlign: "left" | "right" | "center" | undefined;
}) => {
  return (
    <Divider
      className="!mb-[20px]"
      textAlign={textAlign}
      sx={{
        "&::before, &::after": {
          borderColor: color,
        },
      }}
    >
      <Chip
        color={color}
        icon={icon}
        className="svgBlack"
        label={
          <Typography
            variant="body1"
            color={color}
            sx={{ textAlign: "center", color: "black" }}
          >
            {title}
          </Typography>
        }
        sx={{ p: 3 }}
      />
    </Divider>
  );
};

export default CustomDivier;
