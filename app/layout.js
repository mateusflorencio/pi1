'use client'
import { Inter } from "next/font/google"
import "./globals.css"
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { useRouter } from 'next/navigation'
import { Layout, Menu, Button } from 'antd'
import Link from 'next/link'

const { Header } = Layout


const items = [
  { key: '1', label: 'Entenda sobre o assunto', link: '/entenda-sobre-o-assunto' },
  { key: '2', label: 'Visão geral', link: '/visao-geral' }
]


const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  const router = useRouter()
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <Header style={{ display: 'flex', alignItems: 'center' }}>
            <Link className="text-white" href="/">
              P1
            </Link>
            <Menu
              theme="dark"
              mode="horizontal"
              items={items}
              style={{ flex: 1, minWidth: 0 }}
              onClick={({ key }) => {
                router.push(items.find((item) => item.key === key).link)
              }}
              selectable={false}
            />

            <Button
              onClick={() => router.push('/quiz')}
              type="primary">Fazer quizz</Button>
          </Header>
          {children}

        </AntdRegistry>
      </body>
    </html>
  )
}
