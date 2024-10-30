import { Routes } from '@angular/router';
import {SidebarComponent} from './presentations/components/layout/sidebar/sidebar.component';
import {DashboardComponent} from './presentations/page/dashboard/dashboard.component';
import {ListStudentComponent} from './presentations/page/student/list-student/list-student.component';
import {AddStudentComponent} from './presentations/page/student/add-student/add-student.component';
import {UpdateStudentComponent} from './presentations/page/student/update-student/update-student.component';
import {RepportComponent} from './presentations/page/repport/repport.component';
import {ListUserComponent} from './presentations/page/user/list-user/list-user.component';
import {AddUserComponent} from './presentations/page/user/add-user/add-user.component';
import {LoginComponent} from './presentations/components/layout/login/login.component';
import {AddTeacherComponent} from './presentations/page/teacher/add-teacher/add-teacher.component';
import {ListTeacherComponent} from './presentations/page/teacher/list-teacher/list-teacher.component';

export const routes: Routes = [
  {path: "login",component:LoginComponent},
  {path: "",redirectTo:"/login",pathMatch:"full"},
  {path:"sidebar", component:SidebarComponent, children: [
      {path: "home", component:DashboardComponent},
      { path : "dashboard" , component : DashboardComponent},
      { path : "list-student" , component : ListStudentComponent},
      { path : "add-student" , component : AddStudentComponent},
      { path : "update-student" , component : UpdateStudentComponent},
      { path : "repport" , component : RepportComponent},
      { path : "list-user" , component : ListUserComponent},
      { path : "add-user" , component : AddUserComponent},
      { path : "add-teacher" , component : AddTeacherComponent},
      { path : "list-teacher" , component : ListTeacherComponent},
]},
  { path : "" , redirectTo : "/login", pathMatch:"full"}
    ];
