import React from "react";
import "./App.css";
import Header from "./components/Header";
import PictoContainer from "./components/PictoContainer";
import "bootstrap/dist/css/bootstrap.css";

function App() {
    return (
        <div className="App">
            <Header />
            <PictoContainer />
        </div>
    );
}

export default App;
