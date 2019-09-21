export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589
};

export const listReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        item: state.payload,
        completed: false,
        id: Date()
      };
    case "EDIT_TASK":
      return {
        ...state,
        name: action.payload,
        completed: false
      };
    default:
      return state;
  }
};
