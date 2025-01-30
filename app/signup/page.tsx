import { MotDePasse } from "@/components/ui/input";
import Link from "next/link";
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";



export default async function Signup(){
    const handleAction = async (data : FormData) => {
        "use server"
        const req = await fetch(process.env.URL_SERVER + '/users/new', {
            method : 'POST', 
            body : data
        })

        const cookiesStore = await cookies();
        
        if(req.ok) {
            const result = await req.json()
            cookiesStore.set('userToken', result.token)

            redirect('/')
        }
    }
    return(
        <div className="w-dvw h-screen flex items-center justify-center">
            <div className="w-full lg:w-[400px] ">
                <div>
                    <div className="text-2xl font-bold font-poppins mb-6 px-4">
                        Creer un Compte
                    </div>
                    <div className="mb-6">
                        <form action = {handleAction} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="pb-2 inline-block px-4">Votre Prenom</label>
                                <input className="px-4 py-4 bg-slate-50 font-roboto text-base rounded-full block w-full" name="firstName" type="text" placeholder="Entrez votre Email" />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="pb-2 inline-block px-4">Votre Nom</label>
                                <input className="px-4 py-4 bg-slate-50 font-roboto text-base rounded-full block w-full" name="lastName" type="text" placeholder="Entrez votre Email" />
                            </div>
                            <div>
                                <label htmlFor="email" className="pb-2 inline-block px-4">Votre Email</label>
                                <input className="px-4 py-4 bg-slate-50 font-roboto text-base rounded-full block w-full" name="email" type="email" placeholder="Entrez votre Email" />
                            </div>
                           <MotDePasse/>
                           <div>
                            <button className="px-4 py-4 bg-blue-600 font-roboto text-base font-bold rounded-full block w-full text-white hover:bg-blue-700">
                                S{"'"}inscrire
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