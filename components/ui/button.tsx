import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

export function Button_Round({children, onClick}: ButtonProps){
    return(
        <button className="w-[42px] h-[42px] rounded-full border flex items-center justify-center hover:bg-slate-50" onClick={onClick}>
            {children}
        </button>
    )
}

export function Button_Arrondi(
    {children, onClick}: ButtonProps){
    return(
        <button className="rounded-full overflow-hidden" onClick={onClick}>
            {children}
        </button>
    )
}
