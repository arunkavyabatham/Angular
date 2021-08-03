import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{component:AddComponent, path:"add"},
{component:UpdateComponent, path:"update/:id"},
{component:ListComponent, path:"list"},
{component:LoginComponent, path:"login"},
{component:RegisterComponent, path:"register"},
{component: HomeComponent, path:"home"}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
