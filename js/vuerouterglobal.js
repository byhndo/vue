From: <Saved by Blink>
Snapshot-Content-Location: https://unpkg.com/vue-router@4.5.1/dist/vue-router.global.js
Subject: 
Date: Fri, 18 Jul 2025 14:21:59 +0700
MIME-Version: 1.0
Content-Type: multipart/related;
	type="text/html";
	boundary="----MultipartBoundary--MP3SZvAastFQEt5NQ1W4QjUkVUv5TfwoVM2o1m2o7S----"


------MultipartBoundary--MP3SZvAastFQEt5NQ1W4QjUkVUv5TfwoVM2o1m2o7S----
Content-Type: text/html
Content-ID: <frame-0E2937033B1A1B6C2D20F22C4D6728C1@mhtml.blink>
Content-Transfer-Encoding: quoted-printable
Content-Location: https://unpkg.com/vue-router@4.5.1/dist/vue-router.global.js

<html><head><meta http-equiv=3D"Content-Type" content=3D"text/html; charset=
=3DUTF-8"><link rel=3D"stylesheet" type=3D"text/css" href=3D"cid:css-4011e7=
86-d93d-406f-9949-3cdd95c772ab@mhtml.blink" /><meta name=3D"color-scheme" c=
ontent=3D"light dark"></head><body><pre style=3D"word-wrap: break-word; whi=
te-space: pre-wrap;">/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
var VueRouter =3D (function (exports, vue) {
  'use strict';

  const isBrowser =3D typeof document !=3D=3D 'undefined';

  /**
   * Allows differentiating lazy components from functional components and =
vue-class-component
   * @internal
   *
   * @param component
   */
  function isRouteComponent(component) {
      return (typeof component =3D=3D=3D 'object' ||
          'displayName' in component ||
          'props' in component ||
          '__vccOpts' in component);
  }
  function isESModule(obj) {
      return (obj.__esModule ||
          obj[Symbol.toStringTag] =3D=3D=3D 'Module' ||
          // support CF with dynamic imports that do not
          // add the Module string tag
          (obj.default &amp;&amp; isRouteComponent(obj.default)));
  }
  const assign =3D Object.assign;
  function applyToParams(fn, params) {
      const newParams =3D {};
      for (const key in params) {
          const value =3D params[key];
          newParams[key] =3D isArray(value)
              ? value.map(fn)
              : fn(value);
      }
      return newParams;
  }
  const noop =3D () =3D&gt; { };
  /**
   * Typesafe alternative to Array.isArray
   * https://github.com/microsoft/TypeScript/pull/48228
   */
  const isArray =3D Array.isArray;

  function warn(msg) {
      // avoid using ...args as it breaks in older Edge builds
      const args =3D Array.from(arguments).slice(1);
      console.warn.apply(console, ['[Vue Router warn]: ' + msg].concat(args=
));
  }

  /**
   * Encoding Rules (=E2=90=A3 =3D Space)
   * - Path: =E2=90=A3 " &lt; &gt; # ? { }
   * - Query: =E2=90=A3 " &lt; &gt; # &amp; =3D
   * - Hash: =E2=90=A3 " &lt; &gt; `
   *
   * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#secti=
on-2.2)
   * defines some extra characters to be encoded. Most browsers do not enco=
de them
   * in encodeURI https://github.com/whatwg/url/issues/369, so it may be sa=
fer to
   * also encode `!'()*`. Leaving un-encoded only ASCII alphanumeric(`a-zA-=
Z0-9`)
   * plus `-._~`. This extra safety should be applied to query by patching =
the
   * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `=
\`
   * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a=
 `\`
   * into a `/` if directly typed in. The _backtick_ (`````) should also be
   * encoded everywhere because some browsers like FF encode it when direct=
ly
   * written while others don't. Safari and IE don't encode ``"&lt;&gt;{}``=
` in hash.
   */
  // const EXTRA_RESERVED_RE =3D /[!'()*]/g
  // const encodeReservedReplacer =3D (c: string) =3D&gt; '%' + c.charCodeA=
t(0).toString(16)
  const HASH_RE =3D /#/g; // %23
  const AMPERSAND_RE =3D /&amp;/g; // %26
  const SLASH_RE =3D /\//g; // %2F
  const EQUAL_RE =3D /=3D/g; // %3D
  const IM_RE =3D /\?/g; // %3F
  const PLUS_RE =3D /\+/g; // %2B
  /**
   * NOTE: It's not clear to me if we should encode the + symbol in queries=
, it
   * seems to be less flexible than not doing so and I can't find out the l=
egacy
   * systems requiring this for regular requests like text/html. In the sta=
ndard,
   * the encoding of the plus character is only mentioned for
   * application/x-www-form-urlencoded
   * (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers se=
ems lo
   * leave the plus character as is in queries. To be more flexible, we all=
ow the
   * plus character on the query, but it can also be manually encoded by th=
e user.
   *
   * Resources:
   * - https://url.spec.whatwg.org/#urlencoded-parsing
   * - https://stackoverflow.com/questions/1634271/url-encoding-the-space-c=
haracter-or-20
   */
  const ENC_BRACKET_OPEN_RE =3D /%5B/g; // [
  const ENC_BRACKET_CLOSE_RE =3D /%5D/g; // ]
  const ENC_CARET_RE =3D /%5E/g; // ^
  const ENC_BACKTICK_RE =3D /%60/g; // `
  const ENC_CURLY_OPEN_RE =3D /%7B/g; // {
  const ENC_PIPE_RE =3D /%7C/g; // |
  const ENC_CURLY_CLOSE_RE =3D /%7D/g; // }
  const ENC_SPACE_RE =3D /%20/g; // }
  /**
   * Encode characters that need to be encoded on the path, search and hash
   * sections of the URL.
   *
   * @internal
   * @param text - string to encode
   * @returns encoded string
   */
  function commonEncode(text) {
      return encodeURI('' + text)
          .replace(ENC_PIPE_RE, '|')
          .replace(ENC_BRACKET_OPEN_RE, '[')
          .replace(ENC_BRACKET_CLOSE_RE, ']');
  }
  /**
   * Encode characters that need to be encoded on the hash section of the U=
RL.
   *
   * @param text - string to encode
   * @returns encoded string
   */
  function encodeHash(text) {
      return commonEncode(text)
          .replace(ENC_CURLY_OPEN_RE, '{')
          .replace(ENC_CURLY_CLOSE_RE, '}')
          .replace(ENC_CARET_RE, '^');
  }
  /**
   * Encode characters that need to be encoded query values on the query
   * section of the URL.
   *
   * @param text - string to encode
   * @returns encoded string
   */
  function encodeQueryValue(text) {
      return (commonEncode(text)
          // Encode the space as +, encode the + to differentiate it from t=
he space
          .replace(PLUS_RE, '%2B')
          .replace(ENC_SPACE_RE, '+')
          .replace(HASH_RE, '%23')
          .replace(AMPERSAND_RE, '%26')
          .replace(ENC_BACKTICK_RE, '`')
          .replace(ENC_CURLY_OPEN_RE, '{')
          .replace(ENC_CURLY_CLOSE_RE, '}')
          .replace(ENC_CARET_RE, '^'));
  }
  /**
   * Like `encodeQueryValue` but also encodes the `=3D` character.
   *
   * @param text - string to encode
   */
  function encodeQueryKey(text) {
      return encodeQueryValue(text).replace(EQUAL_RE, '%3D');
  }
  /**
   * Encode characters that need to be encoded on the path section of the U=
RL.
   *
   * @param text - string to encode
   * @returns encoded string
   */
  function encodePath(text) {
      return commonEncode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F=
');
  }
  /**
   * Encode characters that need to be encoded on the path section of the U=
RL as a
   * param. This function encodes everything {@link encodePath} does plus t=
he
   * slash (`/`) character. If `text` is `null` or `undefined`, returns an =
empty
   * string instead.
   *
   * @param text - string to encode
   * @returns encoded string
   */
  function encodeParam(text) {
      return text =3D=3D null ? '' : encodePath(text).replace(SLASH_RE, '%2=
F');
  }
  /**
   * Decode text using `decodeURIComponent`. Returns the original text if i=
t
   * fails.
   *
   * @param text - string to decode
   * @returns decoded string
   */
  function decode(text) {
      try {
          return decodeURIComponent('' + text);
      }
      catch (err) {
          warn(`Error decoding "${text}". Using original value`);
      }
      return '' + text;
  }

  const TRAILING_SLASH_RE =3D /\/$/;
  const removeTrailingSlash =3D (path) =3D&gt; path.replace(TRAILING_SLASH_=
RE, '');
  /**
   * Transforms a URI into a normalized history location
   *
   * @param parseQuery
   * @param location - URI to normalize
   * @param currentLocation - current absolute location. Allows resolving r=
elative
   * paths. Must start with `/`. Defaults to `/`
   * @returns a normalized history location
   */
  function parseURL(parseQuery, location, currentLocation =3D '/') {
      let path, query =3D {}, searchString =3D '', hash =3D '';
      // Could use URL and URLSearchParams but IE 11 doesn't support it
      // TODO: move to new URL()
      const hashPos =3D location.indexOf('#');
      let searchPos =3D location.indexOf('?');
      // the hash appears before the search, so it's not part of the search=
 string
      if (hashPos &lt; searchPos &amp;&amp; hashPos &gt;=3D 0) {
          searchPos =3D -1;
      }
      if (searchPos &gt; -1) {
          path =3D location.slice(0, searchPos);
          searchString =3D location.slice(searchPos + 1, hashPos &gt; -1 ? =
hashPos : location.length);
          query =3D parseQuery(searchString);
      }
      if (hashPos &gt; -1) {
          path =3D path || location.slice(0, hashPos);
          // keep the # character
          hash =3D location.slice(hashPos, location.length);
      }
      // no search and no query
      path =3D resolveRelativePath(path !=3D null ? path : location, curren=
tLocation);
      // empty path means a relative query or hash `?foo=3Df`, `#thing`
      return {
          fullPath: path + (searchString &amp;&amp; '?') + searchString + h=
ash,
          path,
          query,
          hash: decode(hash),
      };
  }
  /**
   * Stringifies a URL object
   *
   * @param stringifyQuery
   * @param location
   */
  function stringifyURL(stringifyQuery, location) {
      const query =3D location.query ? stringifyQuery(location.query) : '';
      return location.path + (query &amp;&amp; '?') + query + (location.has=
h || '');
  }
  /**
   * Strips off the base from the beginning of a location.pathname in a non=
-case-sensitive way.
   *
   * @param pathname - location.pathname
   * @param base - base to strip off
   */
  function stripBase(pathname, base) {
      // no base or base is not found at the beginning
      if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
          return pathname;
      return pathname.slice(base.length) || '/';
  }
  /**
   * Checks if two RouteLocation are equal. This means that both locations =
are
   * pointing towards the same {@link RouteRecord} and that all `params`, `=
query`
   * parameters and `hash` are the same
   *
   * @param stringifyQuery - A function that takes a query object of type L=
ocationQueryRaw and returns a string representation of it.
   * @param a - first {@link RouteLocation}
   * @param b - second {@link RouteLocation}
   */
  function isSameRouteLocation(stringifyQuery, a, b) {
      const aLastIndex =3D a.matched.length - 1;
      const bLastIndex =3D b.matched.length - 1;
      return (aLastIndex &gt; -1 &amp;&amp;
          aLastIndex =3D=3D=3D bLastIndex &amp;&amp;
          isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) &=
amp;&amp;
          isSameRouteLocationParams(a.params, b.params) &amp;&amp;
          stringifyQuery(a.query) =3D=3D=3D stringifyQuery(b.query) &amp;&a=
mp;
          a.hash =3D=3D=3D b.hash);
  }
  /**
   * Check if two `RouteRecords` are equal. Takes into account aliases: the=
y are
   * considered equal to the `RouteRecord` they are aliasing.
   *
   * @param a - first {@link RouteRecord}
   * @param b - second {@link RouteRecord}
   */
  function isSameRouteRecord(a, b) {
      // since the original record has an undefined value for aliasOf
      // but all aliases point to the original record, this will always com=
pare
      // the original record
      return (a.aliasOf || a) =3D=3D=3D (b.aliasOf || b);
  }
  function isSameRouteLocationParams(a, b) {
      if (Object.keys(a).length !=3D=3D Object.keys(b).length)
          return false;
      for (const key in a) {
          if (!isSameRouteLocationParamsValue(a[key], b[key]))
              return false;
      }
      return true;
  }
  function isSameRouteLocationParamsValue(a, b) {
      return isArray(a)
          ? isEquivalentArray(a, b)
          : isArray(b)
              ? isEquivalentArray(b, a)
              : a =3D=3D=3D b;
  }
  /**
   * Check if two arrays are the same or if an array with one single entry =
is the
   * same as another primitive value. Used to check query and parameters
   *
   * @param a - array of values
   * @param b - array of values or a single value
   */
  function isEquivalentArray(a, b) {
      return isArray(b)
          ? a.length =3D=3D=3D b.length &amp;&amp; a.every((value, i) =3D&g=
t; value =3D=3D=3D b[i])
          : a.length =3D=3D=3D 1 &amp;&amp; a[0] =3D=3D=3D b;
  }
  /**
   * Resolves a relative path that starts with `.`.
   *
   * @param to - path location we are resolving
   * @param from - currentLocation.path, should start with `/`
   */
  function resolveRelativePath(to, from) {
      if (to.startsWith('/'))
          return to;
      if (!from.startsWith('/')) {
          warn(`Cannot resolve a relative location without an absolute path=
. Trying to resolve "${to}" from "${from}". It should look like "/${from}".=
`);
          return to;
      }
      if (!to)
          return from;
      const fromSegments =3D from.split('/');
      const toSegments =3D to.split('/');
      const lastToSegment =3D toSegments[toSegments.length - 1];
      // make . and ./ the same (../ =3D=3D=3D .., ../../ =3D=3D=3D ../..)
      // this is the same behavior as new URL()
      if (lastToSegment =3D=3D=3D '..' || lastToSegment =3D=3D=3D '.') {
          toSegments.push('');
      }
      let position =3D fromSegments.length - 1;
      let toPosition;
      let segment;
      for (toPosition =3D 0; toPosition &lt; toSegments.length; toPosition+=
+) {
          segment =3D toSegments[toPosition];
          // we stay on the same position
          if (segment =3D=3D=3D '.')
              continue;
          // go up in the from array
          if (segment =3D=3D=3D '..') {
              // we can't go below zero, but we still need to increment toP=
osition
              if (position &gt; 1)
                  position--;
              // continue
          }
          // we reached a non-relative path, we stop here
          else
              break;
      }
      return (fromSegments.slice(0, position).join('/') +
          '/' +
          toSegments.slice(toPosition).join('/'));
  }
  /**
   * Initial route location where the router is. Can be used in navigation =
guards
   * to differentiate the initial navigation.
   *
   * @example
   * ```js
   * import { START_LOCATION } from 'vue-router'
   *
   * router.beforeEach((to, from) =3D&gt; {
   *   if (from =3D=3D=3D START_LOCATION) {
   *     // initial navigation
   *   }
   * })
   * ```
   */
  const START_LOCATION_NORMALIZED =3D {
      path: '/',
      // TODO: could we use a symbol in the future?
      name: undefined,
      params: {},
      query: {},
      hash: '',
      fullPath: '/',
      matched: [],
      meta: {},
      redirectedFrom: undefined,
  };

  var NavigationType;
  (function (NavigationType) {
      NavigationType["pop"] =3D "pop";
      NavigationType["push"] =3D "push";
  })(NavigationType || (NavigationType =3D {}));
  var NavigationDirection;
  (function (NavigationDirection) {
      NavigationDirection["back"] =3D "back";
      NavigationDirection["forward"] =3D "forward";
      NavigationDirection["unknown"] =3D "";
  })(NavigationDirection || (NavigationDirection =3D {}));
  /**
   * Starting location for Histories
   */
  const START =3D '';
  // Generic utils
  /**
   * Normalizes a base by removing any trailing slash and reading the base =
tag if
   * present.
   *
   * @param base - base to normalize
   */
  function normalizeBase(base) {
      if (!base) {
          if (isBrowser) {
              // respect &lt;base&gt; tag
              const baseEl =3D document.querySelector('base');
              base =3D (baseEl &amp;&amp; baseEl.getAttribute('href')) || '=
/';
              // strip full URL origin
              base =3D base.replace(/^\w+:\/\/[^\/]+/, '');
          }
          else {
              base =3D '/';
          }
      }
      // ensure leading slash when it was removed by the regex above avoid =
leading
      // slash with hash because the file could be read from the disk like =
file://
      // and the leading slash would cause problems
      if (base[0] !=3D=3D '/' &amp;&amp; base[0] !=3D=3D '#')
          base =3D '/' + base;
      // remove the trailing slash so all other method can just do `base + =
fullPath`
      // to build an href
      return removeTrailingSlash(base);
  }
  // remove any character before the hash
  const BEFORE_HASH_RE =3D /^[^#]+#/;
  function createHref(base, location) {
      return base.replace(BEFORE_HASH_RE, '#') + location;
  }

  function getElementPosition(el, offset) {
      const docRect =3D document.documentElement.getBoundingClientRect();
      const elRect =3D el.getBoundingClientRect();
      return {
          behavior: offset.behavior,
          left: elRect.left - docRect.left - (offset.left || 0),
          top: elRect.top - docRect.top - (offset.top || 0),
      };
  }
  const computeScrollPosition =3D () =3D&gt; ({
      left: window.scrollX,
      top: window.scrollY,
  });
  function scrollToPosition(position) {
      let scrollToOptions;
      if ('el' in position) {
          const positionEl =3D position.el;
          const isIdSelector =3D typeof positionEl =3D=3D=3D 'string' &amp;=
&amp; positionEl.startsWith('#');
          /**
           * `id`s can accept pretty much any characters, including CSS com=
binators
           * like `&gt;` or `~`. It's still possible to retrieve elements u=
sing
           * `document.getElementById('~')` but it needs to be escaped when=
 using
           * `document.querySelector('#\\~')` for it to be valid. The only
           * requirements for `id`s are them to be unique on the page and t=
o not be
           * empty (`id=3D""`). Because of that, when passing an id selecto=
r, it should
           * be properly escaped for it to work with `querySelector`. We co=
uld check
           * for the id selector to be simple (no CSS combinators `+ &gt;~`=
) but that
           * would make things inconsistent since they are valid characters=
 for an
           * `id` but would need to be escaped when using `querySelector`, =
breaking
           * their usage and ending up in no selector returned. Selectors n=
eed to be
           * escaped:
           *
           * - `#1-thing` becomes `#\31 -thing`
           * - `#with~symbols` becomes `#with\\~symbols`
           *
           * - More information about  the topic can be found at
           *   https://mathiasbynens.be/notes/html5-id-class.
           * - Practical example: https://mathiasbynens.be/demo/html5-id
           */
          if (typeof position.el =3D=3D=3D 'string') {
              if (!isIdSelector || !document.getElementById(position.el.sli=
ce(1))) {
                  try {
                      const foundEl =3D document.querySelector(position.el)=
;
                      if (isIdSelector &amp;&amp; foundEl) {
                          warn(`The selector "${position.el}" should be pas=
sed as "el: document.querySelector('${position.el}')" because it starts wit=
h "#".`);
                          // return to avoid other warnings
                          return;
                      }
                  }
                  catch (err) {
                      warn(`The selector "${position.el}" is invalid. If yo=
u are using an id selector, make sure to escape it. You can find more infor=
mation about escaping characters in selectors at https://mathiasbynens.be/n=
otes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/doc=
s/Web/API/CSS/escape).`);
                      // return to avoid other warnings
                      return;
                  }
              }
          }
          const el =3D typeof positionEl =3D=3D=3D 'string'
              ? isIdSelector
                  ? document.getElementById(positionEl.slice(1))
                  : document.querySelector(positionEl)
              : positionEl;
          if (!el) {
              warn(`Couldn't find element using selector "${position.el}" r=
eturned by scrollBehavior.`);
              return;
          }
          scrollToOptions =3D getElementPosition(el, position);
      }
      else {
          scrollToOptions =3D position;
      }
      if ('scrollBehavior' in document.documentElement.style)
          window.scrollTo(scrollToOptions);
      else {
          window.scrollTo(scrollToOptions.left !=3D null ? scrollToOptions.=
left : window.scrollX, scrollToOptions.top !=3D null ? scrollToOptions.top =
: window.scrollY);
      }
  }
  function getScrollKey(path, delta) {
      const position =3D history.state ? history.state.position - delta : -=
1;
      return position + path;
  }
  const scrollPositions =3D new Map();
  function saveScrollPosition(key, scrollPosition) {
      scrollPositions.set(key, scrollPosition);
  }
  function getSavedScrollPosition(key) {
      const scroll =3D scrollPositions.get(key);
      // consume it so it's not used again
      scrollPositions.delete(key);
      return scroll;
  }
  // TODO: RFC about how to save scroll position
  /**
   * ScrollBehavior instance used by the router to compute and restore the =
scroll
   * position when navigating.
   */
  // export interface ScrollHandler&lt;ScrollPositionEntry extends HistoryS=
tateValue, ScrollPosition extends ScrollPositionEntry&gt; {
  //   // returns a scroll position that can be saved in history
  //   compute(): ScrollPositionEntry
  //   // can take an extended ScrollPositionEntry
  //   scroll(position: ScrollPosition): void
  // }
  // export const scrollHandler: ScrollHandler&lt;ScrollPosition&gt; =3D {
  //   compute: computeScroll,
  //   scroll: scrollToPosition,
  // }

  let createBaseLocation =3D () =3D&gt; location.protocol + '//' + location=
.host;
  /**
   * Creates a normalized history location from a window.location object
   * @param base - The base path
   * @param location - The window.location object
   */
  function createCurrentLocation(base, location) {
      const { pathname, search, hash } =3D location;
      // allows hash bases like #, /#, #/, #!, #!/, /#!/, or even /folder#e=
nd
      const hashPos =3D base.indexOf('#');
      if (hashPos &gt; -1) {
          let slicePos =3D hash.includes(base.slice(hashPos))
              ? base.slice(hashPos).length
              : 1;
          let pathFromHash =3D hash.slice(slicePos);
          // prepend the starting slash to hash so the url starts with /#
          if (pathFromHash[0] !=3D=3D '/')
              pathFromHash =3D '/' + pathFromHash;
          return stripBase(pathFromHash, '');
      }
      const path =3D stripBase(pathname, base);
      return path + search + hash;
  }
  function useHistoryListeners(base, historyState, currentLocation, replace=
) {
      let listeners =3D [];
      let teardowns =3D [];
      // TODO: should it be a stack? a Dict. Check if the popstate listener
      // can trigger twice
      let pauseState =3D null;
      const popStateHandler =3D ({ state, }) =3D&gt; {
          const to =3D createCurrentLocation(base, location);
          const from =3D currentLocation.value;
          const fromState =3D historyState.value;
          let delta =3D 0;
          if (state) {
              currentLocation.value =3D to;
              historyState.value =3D state;
              // ignore the popstate and reset the pauseState
              if (pauseState &amp;&amp; pauseState =3D=3D=3D from) {
                  pauseState =3D null;
                  return;
              }
              delta =3D fromState ? state.position - fromState.position : 0=
;
          }
          else {
              replace(to);
          }
          // Here we could also revert the navigation by calling history.go=
(-delta)
          // this listener will have to be adapted to not trigger again and=
 to wait for the url
          // to be updated before triggering the listeners. Some kind of va=
lidation function would also
          // need to be passed to the listeners so the navigation can be ac=
cepted
          // call all listeners
          listeners.forEach(listener =3D&gt; {
              listener(currentLocation.value, from, {
                  delta,
                  type: NavigationType.pop,
                  direction: delta
                      ? delta &gt; 0
                          ? NavigationDirection.forward
                          : NavigationDirection.back
                      : NavigationDirection.unknown,
              });
          });
      };
      function pauseListeners() {
          pauseState =3D currentLocation.value;
      }
      function listen(callback) {
          // set up the listener and prepare teardown callbacks
          listeners.push(callback);
          const teardown =3D () =3D&gt; {
              const index =3D listeners.indexOf(callback);
              if (index &gt; -1)
                  listeners.splice(index, 1);
          };
          teardowns.push(teardown);
          return teardown;
      }
      function beforeUnloadListener() {
          const { history } =3D window;
          if (!history.state)
              return;
          history.replaceState(assign({}, history.state, { scroll: computeS=
crollPosition() }), '');
      }
      function destroy() {
          for (const teardown of teardowns)
              teardown();
          teardowns =3D [];
          window.removeEventListener('popstate', popStateHandler);
          window.removeEventListener('beforeunload', beforeUnloadListener);
      }
      // set up the listeners and prepare teardown callbacks
      window.addEventListener('popstate', popStateHandler);
      // TODO: could we use 'pagehide' or 'visibilitychange' instead?
      // https://developer.chrome.com/blog/page-lifecycle-api/
      window.addEventListener('beforeunload', beforeUnloadListener, {
          passive: true,
      });
      return {
          pauseListeners,
          listen,
          destroy,
      };
  }
  /**
   * Creates a state object
   */
  function buildState(back, current, forward, replaced =3D false, computeSc=
roll =3D false) {
      return {
          back,
          current,
          forward,
          replaced,
          position: window.history.length,
          scroll: computeScroll ? computeScrollPosition() : null,
      };
  }
  function useHistoryStateNavigation(base) {
      const { history, location } =3D window;
      // private variables
      const currentLocation =3D {
          value: createCurrentLocation(base, location),
      };
      const historyState =3D { value: history.state };
      // build current history entry as this is a fresh navigation
      if (!historyState.value) {
          changeLocation(currentLocation.value, {
              back: null,
              current: currentLocation.value,
              forward: null,
              // the length is off by one, we need to decrease it
              position: history.length - 1,
              replaced: true,
              // don't add a scroll as the user may have an anchor, and we =
want
              // scrollBehavior to be triggered without a saved position
              scroll: null,
          }, true);
      }
      function changeLocation(to, state, replace) {
          /**
           * if a base tag is provided, and we are on a normal domain, we h=
ave to
           * respect the provided `base` attribute because pushState() will=
 use it and
           * potentially erase anything before the `#` like at
           * https://github.com/vuejs/router/issues/685 where a base of
           * `/folder/#` but a base of `/` would erase the `/folder/` secti=
on. If
           * there is no host, the `&lt;base&gt;` tag makes no sense and if=
 there isn't a
           * base tag we can just use everything after the `#`.
           */
          const hashIndex =3D base.indexOf('#');
          const url =3D hashIndex &gt; -1
              ? (location.host &amp;&amp; document.querySelector('base')
                  ? base
                  : base.slice(hashIndex)) + to
              : createBaseLocation() + base + to;
          try {
              // BROWSER QUIRK
              // NOTE: Safari throws a SecurityError when calling this func=
tion 100 times in 30 seconds
              history[replace ? 'replaceState' : 'pushState'](state, '', ur=
l);
              historyState.value =3D state;
          }
          catch (err) {
              {
                  warn('Error with push/replace State', err);
              }
              // Force the navigation, this also resets the call count
              location[replace ? 'replace' : 'assign'](url);
          }
      }
      function replace(to, data) {
          const state =3D assign({}, history.state, buildState(historyState=
.value.back,=20
          // keep back and forward entries but override current position
          to, historyState.value.forward, true), data, { position: historyS=
tate.value.position });
          changeLocation(to, state, true);
          currentLocation.value =3D to;
      }
      function push(to, data) {
          // Add to current entry the information of where we are going
          // as well as saving the current position
          const currentState =3D assign({},=20
          // use current history state to gracefully handle a wrong call to
          // history.replaceState
          // https://github.com/vuejs/router/issues/366
          historyState.value, history.state, {
              forward: to,
              scroll: computeScrollPosition(),
          });
          if (!history.state) {
              warn(`history.state seems to have been manually replaced with=
out preserving the necessary values. Make sure to preserve existing history=
 state if you are manually calling history.replaceState:\n\n` +
                  `history.replaceState(history.state, '', url)\n\n` +
                  `You can find more information at https://router.vuejs.or=
g/guide/migration/#Usage-of-history-state`);
          }
          changeLocation(currentState.current, currentState, true);
          const state =3D assign({}, buildState(currentLocation.value, to, =
null), { position: currentState.position + 1 }, data);
          changeLocation(to, state, false);
          currentLocation.value =3D to;
      }
      return {
          location: currentLocation,
          state: historyState,
          push,
          replace,
      };
  }
  /**
   * Creates an HTML5 history. Most common history for single page applicat=
ions.
   *
   * @param base -
   */
  function createWebHistory(base) {
      base =3D normalizeBase(base);
      const historyNavigation =3D useHistoryStateNavigation(base);
      const historyListeners =3D useHistoryListeners(base, historyNavigatio=
n.state, historyNavigation.location, historyNavigation.replace);
      function go(delta, triggerListeners =3D true) {
          if (!triggerListeners)
              historyListeners.pauseListeners();
          history.go(delta);
      }
      const routerHistory =3D assign({
          // it's overridden right after
          location: '',
          base,
          go,
          createHref: createHref.bind(null, base),
      }, historyNavigation, historyListeners);
      Object.defineProperty(routerHistory, 'location', {
          enumerable: true,
          get: () =3D&gt; historyNavigation.location.value,
      });
      Object.defineProperty(routerHistory, 'state', {
          enumerable: true,
          get: () =3D&gt; historyNavigation.state.value,
      });
      return routerHistory;
  }

  /**
   * Creates an in-memory based history. The main purpose of this history i=
s to handle SSR. It starts in a special location that is nowhere.
   * It's up to the user to replace that location with the starter location=
 by either calling `router.push` or `router.replace`.
   *
   * @param base - Base applied to all urls, defaults to '/'
   * @returns a history object that can be passed to the router constructor
   */
  function createMemoryHistory(base =3D '') {
      let listeners =3D [];
      let queue =3D [[START, {}]];
      let position =3D 0;
      base =3D normalizeBase(base);
      function setLocation(location, state =3D {}) {
          position++;
          if (position !=3D=3D queue.length) {
              // we are in the middle, we remove everything from here in th=
e queue
              queue.splice(position);
          }
          queue.push([location, state]);
      }
      function triggerListeners(to, from, { direction, delta }) {
          const info =3D {
              direction,
              delta,
              type: NavigationType.pop,
          };
          for (const callback of listeners) {
              callback(to, from, info);
          }
      }
      const routerHistory =3D {
          // rewritten by Object.defineProperty
          location: START,
          // rewritten by Object.defineProperty
          state: {},
          base,
          createHref: createHref.bind(null, base),
          replace(to, state) {
              // remove current entry and decrement position
              queue.splice(position--, 1);
              setLocation(to, state);
          },
          push(to, state) {
              setLocation(to, state);
          },
          listen(callback) {
              listeners.push(callback);
              return () =3D&gt; {
                  const index =3D listeners.indexOf(callback);
                  if (index &gt; -1)
                      listeners.splice(index, 1);
              };
          },
          destroy() {
              listeners =3D [];
              queue =3D [[START, {}]];
              position =3D 0;
          },
          go(delta, shouldTrigger =3D true) {
              const from =3D this.location;
              const direction =3D=20
              // we are considering delta =3D=3D=3D 0 going forward, but in=
 abstract mode
              // using 0 for the delta doesn't make sense like it does in h=
tml5 where
              // it reloads the page
              delta &lt; 0 ? NavigationDirection.back : NavigationDirection=
.forward;
              position =3D Math.max(0, Math.min(position + delta, queue.len=
gth - 1));
              if (shouldTrigger) {
                  triggerListeners(this.location, from, {
                      direction,
                      delta,
                  });
              }
          },
      };
      Object.defineProperty(routerHistory, 'location', {
          enumerable: true,
          get: () =3D&gt; queue[position][0],
      });
      Object.defineProperty(routerHistory, 'state', {
          enumerable: true,
          get: () =3D&gt; queue[position][1],
      });
      return routerHistory;
  }

  /**
   * Creates a hash history. Useful for web applications with no host (e.g.=
 `file://`) or when configuring a server to
   * handle any URL is not possible.
   *
   * @param base - optional base to provide. Defaults to `location.pathname=
 + location.search` If there is a `&lt;base&gt;` tag
   * in the `head`, its value will be ignored in favor of this parameter **=
but note it affects all the history.pushState()
   * calls**, meaning that if you use a `&lt;base&gt;` tag, it's `href` val=
ue **has to match this parameter** (ignoring anything
   * after the `#`).
   *
   * @example
   * ```js
   * // at https://example.com/folder
   * createWebHashHistory() // gives a url of `https://example.com/folder#`
   * createWebHashHistory('/folder/') // gives a url of `https://example.co=
m/folder/#`
   * // if the `#` is provided in the base, it won't be added by `createWeb=
HashHistory`
   * createWebHashHistory('/folder/#/app/') // gives a url of `https://exam=
ple.com/folder/#/app/`
   * // you should avoid doing this because it changes the original url and=
 breaks copying urls
   * createWebHashHistory('/other-folder/') // gives a url of `https://exam=
ple.com/other-folder/#`
   *
   * // at file:///usr/etc/folder/index.html
   * // for locations with no `host`, the base is ignored
   * createWebHashHistory('/iAmIgnored') // gives a url of `file:///usr/etc=
/folder/index.html#`
   * ```
   */
  function createWebHashHistory(base) {
      // Make sure this implementation is fine in terms of encoding, specia=
lly for IE11
      // for `file://`, directly use the pathname and ignore the base
      // location.pathname contains an initial `/` even at the root: `https=
://example.com`
      base =3D location.host ? base || location.pathname + location.search =
: '';
      // allow the user to provide a `#` in the middle: `/base/#/app`
      if (!base.includes('#'))
          base +=3D '#';
      if (!base.endsWith('#/') &amp;&amp; !base.endsWith('#')) {
          warn(`A hash base must end with a "#":\n"${base}" should be "${ba=
se.replace(/#.*$/, '#')}".`);
      }
      return createWebHistory(base);
  }

  function isRouteLocation(route) {
      return typeof route =3D=3D=3D 'string' || (route &amp;&amp; typeof ro=
ute =3D=3D=3D 'object');
  }
  function isRouteName(name) {
      return typeof name =3D=3D=3D 'string' || typeof name =3D=3D=3D 'symbo=
l';
  }

  const NavigationFailureSymbol =3D Symbol('navigation failure' );
  /**
   * Enumeration with all possible types for navigation failures. Can be pa=
ssed to
   * {@link isNavigationFailure} to check for specific failures.
   */
  exports.NavigationFailureType =3D void 0;
  (function (NavigationFailureType) {
      /**
       * An aborted navigation is a navigation that failed because a naviga=
tion
       * guard returned `false` or called `next(false)`
       */
      NavigationFailureType[NavigationFailureType["aborted"] =3D 4] =3D "ab=
orted";
      /**
       * A cancelled navigation is a navigation that failed because a more =
recent
       * navigation finished started (not necessarily finished).
       */
      NavigationFailureType[NavigationFailureType["cancelled"] =3D 8] =3D "=
cancelled";
      /**
       * A duplicated navigation is a navigation that failed because it was
       * initiated while already being at the exact same location.
       */
      NavigationFailureType[NavigationFailureType["duplicated"] =3D 16] =3D=
 "duplicated";
  })(exports.NavigationFailureType || (exports.NavigationFailureType =3D {}=
));
  // DEV only debug messages
  const ErrorTypeMessages =3D {
      [1 /* ErrorTypes.MATCHER_NOT_FOUND */]({ location, currentLocation })=
 {
          return `No match for\n ${JSON.stringify(location)}${currentLocati=
on
            ? '\nwhile being at\n' + JSON.stringify(currentLocation)
            : ''}`;
      },
      [2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */]({ from, to, }) {
          return `Redirected from "${from.fullPath}" to "${stringifyRoute(t=
o)}" via a navigation guard.`;
      },
      [4 /* ErrorTypes.NAVIGATION_ABORTED */]({ from, to }) {
          return `Navigation aborted from "${from.fullPath}" to "${to.fullP=
ath}" via a navigation guard.`;
      },
      [8 /* ErrorTypes.NAVIGATION_CANCELLED */]({ from, to }) {
          return `Navigation cancelled from "${from.fullPath}" to "${to.ful=
lPath}" with a new navigation.`;
      },
      [16 /* ErrorTypes.NAVIGATION_DUPLICATED */]({ from, to }) {
          return `Avoided redundant navigation to current location: "${from=
.fullPath}".`;
      },
  };
  /**
   * Creates a typed NavigationFailure object.
   * @internal
   * @param type - NavigationFailureType
   * @param params - { from, to }
   */
  function createRouterError(type, params) {
      // keep full error messages in cjs versions
      {
          return assign(new Error(ErrorTypeMessages[type](params)), {
              type,
              [NavigationFailureSymbol]: true,
          }, params);
      }
  }
  function isNavigationFailure(error, type) {
      return (error instanceof Error &amp;&amp;
          NavigationFailureSymbol in error &amp;&amp;
          (type =3D=3D null || !!(error.type &amp; type)));
  }
  const propertiesToLog =3D ['params', 'query', 'hash'];
  function stringifyRoute(to) {
      if (typeof to =3D=3D=3D 'string')
          return to;
      if (to.path !=3D null)
          return to.path;
      const location =3D {};
      for (const key of propertiesToLog) {
          if (key in to)
              location[key] =3D to[key];
      }
      return JSON.stringify(location, null, 2);
  }

  // default pattern for a param: non-greedy everything but /
  const BASE_PARAM_PATTERN =3D '[^/]+?';
  const BASE_PATH_PARSER_OPTIONS =3D {
      sensitive: false,
      strict: false,
      start: true,
      end: true,
  };
  // Special Regex characters that must be escaped in static tokens
  const REGEX_CHARS_RE =3D /[.+*?^${}()[\]/\\]/g;
  /**
   * Creates a path parser from an array of Segments (a segment is an array=
 of Tokens)
   *
   * @param segments - array of segments returned by tokenizePath
   * @param extraOptions - optional options for the regexp
   * @returns a PathParser
   */
  function tokensToParser(segments, extraOptions) {
      const options =3D assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
      // the amount of scores is the same as the length of segments except =
for the root segment "/"
      const score =3D [];
      // the regexp as a string
      let pattern =3D options.start ? '^' : '';
      // extracted keys
      const keys =3D [];
      for (const segment of segments) {
          // the root segment needs special treatment
          const segmentScores =3D segment.length ? [] : [90 /* PathScore.Ro=
ot */];
          // allow trailing slash
          if (options.strict &amp;&amp; !segment.length)
              pattern +=3D '/';
          for (let tokenIndex =3D 0; tokenIndex &lt; segment.length; tokenI=
ndex++) {
              const token =3D segment[tokenIndex];
              // resets the score if we are inside a sub-segment /:a-other-=
:b
              let subSegmentScore =3D 40 /* PathScore.Segment */ +
                  (options.sensitive ? 0.25 /* PathScore.BonusCaseSensitive=
 */ : 0);
              if (token.type =3D=3D=3D 0 /* TokenType.Static */) {
                  // prepend the slash if we are starting a new segment
                  if (!tokenIndex)
                      pattern +=3D '/';
                  pattern +=3D token.value.replace(REGEX_CHARS_RE, '\\$&amp=
;');
                  subSegmentScore +=3D 40 /* PathScore.Static */;
              }
              else if (token.type =3D=3D=3D 1 /* TokenType.Param */) {
                  const { value, repeatable, optional, regexp } =3D token;
                  keys.push({
                      name: value,
                      repeatable,
                      optional,
                  });
                  const re =3D regexp ? regexp : BASE_PARAM_PATTERN;
                  // the user provided a custom regexp /:id(\\d+)
                  if (re !=3D=3D BASE_PARAM_PATTERN) {
                      subSegmentScore +=3D 10 /* PathScore.BonusCustomRegEx=
p */;
                      // make sure the regexp is valid before using it
                      try {
                          new RegExp(`(${re})`);
                      }
                      catch (err) {
                          throw new Error(`Invalid custom RegExp for param =
"${value}" (${re}): ` +
                              err.message);
                      }
                  }
                  // when we repeat we must take care of the repeating lead=
ing slash
                  let subPattern =3D repeatable ? `((?:${re})(?:/(?:${re}))=
*)` : `(${re})`;
                  // prepend the slash if we are starting a new segment
                  if (!tokenIndex)
                      subPattern =3D
                          // avoid an optional / if there are more segments=
 e.g. /:p?-static
                          // or /:p?-:p2
                          optional &amp;&amp; segment.length &lt; 2
                              ? `(?:/${subPattern})`
                              : '/' + subPattern;
                  if (optional)
                      subPattern +=3D '?';
                  pattern +=3D subPattern;
                  subSegmentScore +=3D 20 /* PathScore.Dynamic */;
                  if (optional)
                      subSegmentScore +=3D -8 /* PathScore.BonusOptional */=
;
                  if (repeatable)
                      subSegmentScore +=3D -20 /* PathScore.BonusRepeatable=
 */;
                  if (re =3D=3D=3D '.*')
                      subSegmentScore +=3D -50 /* PathScore.BonusWildcard *=
/;
              }
              segmentScores.push(subSegmentScore);
          }
          // an empty array like /home/ -&gt; [[{home}], []]
          // if (!segment.length) pattern +=3D '/'
          score.push(segmentScores);
      }
      // only apply the strict bonus to the last score
      if (options.strict &amp;&amp; options.end) {
          const i =3D score.length - 1;
          score[i][score[i].length - 1] +=3D 0.7000000000000001 /* PathScor=
e.BonusStrict */;
      }
      // TODO: dev only warn double trailing slash
      if (!options.strict)
          pattern +=3D '/?';
      if (options.end)
          pattern +=3D '$';
      // allow paths like /dynamic to only match dynamic or dynamic/... but=
 not dynamic_something_else
      else if (options.strict &amp;&amp; !pattern.endsWith('/'))
          pattern +=3D '(?:/|$)';
      const re =3D new RegExp(pattern, options.sensitive ? '' : 'i');
      function parse(path) {
          const match =3D path.match(re);
          const params =3D {};
          if (!match)
              return null;
          for (let i =3D 1; i &lt; match.length; i++) {
              const value =3D match[i] || '';
              const key =3D keys[i - 1];
              params[key.name] =3D value &amp;&amp; key.repeatable ? value.=
split('/') : value;
          }
          return params;
      }
      function stringify(params) {
          let path =3D '';
          // for optional parameters to allow to be empty
          let avoidDuplicatedSlash =3D false;
          for (const segment of segments) {
              if (!avoidDuplicatedSlash || !path.endsWith('/'))
                  path +=3D '/';
              avoidDuplicatedSlash =3D false;
              for (const token of segment) {
                  if (token.type =3D=3D=3D 0 /* TokenType.Static */) {
                      path +=3D token.value;
                  }
                  else if (token.type =3D=3D=3D 1 /* TokenType.Param */) {
                      const { value, repeatable, optional } =3D token;
                      const param =3D value in params ? params[value] : '';
                      if (isArray(param) &amp;&amp; !repeatable) {
                          throw new Error(`Provided param "${value}" is an =
array but it is not repeatable (* or + modifiers)`);
                      }
                      const text =3D isArray(param)
                          ? param.join('/')
                          : param;
                      if (!text) {
                          if (optional) {
                              // if we have more than one optional param li=
ke /:a?-static we don't need to care about the optional param
                              if (segment.length &lt; 2) {
                                  // remove the last slash as we could be a=
t the end
                                  if (path.endsWith('/'))
                                      path =3D path.slice(0, -1);
                                  // do not append a slash on the next iter=
ation
                                  else
                                      avoidDuplicatedSlash =3D true;
                              }
                          }
                          else
                              throw new Error(`Missing required param "${va=
lue}"`);
                      }
                      path +=3D text;
                  }
              }
          }
          // avoid empty path when we have multiple optional params
          return path || '/';
      }
      return {
          re,
          score,
          keys,
          parse,
          stringify,
      };
  }
  /**
   * Compares an array of numbers as used in PathParser.score and returns a
   * number. This function can be used to `sort` an array
   *
   * @param a - first array of numbers
   * @param b - second array of numbers
   * @returns 0 if both are equal, &lt; 0 if a should be sorted first, &gt;=
 0 if b
   * should be sorted first
   */
  function compareScoreArray(a, b) {
      let i =3D 0;
      while (i &lt; a.length &amp;&amp; i &lt; b.length) {
          const diff =3D b[i] - a[i];
          // only keep going if diff =3D=3D=3D 0
          if (diff)
              return diff;
          i++;
      }
      // if the last subsegment was Static, the shorter segments should be =
sorted first
      // otherwise sort the longest segment first
      if (a.length &lt; b.length) {
          return a.length =3D=3D=3D 1 &amp;&amp; a[0] =3D=3D=3D 40 /* PathS=
core.Static */ + 40 /* PathScore.Segment */
              ? -1
              : 1;
      }
      else if (a.length &gt; b.length) {
          return b.length =3D=3D=3D 1 &amp;&amp; b[0] =3D=3D=3D 40 /* PathS=
core.Static */ + 40 /* PathScore.Segment */
              ? 1
              : -1;
      }
      return 0;
  }
  /**
   * Compare function that can be used with `sort` to sort an array of Path=
Parser
   *
   * @param a - first PathParser
   * @param b - second PathParser
   * @returns 0 if both are equal, &lt; 0 if a should be sorted first, &gt;=
 0 if b
   */
  function comparePathParserScore(a, b) {
      let i =3D 0;
      const aScore =3D a.score;
      const bScore =3D b.score;
      while (i &lt; aScore.length &amp;&amp; i &lt; bScore.length) {
          const comp =3D compareScoreArray(aScore[i], bScore[i]);
          // do not return if both are equal
          if (comp)
              return comp;
          i++;
      }
      if (Math.abs(bScore.length - aScore.length) =3D=3D=3D 1) {
          if (isLastScoreNegative(aScore))
              return 1;
          if (isLastScoreNegative(bScore))
              return -1;
      }
      // if a and b share the same score entries but b has more, sort b fir=
st
      return bScore.length - aScore.length;
      // this is the ternary version
      // return aScore.length &lt; bScore.length
      //   ? 1
      //   : aScore.length &gt; bScore.length
      //   ? -1
      //   : 0
  }
  /**
   * This allows detecting splats at the end of a path: /home/:id(.*)*
   *
   * @param score - score to check
   * @returns true if the last entry is negative
   */
  function isLastScoreNegative(score) {
      const last =3D score[score.length - 1];
      return score.length &gt; 0 &amp;&amp; last[last.length - 1] &lt; 0;
  }

  const ROOT_TOKEN =3D {
      type: 0 /* TokenType.Static */,
      value: '',
  };
  const VALID_PARAM_RE =3D /[a-zA-Z0-9_]/;
  // After some profiling, the cache seems to be unnecessary because tokeni=
zePath
  // (the slowest part of adding a route) is very fast
  // const tokenCache =3D new Map&lt;string, Token[][]&gt;()
  function tokenizePath(path) {
      if (!path)
          return [[]];
      if (path =3D=3D=3D '/')
          return [[ROOT_TOKEN]];
      if (!path.startsWith('/')) {
          throw new Error(`Route paths should start with a "/": "${path}" s=
hould be "/${path}".`
              );
      }
      // if (tokenCache.has(path)) return tokenCache.get(path)!
      function crash(message) {
          throw new Error(`ERR (${state})/"${buffer}": ${message}`);
      }
      let state =3D 0 /* TokenizerState.Static */;
      let previousState =3D state;
      const tokens =3D [];
      // the segment will always be valid because we get into the initial s=
tate
      // with the leading /
      let segment;
      function finalizeSegment() {
          if (segment)
              tokens.push(segment);
          segment =3D [];
      }
      // index on the path
      let i =3D 0;
      // char at index
      let char;
      // buffer of the value read
      let buffer =3D '';
      // custom regexp for a param
      let customRe =3D '';
      function consumeBuffer() {
          if (!buffer)
              return;
          if (state =3D=3D=3D 0 /* TokenizerState.Static */) {
              segment.push({
                  type: 0 /* TokenType.Static */,
                  value: buffer,
              });
          }
          else if (state =3D=3D=3D 1 /* TokenizerState.Param */ ||
              state =3D=3D=3D 2 /* TokenizerState.ParamRegExp */ ||
              state =3D=3D=3D 3 /* TokenizerState.ParamRegExpEnd */) {
              if (segment.length &gt; 1 &amp;&amp; (char =3D=3D=3D '*' || c=
har =3D=3D=3D '+'))
                  crash(`A repeatable param (${buffer}) must be alone in it=
s segment. eg: '/:ids+.`);
              segment.push({
                  type: 1 /* TokenType.Param */,
                  value: buffer,
                  regexp: customRe,
                  repeatable: char =3D=3D=3D '*' || char =3D=3D=3D '+',
                  optional: char =3D=3D=3D '*' || char =3D=3D=3D '?',
              });
          }
          else {
              crash('Invalid state to consume buffer');
          }
          buffer =3D '';
      }
      function addCharToBuffer() {
          buffer +=3D char;
      }
      while (i &lt; path.length) {
          char =3D path[i++];
          if (char =3D=3D=3D '\\' &amp;&amp; state !=3D=3D 2 /* TokenizerSt=
ate.ParamRegExp */) {
              previousState =3D state;
              state =3D 4 /* TokenizerState.EscapeNext */;
              continue;
          }
          switch (state) {
              case 0 /* TokenizerState.Static */:
                  if (char =3D=3D=3D '/') {
                      if (buffer) {
                          consumeBuffer();
                      }
                      finalizeSegment();
                  }
                  else if (char =3D=3D=3D ':') {
                      consumeBuffer();
                      state =3D 1 /* TokenizerState.Param */;
                  }
                  else {
                      addCharToBuffer();
                  }
                  break;
              case 4 /* TokenizerState.EscapeNext */:
                  addCharToBuffer();
                  state =3D previousState;
                  break;
              case 1 /* TokenizerState.Param */:
                  if (char =3D=3D=3D '(') {
                      state =3D 2 /* TokenizerState.ParamRegExp */;
                  }
                  else if (VALID_PARAM_RE.test(char)) {
                      addCharToBuffer();
                  }
                  else {
                      consumeBuffer();
                      state =3D 0 /* TokenizerState.Static */;
                      // go back one character if we were not modifying
                      if (char !=3D=3D '*' &amp;&amp; char !=3D=3D '?' &amp=
;&amp; char !=3D=3D '+')
                          i--;
                  }
                  break;
              case 2 /* TokenizerState.ParamRegExp */:
                  // TODO: is it worth handling nested regexp? like :p(?:pr=
efix_([^/]+)_suffix)
                  // it already works by escaping the closing )
                  // https://paths.esm.dev/?p=3DAAMeJbiAwQEcDKbAoAAkP60PG2R=
6QAvgNaA6AFACM2ABuQBB#
                  // is this really something people need since you can als=
o write
                  // /prefix_:p()_suffix
                  if (char =3D=3D=3D ')') {
                      // handle the escaped )
                      if (customRe[customRe.length - 1] =3D=3D '\\')
                          customRe =3D customRe.slice(0, -1) + char;
                      else
                          state =3D 3 /* TokenizerState.ParamRegExpEnd */;
                  }
                  else {
                      customRe +=3D char;
                  }
                  break;
              case 3 /* TokenizerState.ParamRegExpEnd */:
                  // same as finalizing a param
                  consumeBuffer();
                  state =3D 0 /* TokenizerState.Static */;
                  // go back one character if we were not modifying
                  if (char !=3D=3D '*' &amp;&amp; char !=3D=3D '?' &amp;&am=
p; char !=3D=3D '+')
                      i--;
                  customRe =3D '';
                  break;
              default:
                  crash('Unknown state');
                  break;
          }
      }
      if (state =3D=3D=3D 2 /* TokenizerState.ParamRegExp */)
          crash(`Unfinished custom RegExp for param "${buffer}"`);
      consumeBuffer();
      finalizeSegment();
      // tokenCache.set(path, tokens)
      return tokens;
  }

  function createRouteRecordMatcher(record, parent, options) {
      const parser =3D tokensToParser(tokenizePath(record.path), options);
      // warn against params with the same name
      {
          const existingKeys =3D new Set();
          for (const key of parser.keys) {
              if (existingKeys.has(key.name))
                  warn(`Found duplicated params with name "${key.name}" for=
 path "${record.path}". Only the last one will be available on "$route.para=
ms".`);
              existingKeys.add(key.name);
          }
      }
      const matcher =3D assign(parser, {
          record,
          parent,
          // these needs to be populated by the parent
          children: [],
          alias: [],
      });
      if (parent) {
          // both are aliases or both are not aliases
          // we don't want to mix them because the order is used when
          // passing originalRecord in Matcher.addRoute
          if (!matcher.record.aliasOf =3D=3D=3D !parent.record.aliasOf)
              parent.children.push(matcher);
      }
      return matcher;
  }

  /**
   * Creates a Router Matcher.
   *
   * @internal
   * @param routes - array of initial routes
   * @param globalOptions - global route options
   */
  function createRouterMatcher(routes, globalOptions) {
      // normalized ordered array of matchers
      const matchers =3D [];
      const matcherMap =3D new Map();
      globalOptions =3D mergeOptions({ strict: false, end: true, sensitive:=
 false }, globalOptions);
      function getRecordMatcher(name) {
          return matcherMap.get(name);
      }
      function addRoute(record, parent, originalRecord) {
          // used later on to remove by name
          const isRootAdd =3D !originalRecord;
          const mainNormalizedRecord =3D normalizeRouteRecord(record);
          {
              checkChildMissingNameWithEmptyPath(mainNormalizedRecord, pare=
nt);
          }
          // we might be the child of an alias
          mainNormalizedRecord.aliasOf =3D originalRecord &amp;&amp; origin=
alRecord.record;
          const options =3D mergeOptions(globalOptions, record);
          // generate an array of records to correctly handle aliases
          const normalizedRecords =3D [mainNormalizedRecord];
          if ('alias' in record) {
              const aliases =3D typeof record.alias =3D=3D=3D 'string' ? [r=
ecord.alias] : record.alias;
              for (const alias of aliases) {
                  normalizedRecords.push(
                  // we need to normalize again to ensure the `mods` proper=
ty
                  // being non enumerable
                  normalizeRouteRecord(assign({}, mainNormalizedRecord, {
                      // this allows us to hold a copy of the `components` =
option
                      // so that async components cache is hold on the orig=
inal record
                      components: originalRecord
                          ? originalRecord.record.components
                          : mainNormalizedRecord.components,
                      path: alias,
                      // we might be the child of an alias
                      aliasOf: originalRecord
                          ? originalRecord.record
                          : mainNormalizedRecord,
                      // the aliases are always of the same kind as the ori=
ginal since they
                      // are defined on the same record
                  })));
              }
          }
          let matcher;
          let originalMatcher;
          for (const normalizedRecord of normalizedRecords) {
              const { path } =3D normalizedRecord;
              // Build up the path for nested routes if the child isn't an =
absolute
              // route. Only add the / delimiter if the child path isn't em=
pty and if the
              // parent path doesn't have a trailing slash
              if (parent &amp;&amp; path[0] !=3D=3D '/') {
                  const parentPath =3D parent.record.path;
                  const connectingSlash =3D parentPath[parentPath.length - =
1] =3D=3D=3D '/' ? '' : '/';
                  normalizedRecord.path =3D
                      parent.record.path + (path &amp;&amp; connectingSlash=
 + path);
              }
              if (normalizedRecord.path =3D=3D=3D '*') {
                  throw new Error('Catch all routes ("*") must now be defin=
ed using a param with a custom regexp.\n' +
                      'See more at https://router.vuejs.org/guide/migration=
/#Removed-star-or-catch-all-routes.');
              }
              // create the object beforehand, so it can be passed to child=
ren
              matcher =3D createRouteRecordMatcher(normalizedRecord, parent=
, options);
              if (parent &amp;&amp; path[0] =3D=3D=3D '/')
                  checkMissingParamsInAbsolutePath(matcher, parent);
              // if we are an alias we must tell the original record that w=
e exist,
              // so we can be removed
              if (originalRecord) {
                  originalRecord.alias.push(matcher);
                  {
                      checkSameParams(originalRecord, matcher);
                  }
              }
              else {
                  // otherwise, the first record is the original and others=
 are aliases
                  originalMatcher =3D originalMatcher || matcher;
                  if (originalMatcher !=3D=3D matcher)
                      originalMatcher.alias.push(matcher);
                  // remove the route if named and only for the top record =
(avoid in nested calls)
                  // this works because the original record is the first on=
e
                  if (isRootAdd &amp;&amp; record.name &amp;&amp; !isAliasR=
ecord(matcher)) {
                      {
                          checkSameNameAsAncestor(record, parent);
                      }
                      removeRoute(record.name);
                  }
              }
              // Avoid adding a record that doesn't display anything. This =
allows passing through records without a component to
              // not be reached and pass through the catch all route
              if (isMatchable(matcher)) {
                  insertMatcher(matcher);
              }
              if (mainNormalizedRecord.children) {
                  const children =3D mainNormalizedRecord.children;
                  for (let i =3D 0; i &lt; children.length; i++) {
                      addRoute(children[i], matcher, originalRecord &amp;&a=
mp; originalRecord.children[i]);
                  }
              }
              // if there was no original record, then the first one was no=
t an alias and all
              // other aliases (if any) need to reference this record when =
adding children
              originalRecord =3D originalRecord || matcher;
              // TODO: add normalized records for more flexibility
              // if (parent &amp;&amp; isAliasRecord(originalRecord)) {
              //   parent.children.push(originalRecord)
              // }
          }
          return originalMatcher
              ? () =3D&gt; {
                  // since other matchers are aliases, they should be remov=
ed by the original matcher
                  removeRoute(originalMatcher);
              }
              : noop;
      }
      function removeRoute(matcherRef) {
          if (isRouteName(matcherRef)) {
              const matcher =3D matcherMap.get(matcherRef);
              if (matcher) {
                  matcherMap.delete(matcherRef);
                  matchers.splice(matchers.indexOf(matcher), 1);
                  matcher.children.forEach(removeRoute);
                  matcher.alias.forEach(removeRoute);
              }
          }
          else {
              const index =3D matchers.indexOf(matcherRef);
              if (index &gt; -1) {
                  matchers.splice(index, 1);
                  if (matcherRef.record.name)
                      matcherMap.delete(matcherRef.record.name);
                  matcherRef.children.forEach(removeRoute);
                  matcherRef.alias.forEach(removeRoute);
              }
          }
      }
      function getRoutes() {
          return matchers;
      }
      function insertMatcher(matcher) {
          const index =3D findInsertionIndex(matcher, matchers);
          matchers.splice(index, 0, matcher);
          // only add the original record to the name map
          if (matcher.record.name &amp;&amp; !isAliasRecord(matcher))
              matcherMap.set(matcher.record.name, matcher);
      }
      function resolve(location, currentLocation) {
          let matcher;
          let params =3D {};
          let path;
          let name;
          if ('name' in location &amp;&amp; location.name) {
              matcher =3D matcherMap.get(location.name);
              if (!matcher)
                  throw createRouterError(1 /* ErrorTypes.MATCHER_NOT_FOUND=
 */, {
                      location,
                  });
              // warn if the user is passing invalid params so they can deb=
ug it better when they get removed
              {
                  const invalidParams =3D Object.keys(location.params || {}=
).filter(paramName =3D&gt; !matcher.keys.find(k =3D&gt; k.name =3D=3D=3D pa=
ramName));
                  if (invalidParams.length) {
                      warn(`Discarded invalid param(s) "${invalidParams.joi=
n('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/=
packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
                  }
              }
              name =3D matcher.record.name;
              params =3D assign(
              // paramsFromLocation is a new object
              paramsFromLocation(currentLocation.params,=20
              // only keep params that exist in the resolved location
              // only keep optional params coming from a parent record
              matcher.keys
                  .filter(k =3D&gt; !k.optional)
                  .concat(matcher.parent ? matcher.parent.keys.filter(k =3D=
&gt; k.optional) : [])
                  .map(k =3D&gt; k.name)),=20
              // discard any existing params in the current location that d=
o not exist here
              // #1497 this ensures better active/exact matching
              location.params &amp;&amp;
                  paramsFromLocation(location.params, matcher.keys.map(k =
=3D&gt; k.name)));
              // throws if cannot be stringified
              path =3D matcher.stringify(params);
          }
          else if (location.path !=3D null) {
              // no need to resolve the path with the matcher as it was pro=
vided
              // this also allows the user to control the encoding
              path =3D location.path;
              if (!path.startsWith('/')) {
                  warn(`The Matcher cannot resolve relative paths but recei=
ved "${path}". Unless you directly called \`matcher.resolve("${path}")\`, t=
his is probably a bug in vue-router. Please open an issue at https://github=
.com/vuejs/router/issues/new/choose.`);
              }
              matcher =3D matchers.find(m =3D&gt; m.re.test(path));
              // matcher should have a value after the loop
              if (matcher) {
                  // we know the matcher works because we tested the regexp
                  params =3D matcher.parse(path);
                  name =3D matcher.record.name;
              }
              // location is a relative path
          }
          else {
              // match by name or path of current route
              matcher =3D currentLocation.name
                  ? matcherMap.get(currentLocation.name)
                  : matchers.find(m =3D&gt; m.re.test(currentLocation.path)=
);
              if (!matcher)
                  throw createRouterError(1 /* ErrorTypes.MATCHER_NOT_FOUND=
 */, {
                      location,
                      currentLocation,
                  });
              name =3D matcher.record.name;
              // since we are navigating to the same location, we don't nee=
d to pick the
              // params like when `name` is provided
              params =3D assign({}, currentLocation.params, location.params=
);
              path =3D matcher.stringify(params);
          }
          const matched =3D [];
          let parentMatcher =3D matcher;
          while (parentMatcher) {
              // reversed order so parents are at the beginning
              matched.unshift(parentMatcher.record);
              parentMatcher =3D parentMatcher.parent;
          }
          return {
              name,
              path,
              params,
              matched,
              meta: mergeMetaFields(matched),
          };
      }
      // add initial routes
      routes.forEach(route =3D&gt; addRoute(route));
      function clearRoutes() {
          matchers.length =3D 0;
          matcherMap.clear();
      }
      return {
          addRoute,
          resolve,
          removeRoute,
          clearRoutes,
          getRoutes,
          getRecordMatcher,
      };
  }
  function paramsFromLocation(params, keys) {
      const newParams =3D {};
      for (const key of keys) {
          if (key in params)
              newParams[key] =3D params[key];
      }
      return newParams;
  }
  /**
   * Normalizes a RouteRecordRaw. Creates a copy
   *
   * @param record
   * @returns the normalized version
   */
  function normalizeRouteRecord(record) {
      const normalized =3D {
          path: record.path,
          redirect: record.redirect,
          name: record.name,
          meta: record.meta || {},
          aliasOf: record.aliasOf,
          beforeEnter: record.beforeEnter,
          props: normalizeRecordProps(record),
          children: record.children || [],
          instances: {},
          leaveGuards: new Set(),
          updateGuards: new Set(),
          enterCallbacks: {},
          // must be declared afterwards
          // mods: {},
          components: 'components' in record
              ? record.components || null
              : record.component &amp;&amp; { default: record.component },
      };
      // mods contain modules and shouldn't be copied,
      // logged or anything. It's just used for internal
      // advanced use cases like data loaders
      Object.defineProperty(normalized, 'mods', {
          value: {},
      });
      return normalized;
  }
  /**
   * Normalize the optional `props` in a record to always be an object simi=
lar to
   * components. Also accept a boolean for components.
   * @param record
   */
  function normalizeRecordProps(record) {
      const propsObject =3D {};
      // props does not exist on redirect records, but we can set false dir=
ectly
      const props =3D record.props || false;
      if ('component' in record) {
          propsObject.default =3D props;
      }
      else {
          // NOTE: we could also allow a function to be applied to every co=
mponent.
          // Would need user feedback for use cases
          for (const name in record.components)
              propsObject[name] =3D typeof props =3D=3D=3D 'object' ? props=
[name] : props;
      }
      return propsObject;
  }
  /**
   * Checks if a record or any of its parent is an alias
   * @param record
   */
  function isAliasRecord(record) {
      while (record) {
          if (record.record.aliasOf)
              return true;
          record =3D record.parent;
      }
      return false;
  }
  /**
   * Merge meta fields of an array of records
   *
   * @param matched - array of matched records
   */
  function mergeMetaFields(matched) {
      return matched.reduce((meta, record) =3D&gt; assign(meta, record.meta=
), {});
  }
  function mergeOptions(defaults, partialOptions) {
      const options =3D {};
      for (const key in defaults) {
          options[key] =3D key in partialOptions ? partialOptions[key] : de=
faults[key];
      }
      return options;
  }
  function isSameParam(a, b) {
      return (a.name =3D=3D=3D b.name &amp;&amp;
          a.optional =3D=3D=3D b.optional &amp;&amp;
          a.repeatable =3D=3D=3D b.repeatable);
  }
  /**
   * Check if a path and its alias have the same required params
   *
   * @param a - original record
   * @param b - alias record
   */
  function checkSameParams(a, b) {
      for (const key of a.keys) {
          if (!key.optional &amp;&amp; !b.keys.find(isSameParam.bind(null, =
key)))
              return warn(`Alias "${b.record.path}" and the original record=
: "${a.record.path}" must have the exact same param named "${key.name}"`);
      }
      for (const key of b.keys) {
          if (!key.optional &amp;&amp; !a.keys.find(isSameParam.bind(null, =
key)))
              return warn(`Alias "${b.record.path}" and the original record=
: "${a.record.path}" must have the exact same param named "${key.name}"`);
      }
  }
  /**
   * A route with a name and a child with an empty path without a name shou=
ld warn when adding the route
   *
   * @param mainNormalizedRecord - RouteRecordNormalized
   * @param parent - RouteRecordMatcher
   */
  function checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent)=
 {
      if (parent &amp;&amp;
          parent.record.name &amp;&amp;
          !mainNormalizedRecord.name &amp;&amp;
          !mainNormalizedRecord.path) {
          warn(`The route named "${String(parent.record.name)}" has a child=
 without a name and an empty path. Using that name won't render the empty p=
ath child so you probably want to move the name to the child instead. If th=
is is intentional, add a name to the child route to remove the warning.`);
      }
  }
  function checkSameNameAsAncestor(record, parent) {
      for (let ancestor =3D parent; ancestor; ancestor =3D ancestor.parent)=
 {
          if (ancestor.record.name =3D=3D=3D record.name) {
              throw new Error(`A route named "${String(record.name)}" has b=
een added as a ${parent =3D=3D=3D ancestor ? 'child' : 'descendant'} of a r=
oute with the same name. Route names must be unique and a nested route cann=
ot use the same name as an ancestor.`);
          }
      }
  }
  function checkMissingParamsInAbsolutePath(record, parent) {
      for (const key of parent.keys) {
          if (!record.keys.find(isSameParam.bind(null, key)))
              return warn(`Absolute path "${record.record.path}" must have =
the exact same param named "${key.name}" as its parent "${parent.record.pat=
h}".`);
      }
  }
  /**
   * Performs a binary search to find the correct insertion index for a new=
 matcher.
   *
   * Matchers are primarily sorted by their score. If scores are tied then =
we also consider parent/child relationships,
   * with descendants coming before ancestors. If there's still a tie, new =
routes are inserted after existing routes.
   *
   * @param matcher - new matcher to be inserted
   * @param matchers - existing matchers
   */
  function findInsertionIndex(matcher, matchers) {
      // First phase: binary search based on score
      let lower =3D 0;
      let upper =3D matchers.length;
      while (lower !=3D=3D upper) {
          const mid =3D (lower + upper) &gt;&gt; 1;
          const sortOrder =3D comparePathParserScore(matcher, matchers[mid]=
);
          if (sortOrder &lt; 0) {
              upper =3D mid;
          }
          else {
              lower =3D mid + 1;
          }
      }
      // Second phase: check for an ancestor with the same score
      const insertionAncestor =3D getInsertionAncestor(matcher);
      if (insertionAncestor) {
          upper =3D matchers.lastIndexOf(insertionAncestor, upper - 1);
          if (upper &lt; 0) {
              // This should never happen
              warn(`Finding ancestor route "${insertionAncestor.record.path=
}" failed for "${matcher.record.path}"`);
          }
      }
      return upper;
  }
  function getInsertionAncestor(matcher) {
      let ancestor =3D matcher;
      while ((ancestor =3D ancestor.parent)) {
          if (isMatchable(ancestor) &amp;&amp;
              comparePathParserScore(matcher, ancestor) =3D=3D=3D 0) {
              return ancestor;
          }
      }
      return;
  }
  /**
   * Checks if a matcher can be reachable. This means if it's possible to r=
each it as a route. For example, routes without
   * a component, or name, or redirect, are just used to group other routes=
.
   * @param matcher
   * @param matcher.record record of the matcher
   * @returns
   */
  function isMatchable({ record }) {
      return !!(record.name ||
          (record.components &amp;&amp; Object.keys(record.components).leng=
th) ||
          record.redirect);
  }

  /**
   * Transforms a queryString into a {@link LocationQuery} object. Accept b=
oth, a
   * version with the leading `?` and without Should work as URLSearchParam=
s

   * @internal
   *
   * @param search - search string to parse
   * @returns a query object
   */
  function parseQuery(search) {
      const query =3D {};
      // avoid creating an object with an empty key and empty value
      // because of split('&amp;')
      if (search =3D=3D=3D '' || search =3D=3D=3D '?')
          return query;
      const hasLeadingIM =3D search[0] =3D=3D=3D '?';
      const searchParams =3D (hasLeadingIM ? search.slice(1) : search).spli=
t('&amp;');
      for (let i =3D 0; i &lt; searchParams.length; ++i) {
          // pre decode the + into space
          const searchParam =3D searchParams[i].replace(PLUS_RE, ' ');
          // allow the =3D character
          const eqPos =3D searchParam.indexOf('=3D');
          const key =3D decode(eqPos &lt; 0 ? searchParam : searchParam.sli=
ce(0, eqPos));
          const value =3D eqPos &lt; 0 ? null : decode(searchParam.slice(eq=
Pos + 1));
          if (key in query) {
              // an extra variable for ts types
              let currentValue =3D query[key];
              if (!isArray(currentValue)) {
                  currentValue =3D query[key] =3D [currentValue];
              }
              currentValue.push(value);
          }
          else {
              query[key] =3D value;
          }
      }
      return query;
  }
  /**
   * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`,=
 it
   * doesn't prepend a `?`
   *
   * @internal
   *
   * @param query - query object to stringify
   * @returns string version of the query without the leading `?`
   */
  function stringifyQuery(query) {
      let search =3D '';
      for (let key in query) {
          const value =3D query[key];
          key =3D encodeQueryKey(key);
          if (value =3D=3D null) {
              // only null adds the value
              if (value !=3D=3D undefined) {
                  search +=3D (search.length ? '&amp;' : '') + key;
              }
              continue;
          }
          // keep null values
          const values =3D isArray(value)
              ? value.map(v =3D&gt; v &amp;&amp; encodeQueryValue(v))
              : [value &amp;&amp; encodeQueryValue(value)];
          values.forEach(value =3D&gt; {
              // skip undefined values in arrays as if they were not presen=
t
              // smaller code than using filter
              if (value !=3D=3D undefined) {
                  // only append &amp; with non-empty search
                  search +=3D (search.length ? '&amp;' : '') + key;
                  if (value !=3D null)
                      search +=3D '=3D' + value;
              }
          });
      }
      return search;
  }
  /**
   * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by =
casting
   * numbers into strings, removing keys with an undefined value and replac=
ing
   * undefined with null in arrays
   *
   * @param query - query object to normalize
   * @returns a normalized query object
   */
  function normalizeQuery(query) {
      const normalizedQuery =3D {};
      for (const key in query) {
          const value =3D query[key];
          if (value !=3D=3D undefined) {
              normalizedQuery[key] =3D isArray(value)
                  ? value.map(v =3D&gt; (v =3D=3D null ? null : '' + v))
                  : value =3D=3D null
                      ? value
                      : '' + value;
          }
      }
      return normalizedQuery;
  }

  /**
   * RouteRecord being rendered by the closest ancestor Router View. Used f=
or
   * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router=
 View
   * Location Matched
   *
   * @internal
   */
  const matchedRouteKey =3D Symbol('router view location matched' );
  /**
   * Allows overriding the router view depth to control which component in
   * `matched` is rendered. rvd stands for Router View Depth
   *
   * @internal
   */
  const viewDepthKey =3D Symbol('router view depth' );
  /**
   * Allows overriding the router instance returned by `useRouter` in tests=
. r
   * stands for router
   *
   * @internal
   */
  const routerKey =3D Symbol('router' );
  /**
   * Allows overriding the current route returned by `useRoute` in tests. r=
l
   * stands for route location
   *
   * @internal
   */
  const routeLocationKey =3D Symbol('route location' );
  /**
   * Allows overriding the current route used by router-view. Internally th=
is is
   * used when the `route` prop is passed.
   *
   * @internal
   */
  const routerViewLocationKey =3D Symbol('router view location' );

  /**
   * Create a list of callbacks that can be reset. Used to create before an=
d after navigation guards list
   */
  function useCallbacks() {
      let handlers =3D [];
      function add(handler) {
          handlers.push(handler);
          return () =3D&gt; {
              const i =3D handlers.indexOf(handler);
              if (i &gt; -1)
                  handlers.splice(i, 1);
          };
      }
      function reset() {
          handlers =3D [];
      }
      return {
          add,
          list: () =3D&gt; handlers.slice(),
          reset,
      };
  }

  function registerGuard(record, name, guard) {
      const removeFromList =3D () =3D&gt; {
          record[name].delete(guard);
      };
      vue.onUnmounted(removeFromList);
      vue.onDeactivated(removeFromList);
      vue.onActivated(() =3D&gt; {
          record[name].add(guard);
      });
      record[name].add(guard);
  }
  /**
   * Add a navigation guard that triggers whenever the component for the cu=
rrent
   * location is about to be left. Similar to {@link beforeRouteLeave} but =
can be
   * used in any component. The guard is removed when the component is unmo=
unted.
   *
   * @param leaveGuard - {@link NavigationGuard}
   */
  function onBeforeRouteLeave(leaveGuard) {
      if (!vue.getCurrentInstance()) {
          warn('getCurrentInstance() returned null. onBeforeRouteLeave() mu=
st be called at the top of a setup function');
          return;
      }
      const activeRecord =3D vue.inject(matchedRouteKey,=20
      // to avoid warning
      {}).value;
      if (!activeRecord) {
          warn('No active route record was found when calling `onBeforeRout=
eLeave()`. Make sure you call this function inside a component child of &lt=
;router-view&gt;. Maybe you called it inside of App.vue?');
          return;
      }
      registerGuard(activeRecord, 'leaveGuards', leaveGuard);
  }
  /**
   * Add a navigation guard that triggers whenever the current location is =
about
   * to be updated. Similar to {@link beforeRouteUpdate} but can be used in=
 any
   * component. The guard is removed when the component is unmounted.
   *
   * @param updateGuard - {@link NavigationGuard}
   */
  function onBeforeRouteUpdate(updateGuard) {
      if (!vue.getCurrentInstance()) {
          warn('getCurrentInstance() returned null. onBeforeRouteUpdate() m=
ust be called at the top of a setup function');
          return;
      }
      const activeRecord =3D vue.inject(matchedRouteKey,=20
      // to avoid warning
      {}).value;
      if (!activeRecord) {
          warn('No active route record was found when calling `onBeforeRout=
eUpdate()`. Make sure you call this function inside a component child of &l=
t;router-view&gt;. Maybe you called it inside of App.vue?');
          return;
      }
      registerGuard(activeRecord, 'updateGuards', updateGuard);
  }
  function guardToPromiseFn(guard, to, from, record, name, runWithContext =
=3D fn =3D&gt; fn()) {
      // keep a reference to the enterCallbackArray to prevent pushing call=
backs if a new navigation took place
      const enterCallbackArray =3D record &amp;&amp;
          // name is defined if record is because of the function overload
          (record.enterCallbacks[name] =3D record.enterCallbacks[name] || [=
]);
      return () =3D&gt; new Promise((resolve, reject) =3D&gt; {
          const next =3D (valid) =3D&gt; {
              if (valid =3D=3D=3D false) {
                  reject(createRouterError(4 /* ErrorTypes.NAVIGATION_ABORT=
ED */, {
                      from,
                      to,
                  }));
              }
              else if (valid instanceof Error) {
                  reject(valid);
              }
              else if (isRouteLocation(valid)) {
                  reject(createRouterError(2 /* ErrorTypes.NAVIGATION_GUARD=
_REDIRECT */, {
                      from: to,
                      to: valid,
                  }));
              }
              else {
                  if (enterCallbackArray &amp;&amp;
                      // since enterCallbackArray is truthy, both record an=
d name also are
                      record.enterCallbacks[name] =3D=3D=3D enterCallbackAr=
ray &amp;&amp;
                      typeof valid =3D=3D=3D 'function') {
                      enterCallbackArray.push(valid);
                  }
                  resolve();
              }
          };
          // wrapping with Promise.resolve allows it to work with both asyn=
c and sync guards
          const guardReturn =3D runWithContext(() =3D&gt; guard.call(record=
 &amp;&amp; record.instances[name], to, from, canOnlyBeCalledOnce(next, to,=
 from) ));
          let guardCall =3D Promise.resolve(guardReturn);
          if (guard.length &lt; 3)
              guardCall =3D guardCall.then(next);
          if (guard.length &gt; 2) {
              const message =3D `The "next" callback was never called insid=
e of ${guard.name ? '"' + guard.name + '"' : ''}:\n${guard.toString()}\n. I=
f you are returning a value instead of calling "next", make sure to remove =
the "next" parameter from your function.`;
              if (typeof guardReturn =3D=3D=3D 'object' &amp;&amp; 'then' i=
n guardReturn) {
                  guardCall =3D guardCall.then(resolvedValue =3D&gt; {
                      // @ts-expect-error: _called is added at canOnlyBeCal=
ledOnce
                      if (!next._called) {
                          warn(message);
                          return Promise.reject(new Error('Invalid navigati=
on guard'));
                      }
                      return resolvedValue;
                  });
              }
              else if (guardReturn !=3D=3D undefined) {
                  // @ts-expect-error: _called is added at canOnlyBeCalledO=
nce
                  if (!next._called) {
                      warn(message);
                      reject(new Error('Invalid navigation guard'));
                      return;
                  }
              }
          }
          guardCall.catch(err =3D&gt; reject(err));
      });
  }
  function canOnlyBeCalledOnce(next, to, from) {
      let called =3D 0;
      return function () {
          if (called++ =3D=3D=3D 1)
              warn(`The "next" callback was called more than once in one na=
vigation guard when going from "${from.fullPath}" to "${to.fullPath}". It s=
hould be called exactly one time in each navigation guard. This will fail i=
n production.`);
          // @ts-expect-error: we put it in the original one because it's e=
asier to check
          next._called =3D true;
          if (called =3D=3D=3D 1)
              next.apply(null, arguments);
      };
  }
  function extractComponentsGuards(matched, guardType, to, from, runWithCon=
text =3D fn =3D&gt; fn()) {
      const guards =3D [];
      for (const record of matched) {
          if (!record.components &amp;&amp; !record.children.length) {
              warn(`Record with path "${record.path}" is either missing a "=
component(s)"` +
                  ` or "children" property.`);
          }
          for (const name in record.components) {
              let rawComponent =3D record.components[name];
              {
                  if (!rawComponent ||
                      (typeof rawComponent !=3D=3D 'object' &amp;&amp;
                          typeof rawComponent !=3D=3D 'function')) {
                      warn(`Component "${name}" in record with path "${reco=
rd.path}" is not` +
                          ` a valid component. Received "${String(rawCompon=
ent)}".`);
                      // throw to ensure we stop here but warn to ensure th=
e message isn't
                      // missed by the user
                      throw new Error('Invalid route component');
                  }
                  else if ('then' in rawComponent) {
                      // warn if user wrote import('/component.vue') instea=
d of () =3D&gt;
                      // import('./component.vue')
                      warn(`Component "${name}" in record with path "${reco=
rd.path}" is a ` +
                          `Promise instead of a function that returns a Pro=
mise. Did you ` +
                          `write "import('./MyPage.vue')" instead of ` +
                          `"() =3D&gt; import('./MyPage.vue')" ? This will =
break in ` +
                          `production if not fixed.`);
                      const promise =3D rawComponent;
                      rawComponent =3D () =3D&gt; promise;
                  }
                  else if (rawComponent.__asyncLoader &amp;&amp;
                      // warn only once per component
                      !rawComponent.__warnedDefineAsync) {
                      rawComponent.__warnedDefineAsync =3D true;
                      warn(`Component "${name}" in record with path "${reco=
rd.path}" is defined ` +
                          `using "defineAsyncComponent()". ` +
                          `Write "() =3D&gt; import('./MyPage.vue')" instea=
d of ` +
                          `"defineAsyncComponent(() =3D&gt; import('./MyPag=
e.vue'))".`);
                  }
              }
              // skip update and leave guards if the route component is not=
 mounted
              if (guardType !=3D=3D 'beforeRouteEnter' &amp;&amp; !record.i=
nstances[name])
                  continue;
              if (isRouteComponent(rawComponent)) {
                  // __vccOpts is added by vue-class-component and contain =
the regular options
                  const options =3D rawComponent.__vccOpts || rawComponent;
                  const guard =3D options[guardType];
                  guard &amp;&amp;
                      guards.push(guardToPromiseFn(guard, to, from, record,=
 name, runWithContext));
              }
              else {
                  // start requesting the chunk already
                  let componentPromise =3D rawComponent();
                  if (!('catch' in componentPromise)) {
                      warn(`Component "${name}" in record with path "${reco=
rd.path}" is a function that does not return a Promise. If you were passing=
 a functional component, make sure to add a "displayName" to the component.=
 This will break in production if not fixed.`);
                      componentPromise =3D Promise.resolve(componentPromise=
);
                  }
                  guards.push(() =3D&gt; componentPromise.then(resolved =3D=
&gt; {
                      if (!resolved)
                          throw new Error(`Couldn't resolve component "${na=
me}" at "${record.path}"`);
                      const resolvedComponent =3D isESModule(resolved)
                          ? resolved.default
                          : resolved;
                      // keep the resolved module for plugins like data loa=
ders
                      record.mods[name] =3D resolved;
                      // replace the function with the resolved component
                      // cannot be null or undefined because we went into t=
he for loop
                      record.components[name] =3D resolvedComponent;
                      // __vccOpts is added by vue-class-component and cont=
ain the regular options
                      const options =3D resolvedComponent.__vccOpts || reso=
lvedComponent;
                      const guard =3D options[guardType];
                      return (guard &amp;&amp;
                          guardToPromiseFn(guard, to, from, record, name, r=
unWithContext)());
                  }));
              }
          }
      }
      return guards;
  }
  /**
   * Ensures a route is loaded, so it can be passed as o prop to `&lt;Route=
rView&gt;`.
   *
   * @param route - resolved route to load
   */
  function loadRouteLocation(route) {
      return route.matched.every(record =3D&gt; record.redirect)
          ? Promise.reject(new Error('Cannot load a route that redirects.')=
)
          : Promise.all(route.matched.map(record =3D&gt; record.components =
&amp;&amp;
              Promise.all(Object.keys(record.components).reduce((promises, =
name) =3D&gt; {
                  const rawComponent =3D record.components[name];
                  if (typeof rawComponent =3D=3D=3D 'function' &amp;&amp;
                      !('displayName' in rawComponent)) {
                      promises.push(rawComponent().then(resolved =3D&gt; {
                          if (!resolved)
                              return Promise.reject(new Error(`Couldn't res=
olve component "${name}" at "${record.path}". Ensure you passed a function =
that returns a promise.`));
                          const resolvedComponent =3D isESModule(resolved)
                              ? resolved.default
                              : resolved;
                          // keep the resolved module for plugins like data=
 loaders
                          record.mods[name] =3D resolved;
                          // replace the function with the resolved compone=
nt
                          // cannot be null or undefined because we went in=
to the for loop
                          record.components[name] =3D resolvedComponent;
                          return;
                      }));
                  }
                  return promises;
              }, [])))).then(() =3D&gt; route);
  }

  // TODO: we could allow currentRoute as a prop to expose `isActive` and
  // `isExactActive` behavior should go through an RFC
  /**
   * Returns the internal behavior of a {@link RouterLink} without the rend=
ering part.
   *
   * @param props - a `to` location and an optional `replace` flag
   */
  function useLink(props) {
      const router =3D vue.inject(routerKey);
      const currentRoute =3D vue.inject(routeLocationKey);
      let hasPrevious =3D false;
      let previousTo =3D null;
      const route =3D vue.computed(() =3D&gt; {
          const to =3D vue.unref(props.to);
          if ((!hasPrevious || to !=3D=3D previousTo)) {
              if (!isRouteLocation(to)) {
                  if (hasPrevious) {
                      warn(`Invalid value for prop "to" in useLink()\n- to:=
`, to, `\n- previous to:`, previousTo, `\n- props:`, props);
                  }
                  else {
                      warn(`Invalid value for prop "to" in useLink()\n- to:=
`, to, `\n- props:`, props);
                  }
              }
              previousTo =3D to;
              hasPrevious =3D true;
          }
          return router.resolve(to);
      });
      const activeRecordIndex =3D vue.computed(() =3D&gt; {
          const { matched } =3D route.value;
          const { length } =3D matched;
          const routeMatched =3D matched[length - 1];
          const currentMatched =3D currentRoute.matched;
          if (!routeMatched || !currentMatched.length)
              return -1;
          const index =3D currentMatched.findIndex(isSameRouteRecord.bind(n=
ull, routeMatched));
          if (index &gt; -1)
              return index;
          // possible parent record
          const parentRecordPath =3D getOriginalPath(matched[length - 2]);
          return (
          // we are dealing with nested routes
          length &gt; 1 &amp;&amp;
              // if the parent and matched route have the same path, this l=
ink is
              // referring to the empty child. Or we currently are on a dif=
ferent
              // child of the same parent
              getOriginalPath(routeMatched) =3D=3D=3D parentRecordPath &amp=
;&amp;
              // avoid comparing the child with its parent
              currentMatched[currentMatched.length - 1].path !=3D=3D parent=
RecordPath
              ? currentMatched.findIndex(isSameRouteRecord.bind(null, match=
ed[length - 2]))
              : index);
      });
      const isActive =3D vue.computed(() =3D&gt; activeRecordIndex.value &g=
t; -1 &amp;&amp;
          includesParams(currentRoute.params, route.value.params));
      const isExactActive =3D vue.computed(() =3D&gt; activeRecordIndex.val=
ue &gt; -1 &amp;&amp;
          activeRecordIndex.value =3D=3D=3D currentRoute.matched.length - 1=
 &amp;&amp;
          isSameRouteLocationParams(currentRoute.params, route.value.params=
));
      function navigate(e =3D {}) {
          if (guardEvent(e)) {
              const p =3D router[vue.unref(props.replace) ? 'replace' : 'pu=
sh'](vue.unref(props.to)
              // avoid uncaught errors are they are logged anyway
              ).catch(noop);
              if (props.viewTransition &amp;&amp;
                  typeof document !=3D=3D 'undefined' &amp;&amp;
                  'startViewTransition' in document) {
                  document.startViewTransition(() =3D&gt; p);
              }
              return p;
          }
          return Promise.resolve();
      }
      // devtools only
      if (isBrowser) {
          const instance =3D vue.getCurrentInstance();
          if (instance) {
              const linkContextDevtools =3D {
                  route: route.value,
                  isActive: isActive.value,
                  isExactActive: isExactActive.value,
                  error: null,
              };
              // @ts-expect-error: this is internal
              instance.__vrl_devtools =3D instance.__vrl_devtools || [];
              // @ts-expect-error: this is internal
              instance.__vrl_devtools.push(linkContextDevtools);
              vue.watchEffect(() =3D&gt; {
                  linkContextDevtools.route =3D route.value;
                  linkContextDevtools.isActive =3D isActive.value;
                  linkContextDevtools.isExactActive =3D isExactActive.value=
;
                  linkContextDevtools.error =3D isRouteLocation(vue.unref(p=
rops.to))
                      ? null
                      : 'Invalid "to" value';
              }, { flush: 'post' });
          }
      }
      /**
       * NOTE: update {@link _RouterLinkI}'s `$slots` type when updating th=
is
       */
      return {
          route,
          href: vue.computed(() =3D&gt; route.value.href),
          isActive,
          isExactActive,
          navigate,
      };
  }
  function preferSingleVNode(vnodes) {
      return vnodes.length =3D=3D=3D 1 ? vnodes[0] : vnodes;
  }
  const RouterLinkImpl =3D /*#__PURE__*/ vue.defineComponent({
      name: 'RouterLink',
      compatConfig: { MODE: 3 },
      props: {
          to: {
              type: [String, Object],
              required: true,
          },
          replace: Boolean,
          activeClass: String,
          // inactiveClass: String,
          exactActiveClass: String,
          custom: Boolean,
          ariaCurrentValue: {
              type: String,
              default: 'page',
          },
          viewTransition: Boolean,
      },
      useLink,
      setup(props, { slots }) {
          const link =3D vue.reactive(useLink(props));
          const { options } =3D vue.inject(routerKey);
          const elClass =3D vue.computed(() =3D&gt; ({
              [getLinkClass(props.activeClass, options.linkActiveClass, 'ro=
uter-link-active')]: link.isActive,
              // [getLinkClass(
              //   props.inactiveClass,
              //   options.linkInactiveClass,
              //   'router-link-inactive'
              // )]: !link.isExactActive,
              [getLinkClass(props.exactActiveClass, options.linkExactActive=
Class, 'router-link-exact-active')]: link.isExactActive,
          }));
          return () =3D&gt; {
              const children =3D slots.default &amp;&amp; preferSingleVNode=
(slots.default(link));
              return props.custom
                  ? children
                  : vue.h('a', {
                      'aria-current': link.isExactActive
                          ? props.ariaCurrentValue
                          : null,
                      href: link.href,
                      // this would override user added attrs but Vue will =
still add
                      // the listener, so we end up triggering both
                      onClick: link.navigate,
                      class: elClass.value,
                  }, children);
          };
      },
  });
  // export the public type for h/tsx inference
  // also to avoid inline import() in generated d.ts files
  /**
   * Component to render a link that triggers a navigation on click.
   */
  const RouterLink =3D RouterLinkImpl;
  function guardEvent(e) {
      // don't redirect with control keys
      if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
          return;
      // don't redirect when preventDefault called
      if (e.defaultPrevented)
          return;
      // don't redirect on right click
      if (e.button !=3D=3D undefined &amp;&amp; e.button !=3D=3D 0)
          return;
      // don't redirect if `target=3D"_blank"`
      // @ts-expect-error getAttribute does exist
      if (e.currentTarget &amp;&amp; e.currentTarget.getAttribute) {
          // @ts-expect-error getAttribute exists
          const target =3D e.currentTarget.getAttribute('target');
          if (/\b_blank\b/i.test(target))
              return;
      }
      // this may be a Weex event which doesn't have this method
      if (e.preventDefault)
          e.preventDefault();
      return true;
  }
  function includesParams(outer, inner) {
      for (const key in inner) {
          const innerValue =3D inner[key];
          const outerValue =3D outer[key];
          if (typeof innerValue =3D=3D=3D 'string') {
              if (innerValue !=3D=3D outerValue)
                  return false;
          }
          else {
              if (!isArray(outerValue) ||
                  outerValue.length !=3D=3D innerValue.length ||
                  innerValue.some((value, i) =3D&gt; value !=3D=3D outerVal=
ue[i]))
                  return false;
          }
      }
      return true;
  }
  /**
   * Get the original path value of a record by following its aliasOf
   * @param record
   */
  function getOriginalPath(record) {
      return record ? (record.aliasOf ? record.aliasOf.path : record.path) =
: '';
  }
  /**
   * Utility class to get the active class based on defaults.
   * @param propClass
   * @param globalClass
   * @param defaultClass
   */
  const getLinkClass =3D (propClass, globalClass, defaultClass) =3D&gt; pro=
pClass !=3D null
      ? propClass
      : globalClass !=3D null
          ? globalClass
          : defaultClass;

  const RouterViewImpl =3D /*#__PURE__*/ vue.defineComponent({
      name: 'RouterView',
      // #674 we manually inherit them
      inheritAttrs: false,
      props: {
          name: {
              type: String,
              default: 'default',
          },
          route: Object,
      },
      // Better compat for @vue/compat users
      // https://github.com/vuejs/router/issues/1315
      compatConfig: { MODE: 3 },
      setup(props, { attrs, slots }) {
          warnDeprecatedUsage();
          const injectedRoute =3D vue.inject(routerViewLocationKey);
          const routeToDisplay =3D vue.computed(() =3D&gt; props.route || i=
njectedRoute.value);
          const injectedDepth =3D vue.inject(viewDepthKey, 0);
          // The depth changes based on empty components option, which allo=
ws passthrough routes e.g. routes with children
          // that are used to reuse the `path` property
          const depth =3D vue.computed(() =3D&gt; {
              let initialDepth =3D vue.unref(injectedDepth);
              const { matched } =3D routeToDisplay.value;
              let matchedRoute;
              while ((matchedRoute =3D matched[initialDepth]) &amp;&amp;
                  !matchedRoute.components) {
                  initialDepth++;
              }
              return initialDepth;
          });
          const matchedRouteRef =3D vue.computed(() =3D&gt; routeToDisplay.=
value.matched[depth.value]);
          vue.provide(viewDepthKey, vue.computed(() =3D&gt; depth.value + 1=
));
          vue.provide(matchedRouteKey, matchedRouteRef);
          vue.provide(routerViewLocationKey, routeToDisplay);
          const viewRef =3D vue.ref();
          // watch at the same time the component instance, the route recor=
d we are
          // rendering, and the name
          vue.watch(() =3D&gt; [viewRef.value, matchedRouteRef.value, props=
.name], ([instance, to, name], [oldInstance, from, oldName]) =3D&gt; {
              // copy reused instances
              if (to) {
                  // this will update the instance for new instances as wel=
l as reused
                  // instances when navigating to a new route
                  to.instances[name] =3D instance;
                  // the component instance is reused for a different route=
 or name, so
                  // we copy any saved update or leave guards. With async s=
etup, the
                  // mounting component will mount before the matchedRoute =
changes,
                  // making instance =3D=3D=3D oldInstance, so we check if =
guards have been
                  // added before. This works because we remove guards when
                  // unmounting/deactivating components
                  if (from &amp;&amp; from !=3D=3D to &amp;&amp; instance &=
amp;&amp; instance =3D=3D=3D oldInstance) {
                      if (!to.leaveGuards.size) {
                          to.leaveGuards =3D from.leaveGuards;
                      }
                      if (!to.updateGuards.size) {
                          to.updateGuards =3D from.updateGuards;
                      }
                  }
              }
              // trigger beforeRouteEnter next callbacks
              if (instance &amp;&amp;
                  to &amp;&amp;
                  // if there is no instance but to and from are the same t=
his might be
                  // the first visit
                  (!from || !isSameRouteRecord(to, from) || !oldInstance)) =
{
                  (to.enterCallbacks[name] || []).forEach(callback =3D&gt; =
callback(instance));
              }
          }, { flush: 'post' });
          return () =3D&gt; {
              const route =3D routeToDisplay.value;
              // we need the value at the time we render because when we un=
mount, we
              // navigated to a different location so the value is differen=
t
              const currentName =3D props.name;
              const matchedRoute =3D matchedRouteRef.value;
              const ViewComponent =3D matchedRoute &amp;&amp; matchedRoute.=
components[currentName];
              if (!ViewComponent) {
                  return normalizeSlot(slots.default, { Component: ViewComp=
onent, route });
              }
              // props from route configuration
              const routePropsOption =3D matchedRoute.props[currentName];
              const routeProps =3D routePropsOption
                  ? routePropsOption =3D=3D=3D true
                      ? route.params
                      : typeof routePropsOption =3D=3D=3D 'function'
                          ? routePropsOption(route)
                          : routePropsOption
                  : null;
              const onVnodeUnmounted =3D vnode =3D&gt; {
                  // remove the instance reference to prevent leak
                  if (vnode.component.isUnmounted) {
                      matchedRoute.instances[currentName] =3D null;
                  }
              };
              const component =3D vue.h(ViewComponent, assign({}, routeProp=
s, attrs, {
                  onVnodeUnmounted,
                  ref: viewRef,
              }));
              if (isBrowser &amp;&amp;
                  component.ref) {
                  // TODO: can display if it's an alias, its props
                  const info =3D {
                      depth: depth.value,
                      name: matchedRoute.name,
                      path: matchedRoute.path,
                      meta: matchedRoute.meta,
                  };
                  const internalInstances =3D isArray(component.ref)
                      ? component.ref.map(r =3D&gt; r.i)
                      : [component.ref.i];
                  internalInstances.forEach(instance =3D&gt; {
                      // @ts-expect-error
                      instance.__vrv_devtools =3D info;
                  });
              }
              return (
              // pass the vnode to the slot as a prop.
              // h and &lt;component :is=3D"..."&gt; both accept vnodes
              normalizeSlot(slots.default, { Component: component, route })=
 ||
                  component);
          };
      },
  });
  function normalizeSlot(slot, data) {
      if (!slot)
          return null;
      const slotContent =3D slot(data);
      return slotContent.length =3D=3D=3D 1 ? slotContent[0] : slotContent;
  }
  // export the public type for h/tsx inference
  // also to avoid inline import() in generated d.ts files
  /**
   * Component to display the current route the user is at.
   */
  const RouterView =3D RouterViewImpl;
  // warn against deprecated usage with &lt;transition&gt; &amp; &lt;keep-a=
live&gt;
  // due to functional component being no longer eager in Vue 3
  function warnDeprecatedUsage() {
      const instance =3D vue.getCurrentInstance();
      const parentName =3D instance.parent &amp;&amp; instance.parent.type.=
name;
      const parentSubTreeType =3D instance.parent &amp;&amp; instance.paren=
t.subTree &amp;&amp; instance.parent.subTree.type;
      if (parentName &amp;&amp;
          (parentName =3D=3D=3D 'KeepAlive' || parentName.includes('Transit=
ion')) &amp;&amp;
          typeof parentSubTreeType =3D=3D=3D 'object' &amp;&amp;
          parentSubTreeType.name =3D=3D=3D 'RouterView') {
          const comp =3D parentName =3D=3D=3D 'KeepAlive' ? 'keep-alive' : =
'transition';
          warn(`&lt;router-view&gt; can no longer be used directly inside &=
lt;transition&gt; or &lt;keep-alive&gt;.\n` +
              `Use slot props instead:\n\n` +
              `&lt;router-view v-slot=3D"{ Component }"&gt;\n` +
              `  &lt;${comp}&gt;\n` +
              `    &lt;component :is=3D"Component" /&gt;\n` +
              `  &lt;/${comp}&gt;\n` +
              `&lt;/router-view&gt;`);
      }
  }

  function getDevtoolsGlobalHook() {
      return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
      // @ts-expect-error navigator and windows are not available in all en=
vironments
      return (typeof navigator !=3D=3D 'undefined' &amp;&amp; typeof window=
 !=3D=3D 'undefined')
          ? window
          : typeof globalThis !=3D=3D 'undefined'
              ? globalThis
              : {};
  }
  const isProxyAvailable =3D typeof Proxy =3D=3D=3D 'function';

  const HOOK_SETUP =3D 'devtools-plugin:setup';
  const HOOK_PLUGIN_SETTINGS_SET =3D 'plugin:settings:set';

  let supported;
  let perf;
  function isPerformanceSupported() {
      var _a;
      if (supported !=3D=3D undefined) {
          return supported;
      }
      if (typeof window !=3D=3D 'undefined' &amp;&amp; window.performance) =
{
          supported =3D true;
          perf =3D window.performance;
      }
      else if (typeof globalThis !=3D=3D 'undefined' &amp;&amp; ((_a =3D gl=
obalThis.perf_hooks) =3D=3D=3D null || _a =3D=3D=3D void 0 ? void 0 : _a.pe=
rformance)) {
          supported =3D true;
          perf =3D globalThis.perf_hooks.performance;
      }
      else {
          supported =3D false;
      }
      return supported;
  }
  function now() {
      return isPerformanceSupported() ? perf.now() : Date.now();
  }

  class ApiProxy {
      constructor(plugin, hook) {
          this.target =3D null;
          this.targetQueue =3D [];
          this.onQueue =3D [];
          this.plugin =3D plugin;
          this.hook =3D hook;
          const defaultSettings =3D {};
          if (plugin.settings) {
              for (const id in plugin.settings) {
                  const item =3D plugin.settings[id];
                  defaultSettings[id] =3D item.defaultValue;
              }
          }
          const localSettingsSaveId =3D `__vue-devtools-plugin-settings__${=
plugin.id}`;
          let currentSettings =3D Object.assign({}, defaultSettings);
          try {
              const raw =3D localStorage.getItem(localSettingsSaveId);
              const data =3D JSON.parse(raw);
              Object.assign(currentSettings, data);
          }
          catch (e) {
              // noop
          }
          this.fallbacks =3D {
              getSettings() {
                  return currentSettings;
              },
              setSettings(value) {
                  try {
                      localStorage.setItem(localSettingsSaveId, JSON.string=
ify(value));
                  }
                  catch (e) {
                      // noop
                  }
                  currentSettings =3D value;
              },
              now() {
                  return now();
              },
          };
          if (hook) {
              hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) =3D&gt; {
                  if (pluginId =3D=3D=3D this.plugin.id) {
                      this.fallbacks.setSettings(value);
                  }
              });
          }
          this.proxiedOn =3D new Proxy({}, {
              get: (_target, prop) =3D&gt; {
                  if (this.target) {
                      return this.target.on[prop];
                  }
                  else {
                      return (...args) =3D&gt; {
                          this.onQueue.push({
                              method: prop,
                              args,
                          });
                      };
                  }
              },
          });
          this.proxiedTarget =3D new Proxy({}, {
              get: (_target, prop) =3D&gt; {
                  if (this.target) {
                      return this.target[prop];
                  }
                  else if (prop =3D=3D=3D 'on') {
                      return this.proxiedOn;
                  }
                  else if (Object.keys(this.fallbacks).includes(prop)) {
                      return (...args) =3D&gt; {
                          this.targetQueue.push({
                              method: prop,
                              args,
                              resolve: () =3D&gt; { },
                          });
                          return this.fallbacks[prop](...args);
                      };
                  }
                  else {
                      return (...args) =3D&gt; {
                          return new Promise((resolve) =3D&gt; {
                              this.targetQueue.push({
                                  method: prop,
                                  args,
                                  resolve,
                              });
                          });
                      };
                  }
              },
          });
      }
      async setRealTarget(target) {
          this.target =3D target;
          for (const item of this.onQueue) {
              this.target.on[item.method](...item.args);
          }
          for (const item of this.targetQueue) {
              item.resolve(await this.target[item.method](...item.args));
          }
      }
  }

  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
      const descriptor =3D pluginDescriptor;
      const target =3D getTarget();
      const hook =3D getDevtoolsGlobalHook();
      const enableProxy =3D isProxyAvailable &amp;&amp; descriptor.enableEa=
rlyProxy;
      if (hook &amp;&amp; (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || =
!enableProxy)) {
          hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
      }
      else {
          const proxy =3D enableProxy ? new ApiProxy(descriptor, hook) : nu=
ll;
          const list =3D target.__VUE_DEVTOOLS_PLUGINS__ =3D target.__VUE_D=
EVTOOLS_PLUGINS__ || [];
          list.push({
              pluginDescriptor: descriptor,
              setupFn,
              proxy,
          });
          if (proxy) {
              setupFn(proxy.proxiedTarget);
          }
      }
  }

  /**
   * Copies a route location and removes any problematic properties that ca=
nnot be shown in devtools (e.g. Vue instances).
   *
   * @param routeLocation - routeLocation to format
   * @param tooltip - optional tooltip
   * @returns a copy of the routeLocation
   */
  function formatRouteLocation(routeLocation, tooltip) {
      const copy =3D assign({}, routeLocation, {
          // remove variables that can contain vue instances
          matched: routeLocation.matched.map(matched =3D&gt; omit(matched, =
['instances', 'children', 'aliasOf'])),
      });
      return {
          _custom: {
              type: null,
              readOnly: true,
              display: routeLocation.fullPath,
              tooltip,
              value: copy,
          },
      };
  }
  function formatDisplay(display) {
      return {
          _custom: {
              display,
          },
      };
  }
  // to support multiple router instances
  let routerId =3D 0;
  function addDevtools(app, router, matcher) {
      // Take over router.beforeEach and afterEach
      // make sure we are not registering the devtool twice
      if (router.__hasDevtools)
          return;
      router.__hasDevtools =3D true;
      // increment to support multiple router instances
      const id =3D routerId++;
      setupDevtoolsPlugin({
          id: 'org.vuejs.router' + (id ? '.' + id : ''),
          label: 'Vue Router',
          packageName: 'vue-router',
          homepage: 'https://router.vuejs.org',
          logo: 'https://router.vuejs.org/logo.png',
          componentStateTypes: ['Routing'],
          app,
      }, api =3D&gt; {
          if (typeof api.now !=3D=3D 'function') {
              console.warn('[Vue Router]: You seem to be using an outdated =
version of Vue Devtools. Are you still using the Beta release instead of th=
e stable one? You can find the links at https://devtools.vuejs.org/guide/in=
stallation.html.');
          }
          // display state added by the router
          api.on.inspectComponent((payload, ctx) =3D&gt; {
              if (payload.instanceData) {
                  payload.instanceData.state.push({
                      type: 'Routing',
                      key: '$route',
                      editable: false,
                      value: formatRouteLocation(router.currentRoute.value,=
 'Current Route'),
                  });
              }
          });
          // mark router-link as active and display tags on router views
          api.on.visitComponentTree(({ treeNode: node, componentInstance })=
 =3D&gt; {
              if (componentInstance.__vrv_devtools) {
                  const info =3D componentInstance.__vrv_devtools;
                  node.tags.push({
                      label: (info.name ? `${info.name.toString()}: ` : '')=
 + info.path,
                      textColor: 0,
                      tooltip: 'This component is rendered by &amp;lt;route=
r-view&amp;gt;',
                      backgroundColor: PINK_500,
                  });
              }
              // if multiple useLink are used
              if (isArray(componentInstance.__vrl_devtools)) {
                  componentInstance.__devtoolsApi =3D api;
                  componentInstance.__vrl_devtools.forEach(devtoolsData =3D=
&gt; {
                      let label =3D devtoolsData.route.path;
                      let backgroundColor =3D ORANGE_400;
                      let tooltip =3D '';
                      let textColor =3D 0;
                      if (devtoolsData.error) {
                          label =3D devtoolsData.error;
                          backgroundColor =3D RED_100;
                          textColor =3D RED_700;
                      }
                      else if (devtoolsData.isExactActive) {
                          backgroundColor =3D LIME_500;
                          tooltip =3D 'This is exactly active';
                      }
                      else if (devtoolsData.isActive) {
                          backgroundColor =3D BLUE_600;
                          tooltip =3D 'This link is active';
                      }
                      node.tags.push({
                          label,
                          textColor,
                          tooltip,
                          backgroundColor,
                      });
                  });
              }
          });
          vue.watch(router.currentRoute, () =3D&gt; {
              // refresh active state
              refreshRoutesView();
              api.notifyComponentUpdate();
              api.sendInspectorTree(routerInspectorId);
              api.sendInspectorState(routerInspectorId);
          });
          const navigationsLayerId =3D 'router:navigations:' + id;
          api.addTimelineLayer({
              id: navigationsLayerId,
              label: `Router${id ? ' ' + id : ''} Navigations`,
              color: 0x40a8c4,
          });
          // const errorsLayerId =3D 'router:errors'
          // api.addTimelineLayer({
          //   id: errorsLayerId,
          //   label: 'Router Errors',
          //   color: 0xea5455,
          // })
          router.onError((error, to) =3D&gt; {
              api.addTimelineEvent({
                  layerId: navigationsLayerId,
                  event: {
                      title: 'Error during Navigation',
                      subtitle: to.fullPath,
                      logType: 'error',
                      time: api.now(),
                      data: { error },
                      groupId: to.meta.__navigationId,
                  },
              });
          });
          // attached to `meta` and used to group events
          let navigationId =3D 0;
          router.beforeEach((to, from) =3D&gt; {
              const data =3D {
                  guard: formatDisplay('beforeEach'),
                  from: formatRouteLocation(from, 'Current Location during =
this navigation'),
                  to: formatRouteLocation(to, 'Target location'),
              };
              // Used to group navigations together, hide from devtools
              Object.defineProperty(to.meta, '__navigationId', {
                  value: navigationId++,
              });
              api.addTimelineEvent({
                  layerId: navigationsLayerId,
                  event: {
                      time: api.now(),
                      title: 'Start of navigation',
                      subtitle: to.fullPath,
                      data,
                      groupId: to.meta.__navigationId,
                  },
              });
          });
          router.afterEach((to, from, failure) =3D&gt; {
              const data =3D {
                  guard: formatDisplay('afterEach'),
              };
              if (failure) {
                  data.failure =3D {
                      _custom: {
                          type: Error,
                          readOnly: true,
                          display: failure ? failure.message : '',
                          tooltip: 'Navigation Failure',
                          value: failure,
                      },
                  };
                  data.status =3D formatDisplay('=E2=9D=8C');
              }
              else {
                  data.status =3D formatDisplay('=E2=9C=85');
              }
              // we set here to have the right order
              data.from =3D formatRouteLocation(from, 'Current Location dur=
ing this navigation');
              data.to =3D formatRouteLocation(to, 'Target location');
              api.addTimelineEvent({
                  layerId: navigationsLayerId,
                  event: {
                      title: 'End of navigation',
                      subtitle: to.fullPath,
                      time: api.now(),
                      data,
                      logType: failure ? 'warning' : 'default',
                      groupId: to.meta.__navigationId,
                  },
              });
          });
          /**
           * Inspector of Existing routes
           */
          const routerInspectorId =3D 'router-inspector:' + id;
          api.addInspector({
              id: routerInspectorId,
              label: 'Routes' + (id ? ' ' + id : ''),
              icon: 'book',
              treeFilterPlaceholder: 'Search routes',
          });
          function refreshRoutesView() {
              // the routes view isn't active
              if (!activeRoutesPayload)
                  return;
              const payload =3D activeRoutesPayload;
              // children routes will appear as nested
              let routes =3D matcher.getRoutes().filter(route =3D&gt; !rout=
e.parent ||
                  // these routes have a parent with no component which wil=
l not appear in the view
                  // therefore we still need to include them
                  !route.parent.record.components);
              // reset match state to false
              routes.forEach(resetMatchStateOnRouteRecord);
              // apply a match state if there is a payload
              if (payload.filter) {
                  routes =3D routes.filter(route =3D&gt;=20
                  // save matches state based on the payload
                  isRouteMatching(route, payload.filter.toLowerCase()));
              }
              // mark active routes
              routes.forEach(route =3D&gt; markRouteRecordActive(route, rou=
ter.currentRoute.value));
              payload.rootNodes =3D routes.map(formatRouteRecordForInspecto=
r);
          }
          let activeRoutesPayload;
          api.on.getInspectorTree(payload =3D&gt; {
              activeRoutesPayload =3D payload;
              if (payload.app =3D=3D=3D app &amp;&amp; payload.inspectorId =
=3D=3D=3D routerInspectorId) {
                  refreshRoutesView();
              }
          });
          /**
           * Display information about the currently selected route record
           */
          api.on.getInspectorState(payload =3D&gt; {
              if (payload.app =3D=3D=3D app &amp;&amp; payload.inspectorId =
=3D=3D=3D routerInspectorId) {
                  const routes =3D matcher.getRoutes();
                  const route =3D routes.find(route =3D&gt; route.record.__=
vd_id =3D=3D=3D payload.nodeId);
                  if (route) {
                      payload.state =3D {
                          options: formatRouteRecordMatcherForStateInspecto=
r(route),
                      };
                  }
              }
          });
          api.sendInspectorTree(routerInspectorId);
          api.sendInspectorState(routerInspectorId);
      });
  }
  function modifierForKey(key) {
      if (key.optional) {
          return key.repeatable ? '*' : '?';
      }
      else {
          return key.repeatable ? '+' : '';
      }
  }
  function formatRouteRecordMatcherForStateInspector(route) {
      const { record } =3D route;
      const fields =3D [
          { editable: false, key: 'path', value: record.path },
      ];
      if (record.name !=3D null) {
          fields.push({
              editable: false,
              key: 'name',
              value: record.name,
          });
      }
      fields.push({ editable: false, key: 'regexp', value: route.re });
      if (route.keys.length) {
          fields.push({
              editable: false,
              key: 'keys',
              value: {
                  _custom: {
                      type: null,
                      readOnly: true,
                      display: route.keys
                          .map(key =3D&gt; `${key.name}${modifierForKey(key=
)}`)
                          .join(' '),
                      tooltip: 'Param keys',
                      value: route.keys,
                  },
              },
          });
      }
      if (record.redirect !=3D null) {
          fields.push({
              editable: false,
              key: 'redirect',
              value: record.redirect,
          });
      }
      if (route.alias.length) {
          fields.push({
              editable: false,
              key: 'aliases',
              value: route.alias.map(alias =3D&gt; alias.record.path),
          });
      }
      if (Object.keys(route.record.meta).length) {
          fields.push({
              editable: false,
              key: 'meta',
              value: route.record.meta,
          });
      }
      fields.push({
          key: 'score',
          editable: false,
          value: {
              _custom: {
                  type: null,
                  readOnly: true,
                  display: route.score.map(score =3D&gt; score.join(', ')).=
join(' | '),
                  tooltip: 'Score used to sort routes',
                  value: route.score,
              },
          },
      });
      return fields;
  }
  /**
   * Extracted from tailwind palette
   */
  const PINK_500 =3D 0xec4899;
  const BLUE_600 =3D 0x2563eb;
  const LIME_500 =3D 0x84cc16;
  const CYAN_400 =3D 0x22d3ee;
  const ORANGE_400 =3D 0xfb923c;
  // const GRAY_100 =3D 0xf4f4f5
  const DARK =3D 0x666666;
  const RED_100 =3D 0xfee2e2;
  const RED_700 =3D 0xb91c1c;
  function formatRouteRecordForInspector(route) {
      const tags =3D [];
      const { record } =3D route;
      if (record.name !=3D null) {
          tags.push({
              label: String(record.name),
              textColor: 0,
              backgroundColor: CYAN_400,
          });
      }
      if (record.aliasOf) {
          tags.push({
              label: 'alias',
              textColor: 0,
              backgroundColor: ORANGE_400,
          });
      }
      if (route.__vd_match) {
          tags.push({
              label: 'matches',
              textColor: 0,
              backgroundColor: PINK_500,
          });
      }
      if (route.__vd_exactActive) {
          tags.push({
              label: 'exact',
              textColor: 0,
              backgroundColor: LIME_500,
          });
      }
      if (route.__vd_active) {
          tags.push({
              label: 'active',
              textColor: 0,
              backgroundColor: BLUE_600,
          });
      }
      if (record.redirect) {
          tags.push({
              label: typeof record.redirect =3D=3D=3D 'string'
                  ? `redirect: ${record.redirect}`
                  : 'redirects',
              textColor: 0xffffff,
              backgroundColor: DARK,
          });
      }
      // add an id to be able to select it. Using the `path` is not possibl=
e because
      // empty path children would collide with their parents
      let id =3D record.__vd_id;
      if (id =3D=3D null) {
          id =3D String(routeRecordId++);
          record.__vd_id =3D id;
      }
      return {
          id,
          label: record.path,
          tags,
          children: route.children.map(formatRouteRecordForInspector),
      };
  }
  //  incremental id for route records and inspector state
  let routeRecordId =3D 0;
  const EXTRACT_REGEXP_RE =3D /^\/(.*)\/([a-z]*)$/;
  function markRouteRecordActive(route, currentRoute) {
      // no route will be active if matched is empty
      // reset the matching state
      const isExactActive =3D currentRoute.matched.length &amp;&amp;
          isSameRouteRecord(currentRoute.matched[currentRoute.matched.lengt=
h - 1], route.record);
      route.__vd_exactActive =3D route.__vd_active =3D isExactActive;
      if (!isExactActive) {
          route.__vd_active =3D currentRoute.matched.some(match =3D&gt; isS=
ameRouteRecord(match, route.record));
      }
      route.children.forEach(childRoute =3D&gt; markRouteRecordActive(child=
Route, currentRoute));
  }
  function resetMatchStateOnRouteRecord(route) {
      route.__vd_match =3D false;
      route.children.forEach(resetMatchStateOnRouteRecord);
  }
  function isRouteMatching(route, filter) {
      const found =3D String(route.re).match(EXTRACT_REGEXP_RE);
      route.__vd_match =3D false;
      if (!found || found.length &lt; 3) {
          return false;
      }
      // use a regexp without $ at the end to match nested routes better
      const nonEndingRE =3D new RegExp(found[1].replace(/\$$/, ''), found[2=
]);
      if (nonEndingRE.test(filter)) {
          // mark children as matches
          route.children.forEach(child =3D&gt; isRouteMatching(child, filte=
r));
          // exception case: `/`
          if (route.record.path !=3D=3D '/' || filter =3D=3D=3D '/') {
              route.__vd_match =3D route.re.test(filter);
              return true;
          }
          // hide the / route
          return false;
      }
      const path =3D route.record.path.toLowerCase();
      const decodedPath =3D decode(path);
      // also allow partial matching on the path
      if (!filter.startsWith('/') &amp;&amp;
          (decodedPath.includes(filter) || path.includes(filter)))
          return true;
      if (decodedPath.startsWith(filter) || path.startsWith(filter))
          return true;
      if (route.record.name &amp;&amp; String(route.record.name).includes(f=
ilter))
          return true;
      return route.children.some(child =3D&gt; isRouteMatching(child, filte=
r));
  }
  function omit(obj, keys) {
      const ret =3D {};
      for (const key in obj) {
          if (!keys.includes(key)) {
              // @ts-expect-error
              ret[key] =3D obj[key];
          }
      }
      return ret;
  }

  /**
   * Creates a Router instance that can be used by a Vue app.
   *
   * @param options - {@link RouterOptions}
   */
  function createRouter(options) {
      const matcher =3D createRouterMatcher(options.routes, options);
      const parseQuery$1 =3D options.parseQuery || parseQuery;
      const stringifyQuery$1 =3D options.stringifyQuery || stringifyQuery;
      const routerHistory =3D options.history;
      if (!routerHistory)
          throw new Error('Provide the "history" option when calling "creat=
eRouter()":' +
              ' https://router.vuejs.org/api/interfaces/RouterOptions.html#=
history');
      const beforeGuards =3D useCallbacks();
      const beforeResolveGuards =3D useCallbacks();
      const afterGuards =3D useCallbacks();
      const currentRoute =3D vue.shallowRef(START_LOCATION_NORMALIZED);
      let pendingLocation =3D START_LOCATION_NORMALIZED;
      // leave the scrollRestoration if no scrollBehavior is provided
      if (isBrowser &amp;&amp; options.scrollBehavior &amp;&amp; 'scrollRes=
toration' in history) {
          history.scrollRestoration =3D 'manual';
      }
      const normalizeParams =3D applyToParams.bind(null, paramValue =3D&gt;=
 '' + paramValue);
      const encodeParams =3D applyToParams.bind(null, encodeParam);
      const decodeParams =3D=20
      // @ts-expect-error: intentionally avoid the type check
      applyToParams.bind(null, decode);
      function addRoute(parentOrRoute, route) {
          let parent;
          let record;
          if (isRouteName(parentOrRoute)) {
              parent =3D matcher.getRecordMatcher(parentOrRoute);
              if (!parent) {
                  warn(`Parent route "${String(parentOrRoute)}" not found w=
hen adding child route`, route);
              }
              record =3D route;
          }
          else {
              record =3D parentOrRoute;
          }
          return matcher.addRoute(record, parent);
      }
      function removeRoute(name) {
          const recordMatcher =3D matcher.getRecordMatcher(name);
          if (recordMatcher) {
              matcher.removeRoute(recordMatcher);
          }
          else {
              warn(`Cannot remove non-existent route "${String(name)}"`);
          }
      }
      function getRoutes() {
          return matcher.getRoutes().map(routeMatcher =3D&gt; routeMatcher.=
record);
      }
      function hasRoute(name) {
          return !!matcher.getRecordMatcher(name);
      }
      function resolve(rawLocation, currentLocation) {
          // const resolve: Router['resolve'] =3D (rawLocation: RouteLocati=
onRaw, currentLocation) =3D&gt; {
          // const objectLocation =3D routerLocationAsObject(rawLocation)
          // we create a copy to modify it later
          currentLocation =3D assign({}, currentLocation || currentRoute.va=
lue);
          if (typeof rawLocation =3D=3D=3D 'string') {
              const locationNormalized =3D parseURL(parseQuery$1, rawLocati=
on, currentLocation.path);
              const matchedRoute =3D matcher.resolve({ path: locationNormal=
ized.path }, currentLocation);
              const href =3D routerHistory.createHref(locationNormalized.fu=
llPath);
              {
                  if (href.startsWith('//'))
                      warn(`Location "${rawLocation}" resolved to "${href}"=
. A resolved location cannot start with multiple slashes.`);
                  else if (!matchedRoute.matched.length) {
                      warn(`No match found for location with path "${rawLoc=
ation}"`);
                  }
              }
              // locationNormalized is always a new object
              return assign(locationNormalized, matchedRoute, {
                  params: decodeParams(matchedRoute.params),
                  hash: decode(locationNormalized.hash),
                  redirectedFrom: undefined,
                  href,
              });
          }
          if (!isRouteLocation(rawLocation)) {
              warn(`router.resolve() was passed an invalid location. This w=
ill fail in production.\n- Location:`, rawLocation);
              return resolve({});
          }
          let matcherLocation;
          // path could be relative in object as well
          if (rawLocation.path !=3D null) {
              if ('params' in rawLocation &amp;&amp;
                  !('name' in rawLocation) &amp;&amp;
                  // @ts-expect-error: the type is never
                  Object.keys(rawLocation.params).length) {
                  warn(`Path "${rawLocation.path}" was passed with params b=
ut they will be ignored. Use a named route alongside params instead.`);
              }
              matcherLocation =3D assign({}, rawLocation, {
                  path: parseURL(parseQuery$1, rawLocation.path, currentLoc=
ation.path).path,
              });
          }
          else {
              // remove any nullish param
              const targetParams =3D assign({}, rawLocation.params);
              for (const key in targetParams) {
                  if (targetParams[key] =3D=3D null) {
                      delete targetParams[key];
                  }
              }
              // pass encoded values to the matcher, so it can produce enco=
ded path and fullPath
              matcherLocation =3D assign({}, rawLocation, {
                  params: encodeParams(targetParams),
              });
              // current location params are decoded, we need to encode the=
m in case the
              // matcher merges the params
              currentLocation.params =3D encodeParams(currentLocation.param=
s);
          }
          const matchedRoute =3D matcher.resolve(matcherLocation, currentLo=
cation);
          const hash =3D rawLocation.hash || '';
          if (hash &amp;&amp; !hash.startsWith('#')) {
              warn(`A \`hash\` should always start with the character "#". =
Replace "${hash}" with "#${hash}".`);
          }
          // the matcher might have merged current location params, so
          // we need to run the decoding again
          matchedRoute.params =3D normalizeParams(decodeParams(matchedRoute=
.params));
          const fullPath =3D stringifyURL(stringifyQuery$1, assign({}, rawL=
ocation, {
              hash: encodeHash(hash),
              path: matchedRoute.path,
          }));
          const href =3D routerHistory.createHref(fullPath);
          {
              if (href.startsWith('//')) {
                  warn(`Location "${rawLocation}" resolved to "${href}". A =
resolved location cannot start with multiple slashes.`);
              }
              else if (!matchedRoute.matched.length) {
                  warn(`No match found for location with path "${rawLocatio=
n.path !=3D null ? rawLocation.path : rawLocation}"`);
              }
          }
          return assign({
              fullPath,
              // keep the hash encoded so fullPath is effectively path + en=
codedQuery +
              // hash
              hash,
              query:=20
              // if the user is using a custom query lib like qs, we might =
have
              // nested objects, so we keep the query as is, meaning it can=
 contain
              // numbers at `$route.query`, but at the point, the user will=
 have to
              // use their own type anyway.
              // https://github.com/vuejs/router/issues/328#issuecomment-64=
9481567
              stringifyQuery$1 =3D=3D=3D stringifyQuery
                  ? normalizeQuery(rawLocation.query)
                  : (rawLocation.query || {}),
          }, matchedRoute, {
              redirectedFrom: undefined,
              href,
          });
      }
      function locationAsObject(to) {
          return typeof to =3D=3D=3D 'string'
              ? parseURL(parseQuery$1, to, currentRoute.value.path)
              : assign({}, to);
      }
      function checkCanceledNavigation(to, from) {
          if (pendingLocation !=3D=3D to) {
              return createRouterError(8 /* ErrorTypes.NAVIGATION_CANCELLED=
 */, {
                  from,
                  to,
              });
          }
      }
      function push(to) {
          return pushWithRedirect(to);
      }
      function replace(to) {
          return push(assign(locationAsObject(to), { replace: true }));
      }
      function handleRedirectRecord(to) {
          const lastMatched =3D to.matched[to.matched.length - 1];
          if (lastMatched &amp;&amp; lastMatched.redirect) {
              const { redirect } =3D lastMatched;
              let newTargetLocation =3D typeof redirect =3D=3D=3D 'function=
' ? redirect(to) : redirect;
              if (typeof newTargetLocation =3D=3D=3D 'string') {
                  newTargetLocation =3D
                      newTargetLocation.includes('?') || newTargetLocation.=
includes('#')
                          ? (newTargetLocation =3D locationAsObject(newTarg=
etLocation))
                          : // force empty params
                              { path: newTargetLocation };
                  // @ts-expect-error: force empty params when a string is =
passed to let
                  // the router parse them again
                  newTargetLocation.params =3D {};
              }
              if (newTargetLocation.path =3D=3D null &amp;&amp;
                  !('name' in newTargetLocation)) {
                  warn(`Invalid redirect found:\n${JSON.stringify(newTarget=
Location, null, 2)}\n when navigating to "${to.fullPath}". A redirect must =
contain a name or path. This will break in production.`);
                  throw new Error('Invalid redirect');
              }
              return assign({
                  query: to.query,
                  hash: to.hash,
                  // avoid transferring params if the redirect has a path
                  params: newTargetLocation.path !=3D null ? {} : to.params=
,
              }, newTargetLocation);
          }
      }
      function pushWithRedirect(to, redirectedFrom) {
          const targetLocation =3D (pendingLocation =3D resolve(to));
          const from =3D currentRoute.value;
          const data =3D to.state;
          const force =3D to.force;
          // to could be a string where `replace` is a function
          const replace =3D to.replace =3D=3D=3D true;
          const shouldRedirect =3D handleRedirectRecord(targetLocation);
          if (shouldRedirect)
              return pushWithRedirect(assign(locationAsObject(shouldRedirec=
t), {
                  state: typeof shouldRedirect =3D=3D=3D 'object'
                      ? assign({}, data, shouldRedirect.state)
                      : data,
                  force,
                  replace,
              }),=20
              // keep original redirectedFrom if it exists
              redirectedFrom || targetLocation);
          // if it was a redirect we already called `pushWithRedirect` abov=
e
          const toLocation =3D targetLocation;
          toLocation.redirectedFrom =3D redirectedFrom;
          let failure;
          if (!force &amp;&amp; isSameRouteLocation(stringifyQuery$1, from,=
 targetLocation)) {
              failure =3D createRouterError(16 /* ErrorTypes.NAVIGATION_DUP=
LICATED */, { to: toLocation, from });
              // trigger scroll to allow scrolling to the same anchor
              handleScroll(from, from,=20
              // this is a push, the only way for it to be triggered from a
              // history.listen is with a redirect, which makes it become a=
 push
              true,=20
              // This cannot be the first navigation because the initial lo=
cation
              // cannot be manually navigated to
              false);
          }
          return (failure ? Promise.resolve(failure) : navigate(toLocation,=
 from))
              .catch((error) =3D&gt; isNavigationFailure(error)
              ? // navigation redirects still mark the router as ready
                  isNavigationFailure(error, 2 /* ErrorTypes.NAVIGATION_GUA=
RD_REDIRECT */)
                      ? error
                      : markAsReady(error) // also returns the error
              : // reject any unknown error
                  triggerError(error, toLocation, from))
              .then((failure) =3D&gt; {
              if (failure) {
                  if (isNavigationFailure(failure, 2 /* ErrorTypes.NAVIGATI=
ON_GUARD_REDIRECT */)) {
                      if (// we are redirecting to the same location we wer=
e already at
                          isSameRouteLocation(stringifyQuery$1, resolve(fai=
lure.to), toLocation) &amp;&amp;
                          // and we have done it a couple of times
                          redirectedFrom &amp;&amp;
                          // @ts-expect-error: added only in dev
                          (redirectedFrom._count =3D redirectedFrom._count
                              ? // @ts-expect-error
                                  redirectedFrom._count + 1
                              : 1) &gt; 30) {
                          warn(`Detected a possibly infinite redirection in=
 a navigation guard when going from "${from.fullPath}" to "${toLocation.ful=
lPath}". Aborting to avoid a Stack Overflow.\n Are you always returning a n=
ew location within a navigation guard? That would lead to this error. Only =
return when redirecting or aborting, that should fix this. This might break=
 in production if not fixed.`);
                          return Promise.reject(new Error('Infinite redirec=
t in navigation guard'));
                      }
                      return pushWithRedirect(
                      // keep options
                      assign({
                          // preserve an existing replacement but allow the=
 redirect to override it
                          replace,
                      }, locationAsObject(failure.to), {
                          state: typeof failure.to =3D=3D=3D 'object'
                              ? assign({}, data, failure.to.state)
                              : data,
                          force,
                      }),=20
                      // preserve the original redirectedFrom if any
                      redirectedFrom || toLocation);
                  }
              }
              else {
                  // if we fail we don't finalize the navigation
                  failure =3D finalizeNavigation(toLocation, from, true, re=
place, data);
              }
              triggerAfterEach(toLocation, from, failure);
              return failure;
          });
      }
      /**
       * Helper to reject and skip all navigation guards if a new navigatio=
n happened
       * @param to
       * @param from
       */
      function checkCanceledNavigationAndReject(to, from) {
          const error =3D checkCanceledNavigation(to, from);
          return error ? Promise.reject(error) : Promise.resolve();
      }
      function runWithContext(fn) {
          const app =3D installedApps.values().next().value;
          // support Vue &lt; 3.3
          return app &amp;&amp; typeof app.runWithContext =3D=3D=3D 'functi=
on'
              ? app.runWithContext(fn)
              : fn();
      }
      // TODO: refactor the whole before guards by internally using router.=
beforeEach
      function navigate(to, from) {
          let guards;
          const [leavingRecords, updatingRecords, enteringRecords] =3D extr=
actChangingRecords(to, from);
          // all components here have been resolved once because we are lea=
ving
          guards =3D extractComponentsGuards(leavingRecords.reverse(), 'bef=
oreRouteLeave', to, from);
          // leavingRecords is already reversed
          for (const record of leavingRecords) {
              record.leaveGuards.forEach(guard =3D&gt; {
                  guards.push(guardToPromiseFn(guard, to, from));
              });
          }
          const canceledNavigationCheck =3D checkCanceledNavigationAndRejec=
t.bind(null, to, from);
          guards.push(canceledNavigationCheck);
          // run the queue of per route beforeRouteLeave guards
          return (runGuardQueue(guards)
              .then(() =3D&gt; {
              // check global guards beforeEach
              guards =3D [];
              for (const guard of beforeGuards.list()) {
                  guards.push(guardToPromiseFn(guard, to, from));
              }
              guards.push(canceledNavigationCheck);
              return runGuardQueue(guards);
          })
              .then(() =3D&gt; {
              // check in components beforeRouteUpdate
              guards =3D extractComponentsGuards(updatingRecords, 'beforeRo=
uteUpdate', to, from);
              for (const record of updatingRecords) {
                  record.updateGuards.forEach(guard =3D&gt; {
                      guards.push(guardToPromiseFn(guard, to, from));
                  });
              }
              guards.push(canceledNavigationCheck);
              // run the queue of per route beforeEnter guards
              return runGuardQueue(guards);
          })
              .then(() =3D&gt; {
              // check the route beforeEnter
              guards =3D [];
              for (const record of enteringRecords) {
                  // do not trigger beforeEnter on reused views
                  if (record.beforeEnter) {
                      if (isArray(record.beforeEnter)) {
                          for (const beforeEnter of record.beforeEnter)
                              guards.push(guardToPromiseFn(beforeEnter, to,=
 from));
                      }
                      else {
                          guards.push(guardToPromiseFn(record.beforeEnter, =
to, from));
                      }
                  }
              }
              guards.push(canceledNavigationCheck);
              // run the queue of per route beforeEnter guards
              return runGuardQueue(guards);
          })
              .then(() =3D&gt; {
              // NOTE: at this point to.matched is normalized and does not =
contain any () =3D&gt; Promise&lt;Component&gt;
              // clear existing enterCallbacks, these are added by extractC=
omponentsGuards
              to.matched.forEach(record =3D&gt; (record.enterCallbacks =3D =
{}));
              // check in-component beforeRouteEnter
              guards =3D extractComponentsGuards(enteringRecords, 'beforeRo=
uteEnter', to, from, runWithContext);
              guards.push(canceledNavigationCheck);
              // run the queue of per route beforeEnter guards
              return runGuardQueue(guards);
          })
              .then(() =3D&gt; {
              // check global guards beforeResolve
              guards =3D [];
              for (const guard of beforeResolveGuards.list()) {
                  guards.push(guardToPromiseFn(guard, to, from));
              }
              guards.push(canceledNavigationCheck);
              return runGuardQueue(guards);
          })
              // catch any navigation canceled
              .catch(err =3D&gt; isNavigationFailure(err, 8 /* ErrorTypes.N=
AVIGATION_CANCELLED */)
              ? err
              : Promise.reject(err)));
      }
      function triggerAfterEach(to, from, failure) {
          // navigation is confirmed, call afterGuards
          // TODO: wrap with error handlers
          afterGuards
              .list()
              .forEach(guard =3D&gt; runWithContext(() =3D&gt; guard(to, fr=
om, failure)));
      }
      /**
       * - Cleans up any navigation guards
       * - Changes the url if necessary
       * - Calls the scrollBehavior
       */
      function finalizeNavigation(toLocation, from, isPush, replace, data) =
{
          // a more recent navigation took place
          const error =3D checkCanceledNavigation(toLocation, from);
          if (error)
              return error;
          // only consider as push if it's not the first navigation
          const isFirstNavigation =3D from =3D=3D=3D START_LOCATION_NORMALI=
ZED;
          const state =3D !isBrowser ? {} : history.state;
          // change URL only if the user did a push/replace and if it's not=
 the initial navigation because
          // it's just reflecting the url
          if (isPush) {
              // on the initial navigation, we want to reuse the scroll pos=
ition from
              // history state if it exists
              if (replace || isFirstNavigation)
                  routerHistory.replace(toLocation.fullPath, assign({
                      scroll: isFirstNavigation &amp;&amp; state &amp;&amp;=
 state.scroll,
                  }, data));
              else
                  routerHistory.push(toLocation.fullPath, data);
          }
          // accept current navigation
          currentRoute.value =3D toLocation;
          handleScroll(toLocation, from, isPush, isFirstNavigation);
          markAsReady();
      }
      let removeHistoryListener;
      // attach listener to history to trigger navigations
      function setupListeners() {
          // avoid setting up listeners twice due to an invalid first navig=
ation
          if (removeHistoryListener)
              return;
          removeHistoryListener =3D routerHistory.listen((to, _from, info) =
=3D&gt; {
              if (!router.listening)
                  return;
              // cannot be a redirect route because it was in history
              const toLocation =3D resolve(to);
              // due to dynamic routing, and to hash history with manual na=
vigation
              // (manually changing the url or calling history.hash =3D '#/=
somewhere'),
              // there could be a redirect record in history
              const shouldRedirect =3D handleRedirectRecord(toLocation);
              if (shouldRedirect) {
                  pushWithRedirect(assign(shouldRedirect, { replace: true, =
force: true }), toLocation).catch(noop);
                  return;
              }
              pendingLocation =3D toLocation;
              const from =3D currentRoute.value;
              // TODO: should be moved to web history?
              if (isBrowser) {
                  saveScrollPosition(getScrollKey(from.fullPath, info.delta=
), computeScrollPosition());
              }
              navigate(toLocation, from)
                  .catch((error) =3D&gt; {
                  if (isNavigationFailure(error, 4 /* ErrorTypes.NAVIGATION=
_ABORTED */ | 8 /* ErrorTypes.NAVIGATION_CANCELLED */)) {
                      return error;
                  }
                  if (isNavigationFailure(error, 2 /* ErrorTypes.NAVIGATION=
_GUARD_REDIRECT */)) {
                      // Here we could call if (info.delta) routerHistory.g=
o(-info.delta,
                      // false) but this is bug prone as we have no way to =
wait the
                      // navigation to be finished before calling pushWithR=
edirect. Using
                      // a setTimeout of 16ms seems to work but there is no=
 guarantee for
                      // it to work on every browser. So instead we do not =
restore the
                      // history entry and trigger a new navigation as requ=
ested by the
                      // navigation guard.
                      // the error is already handled by router.push we jus=
t want to avoid
                      // logging the error
                      pushWithRedirect(assign(locationAsObject(error.to), {
                          force: true,
                      }), toLocation
                      // avoid an uncaught rejection, let push call trigger=
Error
                      )
                          .then(failure =3D&gt; {
                          // manual change in hash history #916 ending up i=
n the URL not
                          // changing, but it was changed by the manual url=
 change, so we
                          // need to manually change it ourselves
                          if (isNavigationFailure(failure, 4 /* ErrorTypes.=
NAVIGATION_ABORTED */ |
                              16 /* ErrorTypes.NAVIGATION_DUPLICATED */) &a=
mp;&amp;
                              !info.delta &amp;&amp;
                              info.type =3D=3D=3D NavigationType.pop) {
                              routerHistory.go(-1, false);
                          }
                      })
                          .catch(noop);
                      // avoid the then branch
                      return Promise.reject();
                  }
                  // do not restore history on unknown direction
                  if (info.delta) {
                      routerHistory.go(-info.delta, false);
                  }
                  // unrecognized error, transfer to the global handler
                  return triggerError(error, toLocation, from);
              })
                  .then((failure) =3D&gt; {
                  failure =3D
                      failure ||
                          finalizeNavigation(
                          // after navigation, all matched components are r=
esolved
                          toLocation, from, false);
                  // revert the navigation
                  if (failure) {
                      if (info.delta &amp;&amp;
                          // a new navigation has been triggered, so we do =
not want to revert, that will change the current history
                          // entry while a different route is displayed
                          !isNavigationFailure(failure, 8 /* ErrorTypes.NAV=
IGATION_CANCELLED */)) {
                          routerHistory.go(-info.delta, false);
                      }
                      else if (info.type =3D=3D=3D NavigationType.pop &amp;=
&amp;
                          isNavigationFailure(failure, 4 /* ErrorTypes.NAVI=
GATION_ABORTED */ | 16 /* ErrorTypes.NAVIGATION_DUPLICATED */)) {
                          // manual change in hash history #916
                          // it's like a push but lacks the information of =
the direction
                          routerHistory.go(-1, false);
                      }
                  }
                  triggerAfterEach(toLocation, from, failure);
              })
                  // avoid warnings in the console about uncaught rejection=
s, they are logged by triggerErrors
                  .catch(noop);
          });
      }
      // Initialization and Errors
      let readyHandlers =3D useCallbacks();
      let errorListeners =3D useCallbacks();
      let ready;
      /**
       * Trigger errorListeners added via onError and throws the error as w=
ell
       *
       * @param error - error to throw
       * @param to - location we were navigating to when the error happened
       * @param from - location we were navigating from when the error happ=
ened
       * @returns the error as a rejected promise
       */
      function triggerError(error, to, from) {
          markAsReady(error);
          const list =3D errorListeners.list();
          if (list.length) {
              list.forEach(handler =3D&gt; handler(error, to, from));
          }
          else {
              {
                  warn('uncaught error during route navigation:');
              }
              console.error(error);
          }
          // reject the error no matter there were error listeners or not
          return Promise.reject(error);
      }
      function isReady() {
          if (ready &amp;&amp; currentRoute.value !=3D=3D START_LOCATION_NO=
RMALIZED)
              return Promise.resolve();
          return new Promise((resolve, reject) =3D&gt; {
              readyHandlers.add([resolve, reject]);
          });
      }
      function markAsReady(err) {
          if (!ready) {
              // still not ready if an error happened
              ready =3D !err;
              setupListeners();
              readyHandlers
                  .list()
                  .forEach(([resolve, reject]) =3D&gt; (err ? reject(err) :=
 resolve()));
              readyHandlers.reset();
          }
          return err;
      }
      // Scroll behavior
      function handleScroll(to, from, isPush, isFirstNavigation) {
          const { scrollBehavior } =3D options;
          if (!isBrowser || !scrollBehavior)
              return Promise.resolve();
          const scrollPosition =3D (!isPush &amp;&amp; getSavedScrollPositi=
on(getScrollKey(to.fullPath, 0))) ||
              ((isFirstNavigation || !isPush) &amp;&amp;
                  history.state &amp;&amp;
                  history.state.scroll) ||
              null;
          return vue.nextTick()
              .then(() =3D&gt; scrollBehavior(to, from, scrollPosition))
              .then(position =3D&gt; position &amp;&amp; scrollToPosition(p=
osition))
              .catch(err =3D&gt; triggerError(err, to, from));
      }
      const go =3D (delta) =3D&gt; routerHistory.go(delta);
      let started;
      const installedApps =3D new Set();
      const router =3D {
          currentRoute,
          listening: true,
          addRoute,
          removeRoute,
          clearRoutes: matcher.clearRoutes,
          hasRoute,
          getRoutes,
          resolve,
          options,
          push,
          replace,
          go,
          back: () =3D&gt; go(-1),
          forward: () =3D&gt; go(1),
          beforeEach: beforeGuards.add,
          beforeResolve: beforeResolveGuards.add,
          afterEach: afterGuards.add,
          onError: errorListeners.add,
          isReady,
          install(app) {
              const router =3D this;
              app.component('RouterLink', RouterLink);
              app.component('RouterView', RouterView);
              app.config.globalProperties.$router =3D router;
              Object.defineProperty(app.config.globalProperties, '$route', =
{
                  enumerable: true,
                  get: () =3D&gt; vue.unref(currentRoute),
              });
              // this initial navigation is only necessary on client, on se=
rver it doesn't
              // make sense because it will create an extra unnecessary nav=
igation and could
              // lead to problems
              if (isBrowser &amp;&amp;
                  // used for the initial navigation client side to avoid p=
ushing
                  // multiple times when the router is used in multiple app=
s
                  !started &amp;&amp;
                  currentRoute.value =3D=3D=3D START_LOCATION_NORMALIZED) {
                  // see above
                  started =3D true;
                  push(routerHistory.location).catch(err =3D&gt; {
                      warn('Unexpected error when starting the router:', er=
r);
                  });
              }
              const reactiveRoute =3D {};
              for (const key in START_LOCATION_NORMALIZED) {
                  Object.defineProperty(reactiveRoute, key, {
                      get: () =3D&gt; currentRoute.value[key],
                      enumerable: true,
                  });
              }
              app.provide(routerKey, router);
              app.provide(routeLocationKey, vue.shallowReactive(reactiveRou=
te));
              app.provide(routerViewLocationKey, currentRoute);
              const unmountApp =3D app.unmount;
              installedApps.add(app);
              app.unmount =3D function () {
                  installedApps.delete(app);
                  // the router is not attached to an app anymore
                  if (installedApps.size &lt; 1) {
                      // invalidate the current navigation
                      pendingLocation =3D START_LOCATION_NORMALIZED;
                      removeHistoryListener &amp;&amp; removeHistoryListene=
r();
                      removeHistoryListener =3D null;
                      currentRoute.value =3D START_LOCATION_NORMALIZED;
                      started =3D false;
                      ready =3D false;
                  }
                  unmountApp();
              };
              // TODO: this probably needs to be updated so it can be used =
by vue-termui
              if (isBrowser) {
                  addDevtools(app, router, matcher);
              }
          },
      };
      // TODO: type this as NavigationGuardReturn or similar instead of any
      function runGuardQueue(guards) {
          return guards.reduce((promise, guard) =3D&gt; promise.then(() =3D=
&gt; runWithContext(guard)), Promise.resolve());
      }
      return router;
  }
  function extractChangingRecords(to, from) {
      const leavingRecords =3D [];
      const updatingRecords =3D [];
      const enteringRecords =3D [];
      const len =3D Math.max(from.matched.length, to.matched.length);
      for (let i =3D 0; i &lt; len; i++) {
          const recordFrom =3D from.matched[i];
          if (recordFrom) {
              if (to.matched.find(record =3D&gt; isSameRouteRecord(record, =
recordFrom)))
                  updatingRecords.push(recordFrom);
              else
                  leavingRecords.push(recordFrom);
          }
          const recordTo =3D to.matched[i];
          if (recordTo) {
              // the type doesn't matter because we are comparing per refer=
ence
              if (!from.matched.find(record =3D&gt; isSameRouteRecord(recor=
d, recordTo))) {
                  enteringRecords.push(recordTo);
              }
          }
      }
      return [leavingRecords, updatingRecords, enteringRecords];
  }

  /**
   * Returns the router instance. Equivalent to using `$router` inside
   * templates.
   */
  function useRouter() {
      return vue.inject(routerKey);
  }
  /**
   * Returns the current route location. Equivalent to using `$route` insid=
e
   * templates.
   */
  function useRoute(_name) {
      return vue.inject(routeLocationKey);
  }

  exports.RouterLink =3D RouterLink;
  exports.RouterView =3D RouterView;
  exports.START_LOCATION =3D START_LOCATION_NORMALIZED;
  exports.createMemoryHistory =3D createMemoryHistory;
  exports.createRouter =3D createRouter;
  exports.createRouterMatcher =3D createRouterMatcher;
  exports.createWebHashHistory =3D createWebHashHistory;
  exports.createWebHistory =3D createWebHistory;
  exports.isNavigationFailure =3D isNavigationFailure;
  exports.loadRouteLocation =3D loadRouteLocation;
  exports.matchedRouteKey =3D matchedRouteKey;
  exports.onBeforeRouteLeave =3D onBeforeRouteLeave;
  exports.onBeforeRouteUpdate =3D onBeforeRouteUpdate;
  exports.parseQuery =3D parseQuery;
  exports.routeLocationKey =3D routeLocationKey;
  exports.routerKey =3D routerKey;
  exports.routerViewLocationKey =3D routerViewLocationKey;
  exports.stringifyQuery =3D stringifyQuery;
  exports.useLink =3D useLink;
  exports.useRoute =3D useRoute;
  exports.useRouter =3D useRouter;
  exports.viewDepthKey =3D viewDepthKey;

  return exports;

})({}, Vue);
</pre></body></html>
------MultipartBoundary--MP3SZvAastFQEt5NQ1W4QjUkVUv5TfwoVM2o1m2o7S----
Content-Type: text/css
Content-Transfer-Encoding: quoted-printable
Content-Location: cid:css-4011e786-d93d-406f-9949-3cdd95c772ab@mhtml.blink

@charset "utf-8";

ins[class*=3D"adsbygoogle"], ins[class*=3D"adsbyadop"], [id*=3D"div-gpt-ad"=
], amp-ad { display: none !important; }
------MultipartBoundary--MP3SZvAastFQEt5NQ1W4QjUkVUv5TfwoVM2o1m2o7S------
