import { MotDePasse } from "@/components/ui/input";
import Link from "next/link";

export default function Login(){
    return(
        <div className="w-dvw h-screen flex items-center justify-center">
            <div className="w-full lg:w-[400px] ">
                <div>
                    <div className="text-2xl font-bold font-poppins mb-6 px-4">
                        Se Connecter
                    </div>
                    <div className="mb-6">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="email" className="pb-2 inline-block px-4">Votre Email</label>
                                <input className="px-4 py-4 bg-slate-50 font-roboto text-base rounded-full block w-full" name="email" type="email" placeholder="Entrez votre Email" />
                            </div>
                           <MotDePasse/>
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