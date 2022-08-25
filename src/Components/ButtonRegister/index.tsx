import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from './styles';

interface Props {
    text: string;
}

const ButtonRegister = ( { text } : Props ) => <Button>{text}</Button>
export default ButtonRegister;