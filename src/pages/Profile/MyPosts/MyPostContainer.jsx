import MyPosts from './MyPosts';
import { addPsotActionCreator } from '../../../redux/profile_page';
import { connect } from 'react-redux';

let f1 = state => {
	return {
		posts: state.profilePage.myPosts,
	};
};

const mapDispatchToProps = {
	addNewPost: addPsotActionCreator,
};
const MyPostsContainer = connect(f1, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
