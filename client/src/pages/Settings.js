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
                    Delete all pictograms{" "}
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => localStorage.removeItem("pictograms")}
                    >
                        Clear
                    </Button>
                </li>
            </ul>
        </PictogramBase>
    );
}
