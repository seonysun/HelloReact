import {Component, Fragment} from "react";

class App2 extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h1>이름:{this.props.info.name}</h1>
                <h1>나이:{this.props.info.age}</h1>
                <h1>주소:{this.props.info.addr}</h1>
            </div>
        )
    }
}

export default App2;