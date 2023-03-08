import { NavLink } from 'react-router-dom';
import classes from './Item.module.css';

export default function (props) {
	let path = '/dialogs/' + props.id;
	return (
		<li className={classes.item}>
			<NavLink
				className={(navData) => (navData.isActive ? classes.active : '')}
				to={path}>
				<span className={classes.circle}></span>
				{props.name}
			</NavLink>
		</li>
	);
}
