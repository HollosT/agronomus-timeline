import { Fragment } from "react";
import StateItem from "../state-item/state-item.component";

const StateContainer = ({contents}) => {
    const [news, updates, errors] = contents
    // console.log(news, updates, errors)

    return (
        <Fragment>
                <nav>
                <h5>Újdonságok</h5>
                    {news.length > 0 ?
                            (
                                <ul>
                                {news.map(({id, content}) => (
                                    <StateItem key={id} item={content} />
                                ))}
                                </ul>
                            ) 
                            : 
                            <p> - </p>
                    }
                </nav>
                <nav>
                <h5>Frissítések</h5>
                    {updates.length > 0 ?
                            (
                                <ul>
                                {updates.map(({id, content}) => (
                                    <StateItem key={id} item={content} />
                                ))}
                                </ul>
                            ) 
                            : 
                            <p> - </p>
                    }
                </nav>
                <nav>
                <h5>Javítások</h5>
                    {errors.length > 0 ?
                            (
                                <ul>
                                {errors.map(({id, content}) => (
                                    <StateItem key={id} item={content} />
                                ))}
                                </ul>
                            ) 
                            : 
                            <p> - </p>
                    }
                </nav>
        
        </Fragment>
    )
}

export default StateContainer;