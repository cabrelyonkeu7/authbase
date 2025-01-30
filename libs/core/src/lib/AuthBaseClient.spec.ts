import { AuthBaseClient } from './AuthBaseClient';

describe('AuthBaseClient', () => {
    let authClient: AuthBaseClient;

    beforeEach(() => {
        authClient = new AuthBaseClient({
            apiLoginUrl: 'https://example.com/login',
            apiRegisterUrl: 'https://example.com/register',
            enable2FA: true,
            enableBiometrics: true,
            oauthProviders: [
                {
                    name: 'google',
                    clientId: 'google-client-id',
                    clientSecret: 'google-client-secret',
                    authorizeUrl: 'https://accounts.google.com/o/oauth2/auth',
                    tokenUrl: 'https://oauth2.googleapis.com/token',
                    userInfoUrl: 'https://www.googleapis.com/oauth2/v3/userinfo',
                    redirectUrl: 'https://example.com/callback',
                    scopes: ['profile', 'email']
                }
            ]
        });
    });

    it('should initialize with the correct configuration', () => {
        expect(authClient).toBeTruthy();
        expect(authClient['apiLoginUrl']).toBe('https://example.com/login');
        expect(authClient['apiRegisterUrl']).toBe('https://example.com/register');
        expect(authClient['enable2FA']).toBe(true);
        expect(authClient['enableBiometrics']).toBe(true);
        expect(authClient['oauthProviders'].length).toBe(1);
        expect(authClient['oauthProviders'][0].name).toBe('google');
    });

    it('should return null token initially', () => {
        expect(authClient.getToken()).toBeNull();
    });

    it('should set and get token correctly', () => {
        authClient.setToken('test-token');
        expect(authClient.getToken()).toBe('test-token');
    });

    it('should handle empty oauthProviders array', () => {
        const client = new AuthBaseClient({
            apiLoginUrl: 'https://example.com/login',
            apiRegisterUrl: 'https://example.com/register'
        });
        expect(client['oauthProviders'].length).toBe(0);
    });

    it('should handle missing optional fields', () => {
        const client = new AuthBaseClient({
            apiLoginUrl: 'https://example.com/login',
            apiRegisterUrl: 'https://example.com/register'
        });
        expect(client['enable2FA']).toBe(false);
        expect(client['enableBiometrics']).toBe(false);
    });
});