import Image from "next/image";
import styled from "styled-components";

/**
 * @todo make other aspects of image (such as width, shape) customizable
 */
type ImageProps = {
    /**
     * The src of the image
     */
    imageUrl: string;
    /**
     * Alt text for the image
     */
    altText: string;
}

const StyledContainer = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
`;

const StyledImage = styled(Image)`
    border-radius: 50px;
    object-fit: contain;
`;

export const ProfileImage: React.FC<ImageProps> = ({ imageUrl, altText }) => {
    return (
        <StyledContainer>
            <StyledImage src={imageUrl} fill alt={altText} />
        </StyledContainer>
    );
}
