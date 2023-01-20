import { Routes, Route} from 'react-router-dom';
import Auth from './routes/auth/auth.component.jsx';
import Home from './routes/home/home.component.jsx';
import NewVersion from './routes/new-version/new-version.component.jsx'


import Navigation from './routes/navigation/navigation.component.jsx'
import { VersionContext } from './context/version/version.component.jsx';

import { useContext } from 'react';
import { UserContext } from './context/user/user.context.jsx';


const App = () => {
  // const userCtx = useContext(UserContext)

  // const version = useContext(VersionContext)
  // console.log(userCtx.currentUser.uid);

    // version.getDocuments(userCtx.currentUser.uid)


  return (
    <Routes>
      <Route path='/' element={ <Navigation />}>
          <Route index element={ <Home />} />
          <Route path='add-new' element={ <NewVersion />} />
          <Route path='auth' element={ <Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
