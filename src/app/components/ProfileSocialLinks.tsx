



import Image from "next/image";
import styled from "styled-components";

type ProfileSocialLinkProps = {
    /**
     * unique id for the social link
     */
    id: number;
    /**
     * The src url of the social image
     */
    imageUrl: string;
    /**
     * The url of the social link
     */
    socialUrl: string;
    /**
     * Alt text for the social image
     */
    altText: string;
}

const StyledSocialLink = styled.a`
    padding: 12px;
`;

/**
 * @todo make image fill customizable
 */

const StyledImage = styled(Image)`
    filter: invert(100%);
    transform: scale(1);

    &:hover {
        filter: invert(50%);
        transform: scale(1.2);
    }
`;

export const SocialLinkContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
`;

export const ProfileSocialLink: React.FC<ProfileSocialLinkProps> = ({ id, socialUrl, imageUrl, altText }) => {
    return (
        <StyledSocialLink key={id} href={socialUrl} target="_blank" rel="noopener"><StyledImage key={id} src={imageUrl} width={20} height={20} alt={altText} /></StyledSocialLink>
    );
}
