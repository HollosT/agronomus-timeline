import AddNewContainer from '../../components/add-new/add-new-container/add-new-container.component';

import './new-version.styles.scss'

const NewVersion = () => {

    return (
        <div className="new-version-container site-width">
            <h1>Add new version</h1>
            <AddNewContainer />
        </div>
    )
}

export default NewVersion;