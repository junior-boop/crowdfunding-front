import { cookies } from "next/headers";
import MenuFunction from "./MenuFunction";
import Avatar from "./ui/avatar";
import InputSearch from "./ui/inputsearch";
import { LoginBtn } from "./loginState";

const getUserInformation = async (token : string) =>{
    const request = await fetch(process.env.URL_SERVER + "/users/token?v="+token)
    const data = await request.json()
    return data
} 

export default async function Header(){
    const cookiesStore = await cookies();
  
  const user = cookiesStore.get('userToken')

  const data = await getUserInformation(user?.value)
    let name:string
    let last:string
    
  if(user !== undefined) {
    name = data.user.firstName;
    last = data.user.lastName;
  }

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
                   <MenuFunction />
                    <>
                        {
                            user 
                            ? <Avatar userName={`${name.split(" ")[0]} ${last.split(' ')[0]}`} />
                            : <LoginBtn />
                        }
                        
                    </>
                </div>
            </div>
            </div>
        </header>
    )
}