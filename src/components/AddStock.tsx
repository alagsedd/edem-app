import { useForm } from "react-hook-form";
export interface FormData {
  productName: string;
  category: string;
  description: string;
}
interface Props {
  onSubmitForm: (data: FormData) => void;
}

const AddStock = ({ onSubmitForm }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <form
      onSubmit={handleSubmit(() => {
        onSubmitForm(getValues());
        reset();
      })}
      className="m-2"
    >
      <div className="mb-3">
        <label htmlFor="productName" className="form-label">
          Product Name
        </label>
        <input
          placeholder="Enter stock name"
          {...register("productName", { required: true })}
          id="title"
          type="text"
          className="form-control"
        />
        {errors.productName?.type === "required" && (
          <p className="text-danger">This field is required</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          placeholder="Enter stock description"
          {...register("category", { required: true })}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description?.type === "required" && (
          <p className="text-danger">This field is required</p>
        )}
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default AddStock;
