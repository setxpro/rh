import { useContext } from "react"
import { SidebarContext } from "../Contexts/SidebarContext"

export const useSidebar = () => {
    const sidebar = useContext(SidebarContext);
    return sidebar;
}