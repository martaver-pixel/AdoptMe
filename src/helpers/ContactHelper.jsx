import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
export const postContactForm = async (name, email, subject, message) => {
  const formValues = {
    name,
    email,
    subject,
    message,
  };

  const docRef = await addDoc(collection(db, "contactForm"), formValues);
};
