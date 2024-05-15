'use client'
import { Layout, theme, Button, Form, Checkbox, Row, Col, Progress, Typography } from 'antd'

const { Content, } = Layout
const { Title } = Typography

export default function Home() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '0 48px' }}>
        <Form
          layout="vertical"
          style={{
            backgroundColor: colorBgContainer,
            borderRadius: borderRadiusLG,
            padding: '24px',
            marginBottom: '24px',
            marginTop: '24px',
          }}
        >
          <Title level={1}>Perguntas</Title>
          <Form.Item label="Escolha uma ou mais opções">
            <Checkbox.Group style={{ width: '100%' }}>
              <Row>
                <Col span={24}>
                  <Checkbox value="opcao1">Opção 1</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="opcao2">Opção 2</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="opcao3">Opção 3</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="opcao4">Opção 4</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item>
            <Row justify="space-between">
              <Button type="default">
                Anterior
              </Button>
              <Button type="primary" htmlType="submit">
                Próxima
              </Button>
            </Row>
          </Form.Item>
        </Form>

        <Progress percent={10} showInfo={false} size={['small', 15]} />
      </Content>
    </Layout>
  )
}
