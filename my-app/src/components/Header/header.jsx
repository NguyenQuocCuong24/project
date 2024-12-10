import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/header/logo_tvs.webp';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="container-fluid py-6">
                <div className="row align-items-center">
                    <div className="col-12 col-md-5 d-flex justify-content-center mb-3 mb-md-0">
                        <Link to="/home">
                            <img
                                src={logo}
                                className="img-fluid"
                                alt="Logo"
                                style={{ maxWidth: '250px', height: 'auto' }}
                            />
                        </Link>
                    </div>

                    {/* Menu section */}
                    <div className="col-12 col-md-7">
                        {/* For mobile view (Hamburger icon) */}
                        <div className="d-md-none text-right">
                            <button onClick={toggleMenu} className="btn btn-light">
                                <i className="bi bi-list"></i> {/* Icon menu */}
                            </button>
                        </div>

                        {/* Menu items */}
                        <div className={`row justify-content-center text-center ${isMenuOpen ? 'd-block' : 'd-none'} d-md-flex`}>
                            <div className="col-6 col-md-3 fs-5 px-2 nav-item d-flex justify-content-center">
                                <div className="dropdown w-100 text-center">
                                    <Link to="/" className="dropdown-toggle" style={{ color: 'black', textDecoration: 'none' }}>Về chúng tôi</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/history">Đội ngũ đầu tư</Link></li>
                                        <li><Link to="/investment-philosophy">Triết lí đầu tư</Link></li>
                                        <li><Link to="#">Lịch sử hành trình và phát triển</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 fs-5 px-2 nav-item">
                                <div className="dropdown">
                                    <Link to="/service-invest" className="dropdown-toggle" style={{ color: 'black', textDecoration: 'none' }}>Dịch vụ đầu tư</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/investment_trust">Ủy thác Quản lí tài sản</Link></li>
                                        <li><Link to="/investment_consulting">Tư vấn đầu tư</Link></li>
                                        <li><Link to="/support">Hỗ trợ giao dịch</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 fs-5 px-2 nav-item">
                                <div className="dropdown">
                                    <Link to="/" className="dropdown-toggle" style={{ color: 'black', textDecoration: 'none' }}>Nghiên cứu & phân tích</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/research/market">Bảng giá</Link></li>
                                        <li><Link to="/research/trends">Nhịp đập thị trường</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-2">
                                <button className="btn-light w-100 py-3">
                                    <Link to="/login" className="" style={{ color: 'black', textDecoration: 'none' }}>Đăng Nhập</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
