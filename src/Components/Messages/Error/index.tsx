import { LabelError } from './styles';

interface Props {
    message: string;
}

const ErrorMessage = ( { message } : Props ) => <LabelError>{message}</LabelError>

export default ErrorMessage;