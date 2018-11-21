import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '.../store';

import TodoList from '.../TodoList';
import Counter from '.../Counter';


class Teams extends Component {

    constructor(props) {
        super(props)


        this.state = {
            teams: [
                { "id": "01", "nome": "Nome 1" },
                { "id": "02", "nome": "Nome 2" },
                { "id": "03", "nome": "Nome 3" },
                { "id": "04", "nome": "Nome 4" }
            ]
        }
        console.log("Props: ", props)
    }

    render() {
        return (
            <div>
                <span>Bem Nice</span>
                <ul>
                    <li>Allooo</li>
                    <Provider store={store}>
                        <div>
                            <TodoList />
                            <Counter />
                        </div>
                    </Provider>
                </ul>
            </div>

        )
    }
}

export default Teams;