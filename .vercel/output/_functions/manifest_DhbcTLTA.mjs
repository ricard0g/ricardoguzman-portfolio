import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_Bs5cAFeF.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_BgioZicv.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_Be5oAZ2o.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/","cacheDir":"file:///Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/node_modules/.astro/","outDir":"file:///Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/dist/","srcDir":"file:///Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/","publicDir":"file:///Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/public/","buildClientDir":"file:///Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/dist/client/","buildServerDir":"file:///Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D6POxEzN.css"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D6POxEzN.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[{"route":"/en/","isIndex":true,"type":"fallback","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/index.astro","pathname":"/en/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://ricardoguzdev.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/entrypoint":"entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DhbcTLTA.mjs","/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_HvWZ--J9.mjs","/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DfhY8J-q.js","/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/components/FloatingBlogLink.astro?astro&type=script&index=0&lang.ts":"_astro/FloatingBlogLink.astro_astro_type_script_index_0_lang.B6LEU4Gx.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/components/Header.astro?astro&type=script&index=0&lang.ts","function s(){const i=document.querySelectorAll(\".nav__inner-link\");i&&i.forEach(e=>{e.addEventListener(\"click\",r=>{r.preventDefault();const t=e.getAttribute(\"href\");if(t&&t.startsWith(\"#\")){const n=document.querySelector(t);n&&n.scrollIntoView({behavior:\"smooth\"})}})})}function d(){const i=document.getElementById(\"burger-btn\"),e=document.getElementById(\"nav-mobile__menu\");if(!i||!e)return;i.addEventListener(\"click\",()=>{e.classList.toggle(\"hidden\")}),e.querySelectorAll(\"a.nav-mobile__inner-link\").forEach(t=>{t.addEventListener(\"click\",n=>{n.preventDefault();const o=t.getAttribute(\"href\");if(o&&o.startsWith(\"#\")){const c=document.querySelector(o);c&&c.scrollIntoView({behavior:\"smooth\"})}e.classList.add(\"hidden\")})}),document.addEventListener(\"click\",t=>{const n=t.target;!e.contains(n)&&!i.contains(n)&&e.classList.add(\"hidden\")})}screen.availWidth<1151?document.addEventListener(\"DOMContentLoaded\",()=>{d()}):document.addEventListener(\"DOMContentLoaded\",()=>s());"],["/Users/ricardoguzman/Documents/code/personalProjects/ricardoguzman-portfolio/src/components/FloatingBlogLink.astro?astro&type=script&index=0&lang.ts","const i=document.getElementById(\"floating-blog-link\");let o=window.scrollY,n=0,t=!1;function r(){const l=window.scrollY,e=l-o;n+=e*.2,i.style.transform=`rotate(${n}deg)`,o=l,t=!1}function a(){t||(requestAnimationFrame(r),t=!0)}window.addEventListener(\"scroll\",a,{passive:!0});"]],"assets":["/_astro/portfolio-screenshot-modified.DMDeK_se.webp","/_astro/foto-personal-modified.BN1AkV4Z.webp","/_astro/pexels-adrien-olichon-1257089-2387793.DKg5INpf.webp","/_astro/abstrakct_screenshot.DQ0sR_Tp.webp","/_astro/coffetopia_screenshot.C9-pucLv.webp","/_astro/conviertlo-screenshot.Cz6PHmnZ.webp","/_astro/sartorial_store_screenshot.C68W38u6.webp","/_astro/expensitrack_screenshot.B5vXCHTO.webp","/_astro/index.D6POxEzN.css","/favicon.png","/favicon.svg","/robots.txt"],"i18n":{"fallback":{"en":"es"},"fallbackType":"rewrite","strategy":"pathname-prefix-other-locales","locales":["es","en"],"defaultLocale":"es","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"i3djk8ZDBZzXeZYL8Ry8MztMBvoGLF7LbIKD46nSQOo="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
