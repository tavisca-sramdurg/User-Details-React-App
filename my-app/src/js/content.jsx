import React from "react";
import ReactDOM from "react-dom";

class Content extends React.Component{

    constructor () {
        super()
        this.state ={
            name: "Shravan Ramdurg"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            name: e.target.value
        })
    }

    render(){
        return <div className="content">
            <section>
            </section>
            <input value={this.state.name} onChange={this.handleChange}></input><br></br>
            <button onClick={() => this.props.updateName(this.state.name)}>Update</button>
        </div>
    }
}

module.exports = Content;