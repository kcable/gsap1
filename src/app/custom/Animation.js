import Monster from "./Monster";

export default class Animation {
  constructor() {
    this.monsters = Array.prototype.map.call(
      document.querySelector("#container").children,
      (element) => new Monster(element)
    );

    this.monsters.forEach((monster) => {
      monster.element.addEventListener("mouseenter", (e) => {
        monster.expand();
        monster.contract();
      });

      monster.element.addEventListener("mouseleave", (e) => {
        monster.reset();
      });
    });
  }
}
