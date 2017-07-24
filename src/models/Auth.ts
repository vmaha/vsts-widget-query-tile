export class Auth {

    private readonly localStorageKeys = {
        accountName: "login_account_name",
        personalAccessToken: "login_personal_access_token",
    };

    private get accountName(): string {
        return localStorage.getItem(this.localStorageKeys.accountName);
    }

    public get personalAccessToken(): string {
        return localStorage.getItem(this.localStorageKeys.personalAccessToken);
    }

    private get redirectUrl(): string {
        let value = localStorage.getItem(this.localStorageKeys.redirectUrl);
        if (value == null) {
            return "/";
        }
    }

    public needsCredentials(): boolean {        
        return (
            this.accountName != null && 
            this.personalAccessToken != null
        );
    }

    public loginIfNeeded() {
        if (!this.needsCredentials()) {
            window.location.href = `/login?redirectUrl=${window.location.href}`;
        }
    }
}