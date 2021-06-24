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
