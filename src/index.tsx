import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddUser from './pages/AddUser';
import Dashboard from './pages/Dashboard';
import ListUsers from './pages/ListUsers';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <h1>Esta pagina no existe!!!</h1>
  },
  {
    path: '/Dashboard',
    element: <Dashboard />
  },
  {
    path: '/ListUser',
    element: <ListUsers />
  },
  {
    path: '/AddUser',
    element: <AddUser />
  }
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
