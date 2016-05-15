import {Power} from "./Power";
import {Time} from "./Time";

export class Appliance{
  name: string;
  power: Power = new Power();
  duration: Time = new Time();
  cost: number = 0;
}
