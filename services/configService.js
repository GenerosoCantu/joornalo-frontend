

const initAgent = (context) => {

  let userAgent
  if (process.browser) {
    userAgent = navigator.userAgent
  } else {
    userAgent = context.req.headers['user-agent']
  }

  const mobilex = userAgent.match(/(Mobile)/g);
  const android = userAgent.match(/(Android)/g);
  const iPad = userAgent.match(/(iPad)/g);

  const mobile = Boolean(mobilex) && !iPad;
  const tablet = (!mobilex && Boolean(android)) || Boolean(iPad);
  const desktop = !mobile && !tablet;

  return ((desktop || tablet) ? 'desktop' : 'mobile');

};


export default initAgent;