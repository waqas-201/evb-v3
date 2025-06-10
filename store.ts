import { configureStore } from "@reduxjs/toolkit";
import CaseStudyReducer from "./src/featuers/casestudy/caseStudySlice";
import featuredEventReducer from "./src/featuers/casestudy/eventsDataSlice";

export const store = configureStore({
  reducer: {
    caseStudyModel: CaseStudyReducer,
    eventReducer: featuredEventReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
