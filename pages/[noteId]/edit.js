import { useRouter } from 'next/router'
import  { useState}  from 'react'
import styles from '../../styles/new.module.css'

const  UpdateData=({note})=> {
    
    const {data}=note
    console.log(data)
   const [form,setForm]= useState({title:data.title,description:data.description})
   const [isSubmitting,setIsSubmitting]=useState(false)
 
   const router=useRouter()

   const handleSubmit= async(e)=>{
       e.preventDefault()
       console.log('click')
       const noteId=router.query.noteId
          try {
            
        const res= await fetch(`http://localhost:3000/api/notes/${noteId}`,{
            method:'PUT',
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
           [e.target.name]:e.target.defaultValue
       })
   }

//    const createNote=async()=>{

 

//    }
   
    return (
        <div>
          {
              isSubmitting? <div><h2>loading....</h2></div>:

              <div className={styles.formContainer}>

                  <form onSubmit={handleSubmit}>
                      <input onChange={handleChange}   type="text" name="title" placeholder="title" required /><br />
                      <textarea onChange={handleChange}  name="description" placeholder="description"  rows="10" required></textarea><br />
                      <input type="submit" value="Update" />

                  </form>

              </div>
          }  
        </div>
    )
}

UpdateData.getInitialProps=async({query:{noteId}})=>{
    const res=await fetch(`http://localhost:3000/api/notes/${noteId}`)
    // const noteData=await res.json()
    const{data}=await res.json()
    console.log(data)
    return{
      note:{data}
    }
  }
export default  UpdateData

