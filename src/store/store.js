import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./userReducer";

const store = configureStore({
  reducer: userReducer,
});

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
