import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import AuthDataService from '../services/auth.service'

var isAuthenticated = false;

const TheHeader = () => {
  // var user_nickname ='';
  
  var user_data = AuthDataService.getCurrentUser(); 

  if(user_data !== null) {
   isAuthenticated = true; 
   var user_nickname = user_data.user_nickname;
  }else {
    isAuthenticated = false;
  }

  // const _getUserData = async () => {
  //   const user_data = await AuthDataService.getCurrentUser();
  //   if(user_data !== null) {
  //     isAuthenticated = true; 
  //     user_nickname = user_data.user_nickname;
  //    }else {
  //      isAuthenticated = false;
  //    }
  // }

  const showLogout = (value) =>{
      value = user_nickname + "님, 안녕하세요!";
      return value;
  }

  function _isLogout(){
    isAuthenticated = false;
    console.log("로그아웃 성공");
    alert("로그아웃 되었습니다!");
    AuthDataService.logout();
  }

  const handleLogout = () => {
    console.log("버튼눌림");
    if(window.confirm("로그아웃을 하시겠습니까?"))
      _isLogout();
  }

  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/dashboard">Home</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/base/mypage">MyPage</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3" align="right">
        {/* //로그인 시 -> 000님, 로그아웃
        //로그아웃 시 -> 로그인 */}
        <CHeaderNavItem className="px-3" >
          {isAuthenticated
            ? <CButton className="ml-3 d-md-down-none" 
                       variant="ghost" 
                       onClick={handleLogout}>{showLogout()}</CButton>
            : <>{" "}</>}
          </CHeaderNavItem>
      </CHeaderNav>
    </CHeader>
  )
}

export default TheHeader
