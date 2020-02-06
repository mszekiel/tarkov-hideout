import Process from "./Process";
import Input from "./components/Input";
import Item from "./components/Item";
import Time from "./components/Time";

export { InputProps } from "./components/Input";
export { ItemProps } from "./components/Item";

Process.Input = Input;
Process.Item = Item;
Process.Time = Time;
Process.Output = Input;

export default Process;
