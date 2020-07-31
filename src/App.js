import React from "react";
import "./App.css";
import PictoContainer from "./components/PictoContainer";
import "bootstrap/dist/css/bootstrap.css";
import Drawer from "./components/Drawer";
import { DrawerProvider } from "./context/DrawerContext";
import TopBar from "./components/TopBar";

function App() {
    return (
        <div className="App">
            <DrawerProvider>
                <TopBar />
                <Drawer />
            </DrawerProvider>
            <PictoContainer />
        </div>
    );
}

export default App;
