import GoogleButton from 'react-google-button'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import './Login.css'
import { useNavigate  } from 'react-router-dom'
import {getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useEffect } from 'react'
export default function Login(){
    let navigate  = useNavigate()
    const auth = getAuth()
    let googleProvider = new GoogleAuthProvider()
    const singIn = () => {
        signInWithPopup(auth, googleProvider )
        .then((res) => {
            console.log(res.user)
            localStorage.setItem('useEmail', res.user.email)
        }) 
        .catch ((error) => {
            console.log(error)
        });
    };
    useEffect(() => {

        onAuthStateChanged(auth, (response) => {
            // console.log(response)
            if(response){
                navigate('/home')

            } else {
                navigate('/')
            }

        })

    },[])
    return(
      <div className='google'>
      <GoogleButton onClick={singIn}
/>
  
        </div>
    )
  }