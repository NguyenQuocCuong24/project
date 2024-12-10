import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../Pages/Home/home';
import History from '../Pages/History/history';
import Investment from '../Pages/investment-philosophy/investment';
import Login from '../components/login/login';
import PrivateRoute from '../components/login/PrivateRoute';
import InvestmentConsulting from '../Pages/Investment Consulting Services/investment_consulting';
import ServiceInvest from '../Pages/service-invest/service_invest';
import Support from '../Pages/Support/support';
import InvestmentTrust from '../Pages/UyThacQlTs/investment_trust';
import i18n from '../i18n/i18n';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* Cấu hình URL với ngôn ngữ */}
      <Route path="/:lng/*" element={<LanguageWrapper />}>
        {/* Layout chính */}
        <Route element={<MainLayout />}>
          <Route path="" element={<Navigate to="home" replace />} />
          <Route path="home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="history" element={<PrivateRoute><History /></PrivateRoute>} />
          <Route path="investment-philosophy" element={<PrivateRoute><Investment /></PrivateRoute>} />
          <Route path="service-invest" element={<PrivateRoute><ServiceInvest /></PrivateRoute>} />
          <Route path="investment-consulting" element={<PrivateRoute><InvestmentConsulting /></PrivateRoute>} />
          <Route path="support" element={<PrivateRoute><Support /></PrivateRoute>} />
          <Route path="investment-trust" element={<PrivateRoute><InvestmentTrust /></PrivateRoute>} />
        </Route>
      </Route>
    </Routes>
  );
};

// Wrapper để thay đổi ngôn ngữ
const LanguageWrapper = () => {
  const { lng } = useParams();

  React.useEffect(() => {
    if (lng && ['en', 'vi'].includes(lng)) {
      i18n.changeLanguage(lng); // Thay đổi ngôn ngữ dựa vào URL
    }
  }, [lng]);

  return <Routes />;
};

export default AppRoutes;
