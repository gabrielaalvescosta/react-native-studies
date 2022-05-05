import React from 'react';
import Filho from './Filho';

export default props => {

    let x = 100
    let y = 233 

       return  (
        <Filho mensagem="Olá" outraMensagem="Mundo" soma={y + 10} subtracao={y - x}/>
       ) 
}
