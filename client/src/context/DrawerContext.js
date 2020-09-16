import React, { useState, useContext } from "react";

const DrawerContext = React.createContext();
const DrawerUpdateContext = React.createContext();

export function useDrawer() {
    return useContext(DrawerContext);
}

export function useDrawerUpdate() {
    return useContext(DrawerUpdateContext);
}

export function DrawerProvider({ children }) {
    const [open, setOpen] = useState(false);

    function setOpenDrawer(open) {
        setOpen(open);
    }

    return (
        <DrawerContext.Provider value={open}>
            <DrawerUpdateContext.Provider value={setOpenDrawer}>
                {children}
            </DrawerUpdateContext.Provider>
        </DrawerContext.Provider>
    );
}
