import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    transition: all 1s ease;
    width: 200px;

    border: 1px solid #1111;
    border-top: 0;
    border-bottom: 0;
    border-left: 0;

`;

export const ContentLogo = styled.div`
    width: 100%;
    height: 65px;
    border-bottom: 1px solid #1111;

    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 1.8em;
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
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                font-size: 1.2rem;
                color: #333;

                transition: all 1s ease;

                &:hover {
                    opacity: 0.83;
                    background: #059;
                    color: #fff;
                }
            }
        }
    }
`;