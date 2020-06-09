import { connect } from "react-redux";
import { removeContact } from "../../redux/actions";
import ContactsList from "./ContactsList";

const mapStateToProps = ({ contacts, filter }) => ({ contacts, filter });

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => {
    dispatch(removeContact({ id }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
