// get host-env - if local based on env otherwise get it from url
const getHostEnv = (host, env) => {
  if (host === 'localhost:8000' || host === 'localhost') {
    switch (env) {
      case 'test':
        return 'test';
      default:
        return 'local';
    }
  } else {
    const tmp = host.split('.');
    if (tmp[1] && tmp[1].length > 0) {
      return tmp[1];
    }
  }

  return false;
};

export function config() {
  let conf = {};
  const host = window.location.hostname;
  const env = process.env.NODE_ENV;

  const confs = {
    local: {
      apiUrl: 'http://localhost:3000',
      loginUrl: 'http://localhost:3000',
      logout: '/',
      salt: 'placeholder',
      devTool: true
    },
  };

  const hostEnv = getHostEnv(host, env);
  conf = (hostEnv) ? confs[getHostEnv(host, env)] : confs.prod;

  return conf;
}
