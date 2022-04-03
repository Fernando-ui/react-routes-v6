import {createContext} from 'react'


export const AuthContext = createContext({
    nombre:'',
    logged:false,
});