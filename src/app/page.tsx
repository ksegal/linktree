import Image from "next/image";
import styles from "./page.module.css";
import profileData from "../data/user1.json";
import { ProfileImage } from "./components/ProfileImage";
import { ProfileTitle } from "./components/ProfileTitle";
import { ProfileBio } from "./components/ProfileBio";

export default function ProfilePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ProfileImage imageUrl={profileData.imageUrl} altText={profileData.name} />
        <ProfileTitle text={profileData.name} />
        <ProfileBio text={profileData.bio} />
        <Image src="https://ugc.production.linktr.ee/659ebfef-3c9c-4231-ac6f-381bc5737d19_olivia-rodrigo.jpeg?io=true&size=avatar-v3_0" width={100} height={100} alt="social icon" />
      </main>
    </div>
  );
}
