import { createContext } from "react";
import { HideoutStore } from "../mobx/hideoutStore";

export const storesContext = createContext({
  hideoutStore: new HideoutStore()
});
