import connection from "./connection";

import Restaurant from "../interfaces/restaurant.interface";
import { RowDataPacket } from "mysql2";

class RestaurantModel {
  public RestaurantModel() {}

  // propriedade x método
  // generic para tratar o retorno da lib mysql2
  getAll = async (): Promise<Restaurant[]> => {
    const sql = 'SELECT * FROM restaurants';
    const [result] = await connection.query(sql);
    return result as Restaurant[];
  }
};

const restaurantModel = new RestaurantModel(); 
