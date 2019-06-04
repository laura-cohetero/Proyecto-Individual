import { Component, NgModule } from '@angular/core';
import { AuthService} from './core/auth.service';
import { Router } from '@angular/router';
import { MessagingService } from './core/messaging.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})


export class AppComponent {
  title = 'angular6-firebase-crud';
  message;
constructor(
  public authService: AuthService,
  private router: Router,
  private messagingService: MessagingService
  
){
  this.authService.isLoggedIn();
}


ngOnInit() {
  const userId = 'user001';
  this.messagingService.requestPermission(userId)
  this.messagingService.receiveMessage()
  this.message = this.messagingService.currentMessage
}


logout(){
  this.authService.doLogout()
  .then((res) => {
    this.router.navigate(['/login']);
  }, (error) => {
    console.log("Logout error", error);
  });
}



}