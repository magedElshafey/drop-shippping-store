import React from "react";
import ReactDOM from "react-dom/client";
// style
import "./style/index.css";
// routes
import AppRouter from "./router/AppRouter";
// i18n
import "./i18n/i18n";
// react query
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// redux
import { Provider } from "react-redux";
import store from "./store/store";
// query client
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </QueryClientProvider>
);
