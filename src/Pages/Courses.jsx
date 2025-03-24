import Navbar from "../Components/Navbar/Navbar"
import timer from "../assets/timer.png"



function Courses() {
  return (
   <>
   <Navbar/>
      <img src={timer} alt="" className="w-1/2 h-full mx-auto mt-44 md:mt-20"/>
   </>
  )
}

export default Courses