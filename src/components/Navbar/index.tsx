import { FC } from 'react'
import { Layout, Button, Badge } from 'antd'
import { BellOutlined, LogoutOutlined } from '@ant-design/icons'

const { Header } = Layout

const Navbar: FC = () => {
  return (
    <Header
      style={{
        background: '#fff',
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div></div>
      <div>
        <Badge
          count={5}
          style={{
            marginRight: '16px',
            height: '7px',
            width: '7px',
            minHeight: '7px',
            minWidth: '7px',
            top: '12px',
            left: '13px',
          }}
        >
          <Button type="text" icon={<BellOutlined />} />
        </Badge>
        <Button type="text">
          Logout
          <LogoutOutlined />
        </Button>
      </div>
    </Header>
  )
}

export default Navbar
