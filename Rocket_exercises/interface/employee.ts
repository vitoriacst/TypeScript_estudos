export default interface Employee{
  registration: string;
  salary: number;
  admissionDate:Date;
  generateRegistration(): string;
}
