// material-ui
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';

// assets
import SearchOutlined from '@ant-design/icons/SearchOutlined';


export default function Search() {
  return (
    <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
      <FormControl sx={{ width: { xs: '100%', md: 224 } }}>
        <OutlinedInput
          size="small"
          id="header-search"
          startAdornment={
            <InputAdornment position="start" sx={{ mr: -0.5, color: '#ffffff' }}>
              <SearchOutlined sx={{}}/>
            </InputAdornment>
          }
          aria-describedby="header-search-text"
          inputProps={{
            'aria-label': 'weight'
          }}
          placeholder="Ctrl + K"
          sx={{
            // backgroundColor: '#ffffff',
            color: '#ffffff',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ffffff'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#f2f2f2'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#f2f2f2'
            }
          }}
        />
      </FormControl>
    </Box>
  );
}
