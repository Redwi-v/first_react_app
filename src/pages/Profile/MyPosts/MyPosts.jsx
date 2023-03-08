import classes from './MyPost.module.css';
import Post from './Post/Post';
import { Formik, Form, Field } from 'formik';

export default function MyPosts(props) {
	function renderPosts() {
		return props.posts
			.map(post => {
				return <Post key={post.id} text={post.text} />;
			})
			.reverse();
	}

	// отправка формы
	const submitForm = (values, { setSubmitting, resetForm }) => {
		props.addNewPost(values.postText);
		resetForm('');
		setSubmitting(false);
	};

	return (
		<div className={(classes.profile__posts, 'posts')}>
			<h2 className={classes.posts__title}>My posts</h2>
			<div className={classes['posts__create-post']}>
				<PostForm submitForm={submitForm} />
			</div>
			<ul className={classes.posts__list}>{renderPosts()}</ul>
		</div>
	);
}

const PostForm = props => {
	const { submitForm } = props;

	return (
		<Formik initialValues={{ postText: '' }} onSubmit={submitForm}>
			{({ isSubmitting }) => {
				return (
					<Form>
						<Field
							className={classes.posts__input}
							component='textarea'
							plaseholder='Новый пост'
							name='postText'
							placeholder='New Post'
						/>
						<button type='submit' className={classes['posts__send-btn']} disabled={isSubmitting}>
							Send
						</button>
					</Form>
				);
			}}
		</Formik>
	);
};
