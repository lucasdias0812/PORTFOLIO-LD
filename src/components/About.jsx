import { ABOUT_TEXT } from "../constants";

const About = () =>{
    return(
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Sobre <span className="text-neutral-500 ">Mim</span> </h2>
                <div className="w-full text-center ">
                    <div className="flex justify-center">
                    <p className="flex my-2 max-w-xl py-6 font-light tracking-tighter">{ABOUT_TEXT}</p>
                    </div>
                    </div>
                 </div>
    );
};

export default About