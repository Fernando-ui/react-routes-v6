import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import {useMemo} from 'react';


export const SearchScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  // const heroesFiltrados = getHeroesByName(q);
  const heroesFiltrados = useMemo(() => getHeroesByName(q), [q]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  const { searchText } = formValues;

  return (
    <>
      <h1>Busquedas</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Buscar un heroes"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={(e) => handleInputChange(e)}
            />

            <button type="submit" className="btn btn-primary mt-3">
              Buscar...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-info">No hay nada</div>
          ) : (
            heroesFiltrados.length === 0 && (
              <div className="alert alert-danger">No hay Resultados {q} </div>
            )
          )};           
          {heroesFiltrados.map((heroe) => {
            return <HeroCard key={heroe.id} {...heroe} />;
          })}
        </div>
      </div>
    </>
  );
};
