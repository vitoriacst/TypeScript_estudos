import express from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express()

app.use(express.json())

app.get('/',(req: Request,res: Response) => {
  res.status(StatusCodes.OK).send('Its alive')
});

app.listen(3000,()=> console.log('its alive'));
