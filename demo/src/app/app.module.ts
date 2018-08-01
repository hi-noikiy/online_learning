import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeHandpickCourseComponent } from './home-handpick-course/home-handpick-course.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import { CourseBoxComponent } from './course-box/course-box.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseCatesTitleComponent } from './course-cates-title/course-cates-title.component';
import { Code404Component } from './code404/code404.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { UserinfoBannerComponent } from './userinfo-banner/userinfo-banner.component';
import { UserSideBoxComponent } from './user-side-box/user-side-box.component';
import { UserLearnedCoursesComponent } from './user-learned-courses/user-learned-courses.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserCenterFollowComponent } from './user-center-follow/user-center-follow.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CourseInfoboxComponent } from './course-infobox/course-infobox.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { CoursePathComponent } from './course-path/course-path.component';
import { CourseChapterComponent } from './course-chapter/course-chapter.component';
import { CommentComponent } from './comment/comment.component';
import { CourseTeacherComponent } from './course-teacher/course-teacher.component';
import {SignService} from './services/sign.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { PathsComponent } from './paths/paths.component';
import { PathBoxComponent } from './path-box/path-box.component';
import { PathContentComponent } from './path-content/path-content.component';
import { UserMessageComponent } from './user-message/user-message.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { UserVisitorComponent } from './user-visitor/user-visitor.component';
import { QuestionsComponent } from './questions/questions.component';
import { NavTabsBoxComponent } from './nav-tabs-box/nav-tabs-box.component';
import { QuestionsBoxComponent } from './questions-box/questions-box.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { DemoNumberPipe } from './pipe/demo-number.pipe';
import { QuillModule } from 'ngx-quill';
import { VideoBodyComponent } from './video-body/video-body.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSiderComponent } from './admin-sider/admin-sider.component';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import {CourseService} from './services/course.service';

const routeConfig: Routes = [
  // {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '', component: VideoBodyComponent},
  {path: 'main', component: MainComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'courses/:id', component: CourseContentComponent},
      {path: 'paths', component: PathsComponent},
      {path: 'paths/:path_name', component: PathContentComponent},
      {path: 'search', component: SearchComponent},
      {path: 'questions', component: QuestionsComponent}
    ]},
  {path: 'user/:id', component: UserComponent, children: [
      {path: '', component: UserCenterComponent, children: [
          {path: '', component: UserLearnedCoursesComponent},
          {path: 'follow', component: UserCenterFollowComponent},
        ]},
      {path: 'info', component: UserInfoComponent, children: [
          {path: '', component: UserProfileComponent},
          {path: 'account', component: UserAccountComponent}
        ]},
      {path: 'message', component: UserMessageComponent}
    ]},
  {path: 'login', component: SignInComponent},
  {path: 'register', component: SignUpComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: '**', component: Code404Component}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    HomeCarouselComponent,
    HomeHandpickCourseComponent,
    SignInComponent,
    SignUpComponent,
    MainComponent,
    CourseBoxComponent,
    CoursesComponent,
    CourseCatesTitleComponent,
    Code404Component,
    UserCenterComponent,
    UserinfoBannerComponent,
    UserSideBoxComponent,
    UserLearnedCoursesComponent,
    UserInfoComponent,
    UserComponent,
    UserProfileComponent,
    UserAccountComponent,
    UserCenterFollowComponent,
    PaginationComponent,
    CourseInfoboxComponent,
    CourseContentComponent,
    CoursePathComponent,
    CourseChapterComponent,
    CommentComponent,
    CourseTeacherComponent,
    SearchComponent,
    PathsComponent,
    PathBoxComponent,
    PathContentComponent,
    UserMessageComponent,
    MessageBoxComponent,
    UserVisitorComponent,
    QuestionsComponent,
    NavTabsBoxComponent,
    QuestionsBoxComponent,
    CommentBoxComponent,
    DemoNumberPipe,
    VideoBodyComponent,
    AdminLoginComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminSiderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    QuillModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [SignService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
