//class component
//function component

import React from "react";

class MyComponent extends React.Component{
    //jsx cho phep biet code java trong gi do
    //ben trong jsx chi duoc 1 phan tu: han che
    render(){
        return(
            <div>1st component
                {Math.random()}
            </div>
        );
    }
}

export default MyComponent;