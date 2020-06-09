import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({ contacts, filter }) => ({ contacts, filter });

export default connect(mapStateToProps)(App);
