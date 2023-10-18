import { useState, useEffect } from "react";
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

const CatDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cat, setCat] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCat(id);
        setCat(res);
      } catch (error) {
        console.log("Se ha producido un error:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleOnClick = () => {
    navigate(-1);
  };

  return (
    <StyledCatDetail id="cat-detail">
      {cat ? (
        <StyledCatCard>
          <img
            src={`/${cat.name.toLowerCase()}.jpg`}
            alt={`${cat.name}`}
            height="400px"
          />
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
        <StyledCatDetailButton
          $important="true"
          onClick={() => setIsOpen(true)}
        >
          Apply for adoption! &#127881;
        </StyledCatDetailButton>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <AdoptionForm data={cat} />
        </Modal>
      </div>
    </StyledCatDetail>
  );
};

export default CatDetail;
