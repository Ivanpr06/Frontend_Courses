import style from './UserGreeting.module.css';
import PropTypes from 'prop-types';

function UserGreeting({ isLoggedin = false, username }) {

    const displayName = username?.trim() || "Guest";

    const welcomeMessage = (
        <h2 className={style.welcomeMessage}>Welcome {displayName}</h2>
    );

    const loginMessage = (
        <h2 className={style.loggMessage}>Please log in to continue</h2>
    );

    return isLoggedin ? welcomeMessage : loginMessage;
}

UserGreeting.propTypes = {
    isLoggedin: PropTypes.bool,
    username: PropTypes.string,
};

export default UserGreeting;
