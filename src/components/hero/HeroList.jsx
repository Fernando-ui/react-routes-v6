import {useMemo} from "react";

import { getHeroesByPublisher } from "../../selectors/getHerosByPublisher";
import { HeroCard } from "./HeroCard";


export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  
  return (
    <div className="">
      {heroes.map((hero) => {
        
        
        return <HeroCard key={hero.id}{...hero} />;
      })}
    </div>
  );
};
console.log("hero");
