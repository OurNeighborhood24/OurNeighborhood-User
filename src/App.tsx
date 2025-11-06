import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Main from "@/pages/Main";
import Map from "@/pages/Map";
import Report from "@/pages/Report";
import Notice from "@/pages/Notice";
import History from "@/pages/History";
import HistoryDetail from "@/pages/History/HistoryDetail";
import NoticeDetail from "@/pages/Notice/NoticeDetail";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<Main />} />
          <Route path="/map" element={<Map />} />
          <Route path="/report" element={<Report />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/:id" element={<NoticeDetail />} />
          <Route path="/history" element={<History />} />
          <Route path="/history/:id" element={<HistoryDetail />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
