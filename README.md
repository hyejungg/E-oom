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

