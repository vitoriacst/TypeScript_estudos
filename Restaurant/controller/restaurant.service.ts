import { Request, Response } from 'express';


import RestaurantService from '../services/restaurant.service';

class RestaurantController {
  public service: RestaurantService;

  constructor(service: RestaurantService = new RestaurantService()) {
    this.service= service;
  }

  public async getAll (req: Request, res: Response): Promise<Response> {
    const restaurants = await this.service.getAll();
    return res.status(200).json(restaurants);
  }
}

export default RestaurantController;
