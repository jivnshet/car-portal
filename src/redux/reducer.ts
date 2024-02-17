import { Action, combineReducers } from "redux";

// Define the interface for your form data
export interface FormData {
  model: string;
  location: string;
  color: string;
  owners: string;
  year: string;
  transmission: string;
  insurance: string;
  fitments: string;
  kms: string;
  photo: string;
}

// Define the interface for the Redux state
export interface FormDataState {
  formData: FormData;
}

// Define the action types
const SET_FORM_DATA = "SET_FORM_DATA";

// Define the action interfaces
interface SetFormDataAction extends Action<typeof SET_FORM_DATA> {
  payload: FormData;
}

// Define the initial state
const initialState: FormDataState = {
  formData: {
    model: "",
    location: "",
    color: "",
    owners: "",
    year: "",
    transmission: "",
    insurance: "",
    fitments: "",
    kms: "",
    photo: "",
  },
};

// Define the reducer
const formDataReducer = (
  state: FormDataState = initialState,
  action: SetFormDataAction
): FormDataState => {
  switch (action.type) {
    case SET_FORM_DATA:
      return { ...state, formData: action.payload };
    default:
      return state;
  }
};

// Combine reducers if you have other reducers
const rootReducer = combineReducers({
  formData: formDataReducer,
  // Add other reducers here if needed
});

// Define RootState
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
