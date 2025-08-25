import React from "react";
import UserInfor from "./UserInfor";

class DisplayInfor extends React.Component {
    render() {
        // destructuring props
        const { listUser } = this.props;

        return (
            <>
                {listUser.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <div>tôi là {user.name}</div>
                            <div>tôi {user.age} tuổi</div>
                            <hr />
                        </div>
                    );
                })}
            </>
        );
    }
}

export default DisplayInfor;
