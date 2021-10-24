

// export async function getStaticPaths() {
    
//     const res = await fetch('http://localhost:3000/api/notes')
//     const {data} = await res.json()
    
  
  
//     const paths = data.map((i) => ({
//       params: { id:i._id.toString()},
//     }))
//     return { paths, fallback: false}
//   }

// // This also gets called at build time
// export async function getStaticProps({ params}) {

//   const res = await fetch(`http://localhost:3000/api/notes/${params.id}`)
//   const note = await res.json()

//   // Pass post data to the page via props
//   return { props: {note } }
// }

import styles from '../../styles/view.module.css'
import { useRouter } from 'next/router'



const NoteById = ({ note }) => {
    const router = useRouter()
    console.log(note)
    const handleDelete = async () => {
        const noteId = router.query.noteId
        console.log(noteId)
        try {
            const data = await fetch(`http://localhost:3000/api/notes/${noteId}`,
                {
                    method: 'DELETE'
                })
                console.log(data)
                router.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className={styles.viewCard}>

                <h1 className={styles.cardTitle}>{note.title}</h1>
                <p className={styles.cardDesc}>{note.description}</p>
                <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>


            </div>

        </>
    )
}

NoteById.getInitialProps = async ({ query: { noteId } }) => {
    const res = await fetch(`http://localhost:3000/api/notes/${noteId}`)
    const { data } = await res.json()
    console.log(data)
    return { note: data }
}

export default NoteById



// export async function getStaticPaths() {

//     const res = await fetch('http://localhost:3000/api/notes')
//     const notes = await res.json()
//     console.log(notes)
//     await new Promise(time=>setTimeout(time,5000))


//     const paths = notes.data.map((note) => ({
//       params: { id: note._id.toString()},
//     }))
//     return { paths, fallback: 'false'}


//   }


  // export async function getStaticProps({ params }) {
  //   const res = await fetch(`http://localhost:3000/api/notes/${params.id}`)
  //   const note = await res.json()

  //   return { props: note }
  // }