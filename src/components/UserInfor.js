// UserInfor.js
import React from "react";

class UserInfor extends React.Component {
    state = {
        name: "hieu",
        address: "hanoi",
        age: 25,
    };

    handleOnMouseOver = (event) => {
        console.log(event.pageX);
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value,
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div>
                Tôi là {this.state.name} và tôi năm nay {this.state.age}
                <form onSubmit={this.handleOnSubmit}>
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={this.handleOnChangeInput}
                    />

                    <label>Your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={this.handleOnChangeAge}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default UserInfor;
