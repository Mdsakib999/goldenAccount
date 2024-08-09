import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const Dashbord = () => {
    const location = useLocation();
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (location.pathname === "/dashbord") {
            setRedirect(true);
        }
    }, [location]);

    // Redirect if the condition is met
    if (redirect) {
        return <Navigate to="/dashbord/admin/add_item" />;
    }

    return (
        <div>
            {/* Your dashboard content here */}
            Dashboard Content
        </div>
    );
};

export default Dashbord;
