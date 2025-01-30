'use client'
import { useState } from "react";
import { FluentSearch24Filled } from "./icones";

export default function InputSearch() {
    const [focus, setFocus] = useState(false);

    return (
        <div className={`flex items-center space-x-2 ${focus ? 'outline-black' : "outline-none"} border rounded-full border-slate-200 overflow-hidden`}>
            <input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} type="text" placeholder="Rechercher un projet" className="w-[350px] border text-lg px-4 py-2 border-none outline-none" />
            <button className="h-[42px] w-[42px] rounded-full flex items-center justify-center ">
                <FluentSearch24Filled className="h-6 w-6" />
            </button>
        </div>
    )
}