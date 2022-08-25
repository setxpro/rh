import styled from 'styled-components';

export const Container = styled.div<{wrapper: boolean}>`
    display: flex;
    flex-direction: column;

    height: ${props => props.wrapper ? '120px' : '0'};
    transition: 1s;
    
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 3px;
    }
    ::-webkit-scrollbar-thumb {
        background: #999;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
`;
