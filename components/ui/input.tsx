"use client"
import { useState } from "react";
import { FluentEye24Filled, FluentEyeOff24Filled } from "./icones";

interface motDePasseProps {
    onChange? : (e : React.ChangeEvent<HTMLInputElement>) => void
    value? : string
}

export function MotDePasse({ onChange, value } : motDePasseProps){
    const [visible, setVisible] = useState(false)
    return(
        <div className="relative">
            <label htmlFor="password" className="pb-2 inline-block px-4">Votre mot de passe</label>
            <input value={value} onChange={onChange} className="px-4 py-4 bg-slate-50 font-roboto text-base rounded-full block w-full" name="password" type={visible ? 'text' : 'password'} placeholder="Entrez votre password" />
            <button type="button" onClick={() => setVisible(!visible)} className="absolute top-12 right-4 cursor-pointer">
                {
                    !visible ? <FluentEye24Filled className="h-6 w-6" /> : <FluentEyeOff24Filled className="h-6 w-6" />
                }
            </button>
        </div>
    )
}