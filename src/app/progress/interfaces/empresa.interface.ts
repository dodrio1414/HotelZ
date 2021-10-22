// export interface SeguimientoUser{
//   room: string,
//   totalPrice: number,
//   totalRestaurant: number,
//   userName: string,
//   seguimiento: [
//     dateR: string,
//     priceR: number,
//     discountR: number,
//     detailR: string,
    
//   ],
// }


export interface SeguimientoRefresh{
  dateR: string,
  priceR: number,
  discountR: number,
  detailR: string,
}

// export interface SeguimientoUser{
//   room: string,
//   totalPrice: number,
//   totalRestaurant: number,
//   userName: string,
// }

export interface SeguimientoUser{
  room: string,
  totalPrice: number,
  totalRestaurant: number,
  userName: string,
  seguimiento: SeguimientoRefresh[]
}