import css from './FriendListItem.module.css';
//import clsx from 'clsx';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.friendsItem}>
      <img src={avatar} alt="Avatar" width="108" />
      <p className={css.name}>{name}</p>
      <p
        className={clsx(
          css.status,
          isOnline === true ? css.online : css.offline
        )}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
