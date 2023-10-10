import { FC } from 'react'
import { Layout, Menu } from 'antd'
import { UserOutlined, DashboardOutlined, AppstoreAddOutlined } from '@ant-design/icons'
const { Sider } = Layout

const Sidebar: FC = () => {
  return (
    <Sider width={200} theme="light">
      <Menu theme="light" mode="vertical" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Users
        </Menu.Item>
        <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
          Products
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar
