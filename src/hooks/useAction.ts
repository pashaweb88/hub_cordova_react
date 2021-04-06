import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as StoreActionCreator from "../store/action-creator/store";

export const useStoreAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(StoreActionCreator, dispatch);
};
