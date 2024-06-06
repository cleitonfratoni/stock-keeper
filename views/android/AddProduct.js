import React, { useState, useEffect } from 'react';
import {
    Image,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Alert,
    TextInput
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { css } from '../../assets/css/Css';
import { addToStock, getProductNames } from '../../src/apiGateway';

export default function AddProduct(props){
    const [checked, setChecked] = useState('in');
    const [productNames, setProductNames] = useState([]);
    const [selectedProductName, setSelectedProductName] = useState('');
    const [quantity, setQuantity] = useState('');

    useEffect(() => {
        // Função para buscar os nomes dos produtos do banco de dados
        const fetchProductNames = async () => {
            try {
                const names = await getProductNames();
                setProductNames(names);
            } catch (error) {
                Alert.alert('Erro', 'Erro ao carregar nomes de produtos');
            }
        };

        fetchProductNames();
    }, []);

    const sendForm = async () => {
        if (selectedProductName === '' || quantity === '') {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
        try {
            const stockData = {
                productName: selectedProductName,
                inOut: checked,
                qtd: parseFloat(quantity)
            };
            const response = await addToStock(stockData);
            Alert.alert('Sucesso', 'Produto adicionado ao estoque com sucesso!');
            setSelectedProductName('');
            setQuantity('');
        } catch (error) {
            Alert.alert('Erro', "Erro ao adicionar o produto ao estoque");
        }
    };
    return(
        <SafeAreaView style={css.container_tela_padrao}>
            <View>
                <Image style={[css.img_logo_gray]} source={require('../../assets/img/logo_gray.jpeg')}/>
                <Text style={css.identify_label}>Adicionar Produtos</Text>
            </View>
            <View>
                <View style={css.picker}>
                    <Picker
                        selectedValue={selectedProductName}
                        onValueChange={(itemValue) => setSelectedProductName(itemValue)}
                        style={css.pickerItem}
                    >
                        <Picker.Item label="Selecione o Nome do Produto" value=""/>
                        {productNames.map((product, index) => (
                            <Picker.Item key={index} label={product.productName} value={product.productName} />
                        ))}
                    </Picker>
                </View>
                <View>
                    <TextInput
                        style={css.text_input}
                        placeholder='Quantidade adicionada ao estoque'
                        keyboardType='numeric'
                        value={quantity}
                        onChangeText={setQuantity}
                    />
                </View>
                <View style={css.radioButtonContainer}>
                    <View style={css.radioButtonRow}>
                        <RadioButton
                            value="in"
                            status={ checked === 'in' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('in')}
                            color='#fff'
                        />
                        <Text style={css.radioButtonText}>Entrada</Text>
                    </View>
                    <View style={css.radioButtonRow}>
                        <RadioButton
                            value="out"
                            status={ checked === 'out' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('out')}
                            color='#fff'
                        />
                        <Text style={css.radioButtonText}>Saída</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={[css.container_button, {width:250, marginLeft: 40}]}
                    onPress={sendForm}
                >
                    <Text style={css.text_button}>Adicionar Produto</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
