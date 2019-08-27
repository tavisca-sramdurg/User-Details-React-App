import React from "react";
import ReactDOM from "react-dom";
import { userArray } from "./app.jsx";


class Navigation extends React.Component {

    render() {
        let updateSelectedId = this.props.updateSelectedId;
        let userListElement = this.props.userArray.map((x,index) =>
             <li key={index} onClick={() => updateSelectedId(index)}>
                {x.name}
            </li>
        );
        console.log(userArray);
        return <div className="navigation">
            <div>
                <ul>

                  {userListElement}

                </ul>

            </div>
        </div>
    }
}

module.exports = Navigation;