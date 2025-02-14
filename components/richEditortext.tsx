'use client'
import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // for snow theme



export default function RichEditor({ placeholder, name }:{ placeholder : string, name : string}) {
  const editorRef = useRef()

  const modules = {
    toolbar: [
     [{ header: [1, 2, false] }],
     ["bold", "italic", "underline", "strike", "blockquote"],
     [{ align: ["right", "center", "justify"] }],
     [{ list: "ordered" }, { list: "bullet" }],
     ["link", "image"],
    ],
   };

   

   useEffect(() => {
    const editor = new Quill('#editor', {
        placeholder : placeholder,
        theme: 'snow',
        modules : modules
    });

    editorRef.current = editor.getSemanticHTML() ;

    return () => editor.disable() 
  }, []);


  return (<>
    <textarea className='hidden' name={name} value={editorRef.current as string}></textarea>
    <div id="editor"></div>
  </>)
}