import styled from 'styled-components';

export const Container = styled.div<{wrap: boolean}>`
    height: 100vh;
    width: 200px;
    overflow: hidden;
    
    transition: all 1s ease;
    border-right: 1px solid ${props => props.theme.colors.borders};
    border-top: 0;
    border-bottom: 0;
    border-left: 0;

    @media (max-width: 414px) {
        position: absolute;
        z-index: 999;
    }

    background: ${props => props.theme.colors.sidebar};

    @media (max-width: 800px) {
        width: ${props => props.wrap ? '200px' : '0px'};
        border-right: 1px solid ${props => props.wrap ? props.theme.colors.borders : 'transparent'};
    }
    
`;

export const ContentLogo = styled.div`
    width: 100%;
    height: 65px;
    transition: all 1s ease;
    border-bottom: 1px solid ${props => props.theme.colors.borders};
    background: ${props => props.theme.colors.sidebarLogo};

    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 1.8em;
        transition: all 1s ease;
        color: ${props => props.theme.colors.textSidebar};
    }
`;

export const ContentNavArea = styled.div`
    width: 100%;

    nav {
        width: inherit;

        ul {
            width: inherit;
            display: flex;
            flex-direction: column;

            a {
                text-decoration: none;
                padding: 10px;
                font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
                font-size: 1.2rem;
                color: ${props => props.theme.colors.textSidebar};

                transition: all 1s ease;

                &:hover {
                    opacity: 0.83;
                    background: rgba(0, 255, 255, .1);
                    color: #fff;
                }
            }

            .active {
                background: rgba(0, 255, 255, .1);
                color: #fff;
            }
        }
    }
`;