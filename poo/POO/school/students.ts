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

  get examNotes() :number[]{
    return this._examNotes
  }
  set examNotes(values:number[]){
    if(values.length > 4){
      throw new Error('A pessoa deve ter 4 notas')
    }
  }
  somaNotas():number{
    return [...this.examNotes,...this._examNotes].reduce((previousNote , note)=>{
      const nextNote = note + previousNote;
      return nextNote;
    },0)
  }

    media():number{
      const sum = this.somaNotas()
      const divisor = (sum/4)
    }

  //O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.
  // criando esse metodo para a soma das notas

}
