const storage = {
    setValueIntoKey(key: string, value: any) {
      localStorage.setItem(key, value);
    },
    getValueFromKey(key: string) {
      return localStorage.getItem(key) as string;
    },
    setObjectIntoKey(key: string, obj: {}) {
      localStorage.setItem(key, JSON.stringify(obj));
    },
    getObjectFromKey(key: string) {
      return JSON.parse(localStorage.getItem(key) || "{}");
    },
    setAccessToken(token: string) {
      this.setValueIntoKey("token", token);
    },
    setRefreshToken(refreshToken: string) {
      this.setValueIntoKey("refreshToken", refreshToken);
    },
    getAccessToken() {
      const token: string = this.getValueFromKey("token");
      if (!token) return null;
      return token;
    },
    getRefreshToken() {
      const token = this.getValueFromKey("refreshToken");
      if (!token) return "";
      return token;
    },
    getLanguage() {
      return this.getValueFromKey("lang");
    },
    setAWSCognitoAuthInfo(authInfo: {
      clientId: string;
      idToken: string;
      accessToken: string;
      refreshToken: string;
      username: string;
      clockDrift: string;
    }) {
      const keyPrefix = `CognitoIdentityServiceProvider.${authInfo.clientId}`;
      const idTokenKey = `${keyPrefix}.${authInfo.username}.idToken`;
      const accessTokenKey = `${keyPrefix}.${authInfo.username}.accessToken`;
      const refreshTokenKey = `${keyPrefix}.${authInfo.username}.refreshToken`;
      const clockDriftKey = `${keyPrefix}.${authInfo.username}.clockDrift`;
      const lastUserKey = `${keyPrefix}.LastAuthUser`;
      storage.setValueIntoKey(idTokenKey, authInfo.idToken);
      storage.setValueIntoKey(accessTokenKey, authInfo.accessToken);
      storage.setValueIntoKey(refreshTokenKey, authInfo.refreshToken);
      storage.setValueIntoKey(clockDriftKey, authInfo.clockDrift);
      storage.setValueIntoKey(lastUserKey, authInfo.username);
    },
    removeAWSCognitoAuthInfo() {
      Object.keys(localStorage)
        .filter((x) => x?.startsWith("CognitoIdentityServiceProvider"))
        .forEach((x) => localStorage.removeItem(x));
    },
    removeAccessToken() {
      this.removeAWSCognitoAuthInfo();
      const token = this.getAccessToken();
      if (!token) return null;
      localStorage.removeItem("token");
    },
    removeRefreshToken() {
      const token = this.getRefreshToken();
      if (!token) return null;
      localStorage.removeItem("refreshToken");
    },
    removePersist() {
      localStorage.removeItem("persist:app");
    },
    removeLanguage() {
      localStorage.removeItem("lang");
    },
    clearStorage() {
      localStorage.clear();
    },
  };
  
  export default storage;
  