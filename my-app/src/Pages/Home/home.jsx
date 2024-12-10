import React from 'react';
import { useTranslation } from 'react-i18next';
import banner1 from '../image/menu/banner-1.webp';
import banner2 from '../image/menu/banner-2.png';
import img1 from '../image/menu/img-service1.png';
import img2 from '../image/menu/img-service2.png';
import img3 from '../image/menu/img-service3.png';

import './home.css';

const Home = () => {
  const { t } = useTranslation(); // Sử dụng hook useTranslation

  return (
    <div>
      <section>
        <div className="banner-container">
          <img className="banner" src={banner1} alt="banner" />
          <div className="text-overlay">
            <h1>{t('home.banner.title')}</h1>
            <h2>{t('home.banner.subtitle')}</h2>
            <p>{t('home.banner.description')}</p>
            <button>{t('home.banner.button')}</button>
          </div>

          <div className="stats-overlay">
            <div className="stat">
              <h3>{t('home.stats.experience')}</h3>
              <p>{t('home.stats.experience_description')}</p>
            </div>
            <div className="stat">
              <h3>{t('home.stats.total_assets')}</h3>
              <p>{t('home.stats.total_assets_description')}</p>
            </div>
            <div className="stat">
              <h3>{t('home.stats.performance')}</h3>
              <p>{t('home.stats.performance_description')}</p>
            </div>
            <div className="stat">
              <h3>{t('home.stats.team_experience')}</h3>
              <p>{t('home.stats.team_experience_description')}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-menu">
          <p className="heading">{t('home.why_choose_us.heading')}</p>
          <p className="subheading">{t('home.why_choose_us.subheading')}</p>
          <div className="columns">
            <div className="column">
              <h3>{t('home.why_choose_us.sustainable_growth.title')}</h3>
              <p>{t('home.why_choose_us.sustainable_growth.description')}</p>
            </div>
            <div className="column">
              <h3>{t('home.why_choose_us.expert_team.title')}</h3>
              <p>{t('home.why_choose_us.expert_team.description')}</p>
            </div>
            <div className="column">
              <h3>{t('home.why_choose_us.transparent_info.title')}</h3>
              <p>{t('home.why_choose_us.transparent_info.description')}</p>
            </div>
          </div>
        </div>

        <div className="banner-container-2">
          <img className="banner-2" src={banner2} alt="banner" />
          <div className="text-overlay-2">
            <h1>{t('home.investment_philosophy.title')}</h1>
            <h1>{t('home.investment_philosophy.subtitle')}</h1>
            <button>{t('home.investment_philosophy.button')}</button>
          </div>
        </div>
      </section>

      <section>
        <div className="container-menu-2">
          <p className="heading-2">{t('home.investment_services.heading')}</p>
          <p className="subheading-2">{t('home.investment_services.subheading')}</p>

          <div className="columns-2">
            <div className="column-2">
              <img className="banner-2" src={img1} alt="banner-2" />
              <div className="content">
                <h5>{t('home.investment_services.trust.title')}</h5>
                <p>{t('home.investment_services.trust.description')}</p>
                <hr />
                <a href="">{t('home.investment_services.learn_more')}</a>
              </div>
            </div>
            <div className="column-2">
              <img className="banner-2" src={img2} alt="banner-2" />
              <div className="content">
                <h5>{t('home.investment_services.advice.title')}</h5>
                <p>{t('home.investment_services.advice.description')}</p>
                <hr />
                <a href="">{t('home.investment_services.learn_more')}</a>
              </div>
            </div>
            <div className="column-2">
              <img className="banner-2" src={img3} alt="banner-2" />
              <div className="content">
                <h5>{t('home.investment_services.support.title')}</h5>
                <p>{t('home.investment_services.support.description')}</p>
                <hr />
                <a href="">{t('home.investment_services.learn_more')}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-menu-2">
        <p className="heading-2">{t('home.contact_us.heading')}</p>
        <p className="subheading-2">{t('home.contact_us.subheading')}</p>
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
                        <input className="form-control" type="text" placeholder={t('home.form.name_placeholder')} />
                      </div>
                      <div className="form-group">
                        <input className="form-control" type="email" placeholder={t('home.form.email_placeholder')} />
                      </div>
                      <div className="form-group">
                        <input className="form-control" type="tel" placeholder={t('home.form.phone_placeholder')} />
                      </div>
                    </div>
                    <div className="comment">
                      <textarea className="form-control" placeholder={t('home.form.message_placeholder')}></textarea>
                    </div>
                    <div>
                      <button type="submit" className="btn">{t('home.form.submit_button')}</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
