import React from 'react'
import { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReactQuill from 'react-quill';
import { collection, doc, updateDoc } from 'firebase/firestore';
import 'react-quill/dist/quill.snow.css';



const  modules  = {
  toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ script:  "sub" }, { script:  "super" }],
      ["blockquote", "code-block"],
      [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
      [{ 'direction': 'rtl' }], // text direction
      [{ list:  "ordered" }, { list:  "bullet" }],
      // [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
      // [{ 'font': [] }],
      [{ 'align': [] }],
      ["link", "image", "video"],
      ["clean"],
  ],
};
const Editor = ({database}) => {
    const [editorData , setEditorData] = useState('')
    let databaseCollection = collection(database , 'docs-data')
    let params = useParams();

    const GetEditorData = (value) => {
        setEditorData(value);
    };
    useEffect(() => {
        const updateDoc = setTimeout(() => { 
        }, 2000);
        return () => clearTimeout(updateDoc);
    }, [editorData]);
  return (
    <div>
     <ReactQuill  modules={modules} value={editorData} onChange={GetEditorData} />
    </div>
  );
}

export default Editor
