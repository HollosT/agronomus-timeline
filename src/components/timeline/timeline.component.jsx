
import { useContext } from 'react';
import StateContainer from '../state/state-container/state-container.component';
import './timeline.styles.scss'
import { UserContext } from '../../context/user/user.context';
import { useNavigate } from 'react-router-dom';


const Timeline = ({version}) => {
    const {versionNumber, title, description, date, contents, versionId} = version;
    const user = useContext(UserContext).currentUser;
    const navigate = useNavigate();

    const navigateToEdit = () => {
        navigate(`/edit-version/${versionId}`)
    }


    return (
        <div className="timeline-container">
            <h3 className='fs-title'>{versionNumber}. verzió</h3>
            <div className="horizontal-line"></div>
            <div className='timeline-content--container'>
                <div className="title-container">
                    <div>
                        <h2 className='fs-main-title'>{title}</h2>
                        <span className='fs-sub'>{date}</span>
                    </div>
                    <p className='fs-base'>{description}</p>
                </div>
                <div>
                        <StateContainer contents={contents}/>
                </div>
            </div>
            {user && <span onClick={navigateToEdit} className="material-symbols-outlined edit-btn">
                edit
            </span>}
        </div>
       
    )
};


export default Timeline