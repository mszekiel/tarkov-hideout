import { useContext } from "react";
import { storesContext } from "../contexts/storesContext";

export const useStores = () => useContext(storesContext);
