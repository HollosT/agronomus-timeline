import { Fragment } from "react";
import StateItem from "../state-item/state-item.component";

const StateContainer = ({contents}) => {
    const [news, updates, errors] = contents
    const newsArr = news.news.map(item => item);
    const updatesArr = updates.updates.map(item => item);
    const errorsArr = errors.errors.map(item => item);
 
  



    return (
        <Fragment>
                <nav>
                <h5>Újdonságok</h5>
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
                <nav>
                <h5>Frissétések</h5>
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
                <nav>
                <h5>Javítások</h5>
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