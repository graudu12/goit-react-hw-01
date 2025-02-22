import css from '../Profile/Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.profileWrap}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.description}>@{tag}</p>
        <p className={css.description}>{location}</p>
      </div>
      <ul className={css.statsWrap}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.stats}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span className={css.stats}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
