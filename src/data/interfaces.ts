export interface IPerson {
    name: string;
    lastName: string;
    type: 'student' | 'professor';
    firstTestScore?: number;
    secondTestScore?: number;
    finalTestScore?: number;
    subject?: string;
    address: {
      number: string;
      street: string;
      zone: string;
    };
    country: string;
    province: string;
    messages: string[];
  }
  
export interface IInformation {
  name?: string ,
  type_p?: string,
  message?:string,
  person?: IPerson
}