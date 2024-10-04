import { CERTIFICADOS } from "../constants";

const Certificados = () => {
    return ( 
        <div className="border-b border-neutral-900 pb-4"><h2 className="my-20 text-center text-4xl">Certificados</h2>
        <div>
            {CERTIFICADOS.map((certificado,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                    <img 
                    src={certificado.image} 
                    width={350} 
                    height={350} 
                    alt={certificado.title}
                    className="mb-6 rounded"
                    />
                    </div>    
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{certificado.title}</h6>
                        <p className="mb-4 text-neutral-400">{certificado.description}</p>
                        {certificado.technologies.map((tech, index) =>(
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-900">
                                {tech}
                            </span>
                        ))}
                    </div> 
                </div>
            ))}
        </div>
        </div>
     );
};

export default Certificados;