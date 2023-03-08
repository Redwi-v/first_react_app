import classes from './Post.module.css';

export default function (props) {
	return (
		<li className={classes.posts__onepost}>
			<div className={classes.posts__marker}></div>
			<p className={classes.posts__text}>{props.text}</p>
		</li>
	);
}
