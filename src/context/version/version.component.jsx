import { createContext, useContext, useState } from "react";
import { addDocument, getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../user/user.context";






export const VersionContext = createContext({
    versions: [],
    addVersion: () => {},
    getDocuments: () => {}
})

export const VersionProvider = (props) => {
    const [versions, setVersions] = useState([])

    const getDocuments = async (key) => {
 
      const versionWannbe = await getCategoriesAndDocuments(key)
        setVersions(versionWannbe)
    }

    const addVersion =  (payload, key) => {

        const documentKey = payload.versionNumber
       
        addDocument(payload, key, documentKey)
    }
    
    return (
      <VersionContext.Provider
        value={{
            versions,
            addVersion,
            getDocuments
        }}
      >
        {props.children}
      </VersionContext.Provider>
    );
};