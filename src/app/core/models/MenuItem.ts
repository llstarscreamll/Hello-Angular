export class MenuItem {
  label: string;
  url: string;
  icon: string;
  childs?: MenuItem[];
  isHeader: boolean;
  visivility: string;
  permissions: string[]; // permissions that says if the menu item should be displayed
}
