import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import banner1 from '../image/banner/banner_service_support.png';
import './support.css';

const Support = () => {
  const [pageTitle, setPageTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Cập nhật tiêu đề trang dựa trên URL hiện tại
    if (location.pathname === '/support') {
      setPageTitle('Hỗ trợ giao dịch');
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
                  <h1>Dịch vụ Hỗ trợ giao dịch</h1>
                  <h2>Đầu tư độc lập, không cần chuyên gia tư vấn</h2>

                </div>
                
              </div>
              <p>TVS cung cấp nền tảng giao dịch đa tiện ích cùng cơ chế phí ưu đãi.</p>
              <div className="button-investment-trust position-absolute top-0 end-0">
                <button className="btn btn-primary">Đăng kí</button>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section class="investment_consulting">
        <div class="investment-container-heading">
          <div class="container">
            <div class="text-center">
              <p class="investment-heading">Hệ thống hỗ trợ giao dịch đa tiện ích </p>
              <p>
              Cung cấp các nền tảng tiện ích giúp nhà đầu tư ra quyết định và thực hiện giao dịch một cách nhanh chóng,
               thuận tiện nhất. Dịch vụ phù hợp cho những nhà đầu tư chuyên nghiệp, có kinh nghiệm và thời gian theo dõi thị trường.
              </p>
            </div>
          </div>

          <div class="container investment-custom-container">
            <div class="row justify-content-center">
              <div class="col-12 col-md-4 mb-4 d-flex flex-column">
                <div class="investment-custom-info flex-grow-1">
                  <h3>Giao dịch chủ động và riêng tư</h3>
                  <p>Nhà đầu tư toàn quyền kiểm soát các khoản đầu tư của mình với mức độ tự chủ và riêng tư nhất..</p>
                </div>
              </div>

              <div class="col-12 col-md-4 mb-4 d-flex flex-column">
                <div class="investment-custom-info flex-grow-1">
                  <h3>Nền tảng giao dịch thuận tiện</h3>
                  <p>Hệ thống giao dịch đa tiện ích, hỗ trợ trên mọi nền tảng online, giúp nhà đầu tư giao dịch dễ dàng mọi lúc, mọi nơi..</p>
                </div>
              </div>

              <div class="col-12 col-md-4 mb-4 d-flex flex-column">
                <div class="investment-custom-info flex-grow-1">
                  <h3>Phí ưu đãi và Margin linh hoạt</h3>
                  <p>Hệ thống giao dịch đa tiện ích, hỗ trợ trên mọi nền tảng online, giúp nhà đầu tư giao dịch dễ dàng mọi lúc, mọi nơi.</p>
                </div>
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

export default Support;