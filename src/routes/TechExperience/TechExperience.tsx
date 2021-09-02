import { Typography } from '@material-ui/core'
import React from 'react'
import useIntl from '../../hooks/useIntl'

const TechExperience = () => {
  const { t } = useIntl()

  return (
    <div style={{ height: 1000 }}>
      <Typography variant="h3" id="tech">
        {t('technologies_title')}
      </Typography>
    </div>
  )
}

export default TechExperience
