import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getImage } from "../../helpers/getImages";
import { getHeroById } from "../../selectors/getHeroById";
import { useMemo } from "react";

export const HeroScreen = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  console.log(heroId, "Tenemos la dependencia que puede cambiar");

  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  const handleBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/" />;
  }
  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  const imagePath = `${getImage(id)}`;

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <img
            src={`${imagePath}`}
            className="img-thumbnail"
            alt={`${hero.id}`}
            style={{ width: "200px" }}
          />
          <div>Informacion:</div>
          <div>
            <h3>{alter_ego}</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Alter ego:</b> {alter_ego}
              </li>
              <li className="list-group-item">
                <b>Publisher</b> <span>{publisher}</span>
              </li>
              <li className="list-group-item">
                <b>Super Hero</b> <span>{superhero}</span>
              </li>
              <li className="list-group-item">
                <b>{characters}</b>
                <span>Characters</span>
              </li>
            </ul>
            <button
              className="btn btn-outline-info mt-3 ml-3"
              onClick={() => handleBack()}
            >
              Regresar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
