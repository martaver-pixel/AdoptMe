import { useState, useEffect, useContext } from "react";
import { getCat } from "../helpers/CatsHelpers";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import {
  StyledCatCard,
  StyledCatDetail,
  StyledCatDetailButton,
} from "../styled";
import Modal from "../components/Modal";
import AdoptionForm from "../components/AdoptionForm";
import AuthContext from "../components/context/AuthContext";

const CatDetail = () => {
  const { currentUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [cat, setCat] = useState(null);
  const navigate = useNavigate();
  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCat(name);
        setCat(res);
      } catch (error) {
        console.log("Se ha producido un error:", error);
      }
    };
    fetchData();
  }, [name]);

  const handleOnClick = () => {
    navigate(-1);
  };

  const isLoggedCheck = () => {
    if (!currentUser) {
      navigate("/login", { replace: true });
    } else {
      setIsOpen(true);
    }
  };

  return (
    <StyledCatDetail id="cat-detail">
      {cat ? (
        <StyledCatCard>
          <img src={cat.imgURL} alt={`${cat.name}`} height="400px" />
          <h2>Hi! I&apos;m {cat.name}</h2>
          <p>
            {cat.description} and my fur is {cat.colors}
          </p>
          <h4>You could pick me up in &#128205;{cat.location}</h4>
        </StyledCatCard>
      ) : (
        <Loading />
      )}
      <div>
        <StyledCatDetailButton onClick={handleOnClick}>
          &#x2190;Back
        </StyledCatDetailButton>
        <StyledCatDetailButton $important="true" onClick={isLoggedCheck}>
          Apply for adoption! &#127881;
        </StyledCatDetailButton>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <AdoptionForm catName={name} />
        </Modal>
      </div>
    </StyledCatDetail>
  );
};

export default CatDetail;
