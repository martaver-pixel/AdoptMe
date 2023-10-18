import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export function getCats() {
  const colRef = collection(db, "cats");
  return getDocs(colRef)
    .then((res) => {
      let cats = [];
      res.docs.forEach((doc) => {
        cats.push({ ...doc.data(), id: doc.id });
      });
      return cats;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

export const getCat = async (id) => {
  const docRef = doc(db, "cats", id.toString());
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
