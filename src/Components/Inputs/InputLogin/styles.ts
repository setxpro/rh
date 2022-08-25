import styled from 'styled-components';

export const Input = styled.input`
    padding: 1rem 3px;
    width: 400px;
    border-radius: 8px;
    font-size: 1.3em;
    outline: none;
    border: 2px solid #999;
    background: transparent;
    color: ${(props) => props.theme.colors.text};
`;
