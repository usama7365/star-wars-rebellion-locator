import { ENTITY_DATA_FAIL , ENTITY_DATA_REQUEST , ENTITY_DATA_SUCCESS } from "../Constants/entityConstant";

export const entityDataReducer = (state = {}, action) => {
    switch (action.type) {
      case ENTITY_DATA_REQUEST:
        return { ...state, loading: true, error: null };
      case ENTITY_DATA_SUCCESS:
        return { ...state, loading: false, data: action.payload };
      case ENTITY_DATA_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };