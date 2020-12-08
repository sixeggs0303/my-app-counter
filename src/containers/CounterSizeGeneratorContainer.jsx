import CounterSizeGenerator from "../components/CounterSizeGenerator";
import { connect } from "react-redux";
import { changeSize, reset } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  changeSize: (size) => {
    dispatch(changeSize(size));
  },
  reset: () => {
    dispatch(reset());
  },
});

const CounterSizeGeneratorContainer = connect(
  null,
  mapDispatchToProps
)(CounterSizeGenerator);

export default CounterSizeGeneratorContainer;
