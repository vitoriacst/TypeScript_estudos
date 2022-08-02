class students{
  private _name: string;
  private _enrollment: string;
  private _exams:number[]
  private _examNotes:number[]
  constructor(name:string ,enrollment:string , exams:number , examNotes:number){
    this._examNotes=[];
    this._exams=[];
    this._name=name;
    this._enrollment=enrollment
  }
  // agora vamos entender
  set enrollment(value: string) {
    this._enrollment = value;
  }
  get enrollment():string {
    return this._enrollment
  }

  get name():string{
    return this._name
  }
  set name(value:string){
    if(value.length<3){
      throw new Error('Insira um nome valido')
    }
  }
  get exams() :number[]{
    return this._exams
  }
  set exams(values:number[]){
    this._exams = values
  }
}
