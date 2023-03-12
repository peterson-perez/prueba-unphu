import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddUser from './pages/AddUser';
import Dashboard from './pages/Dashboard';
import ListUsers from './pages/ListUsers';
import Login from './pages/Login';

const App = () => {
    const router = createBrowserRouter([

        {
            path: '/Login',
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

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App;