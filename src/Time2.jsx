import React ,{useState,useEffect} from 'react'

// function Time2({cunter2,setTimer2,setTimer1,setTimer3,timer2}) {
// function Time2({cunter,start,timer2,setCunter}) {
function Time2({cunter,start,timer,}) {



        return (
                <div>
                        <p>{cunter}</p>
                        <button style={{backgroundColor:timer ? "green" : "red"}} disabled={!timer} onClick={()=>{
                        // setItems(prev =>{
                        //         const temp = {...prev}
                        //         temp.timer = [true,false,false]
                        //         return {...temp}
                        // })
                        start(true,false,false,0,1)
                        }}>Previous</button>
                        <button disabled={!timer} style={{backgroundColor:timer ? "green" : "red"}}
                        onClick={()=>{
                                // setItems(prev =>{
                                //         const temp = {...prev}
                                //         temp.timer = [false,false,true]
                                //         return {...temp}
                                // })
                                start(false,false,true,2,1)

                        }}
                        
                        >Next</button>
                </div>
        )
}

export default Time2
