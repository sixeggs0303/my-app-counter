import { connect } from "react-redux";
import CounterSizeGenerator from "../components/CounterSizeGenerator";
import { updateCounterSize, resetSum } from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    updateCounterSize: (size) => {
      dispatch(updateCounterSize(size));
    },
    resetSum: () => {
      dispatch(resetSum());
    },
  };
};

const CounterSizeGeneratorContainer = connect(
  null,
  mapDispatchToProps
)(CounterSizeGenerator);

export default CounterSizeGeneratorContainer;
