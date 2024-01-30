export interface RegistrationApiProps {
  email: string;
  password: string;
}

export interface RegistrationApiResponse {
  user_id: string,
  email: string,
  role: string,
  is_verified: boolean,
  created_at: string,
  deleted_at: null,
}