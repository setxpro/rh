import styled from 'styled-components';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

export const ContainerGeneral = styled(Container)`
    #input {
        transition: all 1s ease;
        color: ${props => props.theme.colors.text};
        border-bottom: 1px solid ${props => props.theme.colors.borders};
        
    }
    #date {
        transition: all 1s ease;
        color: ${props => props.theme.colors.text};
        border-bottom: 1px solid ${props => props.theme.colors.borders};
    }

        p {
            width: 200px;
            color: #999;
            padding-bottom: 5px;
            margin-top: 4px;
            border-bottom: 1px solid ${props => props.theme.colors.borders};
            padding-right: 5px;
            transition: all 1s ease;
        }
        span {
            color: #999;
            padding-bottom: 5px;
            margin-top: 4px;
            border-bottom: 1px solid ${props => props.theme.colors.borders};
            padding-right: 5px;
            transition: all 1s ease;
        }
    
    label {
        transition: all 1s ease;
        color: #999;
    }
`;
export const InputTextField = styled(TextField)`
    
`;
