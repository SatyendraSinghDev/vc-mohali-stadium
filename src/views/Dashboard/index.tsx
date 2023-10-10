import { FC } from 'react'
import { Layout } from 'antd'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'

const { Content } = Layout

const Dashboard: FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Navbar />
        <Content style={{ padding: '24px' }}>{'children'}</Content>
      </Layout>
    </Layout>
  )
}

export default Dashboard
