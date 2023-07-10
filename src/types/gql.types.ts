export type HigraphResponseError = {
  message: string
  extensions: {
    code: string
    path: string[]
  }
}
