
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

 const Home =({data}) =>{
 console.log(data)

  const router=useRouter()
  return (
  <>
  {
    data.map(note=>{
   return(
    <>
    <div key={note._id} className={styles.container}>
    <div key={note._id} className={styles.card}>
      <div key={note._id} className={styles.cardTitle}><h4>{note.title}</h4></div>
      <div className={styles.cardButton}>
        <a className={`${styles.editViewButton} ${styles.edit}`}
        
        onClick={()=>{
          console.log(note._id)
          router.push(
            {
              pathname:'/[noteId]/edit',
              query:{noteId:note._id}
            }
          )

        }}
        >Edit</a>
        <a className={`${styles.editViewButton} ${styles.view}`}
        
        onClick={()=>{
          console.log(note._id)
          router.push(
            {
              pathname:'/[noteId]',
              query:{noteId:note._id}
            }
          )

        }}
        >View</a>
      </div>
    </div>
   </div>
    </>
   )
    })
  }
  </>
  )
}

export const getStaticProps=async()=>{
  const res=await fetch('http://localhost:3000/api/notes')
  // const noteData=await res.json()
  const{data}=await res.json()
  console.log(data)
  return{
    props:{data}
  }
}
export default  Home