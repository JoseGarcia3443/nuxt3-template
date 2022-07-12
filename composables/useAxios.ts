type AxiosConfig = {
  method?: string
  server: boolean
}

export const useAxios = () => {
  const config = useRuntimeConfig()

  const run = async (options: { url: string; config?: AxiosConfig }) => {
    const { data, pending, refresh, error } = await useFetch(options.url, {
      baseURL: config.API_BASE_URL,
      ...options.config,
    })

    return { data, pending, refresh, error }
  }

  return {
    run,
  }
}
