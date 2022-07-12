type Route = {
  id: number,
  url: string, 
  title: string
}

export const useNavigation = () => {
  const { t } = useLang()

  const menu = reactive<Route[]>([
    {
      id: 1,
      url: '/',
      title: t('navigation.home')
    },
    {
      id: 2,
      url: '/axios',
      title: t('navigation.axios')
    }
  ])

  const useGetNavigationItems = () => ({ menu })

  return {
    useGetNavigationItems
  }
}