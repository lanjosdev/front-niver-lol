export type ApiOk<T> = {
  success: true
  message: string | null
  data: T
}

export type ApiError = {
  success: false
  message: string
  data: null
}

export type ApiResult<T> = ApiOk<T> | ApiError


