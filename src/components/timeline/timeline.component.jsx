import State from '../state/state.component';
import './timeline.styles.scss'

const Timeline = ({version}) => {
    const {versionNumber, title, description, date, type, contents} = version;
    return (
        <div className="timeline-container">
            <h3>{versionNumber}</h3>
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
                            <h4>{type}</h4>
                            {contents.map((content, count) => (
                                <State key={count} content={content}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Timeline