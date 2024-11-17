import { createClient } from "@supabase/supabase-js";
import emailjs from "emailjs-com";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const userId = import.meta.env.VITE_USER_ID;

export const supabase = createClient(supabaseUrl, supabaseKey);

const tableName = "messages";

supabase
  .channel(`realtime:${tableName}`)
  .on(
    "postgres_changes",
    { event: "INSERT", schema: "public", table: tableName },
    (payload) => {
      emailjs.send(
        serviceId,
        templateId,
        {
          message: `New Contact Form has been submitted: \n
         subject: ${JSON.stringify(payload.new.subject)}
         message: ${JSON.stringify(payload.new.message)}

        see all messages: https://dofxo.github.io/portfolio-contact-form
        `,
        },
        userId,
      );
    },
  )
  .subscribe();
