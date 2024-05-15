import { Progress } from 'antd'

export default function Procentagem({ porcentagem }) {
  const conicColors = {
    '0%': '#ffccc7',
    '50%': '#ffe58f',
    '100%': '#87d068',
  }
  return (
    <Progress type="dashboard" percent={porcentagem} strokeColor={conicColors} />
  )
}