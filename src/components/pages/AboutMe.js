import React from "react";
import '../../App.css';
import './About.css';
import Photos from "../Photos";
import Education from "../Education";

export default function AboutMe(){
    return(
        <body>
            <div class="main">
                <div class="text-main">
                <h1>About.</h1>
                    <p>I'm a <em>web developer</em> in Toronto, Canada. I like making interesting with code. I'm also love a journey together with code.</p>
                </div>

                <div class="img-main">
                    <img class="img-logo" src="../images/avatar.png" />
                </div>
            </div>
            
            <Photos/>
            <Education/>
        </body>
    ) 
}
