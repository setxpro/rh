
import { ButtonType } from '../../Types/ButtonType';
import { Button } from './styles';

const BtnLogin = ( { text, onClick } : ButtonType ) => <Button onClick={onClick}>{text}</Button>

export default BtnLogin;