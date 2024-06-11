import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    FlatList,
} from 'react-native';
import { css } from '../../assets/css/Css';
import { getStockData } from '../../src/apiGateway';

export default function Stock(props) {
    const [stockData, setStockData] = useState([]);

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const data = await getStockData();
                setStockData(data);
            } catch (error) {
                console.error('Error fetching stock data:', error);
            }
        };

        fetchStockData();
    }, []);

    const renderItem = ({ item }) => (
        <View style={css.row}>
            <Text style={css.cell}>{item.productName}</Text>
            <Text style={css.cell}>{item.qtd_total}</Text>
        </View>
    );

    return (
        <SafeAreaView style={css.safeArea}>
            <View style={css.container}>
                <Text style={css.title}>Estoque</Text>
                <View style={css.table}>
                    <View style={css.row}>
                        <Text style={css.headerCell}>Nome do Produto</Text>
                        <Text style={css.headerCell}>Quantidade Total</Text>
                    </View>
                    <FlatList
                        data={stockData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.productName}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}