import { connect } from "react-redux";
import { addContact } from "../../redux/actions";
import ContactForm from "./ContactForm";

const mapStateToProps = ({ contacts }) => ({ contacts });

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number, id) => dispatch(addContact(name, number, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
