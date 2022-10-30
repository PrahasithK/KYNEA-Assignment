import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kynea-assignment';
  Sensitivity = true
  src = ""
  fileName = "";
  isShown: boolean = false;
  isHide: boolean = true;
  Days = "";
  Hours = "";
  Minutes = "";
  showPreview(event: any) {

    if (event.target.files.length > 0) {
      this.src = URL.createObjectURL(event.target.files[0]);
      console.log(event.target.files[0].name)
      this.fileName = event.target.files[0].name
      var preview: HTMLImageElement = <HTMLImageElement>document.getElementById("logo-icon");
      preview.src = this.src;
      this.Sensitivity = false
    }
  }
  analyize() {
    var original: HTMLImageElement = <HTMLImageElement>document.getElementById("original");
    original.src = this.src
    setTimeout(() => {
      var analyzed: HTMLImageElement = <HTMLImageElement>document.getElementById("analyzed");
      analyzed.src = this.src
      if (this.src != "") {
        this.isShown = true;
        this.isHide = false;
      } else {
        this.isShown = false;
      }
    }, 10000)
  }

}
