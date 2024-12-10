import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import banner1 from '../image/banner/banner_investment_consulting_service.png';
import './investment_consulting.css';

const investment_consulting = () => {
  const [pageTitle, setPageTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Cập nhật tiêu đề trang dựa trên URL hiện tại
    if (location.pathname === '/investment_consulting') {
      setPageTitle('Tư vấn đầu tư');
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
                  <h1>Dịch vụ Tư vấn đầu tư</h1>
                  <h2>Làm chủ quyết định đầu tư với tư vấn

                    của chuyên gia</h2>
                </div>
                
              </div>
              <p>Đội ngũ chuyên gia tư vấn của TVS sẽ đồng hành cùng nhà đầu tư trên suốt chặng đường xây dựng và gia tăng thịnh vượng tài chính.</p>
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
              <p class="investment-heading">Người đồng hành tin cậy trong mọi quyết định đầu tư</p>
              <p class="investment-subheading">
                Dịch vụ cung cấp các thông tin phân tích chuyên sâu, các khuyến nghị đầu tư phù hợp với đặc điểm thị trường và mục tiêu tài chính của mỗi nhà đầu tư
              </p>
            </div>
          </div>

          <div class="container investment-custom-container">
            <div class="row justify-content-center">
              <div class="col-12 col-md-4 mb-4 d-flex flex-column">
                <div class="investment-custom-info flex-grow-1">
                  <h3>Nhận diện sức khỏe tài chính và thiết lập mục tiêu đầu tư</h3>
                  <p>Chuyên gia tư vấn đầu tư sẽ tìm hiểu nhu cầu tài chính của nhà đầu tư, đề xuất giải pháp tối ưu dựa trên trạng thái tài chính và khẩu vị rủi ro của mỗi nhà đầu tư.</p>
                </div>
              </div>

              <div class="col-12 col-md-4 mb-4 d-flex flex-column">
                <div class="investment-custom-info flex-grow-1">
                  <h3>Lập kế hoạch hành động, lựa chọn sản phẩm đầu tư phù hợp</h3>
                  <p>Chuyên gia tư vấn đầu tư cung cấp các nhận định chuyên sâu, liên tục cập nhật xu hướng thị trường
                    và cơ hội đầu tư mới nhất phù hợp với từng nhà đầu tư..</p>
                </div>
              </div>

              <div class="col-12 col-md-4 mb-4 d-flex flex-column">
                <div class="investment-custom-info flex-grow-1">
                  <h3>Theo dõi và đánh giá kết quả đầu tư</h3>
                  <p>Chuyên gia tư vấn đồng hành theo dõi tình hình thực hiện kế hoạch đầu tư, đảm bảo tuân thủ kỷ luật đề ra và điều chỉnh kế hoạch phù hợp với thay đổi của thị trường và trạng thái tài chính của khách hàng..</p>
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

export default investment_consulting;