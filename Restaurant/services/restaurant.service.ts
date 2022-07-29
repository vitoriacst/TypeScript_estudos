import restaurantModel from "../models/restaurant.model";
import Restaurant from "../interfaces/restaurant.interface";

class RestaurantService {
  restaurantModel: restaurantModel
  RestaurantService () {
    this.restaurantModel = new restaurantModel()
  }
}
