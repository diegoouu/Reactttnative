import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';//animação de entrada


export default function TaskList({data, handlDelete }){
    return(
        <Animatable.View 
        style={styles.container}
        animation="bounceIn"
        useNativeDriver
        >
            <TouchableOpacity onPress={ ()=>handlDelete(data) }>
                <Ionicons name="md-checkmark-circle" size={30} color="#121212"/>
            </TouchableOpacity>
          <View>
              <Text style={styles.task}>{data.task}</Text>
          </View>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,//ppega todo o tamanho da tela
        margin: 8,//margem de todos os lados
        flexDirection: 'row',//icone ao lado do texto
        alignItems:'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 7,//terr um pequeno espaço no nome comprar pão
        elevation: 1.5,
        shadowColor:'#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 1,
            height: 3,
        }

    },
    task:{
        color:'#121212',
        fontSize: 20,
        paddingLeft:8,//desgrudar um do outro
        paddingRight: 20,
    }

})