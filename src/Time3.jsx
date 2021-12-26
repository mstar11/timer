import React,{useEffect,useState} from 'react'

// function Time3({cunter3,setTimer3,setTimer2,setTimer1,timer3}) {
function Time3({cunter,start,timer}) {

        return (
                <div>
                         <p>{cunter}</p>
                        <button disabled={!timer} style={{backgroundColor:timer ? "green" : "red"}}
                        onClick={()=>{
                                // setItems(prev =>{
                                //         const temp = {...prev}
                                //         temp.timer = [false,true,false]
                                //         return {...temp}
                                // })
                                start(false,true,false,1,2)
                        }}>Previous</button>
                </div>
        )
}

export default Time3
