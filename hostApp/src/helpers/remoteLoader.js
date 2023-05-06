const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};


export const loadRemoteComponent = (app) => async () => {
    await loadScript(app.url);
    const container = window[app.remoteId];
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[app.remoteId].get(`./${app.appId}`);
    const module = factory();
    return module;
};