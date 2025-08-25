//class component
//function component

import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'hieu',
        address: 'hanoi',
        age: 25
    };

    handleClick = (event) => {
        console.log("clickmede");
        console.log("toi la");

    }

    handleOnMouseOver = (event) => {
        console.log(event.pageX);
    }

    render() {
        return (
            <div>
                Tôi là {this.state.name} và tôi ở {this.state.address}
                <button onMouseEnter={this.handleOnMouseOver}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;
