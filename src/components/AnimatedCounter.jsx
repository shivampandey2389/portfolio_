import CountUp from "react-countup";
import { counterItems } from "../constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimatedCounter = () =>{
  useGSAP(()=>{
    gsap.fromTo('#counter-value',
      {
        x:-50,
        opacity:0,
    },
    {
      x:0,
      opacity:1,
      stagger:0.2,
      duration:1,
      ease:'power1.inOut'
    }
  )
  })
  return(
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
         {counterItems.map((item)=>(
        <div id="counter-value" className="bg-zinc-900 rounded-lg flex flex-col p-10 justify-center">
          <div key={counterItems.label} className="counter-number text-white text-5xl font-bold mb-2">
                <CountUp suffix={item.suffix} end={item.value}/>
          </div>
          <div className="text-white-50 text-lg">{item.label}</div>
          </div>
         ))}
      </div>
    </div>
  )
}
export default AnimatedCounter;