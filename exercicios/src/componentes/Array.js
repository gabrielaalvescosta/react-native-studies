import React from "react";
import { Text } from 'react-native';

import Padrao from "../estilo/Padrao";

export default props => [
    <Text style={Padrao.ex} key={1}>Este componente possui um return de array ao invés de "return()"</Text>,
    <Text key={2}>Basta escrever export default props e usar colchetes, separando cada elemento com vírgula</Text>
]
