import Person from "./person";

export default class student extends Person{
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = []
  constructor(name:string , birthDate: Date){
    super(name , birthDate);
    // this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string{
    return this._enrollment;
  }

  get examsGrades(): number[]{
    return this._examsGrades;
  }

  get worksGrades(): number[]{
    return this._worksGrades;
  }

  set enrollment(value: string){
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    this._enrollment = value
  }
  set examsGrades(value: number[]){
    if(value.length > 3) throw new Error(' A pessoa estudante deve possuir no máximo 4 notas de provas')
    this._examsGrades = value
  }
  set workGrades(value: number[]){
    if(value.length > 1) throw new Error(' pessoa estudante deve possuir no máximo 2 notas de trabalhos')
    this._worksGrades = value

  }
}
