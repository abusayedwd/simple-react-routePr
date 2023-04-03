import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';
 
import Contact from './components/contact/Contact';
import First from './components/First/First';
import Friend from './components/Friends/Friends';
import FriendDetail from './components/FriendDetails/FriendDetail';
import Posts from './components/posts/Posts';
import PostDetail from './components/Postdetail/PostDetail';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:  <App></App>
//   },
//   {
//     path: '/about',
//     element:  <About></About>
//   },
//   {
//     path: '/home',
//     element:  <Home></Home>
//   }
// ])

 const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <First></First>
      },
      {
        path: 'friend',
        element: <Friend></Friend>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'detail/:friendId',
        element: <FriendDetail></FriendDetail>,
        loader: ({params})=>  fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path:'posts/:postId',
        element:<PostDetail></PostDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path:'post',
        element: <Posts></Posts>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]

  }
 ])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      
     <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
