import {
  Card,
  CardActions,
  CardContent,
  InputAdornment,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import TitleAdder from "../../HOC/TitleAdder";
import CustomDivier from "../../components/general/CustomDivier";
import {
  AccountCircle,
  EmailRounded,
  Face6Rounded,
  WavingHandRounded,
  SubjectRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import worldMapImage from "../../../src/assets/images/worldmap.svg";
import { useFormik } from "formik";
import { contactValidationSchema } from "../validations/contactValidation";
import ReCAPTCHA from "react-google-recaptcha";
import { formDataType } from "../../types";
import { submitForm } from "../../services/submitForm";
import { LoadingButton } from "@mui/lab";
import toast from "react-hot-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);

  const contactInputNames: formDataType = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    recaptcha: "",
  };

  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: async (formData: formDataType) => {
      setButtonLoading(true);
      try {
        await submitForm(formData);
        toast.success("پیام شما با موفقیت ثبت شد");
      } catch (error) {
        console.error(error);
      } finally {
        setButtonLoading(false);
      }
    },
    validationSchema: contactValidationSchema,
  });

  return (
    <Card className="min-h-[100vh] bg-[whitesmoke] flex flex-col">
      <CardContent>
        <CustomDivier
          textAlign="center"
          title="ارتباط با من"
          icon={<AccountCircle />}
          color="warning"
        />
        <Grid container sx={{ mt: 10, p: 4 }}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transition: loading ? "200ms" : "0ms",
            }}
          >
            <Grid size={{ xs: 12, sm: 12, md: 8 }}>
              <Card sx={{ justifyContent: "center", alignItems: "center" }}>
                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                  <CardContent>
                    <Grid container id="container" className="justify-end">
                      <Grid sx={{ direction: "ltr" }}>
                        <Grid container spacing={2}>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                              fullWidth
                              size="small"
                              color="warning"
                              label="نام و نام خانوادگی"
                              name="fullname"
                              variant="outlined"
                              helperText={
                                formik.touched.fullname
                                  ? formik.errors.fullname
                                  : null
                              }
                              error={Boolean(
                                formik.touched.fullname &&
                                  formik.errors.fullname,
                              )}
                              value={formik.values?.fullname}
                              onChange={formik.handleChange}
                              slotProps={{
                                input: {
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <Face6Rounded />
                                    </InputAdornment>
                                  ),
                                },
                              }}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                              fullWidth
                              size="small"
                              color="warning"
                              label="آدرس ایمیل"
                              name="email"
                              variant="outlined"
                              helperText={
                                formik.touched.email
                                  ? formik.errors.email
                                  : null
                              }
                              error={Boolean(
                                formik.touched.email && formik.errors.email,
                              )}
                              value={formik.values?.email}
                              onChange={formik.handleChange}
                              slotProps={{
                                input: {
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <EmailRounded />
                                    </InputAdornment>
                                  ),
                                },
                              }}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, md: 12 }}>
                            <TextField
                              fullWidth
                              size="small"
                              color="warning"
                              label="عنوان"
                              name="subject"
                              variant="outlined"
                              helperText={
                                formik.touched.subject
                                  ? formik.errors.subject
                                  : null
                              }
                              error={Boolean(
                                formik.touched.subject && formik.errors.subject,
                              )}
                              value={formik.values?.subject}
                              onChange={formik.handleChange}
                              slotProps={{
                                input: {
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <SubjectRounded />
                                    </InputAdornment>
                                  ),
                                },
                              }}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, md: 12 }}>
                            <TextField
                              fullWidth
                              multiline
                              size="small"
                              color="warning"
                              label="متن پیام"
                              name="message"
                              variant="outlined"
                              rows={6}
                              helperText={
                                formik.touched.message
                                  ? formik.errors.message
                                  : null
                              }
                              error={Boolean(
                                formik.touched.message && formik.errors.message,
                              )}
                              value={formik.values?.message}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions className="flex-col !items-end gap-5 flex">
                    <ReCAPTCHA
                      sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
                      hl="fa"
                      onChange={(value) =>
                        formik.setFieldValue("recaptcha", value)
                      }
                    />
                    {formik.errors.recaptcha && formik.touched.recaptcha && (
                      <Typography variant="caption" color="error">
                        {formik.errors.recaptcha}
                      </Typography>
                    )}
                    <LoadingButton
                      loading={buttonLoading}
                      fullWidth
                      type="submit"
                      color="success"
                      variant="contained"
                    >
                      ارسال
                    </LoadingButton>
                  </CardActions>
                </form>
              </Card>
            </Grid>
          </Slide>
          <Slide
            direction="up"
            in={loading}
            style={{
              transition: loading ? "200ms" : "0ms",
            }}
          >
            <Grid
              size={{ xs: 0, sm: 0, md: 4 }}
              sx={{
                textAlign: "center",
                backgroundImage: `url(${worldMapImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "black",
                  mt: 4,
                  display: { sm: "none", xs: "none", md: "block" },
                }}
              >
                هر سوال و صحبتی که داری من هستم
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "black",
                  mt: 2,
                  display: { sm: "none", xs: "none", md: "block" },
                }}
              >
                <a
                  href="mailto:kargat504@gmail.com"
                  className="text-red-500 flex items-center justify-center gap-1"
                >
                  <WavingHandRounded className="text-yellow-500" />
                  <Typography variant="subtitle1" color="black">
                    من
                  </Typography>
                  <Typography variant="subtitle1">ایمیل</Typography>
                </a>
              </Typography>
            </Grid>
          </Slide>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TitleAdder(Contact, "ارتباط با من");