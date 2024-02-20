export enum Routes {
  Home = '/',
  Auth = 'auth',
  ResetPassword = 'reset-password',
  Profile = 'profile',
  Catalog = 'catalog',
  CarPage = 'cars/:car_id'
}

export const routes = {
  // Аутентификация
  home: Routes.Home,
  auth: '/' + Routes.Auth,

  // Каталог
  catalog: '/' + Routes.Catalog,

  // Страница машины
  carPage: '/' + Routes.CarPage,

  // Профиль
  profile: '/' + Routes.Profile,
  resetPassword: '/' + Routes.ResetPassword,
};