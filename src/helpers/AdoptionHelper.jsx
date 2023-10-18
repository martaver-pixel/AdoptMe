import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
export const postAdoptionForm = async (data) => {
  const formValues = { data };

  const docRef = await addDoc(collection(db, "adoptionForm"), formValues);
};
