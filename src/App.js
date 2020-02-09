import React from "react";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import AddContact from "./components/Contacts/AddContact";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
