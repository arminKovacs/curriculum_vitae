import { useContext } from 'react'
import IntlContext from '../contexts/IntlContext'

const useIntl = () => useContext(IntlContext)

export default useIntl
