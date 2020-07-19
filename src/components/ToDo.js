import React from 'react'
import PropTypes from 'prop-types'
import DeleteTodo from '../containers/RemoveTodo'
import EditTodo from '../containers/EditTodo'

class Todo extends React.Component{
	constructor(props){
		super(props);
		this.state={
			editing: false
		}
	}

	render(){
		return(
			<div >
				{!this.state.editing ? 
					<div className="todo">
						<input type="checkbox" checked={this.props.completed} onChange={this.props.onChange} />
						<div
							onClick={ ()=>{this.setState({editing: true})} }
							style={{
								textDecoration: this.props.completed ? 'line-through' : 'none'
							}}
							className='todo-item'
						>
							{this.props.text}
						</div>
						<div>
							<DeleteTodo id={this.props.id} />
						</div>
					</div>
					: <EditTodo
						id={this.props.id}
						text={this.props.text}
						doneEditing={()=>this.setState({editing: false})}
					/>
				}
			</div>
		)
	}
}

Todo.propTypes = {
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default Todo