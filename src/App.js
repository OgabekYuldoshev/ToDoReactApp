import React from 'react';
import Navbar from "./components/Navbar";
import Add from "./components/Add"
import Show from "./components/Show"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        item: "",
        items: [],
    }
    this.updateState = this.updateState.bind(this)
    this.addItem = this.addItem.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
}
updateState(e) {
    this.setState({ item: e.target.value })
}
addItem() {
    if(this.state.item !== "" && this.state.item !== null){
      this.setState(() => {
        this.state.items.push({
            id: this.state.items.length + 1,
            item: this.state.item,
        })
    })
    }
    this.setState({ item: "" })
}
handleDelete(id){
    const items = this.state.items.filter(item =>item.id !== id)
    this.setState({items})
}
  render() { 
    return ( 
        <div>
          <Navbar items={this.state.items.length} />
          <Add
          value={this.state.item}
          onUpdate={this.updateState}
          onAdd={this.addItem}/>
          <Show
          onDelete={this.handleDelete}
          items={this.state.items}/>
          
        </div>
     );
  }
}
 
export default App;
