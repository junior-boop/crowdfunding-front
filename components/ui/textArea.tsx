
'use client'

import { useEffect, useRef, useState } from "react"
import { LucideSave } from "./icones"
import dynamic from 'next/dynamic';
const RichEditor = dynamic(() => import("../richEditortext"), {
  loading: () => <p>Loading...</p>, ssr : false
})


type TextAreaProps = {
    label: string,
    name: string,
    placeholder: string,
    mettingId?: string,
    value?: string
}
export default function TextArea({ label, name, placeholder, mettingId, value = "" }: TextAreaProps) {
    const inputRef = useRef<HTMLTextAreaElement>(null)
    const [isLoading, setIsloading] = useState(false)
    const [disabled, setDisable] = useState(false)

    const handleChange = ({ target }: { target : any}) => {
        setDisable(false)
        target.style.height = 'auto'
        target.style.height = `${target.scrollHeight}px`
    }




    const uploadChangement = async () => {
        setIsloading(true)

        const input = inputRef.current as HTMLTextAreaElement
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
            inputRef.current.style.height = `${inputRef.current.scrollHeight}px`

        }

    }, [inputRef])


    return (
        <div className="bg-slate-100 py-4 px-4 ">
            <div className="mb-3 flex items-center justify-between">
                <label htmlFor="" className="block w-full">{label}</label>
                {/* <button onClick={uploadChangement} className={disabled ? 'text-noir-100' : 'text-blue-700'}>
                    {
                        isLoading
                            ? <SvgSpinners8DotsRotate className="w-5 h-5" />
                            : <LucideSave className="w-6 h-6" />
                    }
                </button> */}
            </div>
            <textarea ref={inputRef} onChange={handleChange} name={name} id="" placeholder={placeholder} className="block w-full bg-slate-100 resize-none outline-none h-auto transition-all ease-in-out duration-300" ></textarea>
        </div>
    )
}

export function TextArea_2({ label, name, placeholder }: TextAreaProps) {

    const handleChange = ({ target }: any) => {
        target.style.height = 'auto'
        target.style.height = `${target.scrollHeight}px`
    }


    return (
        <div className="bg-slate-100 py-4 px-4">
            <div className="mb-3 flex items-center justify-between">
                <label htmlFor="" className="block w-full">{label}</label>
                <button>
                    <LucideSave className="w-6 h-6 text-vert" />
                </button>
            </div>
            <textarea onChange={handleChange} name={name} id="" placeholder={placeholder} className="block w-full bg-slate-100 resize-none outline-none h-auto transition-all ease-in-out duration-300" required ></textarea>
        </div>
    )
}

export function TextArea_WithRichEditor({ label, name, placeholder, mettingId, value = "" }: TextAreaProps) {
    const inputRef = useRef<HTMLTextAreaElement>(null)
    const [isLoading, setIsloading] = useState(false)
    const [disabled, setDisable] = useState(false)

    const handleChange = ({ target }: { target : any}) => {
        setDisable(false)
        target.style.height = 'auto'
        target.style.height = `${target.scrollHeight}px`
    }




    const uploadChangement = async () => {
        setIsloading(true)

        const input = inputRef.current as HTMLTextAreaElement
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
            inputRef.current.style.height = `${inputRef.current.scrollHeight}px`

        }

    }, [inputRef])


    return (
        <div className="bg-slate-100">
            <div className="px-4 mb-3 flex items-center justify-between pt-4">
                <label htmlFor="" className="block w-full">{label}</label>
                {/* <button onClick={uploadChangement} className={disabled ? 'text-noir-100' : 'text-blue-700'}>
                    {
                        isLoading
                            ? <SvgSpinners8DotsRotate className="w-5 h-5" />
                            : <LucideSave className="w-6 h-6" />
                    }
                </button> */}
            </div>
            <RichEditor name={name} placeholder={placeholder} />
        </div>
    )
}