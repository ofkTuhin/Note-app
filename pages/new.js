import { useRouter } from 'next/router'
import  { useState}  from 'react'
import styles from '../styles/new.module.css'

const  NewData=()=> {
   const [form,setForm]= useState({title:"",description:""})
   
   const router=useRouter()

   const handleSubmit= async(e)=>{
       e.preventDefault()
       console.log('click')
          try {
        const res= await fetch('http://localhost:3000/api/notes',{
            method:'POST',
            headers:{
                'Accepts':'application/json',
                "Content-type":"application/json"
            },
            body:JSON.stringify(form)
        })
        console.log(res)
        router.push('/')
    }
    
    catch (error) {
        console.log(error)
    }
    e.target.reset()
       console.log(form)
   }
   
   const handleChange=(e)=>{
       setForm({
           ...form,
           [e.target.name]:e.target.value
       })
   }

//    const createNote=async()=>{

 

//    }
   
    return (
        <div>
         

              <div className={styles.formContainer}>

                  <form onSubmit={handleSubmit}>
                      <input onChange={handleChange} type="text" name="title" placeholder="title" required /><br />
                      <textarea onChange={handleChange} name="description" placeholder="description"  rows="10" required></textarea><br />
                      <input type="submit" value="Create" />

                  </form>

              </div>
          
        </div>
    )
}
export default  NewData
