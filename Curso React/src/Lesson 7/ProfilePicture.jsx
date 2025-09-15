function ProfilePicture(){

    const imageUrl = './src/assets/profileImg.png';

    const handleClick = (e) => e.target.style.display ="none";

    return(
        <img onClick={handleClick} src={imageUrl}></img>
    )
}

export default ProfilePicture