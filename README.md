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

## 서비스 구성도
![image](https://user-images.githubusercontent.com/68772751/125260536-627f0800-e33b-11eb-9e55-192978ae3a23.png)

## 주요 기능
**1. 강의 생성 및 신청**

화면 | 설명 |
---|:---:|
![image](https://user-images.githubusercontent.com/68772751/125261849-9e669d00-e33c-11eb-99b6-e48ab6039b7a.png) ![image](https://user-images.githubusercontent.com/68772751/125261894-a8889b80-e33c-11eb-9c7a-7af082d30fc4.png) | 화상 수업에 아무나 참여할 수 없도록, 강의를 생성하고 그 강의에 참여하고 싶은 학생들은 강의를 신청하고, 강의자는 신청한 학생들을 관리한다.

**2. 룸 진행(영상 수업)**

화면 | 설명 |
---|:---:|
![image](https://user-images.githubusercontent.com/68772751/125262081-d4a41c80-e33c-11eb-8624-5538fae393d2.png) ![image](https://user-images.githubusercontent.com/68772751/125262088-d7067680-e33c-11eb-910f-2229494169a8.png) | 강의를 진행하는 강의자(호스트)와 강의를 수강하는 학생들(참여자)들이 실시간 화상채팅으로 수업을 진행한다.

**3. 출석 관리**

화면 | 설명 |
---|:---:|
![image](https://user-images.githubusercontent.com/68772751/125262156-e84f8300-e33c-11eb-9042-b3837b3bacce.png) ![image](https://user-images.githubusercontent.com/68772751/125262169-eb4a7380-e33c-11eb-8655-17f28fb0a4e0.png) | 강의를 시작하고, 종료할때 강의자는 출석확인 버튼으로 자동으로 출석체크를 할 수 있고 이후에 강의를 수강하는 학생들에 대해 출석 여부를 확인 할 수 있다.

**4. 서버 가상화**

화면 | 설명 |
---|:---:|
![image](https://user-images.githubusercontent.com/68772751/125262235-f9988f80-e33c-11eb-8d4b-5e851a991374.png) | 클라우드 서버를 활용하여 접속과 수업 진행 시 안정성을 높인다.


## 주요 적용 기술
1) Web RTC : 영상 송수신을 위한 네트워크 기술
	- 1:多 실시간 화상 채팅을 구현하기 위해서 WebRTC 기술을 사용
    
2) JWT : 사용자 인증정보 보안을 위한 기술
	- 사용자 로그인 시에 JWT 기술을 사용하여 사용자의 인증 정보를 토큰화하여 저장
    
3) Sequelize : Nodejs에서 MySQL을 쉽게 다룰 수 있도록 도와주는 ORM 기술
	- 자바스크립트 객체와 데이터 베이스의 관계를 매핑해주는 기술로  DB사용을 편리하게 제공
    
4) MS Azure : 클라우드 서비스
	- MySQL MS Azure 사용으로 클라우드에서 DB 관리를 관리하였다.
	- 웹 어플리케이션도 클라우드 서버에 배포 예정

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
