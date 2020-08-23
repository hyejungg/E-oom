// http request using axios
import http from "../http-common";

//입력값 {lecture_title, lecture_capacity, init_private, init_mute_authority, init_chat_authority, init_save_authority, init_notification}
class LectureDataService{
    //create Lecture
    createLecture(data){
        return http.post("/lecture",data);
    }

    readLectures(data){
        return http.get("/lecture");
    }

    //searchLecture(data){
    //    return http.get("/lecture/"+ data);
    //}
    deleteAllLectures(data){
        return http.delete("/lecture");
    }
}

export default new LectureDataService();