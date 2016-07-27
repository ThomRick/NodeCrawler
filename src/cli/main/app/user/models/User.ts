/**
 * User
 */
interface User {
    id: string;
    name: string;
    connected: boolean;
    securityToken: string;
}

export default User;