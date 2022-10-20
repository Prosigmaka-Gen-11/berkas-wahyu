import React from "react";
import Button from "./Button";

//fungsi timer
const Timer = () => {
    const [second, setSecond]= React.useState(0);
    const [minute, setMinute]= React.useState(0);
    const [hour, setHour]= React.useState(0);
    
    //Kondisi timer
    var timer;
    React.useEffect(()=> {
        timer= setInterval(()=> { 
            setSecond(second+1);
            if(second==59){
                setMinute(minute+1);
                setSecond(0);
            }
            if(minute==59 && second==59){
                setHour(hour+1);
                setMinute(0);
                setSecond(0);
            }
        },1000)
        return ()=> clearInterval(timer);
    });


//restart
const restart = () => {
    setSecond(0);
    setMinute(0);
    setHour(0);
}

    return (
        <div className="text-center">
        <div>
            <h1 className="font-semibold text-xl"> Timer</h1>
            <h2 className="text-lg"> {hour}:{minute}:{second} </h2>
        </div>
        <Button buttonName= "Restart"
            handleClick={restart}/>
        </div>
    )
}
export default Timer;