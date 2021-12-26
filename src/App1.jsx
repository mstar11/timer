import React,{useEffect,useState} from "react";
import Time1 from "./Time1"
import Time2 from "./Time2"
import Time3 from "./Time3"

const App1 = () => {
        const [items,setItems] = useState({cunter:[0,0,0],timer:[true,false,false]})
        useEffect(()=>{
                const time = items.timer[0] ? setInterval(() => {
                        setItems(prev=>{
                                const temp ={...prev}
                                temp.cunter[0]=temp.cunter[0] + 1 
                                return {...temp}
                        })
                }, 1000):items.timer[1] ? setInterval(()=>{
                        setItems(prev=>{
                                const temp ={...prev}
                                temp.cunter[1] = temp.cunter[1] + 1 
                                return {...temp}
                        })
                },1000):items.timer[2] && setInterval (()=>{
                        setItems(prev=>{
                                const temp ={...prev}
                                temp.cunter [2] = temp.cunter[2] + 1
                                return {...temp}
                        })
                },1000)
                return (()=>{
                        clearInterval(time)
                })
        },[items.timer[0],items.timer[1],items.timer[2]])
        const start =(timer1,timer2,timer3,num1,num2)=>{
                   setItems(prev =>{
                                        const temp = {...prev}
                                        temp.timer = [timer1,timer2,timer3]
                                        return {...temp}
                                })
                    setItems(prev=>{
                            const temp = {...prev}
                            temp.cunter[num1] = temp.cunter[num2]
                            return {...temp}
                    })            
               
        }
        return <div style={{display:"flex",justifyContent:"space-around"}}>
        <Time1 start={start} timer={items.timer[0]} cunter={items.cunter[0]}/>
        <Time2 start={start} timer={items.timer[1]} cunter={items.cunter[1]}/>
        <Time3 start={start} timer={items.timer[2]} cunter={items.cunter[2]}/>
        </div>
}

export default App1 ;