import axios from "axios";
import { Dispatch } from "redux";
import { StoreAction, StoreActionTypes } from "../../types/store";

export const fetchApps = () => {
  return async (dispatch: Dispatch<StoreAction>) => {
    try {
      dispatch({ type: StoreActionTypes.FETCH_APPS });
      const response = await axios.get(
        "https://server.hentaigameshub.com/apps/all"
      );
      dispatch({
        type: StoreActionTypes.FETCH_APPS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: StoreActionTypes.FETCH_APPS_ERROR,
        payload: "Fetch errors",
      });
    }
  };
};
