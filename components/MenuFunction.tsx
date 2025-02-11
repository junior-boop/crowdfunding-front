'use client'
import { Button_Round } from "./ui/button";
import { FluentAdd24Filled, FluentAlertBadge24Regular } from "./ui/icones";

export default function MenuFunction(){
    return(
        <>
         <Button_Round>
            <FluentAlertBadge24Regular className="h-6 w-6" />
        </Button_Round>
        <Button_Round onClick={() => window.location.href = "/new"}>
            <FluentAdd24Filled className="h-6 w-6" />
        </Button_Round>
        </>
    )
}