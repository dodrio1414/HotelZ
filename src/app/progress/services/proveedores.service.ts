import { Injectable } from "@angular/core";
import { SeguimientoUser } from "../interfaces/empresa.interface";



// clase de tipo singleTon solo se instancia una vez
@Injectable()
export class ProgressService{

    _usuario: SeguimientoUser[] = [
      {
        room: "103",
        totalPrice: 1500,
        totalRestaurant: 20,
        userName: "Rodrigo Aguirre",
        seguimiento: [
          {
            dateR: "2021/12/10",
            priceR: 55,
            discountR: 0,
            detailR: "Almuerzo: arroz con huevito",
          },
          {
            dateR: "2021/12/11",
            priceR: 50,
            discountR: 0,
            detailR: "Almuerzo: papa con huevito",
          },
          {
            dateR: "2021/12/11",
            priceR: 50,
            discountR: 0,
            detailR: "Almuerzo: arroz con huevito",
          },
          {
            dateR: "2021/12/11",
            priceR: 50,
            discountR: 0,
            detailR: "Almuerzo: arroz con huevito",
          },
        ]
      }
      
    ]


      // FollowUpData: SeguimientoUser = {
  //   room: "103",
  //   totalPrice: 1500,
  //   totalRestaurant: 20,
  //   userName: "Rodrigo Aguirre",
  //   seguimiento: [
  //     "10/10/2021",
  //     20,
  //     0,
  //     "Almuerzo en el restaurante",
  //   ]
  // }


      // _usuario: SeguimientoUser={
        
      //     room: "103",
      //     totalPrice: 1500,
      //     totalRestaurant: 20,
      //     userName: "Rodrigo Aguirre",
      //     seguimiento: [
      //         "2021/12/10",
      //         55,
      //         0,
      //         "Almuerzo: arroz con huevito",  
      //     ] 
      // }


      get usuarios(): SeguimientoUser[]{
        return this._usuario;
        console.table(this.usuarios)
      }

      

      // get usuarios(): SeguimientoUser{
      //   return this._usuario;
      // }
}