import React from "react"

class Navbar extends React.Component {
  render() {
    return (
      <div className="bg-blue-500 flex items-center justify-between py-5 px-10 md:px-20">
        <h1 className="text-white font-bold text-lg">ToDo React App</h1>
        <p className="py-1 px-4 rounded bg-gray-200">{this.props.items}</p>
      </div>
    );
  }
}
export default Navbar