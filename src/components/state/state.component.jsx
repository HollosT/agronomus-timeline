import { Fragment } from "react";

const State = ({content}) => {
    const {type, list} = content
    return (
        <Fragment>
            <h5>{type}</h5>
            <nav>
                {list && list.length > 0 ? list.map((list, count) => (
                    <li key={count}>{list}</li>
                )): <p> - </p>}
            </nav>
        </Fragment>
    )
}

export default State;