import CounterGroupSum from "../components/CounterGroupSum";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  sum: state.sum,
});

const CounterGroupSumContainer = connect(mapStateToProps)(CounterGroupSum);

export default CounterGroupSumContainer;
