// http request using axios
import http from "../http-common";

//함수 이름은 변경 가능 return값은 변경X
class UserDataService{
    //signup
    //회원가입
    //입력값 {user_fname, user_lname, user_nickname,user_email, user_pw, user_birthdate, user_phone}
    //정상동작시 가입된 user정보있는 json반환
    getSignUp(data){
        return http.post("/users/signup",data);
    }
    //회원가입 이전 이메일 중복 체크
    //입력값 user_email
    //존재하는 이메일이면 user_num정보 있는 json반환
    //없으면 아무것도 반환 X
    getCheckId(user_email){
         return http.get("/users/checkid/"+user_email);
    }
    getCheckNick(user_nickname){
        return http.get("/users/checknickname/"+user_nickname);
    }
    //로그인
    //입력값 { user_email, user_pw }
    //정상 동작시 user정보 있는 json반환
    //이메일 존재하지 않으면 "user_email wrong"
    //비밀번호 틀리면 "user_pw wrong"
    getLogin(data){
        return http.post("/users/signin",data);
    }

    //전체 유저
    //입력값 없음
    //전체 유저정보를 각각 json형식으로 갖고있는 배열 반환
    getAll(){
        return http.get("/users");
    }
    //비밀번호 확인(개인 정보 변경 전에 확인?)
    //입력값 {user_num, user_pw}
    //일치하면 {success : true}
    //아니면 {success : false}
    checkPW(data){
        return http.post("/users/checkpw",data);
    }
    //유저 정보 불러오기
    //입력값 user_num
    //유저 정보 반환{"user_email","user_fname","user_lname","user_nickname","user_birthdate","user_phone"}
    //user_num존재하지 않으면 아무것도 반환 x
    getUserInfo(user_num){
        return http.get("/users/userinfo"+user_num);
    }
    //유저 정보 업데이트(user_email은 변경 불가)
    //입력값 { user_num , user_fname, user_lname,user_nickname, user_birthdate, user_phone }
    //정상 처리 [user_num]
    //user_num잘못된 경우 [0]
    updateUser(data){
        return http.put("/users/update",data);
    }
    //유저 PW 업데이트
    //{user_num, cur_user_pw,new_user_pw}
    //정상 처리 [user_num]
    //잘못된 경우 "user_pw wrong"
    updatePW(data){
        return http.put("/users/updatepw",data);
    }
    //search Email
    //이메일 찾기
    //입력값 {user_fname,user_lname,user_phone,user_birthdate}
    //존재하면 user_email정보 있는 json반환
    //없으면 아무것도 반환 X
    getFindEmail(data){
      //user의 email을 return 받도록
      return http.post("/users/findid",data);
    }
    //search PW
    //비밀번호 찾기 1
    //입력값 {user_email, user_phone}
    //유저 존재하면 랜덤 비밀번호 생성 후 반환
    //유저 존재하지 않으면 "not exist user"
    getFindPw(data){
        return http.post("/users/findpw",data);
    }
    //비밀번호 찾기 2
    //입력값 {user_email, user_phone}
    //유저 존재하면 {user_num}
    //존재하지 않으면 반환값 X
    checkInfo(data){
        return http.post("/users/check",data);
    }
    //입력값 { user_num , user_pw}
    //정상 처리 [user_num]
    //user_num잘못된 경우 [0]
    setNewPW(data){
        return http.put("/users/newpw",data);
    }

}

export default new UserDataService();