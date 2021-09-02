import { createContext } from 'react'
import type enMessages from '../messages/en.json'

export type Language = 'hu' | 'en'

export type MessageKey = keyof typeof enMessages
export type MessageMap = { [k in MessageKey]: string }

export const defaultLanguage: Language = 'en'

interface Context {
  language: Language
  t: (id: MessageKey) => string | null
}

const IntlContext = createContext<Context>({
  language: defaultLanguage,
  t: () => null,
})

export default IntlContext
