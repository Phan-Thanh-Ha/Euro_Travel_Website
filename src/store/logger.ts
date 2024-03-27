"use client";

interface Action {
  type: string;
  payload?: any;
}

interface State {
  // Define your state properties here
}

export const logger = (
  reducer: (prevState: State, action: Action) => State
) => {
  return (prevState: State, action: Action): State => {
    const nextState = reducer(prevState, action);

    if (process.env.NODE_ENV !== "production") {
      console.group(action.type);
      console.log("Prev State:", prevState);
      console.log("Action:", action);
      console.log("Next State:", nextState);
      console.groupEnd();
    }

    return nextState;
  };
};
