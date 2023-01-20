import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Timeline from "../../components/timeline/timeline.component";

import { VersionContext } from "../../context/version/version.component";


const Home = () => {
    const versions = useContext(VersionContext);

    return (
        <section>
            {versions.versions.map(version => (
                <Timeline key={version.versionNumber} version={version} />
            ))}
        </section>
    )
};

export default Home;

