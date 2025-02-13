'use client'

import { ChangeEvent, useEffect, useRef, useState } from "react"
import { LucidePlus, LucideSave, SvgSpinners8DotsRotate } from "./icones"


type InputTextProps = {
    name: string,
    label: string,
    placeholder?: string,
    url?: string,
    mettingId?: string,
    value?: string
}
export default function InputText({ name, label, placeholder, url, mettingId, value = "" }: InputTextProps) {
    const inputRef = useRef<HTMLInputElement>(null)
    const [isLoading, setIsloading] = useState(false)
    const [disabled, setDisable] = useState(false)


    const uploadChangement = async () => {
        setIsloading(true)

        const input = inputRef.current as HTMLInputElement
        if (input !== undefined) {

            if (!disabled) {
                const bodyContent = new FormData()
                bodyContent.append(name, input.value)

                const link = await fetch(`/api/${name}/${mettingId}`, {
                    method: 'PUT',
                    body: bodyContent
                })
                if (link.ok) {
                    setIsloading(false)
                    setDisable(true)
                }
            }

        }

    }

    useEffect(() => {
        if (value) setDisable(true)
        if (inputRef.current !== null && inputRef.current !== undefined) {
            inputRef.current.value = value
        }

    }, [inputRef])

    return (
        <div className="p-4 bg-slate-100 mt-4">
            <div className="mb-3 flex items-center justify-between">
                <label className="block w-full">
                    {label}
                </label>
                <button onClick={uploadChangement} className={disabled ? 'text-noir-100' : 'text-vert'}>
                    {
                        isLoading
                            ? <SvgSpinners8DotsRotate className="w-6 h-6" />
                            : <LucideSave className="w-6 h-6" />
                    }
                </button>
            </div>
            <input ref={inputRef} type="text" className="block w-full bg-slate-100 outline-none" placeholder={placeholder} name={name} onChange={() => setDisable(false)} />
        </div>
    )
}
export function InputText_2({ name, label, placeholder, url }: InputTextProps) {
    return (
        <div className="p-4 bg-slate-100 mt-4">
            <div className="mb-3 flex items-center justify-between">
                <label className="block w-full">
                    {label}
                </label>
                {/* <button>
                    <LucideSave className="w-6 h-6 text-vert" />
                </button> */}
            </div>
            <input type="text" className="block w-full bg-slate-100 outline-none" placeholder={placeholder} name={name} required />
        </div>
    )
}
export function InputDate({ name, label}: InputTextProps) {
    return (
        <div className="p-4 bg-slate-100  flex-1">
            <div className="mb-3 flex items-center justify-between">
                <label className="block w-full">
                    {label}
                </label>
                {/* <button>
                    <LucideSave className="w-6 h-6 text-vert" />
                </button> */}
            </div>
            <input type="date" className="block w-full bg-slate-100 outline-none" name={name} required />
        </div>
    )
}


export function InputPhotos({ name, label}: InputTextProps) {
    const [imageFile, setImageFile] = useState<{src : string | ArrayBuffer | null}[]>([])

    const handleTakeImage = (e: ChangeEvent) => {
        const files = e.target.files

        for(let i=0; i < files.length; i++){
            const file = files[i]
            const reader = new FileReader()
    
            reader.addEventListener('load', () => {
                const base64 = reader.result
                setImageFile(el => [...el, {src : base64}])
            })
        
            reader.readAsDataURL(file)
        }

    }

    return (
        <div className="flex-1">
            <div className="bg-slate-100 p-4 flex items-center justify-between">
                <label className="block w-full">
                    {label}
                </label>
            </div>
            <div className="grid grid-cols-3">
                {
                    imageFile.map((el, key) => (<div key={key} className="bg-cover bg-center bg-no-repeat w-full h-full">
                        <img src={el.src} className="w-full aspect-square object-cover object-center" alt="" />
                    </div>))
                }
                <div className="w-full aspect-square border border-gray-300 relative flex items-center justify-center bg-slate-100">
                    <div className="flex justify-center flex-col items-center">
                        <LucidePlus className="h-9 w-9 text-slate-600" />
                        <div className="font-poppins font-bold text-sm text-slate-600 text-center">Ajouter <br/> une image</div>
                    </div>
                    <input onChange={handleTakeImage} type="file" className="block w-full bg-slate-100 outline-none w-full h-full inputGalleries" name={name} required multiple />
                </div>
            </div>
            
        </div>
    )
}