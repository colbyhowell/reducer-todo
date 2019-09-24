export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export const listReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "COMPLETE_TASK":
      return state.map(v => {
        if (v.id === action.payload.id) {
          return {
            ...v,
            completed: !v.completed
          };
        } else {
          return v;
        }
      });
    case "CLEAR_TASKS":
      return state.filter(eachObject => !eachObject.completed);
    // you can write === false if needed
    default:
      return state;
  }
};
