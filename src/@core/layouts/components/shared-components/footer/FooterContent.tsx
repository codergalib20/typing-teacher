// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, Made with `}
        <Box component='span' sx={{ color: 'error.main' }}>
          ❤️
        </Box>
        {` by `}
        <Link target='_blank' href='https://codergalib.live/'>
          Asadullah Hil Galib
        </Link>
      </Typography>
      {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          <Link target='_blank' href='https://codergalib.live/'>
            About Asadullah
          </Link>
          <Link
            target='_blank'
            href='https://github.com/codergalib20/typing-teacher/blob/main/README.md'
          >
            Documentation
          </Link>
          <Link
            target='_blank'
            href='https://github.com/codergalib20/typing-teacher/issues'
          >
            Support
          </Link>
        </Box>
      )}
    </Box>
  )
}

export default FooterContent
