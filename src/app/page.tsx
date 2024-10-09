'use client';

import styles from "./page.module.css";
import profileData from "../data/user1.json";
import { ProfileImage } from "./components/ProfileImage";
import { ProfileTitle } from "./components/ProfileTitle";
import { ProfileBio } from "./components/ProfileBio";
import { ProfileLinkRow, ProfileLinkRowContainer } from "./components/ProfileLinkRow";
import { ProfileSocialLink, SocialLinkContainer } from "./components/ProfileSocialLinks";

/**
 * 
 * @todo - improve mechanism for rendering svgs from social type to ensure there's a mapping 
 */

export default function ProfilePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ProfileImage imageUrl={profileData.imageUrl} altText={profileData.name} />
        <ProfileTitle text={profileData.name} />
        <ProfileBio text={profileData.bio} />
        {profileData.links &&
          <ProfileLinkRowContainer>
            {profileData.links.map(link => <ProfileLinkRow key={link.id} linkUrl={link.linkUrl} text={link.title} imageUrl={link.imageUrl} />)}
          </ProfileLinkRowContainer>
        }

        {profileData.socials &&
          (<SocialLinkContainer>
            {profileData.socials.map((social, index) => <ProfileSocialLink key={index} id={index} imageUrl={`./assets/${social.type}.svg`} altText={social.type} socialUrl={social.socialUrl} />)}
          </SocialLinkContainer>)
        }
      </main>
    </div>
  );
}
