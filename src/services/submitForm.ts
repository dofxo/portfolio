import { formDataType } from "../types";
import { supabase } from "../utils/supabase";

export const submitForm = async (data: formDataType) => {
  return await supabase.from("messages").insert([data]).select();
};
