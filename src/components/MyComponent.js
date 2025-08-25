import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "abc", age: "30" },
            { id: 2, name: "d", age: "24" },
            { id: 3, name: "e", age: "25" }
        ]
    };

    render() {
        return (
            <div>
                <UserInfor />
                <br /><br />
                <DisplayInfor 
                    listUser={this.state.listUser}
                />
            </div>
        );
    }
}

export default MyComponent;
