import styled from 'styled-components';

export const Container = styled.div`
    height: 510px;
    margin-top: 5px;
    transition: all 1s ease;
    border: 1px solid ${props => props.theme.colors.borders};
    border-radius: 1rem;

    background: ${props => props.theme.colors.content};
`;

export const LayoutScreen = styled.div`
    width: 100%;
    padding: 5px 10px;
`;