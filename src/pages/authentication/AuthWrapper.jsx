import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// project import
import AuthCard from './AuthCard';
export default function AuthWrapper({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#262626' }}>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
          LOGIN LOGO
        </Grid>
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
          >
            <Grid item>
              <AuthCard>{children}</AuthCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

AuthWrapper.propTypes = { children: PropTypes.node };
