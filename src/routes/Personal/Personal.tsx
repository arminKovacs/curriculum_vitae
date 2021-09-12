import { Typography } from '@material-ui/core'
import React from 'react'
import useIntl from '../../hooks/useIntl'

const Personal = () => {
  const { t } = useIntl()

  return (
    <div style={{ height: 1000 }}>
      <Typography variant="h3" id="personal">
        {t('personal_info_title')}
      </Typography>
    </div>
  )
}

export default Personal
