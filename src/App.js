import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Home from './componant/Home';
import Details from './componant/Details';
import BookingList from './componant/BookingList';
import { Toaster } from 'react-hot-toast';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/details/:id',
          loader: ({ params }) => fetch(`https://api.tvmaze.com/shows/${params.id}`),
          element: <Details></Details>,
        },
        {
          path: '/list',
          element: <BookingList></BookingList>
        }

      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
