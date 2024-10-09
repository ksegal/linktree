import styled from "styled-components";
import Image from "next/image";

type LinkRowProps = {
    /**
     * the link url 
     */
    linkUrl: string;
    /**
     * the link title text
     */
    text: string;
    /**
     * the imageUrl for the image to display for row
     */
    imageUrl?: string;
    /**
     * the hex string for the button background color value
     */
    buttonBackgroundColor?: string;
    /**
     * the hex string for the button text color value
     */
    buttonTextColor?: string;
}

/**
 * @todo - build grid variation
 */

export const ProfileLinkRowContainer = styled.div`
    margin-bottom: 4px;
`;

/**
 * @todo - make background and font color customizable 
 */

const StyledLinkRow = styled.div<{ $buttonBackgroundColor?: string; $buttonTextColor?: string; }>`
    align-items: center;
    background-color: ${props => props.$buttonBackgroundColor ? props.$buttonBackgroundColor : "#FFFFFF"};
    border: 2px solid purple;
    border-radius: 36px;
    color: ${props => props.$buttonTextColor ? props.$buttonTextColor : "#000000"};
    display: flex;
    padding: 16px;
    margin-bottom: 8px;
    transform: scale(1);

    &:hover {
        transform: scale(1.03);
    }
`;

const StyledImage = styled(Image)`
    border-radius: 16px;
    margin-right: 4px;
    object-fit: contain;
`;

export const ProfileLinkRow: React.FC<LinkRowProps> = ({ linkUrl, text, imageUrl, buttonBackgroundColor, buttonTextColor }) => {
    return (
        <a href={linkUrl} target="_blank" rel="noopener">
            <StyledLinkRow $buttonBackgroundColor={buttonBackgroundColor} $buttonTextColor={buttonTextColor}>
                {imageUrl && <StyledImage src={imageUrl} width={32} height={32} alt="" />}
                <p>{text}</p>
            </StyledLinkRow>
        </a>
    );
}
