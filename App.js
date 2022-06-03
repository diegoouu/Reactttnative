import react,{ useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, KeyboardAvoidingView, StatusBar, 
  TouchableOpacity, FlatList, Modal,TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import TaskList from './src/components/TaskList';//busca o caminho da outra pagina
import * as Animatable from 'react-native-animatable';

const AnimateBtn= Animatable.createAnimatableComponent(TouchableOpacity);

import Img from './src/assets/pngwing.com.png';
export default function App(){//tela visivel configurada
  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  
  function handleAdd(){
    if(input ==='') return;


    const data = {
      key: input,
      task: input
    };

    setTask([...task, data]);
    setOpen(false);
    setInput('');

  }

  function handlDelete(){
    alert('OII')
  }

  return( 
    <SafeAreaView style={styles.container}>
      <StatusBar backgroudColor="#171d31" barStyle="light-content"/>
        
     
      <View style={styles.content}>
        <Text style={styles.title}>Minhas tarefas</Text>
        <Image style={styles.immg} source={Img}/>
      </View>

      <FlatList
      marginHorizonal={10}
      showsHorizontalScroLLIndicador={false}
      data={task}//todos os dados ficarão aqui
      keyExtractor={(item) => String(item.key) }//funçao anonima ue recebe o item que esta dentro
      renderItem={ ({item}) => <TaskList data={item} handleDelete={handlDelete}/> }//vai rendenizar na tela o texto "funçao anonima"(taskList abre em outra pagg)
      />
  
    <Modal animationType="slide" transparent={false} visible={open}>
      <SafeAreaView style={styles.modal}>

        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={() =>setOpen(false)}>
            <Ionicons style={{marginLeft:5, marginRight: 5}}name="md-arrow-back" size={40}color="#171d31"/>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Nova Tarefa </Text>
        </View>

        <Animatable.View style={styles.modalBody}animation="fadeInUp"useNativeDriver>
          <TextInput
          multline={true}
          placeholderTextColor="#747474"
          auttoCorret={false}
          placeholder="O que precisa fazer hoje?"
          style={styles.input}
          value={input}
          onChangeText={ (texto) => setInput(texto) }
          />

          <TouchableOpacity style={styles.handleAdd} onPress={handleAdd}>
            <Text style={styles.handleAddText} >Cadastrar</Text>
          </TouchableOpacity>

        </Animatable.View>

      </SafeAreaView>
      
    </Modal>

      <AnimateBtn
      style={styles.fab}//a variavel puxa style + fab
      useNativeDriver
      animation="bounceInUp"
      duration={1500}//duraçao de entrada do botão flutuante
      onPress={ ()=> setOpen(true) }//abre outra pag
      >
        <Ionicons name="ios-add" size={35} color="#FFF"/>
      </AnimateBtn>
    
  
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#B0C4DE'//fUNDO DO APP
  },
  title:{
    marginTop: 10,//MARGEM Do Topo
    paddingBottom: 10,//DESGRUDAR DEBAIXO
    fontSize: 40,//TAMANHO DA LETRA
    textAlign: 'center',//POSIÇÃO DO TITULO
    color:'#171d31'//COR DA LETRA  
  },
  fab:{
    position: 'absolute', //posição do icone por cima
    width: 60, //largura
    height: 60, //altura
    backgroundColor: '#0094FF',
    alignItems: 'center',//alinhar o icone no centro
    justifyContent: 'center',
    borderRadius: 30,//borda arredondada
    right: 25,
    bottom: 25,
    elevation: 2,//faz uma pequena sombra
    zIndex: 9,//o icone fica acima de tudo
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset:{
      whdth: 1,
      height: 3,
    }
  },
  modal:{
    flex:1,
    backgroundColor: '#B0C4DE',
  },
  modalHeader:{
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalTitle:{
    marginLeft: 15,
    fontSize: 23,
    color: '#171d31',
    
  },
  immg:{
    alignItems:'flex-end',
    flexDirection: 'row-reverse',
    width: 76,
    height: 70,
  
  },
  modalBody:{
    marginTop: 15,
  },
  input:{
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: '#FFF',
    padding: 9,
    height: 85,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 5,
  },
  handleAdd:{
    backgroundColor: '#FFF',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5,
  },
  handleAddText:{
    fontSize: 20,
  }



});