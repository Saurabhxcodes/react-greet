import React from 'react';
import  ReactDOM  from 'react-dom';
// import App from './App';
// import "./index.css";
import Card from "./Cards";
import "./Carde.css";
import Sdata from "./Sdata";


function ncard(val){
    return(
        <Card
        imgsrc ={val.imgsrc}
        title = {val.title}
        sname = {val.sname}
        link = {val.links}
        />
    );
    
} 

ReactDOM.render(
    <>
    <h1 className='heading.style'> List of top 6 Netflix series 2023</h1>
    {Sdata.map(ncard)}
    </>,
    document.getElementById("root"));
    