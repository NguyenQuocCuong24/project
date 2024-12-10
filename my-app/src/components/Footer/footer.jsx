import React from 'react';
import './footer.css';
import logo from '../image/header/logo_tvs.webp';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-white" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
            <div className="row align-items-center justify-content-center">
                <div className="col-md-5 d-flex align-items-center justify-content-center">
                    <img
                        src={logo}
                        className="img-fluid"
                        alt="Logo"
                        style={{ width: '250px', height: '60px' }}
                    />
                </div>

                <div className="col-md-7">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="coll">
                            <h5>Theo dõi chúng tôi</h5>
                        </div>
                    </div>
                </div>
                <hr className="border-secondary mx-3" style={{ marginTop: '2rem', marginBottom: '2rem' }} />
            </div>

            <div className="container py-4">
                <div className="row text-center text-md-start">
              
                    <div className="col-md-4 mb-4">
                        <h5>Liên hệ</h5>
                        <p>TVS: Tầng 15, Tòa Harec, số 4A Láng Hạ, Ba Đình, Hà Nội</p>
                        <p>TVAM: Lầu 9, Tòa nhà Bitexco Nam Long, 63A Võ Văn Tần, Quận 3, TP.HCM</p>
                        <p>Điện thoại: 0243.248.4820</p>
                        <p>Email: <a href="mailto:info@ewealth.vn" className="text-white">info@ewealth.vn</a></p>
                    </div>

                    <div className="col-md-2 mb-4">
                        <h5>Dịch vụ đầu tư</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Ủy thác Quản lý tài sản</a></li>
                            <li><a href="#" className="text-white">Tư vấn đầu tư</a></li>
                            <li><a href="#" className="text-white">Hỗ trợ giao dịch</a></li>
                        </ul>
                    </div>

                    <div className="col-md-2 mb-4">
                        <h5>Về chúng tôi</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Lịch sử phát triển</a></li>
                            <li><a href="#" className="text-white">Đội ngũ đầu tư</a></li>
                            <li><a href="#" className="text-white">Triết lý đầu tư</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5>Đăng ký nhận thông tin</h5>
                        <p>Đăng ký để trở thành người đầu tiên nhận được các thông tin chứng khoán mới nhất.</p>
                        <div className="input-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Nhập email của bạn"
                                aria-label="Nhập email của bạn"
                            />
                           
                        </div>
                        <button className="btn btn-primary">Đăng ký</button>
                        
                    </div>
                </div>
            </div>

            <hr className="border-secondary" />
            
            <div className="row align-items-center justify-content-between">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <p>©2024 TVS Capital Insight Client Innovation. All Rights Reserved.</p>
                </div>

                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="me-5">
                        <a href="#" className="text-white">Điều khoản và dịch vụ</a>
                    </div>
                    <div>
                        <a href="#" className="text-white">Chính sách bảo mật</a>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Footer;
