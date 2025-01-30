import Avatar from "./ui/avatar";
import { Button_Round } from "./ui/button";
import { FluentAdd24Filled, FluentAlertBadge24Regular } from "./ui/icones";
import InputSearch from "./ui/inputsearch";

export default function Header(){
    return (
        <header className="bg-white sticky top-0 left-0 right-0 z-10">
            <div className="lg:px-4 flex justify-between items-center lg:py-3">
            <h1 className="text-xl font-bold font-poppins flex items-center space-x-2">
                <div className="w-[42px] h-[42px] bg-foreground rounded-full">

                </div>
                <span>Crowndfunding</span>
            </h1>
            <div>
                <div className="flex items-center space-x-3">
                    <div>
                        <InputSearch />
                    </div>
                    <Button_Round>
                        <FluentAlertBadge24Regular className="h-6 w-6" />
                    </Button_Round>
                    <Button_Round>
                        <FluentAdd24Filled className="h-6 w-6" />
                    </Button_Round>
                    <Avatar />
                </div>
            </div>
            </div>
        </header>
    )
}