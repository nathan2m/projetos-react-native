import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Text, View} from 'react-native';

class Todos extends Component {
  render() {
    return (
      <View className="Todos">
        {this.props.todos.map(todo => (
          <Text key={todo.id}>{todo.text}</Text>
        ))}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Todos);
