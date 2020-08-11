// http request using axios
import http from "../http-common";

class UserDataService{
    create(data){
        return http.post("/users/signup",data);
    }
    getAll(){
        return http.get("/users");
    }
    getPW(user_email){
        return http.get("/users/signin/"+user_email);
    }
    getEmail(user_email){
        return http.get("/users/email/"+user_email);
    }
    //search Email
    getFindEmail(user_fname, user_lname, user_birthdate, user_phone){
      //user의 email을 return 받도록

    }
    //search PW
    getFindPw(user_email, user_phone){
       //user의 pw를 return 받도록 ? 랜덤 값 return -> 그걸로 우선 로그인 하고 수정?

    }
}

export default new UserDataService();