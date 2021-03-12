import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text, FlatList } from 'react-native';

export default function App() {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [contatos, setContatos] = useState([]);
    const [contadorContatos, setContadorContatos] = useState(0);

    const capturarNome = (nome) => {
        setNome(nome);
    }

    const capturarTelefone = (telefone) => {
        setTelefone(telefone);
    }

    const adcionarContato = () => {
        var contato = {nome: nome, telefone: telefone};
        setContatos(contatos => {
            setContadorContatos(contadorContatos + 2);
            return [{key: contadorContatos.toString(), value: contato},...contatos];
        });
        console.log(contato);
    }

    return(
        <View style={styles.container}>
          <Text 
            style={{
              fontSize: 20,
              fontWeight: "bold"
            }}
              >Insira o contato</Text>
            <View>
                <TextInput style={styles.nomeInput}
                    placeholder="Digite seu nome"
                    onChangeText={capturarNome}
                    value={nome}
                />
                <TextInput style={styles.telefoneInput}
                    placeholder="Digite seu telefone"
                    onChangeText={capturarTelefone}
                    value={telefone}
                />
            </View>
            <View style={styles.buttonInput}>
                <Button 
                  title="Adcionar"
                  onPress={adcionarContato}
                />
            </View>
            <Text style={styles.subTitle}>Contatos</Text>
            <FlatList
                data={contatos}
                renderItem={
                    contato =>
                    <View 
                      key={contato.item.value.key} 
                      style={{
                        marginTop: 15
                        }}
                      >
                        <Text>
                            Nome: {contato.item.value.nome}
                        </Text>
                        <Text>
                            Telefone: {contato.item.value.telefone}
                        </Text>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 25,
    },
    
    nomeInput:{
      marginTop: 25,
      padding: 10,
      width: 300,
    },

    telefoneInput:{
      marginTop: 25,
      padding: 10,
      width: 300,
    },

    buttonInput: {
      marginTop: 25,
    },

    subTitle: {
      fontWeight: "bold",
      fontSize: 20,
      marginTop: 50,
    }
});
