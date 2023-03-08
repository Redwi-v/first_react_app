import { useEffect, useState } from 'react';
import styles from './Profile.module.css';

const ProfileStatus = props => {
	const { updateStatus, status } = props;

	let [state, setState] = useState({
		isReductMode: false,
		status: status,
	});

	const toggReductMode = () => {
		setState({ ...state, isReductMode: !state.isReductMode });
		if (state.isReductMode) {
			updateStatus(state.status);
		}
	};

	useEffect(() => {
		setState({ ...state, status: status });
	}, [status]);

	const changeInputStatus = e => {
		const value = e.target.value;
		setState({ ...state, status: value });
	};

	return (
		<div className=''>
			{state.isReductMode ? (
				<input onChange={changeInputStatus} onBlur={toggReductMode} autoFocus type='text' value={state.status} />
			) : (
				<p onDoubleClick={toggReductMode} className={styles.status}>
					{status}
				</p>
			)}
		</div>
	);
};

export default ProfileStatus;
