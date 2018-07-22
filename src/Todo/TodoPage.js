import React from "react";
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Axios from 'axios'

class TodoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        Axios.get('http://127.0.0.1:8080/api/planets').then((data) => {
            console.log(data);
        });
    }

    addTodo(val) {
        this.state.data.push({id: this.state.data.length, text: val});
        this.setState({data: this.state.data});
    }

    handleRemove(id) {
        const remainder = this.state.data.filter((todo) => {
            if (todo.id !== id) return todo;
        });

        this.setState({data: remainder});
    }

    render() {
        return (
            <div>
                <div>
                    <h1>to-do ({this.state.data.length})</h1>
                </div>
                <div>
                    <TodoForm addTodo={this.addTodo.bind(this)}/>
                    <TodoList
                        todos={this.state.data}
                        remove={this.handleRemove.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default TodoPage;
