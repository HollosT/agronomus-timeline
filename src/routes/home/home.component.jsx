import { useContext } from "react";
import Timeline from "../../components/timeline/timeline.component";
import { VersionContext } from "../../context/version/version.component";


// const DUMMY_VERSIONS = [
//     {
//         versionNumber: '1st version',
//         id: 1,
//         title: 'Title 01',
//         date: '2022.12.29.',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         contents: [
//             {news: [{id: 1, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}]},
//             {updates: [{id: 2, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}, {id: 3, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}]},
//             {errors: [{id: 3, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}, {id: 4, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}, {id: 5, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}]}
//         ]
//     },
//     {
//         versionNumber: '2st version',
//         id: 2,
//         title: 'Title 02',
//         date: '2022.12.29.',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         contents: [
//             {news: [{id: 34, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}]},
//             {updates: []},
//             {errors: [{id: 45, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}, {id: 56, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}, {id: 55, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}]}
//         ]
//     }

// ]

const Home = () => {
    const versions = useContext(VersionContext);
  
    


    return (
        <section className="site-width">
            {versions.versions.map(version => (
                <Timeline key={version.id} version={version} />
            ))}
        </section>
    )
};

export default Home;

