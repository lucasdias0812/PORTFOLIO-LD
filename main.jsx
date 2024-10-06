import App from './App.jsx'
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CertificadosRota from './pages/CertificadosRota.jsx';
import ConteudoPrincipal from './components/ConteudoPrincipal.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {index:true, element: <ConteudoPrincipal/>},
      {path: "/certificados", element: <CertificadosRota/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
 )