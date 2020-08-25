import React from "react";
import "./App.css";
import PictoContainer from "./components/PictoContainer";
import "bootstrap/dist/css/bootstrap.css";
import Drawer from "./components/Drawer";
import { DrawerProvider } from "./context/DrawerContext";
import TopBar from "./components/TopBar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";
import Settings from "./pages/Settings";

export const AppName = "Picto App";

function App() {
    return (
        <div className="App">
            <Router>
                <DrawerProvider>
                    <TopBar />
                    <Drawer />
                </DrawerProvider>
                <Route exact path="/" component={PictoContainer} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/about" component={About} />
            </Router>
        </div>
    );
}

export default App;
