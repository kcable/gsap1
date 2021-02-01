import Monster from "./Monster";

export default class Animation {
  constructor() {
    this.monsters = Array.prototype.map.call(
      document.querySelector("#container").children,
      (element) => new Monster(element)
    );
   
    }
}
