import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/ToDoList'

const getTodos = (todos) => {
  return todos
}

const mapStateToProps = state => ({
  todos: getTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)