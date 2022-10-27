import classes from './sidebar.module.css';
import Item from './SideBarItem/SideBarItem';

export default function Sidebar() {
  return (
    <nav className={classes.sidebar}>
      <ul className={classes.sidebar__list}>
        <Item to="/profile" name="Profile" />
        <Item to="/dialogs" name="Dialogs" />
        <Item to="/dialogss1" name="News" />
        <Item to="/dialogss" name="Music" />
        <Item to="/users" name="Users" />
        <Item to="/dialogss3" name="Setting" />
      </ul>
    </nav>
  );
}
