import { connect } from "react-redux";
import { changeFilter } from "../../redux/actions";
import Filter from "./Filter";

const mapStateToProps = ({ filter }) => ({ filter });

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => {
    dispatch(changeFilter(e.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
