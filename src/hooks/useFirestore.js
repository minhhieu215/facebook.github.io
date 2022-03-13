import React from 'react'
import { db } from '.././firebase/config'
import { orderBy ,query, where, limit , collection, doc, onSnapshot } from "firebase/firestore";  
const useFirestore =(collections, condition)=>{
    const [ documents  , setDocuments ] =React.useState()
    React.useEffect(()=>{

        const collectionRef =query(collection(db, collections),orderBy('createdAt'),where(
          condition?.fieldName,
          condition?.operator,
          condition?.compareValue
        ));
        if (condition) {
            if (!condition.compareValue || !condition.compareValue.length) {
              // reset documents data
              setDocuments([]);
              return;
            }
        }
        const unsubscribe = onSnapshot(collectionRef ,(snapshot) => {
          const documents = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
    
          setDocuments(documents);
        });
              return unsubscribe;
    },[collections, condition])
  return documents;
}
export default useFirestore