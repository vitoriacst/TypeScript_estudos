import connection from "../../Express/models/connection";
import Restaurant from "../interfaces/restaurant.interface";
import RestaurantModel from "../models/restaurant.model";

class RestaurantService{
  public restaurantModel :RestaurantModel;
  constructor(model: RestaurantModel = new RestaurantModel(connection)){
    this.restaurantModel = model;
  }
  getAll = async (): Promise<Restaurant[]> => {
    return this.restaurantModel.getAll();
  }
}


export default RestaurantService;
