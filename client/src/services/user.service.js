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
}

export default new UserDataService();