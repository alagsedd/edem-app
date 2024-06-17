import styles from "../styles/Stock.module.css";
import pic from "../assets/images/octopus-svgrepo-com.svg";
import Button from "@mui/material/Button";

interface Stock {
  title: string;
  description: string;
}
interface Props {
  stockArray: Stock[]
  onDeleteStock: () => void;
}

const StockCard = ({ stockArray,onDeleteStock }: Props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Stock</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>

      <tbody>{}</tbody>
      <tfoot></tfoot>
    </table>
  );
};

export default StockCard;
