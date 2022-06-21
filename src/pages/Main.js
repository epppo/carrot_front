import '../public/css/listForm.css';
import { AiFillHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';

import MainItemList from '../components/MainItemList';
import MyPage from './MyPage';

import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useSelector } from 'react-redux';


function Main () {
  const navigate = useNavigate();
  const [pageState, setState] = useState(<MainItemList/>);
  const user = useSelector((state) => state.user);





  return (
    <div className="Wrap">
      <div className="TMenuBar"> 
      <span> {user.userLocation} </span>

    </div>
        
        {pageState}

        <div className="BMenuBar"> 
          <div className="BMenuBox" onClick={() => { navigate("/") }}>
            <AiFillHome size="30px" color={"black"}/>
            <p style={{color: "black"}}></p>HOME</div>
          <div className="BMenuBox" onClick={() => { navigate("/mypage") }}>
            <BiUser size="40px" color={"#AAAAAA"}/>
              <p style={{color: "#AAAAAA"}}>MY Carrot</p> 
          </div>        
        </div>
    </div>
  )
}

export default Main;