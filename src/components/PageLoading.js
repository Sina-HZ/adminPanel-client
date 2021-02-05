import { Box, CircularProgress } from '@material-ui/core'

const PageLoading = () => {

  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <CircularProgress color='secondary' />
    </Box>
  )
}

export default PageLoading
