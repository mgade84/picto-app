import { Button } from "@material-ui/core";
import React from "react";
import PictogramBase from "../components/PictogramBase";

export default function Settings() {
    return (
        <PictogramBase>
            <h1>Settings</h1>
            <h2>Search</h2>
            <ul>
                <li>Preferred style - TODO</li>
                <li>Number of results - TODO</li>
            </ul>

            <h2>Danger Zone</h2>
            <ul>
                <li>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => localStorage.removeItem("pictograms")}
                    >
                        Clear pictograms
                    </Button>
                </li>
            </ul>
        </PictogramBase>
    );
}
