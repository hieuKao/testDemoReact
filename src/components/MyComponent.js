//class component
//function component

import React from "react";

class MyComponent extends React.Component{

    state = {
        name: 'hieu',
        address: 'hanoi',
        age: 25
    };
    //jsx cho phep biet code java trong gi do
    //ben trong jsx chi duoc 1 phan tu: han che
    render(){
        return(
            <div>
                toi la {this.state.name} va toi o {this.state.address}
            
            </div>
        );
    }
}

export default MyComponent;