// http request using axios
import http from "../http-common";
import authHeader from "./auth-header";

//함수 이름은 변경 가능 return값은 변경X
class UserDataService{
    getAll(){
        return http.get("/users");
    }
            // //비밀번호 확인(개인 정보 변경 전에 확인?)
            // //입력값 {user_num, user_pw}
            // //일치하면 {success : true}
            // //아니면 {success : false}
            // checkPW(data){
            //     return http.post("/users/checkpw",data);
            // }
    getUserInfo(){
        return http.get("/users/user-info", {headers : authHeader()});
    }
    updateUser(){
        return http.put("/users/update", {headers : authHeader()});
    }
    updatePW(data){
        return http.patch("/users/updatepw",data);
    }
    getFindEmail(data){
      return http.post("/users/find-email",data);
    }
    checkInfo(data){
        return http.post("/users/check-user",data);
    }
    setNewPW(data){
        return http.patch("/users/new-password",data);
    }

}

export default new UserDataService();