import { Typography } from '@material-ui/core'
import React from 'react'
import useIntl from '../../hooks/useIntl'

const JobExperiences = () => {
  const { t } = useIntl()

  return (
    <div style={{ height: 1000 }}>
      <Typography variant="h3" id="job">
        {t('job_xp_title')}
      </Typography>
    </div>
  )
}

export default JobExperiences
