import {Component, Fragment} from "react";
import axios from "axios";

class App6 extends Component{
    constructor(props) {
        super(props);
        this.state={
            location:[]
        }
    }
    componentDidMount() {
        axios.get("http://localhost/food/location_react").then(response=>{
            console.log(response.data)
            this.setState({location:response.data})
        })
    }
    render() {
        const html = this.state.location.map(lo=>
            <div className="col-md-3">
                <div className="thumbnail">
                    <img src={lo.poster} style={{"width":"100%"}} />
                    <div className="caption">
                        <p>{lo.name}</p>
                    </div>
                </div>
            </div>
        )
        return(
            <Fragment>
                <div className={"row"}>
                    {html}
                </div>
            </Fragment>
        )
    }
}

export default App6;