import axios from "axios";

export const [
  GET_START,
  GET_SUCCESS,
  GET_FAILURE,
  POST_START,
  POST_SUCCESS,
  POST_FAILURE,
  PUT_START,
  PUT_SUCCESS,
  PUT_FAILURE,
  MURDER_START,
  MURDER_SUCCESS,
  MURDER_FAILURE
] = [
  "GET_START",
  "GET_SUCCESS",
  "GET_FAILURE",
  "POST_START",
  "POST_SUCCESS",
  "POST_FAILURE",
  "PUT_START",
  "PUT_SUCCESS",
  "PUT_FAILURE",
  "MURDER_START",
  "MURDER_SUCCESS",
  "MURDER_FAILURE"
];

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: GET_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_FAILURE, payload: err });
    });
};

export const postSmurf = newSmurf => dispatch => {
  dispatch({ type: POST_START });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      dispatch({ type: POST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: POST_FAILURE, payload: err });
    });
};

export const putSmurf = (smurf, id) => dispatch => {
  dispatch({ type: PUT_START });
  axios
    .put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(res => {
      console.log("PUT SUCCESS: ", res);
      dispatch({ type: PUT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: PUT_FAILURE, payload: err });
    });
};

export const killSmurf = id => dispatch => {
  dispatch({ type: MURDER_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: MURDER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: MURDER_FAILURE, payload: err });
    });
};
