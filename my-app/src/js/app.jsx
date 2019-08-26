import React from "react";
import ReactDOM from "react-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Content from "./content.jsx";
import Navigation from "./navigation.jsx";




class App extends React.Component{

    constructor(){
        super();
        this.state = {
            counter: 0,
            name: "Shravan Ramdurg"
        }
    }

    updateName (newName) {
        console.log(newName+"name")
        this.setState({
            name: newName
        })
    }
    render(){
        return <div className="main">
                    <Header firstName="John" />
                    {/* <Content  name={this.state.name}/>
                    <Navigation updateName={this.updateName.bind(this)}/> */}
                    <Content  updateName={this.updateName.bind(this)}/>
                    <Navigation name={this.state.name}/>
                    <Footer />
                </div>;
    }

}


//render it through react-dom
ReactDOM.render(
    <App />,
    document.getElementById('OuterDiv')
);







