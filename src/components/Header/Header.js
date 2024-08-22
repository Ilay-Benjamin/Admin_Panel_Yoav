import React from 'react';
import '../../assets/css/components/Header/style.Header.css'; // Assuming you have styles for Header
import profilePicture from '../../assets/images/icons/profile_picture.png'; // Assuming you have a profile picture
import yoavLogo from '../../assets/images/icons/yoav_logo.jpg'; // Assuming you have a logo
import searchIcon from '../../assets/images/icons/search.png'; // Assuming you have a search icon
import homeIcon from '../../assets/images/icons/home.png'
import classNames from 'classnames';


function Header() {
  return (
    <header className="header">
      <div className={classNames('header-section', 'start-section')}>
        <div className={classNames('icon-button' , "search-button")}> <img className='search-image' src={homeIcon} alt="" /> </div>
        <div className={classNames('icon-button' , "go-home-button")}> <img className='home-image' src={searchIcon} alt="" /> </div>
      </div>
      <div className={classNames('header-section', 'middle-section')}>
        <div className={classNames('icon-button' , "logo")}> <img className='logo-image' src={yoavLogo} alt="" /> </div>
      </div>
      <div className={classNames('header-section', 'end-section')}>
        <div className={classNames('icon-fbutton' , "fullname-title")}> <h5 className='fullname-text'>Ilay Benjamin</h5> </div>
        <div className={classNames('icon-button' , "profile-picture")}> <img className='profile-picture-image' src={profilePicture} alt="" /> </div>
      </div>

    </header>
  );
}

export default Header;
