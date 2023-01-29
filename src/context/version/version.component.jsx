import { createContext, useEffect, useState } from "react";
import { addDocument, getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { v4 as uuidv4 } from 'uuid';


export const VersionContext = createContext({
    versions: [],
    addVersion: () => {},
    getDocuments: () => {},
    isLoading: false
})

export const VersionProvider = (props) => {
    const [versions, setVersions] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {

      const getVersions = async () => {  
          setLoading(true)

          const versionsArr = await getCategoriesAndDocuments()
          setVersions(versionsArr)
          setLoading(false)
      }
      getVersions()
    }, [])
   
   

    const addVersion =  (payload, key) => {

      const documentKey = uuidv4();
       
      addDocument(payload, key, documentKey);

      setVersions(prevState => {
        return [payload, ...prevState]
      })
    }
    
    return (
      <VersionContext.Provider
        value={{
            versions,
            addVersion,
            isLoading
        }}
      >
        {props.children}
      </VersionContext.Provider>
    );
};