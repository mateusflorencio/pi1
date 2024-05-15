'use client'
import { Layout } from 'antd'

const { Content, } = Layout
export default function Home() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '0 48px' }}>
        visao geral
      </Content>
    </Layout>
  )
}
