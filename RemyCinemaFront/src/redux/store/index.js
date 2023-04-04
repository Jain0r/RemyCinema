import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "main-root",
  storage,
  whitelist: ["shop"], // Agrega aquí el reducer que deseas persistir, excluyendo el reducer que maneja las notificaciones
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const Persistor = persistStore(store);

export { Persistor };
export default store;
