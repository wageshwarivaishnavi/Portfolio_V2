import React from 'react'
import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

function Footer() {

    const openGmail = () =>{
        const recipient="vaishnaviwageshwari@gmail.com";
        const mailtoLink=`https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}`;
        window.open(mailtoLink,"_blank");
    }
  return (
    <div className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center' id="Footer">
        <div>
        <h3 className='text-l md:text-3xl font-bold mx-6'>8240085481</h3>
        <h3  className='text-sm md:text-2xl font-normal'>Feel Free to react out!</h3>
        </div>
        <ul className='text-sm md:text-xl'>
            <li>
                <button onClick={openGmail}>
                <MdOutlineEmail size={20} />
                 vaishnaviwageshwari@gmail.com
                 </button>
            </li>
            
            <li>
                <CiLinkedin />
                <a href="https://www.linkedin.com/in/wageshwari-vaishnavi-69124a23a/" target="_blank">https://www.linkedin.com/in/wageshwari-vaishnavi</a>
            </li>
            <li> 
                <FaGithub />
                <a href="https://github.com/wageshwarivaishnavi" target="_blank">https://github.com/wageshwarivaishnavi</a>
            </li>
        </ul>
    </div>
  )
}

export default Footer