import React ,{useState} from 'react';

// Code EyesOnMe Component Here
function EyesOnMe(){
    const [isFocus,setFocus] =useState(true)
    console.log({isFocus,setFocus})

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