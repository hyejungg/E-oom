# E-oom
온라인(비대면) 교육 전문 플랫폼 + 클라우드 기술(서버가상화, PC)

## Developer
> 👩🏻‍💻 [kanhanhee](https://github.com/kanghanhee)
>
> 👩🏻‍💻 [hyeyoungSW](https://github.com/hyeyoungSW)
>
> 👩🏻‍💻 [hyejungg](https://github.com/hyejungg)
>
> 👨🏻‍💻 [bong8230](https://github.com/bong8230)
> 
> 👩🏻‍💻 [ahrimy](https://github.com/ahrimy)

## Installation

### 전체 실행
-  root 디렉토리에 `.env` 파일 생성 후 아래 내용 작성
```
PORT=서버 포트

DB_HOST=DB 호스트
DB_USER=DB 사용자
DB_PASSWORD=DB 비밀번호
DATABASE=DB 이름

TOKEN_SECRET=jwt토큰 key

ORIGIN_URL=클라이언트 URL

REACT_APP_API_URL=서버 API URL
REACT_APP_SERVER_URL=서버 URL
```
- client 디렉토리에서 `npm install`
- server 디렉토리에서 `npm install`
- root 디렉토리에서 `npm install`
- `npm start`

### 서버 실행
- server 디렉토리에 `.env` 파일 생성 후 아래 내용 작성

```
PORT=서버 포트

DB_HOST=DB 호스트
DB_USER=DB 사용자
DB_PASSWORD=DB 비밀번호
DATABASE=DB 이름

TOKEN_SECRET=jwt토큰 key

ORIGIN_URL=클라이언트 URL
```

- `npm install`
- `npm run dev`

---

### 클라이언트 실행

- client 디렉토리에서
- `.env` 파일 생성 후 아래 내용 작성

```
REACT_APP_API_URL=서버 API URL
REACT_APP_SERVER_URL=서버 URL
```

- `npm install`
- `npm start`

---

---

### [프론트 진행상황]

### USER 부분

```
- 회원가입 : OK / 구글, 네이버로 회원가입하기는 아직 X
- 로그인 : OK
- 아이디, 비밀번호 찾기 : OK
- 메인화면에서 로그인 시 유저 닉네임 보여주기 OK -> 해당 버튼 클릭시 로그아웃 OK.
  로그아웃은 됐으나 화면에서 새로고침 안하면 로그아웃된 것이 적용 안됨. 이 부분 수정 필요 //****
- 마이페이지
   1. 프로필 : 유저정보 + 강의에 대한 정보 모두 필요해서 lecture랑 room 완성 후에 다시 해야 함! //****
   2. 회원 정보 수정 : 유저 정보 데려오는거 성공 OK -> 화면에 유저 정보 보여주는거 해야 함! //****
   3. 회의 설정 : lecture랑 room 완성 후에 다시 해야 함 //****
   4. 문의사항 : X //****
- 향후에 시간 되면 -> 로그인을 해야 마이페이지, 수업 생성 등등이 들어가지도록 수정! or 로그인 안되어 있으면 로그인 화면으로 이동시키기 하기//****
```
