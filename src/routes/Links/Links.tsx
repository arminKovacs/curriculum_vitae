import { Typography } from '@material-ui/core'
import React from 'react'
import useIntl from '../../hooks/useIntl'

const Links = () => {
  const { t } = useIntl()

  return (
    <div style={{ height: 1000 }}>
      <Typography variant="h3" id="links">
        {t('links_title')}
      </Typography>
    </div>
  )
}

export default Links
