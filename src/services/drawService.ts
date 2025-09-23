import { api, type ApiResponse } from './http'

export type DrawNumber = {
  id: number
  number: number
  used: boolean
  createdAt: string
  usedAt: string
}

async function getDrawNumber() {
  const res = await api.get<ApiResponse<DrawNumber>>('/draw')
  return res.data
}


export const drawService = {
  getDrawNumber,
}