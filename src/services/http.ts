import axios from 'axios'

import { APP_CONSTANTS } from '@/constants/appContants'


export const api = axios.create({
  baseURL: APP_CONSTANTS.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export type ApiResponse<TData> = {
  success: boolean
  message: string | null
  data: TData
}