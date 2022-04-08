import React ,{useState} from 'react';

// Code EyesOnMe Component Here
function EyesOnMe(){
    
    function HandelFocus(){
        console.log('Good!')
        
    
    }
    function handelBlur(){
        console.log("Hey! Eyes on me!")
    }

    return(
        <button onFocus={HandelFocus} onBlur={handelBlur} >Eyes on me</button>
    )
    }
    export default EyesOnMe