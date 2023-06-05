import React from 'react'
import { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReactQuill from 'react-quill';
import { collection, doc, updateDoc } from 'firebase/firestore';
import 'react-quill/dist/quill.snow.css';
const Editor = ({database}) => {
    const [editorData , setEditorData] = useState('')
    let databaseCollection = collection(database , 'docs-data')
    let params = useParams();


    // console.log(params.id)
    const GetEditorData = (value) => {
        setEditorData(value);
    };
    useEffect(() => {
        const updateDoc = setTimeout(() => {
            // console.log(editorData)

        }, 2000);
        return () => clearTimeout(updateDoc);
    }, [editorData]);
  return (
    <div>
     <ReactQuill  value={editorData} onChange={GetEditorData} />
    </div>
  );
}

export default Editor
