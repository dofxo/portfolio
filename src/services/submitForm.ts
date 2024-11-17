import axios from "axios";
import { formDataType } from "../types";

export const submitForm = (data: formDataType) => {
  return axios.post(import.meta.env.VITE_GOOGLE_SHEETS, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
