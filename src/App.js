import logo from './logo.svg';
import './App.css';
import {Component, Fragment} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
          //Routes : Controller, Route : @RequestMapping
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import Location from "./components/seoul/Location";
import Nature from "./components/seoul/Nature";
import Shop from "./components/seoul/Shop";
import FoodList from "./components/food/FoodList";
import FoodDetail from "./components/food/FoodDetail";
/*
*     App.js        -> index.js     -> index.html
* function App(){}      <App/>    <div id="root"></div>
*
* - jsx (javascript + xml)
* 1. 문법
*   - 함수명 / 클래스명 -> 첫글자 대문자 필수, 소문자로 설정 시 일반 태그로 인식
*   - HTML(태그명)은 무조건 소문자만 사용
*   - HTML 제작 시 root(전체를 감싸는 태그) 필수 -> div 여러개로 나뉘면 안되고 전체를 감싸는 div 1개 필수
*   - 속성값 입력 시 "" 필수
*   - CSS 설정 시 className=""
*   - 태그 안에 style 속성 설정 시 {{}} 입력(<div style={{"height":"20px"}}>
    - <img src={} />
    - 여는 태그와 닫는 태그 동일하게 설정 필수
  2. 변수
    - props : 고정값
    - state : 변경값
* */
class App extends Component{
  render() {
    return(
        <Router>
          <Header/>
          <div className={"container"}>
            <Routes>
              <Route exact path={"/"} element={<Home/>}/>
              <Route exact path={"/seoul/location"} element={<Location/>}/>
              <Route exact path={"/seoul/nature"} element={<Nature/>}/>
              <Route exact path={"/seoul/shop"} element={<Shop/>}/>
              <Route exact path={"/food/food_list/:cno"} element={<FoodList/>}/>
              <Route exact path={"/food/food_detail/:fno"} element={<FoodDetail/>}/>
            </Routes>
          </div>
        </Router>
    )
  }
}

export default App;
