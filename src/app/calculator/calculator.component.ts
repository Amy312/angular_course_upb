import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "calculator",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./calculator.component.html",
  styleUrl: "./calculator.component.css",
})
export class CalculatorComponent {
  box1Value: number = 0;
  box2Value: number = 0;
  history: string[]=[]
  @Output() sum = new EventEmitter()
  @Output() mul = new EventEmitter()
  @Output() reset = new EventEmitter()

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

