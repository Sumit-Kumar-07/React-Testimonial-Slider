// import reviews from "../data";
import reviews from "../data";
import Card from "./Card";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"

const Testimonials = (props) => {
    let testimonial = props.testimonial;
    let setTestimonial = props.setTestimonial;

    function rightHandler(){
        if(testimonial >= reviews.length){
            setTestimonial(1);
        }
        else{
            setTestimonial(testimonial+1);
        }
    }

    function leftHandler(){
        if(testimonial <= 1){
            setTestimonial(5);
        }
        else{
            setTestimonial(testimonial-1);
        }
    }

    function surpriceHandler(){
        let randomIdx = Math.floor(Math.random()*reviews.length);
        // console.log(randomIdx);
        setTestimonial(randomIdx+1);
    }

    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center 
        mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">

            <Card testimonial={testimonial}></Card>

            <div className="flex justify-center items-center text-3xl mt-10 gap-3 text-violet-400 font-bold">
                <button className="cursor-pointer hover:text-violet-500"
                onClick={leftHandler}><FiChevronLeft/></button>
                <button className="cursor-pointer hover:text-violet-500" 
                onClick={rightHandler}><FiChevronRight/></button>
            </div>

            <div className="mt-6">
                <button className="bg-violet-400 hover:bg-violet-600 transition-all duration-200 
                cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
                onClick={surpriceHandler}>Surprise Me</button>
            </div>
                
            
        </div>
    );
}

export default Testimonials;