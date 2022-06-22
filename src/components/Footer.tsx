import styles from '../assets/styles/footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Содержимое сайта является объектом авторских прав. ©2022 ООО &quot;Вайт Тревел &quot;.
      Все права защищены. Запрещается копировать, использовать, распространять,
      модифицировать любое содержимое этого сайта.
      OneTwoTrip не несёт ответственности за информацию,
      представленную на внешних сайтах.
    </footer>
  );
}
