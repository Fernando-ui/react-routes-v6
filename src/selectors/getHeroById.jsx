import { heroes } from "../data/Heroes"

export const getHeroById = (id = "")=>{
    console.log('LLamada la funcion');
    
    return heroes.find((heroe) => heroe.id === id)
}