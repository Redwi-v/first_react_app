import styles from './Profile.module.css';
import ProfileStatus from './ProfileStatus';

//images
import facebookIcon from '../../../img/facebook.png'
import gitHubIcon from '../../../img/github.png'
import instagramIcon from '../../../img/instagram.png'
import twitterIcon from '../../../img/twitter.png'
import vkIcon from '../../../img/vk.png'
import websiteIcon from '../../../img/website.png'
import youtubeIcon from '../../../img/youtube.png'

const contactsData = [
	{
		name: 'facebook',
		icon: facebookIcon,
	},
	{
		name: 'github',
		icon: gitHubIcon,
	},
	{
		name: 'instagram',
		icon: instagramIcon,
	},
	{
		name: 'twitter',
		icon: twitterIcon,
	},
	{
		name: 'vk',
		icon: vkIcon,
	},

	{
		name: 'website',
		icon: websiteIcon,
	},
	{
		name: 'youtube',
		icon: youtubeIcon,
	},
]

function Profile_Info(props) {
	console.log(props.profile);
	const { photos, fullName, contacts, aboutMe, lookingForAJob, lookingForAJobDescription } = props.profile;
	const { status, updateStatus, isOwnProfile, updatePhoto } = props;

	const onSetPhoto = (e) => {
		updatePhoto(e.target.files[0])
	}

	return (
		<div className={styles.profile__info}>
			{/* <img
				className={styles['profile__header-img']}
				src={
					photos.large ||
					`https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701313431.jpg`
				}
				alt=''
			/>


			<div className={styles.main__info}>
				<div className={styles.small_image_wrapper}>


					{isOwnProfile &&
						<div className={styles.update_photo_hover}>
							<input onChange={onSetPhoto} type='file' id='updatePhoto' />
							<label htmlFor="updatePhoto">
								<img src="https://oir.mobi/uploads/posts/2022-08/1661338515_8-oir-mobi-p-pustoi-fon-vkontakte-11.png" alt="update photo" />
							</label>
						</div>
					}
					<img
						className={styles.profile__img}
						src={
							photos.small ||
							'https://avatars.mds.yandex.net/i?id=150e3ccfcc5d7d099bfe9a3b0c3ccf0a0536312d-8253063-images-thumbs&n=13'
						}
						alt=''
					/>

				</div>
				<div className={styles.profile__about}>
					<h3 className={styles.profile__name}>{fullName}</h3>
					<p className={styles.profile__birth}>
						Date of Birth:
						<span className={styles['profile__birth-value']}> 2 jaruary</span>
					</p>
					<p className={styles.profile__city}>
						City: <span className={styles['profile__city-value']}>Minsk</span>
					</p>
					<ProfileStatus status={status || 'update Status'} updateStatus={updateStatus} />
				</div>
			</div> */}



			<div className={styles.top_section}>
				<div className={styles.cover_image_wrapper}>
					<img
						src={
							photos.large ||
							`https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701313431.jpg`
						}
						alt='cover'
					/>
				</div>


				<div className={styles.main_info}>
					<div className={styles.small_image_wrapper}>
						{isOwnProfile &&
							<div className={styles.update_photo_hover}>
								<input onChange={onSetPhoto} type='file' id='updatePhoto' />
								<label htmlFor="updatePhoto">
									<img src="https://oir.mobi/uploads/posts/2022-08/1661338515_8-oir-mobi-p-pustoi-fon-vkontakte-11.png" alt="update" />
								</label>
							</div>
						}
						<img
							className={styles.profile__img}
							src={
								photos.small ||
								'https://avatars.mds.yandex.net/i?id=150e3ccfcc5d7d099bfe9a3b0c3ccf0a0536312d-8253063-images-thumbs&n=13'
							}
							alt='profile'
						/>


					</div>

					<h2 className={styles.user_name}>{fullName}</h2>

					<div className={styles.user_status}>

						<ProfileStatus status={status || 'update Status'} updateStatus={updateStatus} />
					</div>
				</div>
			</div>

			<div className={styles.middle_section}>
				<div className={`${styles.about_me} ${styles.profile_block}`}>
					<h2 className={styles.middle_section_title}>About me</h2>

					<p>{aboutMe || 'The owner of the page is very modest and does not want to tell anything.'}</p>
				</div>
				<div className={`${styles.contacts} ${styles.profile_block}`}>

					<div className={`${styles.lookingForAJob} ${lookingForAJob && styles.yes}`}>
						Looking for a job: <span>{lookingForAJob ? 'Yes' : 'No'}</span>
					</div>

					<ul className={styles.socialNetwork_list}>
						{
							contactsData.map((socialNetwork) => {
								return (
									<li className={styles.socialNetwork} key={socialNetwork.name} >
										<img src={socialNetwork.icon} alt={socialNetwork.name} title={socialNetwork.name} />
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		</div>
	);
}
export default Profile_Info
