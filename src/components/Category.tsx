interface Props {
  onSelectCatgory: (text: string) => void;
}
const Category = ({ onSelectCatgory }: Props) => {
  return (
    <>
      <select
        onChange={(event) => onSelectCatgory(event.target.value)}
        className="form-select mb-3"
      >
        <option value="">Category</option>
        <option value="living-room">Living Room</option>
        <option value="bedroom">Bedroom</option>
        <option value="office">Office</option>
        <option value="outdoor">Outdoor</option>
      </select>
    </>
  );
};

export default Category;
