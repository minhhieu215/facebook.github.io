import { addDoc ,serverTimestamp, collection } from 'firebase/firestore'
import firebase,{db}  from './config'
export const addDocument=(collectionName, data)=>{
    console.log(data)
    if(collectionName&&data){
        addDoc(collection(db,collectionName),{
            ...data,
            createdAt: serverTimestamp()
        })
    }
}