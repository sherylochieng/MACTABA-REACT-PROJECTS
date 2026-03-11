


// import { useState } from "react";

// function Timer() {
//   const [time, setTime] = useState(10);
  

//   function handleCountdown() {
//     if (time > 0) {
//       setTime(time - 1);
//     }
//   }

//   function handleReset() {
//     setTime(10);
//   }

//   return (
//     <div >
//       <h1 >Simple Countdown Timer</h1>
//      <p >Time Remaining: {time} seconds</p>
//     {time === 0 && <p>Time is up!</p>}

//       <div >
//         <button  onClick={handleCountdown}>Start Countdown</button>
//         <button onClick={handleReset}>Reset Timer</button>
//       </div>
//     </div>
//   );
// }

// export default Timer

// import { useState } from "react";


// function Timer(){

//     const[time, setTime] = useState(100);
//     const[message, setMessage]=useState("");

//     const handleCountdown = () => {
//         if(time>0){
//             setTime(time -1);
//             if (time -1 === 0){
//                 setMessage("Time is up!");
//             }
//         }
//     };


//     const handleReset = () => {
//         setTime(100);
//     };

//     return (
//         <div>
//             <h1>Simple countdown timer</h1>
//             <h2>Time remaining: {time} seconds</h2>
//             <button onClick={handleCountdown}>Start countdown</button>
//             <button onClick={handleReset}>reset timer</button>

//             {/* {time === 0 && <p>Time is up!</p>} */}
//         </div>
//     );
// }

// export default Timer
import { useState } from "react";


function Timer(){

    const[time, setTime] = useState(10);
    // const[message, setMessage]=useState("");

    const handleCountdown = () => {
        if(time>0){
            setTime(time -1);
            // if (time -1 === 0){
            //     setMessage("Time is up!");
            // }
        }
    };


    const handleReset = () => {
        setTime(100);
      
    };

    return (
        <div>
            <p>Simple countdown timer</p>
            <p>Time remaining: {time} seconds</p>
            <button onClick={handleCountdown}>Start countdown</button>
            <button onClick={handleReset}>reset timer</button>
           

            {time === 0 && <p>Time is up!</p>}
        </div>
    );
}

export default Timer;