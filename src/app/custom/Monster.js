import gsap from "gsap/gsap-core";

export default class Monster {
  constructor(element) {
    gsap.set(".monster", { width: "80%" });
    this.element = element;
  }

  expand() {
    gsap.to(this.element, { width: "80%", duration: 0.5, id: "expand" });
    console.log(this.element.style.width);
  }

  contract() {
    gsap.to(".monster:not(:hover)", { width: "4%", duration: 0.5, id: "contract" });
  }

  reset() {
    gsap.to(".monster", { width: "16.6%", id: "reset" });
  }
}
