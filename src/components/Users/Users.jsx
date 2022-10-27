import classes from './users.module.css';
import { User } from './User/User';
import Preloader from '../commons/Preloder/preloader';
import Pagination from '../commons/Pagination/Pagination';

const Users = (props) => {
  const {
    users,
    addFriend,
    changeCurrentPage,
    totalUsersCount,
    pageSize,
    selectedPage,
    isFeching,
    toggleFollowingProgress,
    followingProgress,
  } = props;

  const renderUsersList = () => {
    if (isFeching) {
      return <Preloader />;
    }
    return users.map((user) => {
      return (
        <User
          user={user}
          addFriend={addFriend}
          deleteFriend={props.deleteFriend}
          key={user.id}
          toggleFollowingProgress={toggleFollowingProgress}
          followingProgress={followingProgress}
        />
      );
    });
  };

  return (
    <div className={classes.users}>
      <h1 className={classes.title}>Users</h1>

      <Pagination
        clickHandler={changeCurrentPage}
        totalItemsCount={totalUsersCount}
        step={pageSize}
        selectedItem={selectedPage}
      />
      <ul className={classes.users_list}>{renderUsersList()}</ul>

      <button className={classes.showMoreBtn} onClick={props.getUsers}>
        Show more
      </button>
    </div>
  );
};

export default Users;
