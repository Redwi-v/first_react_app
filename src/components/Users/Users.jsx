import classes from './users.module.css';
import { User } from './User/User';

export const Users = (props) => {
	let usersList = props.users.map((user) => {
		return <User user={user} key={user.id} />;
	});
	return (
		<div className={classes.users}>
			<h1 className={classes.title}>Users</h1>
			<ul className={classes.users_list}>{usersList}</ul>
		</div>
	);
};
