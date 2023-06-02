const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};


export const loadRemoteComponent = ({url, scope, widget}) => async () => {
  await loadScript(url);
  const container = window[scope];
  await container.init(__webpack_share_scopes__.default);
  const factory = await container.get(widget);
  const module = factory();
  return module;
};