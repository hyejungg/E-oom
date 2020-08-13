// http request using axios
import http from "../http-common";

class UserDataService{
    getAll(){
        return http.get("/users");
    }
    getPW(user_email){
        return http.get("/users/signin/"+user_email);
    }
    getEmail(user_email){
        return http.get("/users/email/"+user_email);
    }
    getLogin(data){
        return http.post("/users/signin",data);
    }
    getSignUp(data){
        return http.post("/users/signup",data);
    }
    //signup
    getCheckId(user_email){
        return http.get("/users/checkid/"+user_email);
    }
    //search Email
    getFindEmail(data){
      //user의 email을 return 받도록

    }
    //search PW
    getFindPw(user_email, user_phone){
       //user의 pw를 return 받도록 ? 랜덤 값 return -> 그걸로 우선 로그인 하고 수정?

    }
}

export default new UserDataService();