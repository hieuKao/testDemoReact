// MyComponent.js
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    //jsx
    render() {
        const myAge = 50;
        const myInfor = ['ab', 'c', 'c']
        //console.log(this.props)
        return (
            <div>
                <UserInfor />
                <br/><br/>
                <DisplayInfor name="abc" age="30"/>
                <hr />
                <DisplayInfor name="Duong" age={50} myInfor={myInfor}/>

            </div>
        );
    }
}

export default MyComponent;
