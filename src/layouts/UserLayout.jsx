import { Layout } from 'antd';
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../assets/images/logoNoBackGround.png';
import Container from "../components/Container";
import './UserLayout.scss';
const { Header, Content, Footer } = Layout;

export default function UserLayout() {
    return (
        <>
            <div className="header">
                <Container>
                    <div className="header-wrap">
                        <Link to=""><div className='header-logo'><img src={logo} alt="logo.png" /></div></Link>
                        <ul>
                            <li><NavLink to="/curriculum">Chương trình học</NavLink></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/feedback">Feedback</Link></li>
                            <li><Link to="/aboutus">Về chúng tôi</Link></li>
                        </ul>
                        <div className="header-auth">
                            <div className="button header-login">Đăng nhập</div>
                            <div className="button header-register">Đăng ký</div>
                        </div>
                    </div>
                </Container>
            </div>
            <Outlet />
        </>
    )
}