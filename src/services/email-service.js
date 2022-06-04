
import { send, init } from "emailjs-com";

const serviceId = "service_j4jjwnl";
const templateId = "template_teg98ye";
const userID = "mE4A3bU77IOpMQcZd";

const sendEmail = (content) => {
  init(userID);
  const toSend = {
    from_name: content.from_name,
    to_name: content.to_name,
    to_email: content.to_email,
    message: content.message,
  };
  send(serviceId, templateId, toSend)
    .then((res) => {
      console.log(res);
      if(res.status === 200) {
        return alert("Email sent!");
      }else {
        return alert("Email failed to send!");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export default { sendEmail };