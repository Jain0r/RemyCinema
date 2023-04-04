import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes";
import { ReactQueryDevtools } from "react-query/devtools";
import "./styles/base.scss";
import store, { Persistor } from "./redux/store";
import { QueryClientProvider, QueryClient } from "react-query";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={Persistor}>
          <App />
        </PersistGate>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </React.StrictMode>
);
