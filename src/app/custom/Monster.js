import gsap from "gsap/gsap-core";

export default class Monster {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("mouseenter", e=>{
        this.expand();
    })
    this.element.addEventListener("mouseleave", e=>{
        this.reset();
    })
  }

  expand() {
    gsap.to(this.element, { width: "80%", duration: 0.5, id:"expand" });
    gsap.to(".monster:not(:hover)", { width: "4%", duration: 0.5, id:"contract" });
  }

  contract() {
   // gsap.to(this.element, { width: "4%", duration: 0.5 , id:"contract"}); don`t rly need this ??
  }

  reset() {
    gsap.to(".monster", { width: "16.6%", duration: 0.5, id: "reset" });
  }
}
