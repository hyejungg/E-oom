// http request using axios
import http from "../http-common";
import authHeader from "./auth-header";

class RoomsDataService{
    createRoom(data){
        return http.post("/rooms", data);
    }
    getRoomsInfo(lecture_num){
        return http.get("/rooms/"+lecture_num);
    }
    joinRoom(data){
        return http.post("/rooms/join",{headers : authHeader()}, data);
    }
    leaverRoom(data){
        return http.post("/rooms/leave",{headers : authHeader()}, data);
    }
}

export default new RoomsDataService();