import { CommonModule } from "@angular/common";
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  AfterContentChecked,
  AfterViewChecked,
} from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "user-card",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./user-card.component.html",
  styleUrl: "./user-card.component.css",
})
export class UserCardComponent
  implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked
{
  @Input() name: string = "";
  @Input() email: string = "";

  @Output() sendData = new EventEmitter();

  @ViewChild('buttonTest', { static: false }) buttonTest!: ElementRef
  @ViewChild('buttonShow', { static: true }) buttonShow!: ElementRef
  
  password: string = "";
  showButton: boolean = true;

  constructor(){
    console.log("user card constructor")
  }

  ngOnInit(): void {
    console.log("user card on init");
    this.buttonShow.nativeElement.textContent = 'button Show in OnInit'

    // this.password = this.name + ' ' +  this.email + ' PASSWORD'
  }

  ngOnDestroy(): void {
    console.log("user card on destroy");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("CHANGES:", changes);
    this.password =
      changes["name"].currentValue +
      " " +
      changes["email"].currentValue +
      " PASSWORD";
  }

  public onSendData() {
    console.log("onSendData in child");
    this.sendData.emit("Hola desde el hijo");
  }

  ngDoCheck(): void {
    console.log("DO CHECK user card");
  }
  ngAfterContentInit(): void {
    console.log("NG AFTER CONTENT INIT");
  }


  ngAfterViewInit(): void {
    console.log('NG AFTER VIEW INIT')
    console.log('BUTTON TEST', this.buttonTest)   

    if(this.buttonTest){
      this.buttonTest.nativeElement.textContent = 'button Test in ngAfterViewInit'
    } 
   }


   ngAfterContentChecked(): void {
    console.log('AFTER CONTENT CHECKED')
  }

  ngAfterViewChecked(): void {
    console.log('NG AFTER VIEW CHECKED')
  }

}
