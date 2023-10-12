import React from "react";
import Button from "./botton";


export default function Head (){

    return( <div className="head-main">

<img className="profile-pic" src=".\src\assets\profilepic.jpg"/>
<h2 className="name">Emmanuel Ada</h2>
<small className="description">Web developer/AI-ML Engineer</small>
<div className="buttonrow" >
<Button type="one" text="Hire"/>
<Button type="two" text="Follow"/>

</div>

    
    </div>)
}