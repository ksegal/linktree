type TitleProps = {
    /**
     * the title text
     */
    text: string;
}

export const ProfileTitle: React.FC<TitleProps> = ({ text }) => {
    return (
        <h1>{text}</h1>
    );
}
