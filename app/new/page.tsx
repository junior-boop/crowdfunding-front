// import RichEditor from "@/components/richEditortext";
import Container from "@/components/ui/container";
// import { LineMdConfirmCircle, LucideSave, SvgSpinners8DotsRotate } from "@/components/ui/icones";
import { InputImage_2 } from "@/components/ui/inputImage";
import { InputText_2 } from "@/components/ui/inputText";
import TextArea, { TextArea_2 } from "@/components/ui/textArea";

export default function ProjectNew(){
    
    return(
        <section>
            <Container>
                <div className="text-3xl font-bold py-6 w-[950px] mx-auto">
                    Nouveau Projet
                </div>
                <form >
                    <div className="flex w-[950px] gap-6 mx-auto">
                        <InputImage_2 />
                        <div className="flex-1 space-y-4">
                            {/* <InputVideo_2 duration={(value: number) => setDuration(value)} /> */}
                            <TextArea label="Titre du projet" name="title" placeholder="Type your title here" />
                            <TextArea label="Description" name="desc" placeholder="Type the description here" />
                            {/* <button className="w-full h-[52px] bg-vert text-black font-bold mt-4 flex items-center justify-center gap-3" disabled={disabled}>
                                {
                                    !upload
                                        ? (<><LucideSave className="w-6 h-6" /> Save</>)
                                        : (
                                            <>
                                                {
                                                    !complet
                                                        ? (<div className="h-full relative w-full">
                                                            <div className="bg-black opacity-35 h-full" style={{ width: `${loading}%` }}></div>
                                                            <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center px-4 gap-3">
                                                                <SvgSpinners8DotsRotate className="h-6 w-6" /> Wait! It{"'"}s saving...
                                                            </div>
                                                        </div>)
                                                        : (
                                                            <div className="flex gap-3 items-center">
                                                                Operation completed
                                                                <LineMdConfirmCircle className="w-6 h-6" />
                                                            </div>
                                                        )
                                                }
                                            </>
                                        )
                                }
                            </button> */}
                        </div>
                    </div>
                </form>
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