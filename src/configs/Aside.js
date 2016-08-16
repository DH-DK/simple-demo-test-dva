
const _menu = [
  {
  "title": "业务管理",
  "icon": "user",
      "subItems": [
        {
        "icon": "user",
        "title": "产品服务设置",
        "hasThird":true,
            "thirdItems": [
              {
                "title": "23",
                "a_path": "/#/＃"
              }
             ]
        },
        {
        "icon": "user",
        "title": "商圈管理",
        "hasThird":true,
        "thirdItems": [
          {
            "title": "三级菜单",
            "a_path": "/#/＃"
          }
         ]
        },
        {
        "icon": "user",
        "title": "人员管理",
        "hasThird":true,
        "thirdItems": [
          {
            "title": "员工列表",
            "a_path": "/#/sub_business/employee_list"
          },
          {
            "title": "骑士列表",
            "a_path": "/#/sub_business/knight_list"
          },
          {
            "title": "骑士审核",
            "a_path": "/#/sub_business/knight_check"
          },
          {
            "title": "骑士审核日志",
            "a_path": "/#/sub_business/knight_check_log"
          },

         ]
        },
        {
        "icon": "user",
        "title": "商家管理",
        "hasThird":true,
        "thirdItems": [
          {
            "title": "三级菜单",
            "a_path": "/#/＃"
          }
         ]
        }
    ]
  },

  {
    "title": "账号管理",
    "icon": "user",
    "subItems": [
      {
      "title": "商户资料",
      "a_path": "/#/sub_account/merchants_info",
      "hasThird":false,
     },
     {
      "title": "商圈管理",
      "a_path": "/#/sub_account/merchants_info_submission",
      "hasThird":false,
      },
      {
      "title": "我的账号",
      "a_path": "/#/sub_account/my_Account",
      "hasThird":false,
      }
    ]
  }
];

export default _menu;
