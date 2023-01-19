import { Routes, Route} from 'react-router-dom';
import Auth from './routes/auth/auth.component.jsx';
import Home from './routes/home/home.component.jsx';
import NewVersion from './routes/new-version/new-version.component.jsx'


import Navigation from './routes/navigation/navigation.component.jsx'
import { VersionContext } from './context/version/version.component.jsx';
import { useContext } from 'react';


const App = () => {
  const version = useContext(VersionContext)
  version.getDocuments()
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
