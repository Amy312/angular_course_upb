import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: "calculator",
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="calculator">
      <p>Calculator</p>
      <input type="text" [(ngModel)]="box1Value" >
      <input type="text" [(ngModel)]="box2Value">
      <div class="buttons-container">
          <button class="sum" (click)="onSum()">Sum</button>
          <button class="mul" (click)="onMul()">Mul</button>
          <button class="reset" (click)="onReset()">Reset</button>
      </div>
    </div>
  `,
  styleUrl: "./calculator.component.css",
})
export class CalculatorComponent implements OnInit {
  box1Value: number = 0;
  box2Value: number = 0;
  history: string[]=[]
  @Output() sum = new EventEmitter()
  @Output() mul = new EventEmitter()
  @Output() reset = new EventEmitter()

  constructor(private _activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
      this._activatedRoute.queryParams.subscribe(params => {
        console.log('query params: ', params)
      })
      console.log('query params snapshot: ', this._activatedRoute.snapshot.queryParams)
  }

  public onSum() {
    const answer = this.box1Value+ this.box2Value
    this.history.push(`SUM: ${answer}`)
    this.sum.emit(answer)
    console.log(this.history)

  }

  public onMul() {
    const answer = this.box1Value * this.box2Value
    this.history.push(`MUL: ${answer}`)
    this.mul.emit(answer)
    console.log(this.history)
  }

  public onReset() {
    this.box1Value = 0
    this.box2Value = 0
    this.reset.emit(null)
  }
}
