'use client';

import profileData from "../../data/user1.json";
import { ProfileImage } from "../components/ProfileImage";
import { ProfileTitle } from "../components/ProfileTitle";
import { ProfileBio } from "../components/ProfileBio";
import { ProfileLinkRow, ProfileLinkRowContainer } from "../components/ProfileLinkRow";
import { ProfileSocialLink, SocialLinkContainer } from "../components/ProfileSocialLinks";
import { useState } from "react";
import styled from "styled-components";

/**
 * 
 * @todo - improve mechanism for rendering svgs from social type to ensure there's a mapping 
 */

const StyledPageLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-items: center;
  min-height: 100svh;
  padding: 80px;
  gap: 64px;
  font-family: var(--font-geist-sans);
`;

const StyledMainLayout = styled.main`
  align-items: center;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px;
`;

const StyledButtonContainer = styled.div`
    border: 1px solid black;
    background-color: white;
    color: black;
    padding: 12px;
`;


export default function CustomUIPage() {

    const [colorValue, setColorValue] = useState('#FFFFFF');
    const [buttonTextColorValue, setButtonTextColorValue] = useState('#000000');

    return (
        <StyledPageLayout>
            <div>
                <h1>Customize your Linktree</h1>

                <StyledButtonContainer>
                    <h2>Buttons </h2>
                    <h3>Button color</h3>
                    <input type="color" id="head" name="head" value={colorValue} onChange={(e) => setColorValue(e.target.value)} />
                    <label htmlFor="head">Button Background Color</label>

                    <h3>Button font color</h3>
                    <input type="color" id="head" name="head" value={buttonTextColorValue} onChange={(e) => setButtonTextColorValue(e.target.value)} />
                    <label htmlFor="head">Button Text Color</label>
                </StyledButtonContainer>

            </div>
            <div>
                <h2>Preview </h2>
                <StyledMainLayout>
                    <ProfileImage imageUrl={profileData.imageUrl} altText={profileData.name} />
                    <ProfileTitle text={profileData.name} />
                    <ProfileBio text={profileData.bio} />
                    {profileData.links &&
                        <ProfileLinkRowContainer>
                            {profileData.links.map(link => <ProfileLinkRow key={link.id} linkUrl={link.linkUrl} text={link.title} imageUrl={link.imageUrl} buttonBackgroundColor={colorValue} buttonTextColor={buttonTextColorValue} />)}
                        </ProfileLinkRowContainer>
                    }

                    {profileData.socials &&
                        (<SocialLinkContainer>
                            {profileData.socials.map((social, index) => <ProfileSocialLink key={index} id={index} imageUrl={`./assets/${social.type}.svg`} altText={social.type} socialUrl={social.socialUrl} />)}
                        </SocialLinkContainer>)
                    }
                </StyledMainLayout>
            </div>
        </StyledPageLayout>
    );
}
