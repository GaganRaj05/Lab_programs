import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom';

function Timer(params) {
    const[time,setTime] = useState(300);

    useEffect(()=>{
        if(time>0) {
            let timerId=setInterval(()=> {
                setTime((prevTime)=>prevTime-1);
            },1000) 
           return ()=> clearInterval(timerId);
        }
    },[time])
    const minutes = Math.floor(time/60);
    const sec = Math.floor(time%60);

    return(
        <div>
            <p>{minutes}:{sec.toString().padStart(2,'0')}</p>
        </div>
    )
};

ReactDOM.render(<Timer/>,document.getElementById("root"))
