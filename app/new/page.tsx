import RichEditor from "@/components/richEditortext";
import Container from "@/components/ui/container";

export default function ProjectNew(){
    return(
        <section>
            <Container>
                <div className="flex gap-10">
                    <div className="w-[350px]">
                        <div className="w-full bg-slate-100 h-[300px]"></div>
                    </div>
                    <div className="flex-1">
                        <div className="mb-4">
                            <label htmlFor="title" className="text-xl font-semibold font-poppins mb-2 inline-block">Titre du projet</label>
                            <input type="text" name = "title" placeholder="Entrez le titre du projet" className="px-4 py-2 bg-slate-50 font-roboto text-base rounded-md block w-full border border-[#ccc]" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="title" className="text-xl font-semibold font-poppins mb-2 inline-block">Image Principale</label>
                            <InputImage />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="title" className="text-xl font-semibold font-poppins mb-2 inline-block">Description</label>
                            <RichEditor />
                        </div>
                        
                    </div>
                </div>
            </Container>
        </section>
    )
}

function InputImage(){
    return(
        <div className={`ImageInput w-full h-[100px]`}>
            <input type="file" className="inputButton" />
        </div>
    )
}