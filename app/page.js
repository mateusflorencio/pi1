'use client'
import { Layout, Typography, Image, Button } from 'antd'
import Link from 'next/link'

const { Content, } = Layout
const { Title } = Typography

export default function Home() {
  return (
    <Layout style={{ height: '100vh' }}>
      <Content>
        <Title
          style={{
            display: 'flex',
            position: 'absolute',
            top: '40%',
            zIndex: 1,
            color: 'white',
            padding: '100px',
          }}
          level={1}>Proteja seus dados, proteja seu mundo: navegue com segurança e confiança na era digital.
        </Title>
        <Button
          size="large"
          type="primary"
          style={{ position: 'absolute', top: '80%', zIndex: 1, left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Link href="/quiz">
            Fazer quizz
          </Link>
        </Button>
        <Image
          width={'100%'}
          src="/home.png"
          preview={false}
        />
      </Content>
    </Layout>
  )
}
