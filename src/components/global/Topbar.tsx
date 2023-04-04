import { ColorModeContext } from '@/config/themes';
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  alpha,
  styled,
  useMediaQuery,
  useTheme
} from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { useContext } from 'react';
import Link from 'next/link';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    color: theme.palette.text.primary,
    paddingLeft: '1em',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}));

const TopBar = () => {
  const theme = useTheme();
  const colors = theme.palette;
  const colorMode = useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: colors.background.default,
          px: 2
        }}
        disableGutters
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Typography
              variant={isMobile ? 'h5' : 'h4'}
              fontFamily="Alkatra"
              color={colors.primary.main}
            >
              Inkwell
            </Typography>
          </Link>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: 0.5,
              backgroundColor: colors.background.paper,
              // backgroundColor: colors.background.default,
              '&:hover': {
                backgroundColor: alpha(colors.background.paper, 0.5)
                // backgroundColor: alpha(colors.background.default, 0.5)
              },
              mx: 2
            }}
          >
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton aria-label="search button">
              <SearchIcon />
            </IconButton>
          </Box>

          <IconButton
            onClick={colorMode.toggleColorMode}
            aria-label="dark and light mode button"
          >
            {theme.palette.mode === 'dark' ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
          </IconButton>
          {/* <IconButton aria-label='notifications button'>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton aria-label='settings button'>
            <SettingsOutlinedIcon />
          </IconButton> */}
          <IconButton aria-label="profile button">
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
