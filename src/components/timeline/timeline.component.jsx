import './timeline.styles.scss'


const Timeline = () => {

    return (
        <div className="timeline-container">
            <h3>1st version</h3>
            <div className="horizontal-line"></div>
            <div>
                <div className="title-container">
                    <h2>Title</h2>
                    <span>2022.12.31</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="state">
                    <div className="state-container">
                        <div className="state-badge"></div>
                        <div className="state-list">
                            <h4>Updates</h4>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Timeline