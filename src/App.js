import { Routes, Route} from 'react-router-dom';
import Auth from './routes/auth/auth.component.jsx';
import Home from './routes/home/home.component.jsx';
import NewVersion from './routes/new-version/new-version.component.jsx'


import Navigation from './routes/navigation/navigation.component.jsx'
import { useEffect, useState } from 'react';



const App = () => {
  const [uid, setUid] = useState()

  useEffect(() => {
    const id = localStorage.getItem('uid');
    setUid(id)
  }, [])

 

  return (
    <Routes>
      <Route path='/' element={ <Navigation />}>
          <Route path='/versions' element={ <Home />} />
          <Route index element={ <Auth />} />
          <Route path='add-new' element={ <NewVersion />} />
      </Route>
    </Routes>
  );
}

export default App;
