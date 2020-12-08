import { connect } from "react-redux";
import CounterGroup from "../components/CounterGroup";

const mapStateToProps = (state) => ({
  counterSize: state.size,
});

const CounterGroupContrainer = connect(mapStateToProps)(CounterGroup);

export default CounterGroupContrainer