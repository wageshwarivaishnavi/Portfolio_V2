import { useEffect, useState } from "react";

const Typewriter = ({text,speed=100, delay=1000}) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(()=>{
      let timeout;
      if(index<text.length){
      timeout=setTimeout(()=>{
        setDisplayText((prev)=>prev+text[index])
        setIndex(index+1)
      },speed)}
      else{
        timeout=setTimeout(()=>{
          setDisplayText("")
          setIndex(0)
        },delay)
      }
      return ()=> clearTimeout(timeout)
  },[text,index,speed,delay])

  return <>
    <h3>{displayText}</h3>
    {/* <span style={{color:"blue"}}>|</span> */}
   </>;
};
export default Typewriter;
