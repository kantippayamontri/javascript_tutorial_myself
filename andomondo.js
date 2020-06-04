require('cross-fetch/polyfill');
const { Api, MobileApi } = require('endomondo-api-handler');

(async () => {
    const api = new Api();
    const mobileApi = new MobileApi();

    await Promise.all([
        api.login(login, password),
        mobileApi.login(login, password),
    ]);

    console.log(await api.get('rest/session'));
})();