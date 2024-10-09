import Image from "next/image";
import styles from "./page.module.css";

export default function ProfilePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image src="https://ugc.production.linktr.ee/659ebfef-3c9c-4231-ac6f-381bc5737d19_olivia-rodrigo.jpeg?io=true&size=avatar-v3_0" width={100} height={100} alt="olivia rodrigo" />
        <p>Olivia Rodrigo</p>
        <p>Bio test</p>
        <ul>
          <li>Link 1</li>
          <li>Link 2 </li>
        </ul>
        <Image src="https://ugc.production.linktr.ee/659ebfef-3c9c-4231-ac6f-381bc5737d19_olivia-rodrigo.jpeg?io=true&size=avatar-v3_0" width={100} height={100} alt="social icon" />
      </main>
    </div>
  );
}
