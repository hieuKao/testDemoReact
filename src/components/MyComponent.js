//class component
//function component

import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'hieu',
        address: 'hanoi',
        age: 25
    };

   handleClick(event) {
    console.log("click me de");
    this.setState({
        name: 'hieucao',
        age: Math.floor(Math.random() * 100 + 1)
        // address: 'hanoi',
        // age: 25
    });

    //   this.setState({
    //   age: Math.floor(Math.random() * 100 + 1)
    // });
}


    handleOnMouseOver = (event) => {
        // console.log(event.pageX);
    }

    handleOnChangeInput = (event)=>{
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                Tôi là {this.state.name} và tôi năm nay {this.state.age}
                <form onSubmit={(event)=> this.handleOnSubmit(event)}>
                    <input type="text"
                    onChange={(event)=>this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;
