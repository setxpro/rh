import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.main};
`;
export const ContentArea = styled.div`
    width: 50%;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    border-bottom: 5px solid #9999;
    border-top: 5px solid #9999;
    background: ${props => props.theme.colors.content};

    h1 {
        font-family: 'Courgette', cursive;
        position: absolute;
        top: 50px;
        font-size: 4em;
        color: ${props => props.theme.colors.text};
    }
`;
export const FormArea = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 50%;
`;

export const ContentAreaCopy = styled.div`
    position: absolute;
    bottom: 1rem;

    p, a {
        color: #555;
    }
`;