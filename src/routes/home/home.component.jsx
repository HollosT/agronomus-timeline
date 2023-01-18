import Timeline from "../../components/timeline/timeline.component";

const DUMMY_VERSIONS = [
    {
        versionNumber: '1st version',
        id: 1,
        title: 'Title 01',
        date: '2022.12.29.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        contents: [
            {news: [{id: 1, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}]},
            {updates: [{id: 2, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}, {id: 3, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}]},
            {errors: [{id: 3, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}, {id: 4, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}, {id: 5, content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}]}
        ]
    }

]

const Home = () => {

    return (
        <section className="site-width">
            {DUMMY_VERSIONS.map(version => (
                <Timeline key={version.id} version={version} />
            ))}
        </section>
    )
};

export default Home;

