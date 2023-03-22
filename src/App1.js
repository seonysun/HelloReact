import {Component, Fragment} from "react";
//Component : 한개의 기능 ex. 게시판, 우편번호 검색 등
//  -> Class 형식 /  function 형식

class App1 extends Component{
    constructor(props) { //생성자
        super(props);
        /* 생성자
            1. 변수 선언
            2. 이벤트 등록
        */
    }
    componentDidMount() { //mounted:function()
    }

    render() { //화면 UI 설정 -> HTML : #root.innerHTML
        return (
            <Fragment>
                <div>
                    <h1 style={{"color":"red"}}>Hello React :-)</h1>
                    <h3>방가워</h3>
                    <h3>방가방가루2</h3>
                    <h3>하이하이</h3>
                </div>
                <div>
                    <h1>메롱</h1>
                </div>
            </Fragment>
        );
    }
}

export default App1;