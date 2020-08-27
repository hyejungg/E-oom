# E-oom

### 서버 실행 방법
- server/app 디렉토리에 config 폴더 추가
- server/app/config 디렉토리에 db.config.js 파일 추가

```
module.exports = {
    HOST: "eoomdb.mysql.database.azure.com",
    USER: "eoomadmin@eoomdb",
    PASSWORD: "qwe123!@#",
    DB: "eoomdb"
  };
```

- db.config.js 파일에 위의 코드 추가

------
- server 디렉토리에서 
- `npm install`
- `node server.js` 

### 클라이언트 실행 방법
- client 디렉토리에서
- `npm install`
- `npm install @material-ui/core`
- `npm install --save axios`
- `npm start`

-------------
------------
### [프론트 진행상황]
* USER 부분
- 회원가입 : OK / 구글, 네이버로 회원가입하기는 아직 X
- 로그인 : OK
- 아이디, 비밀번호 찾기 : OK 
- 메인화면에서 로그인 시 유저 닉네임 보여주기 OK -> 해당 버튼 클릭시 로그아웃 OK. 
  `//로그아웃은 됐으나 화면에서 새로고침 안하면 로그아웃된 것이 적용 안됨. 이 부분 수정 필요`
- 마이페이지
   `1. 프로필 : 유저정보 + 강의에 대한 정보 모두 필요해서 lecture랑 room 완성 후에 다시 해야 함!`
   2. 회원 정보 수정 :  유저 정보 데려오는거 성공 OK -> `화면에 유저 정보 보여주는거 해야 함.`
   `3. 회의 설정 : lecture랑 room 완성 후에 다시 해야 함
   4. 문의사항 : X` 
- 향후에 시간 되면 -> 로그인을 해야 마이페이지, 수업 생성 등등이 들어가지도록 수정! or 로그인 안되어 있으면 로그인 화면으로 이동시키기 하기

