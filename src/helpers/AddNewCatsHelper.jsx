import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

const AddNewCatsHelper = async (data) => {
  const { color, description, location, name, sex } = data;
  const docData = {
    colors: color,
    description: description,
    location: location,
    name: name,
    sex: sex,
    img: `${name.toLowerCase()}.jpg`,
  };
  await addDoc(collection(db, "cats"), docData);
};

export default AddNewCatsHelper;
