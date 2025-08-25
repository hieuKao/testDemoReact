import React from "react";
import UserInfor from "./UserInfor";

class DisplayInfor extends React.Component {
    render() {
        //destructuring array/object
        const {age,name} = this.props;
        return (
            <>
                <div>toi la {this.props.name}</div>
                <div>toi  {this.props.age}</div>
            </>
        );
    }
}

export default DisplayInfor;
