import React from "react";
import UserInfor from "./UserInfor";

class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }
    handleShowHide=()=>{
        this.setState({
            isShowListUser: !this.state.isShowListUser // them dau cham than thi thanh toggle tat/bat
        })
    }

    render() {
        // destructuring props
        const { listUser } = this.props;
        //console.log(listUser)
        //console.table(listUser)
        return (            
            <div>
                <div>
                    <spam onClick={()=>{this.handleShowHide()}}>
                        {this.state.isShowListUser === true? "hide list users" : " show list users"}
                        </spam>
                </div>
            {this.state.isShowListUser &&  
                <div>
                {listUser.map((user, index) => {
                    console.log("check map user", user)

                        return (
                            <div key={user.id} className={+user.age >18 ? "green" : "red"}>
                                <div>tôi là {user.name}</div>
                                <div>tôi {user.age} tuổi</div>
                                <hr />
                            </div>
                        );
                    
                })}
                </div>
             }
            </div>
        );
    }
}

export default DisplayInfor;
