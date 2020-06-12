import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appSocialIcon]",
})
export class SocialIconDirective {
  @Input("bgColor") highlightColor: string;
  constructor(private el: ElementRef) {}

  private bgColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color || "red";
  }
}
