import {Component, useState, useEffect, Fragment} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {NavLink} from "react-router-dom";

function FoodList(props){
    let {cno} = useParams()
    const [foodList, setFoodList] = useState([])
            //변수명, setter 함수
    const [cateInfo, setCateInfo] = useState({})
    useEffect(()=>{ //componentDidMount
        axios.get('http://localhost/food/food_list_react',{
            params:{
                cno:cno
            }
        }).then(response=>{
            console.log(response.data)
            setFoodList(response.data)
        })
    },[])
    useEffect(()=>{
        axios.get('http://localhost/food/category_info_react',{
            params:{
                cno:cno
            }
        }).then(response=>{
            console.log(response.data)
            setCateInfo(response.data)
        })
    },{})
    let html = foodList.map((food)=>
        <table className="table">
            <tbody>
            <tr>
                <td width="30%" className="text-center" rowspan="4">
                <NavLink to={"/food/food_detail/"+food.fno}>
                    <img src={food.poster} style={{"width":"200px","height":"180px"}} className="img-rounded" />
                </NavLink>
                </td>
                <td width="70%">
                <NavLink to={"/food/food_detail/"+food.fno}>
                    <h3 style={{"display":"inline","float":"left"}}>{food.name}</h3>
                </NavLink>
                    <h3 style={{"color":"orange","display":"inline","float":"left"}}>{food.score}</h3>
                </td>
            </tr>
            <tr>
                <td width="70%">{food.address}</td>
            </tr>
            <tr>
                <td width="70%">{food.tel}</td>
            </tr>
            <tr>
                <td width="70%">{food.type}</td>
            </tr>
            </tbody>
        </table>
    )
    return(
        <Fragment>
            <div className="jumbotron">
                <h3 className="text-center">{cateInfo.title}</h3>
                <h4 className="text-center">{cateInfo.subject}</h4>
            </div>
            <div className="row">
                <table className="table">
                    <tr>
                        <td>
                            {html}
                        </td>
                    </tr>
                </table>
            </div>
        </Fragment>
    )
}

export default FoodList;