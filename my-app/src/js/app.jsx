import React from "react";
import ReactDOM from "react-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Content from "./content.jsx";
import Navigation from "./navigation.jsx";

export var userArray = [{
    name: "Shravan Ramdurg",
    id: 0
},{
    name: "Dhruv Ramdurg",
    id: 1
},{
    name: "xyz Ramdurg",
    id: 2
}];


class App extends React.Component{

    constructor(){
        super();
        this.state = {
            userArray: userArray,
           
            selected : 0
        }
        // this.updateSelectedId.bind(this);
    }

    updateName (name) {
        var newArray = this.state.userArray;
        newArray[this.state.selected].name = name
        this.setState({
            userArray: newArray
        });
    }

    updateSelectedId(id){
        console.log("updateSelected id "+id)
        this.setState({
            selected: id
        });
    }


    render(){
        return <div className="main">
                    <Header />
                    <Content  name={this.state.userArray[this.state.selected]}  updateName={this.updateName.bind(this)} />
                    <Navigation userArray={this.state.userArray} updateSelectedId={this.updateSelectedId.bind(this)} />
                    <Footer />
                </div>;
    }
}


//render it through react-dom
ReactDOM.render(
    <App />,
    document.getElementById('OuterDiv')
);

module.exports = App;
export default {userArray};