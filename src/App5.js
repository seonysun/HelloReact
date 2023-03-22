import {Component, Fragment} from "react";
import axios from "axios";

class App5 extends Component{
    constructor(props) {
        super(props);
        this.state={
            category:[],
            cno:1
        }
    }
    buttonClick(cno){
        axios.get("http://localhost/food/category_react",{
            params:{
                cno:cno
            }
        }).then(response=>{
            console.log(response.data)
            this.setState({category:response.data})
        })
    }
    componentDidMount() {
        axios.get("http://localhost/food/category_react",{
            params:{
                cno:this.state.cno
            }
        }).then(response=>{
            //=>가 아닌 function을 사용하면 this가 바뀜
            console.log(response.data)
            this.setState({category:response.data})
                //setState로 변수 재설정 시 render 재호출하여 값 변경됨
        })
    }
    render() {
        const html = this.state.category.map(cate=>
            <div className="col-md-4">
                <div className="thumbnail">
                        <img src={cate.poster} style={{"width":"100%"}} />
                            <div className="caption">
                                <p>{cate.title}</p>
                            </div>
                </div>
            </div>
        )
        return(
            <Fragment>
                <div className={"row"}>
                    <div className={"text-center"}>
                        <input type={"button"} value={"믿고보는 맛집 리스트"}
                               className={"btn btn-lg btn-success"} style={{"marginLeft":"5px"}}
                               onClick={this.buttonClick.bind(this,1)} />
                        <input type={"button"} value={"지역별 맛집 리스트"}
                               className={"btn btn-lg btn-warning"} style={{"marginLeft":"5px"}}
                               onClick={this.buttonClick.bind(this,2)} />
                        <input type={"button"} value={"메뉴별 맛집 리스트"}
                               className={"btn btn-lg btn-info"} style={{"marginLeft":"5px"}}
                               onClick={this.buttonClick.bind(this,3)} />
                    </div>
                </div>
                <div style={{"height":"20px"}}></div>
                <div className={"row"}>
                    {html}
                </div>
            </Fragment>
        )
    }
}

export default App5;