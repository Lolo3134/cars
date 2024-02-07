export enum Routes {
  Home = '/',
  Auth = 'auth',
  ResetPassword = 'reset-password',
  Profile = 'profile',
  Catalog = 'catalog',
}

export const routes = {
  // Аутентификация
  home: Routes.Home,
  auth: '/' + Routes.Auth,

  // Профиль
  profile: '/' + Routes.Profile,
  resetPassword: '/' + Routes.ResetPassword,
};