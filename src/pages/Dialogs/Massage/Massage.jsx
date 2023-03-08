import classes from './Massage.module.css';

export default function (props) {
	return (
		<li className={classes.massage_item}>
			<div className={classes.user}>
				<img
					className={classes.user_avatar}
					src='https://avatars.mds.yandex.net/i?id=911c74308fa3961d7630f920cd9515cf-4697805-images-thumbs&n=13&exp=1'
					alt='avatar'
				/>
				<div className={classes.user_name}>{props.name}</div>
			</div>
			<div className={classes.user_massage}>{props.massage}</div>
		</li>
	);
}
