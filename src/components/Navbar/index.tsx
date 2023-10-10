import { FC } from 'react'
import { Layout } from 'antd'

const { Header } = Layout

const Navbar: FC = () => {
  return <Header style={{ background: '#fff', padding: 0 }}>Fixed Dashboard</Header>
}

export default Navbar
