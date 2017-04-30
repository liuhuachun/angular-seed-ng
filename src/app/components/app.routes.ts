// app

export const routes: Array<any> = [
  { path: '', loadChildren: 'app/components/pages/main/main.module#MainModule' },
  { path: 'login', loadChildren: 'app/components/pages/login/login.module#LoginModule' }
];
