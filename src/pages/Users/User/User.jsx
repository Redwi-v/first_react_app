import c from './user.module.css';
import { Link } from 'react-router-dom';

export const User = props => {
	const { user, deleteFriend, addFriend, followingProgress } = props;
	const addFriendHandler = () => {
		addFriend(user.id);
	};

	const deleteFriendHandler = () => {
		deleteFriend(user.id);
	};

	const checkChoseAvatar =
		user.photos.large ||
		user.photos.small ||
		'https://avatars.mds.yandex.net/i?id=150e3ccfcc5d7d099bfe9a3b0c3ccf0a0536312d-8253063-images-thumbs&n=13';

	return (
		<li className={c.user}>
			<div className={c.leftSide}>
				<Link to={'/profile/' + user.id}>
					<img className={c.userAvatar} src={checkChoseAvatar} alt='avatar' />
				</Link>

				{user.followed ? (
					<button
						className={`${c.deleteFriend} ${c.btn}`}
						onClick={deleteFriendHandler}
						disabled={followingProgress.some(id => id === user.id)}>
						Delete friend
					</button>
				) : (
					<button
						className={`${c.btn} ${c.addFriend}`}
						onClick={addFriendHandler}
						disabled={followingProgress.some(id => id === user.id)}>
						Add friend
					</button>
				)}
			</div>

			<div className={c.aboutUser}>
				<div className={c.userName}>{user.name}</div>
				<p className={c.userStatus}>{user.status}</p>
			</div>
		</li>
	);
};
