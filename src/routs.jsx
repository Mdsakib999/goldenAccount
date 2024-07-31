import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home/Home';
import Payment from './components/Payment/Payment';
import AdminDashboardLayout from './AdminDashboardLayout';
import AddItem from './components/AdminDashbord/AddItem';
import MenageItem from './components/AdminDashbord/MenageItem';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/order/:id",
                element: <Payment></Payment>
            },


        ]
    },
    {
        path: '/dashbord',
        element: <AdminDashboardLayout />,
        children: [
            {
                path: 'admin/add_item',
                element: <AddItem />
            },
            {
                path: 'admin/manage_item',
                element: <MenageItem />
            }
        ]
    }
])