export interface IFMenuBase {
  key: string;
  title: string;
  icon?: string;
  component?: string;
  query?: string;
}

export interface IFMenu extends IFMenuBase {
  subs?: IFMenu[];
}

const menus: { menus: IFMenu[] } = {
  menus: [
    { key: "/", title: "首页", component: "Homepage" },
    { key: "/diary", title: "日记", component: "Diary" },
    // { key: "/funny", title: "吃喝玩乐", component: "Funny" },
  ],
};
export default menus;
