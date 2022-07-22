type Route = {
  id: number
  url: string
  title: string
}

export const useNavigation = () => {
  const { t } = useLang()

  const menu = reactive<Route[]>([
    {
      id: 1,
      url: '/',
      title: t('navigation.item'),
    },
    {
      id: 2,
      url: '/',
      title: t('navigation.item'),
    },
    {
      id: 3,
      url: '/',
      title: t('navigation.item'),
    },
  ])

  const useGetNavigationItems = () => ({ menu })

  return {
    useGetNavigationItems,
  }
}
