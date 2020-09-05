import React from "react";
import Mypage from "./views/base/mypage/MyPage";

//test용
import test from "./test/ShowWebRTC"
import Roomname from "./test/Roomname"
import Room from "./test/MeetScreen"

const Toaster = React.lazy(() =>
  import("./views/notifications/toaster/Toaster")
);
const Breadcrumbs = React.lazy(() =>
  import("./views/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("./views/base/cards/Cards"));

//meet(회의화면) 추가
const MeetCreate = React.lazy(() =>
  import("./views/base/meet_create/MeetCreate")
);
const MeetLink = React.lazy(() => import("./views/base/meet_link/MeetLink"));
const MeetScreen = React.lazy(() => import("./views/meet/MeetScreen"));
const MeetExit = React.lazy(() => import("./views/meet_exit/MeetExit"));
const MeetParticipate = React.lazy(() =>
  import("./views/meet/MeetParticipate")
);
//마이페이지
const MyPage = React.lazy(() => import("./views/base/mypage/MyPage"));
//클래스 개설

const CreateListLecture = React.lazy(() =>
  import("./views/base/create_list_lecture/CreateListLecture")
);
const CreateListRoom = React.lazy(() =>
  import("./views/base/create_list_room/ListRoom")
);
const EnrollmentListLecture = React.lazy(() =>
  import("./views/base/enrollment_list_lecture/EnrollmentListLecture")
);
const ParticipateListRoom = React.lazy(() =>
  import("./views/base/participate_list_room/ListRoom")
);

const TestListRoom = React.lazy(() =>
  import("./views/base/Test_list_room/TestListRoom")
);

//출석부 추가
const Rollbook = React.lazy(() => import("./views/base/Rollbook/Rollbook"));

//froms(문의사항) 추가
const Questions = React.lazy(() => import("./views/forms/Questions"));

// //아이디/비밀번호 찾기 추가
const SearchIDPW = React.lazy(() =>
  import("./views/pages/search_idPw/SearchIDPW")
);

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));
const Typography = React.lazy(() =>
  import("./views/theme/typography/Typography")
);
const Widgets = React.lazy(() => import("./views/widgets/Widgets"));
const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));

const routes = [
  //test용
  {
    path: "/room",
    name: "createRoom",
    exact: true,
    component: Roomname,
  },
  { path: "/room/:roomID", name: "Room", component: Room },
  { path: "/test1", name: "test1", component: test1 },
  //
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/theme", name: "Theme", component: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", component: Colors },
  { path: "/theme/typography", name: "Typography", component: Typography },
  { path: "/base", name: "Base", component: Cards, exact: true },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/base/cards", name: "Cards", component: Cards },
  { path: "/base/mypage", name: "Mypage", component: Mypage }, //***
  { path: "/base/Rollbook", name: "Rollbook", component: Rollbook }, //***
  // { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: "/base/meet_create", name: "MeetCreate", component: MeetCreate }, //***
  // { path: '/base/meet_participate', name: 'MeetParticipate', component: MeetParticipate }, //***
  { path: "/base/meet_link", name: "MeetLink", component: MeetLink }, //***

  {
    path: "/base/create_list_lecture",
    name: "CreateListLecture",
    component: CreateListLecture,
  }, //***
  {
    path: "/base/create_list_room",
    name: "CreateListRoom",
    component: CreateListRoom,
  }, //***
  {
    path: "/base/participate_list_room",
    name: "ParticipateListRoom",
    component: ParticipateListRoom,
  }, //***
  {
    path: "/base/enrollment_list_lecture",
    name: "EnrollmentListLecture",
    component: EnrollmentListLecture,
  }, //***
  { path: "/forms/Questions", name: "Questions", component: Questions }, //***
  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
  },

  {
    path: "/base/Test_list_room",
    name: "TestListRoom",
    component: TestListRoom,
  },

  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/notifications/toaster", name: "Toaster", component: Toaster },
  { path: "/widgets", name: "Widgets", component: Widgets },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
  { path: "/meet/MeetScreen", name: "MeetScreen", component: MeetScreen }, //***
  { path: "/meet_exit/MeetExit", name: "MeetExit", component: MeetExit }, //***
  {
    path: "/meet/MeetParticipate",
    name: "MeetParticipate",
    component: MeetParticipate,
  }, //***
  { path: "/pages/search_idPW", name: "searchIDPW", component: SearchIDPW }, //***
];

export default routes;
