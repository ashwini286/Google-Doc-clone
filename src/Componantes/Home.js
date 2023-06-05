import React, { useEffect, useState } from 'react'
import './Login.css'
import { useNavigate  } from 'react-router-dom'
import {signOut , getAuth , onAuthStateChanged} from 'firebase/auth'
import {collection, addDoc , onSnapshot} from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = ({database}) => {
    let databaseCollection = collection(database , 'docs-data')
    let useEmail = localStorage.getItem('useEmail')
    const [isAdd, setIsAdd] = useState(false)
   const[title, setTitle] = useState('')
   const[docsData, setDocsData] = useState([])
    const auth = getAuth()
    const navigate = useNavigate()


    const Logout = () => {
        signOut(auth)
        .then(() => {
            navigate('/')

        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (response) => {
            if(response){
                navigate('/home')
            } else{
                navigate('/')
            }
        });
    }, [])
    const addDocument = () => {
        addDoc(databaseCollection , {
            title : title,
            author: useEmail,
            body: ""
        })
        .then((response) => {
            console.log(response.id)

            toast.success('Document Created',{
                autoClose:1000
            });
            setIsAdd(false)
            setTitle('')

        })
        .catch(() => {
            toast.error('Data cannot Add',{
                autoClose:1000
            })

          
        }); 

    };

    const OpenEditor = (id) => {
        console.log(id)

        navigate(`/editor/${id}`)

    }

    useEffect(() =>{
        onSnapshot(databaseCollection, (response) => {
            setDocsData(response.docs.map((doc) => {
                return {
                    id: doc.id,
                   ...doc.data()

                }
            }))
        })
    })

  return (
    <div>
       <ToastContainer />
      {/* <h1>Home page</h1> */}
      <div className='logout'>
      <button className='LogOut-btn' onClick={Logout}>LogOut</button>
      </div>
      <button className='add-doc' onClick={() => setIsAdd(!isAdd)}>+ Add document</button>
      {isAdd ? ( 
        <div className='title-input'>
      <input placeholder='Add a Title ....' className='add-title' value={title} onChange={(event) =>  {
        setTitle(event.target.value)
      }}/>
      <button className='add-btn' onClick={addDocument}>Add</button>
      </div>

      ) : (
        <></>

      )}
      <div className='grid-main'>
        {docsData.map((doc) => {
            return (
              <div className='grid-child' onClick={() => OpenEditor(doc.id)}> 

              <h3>{doc.title}</h3>
              </div>
            )
        })}
      </div>
    
    </div>
  )
}

export default Home
