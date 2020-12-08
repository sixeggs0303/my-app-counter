import { connect } from "react-redux";
import Counter from "../components/Counter";
import { decreaseSum, increaseSum } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    dispatch(increaseSum());
  },
  decrease: () => {
    dispatch(decreaseSum());
  },
});

const CounterContainer = connect(null, mapDispatchToProps)(Counter);

export default CounterContainer;
