export interface StoreState {
  apps: any[];
  loading: boolean;
  error: null | string;
}
export enum StoreActionTypes {
  FETCH_APPS = "FETCH_APPS",
  FETCH_APPS_SUCCESS = "FETCH_APPS_SUCCESS",
  FETCH_APPS_ERROR = "FETCH_APPS_ERROR",
}
interface FetchStoreAction {
  type: StoreActionTypes.FETCH_APPS;
}

interface FetchStoreSuccessAction {
  type: StoreActionTypes.FETCH_APPS_SUCCESS;
  payload: any[];
}
interface FetchStoreErrorAction {
  type: StoreActionTypes.FETCH_APPS_ERROR;
  payload: string;
}

export type StoreAction =
  | FetchStoreAction
  | FetchStoreSuccessAction
  | FetchStoreErrorAction;
