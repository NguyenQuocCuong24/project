import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import banner1 from '../image/banner/img_history_development.png';
import banner3 from '../image/banner/img_chart_effect_investment.png';
import img from '../image/banner/investment_banner.png';
import './investment.css';

const Investment = () => {
    const [pageTitle, setPageTitle] = useState('');
    const location = useLocation();

    useEffect(() => {
        // Cập nhật tiêu đề trang dựa trên URL hiện tại
        if (location.pathname === '/investment-philosophy') {
            setPageTitle('Triết lí đầu tư');
        }
        // Có thể mở rộng thêm các trang khác nếu cần
        // else if (location.pathname === '/investment-philosophy') {
        //     setPageTitle('Triết lí đầu tư');
        // }
    }, [location]);
    return (
        <div>
            <section>
                <div className="investment-banner-container">
                    {/* Breadcrumb Navigation inside the banner */}
                    <nav className="breadcrumb">
                        <Link to="/" className="breadcrumb-link">Trang chủ</Link>
                        <span className="breadcrumb-separator">/</span>
                        <span className="breadcrumb-current">{pageTitle}</span>
                        <hr />
                    </nav>
                    {/* Horizontal rule (hr) */}
                    <hr className="breadcrumb-divider" />

                    <img className="investment-banner" src={banner1} alt="investment-banner" />
                    <div className="investment-overlay">
                        <div className="startt">
                            <div className="border-l-4">
                                <div className="text-container">
                                    <h1>Triết lí đầu tư</h1>
                                    <h2>Tạo nên sự khác biệt trong dịch vụ Quản lý tài sản của TVS-TVAM</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="investment-container-custom">
                    <div>
                        <p className="heading-investment">Triết lí đầu tư</p>
                        <h1 className="subheading-investment">
                            Đem lại lợi nhuận bền vững và vượt trội cho Nhà đầu tư nhờ Chiến lược <br /> phân bổ tài sản linh hoạt và khả năng Quản lý rủi ro hiệu quả
                        </h1>
                    </div>


                </div>

            </section>

            <section>
                <div class="row full-screen no-gutters">
                    <div class="col-md-6 left-content">
                        <div class="text-content">
                            <p class="fw-bold">Điểm khác biệt trong triết lý đầu tư của chúng tôi</p>
                            <p>Phần lớn nhà đầu tư gặp khó khăn và thua lỗ trong quá trình đầu tư do yếu tố cảm xúc chi phối và thiếu am hiểu doanh nghiệp, tâm lý gồng lỗ trong thời gian dài và sớm hiện thực hóa lợi nhuận.</p>
                            <p>Tại TVAM, chúng tôi hạn chế yếu tố con người thông qua quy trình đầu tư chuyên nghiệp với mục tiêu quản lý rủi ro hàng đầu. Đồng thời, chúng tôi tự tin nắm giữ các khoản đầu tư tốt, có hiệu suất lợi nhuận cao nhờ thường xuyên tiếp xúc doanh nghiệp, liên tục cập nhật, đánh giá hiệu quả hoạt động theo từng tháng/quý.</p>
                            <p>Chúng tôi quản lý rủi ro kỹ lưỡng từng bước trong quá trình ra quyết định đầu tư và phân bổ tài sản. Điều này giúp TVAM mang lại hiệu suất lợi nhuận cao trong dài hạn.</p>
                        </div>
                    </div>

                    <div class="col-md-6 right-content">
                        <img src={img} alt="Investment philosophy" class="img-fluid" />
                    </div>
                </div>
            </section>


            <section class="investment-section">
                <div class="investment-container-heading">
                    <div class="container">
                        <div class="text-center">
                            <p class="investment-heading">3 bước trong triết lý đầu tư</p>
                            <p class="investment-subheading">
                                TVAM tạo ra sự khác biệt bằng sự thấu hiểu nhu cầu khách hàng, một mặt tập trung vào tăng trưởng, mặt khác luôn <br />
                                sát sao quản trị những rủi ro đặc thù của thị trường Việt Nam.
                            </p>
                        </div>
                    </div>

                    <div class="container investment-custom-container">
                        <div class="row justify-content-center">
                            <div class="col-12 col-md-4 mb-4 d-flex flex-column">
                                <div class="investment-custom-info flex-grow-1">
                                    <h3>Thấu hiểu khách hàng</h3>
                                    <p>Bắt đầu từ thấu hiểu mong muốn, nhu cầu, tình hình tài chính và khẩu vị rủi ro của từng khách hàng. Chúng tôi đánh giá và đưa ra kế hoạch đầu tư phù hợp.</p>
                                </div>
                            </div>

                            <div class="col-12 col-md-4 mb-4 d-flex flex-column">
                                <div class="investment-custom-info flex-grow-1">
                                    <h3>Phân bổ tài sản linh hoạt</h3>
                                    <p>Khi đã xác định kế hoạch đầu tư, chúng tôi linh hoạt phân bổ danh mục, tỷ lệ cổ phiếu - tiền mặt, tỷ trọng nhóm ngành theo nhu cầu khách hàng và theo xu hướng Tiền tệ, Vĩ mô, Chu kỳ kinh tế trong từng thời kỳ.</p>
                                </div>
                            </div>

                            <div class="col-12 col-md-4 mb-4 d-flex flex-column">
                                <div class="investment-custom-info flex-grow-1">
                                    <h3>Sát sao quản lý rủi ro</h3>
                                    <p>Quản lý rủi ro hiệu quả là cách thức bảo vệ danh mục và đưa đến hiệu suất lợi nhuận cao trong dài hạn. Vì vậy, chúng tôi luôn sát sao quản trị, hành động kịp thời với phương châm "Gồng lãi, không gồng lỗ".</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container investment-container">
                    <div>
                        <p className="heading-investment">
                            Hiệu quả đầu tư duy trì trong top đầu thị <br />
                            trường trong nhiều năm
                        </p>
                        <img src={banner3} alt="Hiệu quả đầu tư" className="img-fluid" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Investment;