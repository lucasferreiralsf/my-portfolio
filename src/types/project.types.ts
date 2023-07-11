export type ProjectResponse = {
  id: string
  title: string
  createdAt: string
  description?: string
  pinImage: {
    url: string
    mimeType: string
    fileName: string
  }
  skills: {
    id: string
    title: string
    link: string
    icon: {
      url: string
      mimeType: string
      fileName: string
    }
  }[]
}
