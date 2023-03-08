import Dialogs from './Dialogs';
import { sendMassage } from '../../redux/dialogs_page';
import { connect } from 'react-redux';
import withRedirect from '../../hoc/withRedirect';
import { compose } from 'redux';

const mapStateToProps = state => {
	return {
		dialogs: state.dialogsPage.dialogs,
		newMassageText: state.dialogsPage.massageText,
		massages: state.dialogsPage.massages,
	};
};
const mapDispatchToProps = {
	sendMassage,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),

	withRedirect,
)(Dialogs);
