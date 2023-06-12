export const initialState = {
  Hospitals: [],
  HospitalName: "",
  Ambulances: [],
  HospitalAmbulances: [],
  search: "",
  nameReducer: "",
  isLoggedIn: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_HOSPITALS":
      return {
        ...state,
        Hospitals: action.Hospitals_data,
      };
    case "ADD_AMBULANCES":
      return {
        ...state,
        Ambulances: action.Ambulances_data,
      };
    case "ADD_HOSPITALAMBULANCES":
        return {
          ...state,
          HospitalAmbulances: action.HospitalAmbulances_data,
    };
    case "ADD_HOSPITALNAME":
        return {
          ...state,
          HospitalName: action.HospitalName_data,
    };
    // case "UPDATE_SEARCH":
    //   console.log("update");
    //   return {
    //     ...state,
    //     search: action.value,
    //   };
    // case "CLEAR_SEARCH":
    //   return {
    //     ...state,
    //     search: "",
    //   };
    // case "UPDATE_NAME":
    //   return {
    //     ...state,
    //     nameReducer: action.name,
    //   };
    // case "SET_LOGGEDIN":
    //   return {
    //     ...state,
    //     isLoggedIn: true,
    //   };
    default:
      return state;
  }
};

export default reducer;
