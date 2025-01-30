import Link from "next/link";

export default function ProjectCard(){
    return(
        <Link href={'/123444'} className="border rounded-md overflow-hidden shadow-none duration-300 hover:shadow-lg">
            <div className="w-full aspect-video">
                <img src="/principe.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="px-4 py-6 h-[230px] flex flex-col justify-between">
                <div>
                    <div className="text-lg font-bold font-poppins mb-2" style={{ lineHeight : '1.2'}}>
                        Construction de la Chapelle de Maroua 2 
                    </div>
                    <div className="text-gray-600 mb-6">
                        <div className="text-sm">Par <span className="font-bold">Daniel Seppo Eke</span></div>
                        <div className="text-sm">le <span className="font-bold">02 Janvier</span></div>
                    </div>
                </div>
                <div>
                <div className="flex items-center gap-2">
                    <div className="flex-1">
                        <div className="font-bold font-poppins">231</div>
                        <div className="text-sm font-poppins">Contrib.</div>
                    </div>
                    <div  style={{ flex : '2 2 0'}}>
                        <div className="font-bold font-poppins">4 000 000</div>
                        <div className="text-sm font-poppins">T. 12 000 000 XAF</div>
                    </div>
                    <div className="flex-1 flex items-center justify-center bg-blue-600 h-[42px] rounded-sm text-white font-bold font-poppins">
                        <div>90%</div>
                    </div>
                   
                </div>
                <div className="mt-4">
                        <div className="w-full rounded-full h-[5px] overflow-hidden bg-gray-200">
                            <div className="w-[90%] h-[5px] bg-blue-600"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}