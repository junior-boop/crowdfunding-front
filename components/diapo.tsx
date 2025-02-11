'use client';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export default function Diapo(){
    const [navState, setNavState] = useState('')
    const params = usePathname()

    useEffect(() => {
        setNavState(params)
    }, [params])

    return(
        <>
            {
                navState === '/d'
                ? <div className="bg-slate-100 h-[300px] w-full"></div>
                : navState === '/d/projects'
                ? <div className="bg-red-600 h-[5px] w-full"></div>
                : null
            }
        </>
    )
}