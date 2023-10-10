import { FC } from 'react'
import { Layout, Menu } from 'antd'
// import { UserOutlined, DashboardOutlined, AppstoreAddOutlined } from '@ant-design/icons'
import {
  UserOutlined,
  DashboardOutlined,
  AppstoreAddOutlined,
  BellOutlined,
  LogoutOutlined,
  FireOutlined,
  FileTextOutlined,
  TeamOutlined,
  SettingOutlined,
} from '@ant-design/icons'

const { Sider } = Layout

const Sidebar: FC = () => {
  return (
    <Sider
      width={200}
      theme="light" // Set sidebar theme to light
      style={{ boxShadow: '2px 0px 10px rgba(0, 0, 0, 0.1)', right: '5px', borderRadius: '11px' }} // Add shadow to the sidebar
    >
      
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: "8px"
        }}
      >
        <div className="dash-logo">
          {/* <FireOutlined style={{ fontSize: '24px', marginRight: '8px' }} /> */}
          <img src="./images/dash-logo.png" alt="logo-dash" />
          <span className="text-logo">DDS</span>
        </div>
      </div>
      <Menu theme="light" mode="vertical" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Dealers
        </Menu.Item>
        <Menu.Item key="3" icon={<FileTextOutlined />}>
          Team Sales Report
        </Menu.Item>
        <Menu.Item key="4" icon={<TeamOutlined />}>
          DDS Employee
        </Menu.Item>
        <Menu.Item key="5" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar
