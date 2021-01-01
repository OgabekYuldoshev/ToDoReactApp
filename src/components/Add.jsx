import React, { Component } from 'react';

class Add extends Component {
    render() {
        return (
            <div className="md:px-20 px-10">
                <div className="bg-blue-500 flex justify-between rounded p-5 mt-5">
                    <input
                        type="text"
                        className="focus:outline-none rounded py-1 px-4 w-full"
                        placeholder="Write..."
                        value={this.props.value}
                        onChange={this.props.onUpdate} />
                    <button
                        className="focus:outline-none bg-gray-100 rounded py-1 ml-5 px-4"
                        onClick={this.props.onAdd}
                    >Add</button>
                </div>
            </div>
        );
    }
}

export default Add;