import { useState, useEffect, useContext } from "react";
import { getCat } from "../helpers/CatsHelpers";
import { useNavigate, useParams, redirect } from "react-router-dom";
import Loading from "../components/Loading";
import {
  StyledCatCard,
  StyledCatDetail,
  StyledCatDetailButton,
} from "../styled";

import AuthContext from "../components/context/AuthContext";
import ApplicationContext from "../components/context/ApplicationsContext";
import {
  deleteAdoptionForm,
  deleteApplication,
} from "../helpers/AdoptionHelper";

const ApplicationDetail = () => {
  const { currentUser } = useContext(AuthContext);
  const { applications, setApplications } = useContext(ApplicationContext);
  const [cat, setCat] = useState(null);
  const navigate = useNavigate();
  const { name } = useParams();
  console.log(applications, "apps");
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

  const handleOnClickUnapply = () => {
    if (!cat) return;
    deleteAdoptionForm(cat.name.toLowerCase(), currentUser.email);
    deleteApplication(cat.name.toLowerCase(), currentUser.email);

    redirect("/myapplications");
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
        <StyledCatDetailButton $important="true" onClick={handleOnClickUnapply}>
          Unapply
        </StyledCatDetailButton>
      </div>
    </StyledCatDetail>
  );
};

export default ApplicationDetail;
