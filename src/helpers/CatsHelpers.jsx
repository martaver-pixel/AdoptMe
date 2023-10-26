import { collection, doc, getDocs, getDoc } from "firebase/firestore";
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

export const getCat = async (id) => {
  const docRef = doc(db, "cats", id.toString());
  const docSnap = await getDoc(docRef);
  const cat = docSnap.data();
  const imgURL = await getCatImg(cat.img);
  const catWithImg = { ...cat, imgURL };
  return catWithImg;
};

export const getCatsById = (ids) => {
  const catsPromises = ids.map((id) => getCat(id));
  return Promise.all(catsPromises);
};

export const getCatImg = async (img) => {
  const storage = getStorage();
  return getDownloadURL(ref(storage, img))
    .then((url) => url)
    .catch((error) => {
      console.log(error);
    });
};
