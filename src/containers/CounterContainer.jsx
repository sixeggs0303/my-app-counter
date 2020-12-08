import Counter from "../components/Counter";
import { connect } from "react-redux";
import { changeSum } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  changeSum: (value) => {
    dispatch(changeSum(value));
  },
});

const CounterContainer = connect(null, mapDispatchToProps)(Counter);

export default CounterContainer;
