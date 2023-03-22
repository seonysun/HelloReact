import {Component, Fragment} from "react";
import {useState, useEffect} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {NavLink} from "react-router-dom";

function FoodDetail(props){
    let {fno} = useParams()
    const [foodDetail, setFoodDetail] = useState({})
    useEffect(()=>{
        axios.get('http://localhost/food/food_detail_react',{
            params:{
                fno:fno
            }
        }).then(response=>{
            console.log(response.data)
            setFoodDetail(response.data)
        })
    },{})
    let poster = String(foodDetail.poster)
    const img=poster.split("^")
    let html = img.map(m=>
        <td><img src={m} style={{"width":"100%"}} /></td>
    )
    return(
        <Fragment>
            <table className="table">
                <tbody>
                <tr>
                    {html}
                </tr>
                </tbody>
            </table>
            <div style={{"height":"20px"}}></div>
            <table className="table">
                <tbody>
                <tr>
                    <td colSpan={"2"}>
                        <h3 style={{"display":"inline","float":"left"}}>{foodDetail.name}</h3>
                        <h3 style={{"color":"orange","display":"inline","float":"left"}}>{foodDetail.score}</h3>
                    </td>
                </tr>
                <tr>
                    <th width="20%">주소</th>
                    <td width="80%">{foodDetail.address}</td>
                </tr>
                <tr>
                    <th width="20%">전화</th>
                    <td width="80%">{foodDetail.tel}</td>
                </tr>
                <tr>
                    <th width="20%">음식종류</th>
                    <td width="80%">{foodDetail.type}</td>
                </tr>
                <tr>
                    <th width="20%">가격대</th>
                    <td width="80%">{foodDetail.price}</td>
                </tr>
                <tr>
                    <th width="20%">주차</th>
                    <td width="80%">{foodDetail.parking}</td>
                </tr>
                <tr>
                    <th width="20%">영업시간</th>
                    <td width="80%">{foodDetail.time}</td>
                </tr>
                <tr>
                    <th width="20%">메뉴</th>
                    <td width="80%">{foodDetail.menu}</td>
                </tr>
                <tr>
                    <td colspan="2" className="text-right">
                        <NavLink to={"/food/food_list/"+foodDetail.cno} className={"btn btn-sm btn-danger"}>목록</NavLink>
                    </td>
                </tr>
                </tbody>
            </table>
        </Fragment>
    )
}
 export default FoodDetail;