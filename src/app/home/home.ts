import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Menu } from '../Menu/menu';
import { MenuItem } from '../Menu/menu-item';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatCard, MatCardContent } from '@angular/material/card';
import jwtDecode from 'jwt-decode';
interface JwtPayload {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  Exp?: number;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RouterModule,
    MatTab,
    MatTabGroup,
    MatCardContent,
    MatCard,MatExpansionModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatListModule,
  MatIconModule,
  MatExpansionModule,
  RouterModule
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnDestroy,OnInit {
  name :string ='';
  email:string='';
  phone:string='';
  // isMobile = false;
  // private destroyed$ = new Subject<void>();

  // constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
  //   this.breakpointObserver
  //     .observe([Breakpoints.Handset])
  //     .pipe(takeUntil(this.destroyed$))
  //     .subscribe(result => {
  //       this.isMobile = result.matches;
  //     });
  // }



isParentActive(menu: MenuItem): boolean {
  return menu.children.some(
    child =>
      this.router.isActive(child.route ?? '', false) ||
      this.isParentActive(child)
  );
}

  // ngOnDestroy(): void {
  //   this.destroyed$.next();
  //   this.destroyed$.complete();
  // }

  redirectPage() {
    this.router.navigate(['/home/product']);
  }

  logOut() {
    const user = localStorage.getItem('user');
    if (user != null) {
      var updatedUser = JSON.parse(user);
      updatedUser.isLogedIn = false;
      localStorage.setItem('user',JSON.stringify(updatedUser));
      this.router.navigate(['auth']);
    }
    else this.router.navigate(['auth']);
  }


  menus: MenuItem[] = [];
  isMobile = false;
  private destroyed$ = new Subject<void>();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private menuService: Menu,
    private router: Router
  ) {}

  ngOnInit() {
    //this.menus = this.menuService.getMenus();
       this.menuService.initmenus().subscribe(res => {
  this.menus = res
    .sort((a: { orderNumber: number; }, b: { orderNumber: number; }) => a.orderNumber - b.orderNumber)
    .map((parent: { children: any[]; }) => ({
      ...parent,
      children: parent.children.sort(
        (a, b) => a.orderNumber - b.orderNumber
      )
    }));
});

    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(takeUntil(this.destroyed$))
      .subscribe(r => (this.isMobile = r.matches));

      //get data from localstorage
      const token = localStorage.getItem('jwt');

      if (token) {
        const decodedToken = jwtDecode<JwtPayload>(token);

        this.name = `${decodedToken.FirstName} ${decodedToken.LastName}`;
        this.email = decodedToken.Email;
        this.phone = decodedToken.Phone;
      }
  }

  isChildActive(menu: any): boolean {
  return menu.children?.some(
    (child: any) => this.router.url.startsWith(child.route)
  );
}
  navigate(route?: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
