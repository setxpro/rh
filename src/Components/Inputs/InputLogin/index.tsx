import { InputType } from '../../../Types/InputType';
import { Input } from './styles';
const InputLogin = ( { type, name, placeholder, value, onChange } : InputType) => <Input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}/>

export default InputLogin;