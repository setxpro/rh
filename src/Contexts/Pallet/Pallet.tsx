import { createContext, ReactNode, useState } from "react";
import { useSidebar } from "../../Hooks/useSidebar";

type PalletProps = {
    cHome: boolean;
    cTable: boolean;
    getHome: () => void;
    getTable: () => void;
}

export const PalletContext = createContext({} as PalletProps)

export const PalletProvider = ( { children } : { children : ReactNode } ) => {

    const [cHome, setCHome] = useState(true);
    const [cTable, setCTable] = useState(false);
    const { wrapperTable } = useSidebar()


    function getHome() {
        setCHome(true);
        setCTable(false);
    }
    function getTable() {
        setCTable(true);
        setCHome(false);
        wrapperTable();
    }

    return (
        <PalletContext.Provider value={{ cHome, cTable, getHome, getTable }}>{children}</PalletContext.Provider>
    )
}