import { Fragment } from "react";
import StateItem from "../state-item/state-item.component";

import './state-container-styles.scss'

const StateContainer = ({contents}) => {
    const [news, updates, errors] = contents
    const newsArr = news.news.map(item => item);
    const updatesArr = updates.updates.map(item => item);
    const errorsArr = errors.errors.map(item => item);
 

    return (
        <Fragment>
                <nav className="state">
                    <div className="state-title--container">
                    <span className="material-symbols-outlined news">
                        add_box
                    </span>
                        <h5 className="fs-sub-title">Újdonságok</h5>
                    </div>
                    {newsArr.length > 0 ?
                            (
                                <ul>
                                   { newsArr.map(({id, content}) => (
                                        <StateItem key={id} content={content} />
                                    ))}

                                </ul>
                            ) 
                            : 
                            (<p> - </p>)
                    }
                </nav>
                <nav className="state">
                    <div className="state-title--container">
                    <span className="material-symbols-outlined updates">
                        cached
                    </span>
                        <h5 className="fs-sub-title">Frissétések</h5>
                    </div>
                    {updatesArr.length > 0 ?
                            (
                                <ul>
                                   { updatesArr.map(({id, content}) => (
                                        <StateItem key={id} content={content} />
                                    ))}

                                </ul>
                            ) 
                            : 
                            (<p> - </p>)
                    }
                </nav>
                <nav className="state">
                    <div className="state-title--container">
                        <span className="material-symbols-outlined errors">
                        handyman
                        </span>
                        <h5 className="fs-sub-title">Javítások</h5>
                    </div>
                    {errorsArr.length > 0 ?
                            (
                                <ul>
                                   { errorsArr.map(({id, content}) => (
                                        <StateItem key={id} content={content} />
                                    ))}

                                </ul>
                            ) 
                            : 
                           ( <p> - </p>)
                    }
                </nav>

        
        </Fragment>
    )
}

export default StateContainer;