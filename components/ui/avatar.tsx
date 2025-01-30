import { Button_Arrondi } from "./button";
import { FluentPerson24Filled } from "./icones";

export default function Avatar(){
    return(
        <Button_Arrondi>
            <div className="flex items-center">
            <div className="w-[42px] h-[42px] bg-foreground rounded-full flex items-center justify-center">
                <FluentPerson24Filled className="h-6 w-6" />
            </div>
            <div className="px-4 text-base font-semibold font-poppins"> Daniel Seppo Eke</div>
            </div>
        </Button_Arrondi>
    )
}