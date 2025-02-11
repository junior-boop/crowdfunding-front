'use client';
import Avatar from "./ui/avatar"
import { Button_Arrondi } from "./ui/button"

export default function LoginState(){
    return(
        <>
            <Avatar />
        </>
    )
}

export function LoginBtn(){
    return(
        <Button_Arrondi onClick={() => window.location.replace('/login')}>
           <span className="font-bold text-base bg-blue-600 flex h-[42px] w-full px-4 items-center text-white hover:bg-blue-700">Se connecter</span>
        </Button_Arrondi>
    )
}