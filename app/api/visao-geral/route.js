import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function GET() {
  const result = await prisma.result.findFirst()
  return NextResponse.json(result)
}

export async function POST(request) {
  const data = await request.json()
  const result = await prisma.result.findFirst()
  
  await prisma.result.update({
    where: { id: result.id },
    data: {
      total: result.total + 1,
      median: (result.median + data.pontuacao) / 2
    }
  })
  
  return NextResponse.json({ message: 'Resultado atualizado' })
}