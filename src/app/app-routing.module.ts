import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'frame2',
    loadChildren: () => import('./frame2/frame2.module').then( m => m.Frame2PageModule)
  },
  {
    path: 'frame3',
    loadChildren: () => import('./frame3/frame3.module').then( m => m.Frame3PageModule)
  },
  {
    path: 'frame4',
    loadChildren: () => import('./frame4/frame4.module').then( m => m.Frame4PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
