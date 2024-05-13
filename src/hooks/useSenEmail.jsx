import { useState } from "react";
import emailjs from "emailjs-com";

const useSendEmail =() => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const sendEmail = async (phoneNumber, message) => {
    if (message === "") {
      setIsEmpty(true);
      return;
    }

    setSubmitting(true);
    await emailjs
      .send(
        import.meta.env.VITE_REACT_APP_SERVICE_ID ?? "template_qvrwkg8",
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID ?? "service_z7ymplh",
        {
          number: phoneNumber,
          message: message,
        },
        import.meta.env.VITE_REACT_APP_USER_PUBLIC_KEY ?? "8T-L_e_i2B3yhhe-K"
      )
      .then(() => {
        setSubmitting(false);
        setSuccess(true);
      });

    
  };
  return [sendEmail, submitting, success, isEmpty];
}

export default useSendEmail;