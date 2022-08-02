import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 65px;

    transition: all 1s ease;
    background: ${props => props.theme.colors.header};
    border: 1px solid ${props => props.theme.colors.borders};
    border-top: 0;
    border-left: 0;
    border-right: 0;
    
    padding: 0 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;
