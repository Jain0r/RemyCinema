import { combineReducers } from "redux";
import shopReducer from "./shopReducer";
import notificationsReducer from "./notificationsReducer";
const rootReducer = combineReducers({
  shop: shopReducer,
  notifications: notificationsReducer,
});

export default rootReducer;
