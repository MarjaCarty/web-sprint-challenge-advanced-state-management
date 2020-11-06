import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
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
    default:
      return state;
  }
};
