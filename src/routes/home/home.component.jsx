import { useContext, useState } from "react";
import Timeline from "../../components/timeline/timeline.component";
import Spinner from '../../components/UI/spinner/spinner.component'
import { VersionContext } from "../../context/version/version.component";
import './home.styles.scss'


const Home = () => {
    const versions = useContext(VersionContext).versions;
    const isLoading = useContext(VersionContext).isLoading;


    if(!versions.length > 0 && !isLoading) {
        return <p className="no-version--paragraph">Nincsenek még új verziók...</p>
    }
    

    return (
        <section>
            {isLoading ? <Spinner />  : versions.map(version => (
                <Timeline key={version.versionNumber} version={version} />
            ))
            }
        </section>
    )
};

export default Home;

