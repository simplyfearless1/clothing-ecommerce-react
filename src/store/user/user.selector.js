import { createSelector } from "reselect";

const GetUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
  [GetUserReducer],
  ({ currentUser }) => currentUser
);
