import React from "react";
import ReactDOM from "react-dom";
import App, { userArray } from "./app.jsx";
import { isRegExp } from "util";

class Content extends React.Component{
    constructor(){
        super()
        this.state = {
            name:""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            name: e.target.value
        })

    }

    render(){
        let currentName = this.props.name.name
        
        return (<div className="content">
            {currentName}
            <input value={this.state.name} id="inputname" onChange={this.handleChange}></input><br></br>
            <button onClick={() => this.props.updateName(this.state.name)}>Update Name</button>
        </div>)
    }
}

module.exports = Content;