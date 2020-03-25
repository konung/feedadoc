import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Nav from './Nav';
import {Link} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";

// prettier-ignore
const Logo = () => (
  <svg width="177" height="53" viewBox="0 0 177 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M64.872 30V12.96H76.176V15.984H68.208V20.52H74.856V23.544H68.208V30H64.872ZM88.7462 24.024C88.7462 24.648 88.7222 25.024 88.6742 25.152H80.4422C80.6342 25.856 80.9942 26.408 81.5222 26.808C82.0502 27.208 82.6902 27.408 83.4422 27.408C84.5782 27.424 85.5142 26.984 86.2502 26.088L88.2902 27.984C87.1222 29.456 85.4342 30.192 83.2262 30.192C81.4822 30.192 80.0422 29.632 78.9062 28.512C77.7702 27.392 77.2022 25.928 77.2022 24.12C77.2022 22.36 77.7462 20.92 78.8342 19.8C79.9382 18.664 81.3302 18.096 83.0102 18.096C84.7062 18.096 86.0822 18.656 87.1382 19.776C88.2102 20.88 88.7462 22.296 88.7462 24.024ZM83.1062 20.856C82.4502 20.856 81.8902 21.032 81.4262 21.384C80.9622 21.736 80.6422 22.24 80.4662 22.896H85.6262C85.2742 21.536 84.4342 20.856 83.1062 20.856ZM102.176 24.024C102.176 24.648 102.152 25.024 102.104 25.152H93.8719C94.0639 25.856 94.4239 26.408 94.9519 26.808C95.4799 27.208 96.1199 27.408 96.8719 27.408C98.0079 27.424 98.9439 26.984 99.6799 26.088L101.72 27.984C100.552 29.456 98.8639 30.192 96.6559 30.192C94.9119 30.192 93.4719 29.632 92.3359 28.512C91.1999 27.392 90.6319 25.928 90.6319 24.12C90.6319 22.36 91.1759 20.92 92.2639 19.8C93.3679 18.664 94.7599 18.096 96.4399 18.096C98.1359 18.096 99.5119 18.656 100.568 19.776C101.64 20.88 102.176 22.296 102.176 24.024ZM96.5359 20.856C95.8799 20.856 95.3199 21.032 94.8559 21.384C94.3919 21.736 94.0719 22.24 93.8959 22.896H99.0559C98.7039 21.536 97.8639 20.856 96.5359 20.856ZM113.158 12.336H116.302V30H113.302V28.584H113.254C112.406 29.656 111.206 30.192 109.654 30.192C108.022 30.192 106.678 29.64 105.622 28.536C104.566 27.416 104.038 25.96 104.038 24.168C104.038 22.408 104.558 20.96 105.598 19.824C106.654 18.672 107.974 18.096 109.558 18.096C111.046 18.096 112.222 18.6 113.086 19.608H113.158V12.336ZM108.07 26.496C108.63 27.088 109.35 27.384 110.23 27.384C111.11 27.384 111.846 27.088 112.438 26.496C113.03 25.904 113.326 25.136 113.326 24.192C113.326 23.248 113.03 22.464 112.438 21.84C111.862 21.216 111.126 20.904 110.23 20.904C109.366 20.904 108.646 21.208 108.07 21.816C107.51 22.408 107.23 23.2 107.23 24.192C107.23 25.136 107.51 25.904 108.07 26.496Z" fill="black"/>
    <path d="M127.851 18.288H130.971V30H127.995V28.584H127.923C127.107 29.656 125.939 30.192 124.419 30.192C122.787 30.192 121.443 29.64 120.387 28.536C119.347 27.416 118.827 25.96 118.827 24.168C118.827 22.408 119.347 20.96 120.387 19.824C121.443 18.672 122.763 18.096 124.347 18.096C125.803 18.096 126.947 18.6 127.779 19.608H127.851V18.288ZM124.995 27.384C125.827 27.384 126.531 27.088 127.107 26.496C127.683 25.904 127.971 25.136 127.971 24.192C127.971 23.248 127.691 22.464 127.131 21.84C126.571 21.216 125.867 20.904 125.019 20.904C124.155 20.904 123.435 21.208 122.859 21.816C122.283 22.408 121.995 23.2 121.995 24.192C121.995 25.136 122.275 25.904 122.835 26.496C123.395 27.088 124.115 27.384 124.995 27.384Z" fill="#979797"/>
    <path d="M134.341 30V12.96H139.981C142.653 12.96 144.797 13.752 146.413 15.336C148.029 16.904 148.837 18.96 148.837 21.504C148.837 24.048 148.045 26.104 146.461 27.672C144.893 29.224 142.757 30 140.053 30H134.341ZM137.677 27H139.837C141.469 27 142.789 26.48 143.797 25.44C144.821 24.4 145.333 23.088 145.333 21.504C145.333 19.904 144.837 18.584 143.845 17.544C142.853 16.504 141.589 15.984 140.053 15.984H137.677V27ZM157.176 30.192C155.336 30.192 153.84 29.624 152.688 28.488C151.536 27.352 150.96 25.904 150.96 24.144C150.96 22.384 151.536 20.936 152.688 19.8C153.84 18.664 155.336 18.096 157.176 18.096C159 18.096 160.496 18.656 161.664 19.776C162.832 20.896 163.416 22.352 163.416 24.144C163.416 25.936 162.832 27.392 161.664 28.512C160.496 29.632 159 30.192 157.176 30.192ZM157.176 27.384C158.04 27.384 158.76 27.08 159.336 26.472C159.928 25.864 160.224 25.088 160.224 24.144C160.224 23.184 159.936 22.408 159.36 21.816C158.784 21.208 158.056 20.904 157.176 20.904C156.28 20.904 155.544 21.216 154.968 21.84C154.408 22.448 154.128 23.216 154.128 24.144C154.128 25.056 154.416 25.824 154.992 26.448C155.568 27.072 156.296 27.384 157.176 27.384ZM171.328 30.192C169.568 30.192 168.12 29.632 166.984 28.512C165.864 27.392 165.304 25.936 165.304 24.144C165.304 22.352 165.872 20.896 167.008 19.776C168.16 18.656 169.648 18.096 171.472 18.096C172.448 18.096 173.376 18.288 174.256 18.672C175.136 19.056 175.864 19.608 176.44 20.328L174.328 22.152C173.608 21.32 172.696 20.904 171.592 20.904C170.664 20.904 169.912 21.208 169.336 21.816C168.76 22.408 168.472 23.176 168.472 24.12C168.472 25.08 168.76 25.864 169.336 26.472C169.928 27.08 170.688 27.384 171.616 27.384C172.736 27.384 173.648 26.984 174.352 26.184L176.488 28.08C175.944 28.704 175.224 29.216 174.328 29.616C173.448 30 172.448 30.192 171.328 30.192Z" fill="#D50000"/>
    <path d="M44.1666 4.41669H8.83329C6.40413 4.41669 4.41663 6.40419 4.41663 8.83335V48.5834L13.25 39.75H44.1666C46.5958 39.75 48.5833 37.7625 48.5833 35.3334V8.83335C48.5833 6.40419 46.5958 4.41669 44.1666 4.41669ZM44.1666 35.3334H13.25L8.83329 39.75V8.83335H44.1666V35.3334Z" fill="#D50000"/>
    <path d="M26.1558 32.1212L24.5756 30.6771C18.963 25.5679 15.2576 22.1982 15.2576 18.0627C15.2576 14.6931 17.8949 12.0455 21.2516 12.0455C23.1479 12.0455 24.9679 12.9316 26.1558 14.332C27.3437 12.9316 29.1638 12.0455 31.0601 12.0455C34.4167 12.0455 37.0541 14.6931 37.0541 18.0627C37.0541 22.1982 33.3487 25.5679 27.7361 30.688L26.1558 32.1212Z" fill="#D50000"/>
    <rect x="24.597" y="16.5592" width="3.05238" height="9.15712" fill="white"/>
    <rect x="21.5449" y="22.6639" width="3.05237" height="9.15713" transform="rotate(-90 21.5449 22.6639)" fill="white"/>
  </svg>
);

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '30px',
      paddingRight: '30px',
    }
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30vw',
      '& > svg': {
        maxWidth: '100%',
      }
    },
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar elevation={0} position="static" className={classes.root}>
      <Box p={2} display="flex" alignItems="center" justifyContent="space-between">
        <Link className={classes.logo} to="/">
          <Logo />
        </Link>
        <Nav />
      </Box>
    </AppBar>
  );
};

export default Header;
