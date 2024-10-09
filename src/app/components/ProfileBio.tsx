type BioProps = {
    /**
     * the bio text
     */
    text: string;
}

export const ProfileBio: React.FC<BioProps> = ({ text }) => {
    return (
        <p>{text}</p>
    );
}
