import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormData {
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

interface RootState {
  formData: FormData;
}

const initialState: RootState = {
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

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData(state, action: PayloadAction<FormData>) {
      state.formData = action.payload;
    },
  },
});

export const { setFormData } = formSlice.actions;
export default formSlice.reducer;
