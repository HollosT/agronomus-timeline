import { createContext, useEffect, useState } from "react";
import { addDocument, getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { v4 as uuidv4 } from 'uuid';


export const VersionContext = createContext({
    versions: [],
    addVersion: () => {},
    getDocuments: () => {},
    isLoading: false,
    getVersions: ()=> {},
})

export const VersionProvider = (props) => {
    const [versions, setVersions] = useState([]);
    const [isLoading, setLoading] = useState(false)



      const getVersions = async () => {  
          setLoading(true)

          const versionsArr = await getCategoriesAndDocuments()
          const ascVersions = versionsArr.sort((a,b)=>  b.created - a.created )
          setVersions(ascVersions)
          setLoading(false)
      }


   
   

    const addVersion =  (payload, key) => {
      const documentKey = uuidv4();
      addDocument(payload, key, documentKey);

      getVersions()
    }
    
    return (
      <VersionContext.Provider
        value={{
            versions,
            addVersion,
            isLoading,
            getVersions
        }}
      >
        {props.children}
      </VersionContext.Provider>
    );
};