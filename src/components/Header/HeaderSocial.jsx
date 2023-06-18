import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank"><LinkedInIcon/></a>
        <a href='https://github.com' target="_blank"><GitHubIcon/></a>
        <a href='https://linkedin.com' target="_blank"><FacebookIcon/></a>

    </div>
  )
}

export default HeaderSocial