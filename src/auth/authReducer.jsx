import { ACTIONS } from "../types/types";


export const authReducer = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.LOGIN:
            
            return{
                ...action.payload,
                logged:true,
            };
    
        case ACTIONS.LOGOUT:
            return{
                logged:false,
            };
        default:
            return state;
    }
}