import { collection, getDoc, getDocs, query, doc, } from "firebase/firestore";
import { createTaskAdapterFromFirestore } from '../../adapters/taskAdapter';
import db from "../../config/Firebase";

export const getTasks = async () => {
    const collectionRef = collection(db, "productos");
    
    const queryRef = query(collectionRef);

    const queryResult = await getDocs(queryRef);

    const taskAdapter = queryResult.docs.map((doc) =>
        createTaskAdapterFromFirestore(doc)
    )

    return taskAdapter
};