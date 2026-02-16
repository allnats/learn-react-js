import styles from "./CountryItem.module.css";

function CountryItem({ country, emoji }) {
  return (
    <li className={styles.countryItem}>
      <span>{country}</span>
      <span>{emoji}</span>
    </li>
  );
}

export default CountryItem;
