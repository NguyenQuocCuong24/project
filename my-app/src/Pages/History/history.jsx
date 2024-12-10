import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import banner1 from '../image/banner/investmenteam_banner.webp';
import info1 from '../image/info/investcouncil_per1.png'
import info2 from '../image/info/investcouncil_per2.png'
import info3 from '../image/info/investcouncil_per3.png'
import info4 from '../image/info/investcouncil_per4.png'
import info5 from '../image/info/investdirector1.png'
import info6 from '../image/info/investdirector2.png'
import info7 from '../image/info/investdirector3.png'
import './history.css';

const History = () => {
    const [pageTitle, setPageTitle] = useState('');
    const location = useLocation();

    useEffect(() => {
        // Cập nhật tiêu đề trang dựa trên URL hiện tại
        if (location.pathname === '/history') {
            setPageTitle('Đội ngũ đầu tư');
        }
        // Có thể mở rộng thêm các trang khác nếu cần
        else if (location.pathname === '/investment-philosophy') {
            setPageTitle('Triết lí đầu tư');
        }
    }, [location]);
    return (
        <div>

            <section>
                <div className="banner-container">
                    {/* Breadcrumb Navigation inside the banner */}
                    <nav className="breadcrumb">
                        <Link to="/" className="breadcrumb-link">Trang chủ</Link>
                        <span className="breadcrumb-separator">/</span>
                        <span className="breadcrumb-current">{pageTitle}</span>
                        <hr />
                    </nav>
                    {/* Horizontal rule (hr) */}
                    <hr className="breadcrumb-divider" />
                    
                    <div className="banner-container">
                        <img className="banner" src={banner1} alt="banner" />
                        <div className="overlay">
                            <div className="start">
                                <div className="border-l-4">
                                    <div className="text-container">

                                        <h1>Đội ngũ đầu tư</h1>
                                        <h2>CTCP Chứng khoán Thiên Việt & Công ty Quản lý quỹ Thiên Việt</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <section>
                    <div className="container-2">
                        <div>
                            <p className="heading2">Hội đồng đầu tư</p>
                            <p className="subheading2">
                                Hội đồng đầu tư của TVS và TVAM là những doanh nhân thành đạt và năng động, với nhiều kinh nghiệm đầu tư thành công tại Việt Nam.
                            </p>
                        </div>

                    </div>

                    <div className="container-3">
                        <div className="row-3">
                            <div className="col">
                                <div className="avt">
                                    <img src={info1} alt="" />
                                    <div className="name-role">
                                        <h1>Nguyễn Trung Hà</h1>
                                        <h5>Nhà sáng lập - Thành viên hội đồng đầu tư</h5>
                                    </div>
                                </div>
                                <div className="info">
                                    <ul>
                                        <li>Ông Hà là người sáng lập và hiện là Chủ tịch HĐQT của TVS. Với danh mục đầu tư vào hơn 30 công ty start-up trong nước, ông được xem là một nhà tư tưởng chiến lược với nhiều kinh nghiệm đầu tư thành công tại Việt Nam.</li>
                                        <li>Ông là một trong các nhà sáng lập của FPT từ 1988 và giữ chức vụ trưởng phòng chiến lược trong nhiều năm.</li>
                                        <li>Ông Hà cũng là một trong những người sáng lập ngân hàng TMCP ACB - hiện đang là một trong các ngân hàng thương mại tư nhân lớn nhất Việt Nam.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col">
                                <div className="avt">
                                    <img src={info2} alt="" />
                                    <div className="name-role">
                                        <h1>Đinh Thị Hoa</h1>
                                        <h5>Nhà sáng lập - Thành viên hội đồng đầu tư</h5>
                                    </div>
                                </div>
                                <div className="info">
                                    <ul>
                                        <li>Bà Hoa là người sáng lập và hiện là chủ tịch HĐQT của Galaxy Group, một trong những tập đoàn truyền thông và giải trí hàng đầu.</li>
                                        <li>Bà là người Việt Nam đầu tiên tốt nghiệp Thạc Sĩ Quản Trị Kinh doanh tại Harvard sau năm 1975. Đồng thời, bà đã giúp thành lập Procter & Gamble tại Việt Nam trị giá 100 triệu USD.</li>
                                        <li>Bà Hoa cũng là nhà sáng lập Trường Quản trị và Kinh Doanh Hà Nội, đồng thời là Trưởng bộ môn Marketing trong nhiều năm.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row-3">
                            <div className="col">
                                <div className="avt">
                                    <img src={info3} alt="" />
                                    <div className="name-role">
                                        <h1>Bùi Thị Kim Oanh</h1>
                                        <h5>Thành viên HĐQT - Hội đồng đầu tư</h5>
                                    </div>
                                </div>
                                <div className="info">
                                    <ul>
                                        <li>Bà Oanh có 20 năm kinh nghiệm trong lĩnh vực đầu tư và bà đã quản lý một số quỹ như: Vietnam Equity Fund, Finasa Vietnam Fund, New Finasa Vietnam Balanced Fund.</li>
                                        <li>Bà có 8 năm kinh nghiệm tại Tổng Công ty Bảo hiểm Bảo Việt.</li>
                                        <li>Bà lấy bằng cử nhân tại Đại học Humblot ở Đức và bằng Thạc Sĩ Quản Trị Kinh Doanh tại AIT Thái Lan.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col">
                                <div className="avt">
                                    <img src={info4} alt="" />
                                    <div className="name-role">
                                        <h1>Nguyễn Thanh Thảo   </h1>
                                        <h5>Thành viên Hội đồng đầu tư & Tổng giám đốc TVS</h5>
                                    </div>
                                </div>
                                <div className="info">
                                    <ul>
                                        <li>Bà Thảo gia nhập TVS với vai trò Trưởng phòng Nghiên cứu từ năm 2007 và trở thành Giám đốc điều hành từ năm 2013.</li>
                                        <li>Trước TVS, bà là Chuyên viên phân tích tài chính cao cấp tại Ameriquest Capital Holdings, Hoa Kỳ.</li>
                                        <li>Bà từng là Quản lý tại Văn phòng Pháp lý của Liebovitz & Do, một công ty Luật có trụ sở tại California - Hoa Kỳ.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>



                </section>
            </section>


            <section>
                <div className="container-custom">
                    <div>
                        <p className="heading2">Giám đốc đầu tư</p>
                        <p className="subheading2">
                            Đội ngũ chuyên gia với kinh nghiệm đầu tư 12 năm trở lên và duy trì hiệu quả đầu tư bền vững, vượt trội trong nhiều năm qua.
                        </p>
                    </div>

                    <div className="custom-container">
                        <div className="custom-row">
                            <div className="custom-col">
                                <div className="custom-avt">
                                    <img src={info5} alt="" />
                                    <div className="custom-name-role">
                                        <h1>Trần Vinh Quang, CFA</h1>
                                        <h5>Giám đốc đầu tư</h5>
                                    </div>
                                </div>
                                <div className="custom-info">
                                    <ul>

                                        <li>Trước khi gia nhập TVS năm 2011, ông Quang có 6 năm kinh nghiệm quản lý danh muc đầu tư tại công ty quản lý quỹ Bản Việt, chịu trách nhiệm quản lý 2 Quỹ với tổng giá trị là 70 triệu USD.</li>
                                        <li>Ông có bằng chỉ nhân Tài chính Kế toán tại Đại học New South Wales, Úc. Đồng thời, ông cũng là thành viên của CFA và thành viên liên kết của ACCA.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="custom-col">
                                <div className="custom-avt">
                                    <img src={info6} alt="" />
                                    <div className="custom-name-role">
                                        <h1>Hồ Nhật Quang</h1>
                                        <h5>Giám đốc đầu tư</h5>
                                    </div>
                                </div>
                                <div className="custom-info">
                                    <ul>

                                        <li>Ông Nhật Quang tốt nghiệp bằng Cử nhân Thương mại tại trung Đại học New South Wales, Úc vào năm 2010.</li>
                                        <li>Trước khi gia nhập TVAM, ông Quang giá có 2 năm kinh nghiệm & vị trí Trợ lý phân tích tài chính Morningstar Úc -
                                            một nhà cung cấp dịch vụ nghiên cứu đầu tư độc lập hàng đầu tại Bắc Mỹ, Châu Âu, Úc và Châu Á.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="custom-col">
                                <div className="custom-avt">
                                    <img src={info7} alt="" />
                                    <div className="custom-name-role">
                                        <h1>Nguyễn Duy Quang</h1>
                                        <h5>Giám đốc đầu tư</h5>
                                    </div>
                                </div>
                                <div className="custom-info">
                                    <ul>
                                        <li>Ông Quang có hơn 15 năm kinh nghiệm làm việc tại nhiều tập đoàn đa quốc gia trong lĩnh vực tài chính, đầu tư.
                                            Ông từng là Chuyên viên tư vấn quản lý tại PwC, Phó phòng kế toán Quản trị tại Procter & Gamble và Unilever.</li>
                                        <li>Ông từng giữ vị trí phó giám đốc đầu tư cho Quỹ đầu tư nước ngoài Vietnam Equity Holding và quản lý tổng giá trị tài sản hơn 100 triệu USD trong 4 năm..</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    );
}

export default History;
