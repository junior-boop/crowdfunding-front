'use client'
import React, { useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // for snow theme

export default function RichEditor() {
  const [value, setValue] = useState('');

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
        theme: 'snow',
        modules : modules
    });
    
  }, []);

  return (<div id="editor"></div>)
}