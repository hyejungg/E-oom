// http request using axios
import http from "../http-common";

class EnrollmentDataService{
    //create Lecture
    createEnrollment(data){
        return http.post("/enrollment",data);
    }

    readEnrollment(data){
        return http.get("/enrollment");
    }

    deleteEnrollment(data){
        return http.delete("/enrollment", data);
    }
}

export default new EnrollmentDataService();