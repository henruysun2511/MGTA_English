import { BellFilled, BookOutlined, FolderOutlined, LaptopOutlined, ScheduleOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import avatar from '../assets/images/gv.png';
import logo from '../assets/images/logo.jpg';
import "./AdminLayout.scss";

export default function AdminLayout() {
    const navigate = useNavigate();

    const handleClick = ({ key }) => {
        navigate(key); // key chính là đường dẫn
    };

    const items = [
        { icon: <FolderOutlined />, label: 'Tổng quan', key: '/admin/overview' },
        { icon: <UserOutlined />, label: 'Quản lý tài khoản', key: '/admin/accountMana' },
        { icon: <ScheduleOutlined />, label: 'Quản lý lịch học', key: '/admin/studySchedule' },
        { icon: <BookOutlined />, label: 'Quản lý bài tập', key: '/admin/asignmentMana' },
        { icon: <LaptopOutlined />, label: 'Quản lý blog', key: '/admin/blogMana' },
    ];

    return (

        <>

            <div className='admin__layout'>
                <div className='admin__sider'>
                    <div className='admin__avatar'><img src={avatar} alt="avatar.png" /></div>
                    <Menu items={items} onClick={handleClick} defaultSelectedKeys={['/admin/overview']}></Menu>
                </div>

                <div className="admin__main">
                    <div className='admin__header'>
                        <div className='admin__logo'><img src={logo} alt="logo.jpg" /></div>
                         <BellFilled className='admin__icon'/>
                    </div>
                    <div className='admin__content'>
                        <Outlet />
                    </div>
                </div>

            </div>
        </>
    );
};