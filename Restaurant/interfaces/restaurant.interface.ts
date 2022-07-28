// `id` int NOT NULL AUTO_INCREMENT,
// `name` varchar(100) NOT NULL,
// `category` varchar(45) NOT NULL,
// `openingTime` time NOT NULL,
// `closingTime` time NOT NULL,

interface Restaurant {
  id?: number,
  name: string,
  category: string,
  openingTime: Date,
  closingTime: Date,
}

export default Restaurant;
