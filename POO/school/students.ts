class students{
  private _name: string;
  private _registration: string;
  private _exams:number[]
  private _examNotes:number[]
  constructor(name:string ,registration:string , exams:number , examNotes:number){
    this._examNotes=[];
    this._exams=[];
    this._name=name;
    this._registration=registration
  }
}
