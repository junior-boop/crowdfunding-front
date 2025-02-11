import { MotDePasse } from "@/components/ui/input";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Login(){
    const handleAction = async (data : FormData) => {
            "use server"
            const req = await fetch(process.env.URL_SERVER + '/users/login', {
                method : 'POST', 
                body : data
            })
    
            const cookiesStore = await cookies();
            
            if(req.ok) {
                const result = await req.json()
                console.log(result)
                if(result.statut === 1){
                    cookiesStore.set('userToken', result.token)
                    redirect('/')
                }

                if(result.statut === 3){
                    redirect('/login/bad-user')
                }
            }
        }
    return(
        <div className="w-dvw h-screen flex items-center justify-center">
            <div className="w-full lg:w-[400px] ">
                <div>
                    <div className="text-2xl font-bold font-poppins mb-4 px-4">
                        Se Connecter
                    </div>
                    <div className="mb-6 px-4 py-3 rounded-xl bg-red-100 text-red-900 border border-red-300">
                        Soit le mot de passe ou le l{"'"}adresse email n{"'"}est pas correct 
                    </div>
                    <div className="mb-6">
                        <form action={handleAction} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="pb-2 inline-block px-4">Votre Email</label>
                                <input className="px-4 py-4 bg-slate-50 font-roboto text-base rounded-full block w-full" name="email" type="email" placeholder="Entrez votre Email" />
                            </div>
                           <MotDePasse/>
                           <div>
                           <button className="px-4 py-4 bg-blue-600 font-roboto text-base font-bold rounded-full block w-full text-white hover:bg-blue-700">
                                Se Connecter
                            </button>
                           </div>
                        </form>
                    </div>
                    <div className=" px-4 font-roboto font-semibold">
                        Si vous n{"'"}avez pas de compte, <Link href="/signup" className="text-blue-600 hover:underline">Créez un compte</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}