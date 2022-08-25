import { createContext, useState } from "react";
import { ChildrenReactNode } from "../../Types/ChildrenType";

interface Props {
    openTable: boolean;
    openServices: boolean;
    wrapperTable: () => void;
    wrapperServices: () => void;
}

export const SidebarContext = createContext({} as Props);

export const SidebarProvider = ( { children } : ChildrenReactNode ) => {
    const [openTable, setOpenTable] = useState(false);
    const [openServices, setOpenServices] = useState(false);

    const wrapperTable = () => {
        setOpenTable(!openTable)
        setOpenServices(false);
    }
    const wrapperServices = () => {
        setOpenServices(!openServices)
        setOpenTable(false);
    }

    return <SidebarContext.Provider value={{
        openTable,
        wrapperTable,
        openServices,
        wrapperServices
    }}>{children}</SidebarContext.Provider> 
}