import React from 'react';
import { Text } from 'react-native';
import Produtos from './produtos';

export default props => {

    // function que retorna a lista de arrays
    // {Produtos.map(p => {return <Text key={p.id}>{p.id} - {p.nome} custa R$ {p.preco}</Text>})}

    function obterLista() {
        return Produtos.map(p => {
            return (<Text key={p.id}>{p.id} - {p.nome} custa R$ {p.preco}</Text>)
        })
    }

    return (
        <>
        <Text>Lista de produtos</Text>
        {obterLista()}
        </>
    )
}