// http request using axios
import http from "../http-common";

//입력값 {lecture_title, lecture_capacity, init_private, init_mute_authority, init_chat_authority, init_save_authority, init_notification}
class LectureDataService{
    //create Lecture
    createLecture(data){
        return http.post("/lecture/create",data);
    }
}

export default new LectureDataService();