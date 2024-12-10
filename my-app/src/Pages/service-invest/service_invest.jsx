import React from 'react'
import banner1 from '../image/banner/banner_serveyinvest.png';
import img1 from '../image/menu/img-service1.png';
import img2 from '../image/menu/img-service2.png';
import img3 from '../image/menu/img-service3.png';
import './service.css';


const Service_invest = () => {
    return (
        <div>
            <section>
                <div className="banner-container">
                    <img className="banner" src={banner1} alt="banner" />
                    <div className="text-overlay">
                        <h1>Giải pháp riêng biệt từ Đối tác tin cậy</h1>
                    
                        <h2>
                           Luôn đồng hành và cung cấp các giải pháp phù hợp với mục tiêu tài chính <br /> của khách hàng
                        </h2>
                        <button> Liên hệ tư vấn ngay </button>
                    </div>

                   
                </div>
            </section>


            <section>
                

                <div className="service-container-custom">
                    <div>
                        <p className="heading-service">Triết lí đầu tư</p>
                        <h1 className="subheading-service">
                            Đem lại lợi nhuận bền vững và vượt trội cho Nhà đầu tư nhờ Chiến lược <br /> phân bổ tài sản linh hoạt và khả năng Quản lý rủi ro hiệu quả
                        </h1>
                        <button> Xem thêm  </button>
                    </div>
                    
                </div>
                

            </section>

            <section>
                <div className="container-menu-2">
                    <p className="heading-2">Dịch vụ đầu tư</p>
                    <p className="subheading-2">
                        Chúng tôi cung cấp các lựa chọn đầu tư phù hợp với mục tiêu tài chính của riêng nhà đầu tư. Bạn sẽ luôn <br />
                        an tâm với sự đồng hành của những chuyên gia kinh nghiệm và chính trực.
                    </p>

                    <div className="columns-2">
                        <div className="column-2">
                            <img className="banner-2" src={img1} alt="banner-2" />
                            <div className="content">
                                <h5>Uỷ thác Quản lý tài sản</h5>
                                <p>
                                    Tài sản của Nhà đầu tư được quản lý trực tiếp bởi
                                    các chuyên gia Quản lý danh mục chuyên nghiệp và
                                    giàu kinh nghiệm.
                                </p>
                                <hr />
                                <a href="">Tìm hiểu thêm</a>
                            </div>
                        </div>
                        <div className="column-2">
                            <img className="banner-2" src={img2} alt="banner-2" />
                            <div className="content">
                                <h5>Tư vấn đầu tư</h5>
                                <p>
                                    Nhà đầu tư làm chủ quyết định đầu tư, dựa trên
                                    những tư vấn
                                    cụ thể của Đội ngũ chuyên gia tư vấn đầu tư.
                                </p>
                                <hr />
                                <a href="">Tìm hiểu thêm</a>
                            </div>
                        </div>
                        <div className="column-2">
                            <img className="banner-2" src={img3} alt="banner-2" />
                            <div className="content">
                                <h5>Hỗ trợ giao dịch</h5>
                                <p>
                                    Nhà đầu tư giao dịch độc lập và riêng tư trên nền
                                    tảng giao dịch thông minh, đa tiện ích.
                                </p>
                                <hr />
                                <a href="">Tìm hiểu thêm</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <div className="container-menu-2">
                <p className="heading-2">Liên hệ tư vấn</p>
                <p className="subheading-2">
                    Nếu Quý nhà đầu tư có thắc mắc, xin vui lòng để lại thông tin.
                    Đội ngũ chuyên gia của TVS và TVAM sẽ phản <br /> hồi trong thời gian sớm nhất.
                </p>

            </div>

            <section>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="row-outer w-100 d-flex justify-content-center">
                        <div className="col-md-8">
                            <div className="outer-container">
                                <div className="form-container">
                                    <form>
                                        <div className="input">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Tên của bạn" />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" type="email" placeholder="Địa chỉ email" />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" type="tel" placeholder="Số điện thoại" />
                                            </div>
                                        </div>
                                        <div className="comment">
                                            <textarea className="form-control" placeholder="Lời nhắn"></textarea>
                                        </div>
                                        <div>
                                            <button type="submit" className="btn">Gửi yêu cầu</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    )
}

export default Service_invest