import DeleteIcon from "@mui/icons-material/Delete";
import { green } from "@mui/material/colors";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { useDispatch } from "react-redux";
import {
  incrementItem,
  decrementItem,
  removeItem
} from "../features/shoppingCart/cartSlice";

const ButtonSection = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="button-section">
      <div className="add-remove-button-div">
        <AddCircleOutlineOutlinedIcon
          onClick={() => dispatch(incrementItem(item))}
          sx={{ color: green[500] }}
        >
          add_circle
        </AddCircleOutlineOutlinedIcon>
        <RemoveCircleOutlineOutlinedIcon
          onClick={() => dispatch(decrementItem(item))}
          sx={{ color: green[500] }}
        ></RemoveCircleOutlineOutlinedIcon>
      </div>
      <div className="delete-icon">
        <DeleteIcon onClick={() => dispatch(removeItem(item))} />
      </div>
    </div>
  );
};

export default ButtonSection;
