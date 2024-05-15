'use client'
import { Layout, Typography } from 'antd'

const { Content, } = Layout
const { Title, Paragraph, Text } = Typography
export default function Home() {
  return (
    <Layout style={{ minHeight: '100vh', paddingTop: '20px' }}>

      <Title style={{ padding: '0 100px' }} >Entenda sobre o assunto</Title>

      <Content style={{ padding: '0 100px' }}>

        <Paragraph>
          A LGPD, ou Lei Geral de Proteção de Dados Pessoais, é a legislação brasileira que regula o tratamento de dados pessoais de indivíduos por entidades públicas e privadas. Com o objetivo de proteger a privacidade e garantir o uso adequado desses dados, a LGPD estabelece uma série de princípios e obrigações para as organizações e confere direitos expressivos aos titulares dos dados.

          Entre os direitos garantidos pela LGPD aos indivíduos estão:

          Acesso aos Dados: Os indivíduos têm o direito de acessar os dados pessoais que uma organização detém sobre eles.

        </Paragraph>

        <Paragraph><Text strong>Correção de Dados Incompletos, Inexatos ou Desatualizados: </Text> Os titulares podem solicitar a correção de seus dados pessoais.</Paragraph>
        <Paragraph><Text strong>Anonimização, Bloqueio ou Eliminação:</Text> Direito de solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desacordo com a lei.</Paragraph>
        <Paragraph><Text strong>Portabilidade de Dados:</Text> Direito de solicitar a transferência de dados pessoais para outro fornecedor de serviço ou produto.</Paragraph>
        <Paragraph><Text strong>Eliminação dos Dados Tratados com Consentimento:</Text> Os titulares podem solicitar a eliminação de dados cujo tratamento foi baseado em consentimento, exceto em casos previstos em lei.</Paragraph>
        <Paragraph><Text strong>Informação sobre Compartilhamento de Dados:</Text> Direito de saber com quais entidades públicas e privadas o controlador compartilhou seus dados.</Paragraph>
        <Paragraph><Text strong>Revogação do Consentimento:</Text> Os titulares podem retirar seu consentimento para o tratamento de dados a qualquer momento.</Paragraph>
        <Paragraph>A LGPD incentiva transparência no tratamento de dados e impõe penalidades significativas para o não cumprimento de suas disposições. Essa lei é um passo fundamental para a proteção de dados pessoais e a privacidade no Brasil.</Paragraph>
      </Content>
    </Layout>
  )
}
