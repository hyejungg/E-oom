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

    deleteLecture(lecture_num){
        return http.delete("/lecture" + lecture_num);
    }

    updateLectureInfo(lecture_num){
        return http.put("/lecture" + lecture_num);
    }
}

export default new LectureDataService();