import React, {useState, useEffect} from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from 'native-base';

import ProductList from './ProductList';
const data = require('../data/products.json');

const ProducContainer = ()=>{
    const [products, setProducts] = useState();
    //const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(data);
        return () => {
            setProducts([]);
        }
    }, []);

    return(
        <Container>
            
            <View >
                <Text>Product Container</Text>
                <View style={{marginTop:100}}>
                    <FlatList 
                        numColumns={2}
                        data={products} 
                        renderItem={({item}) => <ProductList key={item.id} item={item}/* feature={item.isFeature}*/ />}
                        keyExtractor={item => item.name}
                    />
                </View>
            </View>
        </Container>
    )
}

const myStyles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ProducContainer;