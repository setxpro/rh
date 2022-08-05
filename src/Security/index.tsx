const SecurityRoutes = ( { children } : { children : JSX.Element } ) => {

    const auth = true;

    if (!auth) {
        return <h1>Formulário de login</h1>
    }
    return children;
}

export default SecurityRoutes;