import React,{useState} from "react";
import Typewriter from "./Typewriter";
import avtarImg from "../../assets/preview.png";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
      try{
        await navigator.clipboard.writeText('8240085481');
        setCopied(true);
        setTimeout(()=>setCopied(false),2000)
      }
      catch (err) {
        console.error('Failed to copy number:', err);
    }
  }
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <div className="md:absolute">
          <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
            <Typewriter text={"Hello I am Wageshwari"} />
          </h1>
        </div>
        <br />
        <div style={{ marginTop: 50 }}>
          <p className="text-sm md:text-2xl tracking-tight">
            System Designer, working in TCS.
          </p>
          <br />
          <p className="text-sm md:text-2xl tracking-tight">
            I'm a driven, ambitious and bold learner who adapts and absorbs
            information quickly. I'm always up for a challenge and view it as an
            opportunity to express my preverance and ability to work hard.
          </p>
          <button
            className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
            onClick={handleCopy}
          >
            Contact Me
          </button>
          {copied && <p className="text-green-500">Number copied to clipboard!</p>}
        </div>
      </div>
      <div>
        <img className="" src={avtarImg} alt=""></img>
      </div>
    </div>
  );
}
