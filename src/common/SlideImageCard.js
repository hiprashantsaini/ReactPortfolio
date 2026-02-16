import { motion } from "framer-motion";
import img from "../components/Frontend.png";

const SlideImageCard = () => {
  return (
    <motion.div className="fixed inset-0 z-50 justify-center items-center" initial={{y:-50,scale:0.2}} animate={{y:0,scale:1}} transition={{duration:2,ease:"easeInOut"}}>
        <img src={img} alt="image-data" className="w-full h-full object-cover"/>
    </motion.div>
  )
}

export default SlideImageCard;