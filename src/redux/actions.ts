import { Action } from "redux";

export const SET_FORM_DATA = "SET_FORM_DATA";

interface SetFormDataAction extends Action {
  type: typeof SET_FORM_DATA;
  payload: FormData; // Assuming FormData is the type of your form data
}

export const setFormData = (formData: FormData): SetFormDataAction => ({
  type: SET_FORM_DATA,
  payload: formData,
});
