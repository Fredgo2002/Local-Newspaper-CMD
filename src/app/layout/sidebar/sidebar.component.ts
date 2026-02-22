import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  url: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {

  menuItems: MenuItem[] = [
    { label: 'Dashboard', url: '/dashboard' },
    { label: 'User Management', url: '/user-management' },
    { label: 'Documents', url: '/documents' },
    { label: 'Statistics', url: '/statistics' },
    { label: 'Settings', url: '/settings' },
  ];//These menu items are just for organizational purposes, they are not used in the system.

}
