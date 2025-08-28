import React from 'react';

const Navbar = () => {
return (
    <nav className="navbar navbar-expand-lg bg-pink px-3 py-2 shadow">
        <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center gap-2 text-white" href="#">
                <img
                    src="src/assets/images/Adobe Express - file.png"
                    alt="Logo"
                    width="100"
                    height="60"

                    style={{ objectFit: 'cover' }}
                />
                <span className="fw-bold">Tadiwa Mangate</span>
            </a>
            <button className="navbar-toggler text-white border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon bg-white rounded"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav text-white gap-2">
                    <li className="nav-item">
                        <a href="#home" className="nav-link text-black nav-link-gold-hover">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link text-black nav-link-gold-hover">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link text-black nav-link-gold-hover">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link text-black nav-link-gold-hover">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        <style>{`
            .nav-link-gold-hover:hover {
                color: gold !important;
            .navbar{
                background-color:rgb(255, 77, 181);
            }
        `}</style>
    </nav>
);
};

export default Navbar;
