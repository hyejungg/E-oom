// http request using axios
import http from "../http-common";
import authHeader from "./auth-header";

class RoomsDataService{
    createRoom(data){
        return http.post("/rooms", data);
    }
    getRoomsInfo(data){
        return http.get("/rooms/"+data,{headers : authHeader()});
    }
    joinRoom(data){
        return http.post("/rooms/join", data, {headers : authHeader()});
    }
    leaverRoom(data){
        return http.post("/rooms/leave", data, {headers : authHeader()});
    }
}

export default new RoomsDataService();