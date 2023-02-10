import { Routes, Route} from 'react-router-dom';
import Auth from './routes/auth/auth.component.jsx';
import Home from './routes/home/home.component.jsx';
import NewVersion from './routes/new-version/new-version.component.jsx'
import EditVersion from './routes/edit-version/edit-version.jsx';


import Navigation from './routes/navigation/navigation.component.jsx'




const App = () => {

  return (
    <Routes>
      <Route path='/' element={ <Navigation />}>
          <Route index element={ <Home />} />
          <Route path='auth' element={ <Auth />} />
          <Route path='add-new' element={ <NewVersion />} />
          <Route path='edit-version/:id' element={ <EditVersion /> } />
      </Route>
    </Routes>
  );
}

export default App;
