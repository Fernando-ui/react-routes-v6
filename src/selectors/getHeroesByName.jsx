import { heroes } from "../data/Heroes";


export const getHeroesByName = (name='') => {
    console.log('getheroesByName');
    
    if(name === ''){
        return [];
    }
    name = name.toLowerCase();
    return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
}
