import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from '../core/user.service';
import { AuthService } from './auth.service';//add


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public afAuth: AngularFireAuth,
    public authService: AuthService,//add
    public userService: UserService,
    private router: Router
  ) {
    this.authService;//add
  }

  canActivate(): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(user => {
        this.router.navigate(['/home']);
        return resolve(false);
      }, err => {
        return resolve(true);
      })
    })
  }
}