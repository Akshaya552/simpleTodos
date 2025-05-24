import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    editing: false,
    updatedTitle: '',
  }

  handleEdit = () => {
    const {todoDetails} = this.props
    this.setState({editing: true, updatedTitle: todoDetails.title})
  }

  handleSave = () => {
    this.setState({editing: false})
  }

  handleChange = e => {
    this.setState({updatedTitle: e.target.value})
  }

  render() {
    const {todoDetails, deleteTodo, toggleComplete} = this.props
    const {editing, updatedTitle} = this.state
    return (
      <li
        className={todoDetails.completed ? 'todo-item completed' : 'todo-item'}
      >
        {editing ? (
          <>
            <input
              className="editing-todo"
              type="text"
              value={updatedTitle}
              onChange={this.handleChange}
            />
            <button
              className="save-button"
              onClick={this.handleSave}
              type="button"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <div className="row-fix-container">
              <input
                className="checkbox-input"
                type="checkbox"
                checked={todoDetails.completed}
                onChange={() => toggleComplete(todoDetails.id)}
              />
              <p
                className={
                  todoDetails.completed === true
                    ? 'title-todo strike-down'
                    : 'title-todo'
                }
              >
                {todoDetails.title}
              </p>
            </div>
            <div className="row-fix-container">
              <button
                className="edit-button"
                onClick={this.handleEdit}
                type="button"
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => deleteTodo(todoDetails.id)}
                type="button"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </li>
    )
  }
}

export default TodoItem
