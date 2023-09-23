export const initialState = {
  email: "",
  phone_number: "",
  team_name: "",
  group_size: 0,
  project_topic: "",
  category: 0,
  privacy_policy_accepted: false,
};

export const actionTypes = {
  SET_FIELD: "SET_FIELD",
  TOGGLE_AGREEMENT: "TOGGLE_AGREEMENT",
  RESET_FORM: "RESET_FORM",
};

export const registrationReducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.SET_FIELD:
      // Parse numeric fields as integers
      const value =
        action.field === "group_size" || action.field === "category"
          ? parseInt(action.value, 10)
          : action.value;

      return { ...state, [action.field]: value };
    case actionTypes.TOGGLE_AGREEMENT:
      return {
        ...state,
        privacy_policy_accepted: !state.privacy_policy_accepted,
      };
    case actionTypes.RESET_FORM:
      return initialState;
    default:
      return state;
  }
};
