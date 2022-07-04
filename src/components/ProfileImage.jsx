const ProfileImage = ({ src, size }) => {
    return (
        <div
            className="rounded-full grid place-items-center overflow-hidden"
            style={{ width: `${size}px`, height: `${size}px` }}
        >
            <img src={src} alt="profile" style={{ width: `${size}px` }} />
        </div>
    );
};

export default ProfileImage;
