const initialState = {
  properties: [],
  error: null,
  isLoading: false,
};

const realestate = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PROPERTIES_START":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_PROPERTIES_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.message,
      };
    case "FETCH_PROPERTIES_SUCCESS":
      return {
        ...state,
        properties: [...action.properties],
        isLoading: false,
      };
    default:
      return state;
  }
};

export default realestate;
