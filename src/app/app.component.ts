/**
 * App component
 *
 * @file          app.component
 * @description   Show all the rendered pages
 * @author        John Mark Alicante
 * @since         2024 - 10 - 15
 */

//--- NG Modules
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
//--- Prime NG
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    //--- NG Modules
    RouterOutlet,
    //--- Prime NG
    ButtonModule,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.less",
})
export class AppComponent {
  //--- Public
  public title: string = "DAM Reco Architecture";

  /**
   * @name  constructor
   */
  constructor() {}

  /**
   * @name          ngOnInit
   * @description   Called when component is initialize
   * @returns       {void}
   */
  public ngOnInit(): void {}

  /**
   * @name          uploadFile
   * @description   Handle the file upload
   * @param         {File} event
   * @returns       {void}
   */
  public uploadFile(event: File): void {
    console.log("event", event);
    // Some code will go here
  }
}
