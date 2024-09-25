import React from "react";
import ReactDOM from "react-dom/client";
// style
import "./style/index.css";
// routes
import AppRouter from "./router/AppRouter";
// i18n and languages
import "./i18n/i18n";
import HandleLanguages from "./components/common/app/HandleLanguages";
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
      <HandleLanguages />
      <AppRouter />
    </Provider>
  </QueryClientProvider>
);
