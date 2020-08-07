import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/tutorials");
  }


  create(data) {
    return http.post("/tutorials", data);
  }

  check(title){
    console.log("tutorial.service :" +title);
    return http.get(`/tutorials/${title}`);
  }
}

export default new TutorialDataService();