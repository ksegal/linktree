'use client';

import profileData from "../data/user1.json";
import { ProfileImage } from "./components/ProfileImage";
import { ProfileTitle } from "./components/ProfileTitle";
import { ProfileBio } from "./components/ProfileBio";
import { ProfileLinkRow, ProfileLinkRowContainer } from "./components/ProfileLinkRow";
import { ProfileSocialLink, SocialLinkContainer } from "./components/ProfileSocialLinks";
import styled from "styled-components";

/**
 * 
 * @todo - improve mechanism for rendering svgs from social type to ensure there's a mapping 
 */

const StyledPageLayout = styled.div`
  display: grid;
  grid-template-rows: 20px 1fr 20px;
  align-items: center;
  justify-items: center;
  min-height: 100svh;
  padding: 80px;
  gap: 64px;
  font-family: var(--font-geist-sans);
`;

const StyledMainLayout = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  grid-row-start: 2;
`;

export default function ProfilePage() {
  return (
    <StyledPageLayout>
      <StyledMainLayout>
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
      </StyledMainLayout>
    </StyledPageLayout>
  );
}
