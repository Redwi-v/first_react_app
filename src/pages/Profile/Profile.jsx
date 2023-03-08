import Profile_Info from './Profile_Info/Profile_Info';
import MyPostsContainer from './MyPosts/MyPostContainer';
import Preloader from '../../components/commons/Preloder/preloader';

export default function Profile(props) {
	const { isOwnProfile, updatePhoto } = props

	if (!props.profile) {
		return <Preloader />;
	}

	return (
		<div>
			<Profile_Info updatePhoto={updatePhoto} isOwnProfile={isOwnProfile} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
			<MyPostsContainer />
		</div>
	);
}
