import React from "react";
import { getImage } from "../../helpers/getImages";
import {Link} from 'react-router-dom';

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
  ...rest
}) => {
  return (
    <div className="card ms-3" style={{ maxWidth: 540 }}>
      <div className="row ">
        <div className="col-md-8">
          <div style={{ textAlign: "center" }} className="col-md-4">
            <img
              src={getImage(id)}
              alt={superhero}
              className="card-img"
              style={{ width: "200px" }}
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-te">{alter_ego}</p>
              {
                (alter_ego !== characters)  && <p className="text-muted">{characters}</p>
              }
              <p className="card-tex">
                <small className='text-muted'>{first_appearance}</small>
              </p>
              <Link  to={`/hero/${id}`}>
                Mas
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
