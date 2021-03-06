import Table from "./Table";
import Head from "./components/Head/Head";
import HeadItem from "./components/Head/Item";
import Body from "./components/Body/Body";
import BodyItem from "./components/Body/Item";
import Row from "./components/Body/Row";
import Placeholder from "./components/Body/Placeholder";
import Recipe from "./components/Body/Recipe";
import Price from "./components/Price/Price";

export { HeadProps } from "./components/Head/Head";

Table.Head = Head;
Table.Head.Item = HeadItem;
Table.Body = Body;
Table.Body.Item = BodyItem;
Table.Body.Row = Row;
Table.Body.Placeholder = Placeholder;
Table.Body.Recipe = Recipe;
Table.Price = Price;

export { Table };
export default Table;
