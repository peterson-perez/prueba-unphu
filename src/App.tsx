import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import AddUser from './pages/AddUser';
import Dashboard from './pages/Dashboard';
import ListUsersTable from './pages/listUsersTable';
import Login from './pages/Login';
import { RootState } from './redux/store';


const App = () => {
    const { email, password } = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate()
    const { pathname } = useLocation();

    useEffect(() => {
        if (!email && !password && pathname !== '/login') {
            navigate('/login');
        }
        if (email && password && pathname === '/login') {
            navigate('/dashboard')
        }
    }, [email, password, pathname, navigate])

    return (
        <>
            <Routes>
                <Route
                    path='/' element={<Navigate to="/dashboard" />}
                />
                <Route path='/login' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/adduser' element={<AddUser />} />
                <Route path='/listusers' element={<ListUsersTable />} />
            </Routes>
        </>
    )
}

export default App;