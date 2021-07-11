const initialState = {
  vehicles: [],
  error: null,
  isLoading: false,
};

const automobile = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_VEHICLES_START":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_VEHICLES_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.message,
      };
    case "FETCH_VEHICLES_SUCCESS":
      return {
        ...state,
        vehicles: [...action.vehicles],
        isLoading: false,
      };
    default:
      return state;
  }
};

export default automobile;
