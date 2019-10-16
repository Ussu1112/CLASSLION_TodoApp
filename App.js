import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './app/components/Header';
import Subtitle from './app/components/Subtitle';
import Input from './app/components/Input';
import TodoItem from './app/components/TodoItem';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      inputValue:"",
      todos:[
        {
          title: "1번 타이틀",
        },
        {
          title:"2번 타이틀",
        },
      ]
    }
  }
  _makeTodoItem = ({ item, index }) =>{
    return(
      <TodoItem name ={item.title}
      isComplete={item.isComplete}
      changeComplete={() => {
        const newTodo = [...this.state.todos];
        newTodo[index].isComplete = !newTodo[index].isComplete;
        this.setState({todos:newTodo});
      }}/>
    );
  }
  _changeText = (value) => {
    this.setState({inputValue:value});
  }
  _addTodoItem = () => {
    if(this.state.inputValue != ''){
      const prevTodo = this.state.todos;
      const newTodo = { title: this.state.inputValue, isComplete:false};
      this.setState({
        inputValue: '',
        todos: prevTodo.concat(newTodo)
      });
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.headercenter}>
          <Header/>
        </View>
        <View style={styles.subtitleposition}>
          <Subtitle title="해야 할 일"/>
          <Input
            value = {this.state.inputValue}
            changeText={this._changeText}
            addTodo={this._addTodoItem}/>
        </View>
        <View style={styles.subtitleposition}>
          <Subtitle title="해야 할 일 목록"/>
          <TodoItem name ="코딩하기"/>
          <TodoItem name ="운동하기"/>
          <TodoItem name ={this.state.todos[0].title}/>
          <FlatList
          data={this.state.todos}
          renderItem={this._makeTodoItem}
          keyExtractor={(item,index) => { return `${index}`}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headercenter:{
    alignItems: 'center',
    borderWidth: 5,
  },
  subtitleposition:{
    marginLeft:50,
  }
});
