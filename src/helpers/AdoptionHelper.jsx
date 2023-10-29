import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  query,
  and,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
export const postAdoptionForm = async (data) => {
  console.log(data, "dara form");
  const formValues = { data };
  const docRef = await addDoc(collection(db, "adoptionForm"), formValues);
};
export const myApplication = async (data) => {
  const formValues = { data };
  const { catName, applicationUser, dateOfApplication } = formValues.data;
  const myApplication = { catName, applicationUser, dateOfApplication };
  const docRef = await addDoc(collection(db, "applications"), myApplication);
};

export const deleteAdoptionForm = async (catName, user) => {
  const colRefAdoptionForm = collection(db, "adoptionForm");
  try {
    const adoptionFormUser = query(
      colRefAdoptionForm,
      and(
        where("data.applicationUser", "==", user),
        where("data.catName", "==", catName)
      )
    );

    const docSnapUser = await getDocs(adoptionFormUser);

    console.log(docSnapUser.docs[0], "form");
    await deleteDoc(docSnapUser.docs[0].ref);
  } catch (err) {
    console.log(err);
  }
};

export const deleteApplication = async (catName, user) => {
  const colRefApplications = collection(db, "applications");
  try {
    const application = query(
      colRefApplications,
      and(where("applicationUser", "==", user), where("catName", "==", catName))
    );
    const docSnapUser = await getDocs(application);

    await deleteDoc(docSnapUser.docs[0].ref);
  } catch (err) {
    console.log(err);
  }
};
