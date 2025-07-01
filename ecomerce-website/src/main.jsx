import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'
import ContactUs from './components/ContactUs.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import ShoppingCart from './components/ShoppingCart'
import About from './components/About.jsx'
import { Provider } from 'react-redux'
import store from './components/store/store.js'
import Address from './components/Address.jsx'
import "react-toastify/dist/ReactToastify.css";
import { toast,ToastContainer } from "react-toastify";


 const router=createBrowserRouter([

  {
 
    path:'/',
    element:<App/>,
    children:[
      {

      path:'/',
      element:<Home/>

      },
     
      {
        element:<Shop/>,
        path:'/shop'
      },
      {
        path:'/contactus',
        element:<ContactUs/>
      }, {
        path:'/login',
        element:<Login/>
      }, {
        path:'/signup',
        element:<SignUp/>
      },{
        path:'/shoppingcart',
        element:<ShoppingCart/>
      },{
        path:'/about',
        element:<About/>
      },{
        path:'/address',
        element:<Address/>
      }
    ]

  }
 ])



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ToastContainer position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <RouterProvider router={router}/>
    </Provider>
)
