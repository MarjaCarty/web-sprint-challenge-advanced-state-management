import axios from "axios";

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";
export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE";

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: GET_SMURFS_START });

  axios
    .get(`http://localhost:3333/smurfs`)
    .then((res) => {
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_SMURFS_FAILURE, payload: err.message });
    });
};

export const postSmurf = (smurf) => (dispatch) => {
  dispatch({ type: POST_SMURF_START });

  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
      dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_SMURF_FAILURE, payload: err.message });
    });
};
