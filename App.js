import React from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage} from 'react-native';
import Header from './app/components/Header';
import Subtitle from './app/components/Subtitle';
import Input from './app/components/Input';
import TodoItem from './app/components/TodoItem';

export default class App extends React.Component {
  constructor(props){
    super(props); //React.component의 속성을 그대로 가져와라.
    this.state={//초기 상태
      inputValue:"",
      todos:[
        {
          title: "여기에",
        },
        {
          title:"추가한",
        },
        {
          title:"사항이",
        },
        {
          title:"표시됩니다.",
        },
      ]
    }
  }
  componentWillMount(){ //메소드를 가져와서 getData 실행
    this.getData()
  }

  storeData = () =>{
    AsyncStorage.setItem('@todo:state', JSON.stringify(this.state));
  }
  getData = () =>{
    AsyncStorage.getItem('@todo:state').then((state) => {
      if (state !== null) {
        this.setState(JSON.parse(state));
      }
    });
  }
  _makeTodoItem = ({ item, index }) =>{
    return(
      <TodoItem name ={item.title}
      isComplete={item.isComplete}
      changeComplete={() => {
        const newTodo = [...this.state.todos];
        newTodo[index].isComplete = !newTodo[index].isComplete;
        this.setState({todos:newTodo}, this.storeData);
      }}
      deleteItem = {() => {
        const newTodo = [...this.state.todos];
        newTodo.splice(index,1); //삭제기능 splice(start, deleteCount, item)
        this.setState({todos:newTodo}, this.storeData);
      }}
      />
    );
  }
  _changeText = (value) => {
    this.setState({inputValue: value});
  }
  _addTodoItem = () => {
    if(this.state.inputValue != ''){
      const prevTodo = this.state.todos;
      const newTodo = { title: this.state.inputValue, isComplete:false};
      this.setState({
        inputValue: "",
        todos: prevTodo.concat(newTodo) //concat - 연결
      }, this.storeData);
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
          {/* <TodoItem name ="코딩하기"/>
          <TodoItem name ="운동하기"/>
          <TodoItem name ={this.state.todos[0].title}/> */}
          <FlatList
          data={this.state.todos}
          renderItem={this._makeTodoItem} // 언더 스코어 _ = 클래스 안에 선언된 메서드
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
