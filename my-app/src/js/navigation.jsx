import React from "react";
import ReactDOM from "react-dom";

class Navigation extends React.Component{

    render(){
        return <div className="navigation">
            <div><h3>{this.props.name}</h3></div>
        </div>
    }
}

module.exports = Navigation;