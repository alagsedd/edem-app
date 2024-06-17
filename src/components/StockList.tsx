export interface Stock {
  productId: number;
  productName: string;
  description: string;
  category: string;
}
interface Props {
  stockList: Stock[];
  onDeleteStock: (id: number) => void;
}

const StockList = ({ stockList, onDeleteStock }: Props) => {
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            {/* <th>Category</th> */}
          </tr>
        </thead>

        <tbody>
          {stockList.map((item) => (
            <tr key={item.productId}>
              <td>{item.productName}</td>
              <td>{item.description}</td>
              {/* <td>{item.category}</td> */}
              <td>
                <button
                  onClick={() => onDeleteStock(item.productId)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default StockList;
