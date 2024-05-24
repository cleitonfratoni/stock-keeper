import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';

export default function ScanQRCode(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true);
        alert(`QR code com dado ${data} escaneado!`);

        try {
            // Supondo que o QR code contenha um ID do produto
            const response = await axios.get(`http://seu-servidor-api/produto/${data}`);
            const produto = response.data;

            // Adicionar produto à tabela de estoque
            await axios.post('http://seu-servidor-api/estoque', {
                produtoId: produto.id,
                quantidade: 1, // ou a quantidade que você deseja adicionar
                // outros dados necessários
            });

            alert('Produto adicionado ao estoque com sucesso!');
        } catch (error) {
            console.error(error);
            alert('Erro ao adicionar produto ao estoque.');
        }
    };

    if (hasPermission === null) {
        return <Text>Solicitando permissão para usar a câmera</Text>;
    }
    if (hasPermission === false) {
        return <Text>Sem acesso à câmera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Toque para escanear novamente'} onPress={() => setScanned(false)} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});