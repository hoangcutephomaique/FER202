// App.js
import React from "react";
import UserProfile from "./components/UserProfile";
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidationForm from "./components/ValidationForm";

const App = () => {
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
    alert("Dữ liệu hợp lệ. Đã gửi thành công!");
  };

  return (
    <div className="App">
      <h1 className="text-center mt-4">Ứng Dụng Kiểm Tra Dữ Liệu Người Dùng</h1>
      <ValidationForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
