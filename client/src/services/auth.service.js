import http from "../http-common";

class AuthService{

    getLogin(data){
        return http.post("/auth/signin",data)
        .then (response=>{
            console.log(response.data);
            if(response.data.accessToken){
                sessionStorage.setItem("user",JSON.stringify(response.data));
            }
            return response.data;
        });
    }
    getSignUp(data){
        return http.post("/auth/signup",data);
    }
    getCheckId(user_email){
        return http.get("/auth/checkid/"+user_email);
    }
    getCheckNick(user_nickname){
       return http.get("/auth/checknickname/"+user_nickname);
    }
    logout(){
        sessionStorage.removeItem("user");
    }
    getCurrentUser(){
        return JSON.parse(sessionStorage.getItem('user'));
    }

}

export default new AuthService();