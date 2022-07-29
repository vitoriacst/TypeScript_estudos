import { Pool } from 'mysql2/promise';
import Restaurant from "../interfaces/restaurant.interface";


class RestaurantModel {
  public connection: Pool;

  // criando o constructor
  public constructor(connection: Pool) {
    this.connection = connection;
  }

  // propriedade x método
  // generic para tratar o retorno da lib mysql2
  // query para listar todos os restaurantes
  getAll = async (): Promise<Restaurant[]> => {
    const sql = 'SELECT * FROM Restaurants';
    const [rows] = await this.connection.query(sql);
    return rows as Restaurant[];
  }
};

export default RestaurantModel;
