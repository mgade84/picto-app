import React from "react";
import "./App.css";
import PictoContainer from "./components/PictoContainer";
import Drawer from "./components/Drawer";
import { DrawerProvider } from "./context/DrawerContext";
import TopBar from "./components/TopBar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";
import Settings from "./pages/Settings";
import { Pages } from "./SiteMap";

export const AppName = "Picto";

function App() {
    return (
        <div className="App">
            <Router>
                <DrawerProvider>
                    <TopBar />
                    <Drawer />
                </DrawerProvider>
                <Route exact path={Pages.home} component={PictoContainer} />
                <Route exact path={Pages.settings} component={Settings} />
                <Route exact path={Pages.about} component={About} />
            </Router>
        </div>
    );
}

export default App;
