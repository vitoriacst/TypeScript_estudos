export default interface Ave{
  penas:boolean,
  bico:boolean,
  dente:boolean,
  ovipara:boolean,
}

// sem reaproveitar
interface AveTerrestre {
  penas:boolean,
  bico:boolean,
  dente:boolean,
  ovipara:boolean,
  velocidadeCorrida:number,
}

// reaproveitando

interface AveTerrestre extends Ave{
  velocidade: number
}
