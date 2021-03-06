import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './apps/todo-list/todo/todo.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import { TodoListComponent } from './apps/todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './user-pages/login/login.component';
import { RegisterComponent } from './user-pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserListComponent } from './admin-pages/user-list/user-list.component';
import { MatIconModule } from '@angular/material/icon';
import { AuthorListComponent } from './shared/author-list/author-list.component';
import { BookListComponent } from './shared/book-list/book-list.component';
import { BookAddComponent } from './admin-pages/book/book-add/book-add.component';
import { MatMenuModule } from '@angular/material/menu';
import { AuthorAddComponent } from './admin-pages/author/author-add/author-add.component';
import { LibraryAddComponent } from './user-pages/library-add/library-add.component';
import { LibraryListComponent } from './user-pages/library-list/library-list.component';
import { UserLibraryViewComponent } from './user-pages/user-library-view/user-library-view.component';
import { SummaryAddComponent } from './shared/summary/summary-add/summary-add.component';
import { SummaryListComponent } from './shared/summary/summary-list/summary-list.component';
import { SummaryViewComponent } from './shared/summary/summary-view/summary-view.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SummaryUpdateComponent } from './shared/summary/summary-update/summary-update.component';
import { CommentAddComponent } from './shared/comment/comment-add/comment-add.component';
import { CommentViewComponent } from './shared/comment/comment-view/comment-view.component';
import { CommentUpdateComponent } from './shared/comment/comment-update/comment-update.component';
import { CommentListComponent } from './user-pages/comment-list/comment-list.component';
import { ForgotPasswordComponent } from './../app/user-pages/forgot-password/forgot-password.component';
import { AvatarModule } from 'ngx-avatar';
import { DeleteWindowComponent } from './delete-window/delete-window.component';
import { CommentListViewComponent } from './admin-pages/comment-list-view/comment-list-view.component';
import { ResetPasswordComponent } from '../app/user-pages/reset-password/reset-password.component';
import { NgSearchFilterModule } from 'ng-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    TodoListComponent,
    TodoComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    HomeComponent,
    MainComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    AuthorListComponent,
    BookListComponent,
    BookAddComponent,
    AuthorAddComponent,
    LibraryAddComponent,
    LibraryListComponent,
    UserLibraryViewComponent,
    SummaryAddComponent,
    SummaryListComponent,
    SummaryViewComponent,
    SummaryUpdateComponent,
    CommentAddComponent,
    CommentViewComponent,
    CommentUpdateComponent,
    CommentListComponent,
    ForgotPasswordComponent,
    DeleteWindowComponent,
    CommentListViewComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NgSearchFilterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    AvatarModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
