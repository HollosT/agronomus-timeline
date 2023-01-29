import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user/user.context';
import { ListProvider } from './context/list/list.component';
import { FormProvider } from './context/form/form.component';
import { VersionProvider } from './context/version/version.component';
import { ModalProvider } from './context/modal/modal.component';


import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <VersionProvider>
          <FormProvider>
            <ListProvider>
              <ModalProvider>
                <App />
              </ModalProvider>
            </ListProvider>
          </FormProvider>
        </VersionProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
