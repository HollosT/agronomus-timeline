import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddNewContainer from "../../components/add-new/add-new-container/add-new-container.component";
import Spinner from "../../components/UI/spinner/spinner.component";
import { VersionContext } from "../../context/version/version.component";


const EditVersion = () => {
    const params = useParams();
    const {version, getVersion, isLoading} =useContext(VersionContext); 
    useEffect(() => {
        getVersion(params.id)
    }, [])

    return (
        <section>
            {isLoading && <Spinner />}
            {isLoading || 
                <AddNewContainer version={version} edit={true} />
            }
        </section>
    )
};


export default EditVersion;