# E-oom

### 서버 실행 방법
- server/sql/EoomDB.sql 파일 내용 복사해서 DB생성

------

- server/app 디렉토리에 config 폴더 추가
- server/app/config 디렉토리에 db.config.js 파일 추가

```
module.exports = {
    HOST: "localhost",
    USER: "본인 mysql 계정 username",
    PASSWORD: "본인 mysql 계정 password",
    DB: "eoomdb"
  };
```

- db.config.js 파일에 위의 코드 추가

------
- server 디렉토리에서 
- `npm install`
- `node server.js` 
