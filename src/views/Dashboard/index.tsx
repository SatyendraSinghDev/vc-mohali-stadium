import { FC } from 'react'
import { Layout, Button } from 'antd'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
// import Button from 'components/Button'

const { Content } = Layout

const Dashboard: FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Button />
      <Sidebar />
      <Layout>
        <Navbar />
        <Content style={{ padding: '24px' }}>{'children'}</Content>
      </Layout>
    </Layout>
  )
}

export default Dashboard
