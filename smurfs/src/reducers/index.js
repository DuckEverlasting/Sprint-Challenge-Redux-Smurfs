import {
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
} from "../actions";

const initState = {
  smurfs: [],
  getPending: false,
  postPending: false,
  putPending: false,
  murderPending: false,
  error: null
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_START:
      return {
        ...state,
        getPending: true,
        error: ""
      };
    case GET_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        getPending: false
      };
    case GET_FAILURE:
      return {
        ...state,
        getPending: false,
        error: action.payload
      };
    case POST_START:
      return {
        ...state,
        postPending: true,
        error: ""
      };
    case POST_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        postPending: false
      };
    case POST_FAILURE:
      return {
        ...state,
        postPending: false,
        error: action.payload
      };
    case PUT_START:
      return {
        ...state,
        putPending: true,
        error: ""
      };
    case PUT_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        putPending: false
      };
    case PUT_FAILURE:
      return {
        ...state,
        putPending: false,
        error: action.payload
      };
    case MURDER_START:
      return {
        ...state,
        murderPending: true,
        error: ""
      };
    case MURDER_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        murderPending: false
      };
    case MURDER_FAILURE:
      return {
        ...state,
        murderPending: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
