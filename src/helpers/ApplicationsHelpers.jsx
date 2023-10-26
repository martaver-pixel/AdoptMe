import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { getCat } from "./CatsHelpers";

export const getAllApplications = async () => {
  const colRef = collection(db, "applications");
  try {
    const appDocs = await getDocs(colRef);
    const appData = appDocs.docs;
    let applications = [];
    appData.forEach((app, i) => {
      const applicationData = appData[i].data();
      applications.push({ ...applicationData });
    });
    return applications;
  } catch (err) {
    console.log(err);
  }
};

export const getApplicationsByUser = async (email) => {
  const colRef = collection(db, "applications");
  try {
    const myApplications = query(colRef, where("applicationUser", "==", email));
    const querySnapshot = await getDocs(myApplications);
    const data = {};
    for (let i = 0; i < querySnapshot.docs.length; i++) {
      const doc = querySnapshot.docs[i].data();
      const cat = await getCat(doc.catId);
      data[doc.catId] = { application: doc, cat };
    }

    return data;
  } catch (err) {
    console.log(err);
  }
};

// export const getApplicationsByUser = async (email) => {
//   const colRef = collection(db, "applications");
//   try {
//     const myApplications = query(colRef, where("applicationUser", "==", email));
//     const querySnapshot = await getDocs(myApplications);
//     const data = [];
//     for (let i = 0; i < querySnapshot.docs.length; i++) {
//       const doc = querySnapshot.docs[i].data();
//       const cat = await getCat(doc.catId);
//       data.push({ application: doc, cat });
//     }

//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };
