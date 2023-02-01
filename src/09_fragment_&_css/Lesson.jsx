import { Fragment } from "react";
import "./styles.css";

// const Columns = () => ([
//     <td key="1">Hello</td>,
//     <td key="2">world</td>,
// ])

const styles = { color: "red", textTransform: "uppercase" };

const Columns = () => (
  <Fragment>
    <td style={styles}>Inline</td>
    <td className="title">Simple class</td>
  </Fragment>
);

const Table = () => (
  <table>
    <tbody>
      <tr>
        <Columns />
      </tr>
    </tbody>
  </table>
);

export default Table;
