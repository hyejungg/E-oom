import React, { useState, useReducer  } from "react";
import { Link } from "react-router-dom";
import {
  CCol,
  CRow,
  CCardHeader,
  CButton,
  CForm,
  CInput,
  CInputGroup,
  CLabel,
  CSelect,
} from "@coreui/react";

import RoomDataService from "../../../services/rooms.service"

const TestListRoomAdd= () => {
  function reducer(state, action) {
    return {
      ...state,
      [action.name]: action.value
    };
  }
  const [state, dispatch] = useReducer(reducer, {
    lectureNum : 4, //test용
    lectureName: '',
    lectureDate: '',
    lectureTime: '',
    lectureRecursion: 'Never',
    lectureReminder: 'false',
  });
  const onChange = e => {
    e.preventDefault();
    dispatch(e.target);
    console.log(state);
  };

  //동기 처리
  async function callApi(url, data){
      const response = await url.createRoom(data);
      const body = await response;
    return body;
  } 
  //reservation
  const submitHandle = (e) =>{

    var data = {
      lecture_num : state.lectureNum,
      room_title : state.lectureName,
      room_startdate : state.lectureDate,
      room_starttime : state.lectureTime,
      room_recursion : state.lectureRecursion,
      room_reminder : state.lectureReminder
    }

    var responseData = [];
    console.log(data.lecture_num);
    callApi(RoomDataService, data)
      .then(response =>{
        responseData = response.data;
        if(responseData["message"]){
          alert(responseData["message"]);
        }else{
          alert("입력 정보를 다시 입력하세요!!");
        }
      })
      .catch(error => {
        const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        console.log(resMessage);
      })
  }
  
  return (
    <div>
      <CForm>
        <CCardHeader>
          <h3>새 강의 시작</h3>
        </CCardHeader>
        <CCardHeader>
          <div className="lectureMenu">강의명</div>
          <div className="lectureInfo">
            <CInputGroup className="mb-3">
              <CInput
                type="text"
                name="lectureName"
                value={state.lectureName}
                onChange={onChange}
                placeholder="강의명을 적어주세요."
                autoComplete="lectureName"
              />
            </CInputGroup>
          </div>
        </CCardHeader>
        <CCardHeader>
          <div className="lectureMenu">날짜</div>
          <div className="lectureInfo">
            <CInputGroup className="mb-3">
              <CInput
                type="date"
                name="lectureDate"
                value={state.lectureDate}
                onChange={onChange}
                placeholder="강의 예약 날짜를 설정해주세요."
                autoComplete="lectureDate"
              />
            </CInputGroup>
          </div>
        </CCardHeader>
        <CCardHeader>
          <div className="lectureMenu">시간</div>
          <div className="lectureInfo">
            <CInputGroup className="mb-3">
              <CInput
                type="time"
                name="lectureTime"
                value={state.lectureTime}
                onChange={onChange}
                placeholder="강의 예약 시간을 설정해주세요."
                autoComplete="lectureTime"
              />
            </CInputGroup>
          </div>
        </CCardHeader>
        <CCardHeader>
          <div className="lectureMenu">
            <CInputGroup>
              <CLabel htmlFor="lectureRecursion">반복알림여부</CLabel>
            </CInputGroup>
          </div>
          <div className="lectureInfo">
            <CSelect
              custom
              value={state.lectureRecursion}
              label="lectureRecursion"
              name="lectureRecursion"
              onChange={onChange}
            >
              <option value={"Never"}>Never</option>
              <option value={"Every Day"}>Every Day</option>
              <option value={"Every Week"}>Every Week</option>
              <option value={"Every 2 Weeks"}>Every 2 Weeks</option>
              <option value={"Every Month"}>Every Month</option>
              <option value={"Every Year"}>Every Year</option>
            </CSelect>
          </div>
        </CCardHeader>
        <CCardHeader>
          <div className="lectureMenu">
            <CInputGroup>
              <CLabel htmlFor="lectureReminder">이메일로???? 알림여부</CLabel>
            </CInputGroup>
          </div>
          <div className="lectureInfo">
            <CInputGroup>
              <CSelect
                custom
                value={state.lectureReminder}
                label="lectureReminder"
                name="lectureReminder"
                onChange={onChange}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </CSelect>
            </CInputGroup>
          </div>
        </CCardHeader>
      </CForm>
      <CRow>
        <CCol align="right">
          <CButton
            className="mt-3"
            tabIndex={-1}
            color="info"
            onClick={submitHandle}
          >
            {" "}
            예약{" "}
          </CButton>
        </CCol>
      </CRow>
    </div>
  );
};

export default TestListRoomAdd;
