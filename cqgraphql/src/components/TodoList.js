import React, {Component} from 'react';

import {Input, Form, Text, View} from 'react-native';

import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';

class TodoList extends Component {
  state = {
    newTodoText: '',
  };

  addTodo = () => {
    const {newTodoText} = this.state;

    this.props.addTodo({
      variables: {text: newTodoText},
      update: (proxy, {data: {createTodo}}) => {
        this.props.todos.refetch();
      },
    });
  };

  renderTodoList = () => (
    <View>
      {this.props.todos.allTodoes.map(todo => (
        <Text key={todo.id}>{todo.text}</Text>
      ))}
    </View>
  );

  render() {
    const {todos} = this.props;

    return (
      <>
        {todos.loading ? <Text>Carregando...</Text> : this.renderTodoList()}

        <Form>
          <Input
            type="text"
            value={this.state.newTodoText}
            onChange={e => this.setState({newTodoText: e.target.value})}
          />
          <Input type="submit" value="Criar" onClick={this.addTodo} />
        </Form>
      </>
    );
  }
}

const TodosQuery = gql`
  query {
    allTodoes {
      id
      text
      completed
    }
  }
`;

const TodoMutation = gql`
  mutation ($text: String!) {
    createTodo(text: $text) {
      id
      text
      completed
    }
  }
`;

export default compose(
  graphql(TodosQuery, {name: 'todos'}),
  graphql(TodoMutation, {name: 'addTodo'}),
)(TodoList);
