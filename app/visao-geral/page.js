'use client'
import { useEffect, useState } from 'react'
import { Layout, Row, Typography } from 'antd'
import Procentagem from '../component/Porcentagem'

async function getResume() {
  return fetch('/api/visao-geral').then((res) => res.json())
}

const { Content, } = Layout
const { Title, Paragraph } = Typography

export default function Home() {
  const [resume, setResume] = useState(null)
  useEffect(() => {
      getResume().then((data) => setResume(data))
  }, [])
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '0 48px' }}>

        <Row justify={'center'} style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Title level={2}>{resume?.median}% de acertos</Title>
          <Procentagem porcentagem={resume?.median} />
        </Row>

        <Row justify={'center'} style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Title level={2}>Total de participantes</Title>
          <Title level={3}>{resume?.total}</Title>
        </Row>

        <Row justify={'center'} style={{ paddingTop: '24px' }}>
          <Paragraph>
            A visão geral é uma página que exibe informações gerais sobre os resultados dos participantes do quiz.
          </Paragraph>
        </Row>
      </Content>
    </Layout>
  )
}
