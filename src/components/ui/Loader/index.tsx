import style from './style.module.scss';

export const Loader = () => (
  <div className={style.loader_container}>
    <span className={style.loader} />
  </div>
);
