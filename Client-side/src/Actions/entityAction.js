import {
  ENTITY_DATA_FAIL,
  ENTITY_DATA_REQUEST,
  ENTITY_DATA_SUCCESS,
} from "../Constants/entityConstant";
import axios from "axios";

export const entityDataAction = (id) => async (dispatch) => {
    console.log(id , "idddd")
  dispatch({ type: ENTITY_DATA_REQUEST });

  try {
    const response = await axios.get(
      `https://akabab.github.io/starwars-api/api/id/${id}.json`
    );
    const data = response.data;
    console.log(data , "actionData")

    dispatch({ type: ENTITY_DATA_SUCCESS, payload: data });
  } catch (error) {
    console.log(error)
    dispatch({ type: ENTITY_DATA_FAIL, payload: error.message });
  }
};
