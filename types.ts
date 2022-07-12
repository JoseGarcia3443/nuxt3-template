export type IBlog = {
  id: number,
  title: string,
  body: string
}

export type IBlogAxiosResponse = {
  blogs: Array<IBlog> | undefined,
  pending: boolean,
  error?: any
}
