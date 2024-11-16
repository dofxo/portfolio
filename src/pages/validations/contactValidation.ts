import * as yup from "yup";

export const contactValidationSchema = yup.object().shape({
  fullname: yup.string().required("نام و نام خانوادگی الزامی می باشد"),
  email: yup
    .string()
    .email("آدرس ایمیل معتبر نیست")
    .required("ایمیل الزامی می باشد"),
  subject: yup.string().required("عنوان الزامی می باشد"),
  message: yup.string().required("نوشتن پیام الزامی می باشد"),
});
