import reviews from "../data";
import {FaQuoteLeft, FaQuoteRight, FaGem} from "react-icons/fa";

function Card (props){
    let testimonial = props.testimonial;

    return(
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-[25]" 
                src={reviews[testimonial-1].image}></img>
                <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
            </div>

            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize tracking-wider">{reviews[testimonial-1].name}</p>
                <p className="text-violet-300 uppercase text-sm">{reviews[testimonial-1].job}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft/>
            </div>

            <div className="text-center mt-4 text-slate-500">
                {reviews[testimonial-1].text}
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight/>
            </div>
        </div>
    );
}

export default Card;