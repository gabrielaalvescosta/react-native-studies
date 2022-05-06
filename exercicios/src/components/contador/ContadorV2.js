import React, { useState } from "react";
import { Text } from 'react-native';
import ContadorDisplay from "./ContadorDisplay";
import Estilo from '../estilo';
import ContadorBotoes from "./ContadorBotoes";

export default props => {

    const [ num, setNum ] = useState(0);

    const incrementa = () => setNum(num + 1);
    const decrementa = () => setNum(num - 1);

    return (
        <>
        <Text style={Estilo.txtG}>
            Contador
        </Text>
        <ContadorDisplay num={num} />
        <ContadorBotoes inc={incrementa} dec={decrementa} />
        </>
    )
}