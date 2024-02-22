// export interface CatalogApiProps {
//   email: string;
//   password: string;
// }

// export interface VerifyApiProps {
//   email: string;
//   verify_code: number;
// }

export interface CatalogApiResponse {
  car_id: string,
  brand: string,
  car_model: string,
  photos: [],
  specifications: {
    specification_id: number,
    icon: string,
    name: string,
    value: number,
  },
  payment_method: string,
  owner_id: string,
  rentals: {
    rental_id: number,
    user_id: string,
    is_active: boolean,
    from_date: string,
    to_date: string,
  },
  created_at: string,
  updated_at: string,
  deleted_at: string
}