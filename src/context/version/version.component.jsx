import { createContext, useEffect, useState } from "react";
import { addDocument, getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";


export const VersionContext = createContext({
    versions: [],
    addVersion: () => {},
    getDocuments: () => {}
})

export const VersionProvider = (props) => {
    const [versions, setVersions] = useState([])

    useEffect(() => {
      const userId = localStorage.getItem('uid');

      const getVersions = async () => {
        if(userId) {
          const versionsArr = await getCategoriesAndDocuments(userId)
          setVersions(versionsArr.reverse())

        }
      }

      getVersions()
    }, [])
   
   

    const addVersion =  (payload, key) => {

      const documentKey = payload.versionNumber
       
      addDocument(payload, key, documentKey)
    }
    
    return (
      <VersionContext.Provider
        value={{
            versions,
            addVersion,
        }}
      >
        {props.children}
      </VersionContext.Provider>
    );
};