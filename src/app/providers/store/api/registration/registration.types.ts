export interface RegistrationApiProps {
  email: string;
  password: string;
}

export interface VerifyApiProps {
  email: string;
  verify_code: number;
}

export interface RegistrationApiResponse {
  user_id: string,
  email: string,
  role: string,
  is_verified: boolean,
  created_at: string,
  deleted_at: {
    time: string,
    valid: string,
  },
  first_name: string,
  last_name: string,
  phone: string,
}