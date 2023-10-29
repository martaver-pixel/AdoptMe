import {
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from "../../firebase";

export const getCats = async () => {
  const colRef = collection(db, "cats");
  try {
    const catsDocs = await getDocs(colRef);
    const catsData = catsDocs.docs;
    let cats = [];
    for (let i = 0; i < catsData.length; i++) {
      const catData = catsData[i].data();
      const imgURL = await getCatImg(catData.img);
      cats.push({ ...catData, imgURL, id: catsData[i].id });
    }
    return cats;
  } catch (err) {
    console.log(err);
  }
};

export const getCat = async (name) => {
  const colRef = collection(db, "cats");
  const catName = name.charAt(0).toUpperCase() + name.slice(1);
  try {
    const catWithName = query(colRef, where("name", "==", catName));
    const docSnap = await getDocs(catWithName);
    const cat = docSnap.docs[0].data();
    const imgURL = await getCatImg(cat.img);
    const catWithImg = { ...cat, imgURL };
    return catWithImg;
  } catch (err) {
    console.log(err);
  }
};

export const getCatImg = async (img) => {
  const storage = getStorage();
  if (!img) return null;
  return getDownloadURL(ref(storage, img))
    .then((url) => url)
    .catch((error) => {
      console.log(error);
    });
};
