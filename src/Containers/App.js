import React, { Component } from "react";
import Layout from "../Components/Layout/Layout";
import Aux from "../hoc/Auxiliary";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";


class App extends Component {
  render()
  {
    return (
      <Aux>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </Aux>
    );
  }
}

export default App;
