import React from 'react';
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiRedis} from 'react-icons/si';
import  tcs from '../../assets/tcs_LOGO.png';
import  smit from '../../assets/smit_lOGO.jpg';


function Experience() {
  return (
    <div id="Experience" className='p-10 md:p-24'>
<h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
<div className='flex flex-wrap items-center justify-around'>
    <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
<span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
    <FaHtml5 color='#E34F26' size={50} title="Html5" />
</span>
<span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
    <FaCss3 color='#1572b6' size={50} title="Css" />
</span>
<span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
    <FaReact color='#61DAFB' size={50} title="React"/>
</span>
<span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
    <FaJs color='#F7DF1E' size={50} title="JavaScript" />
</span>
<span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
    <SiRedis color='#FF4438' size={50}  title="Redis"/>
</span>
</div>
<div>

<div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
<img className="md:h-20 " src={tcs} alt="Tata Consultancy Services" size={50}/>
<span className='text-white'>
    <h2 className='leading-tight'>System Engineer</h2>
    <p className='text-sm leading-tight font-thin'>Jan 2021 - Present</p>
    <ul className='text-sm p-2'>
        <li>- Work as Software Developer</li>
    </ul>
</span>
</div>

<div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
<img className="md:h-20 " src={smit} alt="Collage" size={50}/>
<span className='text-white'>
    <h2 className='leading-tight'>Bachlore of Computer Science and Technology
    </h2>
    <p className='text-sm leading-tight font-thin'>Aug 2016 - Jul 2020</p>
    <ul className='text-sm p-2'>
        <li>- CSE</li>
    </ul>
</span>
</div>


</div>
</div>
    </div>
  )
}

export default Experience;