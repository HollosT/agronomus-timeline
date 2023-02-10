import { createContext, useState } from "react";
import { addDocument, getCategoriesAndDocuments, getVersionById } from "../../utils/firebase/firebase.utils";
import { v4 as uuidv4 } from 'uuid';


export const VersionContext = createContext({
    versions: [],
    addVersion: () => {},
    getDocuments: () => {},
    isLoading: false,
    getVersions: ()=> {},
    version: {},
    getVersion: () => {}
})

export const VersionProvider = (props) => {
    const [versions, setVersions] = useState([]);
    const [version, setVersion] = useState({})
    const [isLoading, setLoading] = useState(false)

      const getVersion= async (id) => {
          setLoading(true)

          const currVersion = await getVersionById(id);
          setVersion(currVersion)
          setLoading(false)
      }

      const getVersions = async () => {  
          setLoading(true)

          const versionsArr = await getCategoriesAndDocuments()
          const ascVersions = versionsArr.sort((a,b)=>  b.created - a.created )
          setVersions(ascVersions)
          setLoading(false)
      }


   
    const addVersion =  (payload, key) => {
      const id = uuidv4();
      const version = {
        ...payload,
        versionId: id
      }
      addDocument(version, key, id);

      getVersions()
    }
    
    return (
      <VersionContext.Provider
        value={{
            versions,
            addVersion,
            isLoading,
            getVersions,
            getVersion,
            version
        }}
      >
        {props.children}
      </VersionContext.Provider>
    );
};