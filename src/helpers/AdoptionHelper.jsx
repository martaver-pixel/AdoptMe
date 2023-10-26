import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
export const postAdoptionForm = async (data) => {
  const formValues = { data };
  const docRef = await addDoc(collection(db, "adoptionForm"), formValues);
};
export const myApplication = async (data) => {
  const formValues = { data };
  const { catId, applicationUser, dateOfApplication } = formValues.data;
  const myApplication = { catId, applicationUser, dateOfApplication };
  const docRef = await addDoc(collection(db, "applications"), myApplication);
};
