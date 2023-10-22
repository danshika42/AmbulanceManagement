export const initialState = {
  Hospitals: [],
  HospitalName: "",
  Ambulances: [],
  HospitalAmbulances: [],
  AuthToken:{},
  User:{},
  BookAmbulance:{},
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
    case "ADD_AUTHTOKEN":
      return {
        ...state,
        AuthToken: action.AuthToken_data,
      };
    case "ADD_USER":
      return {
        ...state,
        User: action.User_data,
      };
    case "ADD_BOOKAMBULANCE":
      return{
        ...state,
        BookAmbulance:action.Book_data,
      }
    default:
      return state;
  }
};

export default reducer;
