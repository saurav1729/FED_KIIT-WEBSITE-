import React from 'react'
import logo from "../resources/MASCOT.png"
import FedLogo from "../resources/FEDLOGO.png"
import { Link } from 'react-router-dom'
import { MJ_LinkedIn, MJ_insta,MJ_github,MJ_twitter } from '../utils/constants'

const Footer=()=>{
    return(
        <div className=" relative w-[90rem] h-[36rem] bg-[#0E100F]">
            <div className=" background absolute top-0 w-[90rem] h-[36rem] z-[-1] " style={{"background": "linear-gradient(180deg, #000 0%, rgba(51, 51, 51, 0.00) 100%)"}}></div>
            <div className="Orange circle absolute w-[17.5rem] h-[17.5rem] rounded-[17.5rem] top-0 right-0" style={{"background": "linear-gradient(to bottom right, #E7CE4A 0%, #E64467 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #E7CE4A 0%, #E64467 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #E7CE4A 0%, #E64467 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #E7CE4A 0%, #E64467 50%) top right / 50% 50% no-repeat"
}}></div>
   
        <div className="glass absolute bottom-0 w-[90rem] h-[29.25rem] rounded-t-[1.25rem] border-[1px] border-[#ffffff50] backdrop-filter backdrop-blur-[21px]" style={{"background": "linear-gradient(153deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%"
}}></div>

        <Link to="/"> <div className='logo absolute top-[11.38rem] right-[38.94rem] w-[12.1rem] h-[4.48rem] gap-[1.25rem] flex item-center hover:cursor-pointer' onClick={()=>{scrollTo({top:0, behavior:'smooth'})}}>
            <img className="h-[3.75rem] w-[3.75rem]"src={logo}></img>
            <img className="w-[5.94rem] h-[3.56rem]" src={FedLogo}></img>

         </div></Link>
         <div className='absolute h-[2.24rem] w-[26rem] top-[17.71rem] left-[33.1rem]'>
            <ul className='text-white flex justify-between text-[1.25rem] font-Poppins font-[500] leading-[150%]'>
                <Link to="/"><li className='hover:cursor-pointer hover:scale-125' onClick={()=>{scrollTo({top:0, behavior:'smooth'})}} >Home</li></Link>
                <Link to="/about"><li className='hover:cursor-pointer hover:scale-125' onClick={()=>{scrollTo({top:1000, behavior:'smooth'})}}>About</li></Link>
                <li className='hover:cursor-pointer hover:scale-125'>Service</li>
                <li className='hover:cursor-pointer hover:scale-125'>Contact Us</li>
            </ul>
         </div>
         <div className='absolute h-[3rem] w-[13.6rem] top-[22.49rem] left-[38.15rem] text-white flex justify-between text-[1.25rem] font-Poppins font-[500] leading-[150%]'>
            
               <a href={MJ_LinkedIn} target='_blank'><i className="fa-brands fa-linkedin-in w-[2.62381rem] h-[2.62381rem] rounded-[2.62381rem] bg-[#F45725] p-[0.75rem] hover:cursor-pointer hover:bg-[#ffffff50] hover:text-[#F45725]"></i></a>
                <a href={MJ_github}  target='_blank'>  <i className="fa-brands fa-github w-[2.62381rem] h-[2.62381rem] rounded-[2.62381rem] bg-[#F45725] p-[0.75rem] hover:cursor-pointer hover:bg-[#ffffff50] hover:text-[#F45725] "></i></a>
                <a href={MJ_insta}  target='_blank'><i className="fa-brands fa-instagram w-[2.62381rem] h-[2.62381rem] rounded-[2.62381rem] bg-[#F45725] p-[0.75rem] cursor-pointer hover:bg-[#ffffff50] hover:text-[#F45725]"></i></a>
                <a href={MJ_twitter}  target='_blank'><i className="fa-brands fa-x-twitter w-[2.62381rem] h-[2.62381rem] rounded-[2.62381rem] bg-[#F45725] p-[0.75rem] cursor-pointer hover:bg-[#ffffff50] hover:text-[#F45725]"></i></a>

         </div>

         <div className='absolute w-[80.8125rem] border-b-[1px] border-[#f45725] top-[28.47rem] left-[4.56rem]'></div>

         <div className="absolute top-[31.44rem] left-[38.19rem]">
            <p className='text-[#cfd3d7] text-center text-[1.25rem] font-Roboto font-[400] leading-[150%]'>Copyright @ Saurav Jha</p>
         </div>


        </div>
    )
}
 
export default Footer;