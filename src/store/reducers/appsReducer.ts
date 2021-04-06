
import { StoreAction, StoreState, StoreActionTypes} from '../../types/store';


const initialState:StoreState = { 
    apps:[],
    loading:false,
    error:null
}
export const appsReducer = (state=initialState, action:StoreAction):StoreState => {
    switch (action.type) {
        case StoreActionTypes.FETCH_APPS:
            return {loading:true, apps:[], error:null}
        case StoreActionTypes.FETCH_APPS_ERROR:
            return {loading:false, error:action.payload, apps:[]}
        case StoreActionTypes.FETCH_APPS_SUCCESS:
            return {loading:false, error:null, apps:action.payload}
        default:
            return state;
    }
}