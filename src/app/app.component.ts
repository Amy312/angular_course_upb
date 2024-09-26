import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface IPerson {
  name: string,
  lastName: string,
  age?: number
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title:string  = 'first.angular Amy';
  numero:number = 6;
  animals: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

  person: IPerson = {
    name: 'Juan',
    lastName: 'Perez',
    age: 12
  } 

  students: number[]= [1,2,3,4,5,6]
  parents: number[]= [7,8,9,10]

  constructor(){
    const {name, lastName} = this.person
    console.log('destructuration: ',name, lastName)

    let both = [...this.students, ...this.parents]
    console.log('spreed operator: ', both)

    console.log('REST Operator:', this.suma(2,4,6))
    // console.log('subtract ', this.subtract(8,4))
    // console.log('MAP:', this.animals.map((animal)=>(animal + 'new')))
    // console.log('FOREACH:', this.animals.forEach((animal)=>( animal + 'new')))
    // console.log('FIND:', this.animals.find((animal)=>(animal== 'b')))
    // console.log('FILTER:', this.animals.filter((animal)=>(animal== 'b')))
    // console.log('INDEXOF:', this.animals.indexOf(('b')))
  }

  public suma(...persons: number[]){
    // return persons[0]+persons[1]
    return persons.reduce((acumulador, valorActual) => (acumulador + valorActual), 0)
  }

  public sum(n1: number, n2: number):number {
    return n1+n2
  }

  private subtract(n1: number, n2: number):number {
    return n1-n2
  }

  public getEvenArray(){
    const persons:number[] = [1,2,3,4,5,6,7,8,9,10]
    for(let i=0; i<persons.length; i++){
      if(persons[i]%2==0){
        // console.log('person =', persons[i])
      }
    }
  }
    
  
}
