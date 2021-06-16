import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Name from "./Name";
const App = () => {

  return (
    <Provider store={store}>
     <Name/>
    </Provider>
  );
};
export default App;
