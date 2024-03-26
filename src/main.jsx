import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root/Root'
import Home from './Components/Home/Home'
import BookDeatils from './Components/BookDeatils/BookDeatils'
import ErrorPage from './Components/ErrorPage/ErrorPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/bookDeatils",
        element: <BookDeatils></BookDeatils>,
        loader: () => fetch ('/books.json') 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
