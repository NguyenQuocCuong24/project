import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import banner1 from '../image/banner/img_history_development.png';
import './investment_trust.css';

const Investment_trust = () => {
  const [pageTitle, setPageTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Cập nhật tiêu đề trang dựa trên URL hiện tại
    if (location.pathname === '/investment_trust') {
      setPageTitle('Ủy thác Quản lí tài sản');
    }
    // Có thể mở rộng thêm các trang khác nếu cần
    // else if (location.pathname === '/investment-philosophy') {
    //     setPageTitle('Triết lí đầu tư');
    // }
  }, [location]);

  const steps = [
    {
      title: "Đăng ký chiến lược",
      description:
        "Đăng ký chiến lược phù hợp với mục tiêu và khẩu vị rủi ro của nhà đầu tư",
      icon: "/assets/icons/icon_step1.svg",
      completed: true,
    },
    {
      title: "Ký hợp đồng",
      description: "Online hoàn toàn, với ứng dụng eKYC và chữ ký số.",
      icon: "/assets/icons/icon_step2.svg",
      completed: true,
    },
    {
      title: "Nộp tiền ủy thác",
      description:
        "Nộp tiền và theo dõi trạng thái tài sản trên chính tài khoản của bạn",
      icon: "/assets/icons/icon_step3.svg",
      completed: false,
    },
  ];
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
                  <h1>Dịch vụ Ủy thác quản lý tài sản</h1>
                  <h2>Trải nghiệm đầu tư xứng tầm</h2>

                </div>
                <p>Tài khoản nhà đầu tư được chăm sóc bởi các chuyên gia quản lý danh mục hàng đầu.</p>
              </div>
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
              <p class="investment-heading">Vì sao lựa chọn <br /> Tư vấn và Ủy thác quản lý tài sản cùng chúng tôi? </p>

            </div>
          </div>

          <div class="container investment-custom-container">
            <div class="row justify-content-center">
              <div class="col-12 col-md-4 mb-4 d-flex flex-column">
                <div class="investment-custom-info flex-grow-1">
                  <h3>Tối ưu Tăng trưởng bền vững</h3>
                  <p>Dịch vụ đầu tư với mức tăng trưởng hàng đầu thị trường trong vòng hơn một thập kỷ vừa qua bằng việc lựa chọn
                    phân bổ tài sản phù hợp vào các khoản đầu tư giá trị và tuân thủ nghiêm ngặt các nguyên tắc quản trị rủi ro..</p>
                </div>
              </div>

              <div class="col-12 col-md-4 mb-4 d-flex flex-column">
                <div class="investment-custom-info flex-grow-1">
                  <h3>Đội ngũ Chuyên gia hàng đầu</h3>
                  <p>Đội ngũ chuyên gia quản lý danh mục giàu kinh nghiệm, làm việc với chuẩn mực đạo đức cao,
                    áp dụng quy trình đầu tư chuyên nghiệp và kiểm soát rủi ro chặt chẽ..</p>
                </div>
              </div>

              <div class="col-12 col-md-4 mb-4 d-flex flex-column">
                <div class="investment-custom-info flex-grow-1">
                  <h3>Thông tin minh bạch, trực quan</h3>
                  <p>Hệ thống báo cáo chuyên nghiệp, minh bạch, trực quan giúp Nhà đầu tư theo dõi và quản lý tài sản 24/7.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center py-20 bg-bgGrayLight">
        <div className="xl:w-[1290px] w-full px-4">
          {/* Tiêu đề */}
          <h4 className="text-center text-large">
            3 bước để tham gia Ủy thác quản lý tài sản
          </h4>

          {/* Các bước */}
          <div className="mt-9">
            <div className="stepper">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`step-item ${step.completed ? "completed" : step.active ? "active" : ""
                    }`}
                >
                  <div className="step-icon">
                    <img
                      alt={`icon-step${index + 1}`}
                      src={banner1}
                      width={45}
                      height={45}
                    />
                  </div>
                  <div className="step-content text-center mt-3">
                    <p className="step-title font-bold">{step.title}</p>
                    <p className="step-description text-sm text-gray-500 mt-1">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="step-connector"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Nút đăng ký */}
          <div className="mt-10 flex justify-center">
            <button className="btn-primary px-8 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
              Đăng ký ngay
            </button>
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

export default Investment_trust;