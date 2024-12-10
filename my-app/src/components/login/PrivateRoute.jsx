import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Dùng useNavigate để điều hướng

const PrivateRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Null để biểu thị trạng thái kiểm tra
    const navigate = useNavigate(); // Dùng useNavigate để điều hướng

    useEffect(() => {
        // Kiểm tra xác thực từ localStorage
        const code = localStorage.getItem('code');
        if (code === 'VBNM') {
            setIsAuthenticated(true); // Nếu đã xác thực
        } else {
            setIsAuthenticated(false); // Nếu chưa xác thực, đặt là false
            navigate('/login'); // Điều hướng về trang login nếu không xác thực
        }
    }, [navigate]);

    if (isAuthenticated === null) {
        return <div>Loading...</div>; // Hiển thị khi đang kiểm tra xác thực
    }

    if (!isAuthenticated) {
        return null; // Nếu chưa xác thực, không render gì
    }

    return children; // Nếu đã xác thực, render children (route con)
};

export default PrivateRoute;
