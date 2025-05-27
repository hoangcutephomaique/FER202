import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App5.css';

const students = [
    {
        id: 1,
        name: "Nguyễn Hữu Quốc Khánh",
        studentId: "DE160182",
        location: "Đà Nẵng",
        image: "./sv1.png",
        attendanceName: "attendance1",
    },
    {
        id: 2,
        name: "Choy Vinh Thiên",
        studentId: "DE160377",
        location: "Quảng Nam",
        image: "./sv2.png",
        attendanceName: "attendance2",
    },
    {
        id: 3,
        name: "Đỗ Nguyễn Phúc",
        studentId: "DE160547",
        location: "Quảng Nam",
        image: "./sv3.png",
        attendanceName: "attendance3",
    },
    {
        id: 4,
        name: "Lê Hoàng Minh",
        studentId: "DE170049",
        location: "Đà Nẵng",
        image: "./sv4.png",
        attendanceName: "attendance4",
    },
];

const FptStudents = () => {
    return (
        <div>
            {/* Header */}
            <header className="header py-2" style={{ backgroundColor: "#fff3e0" }}>
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="header_logo text-center">
                        <img src="https://shorturl.at/BVaRi" alt="FPT Logo" className="logo-img mb-1" />
                        <div className="fw-bold text-warning">FPT UNIVERSITY</div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between" style={{ width: "90%" }}>
                        <div>
                            <a href="#" className="text-warning text-decoration-none mx-2">
                                <i className="fas fa-home"></i> TRANG CHỦ
                            </a>
                            <a href="#" className="text-warning text-decoration-none mx-2">
                                <i className="fas fa-book"></i> NGÀNH HỌC
                            </a>
                            <a href="#" className="text-warning text-decoration-none mx-2">
                                <i className="fas fa-file-alt"></i> TUYỂN SINH
                            </a>
                            <a href="#" className="text-warning text-decoration-none mx-2">
                                <i className="fas fa-user-graduate"></i> SINH VIÊN
                            </a>
                        </div>

                        <div style={{ width: "200px" }}>
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                    </div>


                </div>
            </header>

            {/* Banner */}
            <section className="banner py-4" style={{ backgroundColor: "#ff6200" }}>
                <div className="container text-center">
                    <img src="./nhieusv.png" alt="Students Banner" className="img-fluid border border-white border-5" />
                </div>
            </section>

            {/* Breadcrumb */}
            <nav className="container mt-3  " aria-label="breadcrumb">
                <ol className="breadcrumb BreadcrumbBG d-flex align-items-center justify-content-center ">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Students</li>
                </ol>
            </nav>

            {/* Student Section */}
            <section className="student-section py-4">
                <div className="container">
                    <h2 className="text-center mb-4">Students Detais</h2>
                    <div className="row">
                        {students.map((student) => (
                            <div className="col-md-6 mb-4" key={student.id}>
                                <div className="card text-center h-100">
                                    <img src={student.image} className="card-img-top" alt={student.name} />
                                    <div className="card-body">
                                        <p className="card-text">{student.studentId}</p>

                                        {/* Tên & địa điểm: */}
                                        <div className="d-flex justify-content-between">
                                            <h5 className="card-title mb-0">{student.name}</h5>
                                            <p className="card-text mb-0">{student.location}</p>
                                        </div>

                                        {/* Khoảng cách */}
                                        <hr />

                                        {/* Radio Absent / Present: */}
                                        <div className="d-flex justify-content-between">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name={student.attendanceName} value="absent" id={`absent-${student.id}`} />
                                                <label className="form-check-label" htmlFor={`absent-${student.id}`}>Absent</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name={student.attendanceName} value="present" id={`present-${student.id}`} />
                                                <label className="form-check-label" htmlFor={`present-${student.id}`}>Present</label>
                                            </div>
                                        </div>

                                        <button className="btn btn-primary mt-3">SUBMIT</button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer text-white py-4" style={{ backgroundColor: "#ff6200" }}>
                <div className="container">
                    <div className="row">
                        {/* Địa chỉ bên trái */}
                        <div className="col-md-4">
                            <h6 className="text-uppercase fw-bold">Our Address</h6>
                            <p className="mb-1"><i className="fas fa-map-marker-alt me-2"></i>Khu đô thị FPT Đà Nẵng</p>
                            <p className="mb-1"><i className="fas fa-phone-alt me-2"></i>+84 0236 3771111</p>
                            <p className="mb-1"><i className="fas fa-mobile-alt me-2"></i>+852 6765 4321</p>
                            <p className="mb-1"><i className="fas fa-envelope me-2"></i>info@fpt.edu.vn</p>
                        </div>

                        {/* Giữa */}
                        <div className="col-md-4 d-flex justify-content-end align-items-end">
                            <p className="mb-0">&copy; Copyright 2023</p>
                        </div>

                        {/* Mạng xã hội bên phải */}
                        <div className="col-md-4 d-flex justify-content-center align-items-start flex-column">
                            <div className="mb-2 align-self-end">
                                <a href="#" className="text-white mx-1"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="text-white mx-1"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="text-white mx-1"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#" className="text-white mx-1"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-white mx-1"><i className="fab fa-youtube"></i></a>
                                <a href="#" className="text-white mx-1"><i className="fas fa-envelope"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>

        </div>
    );
};

export default FptStudents;
