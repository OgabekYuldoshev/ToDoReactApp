import React, { Component } from 'react';

class Show extends Component {
    state = {}
    render() {
        return (
            <div className="md:px-20 px-10">
                {this.props.items.map(item => <div
                    className="bg-gray-200 flex justify-between items-center p-5 my-2 rounded"
                    key={item.id}>
                    <p>{item.item}</p>
                    <i onClick={() => this.props.onDelete(item.id)} class="fas fa-trash-alt"></i>
                </div>)}
            </div>
        );
    }
}

export default Show;