export const fetchUser = () => {
    const userInfo = localStorage.getItem('user inspired') !== 'undefined' ? JSON.parse(localStorage.getItem('user inspired')) : localStorage.clear();

    return userInfo;
}
