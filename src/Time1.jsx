import React,{useEffect,useState} from 'react'



// function Time1({cunter,start,timer1,setCunter}) {
function Time1({cunter,start,timer,}) {
// function Time1({cunter1,setTimer1,setTimer2,timer1}) {

        return (
                <div>
                        <p>{cunter}</p>
                        <button style={{backgroundColor:timer ? "green" : "red"}}
                        disabled={!timer} onClick={()=>{
                                // setItems(prev=> {
                                //         const temp = {...prev}
                                //         console.log(temp)
                                //         temp.timer = [false,true,false]
                                //         return {...temp}
                                // })
                                start(false,true,false,0,1)
                        }}>Next</button>
                        
                </div>
        )
}

export default Time1
