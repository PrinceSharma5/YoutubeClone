import React, { useState } from 'react'
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { AiFillVideoCamera } from "@react-icons/all-files/ai/AiFillVideoCamera";
import { IoIosNotifications } from "@react-icons/all-files/io/IoIosNotifications";
import { Link } from 'react-router-dom';
import ytlogo from '../../assets/youtube.svg';
import './Header.css';
import Avatar from 'react-avatar';

function Header() {
  const [inputSearch, setInputSearch] = useState('');
  return (
    <div className='header'>
      {/* left side */}
      <div className='header__left'>
        <AiOutlineMenu />
        <Link to='/'>
          <img src={ytlogo} alt="" className='header__logo' />
        </Link>

      </div>fir

      {/* center side */}
      <div className='header__center'>
        <input type="text" onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} />
        <Link to={`/search/${inputSearch}`}>
          <BsSearch className='header__searchbutton' />
        </Link>
      </div>

      {/* right side */}
      <div className='header__right'>
        <AiFillVideoCamera className='header__icon' />
        <IoIosNotifications className='header__icon' />
        <Avatar src='https://media.licdn.com/dms/image/C4D03AQEuwWx_QBmswA/profile-displayphoto-shrink_400_400/0/1662894560082?e=1684972800&v=beta&t=RFsMPe07PdICxr2xHbjxxaZbFd2vZRejNJSn3MZ2NRg' round={true} size={30} />
      </div>
    </div>
  )
}

export default Header