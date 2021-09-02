import type { FC } from 'react'
import { useEffect, useCallback, useState } from 'react'
import IntlContext, { defaultLanguage } from '../contexts/IntlContext'
import type { Language, MessageKey, MessageMap } from '../contexts/IntlContext'
import React from 'react'

interface State {
  language: Language
  messages: MessageMap
}

const fetchMessages = async (language: Language) => {
  try {
    return {
      language,
      messages: (await import(`messages/${language}.json`)).default,
    }
  } catch {
    return {
      language: defaultLanguage,
      messages: (await import(`messages/${defaultLanguage}.json`)).default,
    }
  }
}

const IntlProvider: FC = (props) => {
  const [state, setState] = useState<State>()
  const t = useCallback((id: MessageKey) => state?.messages[id] || `TODO:${id}`, [state?.messages])

  const init = useCallback(async () => {
    setState(await fetchMessages(navigator.language.split('-')[0] as Language/*  'en' */))
  }, [])

  useEffect(() => { init() }, [init])

  if (!state) {
    return null
  }

  return <IntlContext.Provider value={{ language: state.language, t }} {...props} />
}

export default IntlProvider
