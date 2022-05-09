import React from 'react';
import { Text, FlatList } from 'react-native';
import Produtos from './produtos';

export default props => {

    const produtoRender = ({ item: p }) => {
        return <Text>{p.id} --- {p.nome}</Text>
    }

    return (
        <>
        <FlatList 
                data={produtos}
                renderItem={produtoRender}
                keyExtractor={i => `${i.id}`}
                />
        </>
    )
}