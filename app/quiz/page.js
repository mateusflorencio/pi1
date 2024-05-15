'use client'
import { Layout, theme, Button, Form, Checkbox, Row, Col, Progress, Typography, Radio } from 'antd'
import perguntas from './perguntas'
import { useEffect, useState } from 'react'
import Procentagem from '../component/Porcentagem'
import resultados from './resultados'

const { Content, } = Layout
const { Title, Paragraph } = Typography


export default function Home() {
  const [progress, setProgress] = useState(1 / perguntas.length * 100)
  const [perguntaAtual, setPerguntaAtual] = useState(1)
  const [resultado, setResultado] = useState(100)
  const [selecionados, setSelecionados] = useState({})
  const [erradas, setErradas] = useState([])
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const handleVoltarAnterior = () => {
    setProgress(Math.abs(((perguntaAtual - 1) / perguntas.length) * 100))
    setPerguntaAtual(perguntaAtual - 1)
  }

  const handleChange = (sequencia, value) => {
    // Atualiza o estado para armazenar a opção selecionada para a pergunta específica
    setSelecionados({
      ...selecionados,
      [sequencia]: value
    })
  }

  useEffect(() => {
    let novoResultado = 0
    let erradas = []
    setErradas([])
    Object.entries(selecionados).forEach(([key, value]) => {
      const pergunta = perguntas.find(p => p.sequencia.toString() === key)
      if (pergunta.opcaoCerta === value) novoResultado += pergunta.pontuacao
      else erradas.push(key)
    })
    console.log(erradas)
    setErradas(erradas)
    setResultado(novoResultado)
  }, [selecionados, perguntas])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '0 48px' }}>
        {
          perguntaAtual <= perguntas.length &&
          <Form
            layout="vertical"
            style={{
              backgroundColor: colorBgContainer,
              borderRadius: borderRadiusLG,
              padding: '24px',
              marginBottom: '24px',
              marginTop: '24px',
              minHeight: '50vh'
            }}
          >

            {perguntas.map(p => (
              <Col key={p.sequencia} style={{ display: perguntaAtual === p.sequencia ? 'block' : 'none' }}>
                <Title level={1}>{p.pergunta}</Title>
                <Form.Item label="Escolha uma opção">
                  <Radio.Group
                    style={{ width: '100%' }}
                    onChange={e => handleChange(p.sequencia, e.target.value)}
                    value={selecionados[p.sequencia]}
                  >
                    {p.opcoes.map((o, i) => (
                      <Col key={i} span={24}>
                        <Radio value={o}>{o}</Radio>
                      </Col>
                    ))}
                  </Radio.Group>
                </Form.Item>
              </Col>
            ))}
            <Form.Item>
              <Row justify="space-between">
                <Button
                  disabled={perguntaAtual === 1}
                  onClick={handleVoltarAnterior}
                  type="default">
                  Anterior
                </Button>
                <Button
                  onClick={() => {
                    setProgress((perguntaAtual + 1) / perguntas.length * 100)
                    setPerguntaAtual(perguntaAtual + 1)
                  }}
                  type="primary" htmlType="submit">
                  {progress >= 100 ? 'Ver resultado' : 'Próxima'}
                </Button>
              </Row>
            </Form.Item>
            <Progress percent={progress} showInfo={false} size={['small', 15]} />
          </Form>
        }


        {
          perguntaAtual > perguntas.length &&
          <>
            <Row justify={'center'} style={{ marginTop: '4rem' }}>
              <Procentagem porcentagem={resultado} />
            </Row>
            <Row justify={'center'} style={{ marginTop: '2rem', padding: '0 32' }}>
              <Title level={2}>
                {
                  resultados.find(i => resultado >= i[0] && resultado <= i[1])?.[2]
                }
              </Title>
            </Row>

            {
              erradas.length > 0 &&
              <Row justify={'center'} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Title level={2}>Para você saber mais</Title>
                <Paragraph>
                  {erradas.map((sequencia, i) => (
                    <li key={i}>
                      {perguntas.find(p => p.sequencia.toString() === sequencia).errado}
                    </li>
                  ))}
                </Paragraph>
              </Row>
            }

            <Row justify={'center'}>
              <Button
                style={{ marginTop: '2rem' }}
                onClick={() => {
                  setProgress(1 / perguntas.length * 100)
                  setPerguntaAtual(1)
                  setResultado(0)
                  setSelecionados({})
                }}
                type="primary">
                Tentar de novo
              </Button>
            </Row>
          </>
        }
      </Content>
    </Layout>
  )
}
