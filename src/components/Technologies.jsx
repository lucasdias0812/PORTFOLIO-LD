import {RiReactjsLine} from "react-icons/ri";
import {FaNodeJs} from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";


const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Linguagens</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-400"></FaNodeJs>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className="text-7xl text-red-400"></FaHtml5>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3Alt className="text-7xl text-blue-400"></FaCss3Alt>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-yellow-400"></FaPython>
                </div>
            </div>
        </div>
    ) ;
}

export default Technologies;