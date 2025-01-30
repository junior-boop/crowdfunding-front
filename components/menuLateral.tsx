'use client';
import Link from "next/link"
import { useEffect, useState } from "react"


const navigation = [
    {
        titre : 'Decouvrer des projets',
        url : '/'
    },
    {
        titre : 'Mes projets',
        url : '/projets'
    },
    {
        titre : 'Mes Contributions',
        url : '/contribution'
    },
    {
        titre : 'Mes Favories',
        url : '/favories'
    },

]

export default function MenuLaterale(){
    return(
        <div className="w-[300px] border-r pb-6 sticky top-[76px]">
            {navigation.map((item) => <MenuItems key={item.titre} {...item} />)}
        </div>
    )
}

interface menuItemsProps {
    titre : string
    url : string

}

const MenuItems = ({url = '/', titre } : menuItemsProps) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        if(url === window.location.pathname){
            setActive(true);
        }
    })

    return(
        <Link href={url} className={`bg-white hover:bg-slate-100 ${active ? 'bg-slate-100' : ''} flex items-center px-4 w-full py-3`}>
            <div className="text-base font-semibold font-poppins">{titre}</div>
        </Link>
    )
}