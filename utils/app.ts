import { LanguageManager } from './lang'

export function AppSetup() {
  // use language manager
  const languageManager = LanguageManager()

  return {
    languageManager,
  }
}
