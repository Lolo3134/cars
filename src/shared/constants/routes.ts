export enum Routes {
  Home = '/',
  Registration = 'registration',
  Auth = 'auth',
  ResetPassword = 'reset-password',
  Profile = 'profile',
  Catalog = 'catalog',
}

export const routes = {
  // Аутентификация
  home: Routes.Home,
  registration: '/' + Routes.Registration,
  auth: '/' + Routes.Auth,

  // Каталог
  catalog: '/' + Routes.Catalog,

  // Профиль
  profile: '/' + Routes.Profile,
  resetPassword: '/' + Routes.ResetPassword,
};