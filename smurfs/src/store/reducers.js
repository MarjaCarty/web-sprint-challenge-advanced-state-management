import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAILURE,
} from "./actions";

const initialState = {
  isLoading: false,
  smurfData: [],
  error: "",
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };

    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfData: action.payload,
      };

    case GET_SMURFS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case POST_SMURF_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };

    case POST_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfData: action.payload,
      };

    case POST_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
