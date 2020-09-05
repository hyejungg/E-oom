export default [
  {
    _tag: "CSidebarNavItem",
    name: "E-oom", //"dashboard"
    to: "/dashboard",
    icon: "cil-bell",
    badge: {
      color: "info",
      text: "Main",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Join/Login"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "회원가입",
    to: "/register",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "로그인",
    to: "/login",
    icon: "cil-cursor",
  },
  {
    _tag: "CSidebarNavItem",
    name: "마이페이지",
    to: "/base/mypage",
    icon: "cil-star",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["E-oom 교육"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "수업 생성하기",
    route: "/base",
    icon: "cil-speech",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "수업 생성",
        to: "/base/create_list_lecture",
      },
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "강의 생성",
      //   to: "/base/carousels",
      // },
      {
        _tag: "CSidebarNavItem",
        name: "출석부",
        to: "/base/Rollbook",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "수업 참여하기",
    to: "/base/participate_list_lecture",
    icon: "cil-puzzle",
  },
  {
    _tag: "CSidebarNavItem",
    name: "문의사항",
    to: "/forms/Questions",
    icon: "cil-calculator",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Room Test",
    to: "/base/Test_list_room",
    icon: "cil-puzzle",
  },
];
