import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { UserCardComponent } from "./user-card/user-card.component";
import { CalculatorComponent } from './calculator/calculator.component';
import { CommonModule } from '@angular/common';
import { PersonCardComponent } from './person-card/person-card.component';
import { CounterComponent } from './counter/counter.component';
import { filter, from, map, tap } from 'rxjs';
import { AppColorsDirective } from "./app-colors.directive";
import { CreateHtmlDirective } from './create-html.directive';
import { PurePipe } from './pure.pipe';
import { ImpurePipe } from './impure.pipe';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
interface IPerson2 {
  name: string,
  lastName: string,
  age?: number
}

interface IForm {
  name: string
  score: string
  school: string
  proffesor: string
  university: string
}

interface IPerson{
  gender?: string,
  lastName?: string,
  name?: string,
  age?: number,
  
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppColorsDirective,
  RouterOutlet, UserCardComponent, CalculatorComponent, CommonModule, PersonCardComponent, CounterComponent,
    CreateHtmlDirective,
    PurePipe,
    ImpurePipe, MatCardModule, MatButtonModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  scoreControl = new FormControl<string>('asdasdasd', [Validators.required])

  name:string = 'testName'
  lastName:string = ''
  students: number[] = [1, 2, 3, 4, 5, 6,7,8,9];
  youtube = from([1,2,3,4,5,6])
  total_female = 0;
  total_male = 0;
  total_discount = 0;
  list_people: IPerson[] = [
    {
      gender: "female",
      name: "Camila Cortez",
      age: 23
    },
    {
      gender: "male",
      name: "Juan Cortez",
      age: 13
    },
    {
      gender: "male",
      name: "Marco Polo",
      age: 31
    },
    {
      gender: "female",
      name: "Carolina Marquez",
      age: 17
    },
    {
      gender: "female",
      name: "Maria Rosas",
      age: 19
    },
  ]

  addVideo() {
    this.youtube
      .pipe(
        map((res: number) => {
          //console.log("MAP OPERATOER RXJS: ", res);
          if (res % 2 === 0) {
            return res;
          } else {
            return null
          }
        }),
        tap((res)  => {console.log('VALUE: ', res)}),
        filter((res: number | null) => res !== null),
      )
      .subscribe((res) => {
        console.log("SUSCRIBER 2: ", res);
      });
  }

  public getColor(value:string): void {
    console.log("value: ", value);
  }

  public countGender(gender:string){
    const total = this.list_people.filter((person)=>(person.gender==gender)).length
    if(gender=='female'){
      this.total_female = total;
    } else{
      this.total_male = total;

    }
  }

  public countDiscount(){
    this.total_discount = this.list_people.filter((person) =>(person.age!>18)).length
  }

  public deleteDiscount(){
    this.list_people = this.list_people.filter((person) =>(person.age!<18))
  }
  result: number = 0
  title:string  = 'first.angular Amy';
  numero:number = 6;
  animals: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

  users = [{ name: 'abc', 'email': 'abc@gmail.com' }, { name: 'dfg', 'email': 'dfg@gmail.com' }]
  selectedUser:any = this.users[0];

  userCardCreated: boolean = true

  person: IPerson = {
    name: 'Juan',
    lastName: 'Perez',
    age: 12
  } 

  parents: number[]= [7,8,9,10]

  var1 = 0
  var2 = null
  var3 = 'hola'

  studentForm!: FormGroup
  student2Form!: UntypedFormGroup


  constructor(private router: Router, private formBuilder: FormBuilder,
    private untypedFormBuilder: UntypedFormBuilder){
    const { name, age } = this.person;


    this.youtube.subscribe((res) => {
      console.log("SUSCRIBER 1: ", res);
    });

    this.scoreControl.valueChanges.subscribe((res) => {
      console.log('SCORE VALUE OBSERVABLE: ', res)
    })

    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      score: [''],
      school: [''],
      proffesor: [''],
      university: ['']
    })

    this.student2Form = this.untypedFormBuilder.group({
      name: ['', Validators.required],
      score: [''],
      school: [''],
      proffesor: [''],
      university: ['']
    })
    /* this.studentForm = new FormGroup({
      name: new FormControl<string>('sdasdasdasd', [Validators.required]),
      score: new FormControl<string>('sdfsdfsdf'),
      school: new FormControl<string>(''),
      proffesor: new FormControl<string>(''),
      university: new FormControl<string>('')
    }) */


    this.studentForm.valueChanges.subscribe((res) => {
      console.log('FORM GROUP OBSERVABLE: ', res)
    })

    
    /*const {name, lastName} = this.person
    console.log('destructuration: ',name, lastName)*/

    let both = [...this.students, ...this.parents]
    console.log('spreed operator: ', both)

    console.log('REST Operator:', this.suma(2,4,6))

    console.log('Nullish Coalesing;', this.var1 ?? this.var2  )
    console.log('OR:', this.var2 || this.var1)
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

  public receiveData(data:any){
    console.log("Data recibida: ", data)
  }
    
  public onResult(data: any){
    this.result = data ?? 0
  }

  public sumPure(a:number, b:number): number {
    return a + b;
  }
  public sumImpure(a:number, b:number): number {
    return a + b + Math.random();
  }
  public addNumber() {
    this.students = [...this.students, 12]
  }
  

  public goToStudentModule() {
    this.router.navigate(['student'])
  }
  public goToCard() {
    this.router.navigate(['card', 1])
  }
  public onCalculator(){
    this.router.navigate(['cal'], {queryParams: {name: 'John', age: 20}})
  }

  onSubmit(data:any){
    console.log('TEMPLATE DRIVEN FORM: ', data)
  }
  onPrintScore(){
    console.log('SCORE: ', this.scoreControl.value)
  }

  onSendData() {
    console.log('FORM GROUP: ', this.studentForm)
  }
  print(){
    console.log('FORM NAME: ', this.studentForm.get('name'))
  }
}
