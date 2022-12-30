import Timeline from "../../components/timeline/timeline.component";

const DUMMY_VERSIONS = [
    {
        versionNumber: '1st version',
        id: 1,
        title: 'Title 01',
        date: '2022.12.29.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        contents: [
            {
                type: 'New',
                list: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do']
            },
            {
                type: 'Updates',
                list: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ']
            },
            {
                type: 'Error fix',
                list: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ']
            }
        ]
    },
    {
        versionNumber: '2st version',
        id: 2,
        title: 'Title 02',
        date: '2023.02.29.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        contents: [
            {
                type: 'New',
                list: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do']
            },
            {
                type: 'Updates',
                list: undefined,
            },
            {
                type: 'Error fix',
                list: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' , 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ']
            }
        ]
    },
    {
        versionNumber: '3st version',
        id: 3,
        title: 'Title 03',
        date: '2023.03.29.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        contents: [
            {
                type: 'New',
                list: undefined
            },
            {
                type: 'Updates',
                list: undefined,
            },
            {
                type: 'Error fix',
                list: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' , 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ']
            }
        ]
    },
]

const Home = () => {

    return (
        <section>
            {DUMMY_VERSIONS.map(version => (
                <Timeline key={version.id} version={version} />
            ))}
        </section>
    )
};

export default Home;

