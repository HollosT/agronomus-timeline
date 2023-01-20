import StateContainer from '../state/state-container/state-container.component';
import './timeline.styles.scss'

const Timeline = ({version}) => {
    const {versionNumber, title, description, date, contents} = version;

    return (
        <div className="timeline-container">
            <h3>{versionNumber}. verzió</h3>
            <div className="horizontal-line"></div>
            <div>
                <div className="title-container">
                    <h2>{title}</h2>
                    <span>{date}</span>
                    <p>{description}</p>
                </div>
                <div className="state">
                    <div className="state-container">
                        <div className="state-badge"></div>
                        <div className="state-list">
                            <StateContainer contents={contents}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Timeline