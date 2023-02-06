import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }
  headerMenus: any = [];
  ngOnInit() {
    this.headerMenus = [
      { name: '主页', path: '/workingRange/storeHome', active: false },
      { name: '小车车', path: '/workingRange/shoppingCart', active: false },
    ];
  }
  menuClick(i: any) {
    this.headerMenus.forEach((el: { active: boolean; }, index: any) => {
      el.active = false;
      el.active = index === i;
    });
  }
}
