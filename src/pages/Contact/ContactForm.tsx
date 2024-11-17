import {
  EmailRounded,
  Face6Rounded,
  SubjectRounded,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  CardActions,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import { contactValidationSchema } from "../validations/contactValidation";
import { submitForm } from "../../services/submitForm";
import toast from "react-hot-toast";
import { useState } from "react";
import { formDataType } from "../../types";

const ContactForm = () => {
  const [buttonLoading, setButtonLoading] = useState(false);

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
                    formik.touched.fullname ? formik.errors.fullname : null
                  }
                  error={Boolean(
                    formik.touched.fullname && formik.errors.fullname,
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
                  helperText={formik.touched.email ? formik.errors.email : null}
                  error={Boolean(formik.touched.email && formik.errors.email)}
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
                    formik.touched.subject ? formik.errors.subject : null
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
                    formik.touched.message ? formik.errors.message : null
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
          hl="fa"
          onChange={(value) => formik.setFieldValue("recaptcha", value)}
          sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
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
  );
};

export default ContactForm;
