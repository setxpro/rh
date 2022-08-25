import { useAuth } from "../Hooks/useAuth";
import LoginScreen from "../Screens/LoginScreen";

const SecurityRoutes = ( { children } : { children : JSX.Element } ) => {

    const auth = useAuth();

    if (!auth.user) {
        return <LoginScreen/>
    }
    return children;
}

export default SecurityRoutes;