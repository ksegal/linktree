import Image from "next/image";

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

export const ProfileImage: React.FC<ImageProps> = ({ imageUrl, altText }) => {
    return (
        <Image src={imageUrl} style={{ objectFit: 'contain', borderRadius: '50px' }} width={100} height={100} alt={altText} />
    );
}
