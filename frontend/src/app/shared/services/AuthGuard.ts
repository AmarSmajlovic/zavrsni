import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UserService } from './User.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private userService: UserService,private router:Router) { }

    canActivate() {
        if(this.userService.loggedUser.role !== 'ADMIN'){
            this.router.navigateByUrl('home')
             return false;
        }
        return true;
    }
}