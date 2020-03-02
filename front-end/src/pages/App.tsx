import React from "react";
import Layout from "layout/Layout";
import { createGlobalStyle } from "styled-components";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import MainPage from "pages/MainPage";
import reducers from "reducers";
import rootSaga from "saga";

const GolbalStyle = createGlobalStyle`
  html, body, #root {
    padding:0px;
    margin:0px;
    width:100%;
    height:100%;
  }
`;

const App = () => (
  <>
    <GolbalStyle />
    <Provider store={configStore()}>
      <Layout>
        <MainPage />
      </Layout>
    </Provider>
  </>
);

const configStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const reduxDevTools =
    process.env.NODE_ENV === "development"
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        : (f: any) => f
      : (f: any) => f;

  const store = createStore(
    reducers,
    compose(applyMiddleware(...middlewares), reduxDevTools)
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

export default App;
