export interface IApiResponse<T> {
  code: number
  message: string
  result: T
}
