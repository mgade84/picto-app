import React, { useState } from "react";
import useFlaticonSearch from "../hooks/useFlaticonSearch";

export default function PictoAdder({ onAdd }) {
    const [query, setQuery] = useState("");
    const [limit, setLimit] = useState(1);

    const { icons, error } = useFlaticonSearch(query, limit, 1);

    function onTest() {
        setQuery("sunflower");
        setLimit(50);
    }

    return (
        <div>
            <button onClick={onAdd} className="btn btn-success btn-sm m-1">
                Add
            </button>
            <button onClick={onTest} className="btn btn-warning btn-sm m-1">
                Test
            </button>
            {error && <div>{JSON.stringify(error.res.data)}</div>}
            {icons.map(icon => (
                <div key={icon.id}>
                    <img alt="" src={icon.images.svg} height="50" width="50" />
                </div>
            ))}
        </div>
    );
}
