From: <Saved by Blink>
Snapshot-Content-Location: https://unpkg.com/vue@3.5.17/dist/vue.global.js
Subject: 
Date: Fri, 18 Jul 2025 14:21:01 +0700
MIME-Version: 1.0
Content-Type: multipart/related;
	type="text/html";
	boundary="----MultipartBoundary--rguc72PgCYiaB5Chly3h058foHyOxr2k0sOz7PdVcO----"


------MultipartBoundary--rguc72PgCYiaB5Chly3h058foHyOxr2k0sOz7PdVcO----
Content-Type: text/html
Content-ID: <frame-02ED10819468720B101129DDC93B0A4B@mhtml.blink>
Content-Transfer-Encoding: quoted-printable
Content-Location: https://unpkg.com/vue@3.5.17/dist/vue.global.js

<html><head><meta http-equiv=3D"Content-Type" content=3D"text/html; charset=
=3DUTF-8"><link rel=3D"stylesheet" type=3D"text/css" href=3D"cid:css-7065c2=
38-4842-455b-b610-47f2775ec168@mhtml.blink" /><meta name=3D"color-scheme" c=
ontent=3D"light dark"></head><body><pre style=3D"word-wrap: break-word; whi=
te-space: pre-wrap;">/**
* vue v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var Vue =3D (function (exports) {
  'use strict';

  /*! #__NO_SIDE_EFFECTS__ */
  // @__NO_SIDE_EFFECTS__
  function makeMap(str) {
    const map =3D /* @__PURE__ */ Object.create(null);
    for (const key of str.split(",")) map[key] =3D 1;
    return (val) =3D&gt; val in map;
  }

  const EMPTY_OBJ =3D Object.freeze({}) ;
  const EMPTY_ARR =3D Object.freeze([]) ;
  const NOOP =3D () =3D&gt; {
  };
  const NO =3D () =3D&gt; false;
  const isOn =3D (key) =3D&gt; key.charCodeAt(0) =3D=3D=3D 111 &amp;&amp; k=
ey.charCodeAt(1) =3D=3D=3D 110 &amp;&amp; // uppercase letter
  (key.charCodeAt(2) &gt; 122 || key.charCodeAt(2) &lt; 97);
  const isModelListener =3D (key) =3D&gt; key.startsWith("onUpdate:");
  const extend =3D Object.assign;
  const remove =3D (arr, el) =3D&gt; {
    const i =3D arr.indexOf(el);
    if (i &gt; -1) {
      arr.splice(i, 1);
    }
  };
  const hasOwnProperty$1 =3D Object.prototype.hasOwnProperty;
  const hasOwn =3D (val, key) =3D&gt; hasOwnProperty$1.call(val, key);
  const isArray =3D Array.isArray;
  const isMap =3D (val) =3D&gt; toTypeString(val) =3D=3D=3D "[object Map]";
  const isSet =3D (val) =3D&gt; toTypeString(val) =3D=3D=3D "[object Set]";
  const isDate =3D (val) =3D&gt; toTypeString(val) =3D=3D=3D "[object Date]=
";
  const isRegExp =3D (val) =3D&gt; toTypeString(val) =3D=3D=3D "[object Reg=
Exp]";
  const isFunction =3D (val) =3D&gt; typeof val =3D=3D=3D "function";
  const isString =3D (val) =3D&gt; typeof val =3D=3D=3D "string";
  const isSymbol =3D (val) =3D&gt; typeof val =3D=3D=3D "symbol";
  const isObject =3D (val) =3D&gt; val !=3D=3D null &amp;&amp; typeof val =
=3D=3D=3D "object";
  const isPromise =3D (val) =3D&gt; {
    return (isObject(val) || isFunction(val)) &amp;&amp; isFunction(val.the=
n) &amp;&amp; isFunction(val.catch);
  };
  const objectToString =3D Object.prototype.toString;
  const toTypeString =3D (value) =3D&gt; objectToString.call(value);
  const toRawType =3D (value) =3D&gt; {
    return toTypeString(value).slice(8, -1);
  };
  const isPlainObject =3D (val) =3D&gt; toTypeString(val) =3D=3D=3D "[objec=
t Object]";
  const isIntegerKey =3D (key) =3D&gt; isString(key) &amp;&amp; key !=3D=3D=
 "NaN" &amp;&amp; key[0] !=3D=3D "-" &amp;&amp; "" + parseInt(key, 10) =3D=
=3D=3D key;
  const isReservedProp =3D /* @__PURE__ */ makeMap(
    // the leading comma is intentional so empty string "" is also included
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBefo=
reUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  );
  const isBuiltInDirective =3D /* @__PURE__ */ makeMap(
    "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,m=
emo"
  );
  const cacheStringFunction =3D (fn) =3D&gt; {
    const cache =3D /* @__PURE__ */ Object.create(null);
    return (str) =3D&gt; {
      const hit =3D cache[str];
      return hit || (cache[str] =3D fn(str));
    };
  };
  const camelizeRE =3D /-(\w)/g;
  const camelize =3D cacheStringFunction(
    (str) =3D&gt; {
      return str.replace(camelizeRE, (_, c) =3D&gt; c ? c.toUpperCase() : "=
");
    }
  );
  const hyphenateRE =3D /\B([A-Z])/g;
  const hyphenate =3D cacheStringFunction(
    (str) =3D&gt; str.replace(hyphenateRE, "-$1").toLowerCase()
  );
  const capitalize =3D cacheStringFunction((str) =3D&gt; {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  const toHandlerKey =3D cacheStringFunction(
    (str) =3D&gt; {
      const s =3D str ? `on${capitalize(str)}` : ``;
      return s;
    }
  );
  const hasChanged =3D (value, oldValue) =3D&gt; !Object.is(value, oldValue=
);
  const invokeArrayFns =3D (fns, ...arg) =3D&gt; {
    for (let i =3D 0; i &lt; fns.length; i++) {
      fns[i](...arg);
    }
  };
  const def =3D (obj, key, value, writable =3D false) =3D&gt; {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      writable,
      value
    });
  };
  const looseToNumber =3D (val) =3D&gt; {
    const n =3D parseFloat(val);
    return isNaN(n) ? val : n;
  };
  const toNumber =3D (val) =3D&gt; {
    const n =3D isString(val) ? Number(val) : NaN;
    return isNaN(n) ? val : n;
  };
  let _globalThis;
  const getGlobalThis =3D () =3D&gt; {
    return _globalThis || (_globalThis =3D typeof globalThis !=3D=3D "undef=
ined" ? globalThis : typeof self !=3D=3D "undefined" ? self : typeof window=
 !=3D=3D "undefined" ? window : typeof global !=3D=3D "undefined" ? global =
: {});
  };
  function genCacheKey(source, options) {
    return source + JSON.stringify(
      options,
      (_, val) =3D&gt; typeof val =3D=3D=3D "function" ? val.toString() : v=
al
    );
  }

  const PatchFlagNames =3D {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `NEED_HYDRATION`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `CACHED`,
    [-2]: `BAIL`
  };

  const slotFlagsText =3D {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
  };

  const GLOBALS_ALLOWED =3D "Infinity,undefined,NaN,isFinite,isNaN,parseFlo=
at,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,=
Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,con=
sole,Error,Symbol";
  const isGloballyAllowed =3D /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);

  const range =3D 2;
  function generateCodeFrame(source, start =3D 0, end =3D source.length) {
    start =3D Math.max(0, Math.min(start, source.length));
    end =3D Math.max(0, Math.min(end, source.length));
    if (start &gt; end) return "";
    let lines =3D source.split(/(\r?\n)/);
    const newlineSequences =3D lines.filter((_, idx) =3D&gt; idx % 2 =3D=3D=
=3D 1);
    lines =3D lines.filter((_, idx) =3D&gt; idx % 2 =3D=3D=3D 0);
    let count =3D 0;
    const res =3D [];
    for (let i =3D 0; i &lt; lines.length; i++) {
      count +=3D lines[i].length + (newlineSequences[i] &amp;&amp; newlineS=
equences[i].length || 0);
      if (count &gt;=3D start) {
        for (let j =3D i - range; j &lt;=3D i + range || end &gt; count; j+=
+) {
          if (j &lt; 0 || j &gt;=3D lines.length) continue;
          const line =3D j + 1;
          res.push(
            `${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  $=
{lines[j]}`
          );
          const lineLength =3D lines[j].length;
          const newLineSeqLength =3D newlineSequences[j] &amp;&amp; newline=
Sequences[j].length || 0;
          if (j =3D=3D=3D i) {
            const pad =3D start - (count - (lineLength + newLineSeqLength))=
;
            const length =3D Math.max(
              1,
              end &gt; count ? lineLength - pad : end - start
            );
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j &gt; i) {
            if (end &gt; count) {
              const length =3D Math.max(Math.min(end - count, lineLength), =
1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count +=3D lineLength + newLineSeqLength;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }

  function normalizeStyle(value) {
    if (isArray(value)) {
      const res =3D {};
      for (let i =3D 0; i &lt; value.length; i++) {
        const item =3D value[i];
        const normalized =3D isString(item) ? parseStringStyle(item) : norm=
alizeStyle(item);
        if (normalized) {
          for (const key in normalized) {
            res[key] =3D normalized[key];
          }
        }
      }
      return res;
    } else if (isString(value) || isObject(value)) {
      return value;
    }
  }
  const listDelimiterRE =3D /;(?![^(]*\))/g;
  const propertyDelimiterRE =3D /:([^]+)/;
  const styleCommentRE =3D /\/\*[^]*?\*\//g;
  function parseStringStyle(cssText) {
    const ret =3D {};
    cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((ite=
m) =3D&gt; {
      if (item) {
        const tmp =3D item.split(propertyDelimiterRE);
        tmp.length &gt; 1 &amp;&amp; (ret[tmp[0].trim()] =3D tmp[1].trim())=
;
      }
    });
    return ret;
  }
  function stringifyStyle(styles) {
    if (!styles) return "";
    if (isString(styles)) return styles;
    let ret =3D "";
    for (const key in styles) {
      const value =3D styles[key];
      if (isString(value) || typeof value =3D=3D=3D "number") {
        const normalizedKey =3D key.startsWith(`--`) ? key : hyphenate(key)=
;
        ret +=3D `${normalizedKey}:${value};`;
      }
    }
    return ret;
  }
  function normalizeClass(value) {
    let res =3D "";
    if (isString(value)) {
      res =3D value;
    } else if (isArray(value)) {
      for (let i =3D 0; i &lt; value.length; i++) {
        const normalized =3D normalizeClass(value[i]);
        if (normalized) {
          res +=3D normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res +=3D name + " ";
        }
      }
    }
    return res.trim();
  }
  function normalizeProps(props) {
    if (!props) return null;
    let { class: klass, style } =3D props;
    if (klass &amp;&amp; !isString(klass)) {
      props.class =3D normalizeClass(klass);
    }
    if (style) {
      props.style =3D normalizeStyle(style);
    }
    return props;
  }

  const HTML_TAGS =3D "html,body,base,head,link,meta,style,title,address,ar=
ticle,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt=
,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,c=
ite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,s=
up,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canv=
as,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,=
button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,outp=
ut,progress,select,textarea,details,dialog,menu,summary,template,blockquote=
,iframe,tfoot";
  const SVG_TAGS =3D "svg,animate,animateMotion,animateTransform,circle,cli=
pPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feCompo=
nentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementM=
ap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGa=
ussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,f=
eSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,ha=
tch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshp=
atch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,re=
ct,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,=
view";
  const MATH_TAGS =3D "annotation,annotation-xml,maction,maligngroup,malign=
mark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlon=
gdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,m=
scarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubs=
up,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
  const VOID_TAGS =3D "area,base,br,col,embed,hr,img,input,link,meta,param,=
source,track,wbr";
  const isHTMLTag =3D /* @__PURE__ */ makeMap(HTML_TAGS);
  const isSVGTag =3D /* @__PURE__ */ makeMap(SVG_TAGS);
  const isMathMLTag =3D /* @__PURE__ */ makeMap(MATH_TAGS);
  const isVoidTag =3D /* @__PURE__ */ makeMap(VOID_TAGS);

  const specialBooleanAttrs =3D `itemscope,allowfullscreen,formnovalidate,i=
smap,nomodule,novalidate,readonly`;
  const isSpecialBooleanAttr =3D /* @__PURE__ */ makeMap(specialBooleanAttr=
s);
  const isBooleanAttr =3D /* @__PURE__ */ makeMap(
    specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer=
,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,=
muted,multiple,selected`
  );
  function includeBooleanAttr(value) {
    return !!value || value =3D=3D=3D "";
  }
  const isKnownHtmlAttr =3D /* @__PURE__ */ makeMap(
    `accept,accept-charset,accesskey,action,align,allow,alt,async,autocapit=
alize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,ca=
pture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan=
,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,d=
atetime,decoding,default,defer,dir,dirname,disabled,download,draggable,drop=
zone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formno=
validate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,ico=
n,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,lang=
uage,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multi=
ple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,prel=
oad,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,s=
andbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcd=
oc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,=
type,usemap,value,width,wrap`
  );
  const isKnownSvgAttr =3D /* @__PURE__ */ makeMap(
    `xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,=
amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFreque=
ncy,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class=
,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-int=
erpolation-filters,color-profile,color-rendering,contentScriptType,contentS=
tyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,dire=
ction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable=
-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filte=
rUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,fon=
t-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,gl=
yph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,g=
radientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,hor=
iz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,k=
ernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,len=
gthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,=
marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskConte=
ntUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,of=
fset,opacity,operator,order,orient,orientation,origin,overflow,overline-pos=
ition,overline-thickness,panose-1,paint-order,path,pathLength,patternConten=
tUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,p=
ointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radiu=
s,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requi=
redExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape=
-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMeth=
od,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity=
,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dashar=
ray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stro=
ke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableVal=
ues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textL=
ength,to,transform,transform-origin,type,u1,u2,underline-position,underline=
-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-h=
anging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y=
,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,wor=
d-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlin=
k:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xli=
nk,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`
  );
  function isRenderableAttrValue(value) {
    if (value =3D=3D null) {
      return false;
    }
    const type =3D typeof value;
    return type =3D=3D=3D "string" || type =3D=3D=3D "number" || type =3D=
=3D=3D "boolean";
  }

  const cssVarNameEscapeSymbolsRE =3D /[ !"#$%&amp;'()*+,./:;&lt;=3D&gt;?@[=
\\\]^`{|}~]/g;
  function getEscapedCssVarName(key, doubleEscape) {
    return key.replace(
      cssVarNameEscapeSymbolsRE,
      (s) =3D&gt; `\\${s}`
    );
  }

  function looseCompareArrays(a, b) {
    if (a.length !=3D=3D b.length) return false;
    let equal =3D true;
    for (let i =3D 0; equal &amp;&amp; i &lt; a.length; i++) {
      equal =3D looseEqual(a[i], b[i]);
    }
    return equal;
  }
  function looseEqual(a, b) {
    if (a =3D=3D=3D b) return true;
    let aValidType =3D isDate(a);
    let bValidType =3D isDate(b);
    if (aValidType || bValidType) {
      return aValidType &amp;&amp; bValidType ? a.getTime() =3D=3D=3D b.get=
Time() : false;
    }
    aValidType =3D isSymbol(a);
    bValidType =3D isSymbol(b);
    if (aValidType || bValidType) {
      return a =3D=3D=3D b;
    }
    aValidType =3D isArray(a);
    bValidType =3D isArray(b);
    if (aValidType || bValidType) {
      return aValidType &amp;&amp; bValidType ? looseCompareArrays(a, b) : =
false;
    }
    aValidType =3D isObject(a);
    bValidType =3D isObject(b);
    if (aValidType || bValidType) {
      if (!aValidType || !bValidType) {
        return false;
      }
      const aKeysCount =3D Object.keys(a).length;
      const bKeysCount =3D Object.keys(b).length;
      if (aKeysCount !=3D=3D bKeysCount) {
        return false;
      }
      for (const key in a) {
        const aHasKey =3D a.hasOwnProperty(key);
        const bHasKey =3D b.hasOwnProperty(key);
        if (aHasKey &amp;&amp; !bHasKey || !aHasKey &amp;&amp; bHasKey || !=
looseEqual(a[key], b[key])) {
          return false;
        }
      }
    }
    return String(a) =3D=3D=3D String(b);
  }
  function looseIndexOf(arr, val) {
    return arr.findIndex((item) =3D&gt; looseEqual(item, val));
  }

  const isRef$1 =3D (val) =3D&gt; {
    return !!(val &amp;&amp; val["__v_isRef"] =3D=3D=3D true);
  };
  const toDisplayString =3D (val) =3D&gt; {
    return isString(val) ? val : val =3D=3D null ? "" : isArray(val) || isO=
bject(val) &amp;&amp; (val.toString =3D=3D=3D objectToString || !isFunction=
(val.toString)) ? isRef$1(val) ? toDisplayString(val.value) : JSON.stringif=
y(val, replacer, 2) : String(val);
  };
  const replacer =3D (_key, val) =3D&gt; {
    if (isRef$1(val)) {
      return replacer(_key, val.value);
    } else if (isMap(val)) {
      return {
        [`Map(${val.size})`]: [...val.entries()].reduce(
          (entries, [key, val2], i) =3D&gt; {
            entries[stringifySymbol(key, i) + " =3D&gt;"] =3D val2;
            return entries;
          },
          {}
        )
      };
    } else if (isSet(val)) {
      return {
        [`Set(${val.size})`]: [...val.values()].map((v) =3D&gt; stringifySy=
mbol(v))
      };
    } else if (isSymbol(val)) {
      return stringifySymbol(val);
    } else if (isObject(val) &amp;&amp; !isArray(val) &amp;&amp; !isPlainOb=
ject(val)) {
      return String(val);
    }
    return val;
  };
  const stringifySymbol =3D (v, i =3D "") =3D&gt; {
    var _a;
    return (
      // Symbol.description in es2019+ so we need to cast here to pass
      // the lib: es2016 check
      isSymbol(v) ? `Symbol(${(_a =3D v.description) !=3D null ? _a : i})` =
: v
    );
  };

  function warn$2(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
  }

  let activeEffectScope;
  class EffectScope {
    constructor(detached =3D false) {
      this.detached =3D detached;
      /**
       * @internal
       */
      this._active =3D true;
      /**
       * @internal track `on` calls, allow `on` call multiple times
       */
      this._on =3D 0;
      /**
       * @internal
       */
      this.effects =3D [];
      /**
       * @internal
       */
      this.cleanups =3D [];
      this._isPaused =3D false;
      this.parent =3D activeEffectScope;
      if (!detached &amp;&amp; activeEffectScope) {
        this.index =3D (activeEffectScope.scopes || (activeEffectScope.scop=
es =3D [])).push(
          this
        ) - 1;
      }
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused =3D true;
        let i, l;
        if (this.scopes) {
          for (i =3D 0, l =3D this.scopes.length; i &lt; l; i++) {
            this.scopes[i].pause();
          }
        }
        for (i =3D 0, l =3D this.effects.length; i &lt; l; i++) {
          this.effects[i].pause();
        }
      }
    }
    /**
     * Resumes the effect scope, including all child scopes and effects.
     */
    resume() {
      if (this._active) {
        if (this._isPaused) {
          this._isPaused =3D false;
          let i, l;
          if (this.scopes) {
            for (i =3D 0, l =3D this.scopes.length; i &lt; l; i++) {
              this.scopes[i].resume();
            }
          }
          for (i =3D 0, l =3D this.effects.length; i &lt; l; i++) {
            this.effects[i].resume();
          }
        }
      }
    }
    run(fn) {
      if (this._active) {
        const currentEffectScope =3D activeEffectScope;
        try {
          activeEffectScope =3D this;
          return fn();
        } finally {
          activeEffectScope =3D currentEffectScope;
        }
      } else {
        warn$2(`cannot run an inactive effect scope.`);
      }
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    on() {
      if (++this._on =3D=3D=3D 1) {
        this.prevScope =3D activeEffectScope;
        activeEffectScope =3D this;
      }
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    off() {
      if (this._on &gt; 0 &amp;&amp; --this._on =3D=3D=3D 0) {
        activeEffectScope =3D this.prevScope;
        this.prevScope =3D void 0;
      }
    }
    stop(fromParent) {
      if (this._active) {
        this._active =3D false;
        let i, l;
        for (i =3D 0, l =3D this.effects.length; i &lt; l; i++) {
          this.effects[i].stop();
        }
        this.effects.length =3D 0;
        for (i =3D 0, l =3D this.cleanups.length; i &lt; l; i++) {
          this.cleanups[i]();
        }
        this.cleanups.length =3D 0;
        if (this.scopes) {
          for (i =3D 0, l =3D this.scopes.length; i &lt; l; i++) {
            this.scopes[i].stop(true);
          }
          this.scopes.length =3D 0;
        }
        if (!this.detached &amp;&amp; this.parent &amp;&amp; !fromParent) {
          const last =3D this.parent.scopes.pop();
          if (last &amp;&amp; last !=3D=3D this) {
            this.parent.scopes[this.index] =3D last;
            last.index =3D this.index;
          }
        }
        this.parent =3D void 0;
      }
    }
  }
  function effectScope(detached) {
    return new EffectScope(detached);
  }
  function getCurrentScope() {
    return activeEffectScope;
  }
  function onScopeDispose(fn, failSilently =3D false) {
    if (activeEffectScope) {
      activeEffectScope.cleanups.push(fn);
    } else if (!failSilently) {
      warn$2(
        `onScopeDispose() is called when there is no active effect scope to=
 be associated with.`
      );
    }
  }

  let activeSub;
  const pausedQueueEffects =3D /* @__PURE__ */ new WeakSet();
  class ReactiveEffect {
    constructor(fn) {
      this.fn =3D fn;
      /**
       * @internal
       */
      this.deps =3D void 0;
      /**
       * @internal
       */
      this.depsTail =3D void 0;
      /**
       * @internal
       */
      this.flags =3D 1 | 4;
      /**
       * @internal
       */
      this.next =3D void 0;
      /**
       * @internal
       */
      this.cleanup =3D void 0;
      this.scheduler =3D void 0;
      if (activeEffectScope &amp;&amp; activeEffectScope.active) {
        activeEffectScope.effects.push(this);
      }
    }
    pause() {
      this.flags |=3D 64;
    }
    resume() {
      if (this.flags &amp; 64) {
        this.flags &amp;=3D -65;
        if (pausedQueueEffects.has(this)) {
          pausedQueueEffects.delete(this);
          this.trigger();
        }
      }
    }
    /**
     * @internal
     */
    notify() {
      if (this.flags &amp; 2 &amp;&amp; !(this.flags &amp; 32)) {
        return;
      }
      if (!(this.flags &amp; 8)) {
        batch(this);
      }
    }
    run() {
      if (!(this.flags &amp; 1)) {
        return this.fn();
      }
      this.flags |=3D 2;
      cleanupEffect(this);
      prepareDeps(this);
      const prevEffect =3D activeSub;
      const prevShouldTrack =3D shouldTrack;
      activeSub =3D this;
      shouldTrack =3D true;
      try {
        return this.fn();
      } finally {
        if (activeSub !=3D=3D this) {
          warn$2(
            "Active effect was not restored correctly - this is likely a Vu=
e internal bug."
          );
        }
        cleanupDeps(this);
        activeSub =3D prevEffect;
        shouldTrack =3D prevShouldTrack;
        this.flags &amp;=3D -3;
      }
    }
    stop() {
      if (this.flags &amp; 1) {
        for (let link =3D this.deps; link; link =3D link.nextDep) {
          removeSub(link);
        }
        this.deps =3D this.depsTail =3D void 0;
        cleanupEffect(this);
        this.onStop &amp;&amp; this.onStop();
        this.flags &amp;=3D -2;
      }
    }
    trigger() {
      if (this.flags &amp; 64) {
        pausedQueueEffects.add(this);
      } else if (this.scheduler) {
        this.scheduler();
      } else {
        this.runIfDirty();
      }
    }
    /**
     * @internal
     */
    runIfDirty() {
      if (isDirty(this)) {
        this.run();
      }
    }
    get dirty() {
      return isDirty(this);
    }
  }
  let batchDepth =3D 0;
  let batchedSub;
  let batchedComputed;
  function batch(sub, isComputed =3D false) {
    sub.flags |=3D 8;
    if (isComputed) {
      sub.next =3D batchedComputed;
      batchedComputed =3D sub;
      return;
    }
    sub.next =3D batchedSub;
    batchedSub =3D sub;
  }
  function startBatch() {
    batchDepth++;
  }
  function endBatch() {
    if (--batchDepth &gt; 0) {
      return;
    }
    if (batchedComputed) {
      let e =3D batchedComputed;
      batchedComputed =3D void 0;
      while (e) {
        const next =3D e.next;
        e.next =3D void 0;
        e.flags &amp;=3D -9;
        e =3D next;
      }
    }
    let error;
    while (batchedSub) {
      let e =3D batchedSub;
      batchedSub =3D void 0;
      while (e) {
        const next =3D e.next;
        e.next =3D void 0;
        e.flags &amp;=3D -9;
        if (e.flags &amp; 1) {
          try {
            ;
            e.trigger();
          } catch (err) {
            if (!error) error =3D err;
          }
        }
        e =3D next;
      }
    }
    if (error) throw error;
  }
  function prepareDeps(sub) {
    for (let link =3D sub.deps; link; link =3D link.nextDep) {
      link.version =3D -1;
      link.prevActiveLink =3D link.dep.activeLink;
      link.dep.activeLink =3D link;
    }
  }
  function cleanupDeps(sub) {
    let head;
    let tail =3D sub.depsTail;
    let link =3D tail;
    while (link) {
      const prev =3D link.prevDep;
      if (link.version =3D=3D=3D -1) {
        if (link =3D=3D=3D tail) tail =3D prev;
        removeSub(link);
        removeDep(link);
      } else {
        head =3D link;
      }
      link.dep.activeLink =3D link.prevActiveLink;
      link.prevActiveLink =3D void 0;
      link =3D prev;
    }
    sub.deps =3D head;
    sub.depsTail =3D tail;
  }
  function isDirty(sub) {
    for (let link =3D sub.deps; link; link =3D link.nextDep) {
      if (link.dep.version !=3D=3D link.version || link.dep.computed &amp;&=
amp; (refreshComputed(link.dep.computed) || link.dep.version !=3D=3D link.v=
ersion)) {
        return true;
      }
    }
    if (sub._dirty) {
      return true;
    }
    return false;
  }
  function refreshComputed(computed) {
    if (computed.flags &amp; 4 &amp;&amp; !(computed.flags &amp; 16)) {
      return;
    }
    computed.flags &amp;=3D -17;
    if (computed.globalVersion =3D=3D=3D globalVersion) {
      return;
    }
    computed.globalVersion =3D globalVersion;
    if (!computed.isSSR &amp;&amp; computed.flags &amp; 128 &amp;&amp; (!co=
mputed.deps &amp;&amp; !computed._dirty || !isDirty(computed))) {
      return;
    }
    computed.flags |=3D 2;
    const dep =3D computed.dep;
    const prevSub =3D activeSub;
    const prevShouldTrack =3D shouldTrack;
    activeSub =3D computed;
    shouldTrack =3D true;
    try {
      prepareDeps(computed);
      const value =3D computed.fn(computed._value);
      if (dep.version =3D=3D=3D 0 || hasChanged(value, computed._value)) {
        computed.flags |=3D 128;
        computed._value =3D value;
        dep.version++;
      }
    } catch (err) {
      dep.version++;
      throw err;
    } finally {
      activeSub =3D prevSub;
      shouldTrack =3D prevShouldTrack;
      cleanupDeps(computed);
      computed.flags &amp;=3D -3;
    }
  }
  function removeSub(link, soft =3D false) {
    const { dep, prevSub, nextSub } =3D link;
    if (prevSub) {
      prevSub.nextSub =3D nextSub;
      link.prevSub =3D void 0;
    }
    if (nextSub) {
      nextSub.prevSub =3D prevSub;
      link.nextSub =3D void 0;
    }
    if (dep.subsHead =3D=3D=3D link) {
      dep.subsHead =3D nextSub;
    }
    if (dep.subs =3D=3D=3D link) {
      dep.subs =3D prevSub;
      if (!prevSub &amp;&amp; dep.computed) {
        dep.computed.flags &amp;=3D -5;
        for (let l =3D dep.computed.deps; l; l =3D l.nextDep) {
          removeSub(l, true);
        }
      }
    }
    if (!soft &amp;&amp; !--dep.sc &amp;&amp; dep.map) {
      dep.map.delete(dep.key);
    }
  }
  function removeDep(link) {
    const { prevDep, nextDep } =3D link;
    if (prevDep) {
      prevDep.nextDep =3D nextDep;
      link.prevDep =3D void 0;
    }
    if (nextDep) {
      nextDep.prevDep =3D prevDep;
      link.nextDep =3D void 0;
    }
  }
  function effect(fn, options) {
    if (fn.effect instanceof ReactiveEffect) {
      fn =3D fn.effect.fn;
    }
    const e =3D new ReactiveEffect(fn);
    if (options) {
      extend(e, options);
    }
    try {
      e.run();
    } catch (err) {
      e.stop();
      throw err;
    }
    const runner =3D e.run.bind(e);
    runner.effect =3D e;
    return runner;
  }
  function stop(runner) {
    runner.effect.stop();
  }
  let shouldTrack =3D true;
  const trackStack =3D [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack =3D false;
  }
  function resetTracking() {
    const last =3D trackStack.pop();
    shouldTrack =3D last =3D=3D=3D void 0 ? true : last;
  }
  function cleanupEffect(e) {
    const { cleanup } =3D e;
    e.cleanup =3D void 0;
    if (cleanup) {
      const prevSub =3D activeSub;
      activeSub =3D void 0;
      try {
        cleanup();
      } finally {
        activeSub =3D prevSub;
      }
    }
  }

  let globalVersion =3D 0;
  class Link {
    constructor(sub, dep) {
      this.sub =3D sub;
      this.dep =3D dep;
      this.version =3D dep.version;
      this.nextDep =3D this.prevDep =3D this.nextSub =3D this.prevSub =3D t=
his.prevActiveLink =3D void 0;
    }
  }
  class Dep {
    // TODO isolatedDeclarations "__v_skip"
    constructor(computed) {
      this.computed =3D computed;
      this.version =3D 0;
      /**
       * Link between this dep and the current active effect
       */
      this.activeLink =3D void 0;
      /**
       * Doubly linked list representing the subscribing effects (tail)
       */
      this.subs =3D void 0;
      /**
       * For object property deps cleanup
       */
      this.map =3D void 0;
      this.key =3D void 0;
      /**
       * Subscriber counter
       */
      this.sc =3D 0;
      /**
       * @internal
       */
      this.__v_skip =3D true;
      {
        this.subsHead =3D void 0;
      }
    }
    track(debugInfo) {
      if (!activeSub || !shouldTrack || activeSub =3D=3D=3D this.computed) =
{
        return;
      }
      let link =3D this.activeLink;
      if (link =3D=3D=3D void 0 || link.sub !=3D=3D activeSub) {
        link =3D this.activeLink =3D new Link(activeSub, this);
        if (!activeSub.deps) {
          activeSub.deps =3D activeSub.depsTail =3D link;
        } else {
          link.prevDep =3D activeSub.depsTail;
          activeSub.depsTail.nextDep =3D link;
          activeSub.depsTail =3D link;
        }
        addSub(link);
      } else if (link.version =3D=3D=3D -1) {
        link.version =3D this.version;
        if (link.nextDep) {
          const next =3D link.nextDep;
          next.prevDep =3D link.prevDep;
          if (link.prevDep) {
            link.prevDep.nextDep =3D next;
          }
          link.prevDep =3D activeSub.depsTail;
          link.nextDep =3D void 0;
          activeSub.depsTail.nextDep =3D link;
          activeSub.depsTail =3D link;
          if (activeSub.deps =3D=3D=3D link) {
            activeSub.deps =3D next;
          }
        }
      }
      if (activeSub.onTrack) {
        activeSub.onTrack(
          extend(
            {
              effect: activeSub
            },
            debugInfo
          )
        );
      }
      return link;
    }
    trigger(debugInfo) {
      this.version++;
      globalVersion++;
      this.notify(debugInfo);
    }
    notify(debugInfo) {
      startBatch();
      try {
        if (true) {
          for (let head =3D this.subsHead; head; head =3D head.nextSub) {
            if (head.sub.onTrigger &amp;&amp; !(head.sub.flags &amp; 8)) {
              head.sub.onTrigger(
                extend(
                  {
                    effect: head.sub
                  },
                  debugInfo
                )
              );
            }
          }
        }
        for (let link =3D this.subs; link; link =3D link.prevSub) {
          if (link.sub.notify()) {
            ;
            link.sub.dep.notify();
          }
        }
      } finally {
        endBatch();
      }
    }
  }
  function addSub(link) {
    link.dep.sc++;
    if (link.sub.flags &amp; 4) {
      const computed =3D link.dep.computed;
      if (computed &amp;&amp; !link.dep.subs) {
        computed.flags |=3D 4 | 16;
        for (let l =3D computed.deps; l; l =3D l.nextDep) {
          addSub(l);
        }
      }
      const currentTail =3D link.dep.subs;
      if (currentTail !=3D=3D link) {
        link.prevSub =3D currentTail;
        if (currentTail) currentTail.nextSub =3D link;
      }
      if (link.dep.subsHead =3D=3D=3D void 0) {
        link.dep.subsHead =3D link;
      }
      link.dep.subs =3D link;
    }
  }
  const targetMap =3D /* @__PURE__ */ new WeakMap();
  const ITERATE_KEY =3D Symbol(
    "Object iterate"=20
  );
  const MAP_KEY_ITERATE_KEY =3D Symbol(
    "Map keys iterate"=20
  );
  const ARRAY_ITERATE_KEY =3D Symbol(
    "Array iterate"=20
  );
  function track(target, type, key) {
    if (shouldTrack &amp;&amp; activeSub) {
      let depsMap =3D targetMap.get(target);
      if (!depsMap) {
        targetMap.set(target, depsMap =3D /* @__PURE__ */ new Map());
      }
      let dep =3D depsMap.get(key);
      if (!dep) {
        depsMap.set(key, dep =3D new Dep());
        dep.map =3D depsMap;
        dep.key =3D key;
      }
      {
        dep.track({
          target,
          type,
          key
        });
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap =3D targetMap.get(target);
    if (!depsMap) {
      globalVersion++;
      return;
    }
    const run =3D (dep) =3D&gt; {
      if (dep) {
        {
          dep.trigger({
            target,
            type,
            key,
            newValue,
            oldValue,
            oldTarget
          });
        }
      }
    };
    startBatch();
    if (type =3D=3D=3D "clear") {
      depsMap.forEach(run);
    } else {
      const targetIsArray =3D isArray(target);
      const isArrayIndex =3D targetIsArray &amp;&amp; isIntegerKey(key);
      if (targetIsArray &amp;&amp; key =3D=3D=3D "length") {
        const newLength =3D Number(newValue);
        depsMap.forEach((dep, key2) =3D&gt; {
          if (key2 =3D=3D=3D "length" || key2 =3D=3D=3D ARRAY_ITERATE_KEY |=
| !isSymbol(key2) &amp;&amp; key2 &gt;=3D newLength) {
            run(dep);
          }
        });
      } else {
        if (key !=3D=3D void 0 || depsMap.has(void 0)) {
          run(depsMap.get(key));
        }
        if (isArrayIndex) {
          run(depsMap.get(ARRAY_ITERATE_KEY));
        }
        switch (type) {
          case "add":
            if (!targetIsArray) {
              run(depsMap.get(ITERATE_KEY));
              if (isMap(target)) {
                run(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            } else if (isArrayIndex) {
              run(depsMap.get("length"));
            }
            break;
          case "delete":
            if (!targetIsArray) {
              run(depsMap.get(ITERATE_KEY));
              if (isMap(target)) {
                run(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            }
            break;
          case "set":
            if (isMap(target)) {
              run(depsMap.get(ITERATE_KEY));
            }
            break;
        }
      }
    }
    endBatch();
  }
  function getDepFromReactive(object, key) {
    const depMap =3D targetMap.get(object);
    return depMap &amp;&amp; depMap.get(key);
  }

  function reactiveReadArray(array) {
    const raw =3D toRaw(array);
    if (raw =3D=3D=3D array) return raw;
    track(raw, "iterate", ARRAY_ITERATE_KEY);
    return isShallow(array) ? raw : raw.map(toReactive);
  }
  function shallowReadArray(arr) {
    track(arr =3D toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
    return arr;
  }
  const arrayInstrumentations =3D {
    __proto__: null,
    [Symbol.iterator]() {
      return iterator(this, Symbol.iterator, toReactive);
    },
    concat(...args) {
      return reactiveReadArray(this).concat(
        ...args.map((x) =3D&gt; isArray(x) ? reactiveReadArray(x) : x)
      );
    },
    entries() {
      return iterator(this, "entries", (value) =3D&gt; {
        value[1] =3D toReactive(value[1]);
        return value;
      });
    },
    every(fn, thisArg) {
      return apply(this, "every", fn, thisArg, void 0, arguments);
    },
    filter(fn, thisArg) {
      return apply(this, "filter", fn, thisArg, (v) =3D&gt; v.map(toReactiv=
e), arguments);
    },
    find(fn, thisArg) {
      return apply(this, "find", fn, thisArg, toReactive, arguments);
    },
    findIndex(fn, thisArg) {
      return apply(this, "findIndex", fn, thisArg, void 0, arguments);
    },
    findLast(fn, thisArg) {
      return apply(this, "findLast", fn, thisArg, toReactive, arguments);
    },
    findLastIndex(fn, thisArg) {
      return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
    },
    // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-=
forward to implement
    forEach(fn, thisArg) {
      return apply(this, "forEach", fn, thisArg, void 0, arguments);
    },
    includes(...args) {
      return searchProxy(this, "includes", args);
    },
    indexOf(...args) {
      return searchProxy(this, "indexOf", args);
    },
    join(separator) {
      return reactiveReadArray(this).join(separator);
    },
    // keys() iterator only reads `length`, no optimisation required
    lastIndexOf(...args) {
      return searchProxy(this, "lastIndexOf", args);
    },
    map(fn, thisArg) {
      return apply(this, "map", fn, thisArg, void 0, arguments);
    },
    pop() {
      return noTracking(this, "pop");
    },
    push(...args) {
      return noTracking(this, "push", args);
    },
    reduce(fn, ...args) {
      return reduce(this, "reduce", fn, args);
    },
    reduceRight(fn, ...args) {
      return reduce(this, "reduceRight", fn, args);
    },
    shift() {
      return noTracking(this, "shift");
    },
    // slice could use ARRAY_ITERATE but also seems to beg for range tracki=
ng
    some(fn, thisArg) {
      return apply(this, "some", fn, thisArg, void 0, arguments);
    },
    splice(...args) {
      return noTracking(this, "splice", args);
    },
    toReversed() {
      return reactiveReadArray(this).toReversed();
    },
    toSorted(comparer) {
      return reactiveReadArray(this).toSorted(comparer);
    },
    toSpliced(...args) {
      return reactiveReadArray(this).toSpliced(...args);
    },
    unshift(...args) {
      return noTracking(this, "unshift", args);
    },
    values() {
      return iterator(this, "values", toReactive);
    }
  };
  function iterator(self, method, wrapValue) {
    const arr =3D shallowReadArray(self);
    const iter =3D arr[method]();
    if (arr !=3D=3D self &amp;&amp; !isShallow(self)) {
      iter._next =3D iter.next;
      iter.next =3D () =3D&gt; {
        const result =3D iter._next();
        if (result.value) {
          result.value =3D wrapValue(result.value);
        }
        return result;
      };
    }
    return iter;
  }
  const arrayProto =3D Array.prototype;
  function apply(self, method, fn, thisArg, wrappedRetFn, args) {
    const arr =3D shallowReadArray(self);
    const needsWrap =3D arr !=3D=3D self &amp;&amp; !isShallow(self);
    const methodFn =3D arr[method];
    if (methodFn !=3D=3D arrayProto[method]) {
      const result2 =3D methodFn.apply(self, args);
      return needsWrap ? toReactive(result2) : result2;
    }
    let wrappedFn =3D fn;
    if (arr !=3D=3D self) {
      if (needsWrap) {
        wrappedFn =3D function(item, index) {
          return fn.call(this, toReactive(item), index, self);
        };
      } else if (fn.length &gt; 2) {
        wrappedFn =3D function(item, index) {
          return fn.call(this, item, index, self);
        };
      }
    }
    const result =3D methodFn.call(arr, wrappedFn, thisArg);
    return needsWrap &amp;&amp; wrappedRetFn ? wrappedRetFn(result) : resul=
t;
  }
  function reduce(self, method, fn, args) {
    const arr =3D shallowReadArray(self);
    let wrappedFn =3D fn;
    if (arr !=3D=3D self) {
      if (!isShallow(self)) {
        wrappedFn =3D function(acc, item, index) {
          return fn.call(this, acc, toReactive(item), index, self);
        };
      } else if (fn.length &gt; 3) {
        wrappedFn =3D function(acc, item, index) {
          return fn.call(this, acc, item, index, self);
        };
      }
    }
    return arr[method](wrappedFn, ...args);
  }
  function searchProxy(self, method, args) {
    const arr =3D toRaw(self);
    track(arr, "iterate", ARRAY_ITERATE_KEY);
    const res =3D arr[method](...args);
    if ((res =3D=3D=3D -1 || res =3D=3D=3D false) &amp;&amp; isProxy(args[0=
])) {
      args[0] =3D toRaw(args[0]);
      return arr[method](...args);
    }
    return res;
  }
  function noTracking(self, method, args =3D []) {
    pauseTracking();
    startBatch();
    const res =3D toRaw(self)[method].apply(self, args);
    endBatch();
    resetTracking();
    return res;
  }

  const isNonTrackableKeys =3D /* @__PURE__ */ makeMap(`__proto__,__v_isRef=
,__isVue`);
  const builtInSymbols =3D new Set(
    /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) =3D&gt;=
 key !=3D=3D "arguments" &amp;&amp; key !=3D=3D "caller").map((key) =3D&gt;=
 Symbol[key]).filter(isSymbol)
  );
  function hasOwnProperty(key) {
    if (!isSymbol(key)) key =3D String(key);
    const obj =3D toRaw(this);
    track(obj, "has", key);
    return obj.hasOwnProperty(key);
  }
  class BaseReactiveHandler {
    constructor(_isReadonly =3D false, _isShallow =3D false) {
      this._isReadonly =3D _isReadonly;
      this._isShallow =3D _isShallow;
    }
    get(target, key, receiver) {
      if (key =3D=3D=3D "__v_skip") return target["__v_skip"];
      const isReadonly2 =3D this._isReadonly, isShallow2 =3D this._isShallo=
w;
      if (key =3D=3D=3D "__v_isReactive") {
        return !isReadonly2;
      } else if (key =3D=3D=3D "__v_isReadonly") {
        return isReadonly2;
      } else if (key =3D=3D=3D "__v_isShallow") {
        return isShallow2;
      } else if (key =3D=3D=3D "__v_raw") {
        if (receiver =3D=3D=3D (isReadonly2 ? isShallow2 ? shallowReadonlyM=
ap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(targe=
t) || // receiver is not the reactive proxy, but has the same prototype
        // this means the receiver is a user proxy of the reactive proxy
        Object.getPrototypeOf(target) =3D=3D=3D Object.getPrototypeOf(recei=
ver)) {
          return target;
        }
        return;
      }
      const targetIsArray =3D isArray(target);
      if (!isReadonly2) {
        let fn;
        if (targetIsArray &amp;&amp; (fn =3D arrayInstrumentations[key])) {
          return fn;
        }
        if (key =3D=3D=3D "hasOwnProperty") {
          return hasOwnProperty;
        }
      }
      const res =3D Reflect.get(
        target,
        key,
        // if this is a proxy wrapping a ref, return methods using the raw =
ref
        // as receiver so that we don't have to call `toRaw` on the ref in =
all
        // its class methods
        isRef(target) ? target : receiver
      );
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)=
) {
        return res;
      }
      if (!isReadonly2) {
        track(target, "get", key);
      }
      if (isShallow2) {
        return res;
      }
      if (isRef(res)) {
        return targetIsArray &amp;&amp; isIntegerKey(key) ? res : res.value=
;
      }
      if (isObject(res)) {
        return isReadonly2 ? readonly(res) : reactive(res);
      }
      return res;
    }
  }
  class MutableReactiveHandler extends BaseReactiveHandler {
    constructor(isShallow2 =3D false) {
      super(false, isShallow2);
    }
    set(target, key, value, receiver) {
      let oldValue =3D target[key];
      if (!this._isShallow) {
        const isOldValueReadonly =3D isReadonly(oldValue);
        if (!isShallow(value) &amp;&amp; !isReadonly(value)) {
          oldValue =3D toRaw(oldValue);
          value =3D toRaw(value);
        }
        if (!isArray(target) &amp;&amp; isRef(oldValue) &amp;&amp; !isRef(v=
alue)) {
          if (isOldValueReadonly) {
            return false;
          } else {
            oldValue.value =3D value;
            return true;
          }
        }
      }
      const hadKey =3D isArray(target) &amp;&amp; isIntegerKey(key) ? Numbe=
r(key) &lt; target.length : hasOwn(target, key);
      const result =3D Reflect.set(
        target,
        key,
        value,
        isRef(target) ? target : receiver
      );
      if (target =3D=3D=3D toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    }
    deleteProperty(target, key) {
      const hadKey =3D hasOwn(target, key);
      const oldValue =3D target[key];
      const result =3D Reflect.deleteProperty(target, key);
      if (result &amp;&amp; hadKey) {
        trigger(target, "delete", key, void 0, oldValue);
      }
      return result;
    }
    has(target, key) {
      const result =3D Reflect.has(target, key);
      if (!isSymbol(key) || !builtInSymbols.has(key)) {
        track(target, "has", key);
      }
      return result;
    }
    ownKeys(target) {
      track(
        target,
        "iterate",
        isArray(target) ? "length" : ITERATE_KEY
      );
      return Reflect.ownKeys(target);
    }
  }
  class ReadonlyReactiveHandler extends BaseReactiveHandler {
    constructor(isShallow2 =3D false) {
      super(true, isShallow2);
    }
    set(target, key) {
      {
        warn$2(
          `Set operation on key "${String(key)}" failed: target is readonly=
.`,
          target
        );
      }
      return true;
    }
    deleteProperty(target, key) {
      {
        warn$2(
          `Delete operation on key "${String(key)}" failed: target is reado=
nly.`,
          target
        );
      }
      return true;
    }
  }
  const mutableHandlers =3D /* @__PURE__ */ new MutableReactiveHandler();
  const readonlyHandlers =3D /* @__PURE__ */ new ReadonlyReactiveHandler();
  const shallowReactiveHandlers =3D /* @__PURE__ */ new MutableReactiveHand=
ler(true);
  const shallowReadonlyHandlers =3D /* @__PURE__ */ new ReadonlyReactiveHan=
dler(true);

  const toShallow =3D (value) =3D&gt; value;
  const getProto =3D (v) =3D&gt; Reflect.getPrototypeOf(v);
  function createIterableMethod(method, isReadonly2, isShallow2) {
    return function(...args) {
      const target =3D this["__v_raw"];
      const rawTarget =3D toRaw(target);
      const targetIsMap =3D isMap(rawTarget);
      const isPair =3D method =3D=3D=3D "entries" || method =3D=3D=3D Symbo=
l.iterator &amp;&amp; targetIsMap;
      const isKeyOnly =3D method =3D=3D=3D "keys" &amp;&amp; targetIsMap;
      const innerIterator =3D target[method](...args);
      const wrap =3D isShallow2 ? toShallow : isReadonly2 ? toReadonly : to=
Reactive;
      !isReadonly2 &amp;&amp; track(
        rawTarget,
        "iterate",
        isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
      );
      return {
        // iterator protocol
        next() {
          const { value, done } =3D innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        // iterable protocol
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      {
        const key =3D args[0] ? `on key "${args[0]}" ` : ``;
        warn$2(
          `${capitalize(type)} operation ${key}failed: target is readonly.`=
,
          toRaw(this)
        );
      }
      return type =3D=3D=3D "delete" ? false : type =3D=3D=3D "clear" ? voi=
d 0 : this;
    };
  }
  function createInstrumentations(readonly, shallow) {
    const instrumentations =3D {
      get(key) {
        const target =3D this["__v_raw"];
        const rawTarget =3D toRaw(target);
        const rawKey =3D toRaw(key);
        if (!readonly) {
          if (hasChanged(key, rawKey)) {
            track(rawTarget, "get", key);
          }
          track(rawTarget, "get", rawKey);
        }
        const { has } =3D getProto(rawTarget);
        const wrap =3D shallow ? toShallow : readonly ? toReadonly : toReac=
tive;
        if (has.call(rawTarget, key)) {
          return wrap(target.get(key));
        } else if (has.call(rawTarget, rawKey)) {
          return wrap(target.get(rawKey));
        } else if (target !=3D=3D rawTarget) {
          target.get(key);
        }
      },
      get size() {
        const target =3D this["__v_raw"];
        !readonly &amp;&amp; track(toRaw(target), "iterate", ITERATE_KEY);
        return Reflect.get(target, "size", target);
      },
      has(key) {
        const target =3D this["__v_raw"];
        const rawTarget =3D toRaw(target);
        const rawKey =3D toRaw(key);
        if (!readonly) {
          if (hasChanged(key, rawKey)) {
            track(rawTarget, "has", key);
          }
          track(rawTarget, "has", rawKey);
        }
        return key =3D=3D=3D rawKey ? target.has(key) : target.has(key) || =
target.has(rawKey);
      },
      forEach(callback, thisArg) {
        const observed =3D this;
        const target =3D observed["__v_raw"];
        const rawTarget =3D toRaw(target);
        const wrap =3D shallow ? toShallow : readonly ? toReadonly : toReac=
tive;
        !readonly &amp;&amp; track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value, key) =3D&gt; {
          return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
      }
    };
    extend(
      instrumentations,
      readonly ? {
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear")
      } : {
        add(value) {
          if (!shallow &amp;&amp; !isShallow(value) &amp;&amp; !isReadonly(=
value)) {
            value =3D toRaw(value);
          }
          const target =3D toRaw(this);
          const proto =3D getProto(target);
          const hadKey =3D proto.has.call(target, value);
          if (!hadKey) {
            target.add(value);
            trigger(target, "add", value, value);
          }
          return this;
        },
        set(key, value) {
          if (!shallow &amp;&amp; !isShallow(value) &amp;&amp; !isReadonly(=
value)) {
            value =3D toRaw(value);
          }
          const target =3D toRaw(this);
          const { has, get } =3D getProto(target);
          let hadKey =3D has.call(target, key);
          if (!hadKey) {
            key =3D toRaw(key);
            hadKey =3D has.call(target, key);
          } else {
            checkIdentityKeys(target, has, key);
          }
          const oldValue =3D get.call(target, key);
          target.set(key, value);
          if (!hadKey) {
            trigger(target, "add", key, value);
          } else if (hasChanged(value, oldValue)) {
            trigger(target, "set", key, value, oldValue);
          }
          return this;
        },
        delete(key) {
          const target =3D toRaw(this);
          const { has, get } =3D getProto(target);
          let hadKey =3D has.call(target, key);
          if (!hadKey) {
            key =3D toRaw(key);
            hadKey =3D has.call(target, key);
          } else {
            checkIdentityKeys(target, has, key);
          }
          const oldValue =3D get ? get.call(target, key) : void 0;
          const result =3D target.delete(key);
          if (hadKey) {
            trigger(target, "delete", key, void 0, oldValue);
          }
          return result;
        },
        clear() {
          const target =3D toRaw(this);
          const hadItems =3D target.size !=3D=3D 0;
          const oldTarget =3D isMap(target) ? new Map(target) : new Set(tar=
get) ;
          const result =3D target.clear();
          if (hadItems) {
            trigger(
              target,
              "clear",
              void 0,
              void 0,
              oldTarget
            );
          }
          return result;
        }
      }
    );
    const iteratorMethods =3D [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ];
    iteratorMethods.forEach((method) =3D&gt; {
      instrumentations[method] =3D createIterableMethod(method, readonly, s=
hallow);
    });
    return instrumentations;
  }
  function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations =3D createInstrumentations(isReadonly2, shallow)=
;
    return (target, key, receiver) =3D&gt; {
      if (key =3D=3D=3D "__v_isReactive") {
        return !isReadonly2;
      } else if (key =3D=3D=3D "__v_isReadonly") {
        return isReadonly2;
      } else if (key =3D=3D=3D "__v_raw") {
        return target;
      }
      return Reflect.get(
        hasOwn(instrumentations, key) &amp;&amp; key in target ? instrument=
ations : target,
        key,
        receiver
      );
    };
  }
  const mutableCollectionHandlers =3D {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
  };
  const shallowCollectionHandlers =3D {
    get: /* @__PURE__ */ createInstrumentationGetter(false, true)
  };
  const readonlyCollectionHandlers =3D {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
  };
  const shallowReadonlyCollectionHandlers =3D {
    get: /* @__PURE__ */ createInstrumentationGetter(true, true)
  };
  function checkIdentityKeys(target, has, key) {
    const rawKey =3D toRaw(key);
    if (rawKey !=3D=3D key &amp;&amp; has.call(target, rawKey)) {
      const type =3D toRawType(target);
      warn$2(
        `Reactive ${type} contains both the raw and reactive versions of th=
e same object${type =3D=3D=3D `Map` ? ` as keys` : ``}, which can lead to i=
nconsistencies. Avoid differentiating between the raw and reactive versions=
 of an object and only use the reactive version if possible.`
      );
    }
  }

  const reactiveMap =3D /* @__PURE__ */ new WeakMap();
  const shallowReactiveMap =3D /* @__PURE__ */ new WeakMap();
  const readonlyMap =3D /* @__PURE__ */ new WeakMap();
  const shallowReadonlyMap =3D /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1 /* COMMON */;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2 /* COLLECTION */;
      default:
        return 0 /* INVALID */;
    }
  }
  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 /* INVALID =
*/ : targetTypeMap(toRawType(value));
  }
  function reactive(target) {
    if (isReadonly(target)) {
      return target;
    }
    return createReactiveObject(
      target,
      false,
      mutableHandlers,
      mutableCollectionHandlers,
      reactiveMap
    );
  }
  function shallowReactive(target) {
    return createReactiveObject(
      target,
      false,
      shallowReactiveHandlers,
      shallowCollectionHandlers,
      shallowReactiveMap
    );
  }
  function readonly(target) {
    return createReactiveObject(
      target,
      true,
      readonlyHandlers,
      readonlyCollectionHandlers,
      readonlyMap
    );
  }
  function shallowReadonly(target) {
    return createReactiveObject(
      target,
      true,
      shallowReadonlyHandlers,
      shallowReadonlyCollectionHandlers,
      shallowReadonlyMap
    );
  }
  function createReactiveObject(target, isReadonly2, baseHandlers, collecti=
onHandlers, proxyMap) {
    if (!isObject(target)) {
      {
        warn$2(
          `value cannot be made ${isReadonly2 ? "readonly" : "reactive"}: $=
{String(
          target
        )}`
        );
      }
      return target;
    }
    if (target["__v_raw"] &amp;&amp; !(isReadonly2 &amp;&amp; target["__v_i=
sReactive"])) {
      return target;
    }
    const targetType =3D getTargetType(target);
    if (targetType =3D=3D=3D 0 /* INVALID */) {
      return target;
    }
    const existingProxy =3D proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const proxy =3D new Proxy(
      target,
      targetType =3D=3D=3D 2 /* COLLECTION */ ? collectionHandlers : baseHa=
ndlers
    );
    proxyMap.set(target, proxy);
    return proxy;
  }
  function isReactive(value) {
    if (isReadonly(value)) {
      return isReactive(value["__v_raw"]);
    }
    return !!(value &amp;&amp; value["__v_isReactive"]);
  }
  function isReadonly(value) {
    return !!(value &amp;&amp; value["__v_isReadonly"]);
  }
  function isShallow(value) {
    return !!(value &amp;&amp; value["__v_isShallow"]);
  }
  function isProxy(value) {
    return value ? !!value["__v_raw"] : false;
  }
  function toRaw(observed) {
    const raw =3D observed &amp;&amp; observed["__v_raw"];
    return raw ? toRaw(raw) : observed;
  }
  function markRaw(value) {
    if (!hasOwn(value, "__v_skip") &amp;&amp; Object.isExtensible(value)) {
      def(value, "__v_skip", true);
    }
    return value;
  }
  const toReactive =3D (value) =3D&gt; isObject(value) ? reactive(value) : =
value;
  const toReadonly =3D (value) =3D&gt; isObject(value) ? readonly(value) : =
value;

  function isRef(r) {
    return r ? r["__v_isRef"] =3D=3D=3D true : false;
  }
  function ref(value) {
    return createRef(value, false);
  }
  function shallowRef(value) {
    return createRef(value, true);
  }
  function createRef(rawValue, shallow) {
    if (isRef(rawValue)) {
      return rawValue;
    }
    return new RefImpl(rawValue, shallow);
  }
  class RefImpl {
    constructor(value, isShallow2) {
      this.dep =3D new Dep();
      this["__v_isRef"] =3D true;
      this["__v_isShallow"] =3D false;
      this._rawValue =3D isShallow2 ? value : toRaw(value);
      this._value =3D isShallow2 ? value : toReactive(value);
      this["__v_isShallow"] =3D isShallow2;
    }
    get value() {
      {
        this.dep.track({
          target: this,
          type: "get",
          key: "value"
        });
      }
      return this._value;
    }
    set value(newValue) {
      const oldValue =3D this._rawValue;
      const useDirectValue =3D this["__v_isShallow"] || isShallow(newValue)=
 || isReadonly(newValue);
      newValue =3D useDirectValue ? newValue : toRaw(newValue);
      if (hasChanged(newValue, oldValue)) {
        this._rawValue =3D newValue;
        this._value =3D useDirectValue ? newValue : toReactive(newValue);
        {
          this.dep.trigger({
            target: this,
            type: "set",
            key: "value",
            newValue,
            oldValue
          });
        }
      }
    }
  }
  function triggerRef(ref2) {
    if (ref2.dep) {
      {
        ref2.dep.trigger({
          target: ref2,
          type: "set",
          key: "value",
          newValue: ref2._value
        });
      }
    }
  }
  function unref(ref2) {
    return isRef(ref2) ? ref2.value : ref2;
  }
  function toValue(source) {
    return isFunction(source) ? source() : unref(source);
  }
  const shallowUnwrapHandlers =3D {
    get: (target, key, receiver) =3D&gt; key =3D=3D=3D "__v_raw" ? target :=
 unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) =3D&gt; {
      const oldValue =3D target[key];
      if (isRef(oldValue) &amp;&amp; !isRef(value)) {
        oldValue.value =3D value;
        return true;
      } else {
        return Reflect.set(target, key, value, receiver);
      }
    }
  };
  function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWi=
thRefs, shallowUnwrapHandlers);
  }
  class CustomRefImpl {
    constructor(factory) {
      this["__v_isRef"] =3D true;
      this._value =3D void 0;
      const dep =3D this.dep =3D new Dep();
      const { get, set } =3D factory(dep.track.bind(dep), dep.trigger.bind(=
dep));
      this._get =3D get;
      this._set =3D set;
    }
    get value() {
      return this._value =3D this._get();
    }
    set value(newVal) {
      this._set(newVal);
    }
  }
  function customRef(factory) {
    return new CustomRefImpl(factory);
  }
  function toRefs(object) {
    if (!isProxy(object)) {
      warn$2(`toRefs() expects a reactive object but received a plain one.`=
);
    }
    const ret =3D isArray(object) ? new Array(object.length) : {};
    for (const key in object) {
      ret[key] =3D propertyToRef(object, key);
    }
    return ret;
  }
  class ObjectRefImpl {
    constructor(_object, _key, _defaultValue) {
      this._object =3D _object;
      this._key =3D _key;
      this._defaultValue =3D _defaultValue;
      this["__v_isRef"] =3D true;
      this._value =3D void 0;
    }
    get value() {
      const val =3D this._object[this._key];
      return this._value =3D val =3D=3D=3D void 0 ? this._defaultValue : va=
l;
    }
    set value(newVal) {
      this._object[this._key] =3D newVal;
    }
    get dep() {
      return getDepFromReactive(toRaw(this._object), this._key);
    }
  }
  class GetterRefImpl {
    constructor(_getter) {
      this._getter =3D _getter;
      this["__v_isRef"] =3D true;
      this["__v_isReadonly"] =3D true;
      this._value =3D void 0;
    }
    get value() {
      return this._value =3D this._getter();
    }
  }
  function toRef(source, key, defaultValue) {
    if (isRef(source)) {
      return source;
    } else if (isFunction(source)) {
      return new GetterRefImpl(source);
    } else if (isObject(source) &amp;&amp; arguments.length &gt; 1) {
      return propertyToRef(source, key, defaultValue);
    } else {
      return ref(source);
    }
  }
  function propertyToRef(source, key, defaultValue) {
    const val =3D source[key];
    return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
  }

  class ComputedRefImpl {
    constructor(fn, setter, isSSR) {
      this.fn =3D fn;
      this.setter =3D setter;
      /**
       * @internal
       */
      this._value =3D void 0;
      /**
       * @internal
       */
      this.dep =3D new Dep(this);
      /**
       * @internal
       */
      this.__v_isRef =3D true;
      // TODO isolatedDeclarations "__v_isReadonly"
      // A computed is also a subscriber that tracks other deps
      /**
       * @internal
       */
      this.deps =3D void 0;
      /**
       * @internal
       */
      this.depsTail =3D void 0;
      /**
       * @internal
       */
      this.flags =3D 16;
      /**
       * @internal
       */
      this.globalVersion =3D globalVersion - 1;
      /**
       * @internal
       */
      this.next =3D void 0;
      // for backwards compat
      this.effect =3D this;
      this["__v_isReadonly"] =3D !setter;
      this.isSSR =3D isSSR;
    }
    /**
     * @internal
     */
    notify() {
      this.flags |=3D 16;
      if (!(this.flags &amp; 8) &amp;&amp; // avoid infinite self recursion
      activeSub !=3D=3D this) {
        batch(this, true);
        return true;
      }
    }
    get value() {
      const link =3D this.dep.track({
        target: this,
        type: "get",
        key: "value"
      }) ;
      refreshComputed(this);
      if (link) {
        link.version =3D this.dep.version;
      }
      return this._value;
    }
    set value(newValue) {
      if (this.setter) {
        this.setter(newValue);
      } else {
        warn$2("Write operation failed: computed value is readonly");
      }
    }
  }
  function computed$1(getterOrOptions, debugOptions, isSSR =3D false) {
    let getter;
    let setter;
    if (isFunction(getterOrOptions)) {
      getter =3D getterOrOptions;
    } else {
      getter =3D getterOrOptions.get;
      setter =3D getterOrOptions.set;
    }
    const cRef =3D new ComputedRefImpl(getter, setter, isSSR);
    if (debugOptions &amp;&amp; !isSSR) {
      cRef.onTrack =3D debugOptions.onTrack;
      cRef.onTrigger =3D debugOptions.onTrigger;
    }
    return cRef;
  }

  const TrackOpTypes =3D {
    "GET": "get",
    "HAS": "has",
    "ITERATE": "iterate"
  };
  const TriggerOpTypes =3D {
    "SET": "set",
    "ADD": "add",
    "DELETE": "delete",
    "CLEAR": "clear"
  };

  const INITIAL_WATCHER_VALUE =3D {};
  const cleanupMap =3D /* @__PURE__ */ new WeakMap();
  let activeWatcher =3D void 0;
  function getCurrentWatcher() {
    return activeWatcher;
  }
  function onWatcherCleanup(cleanupFn, failSilently =3D false, owner =3D ac=
tiveWatcher) {
    if (owner) {
      let cleanups =3D cleanupMap.get(owner);
      if (!cleanups) cleanupMap.set(owner, cleanups =3D []);
      cleanups.push(cleanupFn);
    } else if (!failSilently) {
      warn$2(
        `onWatcherCleanup() was called when there was no active watcher to =
associate with.`
      );
    }
  }
  function watch$1(source, cb, options =3D EMPTY_OBJ) {
    const { immediate, deep, once, scheduler, augmentJob, call } =3D option=
s;
    const warnInvalidSource =3D (s) =3D&gt; {
      (options.onWarn || warn$2)(
        `Invalid watch source: `,
        s,
        `A watch source can only be a getter/effect function, a ref, a reac=
tive object, or an array of these types.`
      );
    };
    const reactiveGetter =3D (source2) =3D&gt; {
      if (deep) return source2;
      if (isShallow(source2) || deep =3D=3D=3D false || deep =3D=3D=3D 0)
        return traverse(source2, 1);
      return traverse(source2);
    };
    let effect;
    let getter;
    let cleanup;
    let boundCleanup;
    let forceTrigger =3D false;
    let isMultiSource =3D false;
    if (isRef(source)) {
      getter =3D () =3D&gt; source.value;
      forceTrigger =3D isShallow(source);
    } else if (isReactive(source)) {
      getter =3D () =3D&gt; reactiveGetter(source);
      forceTrigger =3D true;
    } else if (isArray(source)) {
      isMultiSource =3D true;
      forceTrigger =3D source.some((s) =3D&gt; isReactive(s) || isShallow(s=
));
      getter =3D () =3D&gt; source.map((s) =3D&gt; {
        if (isRef(s)) {
          return s.value;
        } else if (isReactive(s)) {
          return reactiveGetter(s);
        } else if (isFunction(s)) {
          return call ? call(s, 2) : s();
        } else {
          warnInvalidSource(s);
        }
      });
    } else if (isFunction(source)) {
      if (cb) {
        getter =3D call ? () =3D&gt; call(source, 2) : source;
      } else {
        getter =3D () =3D&gt; {
          if (cleanup) {
            pauseTracking();
            try {
              cleanup();
            } finally {
              resetTracking();
            }
          }
          const currentEffect =3D activeWatcher;
          activeWatcher =3D effect;
          try {
            return call ? call(source, 3, [boundCleanup]) : source(boundCle=
anup);
          } finally {
            activeWatcher =3D currentEffect;
          }
        };
      }
    } else {
      getter =3D NOOP;
      warnInvalidSource(source);
    }
    if (cb &amp;&amp; deep) {
      const baseGetter =3D getter;
      const depth =3D deep =3D=3D=3D true ? Infinity : deep;
      getter =3D () =3D&gt; traverse(baseGetter(), depth);
    }
    const scope =3D getCurrentScope();
    const watchHandle =3D () =3D&gt; {
      effect.stop();
      if (scope &amp;&amp; scope.active) {
        remove(scope.effects, effect);
      }
    };
    if (once &amp;&amp; cb) {
      const _cb =3D cb;
      cb =3D (...args) =3D&gt; {
        _cb(...args);
        watchHandle();
      };
    }
    let oldValue =3D isMultiSource ? new Array(source.length).fill(INITIAL_=
WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
    const job =3D (immediateFirstRun) =3D&gt; {
      if (!(effect.flags &amp; 1) || !effect.dirty &amp;&amp; !immediateFir=
stRun) {
        return;
      }
      if (cb) {
        const newValue =3D effect.run();
        if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) =
=3D&gt; hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue))) {
          if (cleanup) {
            cleanup();
          }
          const currentWatcher =3D activeWatcher;
          activeWatcher =3D effect;
          try {
            const args =3D [
              newValue,
              // pass undefined as the old value when it's changed for the =
first time
              oldValue =3D=3D=3D INITIAL_WATCHER_VALUE ? void 0 : isMultiSo=
urce &amp;&amp; oldValue[0] =3D=3D=3D INITIAL_WATCHER_VALUE ? [] : oldValue=
,
              boundCleanup
            ];
            oldValue =3D newValue;
            call ? call(cb, 3, args) : (
              // @ts-expect-error
              cb(...args)
            );
          } finally {
            activeWatcher =3D currentWatcher;
          }
        }
      } else {
        effect.run();
      }
    };
    if (augmentJob) {
      augmentJob(job);
    }
    effect =3D new ReactiveEffect(getter);
    effect.scheduler =3D scheduler ? () =3D&gt; scheduler(job, false) : job=
;
    boundCleanup =3D (fn) =3D&gt; onWatcherCleanup(fn, false, effect);
    cleanup =3D effect.onStop =3D () =3D&gt; {
      const cleanups =3D cleanupMap.get(effect);
      if (cleanups) {
        if (call) {
          call(cleanups, 4);
        } else {
          for (const cleanup2 of cleanups) cleanup2();
        }
        cleanupMap.delete(effect);
      }
    };
    {
      effect.onTrack =3D options.onTrack;
      effect.onTrigger =3D options.onTrigger;
    }
    if (cb) {
      if (immediate) {
        job(true);
      } else {
        oldValue =3D effect.run();
      }
    } else if (scheduler) {
      scheduler(job.bind(null, true), true);
    } else {
      effect.run();
    }
    watchHandle.pause =3D effect.pause.bind(effect);
    watchHandle.resume =3D effect.resume.bind(effect);
    watchHandle.stop =3D watchHandle;
    return watchHandle;
  }
  function traverse(value, depth =3D Infinity, seen) {
    if (depth &lt;=3D 0 || !isObject(value) || value["__v_skip"]) {
      return value;
    }
    seen =3D seen || /* @__PURE__ */ new Set();
    if (seen.has(value)) {
      return value;
    }
    seen.add(value);
    depth--;
    if (isRef(value)) {
      traverse(value.value, depth, seen);
    } else if (isArray(value)) {
      for (let i =3D 0; i &lt; value.length; i++) {
        traverse(value[i], depth, seen);
      }
    } else if (isSet(value) || isMap(value)) {
      value.forEach((v) =3D&gt; {
        traverse(v, depth, seen);
      });
    } else if (isPlainObject(value)) {
      for (const key in value) {
        traverse(value[key], depth, seen);
      }
      for (const key of Object.getOwnPropertySymbols(value)) {
        if (Object.prototype.propertyIsEnumerable.call(value, key)) {
          traverse(value[key], depth, seen);
        }
      }
    }
    return value;
  }

  const stack$1 =3D [];
  function pushWarningContext(vnode) {
    stack$1.push(vnode);
  }
  function popWarningContext() {
    stack$1.pop();
  }
  let isWarning =3D false;
  function warn$1(msg, ...args) {
    if (isWarning) return;
    isWarning =3D true;
    pauseTracking();
    const instance =3D stack$1.length ? stack$1[stack$1.length - 1].compone=
nt : null;
    const appWarnHandler =3D instance &amp;&amp; instance.appContext.config=
.warnHandler;
    const trace =3D getComponentTrace();
    if (appWarnHandler) {
      callWithErrorHandling(
        appWarnHandler,
        instance,
        11,
        [
          // eslint-disable-next-line no-restricted-syntax
          msg + args.map((a) =3D&gt; {
            var _a, _b;
            return (_b =3D (_a =3D a.toString) =3D=3D null ? void 0 : _a.ca=
ll(a)) !=3D null ? _b : JSON.stringify(a);
          }).join(""),
          instance &amp;&amp; instance.proxy,
          trace.map(
            ({ vnode }) =3D&gt; `at &lt;${formatComponentName(instance, vno=
de.type)}&gt;`
          ).join("\n"),
          trace
        ]
      );
    } else {
      const warnArgs =3D [`[Vue warn]: ${msg}`, ...args];
      if (trace.length &amp;&amp; // avoid spamming console during tests
      true) {
        warnArgs.push(`
`, ...formatTrace(trace));
      }
      console.warn(...warnArgs);
    }
    resetTracking();
    isWarning =3D false;
  }
  function getComponentTrace() {
    let currentVNode =3D stack$1[stack$1.length - 1];
    if (!currentVNode) {
      return [];
    }
    const normalizedStack =3D [];
    while (currentVNode) {
      const last =3D normalizedStack[0];
      if (last &amp;&amp; last.vnode =3D=3D=3D currentVNode) {
        last.recurseCount++;
      } else {
        normalizedStack.push({
          vnode: currentVNode,
          recurseCount: 0
        });
      }
      const parentInstance =3D currentVNode.component &amp;&amp; currentVNo=
de.component.parent;
      currentVNode =3D parentInstance &amp;&amp; parentInstance.vnode;
    }
    return normalizedStack;
  }
  function formatTrace(trace) {
    const logs =3D [];
    trace.forEach((entry, i) =3D&gt; {
      logs.push(...i =3D=3D=3D 0 ? [] : [`
`], ...formatTraceEntry(entry));
    });
    return logs;
  }
  function formatTraceEntry({ vnode, recurseCount }) {
    const postfix =3D recurseCount &gt; 0 ? `... (${recurseCount} recursive=
 calls)` : ``;
    const isRoot =3D vnode.component ? vnode.component.parent =3D=3D null :=
 false;
    const open =3D ` at &lt;${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
    const close =3D `&gt;` + postfix;
    return vnode.props ? [open, ...formatProps(vnode.props), close] : [open=
 + close];
  }
  function formatProps(props) {
    const res =3D [];
    const keys =3D Object.keys(props);
    keys.slice(0, 3).forEach((key) =3D&gt; {
      res.push(...formatProp(key, props[key]));
    });
    if (keys.length &gt; 3) {
      res.push(` ...`);
    }
    return res;
  }
  function formatProp(key, value, raw) {
    if (isString(value)) {
      value =3D JSON.stringify(value);
      return raw ? value : [`${key}=3D${value}`];
    } else if (typeof value =3D=3D=3D "number" || typeof value =3D=3D=3D "b=
oolean" || value =3D=3D null) {
      return raw ? value : [`${key}=3D${value}`];
    } else if (isRef(value)) {
      value =3D formatProp(key, toRaw(value.value), true);
      return raw ? value : [`${key}=3DRef&lt;`, value, `&gt;`];
    } else if (isFunction(value)) {
      return [`${key}=3Dfn${value.name ? `&lt;${value.name}&gt;` : ``}`];
    } else {
      value =3D toRaw(value);
      return raw ? value : [`${key}=3D`, value];
    }
  }
  function assertNumber(val, type) {
    if (val =3D=3D=3D void 0) {
      return;
    } else if (typeof val !=3D=3D "number") {
      warn$1(`${type} is not a valid number - got ${JSON.stringify(val)}.`)=
;
    } else if (isNaN(val)) {
      warn$1(`${type} is NaN - the duration expression might be incorrect.`=
);
    }
  }

  const ErrorCodes =3D {
    "SETUP_FUNCTION": 0,
    "0": "SETUP_FUNCTION",
    "RENDER_FUNCTION": 1,
    "1": "RENDER_FUNCTION",
    "NATIVE_EVENT_HANDLER": 5,
    "5": "NATIVE_EVENT_HANDLER",
    "COMPONENT_EVENT_HANDLER": 6,
    "6": "COMPONENT_EVENT_HANDLER",
    "VNODE_HOOK": 7,
    "7": "VNODE_HOOK",
    "DIRECTIVE_HOOK": 8,
    "8": "DIRECTIVE_HOOK",
    "TRANSITION_HOOK": 9,
    "9": "TRANSITION_HOOK",
    "APP_ERROR_HANDLER": 10,
    "10": "APP_ERROR_HANDLER",
    "APP_WARN_HANDLER": 11,
    "11": "APP_WARN_HANDLER",
    "FUNCTION_REF": 12,
    "12": "FUNCTION_REF",
    "ASYNC_COMPONENT_LOADER": 13,
    "13": "ASYNC_COMPONENT_LOADER",
    "SCHEDULER": 14,
    "14": "SCHEDULER",
    "COMPONENT_UPDATE": 15,
    "15": "COMPONENT_UPDATE",
    "APP_UNMOUNT_CLEANUP": 16,
    "16": "APP_UNMOUNT_CLEANUP"
  };
  const ErrorTypeStrings$1 =3D {
    ["sp"]: "serverPrefetch hook",
    ["bc"]: "beforeCreate hook",
    ["c"]: "created hook",
    ["bm"]: "beforeMount hook",
    ["m"]: "mounted hook",
    ["bu"]: "beforeUpdate hook",
    ["u"]: "updated",
    ["bum"]: "beforeUnmount hook",
    ["um"]: "unmounted hook",
    ["a"]: "activated hook",
    ["da"]: "deactivated hook",
    ["ec"]: "errorCaptured hook",
    ["rtc"]: "renderTracked hook",
    ["rtg"]: "renderTriggered hook",
    [0]: "setup function",
    [1]: "render function",
    [2]: "watcher getter",
    [3]: "watcher callback",
    [4]: "watcher cleanup function",
    [5]: "native event handler",
    [6]: "component event handler",
    [7]: "vnode hook",
    [8]: "directive hook",
    [9]: "transition hook",
    [10]: "app errorHandler",
    [11]: "app warnHandler",
    [12]: "ref function",
    [13]: "async component loader",
    [14]: "scheduler flush",
    [15]: "component update",
    [16]: "app unmount cleanup function"
  };
  function callWithErrorHandling(fn, instance, type, args) {
    try {
      return args ? fn(...args) : fn();
    } catch (err) {
      handleError(err, instance, type);
    }
  }
  function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (isFunction(fn)) {
      const res =3D callWithErrorHandling(fn, instance, type, args);
      if (res &amp;&amp; isPromise(res)) {
        res.catch((err) =3D&gt; {
          handleError(err, instance, type);
        });
      }
      return res;
    }
    if (isArray(fn)) {
      const values =3D [];
      for (let i =3D 0; i &lt; fn.length; i++) {
        values.push(callWithAsyncErrorHandling(fn[i], instance, type, args)=
);
      }
      return values;
    } else {
      warn$1(
        `Invalid value type passed to callWithAsyncErrorHandling(): ${typeo=
f fn}`
      );
    }
  }
  function handleError(err, instance, type, throwInDev =3D true) {
    const contextVNode =3D instance ? instance.vnode : null;
    const { errorHandler, throwUnhandledErrorInProduction } =3D instance &a=
mp;&amp; instance.appContext.config || EMPTY_OBJ;
    if (instance) {
      let cur =3D instance.parent;
      const exposedInstance =3D instance.proxy;
      const errorInfo =3D ErrorTypeStrings$1[type] ;
      while (cur) {
        const errorCapturedHooks =3D cur.ec;
        if (errorCapturedHooks) {
          for (let i =3D 0; i &lt; errorCapturedHooks.length; i++) {
            if (errorCapturedHooks[i](err, exposedInstance, errorInfo) =3D=
=3D=3D false) {
              return;
            }
          }
        }
        cur =3D cur.parent;
      }
      if (errorHandler) {
        pauseTracking();
        callWithErrorHandling(errorHandler, null, 10, [
          err,
          exposedInstance,
          errorInfo
        ]);
        resetTracking();
        return;
      }
    }
    logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProd=
uction);
  }
  function logError(err, type, contextVNode, throwInDev =3D true, throwInPr=
od =3D false) {
    {
      const info =3D ErrorTypeStrings$1[type];
      if (contextVNode) {
        pushWarningContext(contextVNode);
      }
      warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`=
);
      if (contextVNode) {
        popWarningContext();
      }
      if (throwInDev) {
        throw err;
      } else {
        console.error(err);
      }
    }
  }

  const queue =3D [];
  let flushIndex =3D -1;
  const pendingPostFlushCbs =3D [];
  let activePostFlushCbs =3D null;
  let postFlushIndex =3D 0;
  const resolvedPromise =3D /* @__PURE__ */ Promise.resolve();
  let currentFlushPromise =3D null;
  const RECURSION_LIMIT =3D 100;
  function nextTick(fn) {
    const p =3D currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
  }
  function findInsertionIndex(id) {
    let start =3D flushIndex + 1;
    let end =3D queue.length;
    while (start &lt; end) {
      const middle =3D start + end &gt;&gt;&gt; 1;
      const middleJob =3D queue[middle];
      const middleJobId =3D getId(middleJob);
      if (middleJobId &lt; id || middleJobId =3D=3D=3D id &amp;&amp; middle=
Job.flags &amp; 2) {
        start =3D middle + 1;
      } else {
        end =3D middle;
      }
    }
    return start;
  }
  function queueJob(job) {
    if (!(job.flags &amp; 1)) {
      const jobId =3D getId(job);
      const lastJob =3D queue[queue.length - 1];
      if (!lastJob || // fast path when the job id is larger than the tail
      !(job.flags &amp; 2) &amp;&amp; jobId &gt;=3D getId(lastJob)) {
        queue.push(job);
      } else {
        queue.splice(findInsertionIndex(jobId), 0, job);
      }
      job.flags |=3D 1;
      queueFlush();
    }
  }
  function queueFlush() {
    if (!currentFlushPromise) {
      currentFlushPromise =3D resolvedPromise.then(flushJobs);
    }
  }
  function queuePostFlushCb(cb) {
    if (!isArray(cb)) {
      if (activePostFlushCbs &amp;&amp; cb.id =3D=3D=3D -1) {
        activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
      } else if (!(cb.flags &amp; 1)) {
        pendingPostFlushCbs.push(cb);
        cb.flags |=3D 1;
      }
    } else {
      pendingPostFlushCbs.push(...cb);
    }
    queueFlush();
  }
  function flushPreFlushCbs(instance, seen, i =3D flushIndex + 1) {
    {
      seen =3D seen || /* @__PURE__ */ new Map();
    }
    for (; i &lt; queue.length; i++) {
      const cb =3D queue[i];
      if (cb &amp;&amp; cb.flags &amp; 2) {
        if (instance &amp;&amp; cb.id !=3D=3D instance.uid) {
          continue;
        }
        if (checkRecursiveUpdates(seen, cb)) {
          continue;
        }
        queue.splice(i, 1);
        i--;
        if (cb.flags &amp; 4) {
          cb.flags &amp;=3D -2;
        }
        cb();
        if (!(cb.flags &amp; 4)) {
          cb.flags &amp;=3D -2;
        }
      }
    }
  }
  function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
      const deduped =3D [...new Set(pendingPostFlushCbs)].sort(
        (a, b) =3D&gt; getId(a) - getId(b)
      );
      pendingPostFlushCbs.length =3D 0;
      if (activePostFlushCbs) {
        activePostFlushCbs.push(...deduped);
        return;
      }
      activePostFlushCbs =3D deduped;
      {
        seen =3D seen || /* @__PURE__ */ new Map();
      }
      for (postFlushIndex =3D 0; postFlushIndex &lt; activePostFlushCbs.len=
gth; postFlushIndex++) {
        const cb =3D activePostFlushCbs[postFlushIndex];
        if (checkRecursiveUpdates(seen, cb)) {
          continue;
        }
        if (cb.flags &amp; 4) {
          cb.flags &amp;=3D -2;
        }
        if (!(cb.flags &amp; 8)) cb();
        cb.flags &amp;=3D -2;
      }
      activePostFlushCbs =3D null;
      postFlushIndex =3D 0;
    }
  }
  const getId =3D (job) =3D&gt; job.id =3D=3D null ? job.flags &amp; 2 ? -1=
 : Infinity : job.id;
  function flushJobs(seen) {
    {
      seen =3D seen || /* @__PURE__ */ new Map();
    }
    const check =3D (job) =3D&gt; checkRecursiveUpdates(seen, job) ;
    try {
      for (flushIndex =3D 0; flushIndex &lt; queue.length; flushIndex++) {
        const job =3D queue[flushIndex];
        if (job &amp;&amp; !(job.flags &amp; 8)) {
          if (check(job)) {
            continue;
          }
          if (job.flags &amp; 4) {
            job.flags &amp;=3D ~1;
          }
          callWithErrorHandling(
            job,
            job.i,
            job.i ? 15 : 14
          );
          if (!(job.flags &amp; 4)) {
            job.flags &amp;=3D ~1;
          }
        }
      }
    } finally {
      for (; flushIndex &lt; queue.length; flushIndex++) {
        const job =3D queue[flushIndex];
        if (job) {
          job.flags &amp;=3D -2;
        }
      }
      flushIndex =3D -1;
      queue.length =3D 0;
      flushPostFlushCbs(seen);
      currentFlushPromise =3D null;
      if (queue.length || pendingPostFlushCbs.length) {
        flushJobs(seen);
      }
    }
  }
  function checkRecursiveUpdates(seen, fn) {
    const count =3D seen.get(fn) || 0;
    if (count &gt; RECURSION_LIMIT) {
      const instance =3D fn.i;
      const componentName =3D instance &amp;&amp; getComponentName(instance=
.type);
      handleError(
        `Maximum recursive updates exceeded${componentName ? ` in component=
 &lt;${componentName}&gt;` : ``}. This means you have a reactive effect tha=
t is mutating its own dependencies and thus recursively triggering itself. =
Possible sources include component template, render function, updated hook =
or watcher source function.`,
        null,
        10
      );
      return true;
    }
    seen.set(fn, count + 1);
    return false;
  }

  let isHmrUpdating =3D false;
  const hmrDirtyComponents =3D /* @__PURE__ */ new Map();
  {
    getGlobalThis().__VUE_HMR_RUNTIME__ =3D {
      createRecord: tryWrap(createRecord),
      rerender: tryWrap(rerender),
      reload: tryWrap(reload)
    };
  }
  const map =3D /* @__PURE__ */ new Map();
  function registerHMR(instance) {
    const id =3D instance.type.__hmrId;
    let record =3D map.get(id);
    if (!record) {
      createRecord(id, instance.type);
      record =3D map.get(id);
    }
    record.instances.add(instance);
  }
  function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
  }
  function createRecord(id, initialDef) {
    if (map.has(id)) {
      return false;
    }
    map.set(id, {
      initialDef: normalizeClassComponent(initialDef),
      instances: /* @__PURE__ */ new Set()
    });
    return true;
  }
  function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
  }
  function rerender(id, newRender) {
    const record =3D map.get(id);
    if (!record) {
      return;
    }
    record.initialDef.render =3D newRender;
    [...record.instances].forEach((instance) =3D&gt; {
      if (newRender) {
        instance.render =3D newRender;
        normalizeClassComponent(instance.type).render =3D newRender;
      }
      instance.renderCache =3D [];
      isHmrUpdating =3D true;
      instance.update();
      isHmrUpdating =3D false;
    });
  }
  function reload(id, newComp) {
    const record =3D map.get(id);
    if (!record) return;
    newComp =3D normalizeClassComponent(newComp);
    updateComponentDef(record.initialDef, newComp);
    const instances =3D [...record.instances];
    for (let i =3D 0; i &lt; instances.length; i++) {
      const instance =3D instances[i];
      const oldComp =3D normalizeClassComponent(instance.type);
      let dirtyInstances =3D hmrDirtyComponents.get(oldComp);
      if (!dirtyInstances) {
        if (oldComp !=3D=3D record.initialDef) {
          updateComponentDef(oldComp, newComp);
        }
        hmrDirtyComponents.set(oldComp, dirtyInstances =3D /* @__PURE__ */ =
new Set());
      }
      dirtyInstances.add(instance);
      instance.appContext.propsCache.delete(instance.type);
      instance.appContext.emitsCache.delete(instance.type);
      instance.appContext.optionsCache.delete(instance.type);
      if (instance.ceReload) {
        dirtyInstances.add(instance);
        instance.ceReload(newComp.styles);
        dirtyInstances.delete(instance);
      } else if (instance.parent) {
        queueJob(() =3D&gt; {
          isHmrUpdating =3D true;
          instance.parent.update();
          isHmrUpdating =3D false;
          dirtyInstances.delete(instance);
        });
      } else if (instance.appContext.reload) {
        instance.appContext.reload();
      } else if (typeof window !=3D=3D "undefined") {
        window.location.reload();
      } else {
        console.warn(
          "[HMR] Root or manually mounted instance modified. Full reload re=
quired."
        );
      }
      if (instance.root.ce &amp;&amp; instance !=3D=3D instance.root) {
        instance.root.ce._removeChildStyle(oldComp);
      }
    }
    queuePostFlushCb(() =3D&gt; {
      hmrDirtyComponents.clear();
    });
  }
  function updateComponentDef(oldComp, newComp) {
    extend(oldComp, newComp);
    for (const key in oldComp) {
      if (key !=3D=3D "__file" &amp;&amp; !(key in newComp)) {
        delete oldComp[key];
      }
    }
  }
  function tryWrap(fn) {
    return (id, arg) =3D&gt; {
      try {
        return fn(id, arg);
      } catch (e) {
        console.error(e);
        console.warn(
          `[HMR] Something went wrong during Vue component hot-reload. Full=
 reload required.`
        );
      }
    };
  }

  let devtools$1;
  let buffer =3D [];
  let devtoolsNotInstalled =3D false;
  function emit$1(event, ...args) {
    if (devtools$1) {
      devtools$1.emit(event, ...args);
    } else if (!devtoolsNotInstalled) {
      buffer.push({ event, args });
    }
  }
  function setDevtoolsHook$1(hook, target) {
    var _a, _b;
    devtools$1 =3D hook;
    if (devtools$1) {
      devtools$1.enabled =3D true;
      buffer.forEach(({ event, args }) =3D&gt; devtools$1.emit(event, ...ar=
gs));
      buffer =3D [];
    } else if (
      // handle late devtools injection - only do this if we are in an actu=
al
      // browser environment to avoid the timer handle stalling test runner=
 exit
      // (#4815)
      typeof window !=3D=3D "undefined" &amp;&amp; // some envs mock window=
 but not fully
      window.HTMLElement &amp;&amp; // also exclude jsdom
      // eslint-disable-next-line no-restricted-syntax
      !((_b =3D (_a =3D window.navigator) =3D=3D null ? void 0 : _a.userAge=
nt) =3D=3D null ? void 0 : _b.includes("jsdom"))
    ) {
      const replay =3D target.__VUE_DEVTOOLS_HOOK_REPLAY__ =3D target.__VUE=
_DEVTOOLS_HOOK_REPLAY__ || [];
      replay.push((newHook) =3D&gt; {
        setDevtoolsHook$1(newHook, target);
      });
      setTimeout(() =3D&gt; {
        if (!devtools$1) {
          target.__VUE_DEVTOOLS_HOOK_REPLAY__ =3D null;
          devtoolsNotInstalled =3D true;
          buffer =3D [];
        }
      }, 3e3);
    } else {
      devtoolsNotInstalled =3D true;
      buffer =3D [];
    }
  }
  function devtoolsInitApp(app, version) {
    emit$1("app:init" /* APP_INIT */, app, version, {
      Fragment,
      Text,
      Comment,
      Static
    });
  }
  function devtoolsUnmountApp(app) {
    emit$1("app:unmount" /* APP_UNMOUNT */, app);
  }
  const devtoolsComponentAdded =3D /* @__PURE__ */ createDevtoolsComponentH=
ook("component:added" /* COMPONENT_ADDED */);
  const devtoolsComponentUpdated =3D /* @__PURE__ */ createDevtoolsComponen=
tHook("component:updated" /* COMPONENT_UPDATED */);
  const _devtoolsComponentRemoved =3D /* @__PURE__ */ createDevtoolsCompone=
ntHook(
    "component:removed" /* COMPONENT_REMOVED */
  );
  const devtoolsComponentRemoved =3D (component) =3D&gt; {
    if (devtools$1 &amp;&amp; typeof devtools$1.cleanupBuffer =3D=3D=3D "fu=
nction" &amp;&amp; // remove the component if it wasn't buffered
    !devtools$1.cleanupBuffer(component)) {
      _devtoolsComponentRemoved(component);
    }
  };
  /*! #__NO_SIDE_EFFECTS__ */
  // @__NO_SIDE_EFFECTS__
  function createDevtoolsComponentHook(hook) {
    return (component) =3D&gt; {
      emit$1(
        hook,
        component.appContext.app,
        component.uid,
        component.parent ? component.parent.uid : void 0,
        component
      );
    };
  }
  const devtoolsPerfStart =3D /* @__PURE__ */ createDevtoolsPerformanceHook=
("perf:start" /* PERFORMANCE_START */);
  const devtoolsPerfEnd =3D /* @__PURE__ */ createDevtoolsPerformanceHook("=
perf:end" /* PERFORMANCE_END */);
  function createDevtoolsPerformanceHook(hook) {
    return (component, type, time) =3D&gt; {
      emit$1(hook, component.appContext.app, component.uid, component, type=
, time);
    };
  }
  function devtoolsComponentEmit(component, event, params) {
    emit$1(
      "component:emit" /* COMPONENT_EMIT */,
      component.appContext.app,
      component,
      event,
      params
    );
  }

  let currentRenderingInstance =3D null;
  let currentScopeId =3D null;
  function setCurrentRenderingInstance(instance) {
    const prev =3D currentRenderingInstance;
    currentRenderingInstance =3D instance;
    currentScopeId =3D instance &amp;&amp; instance.type.__scopeId || null;
    return prev;
  }
  function pushScopeId(id) {
    currentScopeId =3D id;
  }
  function popScopeId() {
    currentScopeId =3D null;
  }
  const withScopeId =3D (_id) =3D&gt; withCtx;
  function withCtx(fn, ctx =3D currentRenderingInstance, isNonScopedSlot) {
    if (!ctx) return fn;
    if (fn._n) {
      return fn;
    }
    const renderFnWithContext =3D (...args) =3D&gt; {
      if (renderFnWithContext._d) {
        setBlockTracking(-1);
      }
      const prevInstance =3D setCurrentRenderingInstance(ctx);
      let res;
      try {
        res =3D fn(...args);
      } finally {
        setCurrentRenderingInstance(prevInstance);
        if (renderFnWithContext._d) {
          setBlockTracking(1);
        }
      }
      {
        devtoolsComponentUpdated(ctx);
      }
      return res;
    };
    renderFnWithContext._n =3D true;
    renderFnWithContext._c =3D true;
    renderFnWithContext._d =3D true;
    return renderFnWithContext;
  }

  function validateDirectiveName(name) {
    if (isBuiltInDirective(name)) {
      warn$1("Do not use built-in directive ids as custom directive id: " +=
 name);
    }
  }
  function withDirectives(vnode, directives) {
    if (currentRenderingInstance =3D=3D=3D null) {
      warn$1(`withDirectives can only be used inside render functions.`);
      return vnode;
    }
    const instance =3D getComponentPublicInstance(currentRenderingInstance)=
;
    const bindings =3D vnode.dirs || (vnode.dirs =3D []);
    for (let i =3D 0; i &lt; directives.length; i++) {
      let [dir, value, arg, modifiers =3D EMPTY_OBJ] =3D directives[i];
      if (dir) {
        if (isFunction(dir)) {
          dir =3D {
            mounted: dir,
            updated: dir
          };
        }
        if (dir.deep) {
          traverse(value);
        }
        bindings.push({
          dir,
          instance,
          value,
          oldValue: void 0,
          arg,
          modifiers
        });
      }
    }
    return vnode;
  }
  function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings =3D vnode.dirs;
    const oldBindings =3D prevVNode &amp;&amp; prevVNode.dirs;
    for (let i =3D 0; i &lt; bindings.length; i++) {
      const binding =3D bindings[i];
      if (oldBindings) {
        binding.oldValue =3D oldBindings[i].value;
      }
      let hook =3D binding.dir[name];
      if (hook) {
        pauseTracking();
        callWithAsyncErrorHandling(hook, instance, 8, [
          vnode.el,
          binding,
          vnode,
          prevVNode
        ]);
        resetTracking();
      }
    }
  }

  const TeleportEndKey =3D Symbol("_vte");
  const isTeleport =3D (type) =3D&gt; type.__isTeleport;
  const isTeleportDisabled =3D (props) =3D&gt; props &amp;&amp; (props.disa=
bled || props.disabled =3D=3D=3D "");
  const isTeleportDeferred =3D (props) =3D&gt; props &amp;&amp; (props.defe=
r || props.defer =3D=3D=3D "");
  const isTargetSVG =3D (target) =3D&gt; typeof SVGElement !=3D=3D "undefin=
ed" &amp;&amp; target instanceof SVGElement;
  const isTargetMathML =3D (target) =3D&gt; typeof MathMLElement =3D=3D=3D =
"function" &amp;&amp; target instanceof MathMLElement;
  const resolveTarget =3D (props, select) =3D&gt; {
    const targetSelector =3D props &amp;&amp; props.to;
    if (isString(targetSelector)) {
      if (!select) {
        warn$1(
          `Current renderer does not support string target for Teleports. (=
missing querySelector renderer option)`
        );
        return null;
      } else {
        const target =3D select(targetSelector);
        if (!target &amp;&amp; !isTeleportDisabled(props)) {
          warn$1(
            `Failed to locate Teleport target with selector "${targetSelect=
or}". Note the target element must exist before the component is mounted - =
i.e. the target cannot be rendered by the component itself, and ideally sho=
uld be outside of the entire Vue component tree.`
          );
        }
        return target;
      }
    } else {
      if (!targetSelector &amp;&amp; !isTeleportDisabled(props)) {
        warn$1(`Invalid Teleport target: ${targetSelector}`);
      }
      return targetSelector;
    }
  };
  const TeleportImpl =3D {
    name: "Teleport",
    __isTeleport: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, nam=
espace, slotScopeIds, optimized, internals) {
      const {
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        o: { insert, querySelector, createText, createComment }
      } =3D internals;
      const disabled =3D isTeleportDisabled(n2.props);
      let { shapeFlag, children, dynamicChildren } =3D n2;
      if (isHmrUpdating) {
        optimized =3D false;
        dynamicChildren =3D null;
      }
      if (n1 =3D=3D null) {
        const placeholder =3D n2.el =3D createComment("teleport start") ;
        const mainAnchor =3D n2.anchor =3D createComment("teleport end") ;
        insert(placeholder, container, anchor);
        insert(mainAnchor, container, anchor);
        const mount =3D (container2, anchor2) =3D&gt; {
          if (shapeFlag &amp; 16) {
            if (parentComponent &amp;&amp; parentComponent.isCE) {
              parentComponent.ce._teleportTarget =3D container2;
            }
            mountChildren(
              children,
              container2,
              anchor2,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          }
        };
        const mountToTarget =3D () =3D&gt; {
          const target =3D n2.target =3D resolveTarget(n2.props, querySelec=
tor);
          const targetAnchor =3D prepareAnchor(target, n2, createText, inse=
rt);
          if (target) {
            if (namespace !=3D=3D "svg" &amp;&amp; isTargetSVG(target)) {
              namespace =3D "svg";
            } else if (namespace !=3D=3D "mathml" &amp;&amp; isTargetMathML=
(target)) {
              namespace =3D "mathml";
            }
            if (!disabled) {
              mount(target, targetAnchor);
              updateCssVars(n2, false);
            }
          } else if (!disabled) {
            warn$1(
              "Invalid Teleport target on mount:",
              target,
              `(${typeof target})`
            );
          }
        };
        if (disabled) {
          mount(container, mainAnchor);
          updateCssVars(n2, true);
        }
        if (isTeleportDeferred(n2.props)) {
          n2.el.__isMounted =3D false;
          queuePostRenderEffect(() =3D&gt; {
            mountToTarget();
            delete n2.el.__isMounted;
          }, parentSuspense);
        } else {
          mountToTarget();
        }
      } else {
        if (isTeleportDeferred(n2.props) &amp;&amp; n1.el.__isMounted =3D=
=3D=3D false) {
          queuePostRenderEffect(() =3D&gt; {
            TeleportImpl.process(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized,
              internals
            );
          }, parentSuspense);
          return;
        }
        n2.el =3D n1.el;
        n2.targetStart =3D n1.targetStart;
        const mainAnchor =3D n2.anchor =3D n1.anchor;
        const target =3D n2.target =3D n1.target;
        const targetAnchor =3D n2.targetAnchor =3D n1.targetAnchor;
        const wasDisabled =3D isTeleportDisabled(n1.props);
        const currentContainer =3D wasDisabled ? container : target;
        const currentAnchor =3D wasDisabled ? mainAnchor : targetAnchor;
        if (namespace =3D=3D=3D "svg" || isTargetSVG(target)) {
          namespace =3D "svg";
        } else if (namespace =3D=3D=3D "mathml" || isTargetMathML(target)) =
{
          namespace =3D "mathml";
        }
        if (dynamicChildren) {
          patchBlockChildren(
            n1.dynamicChildren,
            dynamicChildren,
            currentContainer,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds
          );
          traverseStaticChildren(n1, n2, false);
        } else if (!optimized) {
          patchChildren(
            n1,
            n2,
            currentContainer,
            currentAnchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            false
          );
        }
        if (disabled) {
          if (!wasDisabled) {
            moveTeleport(
              n2,
              container,
              mainAnchor,
              internals,
              1
            );
          } else {
            if (n2.props &amp;&amp; n1.props &amp;&amp; n2.props.to !=3D=3D=
 n1.props.to) {
              n2.props.to =3D n1.props.to;
            }
          }
        } else {
          if ((n2.props &amp;&amp; n2.props.to) !=3D=3D (n1.props &amp;&amp=
; n1.props.to)) {
            const nextTarget =3D n2.target =3D resolveTarget(
              n2.props,
              querySelector
            );
            if (nextTarget) {
              moveTeleport(
                n2,
                nextTarget,
                null,
                internals,
                0
              );
            } else {
              warn$1(
                "Invalid Teleport target on update:",
                target,
                `(${typeof target})`
              );
            }
          } else if (wasDisabled) {
            moveTeleport(
              n2,
              target,
              targetAnchor,
              internals,
              1
            );
          }
        }
        updateCssVars(n2, disabled);
      }
    },
    remove(vnode, parentComponent, parentSuspense, { um: unmount, o: { remo=
ve: hostRemove } }, doRemove) {
      const {
        shapeFlag,
        children,
        anchor,
        targetStart,
        targetAnchor,
        target,
        props
      } =3D vnode;
      if (target) {
        hostRemove(targetStart);
        hostRemove(targetAnchor);
      }
      doRemove &amp;&amp; hostRemove(anchor);
      if (shapeFlag &amp; 16) {
        const shouldRemove =3D doRemove || !isTeleportDisabled(props);
        for (let i =3D 0; i &lt; children.length; i++) {
          const child =3D children[i];
          unmount(
            child,
            parentComponent,
            parentSuspense,
            shouldRemove,
            !!child.dynamicChildren
          );
        }
      }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
  };
  function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m:=
 move }, moveType =3D 2) {
    if (moveType =3D=3D=3D 0) {
      insert(vnode.targetAnchor, container, parentAnchor);
    }
    const { el, anchor, shapeFlag, children, props } =3D vnode;
    const isReorder =3D moveType =3D=3D=3D 2;
    if (isReorder) {
      insert(el, container, parentAnchor);
    }
    if (!isReorder || isTeleportDisabled(props)) {
      if (shapeFlag &amp; 16) {
        for (let i =3D 0; i &lt; children.length; i++) {
          move(
            children[i],
            container,
            parentAnchor,
            2
          );
        }
      }
    }
    if (isReorder) {
      insert(anchor, container, parentAnchor);
    }
  }
  function hydrateTeleport(node, vnode, parentComponent, parentSuspense, sl=
otScopeIds, optimized, {
    o: { nextSibling, parentNode, querySelector, insert, createText }
  }, hydrateChildren) {
    const target =3D vnode.target =3D resolveTarget(
      vnode.props,
      querySelector
    );
    if (target) {
      const disabled =3D isTeleportDisabled(vnode.props);
      const targetNode =3D target._lpa || target.firstChild;
      if (vnode.shapeFlag &amp; 16) {
        if (disabled) {
          vnode.anchor =3D hydrateChildren(
            nextSibling(node),
            vnode,
            parentNode(node),
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized
          );
          vnode.targetStart =3D targetNode;
          vnode.targetAnchor =3D targetNode &amp;&amp; nextSibling(targetNo=
de);
        } else {
          vnode.anchor =3D nextSibling(node);
          let targetAnchor =3D targetNode;
          while (targetAnchor) {
            if (targetAnchor &amp;&amp; targetAnchor.nodeType =3D=3D=3D 8) =
{
              if (targetAnchor.data =3D=3D=3D "teleport start anchor") {
                vnode.targetStart =3D targetAnchor;
              } else if (targetAnchor.data =3D=3D=3D "teleport anchor") {
                vnode.targetAnchor =3D targetAnchor;
                target._lpa =3D vnode.targetAnchor &amp;&amp; nextSibling(v=
node.targetAnchor);
                break;
              }
            }
            targetAnchor =3D nextSibling(targetAnchor);
          }
          if (!vnode.targetAnchor) {
            prepareAnchor(target, vnode, createText, insert);
          }
          hydrateChildren(
            targetNode &amp;&amp; nextSibling(targetNode),
            vnode,
            target,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized
          );
        }
      }
      updateCssVars(vnode, disabled);
    }
    return vnode.anchor &amp;&amp; nextSibling(vnode.anchor);
  }
  const Teleport =3D TeleportImpl;
  function updateCssVars(vnode, isDisabled) {
    const ctx =3D vnode.ctx;
    if (ctx &amp;&amp; ctx.ut) {
      let node, anchor;
      if (isDisabled) {
        node =3D vnode.el;
        anchor =3D vnode.anchor;
      } else {
        node =3D vnode.targetStart;
        anchor =3D vnode.targetAnchor;
      }
      while (node &amp;&amp; node !=3D=3D anchor) {
        if (node.nodeType =3D=3D=3D 1) node.setAttribute("data-v-owner", ct=
x.uid);
        node =3D node.nextSibling;
      }
      ctx.ut();
    }
  }
  function prepareAnchor(target, vnode, createText, insert) {
    const targetStart =3D vnode.targetStart =3D createText("");
    const targetAnchor =3D vnode.targetAnchor =3D createText("");
    targetStart[TeleportEndKey] =3D targetAnchor;
    if (target) {
      insert(targetStart, target);
      insert(targetAnchor, target);
    }
    return targetAnchor;
  }

  const leaveCbKey =3D Symbol("_leaveCb");
  const enterCbKey$1 =3D Symbol("_enterCb");
  function useTransitionState() {
    const state =3D {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    onMounted(() =3D&gt; {
      state.isMounted =3D true;
    });
    onBeforeUnmount(() =3D&gt; {
      state.isUnmounting =3D true;
    });
    return state;
  }
  const TransitionHookValidator =3D [Function, Array];
  const BaseTransitionPropsValidators =3D {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    // leave
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    // appear
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  };
  const recursiveGetSubtree =3D (instance) =3D&gt; {
    const subTree =3D instance.subTree;
    return subTree.component ? recursiveGetSubtree(subTree.component) : sub=
Tree;
  };
  const BaseTransitionImpl =3D {
    name: `BaseTransition`,
    props: BaseTransitionPropsValidators,
    setup(props, { slots }) {
      const instance =3D getCurrentInstance();
      const state =3D useTransitionState();
      return () =3D&gt; {
        const children =3D slots.default &amp;&amp; getTransitionRawChildre=
n(slots.default(), true);
        if (!children || !children.length) {
          return;
        }
        const child =3D findNonCommentChild(children);
        const rawProps =3D toRaw(props);
        const { mode } =3D rawProps;
        if (mode &amp;&amp; mode !=3D=3D "in-out" &amp;&amp; mode !=3D=3D "=
out-in" &amp;&amp; mode !=3D=3D "default") {
          warn$1(`invalid &lt;transition&gt; mode: ${mode}`);
        }
        if (state.isLeaving) {
          return emptyPlaceholder(child);
        }
        const innerChild =3D getInnerChild$1(child);
        if (!innerChild) {
          return emptyPlaceholder(child);
        }
        let enterHooks =3D resolveTransitionHooks(
          innerChild,
          rawProps,
          state,
          instance,
          // #11061, ensure enterHooks is fresh after clone
          (hooks) =3D&gt; enterHooks =3D hooks
        );
        if (innerChild.type !=3D=3D Comment) {
          setTransitionHooks(innerChild, enterHooks);
        }
        let oldInnerChild =3D instance.subTree &amp;&amp; getInnerChild$1(i=
nstance.subTree);
        if (oldInnerChild &amp;&amp; oldInnerChild.type !=3D=3D Comment &am=
p;&amp; !isSameVNodeType(innerChild, oldInnerChild) &amp;&amp; recursiveGet=
Subtree(instance).type !=3D=3D Comment) {
          let leavingHooks =3D resolveTransitionHooks(
            oldInnerChild,
            rawProps,
            state,
            instance
          );
          setTransitionHooks(oldInnerChild, leavingHooks);
          if (mode =3D=3D=3D "out-in" &amp;&amp; innerChild.type !=3D=3D Co=
mment) {
            state.isLeaving =3D true;
            leavingHooks.afterLeave =3D () =3D&gt; {
              state.isLeaving =3D false;
              if (!(instance.job.flags &amp; 8)) {
                instance.update();
              }
              delete leavingHooks.afterLeave;
              oldInnerChild =3D void 0;
            };
            return emptyPlaceholder(child);
          } else if (mode =3D=3D=3D "in-out" &amp;&amp; innerChild.type !=
=3D=3D Comment) {
            leavingHooks.delayLeave =3D (el, earlyRemove, delayedLeave) =3D=
&gt; {
              const leavingVNodesCache =3D getLeavingNodesForType(
                state,
                oldInnerChild
              );
              leavingVNodesCache[String(oldInnerChild.key)] =3D oldInnerChi=
ld;
              el[leaveCbKey] =3D () =3D&gt; {
                earlyRemove();
                el[leaveCbKey] =3D void 0;
                delete enterHooks.delayedLeave;
                oldInnerChild =3D void 0;
              };
              enterHooks.delayedLeave =3D () =3D&gt; {
                delayedLeave();
                delete enterHooks.delayedLeave;
                oldInnerChild =3D void 0;
              };
            };
          } else {
            oldInnerChild =3D void 0;
          }
        } else if (oldInnerChild) {
          oldInnerChild =3D void 0;
        }
        return child;
      };
    }
  };
  function findNonCommentChild(children) {
    let child =3D children[0];
    if (children.length &gt; 1) {
      let hasFound =3D false;
      for (const c of children) {
        if (c.type !=3D=3D Comment) {
          if (hasFound) {
            warn$1(
              "&lt;transition&gt; can only be used on a single element or c=
omponent. Use &lt;transition-group&gt; for lists."
            );
            break;
          }
          child =3D c;
          hasFound =3D true;
        }
      }
    }
    return child;
  }
  const BaseTransition =3D BaseTransitionImpl;
  function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } =3D state;
    let leavingVNodesCache =3D leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
      leavingVNodesCache =3D /* @__PURE__ */ Object.create(null);
      leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
  }
  function resolveTransitionHooks(vnode, props, state, instance, postClone)=
 {
    const {
      appear,
      mode,
      persisted =3D false,
      onBeforeEnter,
      onEnter,
      onAfterEnter,
      onEnterCancelled,
      onBeforeLeave,
      onLeave,
      onAfterLeave,
      onLeaveCancelled,
      onBeforeAppear,
      onAppear,
      onAfterAppear,
      onAppearCancelled
    } =3D props;
    const key =3D String(vnode.key);
    const leavingVNodesCache =3D getLeavingNodesForType(state, vnode);
    const callHook =3D (hook, args) =3D&gt; {
      hook &amp;&amp; callWithAsyncErrorHandling(
        hook,
        instance,
        9,
        args
      );
    };
    const callAsyncHook =3D (hook, args) =3D&gt; {
      const done =3D args[1];
      callHook(hook, args);
      if (isArray(hook)) {
        if (hook.every((hook2) =3D&gt; hook2.length &lt;=3D 1)) done();
      } else if (hook.length &lt;=3D 1) {
        done();
      }
    };
    const hooks =3D {
      mode,
      persisted,
      beforeEnter(el) {
        let hook =3D onBeforeEnter;
        if (!state.isMounted) {
          if (appear) {
            hook =3D onBeforeAppear || onBeforeEnter;
          } else {
            return;
          }
        }
        if (el[leaveCbKey]) {
          el[leaveCbKey](
            true
            /* cancelled */
          );
        }
        const leavingVNode =3D leavingVNodesCache[key];
        if (leavingVNode &amp;&amp; isSameVNodeType(vnode, leavingVNode) &a=
mp;&amp; leavingVNode.el[leaveCbKey]) {
          leavingVNode.el[leaveCbKey]();
        }
        callHook(hook, [el]);
      },
      enter(el) {
        let hook =3D onEnter;
        let afterHook =3D onAfterEnter;
        let cancelHook =3D onEnterCancelled;
        if (!state.isMounted) {
          if (appear) {
            hook =3D onAppear || onEnter;
            afterHook =3D onAfterAppear || onAfterEnter;
            cancelHook =3D onAppearCancelled || onEnterCancelled;
          } else {
            return;
          }
        }
        let called =3D false;
        const done =3D el[enterCbKey$1] =3D (cancelled) =3D&gt; {
          if (called) return;
          called =3D true;
          if (cancelled) {
            callHook(cancelHook, [el]);
          } else {
            callHook(afterHook, [el]);
          }
          if (hooks.delayedLeave) {
            hooks.delayedLeave();
          }
          el[enterCbKey$1] =3D void 0;
        };
        if (hook) {
          callAsyncHook(hook, [el, done]);
        } else {
          done();
        }
      },
      leave(el, remove) {
        const key2 =3D String(vnode.key);
        if (el[enterCbKey$1]) {
          el[enterCbKey$1](
            true
            /* cancelled */
          );
        }
        if (state.isUnmounting) {
          return remove();
        }
        callHook(onBeforeLeave, [el]);
        let called =3D false;
        const done =3D el[leaveCbKey] =3D (cancelled) =3D&gt; {
          if (called) return;
          called =3D true;
          remove();
          if (cancelled) {
            callHook(onLeaveCancelled, [el]);
          } else {
            callHook(onAfterLeave, [el]);
          }
          el[leaveCbKey] =3D void 0;
          if (leavingVNodesCache[key2] =3D=3D=3D vnode) {
            delete leavingVNodesCache[key2];
          }
        };
        leavingVNodesCache[key2] =3D vnode;
        if (onLeave) {
          callAsyncHook(onLeave, [el, done]);
        } else {
          done();
        }
      },
      clone(vnode2) {
        const hooks2 =3D resolveTransitionHooks(
          vnode2,
          props,
          state,
          instance,
          postClone
        );
        if (postClone) postClone(hooks2);
        return hooks2;
      }
    };
    return hooks;
  }
  function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
      vnode =3D cloneVNode(vnode);
      vnode.children =3D null;
      return vnode;
    }
  }
  function getInnerChild$1(vnode) {
    if (!isKeepAlive(vnode)) {
      if (isTeleport(vnode.type) &amp;&amp; vnode.children) {
        return findNonCommentChild(vnode.children);
      }
      return vnode;
    }
    if (vnode.component) {
      return vnode.component.subTree;
    }
    const { shapeFlag, children } =3D vnode;
    if (children) {
      if (shapeFlag &amp; 16) {
        return children[0];
      }
      if (shapeFlag &amp; 32 &amp;&amp; isFunction(children.default)) {
        return children.default();
      }
    }
  }
  function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag &amp; 6 &amp;&amp; vnode.component) {
      vnode.transition =3D hooks;
      setTransitionHooks(vnode.component.subTree, hooks);
    } else if (vnode.shapeFlag &amp; 128) {
      vnode.ssContent.transition =3D hooks.clone(vnode.ssContent);
      vnode.ssFallback.transition =3D hooks.clone(vnode.ssFallback);
    } else {
      vnode.transition =3D hooks;
    }
  }
  function getTransitionRawChildren(children, keepComment =3D false, parent=
Key) {
    let ret =3D [];
    let keyedFragmentCount =3D 0;
    for (let i =3D 0; i &lt; children.length; i++) {
      let child =3D children[i];
      const key =3D parentKey =3D=3D null ? child.key : String(parentKey) +=
 String(child.key !=3D null ? child.key : i);
      if (child.type =3D=3D=3D Fragment) {
        if (child.patchFlag &amp; 128) keyedFragmentCount++;
        ret =3D ret.concat(
          getTransitionRawChildren(child.children, keepComment, key)
        );
      } else if (keepComment || child.type !=3D=3D Comment) {
        ret.push(key !=3D null ? cloneVNode(child, { key }) : child);
      }
    }
    if (keyedFragmentCount &gt; 1) {
      for (let i =3D 0; i &lt; ret.length; i++) {
        ret[i].patchFlag =3D -2;
      }
    }
    return ret;
  }

  /*! #__NO_SIDE_EFFECTS__ */
  // @__NO_SIDE_EFFECTS__
  function defineComponent(options, extraOptions) {
    return isFunction(options) ? (
      // #8236: extend call and options.name access are considered side-eff=
ects
      // by Rollup, so we have to wrap it in a pure-annotated IIFE.
      /* @__PURE__ */ (() =3D&gt; extend({ name: options.name }, extraOptio=
ns, { setup: options }))()
    ) : options;
  }

  function useId() {
    const i =3D getCurrentInstance();
    if (i) {
      return (i.appContext.config.idPrefix || "v") + "-" + i.ids[0] + i.ids=
[1]++;
    } else {
      warn$1(
        `useId() is called when there is no active component instance to be=
 associated with.`
      );
    }
    return "";
  }
  function markAsyncBoundary(instance) {
    instance.ids =3D [instance.ids[0] + instance.ids[2]++ + "-", 0, 0];
  }

  const knownTemplateRefs =3D /* @__PURE__ */ new WeakSet();
  function useTemplateRef(key) {
    const i =3D getCurrentInstance();
    const r =3D shallowRef(null);
    if (i) {
      const refs =3D i.refs =3D=3D=3D EMPTY_OBJ ? i.refs =3D {} : i.refs;
      let desc;
      if ((desc =3D Object.getOwnPropertyDescriptor(refs, key)) &amp;&amp; =
!desc.configurable) {
        warn$1(`useTemplateRef('${key}') already exists.`);
      } else {
        Object.defineProperty(refs, key, {
          enumerable: true,
          get: () =3D&gt; r.value,
          set: (val) =3D&gt; r.value =3D val
        });
      }
    } else {
      warn$1(
        `useTemplateRef() is called when there is no active component insta=
nce to be associated with.`
      );
    }
    const ret =3D readonly(r) ;
    {
      knownTemplateRefs.add(ret);
    }
    return ret;
  }

  function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount =3D f=
alse) {
    if (isArray(rawRef)) {
      rawRef.forEach(
        (r, i) =3D&gt; setRef(
          r,
          oldRawRef &amp;&amp; (isArray(oldRawRef) ? oldRawRef[i] : oldRawR=
ef),
          parentSuspense,
          vnode,
          isUnmount
        )
      );
      return;
    }
    if (isAsyncWrapper(vnode) &amp;&amp; !isUnmount) {
      if (vnode.shapeFlag &amp; 512 &amp;&amp; vnode.type.__asyncResolved &=
amp;&amp; vnode.component.subTree.component) {
        setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
      }
      return;
    }
    const refValue =3D vnode.shapeFlag &amp; 4 ? getComponentPublicInstance=
(vnode.component) : vnode.el;
    const value =3D isUnmount ? null : refValue;
    const { i: owner, r: ref } =3D rawRef;
    if (!owner) {
      warn$1(
        `Missing ref owner context. ref cannot be used on hoisted vnodes. A=
 vnode with ref must be created inside the render function.`
      );
      return;
    }
    const oldRef =3D oldRawRef &amp;&amp; oldRawRef.r;
    const refs =3D owner.refs =3D=3D=3D EMPTY_OBJ ? owner.refs =3D {} : own=
er.refs;
    const setupState =3D owner.setupState;
    const rawSetupState =3D toRaw(setupState);
    const canSetSetupRef =3D setupState =3D=3D=3D EMPTY_OBJ ? () =3D&gt; fa=
lse : (key) =3D&gt; {
      {
        if (hasOwn(rawSetupState, key) &amp;&amp; !isRef(rawSetupState[key]=
)) {
          warn$1(
            `Template ref "${key}" used on a non-ref value. It will not wor=
k in the production build.`
          );
        }
        if (knownTemplateRefs.has(rawSetupState[key])) {
          return false;
        }
      }
      return hasOwn(rawSetupState, key);
    };
    if (oldRef !=3D null &amp;&amp; oldRef !=3D=3D ref) {
      if (isString(oldRef)) {
        refs[oldRef] =3D null;
        if (canSetSetupRef(oldRef)) {
          setupState[oldRef] =3D null;
        }
      } else if (isRef(oldRef)) {
        oldRef.value =3D null;
      }
    }
    if (isFunction(ref)) {
      callWithErrorHandling(ref, owner, 12, [value, refs]);
    } else {
      const _isString =3D isString(ref);
      const _isRef =3D isRef(ref);
      if (_isString || _isRef) {
        const doSet =3D () =3D&gt; {
          if (rawRef.f) {
            const existing =3D _isString ? canSetSetupRef(ref) ? setupState=
[ref] : refs[ref] : ref.value;
            if (isUnmount) {
              isArray(existing) &amp;&amp; remove(existing, refValue);
            } else {
              if (!isArray(existing)) {
                if (_isString) {
                  refs[ref] =3D [refValue];
                  if (canSetSetupRef(ref)) {
                    setupState[ref] =3D refs[ref];
                  }
                } else {
                  ref.value =3D [refValue];
                  if (rawRef.k) refs[rawRef.k] =3D ref.value;
                }
              } else if (!existing.includes(refValue)) {
                existing.push(refValue);
              }
            }
          } else if (_isString) {
            refs[ref] =3D value;
            if (canSetSetupRef(ref)) {
              setupState[ref] =3D value;
            }
          } else if (_isRef) {
            ref.value =3D value;
            if (rawRef.k) refs[rawRef.k] =3D value;
          } else {
            warn$1("Invalid template ref type:", ref, `(${typeof ref})`);
          }
        };
        if (value) {
          doSet.id =3D -1;
          queuePostRenderEffect(doSet, parentSuspense);
        } else {
          doSet();
        }
      } else {
        warn$1("Invalid template ref type:", ref, `(${typeof ref})`);
      }
    }
  }

  let hasLoggedMismatchError =3D false;
  const logMismatchError =3D () =3D&gt; {
    if (hasLoggedMismatchError) {
      return;
    }
    console.error("Hydration completed but contains mismatches.");
    hasLoggedMismatchError =3D true;
  };
  const isSVGContainer =3D (container) =3D&gt; container.namespaceURI.inclu=
des("svg") &amp;&amp; container.tagName !=3D=3D "foreignObject";
  const isMathMLContainer =3D (container) =3D&gt; container.namespaceURI.in=
cludes("MathML");
  const getContainerType =3D (container) =3D&gt; {
    if (container.nodeType !=3D=3D 1) return void 0;
    if (isSVGContainer(container)) return "svg";
    if (isMathMLContainer(container)) return "mathml";
    return void 0;
  };
  const isComment =3D (node) =3D&gt; node.nodeType =3D=3D=3D 8;
  function createHydrationFunctions(rendererInternals) {
    const {
      mt: mountComponent,
      p: patch,
      o: {
        patchProp,
        createText,
        nextSibling,
        parentNode,
        remove,
        insert,
        createComment
      }
    } =3D rendererInternals;
    const hydrate =3D (vnode, container) =3D&gt; {
      if (!container.hasChildNodes()) {
        warn$1(
          `Attempting to hydrate existing markup but container is empty. Pe=
rforming full mount instead.`
        );
        patch(null, vnode, container);
        flushPostFlushCbs();
        container._vnode =3D vnode;
        return;
      }
      hydrateNode(container.firstChild, vnode, null, null, null);
      flushPostFlushCbs();
      container._vnode =3D vnode;
    };
    const hydrateNode =3D (node, vnode, parentComponent, parentSuspense, sl=
otScopeIds, optimized =3D false) =3D&gt; {
      optimized =3D optimized || !!vnode.dynamicChildren;
      const isFragmentStart =3D isComment(node) &amp;&amp; node.data =3D=3D=
=3D "[";
      const onMismatch =3D () =3D&gt; handleMismatch(
        node,
        vnode,
        parentComponent,
        parentSuspense,
        slotScopeIds,
        isFragmentStart
      );
      const { type, ref, shapeFlag, patchFlag } =3D vnode;
      let domType =3D node.nodeType;
      vnode.el =3D node;
      {
        def(node, "__vnode", vnode, true);
        def(node, "__vueParentComponent", parentComponent, true);
      }
      if (patchFlag =3D=3D=3D -2) {
        optimized =3D false;
        vnode.dynamicChildren =3D null;
      }
      let nextNode =3D null;
      switch (type) {
        case Text:
          if (domType !=3D=3D 3) {
            if (vnode.children =3D=3D=3D "") {
              insert(vnode.el =3D createText(""), parentNode(node), node);
              nextNode =3D node;
            } else {
              nextNode =3D onMismatch();
            }
          } else {
            if (node.data !=3D=3D vnode.children) {
              warn$1(
                `Hydration text mismatch in`,
                node.parentNode,
                `
  - rendered on server: ${JSON.stringify(
                node.data
              )}
  - expected on client: ${JSON.stringify(vnode.children)}`
              );
              logMismatchError();
              node.data =3D vnode.children;
            }
            nextNode =3D nextSibling(node);
          }
          break;
        case Comment:
          if (isTemplateNode(node)) {
            nextNode =3D nextSibling(node);
            replaceNode(
              vnode.el =3D node.content.firstChild,
              node,
              parentComponent
            );
          } else if (domType !=3D=3D 8 || isFragmentStart) {
            nextNode =3D onMismatch();
          } else {
            nextNode =3D nextSibling(node);
          }
          break;
        case Static:
          if (isFragmentStart) {
            node =3D nextSibling(node);
            domType =3D node.nodeType;
          }
          if (domType =3D=3D=3D 1 || domType =3D=3D=3D 3) {
            nextNode =3D node;
            const needToAdoptContent =3D !vnode.children.length;
            for (let i =3D 0; i &lt; vnode.staticCount; i++) {
              if (needToAdoptContent)
                vnode.children +=3D nextNode.nodeType =3D=3D=3D 1 ? nextNod=
e.outerHTML : nextNode.data;
              if (i =3D=3D=3D vnode.staticCount - 1) {
                vnode.anchor =3D nextNode;
              }
              nextNode =3D nextSibling(nextNode);
            }
            return isFragmentStart ? nextSibling(nextNode) : nextNode;
          } else {
            onMismatch();
          }
          break;
        case Fragment:
          if (!isFragmentStart) {
            nextNode =3D onMismatch();
          } else {
            nextNode =3D hydrateFragment(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized
            );
          }
          break;
        default:
          if (shapeFlag &amp; 1) {
            if ((domType !=3D=3D 1 || vnode.type.toLowerCase() !=3D=3D node=
.tagName.toLowerCase()) &amp;&amp; !isTemplateNode(node)) {
              nextNode =3D onMismatch();
            } else {
              nextNode =3D hydrateElement(
                node,
                vnode,
                parentComponent,
                parentSuspense,
                slotScopeIds,
                optimized
              );
            }
          } else if (shapeFlag &amp; 6) {
            vnode.slotScopeIds =3D slotScopeIds;
            const container =3D parentNode(node);
            if (isFragmentStart) {
              nextNode =3D locateClosingAnchor(node);
            } else if (isComment(node) &amp;&amp; node.data =3D=3D=3D "tele=
port start") {
              nextNode =3D locateClosingAnchor(node, node.data, "teleport e=
nd");
            } else {
              nextNode =3D nextSibling(node);
            }
            mountComponent(
              vnode,
              container,
              null,
              parentComponent,
              parentSuspense,
              getContainerType(container),
              optimized
            );
            if (isAsyncWrapper(vnode) &amp;&amp; !vnode.type.__asyncResolve=
d) {
              let subTree;
              if (isFragmentStart) {
                subTree =3D createVNode(Fragment);
                subTree.anchor =3D nextNode ? nextNode.previousSibling : co=
ntainer.lastChild;
              } else {
                subTree =3D node.nodeType =3D=3D=3D 3 ? createTextVNode("")=
 : createVNode("div");
              }
              subTree.el =3D node;
              vnode.component.subTree =3D subTree;
            }
          } else if (shapeFlag &amp; 64) {
            if (domType !=3D=3D 8) {
              nextNode =3D onMismatch();
            } else {
              nextNode =3D vnode.type.hydrate(
                node,
                vnode,
                parentComponent,
                parentSuspense,
                slotScopeIds,
                optimized,
                rendererInternals,
                hydrateChildren
              );
            }
          } else if (shapeFlag &amp; 128) {
            nextNode =3D vnode.type.hydrate(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              getContainerType(parentNode(node)),
              slotScopeIds,
              optimized,
              rendererInternals,
              hydrateNode
            );
          } else {
            warn$1("Invalid HostVNode type:", type, `(${typeof type})`);
          }
      }
      if (ref !=3D null) {
        setRef(ref, null, parentSuspense, vnode);
      }
      return nextNode;
    };
    const hydrateElement =3D (el, vnode, parentComponent, parentSuspense, s=
lotScopeIds, optimized) =3D&gt; {
      optimized =3D optimized || !!vnode.dynamicChildren;
      const { type, props, patchFlag, shapeFlag, dirs, transition } =3D vno=
de;
      const forcePatch =3D type =3D=3D=3D "input" || type =3D=3D=3D "option=
";
      {
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "created");
        }
        let needCallTransitionHooks =3D false;
        if (isTemplateNode(el)) {
          needCallTransitionHooks =3D needTransition(
            null,
            // no need check parentSuspense in hydration
            transition
          ) &amp;&amp; parentComponent &amp;&amp; parentComponent.vnode.pro=
ps &amp;&amp; parentComponent.vnode.props.appear;
          const content =3D el.content.firstChild;
          if (needCallTransitionHooks) {
            const cls =3D content.getAttribute("class");
            if (cls) content.$cls =3D cls;
            transition.beforeEnter(content);
          }
          replaceNode(content, el, parentComponent);
          vnode.el =3D el =3D content;
        }
        if (shapeFlag &amp; 16 &amp;&amp; // skip if element has innerHTML =
/ textContent
        !(props &amp;&amp; (props.innerHTML || props.textContent))) {
          let next =3D hydrateChildren(
            el.firstChild,
            vnode,
            el,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized
          );
          let hasWarned =3D false;
          while (next) {
            if (!isMismatchAllowed(el, 1 /* CHILDREN */)) {
              if (!hasWarned) {
                warn$1(
                  `Hydration children mismatch on`,
                  el,
                  `
Server rendered element contains more child nodes than client vdom.`
                );
                hasWarned =3D true;
              }
              logMismatchError();
            }
            const cur =3D next;
            next =3D next.nextSibling;
            remove(cur);
          }
        } else if (shapeFlag &amp; 8) {
          let clientText =3D vnode.children;
          if (clientText[0] =3D=3D=3D "\n" &amp;&amp; (el.tagName =3D=3D=3D=
 "PRE" || el.tagName =3D=3D=3D "TEXTAREA")) {
            clientText =3D clientText.slice(1);
          }
          if (el.textContent !=3D=3D clientText) {
            if (!isMismatchAllowed(el, 0 /* TEXT */)) {
              warn$1(
                `Hydration text content mismatch on`,
                el,
                `
  - rendered on server: ${el.textContent}
  - expected on client: ${vnode.children}`
              );
              logMismatchError();
            }
            el.textContent =3D vnode.children;
          }
        }
        if (props) {
          {
            const isCustomElement =3D el.tagName.includes("-");
            for (const key in props) {
              if (// #11189 skip if this node has directives that have crea=
ted hooks
              // as it could have mutated the DOM in any possible way
              !(dirs &amp;&amp; dirs.some((d) =3D&gt; d.dir.created)) &amp;=
&amp; propHasMismatch(el, key, props[key], vnode, parentComponent)) {
                logMismatchError();
              }
              if (forcePatch &amp;&amp; (key.endsWith("value") || key =3D=
=3D=3D "indeterminate") || isOn(key) &amp;&amp; !isReservedProp(key) || // =
force hydrate v-bind with .prop modifiers
              key[0] =3D=3D=3D "." || isCustomElement) {
                patchProp(el, key, null, props[key], void 0, parentComponen=
t);
              }
            }
          }
        }
        let vnodeHooks;
        if (vnodeHooks =3D props &amp;&amp; props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHooks, parentComponent, vnode);
        }
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
        }
        if ((vnodeHooks =3D props &amp;&amp; props.onVnodeMounted) || dirs =
|| needCallTransitionHooks) {
          queueEffectWithSuspense(() =3D&gt; {
            vnodeHooks &amp;&amp; invokeVNodeHook(vnodeHooks, parentCompone=
nt, vnode);
            needCallTransitionHooks &amp;&amp; transition.enter(el);
            dirs &amp;&amp; invokeDirectiveHook(vnode, null, parentComponen=
t, "mounted");
          }, parentSuspense);
        }
      }
      return el.nextSibling;
    };
    const hydrateChildren =3D (node, parentVNode, container, parentComponen=
t, parentSuspense, slotScopeIds, optimized) =3D&gt; {
      optimized =3D optimized || !!parentVNode.dynamicChildren;
      const children =3D parentVNode.children;
      const l =3D children.length;
      let hasWarned =3D false;
      for (let i =3D 0; i &lt; l; i++) {
        const vnode =3D optimized ? children[i] : children[i] =3D normalize=
VNode(children[i]);
        const isText =3D vnode.type =3D=3D=3D Text;
        if (node) {
          if (isText &amp;&amp; !optimized) {
            if (i + 1 &lt; l &amp;&amp; normalizeVNode(children[i + 1]).typ=
e =3D=3D=3D Text) {
              insert(
                createText(
                  node.data.slice(vnode.children.length)
                ),
                container,
                nextSibling(node)
              );
              node.data =3D vnode.children;
            }
          }
          node =3D hydrateNode(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized
          );
        } else if (isText &amp;&amp; !vnode.children) {
          insert(vnode.el =3D createText(""), container);
        } else {
          if (!isMismatchAllowed(container, 1 /* CHILDREN */)) {
            if (!hasWarned) {
              warn$1(
                `Hydration children mismatch on`,
                container,
                `
Server rendered element contains fewer child nodes than client vdom.`
              );
              hasWarned =3D true;
            }
            logMismatchError();
          }
          patch(
            null,
            vnode,
            container,
            null,
            parentComponent,
            parentSuspense,
            getContainerType(container),
            slotScopeIds
          );
        }
      }
      return node;
    };
    const hydrateFragment =3D (node, vnode, parentComponent, parentSuspense=
, slotScopeIds, optimized) =3D&gt; {
      const { slotScopeIds: fragmentSlotScopeIds } =3D vnode;
      if (fragmentSlotScopeIds) {
        slotScopeIds =3D slotScopeIds ? slotScopeIds.concat(fragmentSlotSco=
peIds) : fragmentSlotScopeIds;
      }
      const container =3D parentNode(node);
      const next =3D hydrateChildren(
        nextSibling(node),
        vnode,
        container,
        parentComponent,
        parentSuspense,
        slotScopeIds,
        optimized
      );
      if (next &amp;&amp; isComment(next) &amp;&amp; next.data =3D=3D=3D "]=
") {
        return nextSibling(vnode.anchor =3D next);
      } else {
        logMismatchError();
        insert(vnode.anchor =3D createComment(`]`), container, next);
        return next;
      }
    };
    const handleMismatch =3D (node, vnode, parentComponent, parentSuspense,=
 slotScopeIds, isFragment) =3D&gt; {
      if (!isMismatchAllowed(node.parentElement, 1 /* CHILDREN */)) {
        warn$1(
          `Hydration node mismatch:
- rendered on server:`,
          node,
          node.nodeType =3D=3D=3D 3 ? `(text)` : isComment(node) &amp;&amp;=
 node.data =3D=3D=3D "[" ? `(start of fragment)` : ``,
          `
- expected on client:`,
          vnode.type
        );
        logMismatchError();
      }
      vnode.el =3D null;
      if (isFragment) {
        const end =3D locateClosingAnchor(node);
        while (true) {
          const next2 =3D nextSibling(node);
          if (next2 &amp;&amp; next2 !=3D=3D end) {
            remove(next2);
          } else {
            break;
          }
        }
      }
      const next =3D nextSibling(node);
      const container =3D parentNode(node);
      remove(node);
      patch(
        null,
        vnode,
        container,
        next,
        parentComponent,
        parentSuspense,
        getContainerType(container),
        slotScopeIds
      );
      if (parentComponent) {
        parentComponent.vnode.el =3D vnode.el;
        updateHOCHostEl(parentComponent, vnode.el);
      }
      return next;
    };
    const locateClosingAnchor =3D (node, open =3D "[", close =3D "]") =3D&g=
t; {
      let match =3D 0;
      while (node) {
        node =3D nextSibling(node);
        if (node &amp;&amp; isComment(node)) {
          if (node.data =3D=3D=3D open) match++;
          if (node.data =3D=3D=3D close) {
            if (match =3D=3D=3D 0) {
              return nextSibling(node);
            } else {
              match--;
            }
          }
        }
      }
      return node;
    };
    const replaceNode =3D (newNode, oldNode, parentComponent) =3D&gt; {
      const parentNode2 =3D oldNode.parentNode;
      if (parentNode2) {
        parentNode2.replaceChild(newNode, oldNode);
      }
      let parent =3D parentComponent;
      while (parent) {
        if (parent.vnode.el =3D=3D=3D oldNode) {
          parent.vnode.el =3D parent.subTree.el =3D newNode;
        }
        parent =3D parent.parent;
      }
    };
    const isTemplateNode =3D (node) =3D&gt; {
      return node.nodeType =3D=3D=3D 1 &amp;&amp; node.tagName =3D=3D=3D "T=
EMPLATE";
    };
    return [hydrate, hydrateNode];
  }
  function propHasMismatch(el, key, clientValue, vnode, instance) {
    let mismatchType;
    let mismatchKey;
    let actual;
    let expected;
    if (key =3D=3D=3D "class") {
      if (el.$cls) {
        actual =3D el.$cls;
        delete el.$cls;
      } else {
        actual =3D el.getAttribute("class");
      }
      expected =3D normalizeClass(clientValue);
      if (!isSetEqual(toClassSet(actual || ""), toClassSet(expected))) {
        mismatchType =3D 2 /* CLASS */;
        mismatchKey =3D `class`;
      }
    } else if (key =3D=3D=3D "style") {
      actual =3D el.getAttribute("style") || "";
      expected =3D isString(clientValue) ? clientValue : stringifyStyle(nor=
malizeStyle(clientValue));
      const actualMap =3D toStyleMap(actual);
      const expectedMap =3D toStyleMap(expected);
      if (vnode.dirs) {
        for (const { dir, value } of vnode.dirs) {
          if (dir.name =3D=3D=3D "show" &amp;&amp; !value) {
            expectedMap.set("display", "none");
          }
        }
      }
      if (instance) {
        resolveCssVars(instance, vnode, expectedMap);
      }
      if (!isMapEqual(actualMap, expectedMap)) {
        mismatchType =3D 3 /* STYLE */;
        mismatchKey =3D "style";
      }
    } else if (el instanceof SVGElement &amp;&amp; isKnownSvgAttr(key) || e=
l instanceof HTMLElement &amp;&amp; (isBooleanAttr(key) || isKnownHtmlAttr(=
key))) {
      if (isBooleanAttr(key)) {
        actual =3D el.hasAttribute(key);
        expected =3D includeBooleanAttr(clientValue);
      } else if (clientValue =3D=3D null) {
        actual =3D el.hasAttribute(key);
        expected =3D false;
      } else {
        if (el.hasAttribute(key)) {
          actual =3D el.getAttribute(key);
        } else if (key =3D=3D=3D "value" &amp;&amp; el.tagName =3D=3D=3D "T=
EXTAREA") {
          actual =3D el.value;
        } else {
          actual =3D false;
        }
        expected =3D isRenderableAttrValue(clientValue) ? String(clientValu=
e) : false;
      }
      if (actual !=3D=3D expected) {
        mismatchType =3D 4 /* ATTRIBUTE */;
        mismatchKey =3D key;
      }
    }
    if (mismatchType !=3D null &amp;&amp; !isMismatchAllowed(el, mismatchTy=
pe)) {
      const format =3D (v) =3D&gt; v =3D=3D=3D false ? `(not rendered)` : `=
${mismatchKey}=3D"${v}"`;
      const preSegment =3D `Hydration ${MismatchTypeString[mismatchType]} m=
ismatch on`;
      const postSegment =3D `
  - rendered on server: ${format(actual)}
  - expected on client: ${format(expected)}
  Note: this mismatch is check-only. The DOM will not be rectified in produ=
ction due to performance overhead.
  You should fix the source of the mismatch.`;
      {
        warn$1(preSegment, el, postSegment);
      }
      return true;
    }
    return false;
  }
  function toClassSet(str) {
    return new Set(str.trim().split(/\s+/));
  }
  function isSetEqual(a, b) {
    if (a.size !=3D=3D b.size) {
      return false;
    }
    for (const s of a) {
      if (!b.has(s)) {
        return false;
      }
    }
    return true;
  }
  function toStyleMap(str) {
    const styleMap =3D /* @__PURE__ */ new Map();
    for (const item of str.split(";")) {
      let [key, value] =3D item.split(":");
      key =3D key.trim();
      value =3D value &amp;&amp; value.trim();
      if (key &amp;&amp; value) {
        styleMap.set(key, value);
      }
    }
    return styleMap;
  }
  function isMapEqual(a, b) {
    if (a.size !=3D=3D b.size) {
      return false;
    }
    for (const [key, value] of a) {
      if (value !=3D=3D b.get(key)) {
        return false;
      }
    }
    return true;
  }
  function resolveCssVars(instance, vnode, expectedMap) {
    const root =3D instance.subTree;
    if (instance.getCssVars &amp;&amp; (vnode =3D=3D=3D root || root &amp;&=
amp; root.type =3D=3D=3D Fragment &amp;&amp; root.children.includes(vnode))=
) {
      const cssVars =3D instance.getCssVars();
      for (const key in cssVars) {
        expectedMap.set(
          `--${getEscapedCssVarName(key)}`,
          String(cssVars[key])
        );
      }
    }
    if (vnode =3D=3D=3D root &amp;&amp; instance.parent) {
      resolveCssVars(instance.parent, instance.vnode, expectedMap);
    }
  }
  const allowMismatchAttr =3D "data-allow-mismatch";
  const MismatchTypeString =3D {
    [0 /* TEXT */]: "text",
    [1 /* CHILDREN */]: "children",
    [2 /* CLASS */]: "class",
    [3 /* STYLE */]: "style",
    [4 /* ATTRIBUTE */]: "attribute"
  };
  function isMismatchAllowed(el, allowedType) {
    if (allowedType =3D=3D=3D 0 /* TEXT */ || allowedType =3D=3D=3D 1 /* CH=
ILDREN */) {
      while (el &amp;&amp; !el.hasAttribute(allowMismatchAttr)) {
        el =3D el.parentElement;
      }
    }
    const allowedAttr =3D el &amp;&amp; el.getAttribute(allowMismatchAttr);
    if (allowedAttr =3D=3D null) {
      return false;
    } else if (allowedAttr =3D=3D=3D "") {
      return true;
    } else {
      const list =3D allowedAttr.split(",");
      if (allowedType =3D=3D=3D 0 /* TEXT */ &amp;&amp; list.includes("chil=
dren")) {
        return true;
      }
      return list.includes(MismatchTypeString[allowedType]);
    }
  }

  const requestIdleCallback =3D getGlobalThis().requestIdleCallback || ((cb=
) =3D&gt; setTimeout(cb, 1));
  const cancelIdleCallback =3D getGlobalThis().cancelIdleCallback || ((id) =
=3D&gt; clearTimeout(id));
  const hydrateOnIdle =3D (timeout =3D 1e4) =3D&gt; (hydrate) =3D&gt; {
    const id =3D requestIdleCallback(hydrate, { timeout });
    return () =3D&gt; cancelIdleCallback(id);
  };
  function elementIsVisibleInViewport(el) {
    const { top, left, bottom, right } =3D el.getBoundingClientRect();
    const { innerHeight, innerWidth } =3D window;
    return (top &gt; 0 &amp;&amp; top &lt; innerHeight || bottom &gt; 0 &am=
p;&amp; bottom &lt; innerHeight) &amp;&amp; (left &gt; 0 &amp;&amp; left &l=
t; innerWidth || right &gt; 0 &amp;&amp; right &lt; innerWidth);
  }
  const hydrateOnVisible =3D (opts) =3D&gt; (hydrate, forEach) =3D&gt; {
    const ob =3D new IntersectionObserver((entries) =3D&gt; {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        ob.disconnect();
        hydrate();
        break;
      }
    }, opts);
    forEach((el) =3D&gt; {
      if (!(el instanceof Element)) return;
      if (elementIsVisibleInViewport(el)) {
        hydrate();
        ob.disconnect();
        return false;
      }
      ob.observe(el);
    });
    return () =3D&gt; ob.disconnect();
  };
  const hydrateOnMediaQuery =3D (query) =3D&gt; (hydrate) =3D&gt; {
    if (query) {
      const mql =3D matchMedia(query);
      if (mql.matches) {
        hydrate();
      } else {
        mql.addEventListener("change", hydrate, { once: true });
        return () =3D&gt; mql.removeEventListener("change", hydrate);
      }
    }
  };
  const hydrateOnInteraction =3D (interactions =3D []) =3D&gt; (hydrate, fo=
rEach) =3D&gt; {
    if (isString(interactions)) interactions =3D [interactions];
    let hasHydrated =3D false;
    const doHydrate =3D (e) =3D&gt; {
      if (!hasHydrated) {
        hasHydrated =3D true;
        teardown();
        hydrate();
        e.target.dispatchEvent(new e.constructor(e.type, e));
      }
    };
    const teardown =3D () =3D&gt; {
      forEach((el) =3D&gt; {
        for (const i of interactions) {
          el.removeEventListener(i, doHydrate);
        }
      });
    };
    forEach((el) =3D&gt; {
      for (const i of interactions) {
        el.addEventListener(i, doHydrate, { once: true });
      }
    });
    return teardown;
  };
  function forEachElement(node, cb) {
    if (isComment(node) &amp;&amp; node.data =3D=3D=3D "[") {
      let depth =3D 1;
      let next =3D node.nextSibling;
      while (next) {
        if (next.nodeType =3D=3D=3D 1) {
          const result =3D cb(next);
          if (result =3D=3D=3D false) {
            break;
          }
        } else if (isComment(next)) {
          if (next.data =3D=3D=3D "]") {
            if (--depth =3D=3D=3D 0) break;
          } else if (next.data =3D=3D=3D "[") {
            depth++;
          }
        }
        next =3D next.nextSibling;
      }
    } else {
      cb(node);
    }
  }

  const isAsyncWrapper =3D (i) =3D&gt; !!i.type.__asyncLoader;
  /*! #__NO_SIDE_EFFECTS__ */
  // @__NO_SIDE_EFFECTS__
  function defineAsyncComponent(source) {
    if (isFunction(source)) {
      source =3D { loader: source };
    }
    const {
      loader,
      loadingComponent,
      errorComponent,
      delay =3D 200,
      hydrate: hydrateStrategy,
      timeout,
      // undefined =3D never times out
      suspensible =3D true,
      onError: userOnError
    } =3D source;
    let pendingRequest =3D null;
    let resolvedComp;
    let retries =3D 0;
    const retry =3D () =3D&gt; {
      retries++;
      pendingRequest =3D null;
      return load();
    };
    const load =3D () =3D&gt; {
      let thisRequest;
      return pendingRequest || (thisRequest =3D pendingRequest =3D loader()=
.catch((err) =3D&gt; {
        err =3D err instanceof Error ? err : new Error(String(err));
        if (userOnError) {
          return new Promise((resolve, reject) =3D&gt; {
            const userRetry =3D () =3D&gt; resolve(retry());
            const userFail =3D () =3D&gt; reject(err);
            userOnError(err, userRetry, userFail, retries + 1);
          });
        } else {
          throw err;
        }
      }).then((comp) =3D&gt; {
        if (thisRequest !=3D=3D pendingRequest &amp;&amp; pendingRequest) {
          return pendingRequest;
        }
        if (!comp) {
          warn$1(
            `Async component loader resolved to undefined. If you are using=
 retry(), make sure to return its return value.`
          );
        }
        if (comp &amp;&amp; (comp.__esModule || comp[Symbol.toStringTag] =
=3D=3D=3D "Module")) {
          comp =3D comp.default;
        }
        if (comp &amp;&amp; !isObject(comp) &amp;&amp; !isFunction(comp)) {
          throw new Error(`Invalid async component load result: ${comp}`);
        }
        resolvedComp =3D comp;
        return comp;
      }));
    };
    return defineComponent({
      name: "AsyncComponentWrapper",
      __asyncLoader: load,
      __asyncHydrate(el, instance, hydrate) {
        let patched =3D false;
        const doHydrate =3D hydrateStrategy ? () =3D&gt; {
          const performHydrate =3D () =3D&gt; {
            if (patched) {
              warn$1(
                `Skipping lazy hydration for component '${getComponentName(=
resolvedComp)}': it was updated before lazy hydration performed.`
              );
              return;
            }
            hydrate();
          };
          const teardown =3D hydrateStrategy(
            performHydrate,
            (cb) =3D&gt; forEachElement(el, cb)
          );
          if (teardown) {
            (instance.bum || (instance.bum =3D [])).push(teardown);
          }
          (instance.u || (instance.u =3D [])).push(() =3D&gt; patched =3D t=
rue);
        } : hydrate;
        if (resolvedComp) {
          doHydrate();
        } else {
          load().then(() =3D&gt; !instance.isUnmounted &amp;&amp; doHydrate=
());
        }
      },
      get __asyncResolved() {
        return resolvedComp;
      },
      setup() {
        const instance =3D currentInstance;
        markAsyncBoundary(instance);
        if (resolvedComp) {
          return () =3D&gt; createInnerComp(resolvedComp, instance);
        }
        const onError =3D (err) =3D&gt; {
          pendingRequest =3D null;
          handleError(
            err,
            instance,
            13,
            !errorComponent
          );
        };
        if (suspensible &amp;&amp; instance.suspense || false) {
          return load().then((comp) =3D&gt; {
            return () =3D&gt; createInnerComp(comp, instance);
          }).catch((err) =3D&gt; {
            onError(err);
            return () =3D&gt; errorComponent ? createVNode(errorComponent, =
{
              error: err
            }) : null;
          });
        }
        const loaded =3D ref(false);
        const error =3D ref();
        const delayed =3D ref(!!delay);
        if (delay) {
          setTimeout(() =3D&gt; {
            delayed.value =3D false;
          }, delay);
        }
        if (timeout !=3D null) {
          setTimeout(() =3D&gt; {
            if (!loaded.value &amp;&amp; !error.value) {
              const err =3D new Error(
                `Async component timed out after ${timeout}ms.`
              );
              onError(err);
              error.value =3D err;
            }
          }, timeout);
        }
        load().then(() =3D&gt; {
          loaded.value =3D true;
          if (instance.parent &amp;&amp; isKeepAlive(instance.parent.vnode)=
) {
            instance.parent.update();
          }
        }).catch((err) =3D&gt; {
          onError(err);
          error.value =3D err;
        });
        return () =3D&gt; {
          if (loaded.value &amp;&amp; resolvedComp) {
            return createInnerComp(resolvedComp, instance);
          } else if (error.value &amp;&amp; errorComponent) {
            return createVNode(errorComponent, {
              error: error.value
            });
          } else if (loadingComponent &amp;&amp; !delayed.value) {
            return createVNode(loadingComponent);
          }
        };
      }
    });
  }
  function createInnerComp(comp, parent) {
    const { ref: ref2, props, children, ce } =3D parent.vnode;
    const vnode =3D createVNode(comp, props, children);
    vnode.ref =3D ref2;
    vnode.ce =3D ce;
    delete parent.vnode.ce;
    return vnode;
  }

  const isKeepAlive =3D (vnode) =3D&gt; vnode.type.__isKeepAlive;
  const KeepAliveImpl =3D {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a =
=3D=3D=3D
    // check directly on KeepAlive in the renderer, because importing it di=
rectly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number]
    },
    setup(props, { slots }) {
      const instance =3D getCurrentInstance();
      const sharedContext =3D instance.ctx;
      const cache =3D /* @__PURE__ */ new Map();
      const keys =3D /* @__PURE__ */ new Set();
      let current =3D null;
      {
        instance.__v_cache =3D cache;
      }
      const parentSuspense =3D instance.suspense;
      const {
        renderer: {
          p: patch,
          m: move,
          um: _unmount,
          o: { createElement }
        }
      } =3D sharedContext;
      const storageContainer =3D createElement("div");
      sharedContext.activate =3D (vnode, container, anchor, namespace, opti=
mized) =3D&gt; {
        const instance2 =3D vnode.component;
        move(vnode, container, anchor, 0, parentSuspense);
        patch(
          instance2.vnode,
          vnode,
          container,
          anchor,
          instance2,
          parentSuspense,
          namespace,
          vnode.slotScopeIds,
          optimized
        );
        queuePostRenderEffect(() =3D&gt; {
          instance2.isDeactivated =3D false;
          if (instance2.a) {
            invokeArrayFns(instance2.a);
          }
          const vnodeHook =3D vnode.props &amp;&amp; vnode.props.onVnodeMou=
nted;
          if (vnodeHook) {
            invokeVNodeHook(vnodeHook, instance2.parent, vnode);
          }
        }, parentSuspense);
        {
          devtoolsComponentAdded(instance2);
        }
      };
      sharedContext.deactivate =3D (vnode) =3D&gt; {
        const instance2 =3D vnode.component;
        invalidateMount(instance2.m);
        invalidateMount(instance2.a);
        move(vnode, storageContainer, null, 1, parentSuspense);
        queuePostRenderEffect(() =3D&gt; {
          if (instance2.da) {
            invokeArrayFns(instance2.da);
          }
          const vnodeHook =3D vnode.props &amp;&amp; vnode.props.onVnodeUnm=
ounted;
          if (vnodeHook) {
            invokeVNodeHook(vnodeHook, instance2.parent, vnode);
          }
          instance2.isDeactivated =3D true;
        }, parentSuspense);
        {
          devtoolsComponentAdded(instance2);
        }
        {
          instance2.__keepAliveStorageContainer =3D storageContainer;
        }
      };
      function unmount(vnode) {
        resetShapeFlag(vnode);
        _unmount(vnode, instance, parentSuspense, true);
      }
      function pruneCache(filter) {
        cache.forEach((vnode, key) =3D&gt; {
          const name =3D getComponentName(vnode.type);
          if (name &amp;&amp; !filter(name)) {
            pruneCacheEntry(key);
          }
        });
      }
      function pruneCacheEntry(key) {
        const cached =3D cache.get(key);
        if (cached &amp;&amp; (!current || !isSameVNodeType(cached, current=
))) {
          unmount(cached);
        } else if (current) {
          resetShapeFlag(current);
        }
        cache.delete(key);
        keys.delete(key);
      }
      watch(
        () =3D&gt; [props.include, props.exclude],
        ([include, exclude]) =3D&gt; {
          include &amp;&amp; pruneCache((name) =3D&gt; matches(include, nam=
e));
          exclude &amp;&amp; pruneCache((name) =3D&gt; !matches(exclude, na=
me));
        },
        // prune post-render after `current` has been updated
        { flush: "post", deep: true }
      );
      let pendingCacheKey =3D null;
      const cacheSubtree =3D () =3D&gt; {
        if (pendingCacheKey !=3D null) {
          if (isSuspense(instance.subTree.type)) {
            queuePostRenderEffect(() =3D&gt; {
              cache.set(pendingCacheKey, getInnerChild(instance.subTree));
            }, instance.subTree.suspense);
          } else {
            cache.set(pendingCacheKey, getInnerChild(instance.subTree));
          }
        }
      };
      onMounted(cacheSubtree);
      onUpdated(cacheSubtree);
      onBeforeUnmount(() =3D&gt; {
        cache.forEach((cached) =3D&gt; {
          const { subTree, suspense } =3D instance;
          const vnode =3D getInnerChild(subTree);
          if (cached.type =3D=3D=3D vnode.type &amp;&amp; cached.key =3D=3D=
=3D vnode.key) {
            resetShapeFlag(vnode);
            const da =3D vnode.component.da;
            da &amp;&amp; queuePostRenderEffect(da, suspense);
            return;
          }
          unmount(cached);
        });
      });
      return () =3D&gt; {
        pendingCacheKey =3D null;
        if (!slots.default) {
          return current =3D null;
        }
        const children =3D slots.default();
        const rawVNode =3D children[0];
        if (children.length &gt; 1) {
          {
            warn$1(`KeepAlive should contain exactly one component child.`)=
;
          }
          current =3D null;
          return children;
        } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag &amp; 4) &amp=
;&amp; !(rawVNode.shapeFlag &amp; 128)) {
          current =3D null;
          return rawVNode;
        }
        let vnode =3D getInnerChild(rawVNode);
        if (vnode.type =3D=3D=3D Comment) {
          current =3D null;
          return vnode;
        }
        const comp =3D vnode.type;
        const name =3D getComponentName(
          isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp
        );
        const { include, exclude, max } =3D props;
        if (include &amp;&amp; (!name || !matches(include, name)) || exclud=
e &amp;&amp; name &amp;&amp; matches(exclude, name)) {
          vnode.shapeFlag &amp;=3D -257;
          current =3D vnode;
          return rawVNode;
        }
        const key =3D vnode.key =3D=3D null ? comp : vnode.key;
        const cachedVNode =3D cache.get(key);
        if (vnode.el) {
          vnode =3D cloneVNode(vnode);
          if (rawVNode.shapeFlag &amp; 128) {
            rawVNode.ssContent =3D vnode;
          }
        }
        pendingCacheKey =3D key;
        if (cachedVNode) {
          vnode.el =3D cachedVNode.el;
          vnode.component =3D cachedVNode.component;
          if (vnode.transition) {
            setTransitionHooks(vnode, vnode.transition);
          }
          vnode.shapeFlag |=3D 512;
          keys.delete(key);
          keys.add(key);
        } else {
          keys.add(key);
          if (max &amp;&amp; keys.size &gt; parseInt(max, 10)) {
            pruneCacheEntry(keys.values().next().value);
          }
        }
        vnode.shapeFlag |=3D 256;
        current =3D vnode;
        return isSuspense(rawVNode.type) ? rawVNode : vnode;
      };
    }
  };
  const KeepAlive =3D KeepAliveImpl;
  function matches(pattern, name) {
    if (isArray(pattern)) {
      return pattern.some((p) =3D&gt; matches(p, name));
    } else if (isString(pattern)) {
      return pattern.split(",").includes(name);
    } else if (isRegExp(pattern)) {
      pattern.lastIndex =3D 0;
      return pattern.test(name);
    }
    return false;
  }
  function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a", target);
  }
  function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da", target);
  }
  function registerKeepAliveHook(hook, type, target =3D currentInstance) {
    const wrappedHook =3D hook.__wdc || (hook.__wdc =3D () =3D&gt; {
      let current =3D target;
      while (current) {
        if (current.isDeactivated) {
          return;
        }
        current =3D current.parent;
      }
      return hook();
    });
    injectHook(type, wrappedHook, target);
    if (target) {
      let current =3D target.parent;
      while (current &amp;&amp; current.parent) {
        if (isKeepAlive(current.parent.vnode)) {
          injectToKeepAliveRoot(wrappedHook, type, target, current);
        }
        current =3D current.parent;
      }
    }
  }
  function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    const injected =3D injectHook(
      type,
      hook,
      keepAliveRoot,
      true
      /* prepend */
    );
    onUnmounted(() =3D&gt; {
      remove(keepAliveRoot[type], injected);
    }, target);
  }
  function resetShapeFlag(vnode) {
    vnode.shapeFlag &amp;=3D -257;
    vnode.shapeFlag &amp;=3D -513;
  }
  function getInnerChild(vnode) {
    return vnode.shapeFlag &amp; 128 ? vnode.ssContent : vnode;
  }

  function injectHook(type, hook, target =3D currentInstance, prepend =3D f=
alse) {
    if (target) {
      const hooks =3D target[type] || (target[type] =3D []);
      const wrappedHook =3D hook.__weh || (hook.__weh =3D (...args) =3D&gt;=
 {
        pauseTracking();
        const reset =3D setCurrentInstance(target);
        const res =3D callWithAsyncErrorHandling(hook, target, type, args);
        reset();
        resetTracking();
        return res;
      });
      if (prepend) {
        hooks.unshift(wrappedHook);
      } else {
        hooks.push(wrappedHook);
      }
      return wrappedHook;
    } else {
      const apiName =3D toHandlerKey(ErrorTypeStrings$1[type].replace(/ hoo=
k$/, ""));
      warn$1(
        `${apiName} is called when there is no active component instance to=
 be associated with. Lifecycle injection APIs can only be used during execu=
tion of setup().` + (` If you are using async setup(), make sure to registe=
r lifecycle hooks before the first await statement.` )
      );
    }
  }
  const createHook =3D (lifecycle) =3D&gt; (hook, target =3D currentInstanc=
e) =3D&gt; {
    if (!isInSSRComponentSetup || lifecycle =3D=3D=3D "sp") {
      injectHook(lifecycle, (...args) =3D&gt; hook(...args), target);
    }
  };
  const onBeforeMount =3D createHook("bm");
  const onMounted =3D createHook("m");
  const onBeforeUpdate =3D createHook(
    "bu"
  );
  const onUpdated =3D createHook("u");
  const onBeforeUnmount =3D createHook(
    "bum"
  );
  const onUnmounted =3D createHook("um");
  const onServerPrefetch =3D createHook(
    "sp"
  );
  const onRenderTriggered =3D createHook("rtg");
  const onRenderTracked =3D createHook("rtc");
  function onErrorCaptured(hook, target =3D currentInstance) {
    injectHook("ec", hook, target);
  }

  const COMPONENTS =3D "components";
  const DIRECTIVES =3D "directives";
  function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name=
;
  }
  const NULL_DYNAMIC_COMPONENT =3D Symbol.for("v-ndc");
  function resolveDynamicComponent(component) {
    if (isString(component)) {
      return resolveAsset(COMPONENTS, component, false) || component;
    } else {
      return component || NULL_DYNAMIC_COMPONENT;
    }
  }
  function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
  }
  function resolveAsset(type, name, warnMissing =3D true, maybeSelfReferenc=
e =3D false) {
    const instance =3D currentRenderingInstance || currentInstance;
    if (instance) {
      const Component =3D instance.type;
      if (type =3D=3D=3D COMPONENTS) {
        const selfName =3D getComponentName(
          Component,
          false
        );
        if (selfName &amp;&amp; (selfName =3D=3D=3D name || selfName =3D=3D=
=3D camelize(name) || selfName =3D=3D=3D capitalize(camelize(name)))) {
          return Component;
        }
      }
      const res =3D (
        // local registration
        // check instance[type] first which is resolved for options API
        resolve(instance[type] || Component[type], name) || // global regis=
tration
        resolve(instance.appContext[type], name)
      );
      if (!res &amp;&amp; maybeSelfReference) {
        return Component;
      }
      if (warnMissing &amp;&amp; !res) {
        const extra =3D type =3D=3D=3D COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component =
resolution via compilerOptions.isCustomElement.` : ``;
        warn$1(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
      }
      return res;
    } else {
      warn$1(
        `resolve${capitalize(type.slice(0, -1))} can only be used in render=
() or setup().`
      );
    }
  }
  function resolve(registry, name) {
    return registry &amp;&amp; (registry[name] || registry[camelize(name)] =
|| registry[capitalize(camelize(name))]);
  }

  function renderList(source, renderItem, cache, index) {
    let ret;
    const cached =3D cache &amp;&amp; cache[index];
    const sourceIsArray =3D isArray(source);
    if (sourceIsArray || isString(source)) {
      const sourceIsReactiveArray =3D sourceIsArray &amp;&amp; isReactive(s=
ource);
      let needsWrap =3D false;
      let isReadonlySource =3D false;
      if (sourceIsReactiveArray) {
        needsWrap =3D !isShallow(source);
        isReadonlySource =3D isReadonly(source);
        source =3D shallowReadArray(source);
      }
      ret =3D new Array(source.length);
      for (let i =3D 0, l =3D source.length; i &lt; l; i++) {
        ret[i] =3D renderItem(
          needsWrap ? isReadonlySource ? toReadonly(toReactive(source[i])) =
: toReactive(source[i]) : source[i],
          i,
          void 0,
          cached &amp;&amp; cached[i]
        );
      }
    } else if (typeof source =3D=3D=3D "number") {
      if (!Number.isInteger(source)) {
        warn$1(`The v-for range expect an integer value but got ${source}.`=
);
      }
      ret =3D new Array(source);
      for (let i =3D 0; i &lt; source; i++) {
        ret[i] =3D renderItem(i + 1, i, void 0, cached &amp;&amp; cached[i]=
);
      }
    } else if (isObject(source)) {
      if (source[Symbol.iterator]) {
        ret =3D Array.from(
          source,
          (item, i) =3D&gt; renderItem(item, i, void 0, cached &amp;&amp; c=
ached[i])
        );
      } else {
        const keys =3D Object.keys(source);
        ret =3D new Array(keys.length);
        for (let i =3D 0, l =3D keys.length; i &lt; l; i++) {
          const key =3D keys[i];
          ret[i] =3D renderItem(source[key], key, i, cached &amp;&amp; cach=
ed[i]);
        }
      }
    } else {
      ret =3D [];
    }
    if (cache) {
      cache[index] =3D ret;
    }
    return ret;
  }

  function createSlots(slots, dynamicSlots) {
    for (let i =3D 0; i &lt; dynamicSlots.length; i++) {
      const slot =3D dynamicSlots[i];
      if (isArray(slot)) {
        for (let j =3D 0; j &lt; slot.length; j++) {
          slots[slot[j].name] =3D slot[j].fn;
        }
      } else if (slot) {
        slots[slot.name] =3D slot.key ? (...args) =3D&gt; {
          const res =3D slot.fn(...args);
          if (res) res.key =3D slot.key;
          return res;
        } : slot.fn;
      }
    }
    return slots;
  }

  function renderSlot(slots, name, props =3D {}, fallback, noSlotted) {
    if (currentRenderingInstance.ce || currentRenderingInstance.parent &amp=
;&amp; isAsyncWrapper(currentRenderingInstance.parent) &amp;&amp; currentRe=
nderingInstance.parent.ce) {
      if (name !=3D=3D "default") props.name =3D name;
      return openBlock(), createBlock(
        Fragment,
        null,
        [createVNode("slot", props, fallback &amp;&amp; fallback())],
        64
      );
    }
    let slot =3D slots[name];
    if (slot &amp;&amp; slot.length &gt; 1) {
      warn$1(
        `SSR-optimized slot function detected in a non-SSR-optimized render=
 function. You need to mark this component with $dynamic-slots in the paren=
t template.`
      );
      slot =3D () =3D&gt; [];
    }
    if (slot &amp;&amp; slot._c) {
      slot._d =3D false;
    }
    openBlock();
    const validSlotContent =3D slot &amp;&amp; ensureValidVNode(slot(props)=
);
    const slotKey =3D props.key || // slot content array of a dynamic condi=
tional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    validSlotContent &amp;&amp; validSlotContent.key;
    const rendered =3D createBlock(
      Fragment,
      {
        key: (slotKey &amp;&amp; !isSymbol(slotKey) ? slotKey : `_${name}`)=
 + // #7256 force differentiate fallback content from actual content
        (!validSlotContent &amp;&amp; fallback ? "_fb" : "")
      },
      validSlotContent || (fallback ? fallback() : []),
      validSlotContent &amp;&amp; slots._ =3D=3D=3D 1 ? 64 : -2
    );
    if (!noSlotted &amp;&amp; rendered.scopeId) {
      rendered.slotScopeIds =3D [rendered.scopeId + "-s"];
    }
    if (slot &amp;&amp; slot._c) {
      slot._d =3D true;
    }
    return rendered;
  }
  function ensureValidVNode(vnodes) {
    return vnodes.some((child) =3D&gt; {
      if (!isVNode(child)) return true;
      if (child.type =3D=3D=3D Comment) return false;
      if (child.type =3D=3D=3D Fragment &amp;&amp; !ensureValidVNode(child.=
children))
        return false;
      return true;
    }) ? vnodes : null;
  }

  function toHandlers(obj, preserveCaseIfNecessary) {
    const ret =3D {};
    if (!isObject(obj)) {
      warn$1(`v-on with no argument expects an object value.`);
      return ret;
    }
    for (const key in obj) {
      ret[preserveCaseIfNecessary &amp;&amp; /[A-Z]/.test(key) ? `on:${key}=
` : toHandlerKey(key)] =3D obj[key];
    }
    return ret;
  }

  const getPublicInstance =3D (i) =3D&gt; {
    if (!i) return null;
    if (isStatefulComponent(i)) return getComponentPublicInstance(i);
    return getPublicInstance(i.parent);
  };
  const publicPropertiesMap =3D (
    // Move PURE marker to new line to workaround compiler discarding it
    // due to type annotation
    /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
      $: (i) =3D&gt; i,
      $el: (i) =3D&gt; i.vnode.el,
      $data: (i) =3D&gt; i.data,
      $props: (i) =3D&gt; shallowReadonly(i.props) ,
      $attrs: (i) =3D&gt; shallowReadonly(i.attrs) ,
      $slots: (i) =3D&gt; shallowReadonly(i.slots) ,
      $refs: (i) =3D&gt; shallowReadonly(i.refs) ,
      $parent: (i) =3D&gt; getPublicInstance(i.parent),
      $root: (i) =3D&gt; getPublicInstance(i.root),
      $host: (i) =3D&gt; i.ce,
      $emit: (i) =3D&gt; i.emit,
      $options: (i) =3D&gt; resolveMergedOptions(i) ,
      $forceUpdate: (i) =3D&gt; i.f || (i.f =3D () =3D&gt; {
        queueJob(i.update);
      }),
      $nextTick: (i) =3D&gt; i.n || (i.n =3D nextTick.bind(i.proxy)),
      $watch: (i) =3D&gt; instanceWatch.bind(i)=20
    })
  );
  const isReservedPrefix =3D (key) =3D&gt; key =3D=3D=3D "_" || key =3D=3D=
=3D "$";
  const hasSetupBinding =3D (state, key) =3D&gt; state !=3D=3D EMPTY_OBJ &a=
mp;&amp; !state.__isScriptSetup &amp;&amp; hasOwn(state, key);
  const PublicInstanceProxyHandlers =3D {
    get({ _: instance }, key) {
      if (key =3D=3D=3D "__v_skip") {
        return true;
      }
      const { ctx, setupState, data, props, accessCache, type, appContext }=
 =3D instance;
      if (key =3D=3D=3D "__isVue") {
        return true;
      }
      let normalizedProps;
      if (key[0] !=3D=3D "$") {
        const n =3D accessCache[key];
        if (n !=3D=3D void 0) {
          switch (n) {
            case 1 /* SETUP */:
              return setupState[key];
            case 2 /* DATA */:
              return data[key];
            case 4 /* CONTEXT */:
              return ctx[key];
            case 3 /* PROPS */:
              return props[key];
          }
        } else if (hasSetupBinding(setupState, key)) {
          accessCache[key] =3D 1 /* SETUP */;
          return setupState[key];
        } else if (data !=3D=3D EMPTY_OBJ &amp;&amp; hasOwn(data, key)) {
          accessCache[key] =3D 2 /* DATA */;
          return data[key];
        } else if (
          // only cache other properties when instance has declared (thus s=
table)
          // props
          (normalizedProps =3D instance.propsOptions[0]) &amp;&amp; hasOwn(=
normalizedProps, key)
        ) {
          accessCache[key] =3D 3 /* PROPS */;
          return props[key];
        } else if (ctx !=3D=3D EMPTY_OBJ &amp;&amp; hasOwn(ctx, key)) {
          accessCache[key] =3D 4 /* CONTEXT */;
          return ctx[key];
        } else if (shouldCacheAccess) {
          accessCache[key] =3D 0 /* OTHER */;
        }
      }
      const publicGetter =3D publicPropertiesMap[key];
      let cssModule, globalProperties;
      if (publicGetter) {
        if (key =3D=3D=3D "$attrs") {
          track(instance.attrs, "get", "");
          markAttrsAccessed();
        } else if (key =3D=3D=3D "$slots") {
          track(instance, "get", key);
        }
        return publicGetter(instance);
      } else if (
        // css module (injected by vue-loader)
        (cssModule =3D type.__cssModules) &amp;&amp; (cssModule =3D cssModu=
le[key])
      ) {
        return cssModule;
      } else if (ctx !=3D=3D EMPTY_OBJ &amp;&amp; hasOwn(ctx, key)) {
        accessCache[key] =3D 4 /* CONTEXT */;
        return ctx[key];
      } else if (
        // global properties
        globalProperties =3D appContext.config.globalProperties, hasOwn(glo=
balProperties, key)
      ) {
        {
          return globalProperties[key];
        }
      } else if (currentRenderingInstance &amp;&amp; (!isString(key) || // =
#1091 avoid internal isRef/isVNode checks on component instance leading
      // to infinite warning loop
      key.indexOf("__v") !=3D=3D 0)) {
        if (data !=3D=3D EMPTY_OBJ &amp;&amp; isReservedPrefix(key[0]) &amp=
;&amp; hasOwn(data, key)) {
          warn$1(
            `Property ${JSON.stringify(
            key
          )} must be accessed via $data because it starts with a reserved c=
haracter ("$" or "_") and is not proxied on the render context.`
          );
        } else if (instance =3D=3D=3D currentRenderingInstance) {
          warn$1(
            `Property ${JSON.stringify(key)} was accessed during render but=
 is not defined on instance.`
          );
        }
      }
    },
    set({ _: instance }, key, value) {
      const { data, setupState, ctx } =3D instance;
      if (hasSetupBinding(setupState, key)) {
        setupState[key] =3D value;
        return true;
      } else if (setupState.__isScriptSetup &amp;&amp; hasOwn(setupState, k=
ey)) {
        warn$1(`Cannot mutate &lt;script setup&gt; binding "${key}" from Op=
tions API.`);
        return false;
      } else if (data !=3D=3D EMPTY_OBJ &amp;&amp; hasOwn(data, key)) {
        data[key] =3D value;
        return true;
      } else if (hasOwn(instance.props, key)) {
        warn$1(`Attempting to mutate prop "${key}". Props are readonly.`);
        return false;
      }
      if (key[0] =3D=3D=3D "$" &amp;&amp; key.slice(1) in instance) {
        warn$1(
          `Attempting to mutate public property "${key}". Properties starti=
ng with $ are reserved and readonly.`
        );
        return false;
      } else {
        if (key in instance.appContext.config.globalProperties) {
          Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            value
          });
        } else {
          ctx[key] =3D value;
        }
      }
      return true;
    },
    has({
      _: { data, setupState, accessCache, ctx, appContext, propsOptions }
    }, key) {
      let normalizedProps;
      return !!accessCache[key] || data !=3D=3D EMPTY_OBJ &amp;&amp; hasOwn=
(data, key) || hasSetupBinding(setupState, key) || (normalizedProps =3D pro=
psOptions[0]) &amp;&amp; hasOwn(normalizedProps, key) || hasOwn(ctx, key) |=
| hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProper=
ties, key);
    },
    defineProperty(target, key, descriptor) {
      if (descriptor.get !=3D null) {
        target._.accessCache[key] =3D 0;
      } else if (hasOwn(descriptor, "value")) {
        this.set(target, key, descriptor.value, null);
      }
      return Reflect.defineProperty(target, key, descriptor);
    }
  };
  {
    PublicInstanceProxyHandlers.ownKeys =3D (target) =3D&gt; {
      warn$1(
        `Avoid app logic that relies on enumerating keys on a component ins=
tance. The keys will be empty in production mode to avoid performance overh=
ead.`
      );
      return Reflect.ownKeys(target);
    };
  }
  const RuntimeCompiledPublicInstanceProxyHandlers =3D /* @__PURE__ */ exte=
nd({}, PublicInstanceProxyHandlers, {
    get(target, key) {
      if (key =3D=3D=3D Symbol.unscopables) {
        return;
      }
      return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has(_, key) {
      const has =3D key[0] !=3D=3D "_" &amp;&amp; !isGloballyAllowed(key);
      if (!has &amp;&amp; PublicInstanceProxyHandlers.has(_, key)) {
        warn$1(
          `Property ${JSON.stringify(
          key
        )} should not start with _ which is a reserved prefix for Vue inter=
nals.`
        );
      }
      return has;
    }
  });
  function createDevRenderContext(instance) {
    const target =3D {};
    Object.defineProperty(target, `_`, {
      configurable: true,
      enumerable: false,
      get: () =3D&gt; instance
    });
    Object.keys(publicPropertiesMap).forEach((key) =3D&gt; {
      Object.defineProperty(target, key, {
        configurable: true,
        enumerable: false,
        get: () =3D&gt; publicPropertiesMap[key](instance),
        // intercepted by the proxy so no need for implementation,
        // but needed to prevent set errors
        set: NOOP
      });
    });
    return target;
  }
  function exposePropsOnRenderContext(instance) {
    const {
      ctx,
      propsOptions: [propsOptions]
    } =3D instance;
    if (propsOptions) {
      Object.keys(propsOptions).forEach((key) =3D&gt; {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () =3D&gt; instance.props[key],
          set: NOOP
        });
      });
    }
  }
  function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } =3D instance;
    Object.keys(toRaw(setupState)).forEach((key) =3D&gt; {
      if (!setupState.__isScriptSetup) {
        if (isReservedPrefix(key[0])) {
          warn$1(
            `setup() return property ${JSON.stringify(
            key
          )} should not start with "$" or "_" which are reserved prefixes f=
or Vue internals.`
          );
          return;
        }
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () =3D&gt; setupState[key],
          set: NOOP
        });
      }
    });
  }

  const warnRuntimeUsage =3D (method) =3D&gt; warn$1(
    `${method}() is a compiler-hint helper that is only usable inside &lt;s=
cript setup&gt; of a single file component. Its arguments should be compile=
d away and passing it at runtime has no effect.`
  );
  function defineProps() {
    {
      warnRuntimeUsage(`defineProps`);
    }
    return null;
  }
  function defineEmits() {
    {
      warnRuntimeUsage(`defineEmits`);
    }
    return null;
  }
  function defineExpose(exposed) {
    {
      warnRuntimeUsage(`defineExpose`);
    }
  }
  function defineOptions(options) {
    {
      warnRuntimeUsage(`defineOptions`);
    }
  }
  function defineSlots() {
    {
      warnRuntimeUsage(`defineSlots`);
    }
    return null;
  }
  function defineModel() {
    {
      warnRuntimeUsage("defineModel");
    }
  }
  function withDefaults(props, defaults) {
    {
      warnRuntimeUsage(`withDefaults`);
    }
    return null;
  }
  function useSlots() {
    return getContext().slots;
  }
  function useAttrs() {
    return getContext().attrs;
  }
  function getContext() {
    const i =3D getCurrentInstance();
    if (!i) {
      warn$1(`useContext() called without active instance.`);
    }
    return i.setupContext || (i.setupContext =3D createSetupContext(i));
  }
  function normalizePropsOrEmits(props) {
    return isArray(props) ? props.reduce(
      (normalized, p) =3D&gt; (normalized[p] =3D null, normalized),
      {}
    ) : props;
  }
  function mergeDefaults(raw, defaults) {
    const props =3D normalizePropsOrEmits(raw);
    for (const key in defaults) {
      if (key.startsWith("__skip")) continue;
      let opt =3D props[key];
      if (opt) {
        if (isArray(opt) || isFunction(opt)) {
          opt =3D props[key] =3D { type: opt, default: defaults[key] };
        } else {
          opt.default =3D defaults[key];
        }
      } else if (opt =3D=3D=3D null) {
        opt =3D props[key] =3D { default: defaults[key] };
      } else {
        warn$1(`props default key "${key}" has no corresponding declaration=
.`);
      }
      if (opt &amp;&amp; defaults[`__skip_${key}`]) {
        opt.skipFactory =3D true;
      }
    }
    return props;
  }
  function mergeModels(a, b) {
    if (!a || !b) return a || b;
    if (isArray(a) &amp;&amp; isArray(b)) return a.concat(b);
    return extend({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b));
  }
  function createPropsRestProxy(props, excludedKeys) {
    const ret =3D {};
    for (const key in props) {
      if (!excludedKeys.includes(key)) {
        Object.defineProperty(ret, key, {
          enumerable: true,
          get: () =3D&gt; props[key]
        });
      }
    }
    return ret;
  }
  function withAsyncContext(getAwaitable) {
    const ctx =3D getCurrentInstance();
    if (!ctx) {
      warn$1(
        `withAsyncContext called without active current instance. This is l=
ikely a bug.`
      );
    }
    let awaitable =3D getAwaitable();
    unsetCurrentInstance();
    if (isPromise(awaitable)) {
      awaitable =3D awaitable.catch((e) =3D&gt; {
        setCurrentInstance(ctx);
        throw e;
      });
    }
    return [awaitable, () =3D&gt; setCurrentInstance(ctx)];
  }

  function createDuplicateChecker() {
    const cache =3D /* @__PURE__ */ Object.create(null);
    return (type, key) =3D&gt; {
      if (cache[key]) {
        warn$1(`${type} property "${key}" is already defined in ${cache[key=
]}.`);
      } else {
        cache[key] =3D type;
      }
    };
  }
  let shouldCacheAccess =3D true;
  function applyOptions(instance) {
    const options =3D resolveMergedOptions(instance);
    const publicThis =3D instance.proxy;
    const ctx =3D instance.ctx;
    shouldCacheAccess =3D false;
    if (options.beforeCreate) {
      callHook$1(options.beforeCreate, instance, "bc");
    }
    const {
      // state
      data: dataOptions,
      computed: computedOptions,
      methods,
      watch: watchOptions,
      provide: provideOptions,
      inject: injectOptions,
      // lifecycle
      created,
      beforeMount,
      mounted,
      beforeUpdate,
      updated,
      activated,
      deactivated,
      beforeDestroy,
      beforeUnmount,
      destroyed,
      unmounted,
      render,
      renderTracked,
      renderTriggered,
      errorCaptured,
      serverPrefetch,
      // public API
      expose,
      inheritAttrs,
      // assets
      components,
      directives,
      filters
    } =3D options;
    const checkDuplicateProperties =3D createDuplicateChecker() ;
    {
      const [propsOptions] =3D instance.propsOptions;
      if (propsOptions) {
        for (const key in propsOptions) {
          checkDuplicateProperties("Props" /* PROPS */, key);
        }
      }
    }
    if (injectOptions) {
      resolveInjections(injectOptions, ctx, checkDuplicateProperties);
    }
    if (methods) {
      for (const key in methods) {
        const methodHandler =3D methods[key];
        if (isFunction(methodHandler)) {
          {
            Object.defineProperty(ctx, key, {
              value: methodHandler.bind(publicThis),
              configurable: true,
              enumerable: true,
              writable: true
            });
          }
          {
            checkDuplicateProperties("Methods" /* METHODS */, key);
          }
        } else {
          warn$1(
            `Method "${key}" has type "${typeof methodHandler}" in the comp=
onent definition. Did you reference the function correctly?`
          );
        }
      }
    }
    if (dataOptions) {
      if (!isFunction(dataOptions)) {
        warn$1(
          `The data option must be a function. Plain object usage is no lon=
ger supported.`
        );
      }
      const data =3D dataOptions.call(publicThis, publicThis);
      if (isPromise(data)) {
        warn$1(
          `data() returned a Promise - note data() cannot be async; If you =
intend to perform data fetching before component renders, use async setup()=
 + &lt;Suspense&gt;.`
        );
      }
      if (!isObject(data)) {
        warn$1(`data() should return an object.`);
      } else {
        instance.data =3D reactive(data);
        {
          for (const key in data) {
            checkDuplicateProperties("Data" /* DATA */, key);
            if (!isReservedPrefix(key[0])) {
              Object.defineProperty(ctx, key, {
                configurable: true,
                enumerable: true,
                get: () =3D&gt; data[key],
                set: NOOP
              });
            }
          }
        }
      }
    }
    shouldCacheAccess =3D true;
    if (computedOptions) {
      for (const key in computedOptions) {
        const opt =3D computedOptions[key];
        const get =3D isFunction(opt) ? opt.bind(publicThis, publicThis) : =
isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
        if (get =3D=3D=3D NOOP) {
          warn$1(`Computed property "${key}" has no getter.`);
        }
        const set =3D !isFunction(opt) &amp;&amp; isFunction(opt.set) ? opt=
.set.bind(publicThis) : () =3D&gt; {
          warn$1(
            `Write operation failed: computed property "${key}" is readonly=
.`
          );
        } ;
        const c =3D computed({
          get,
          set
        });
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () =3D&gt; c.value,
          set: (v) =3D&gt; c.value =3D v
        });
        {
          checkDuplicateProperties("Computed" /* COMPUTED */, key);
        }
      }
    }
    if (watchOptions) {
      for (const key in watchOptions) {
        createWatcher(watchOptions[key], ctx, publicThis, key);
      }
    }
    if (provideOptions) {
      const provides =3D isFunction(provideOptions) ? provideOptions.call(p=
ublicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach((key) =3D&gt; {
        provide(key, provides[key]);
      });
    }
    if (created) {
      callHook$1(created, instance, "c");
    }
    function registerLifecycleHook(register, hook) {
      if (isArray(hook)) {
        hook.forEach((_hook) =3D&gt; register(_hook.bind(publicThis)));
      } else if (hook) {
        register(hook.bind(publicThis));
      }
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if (isArray(expose)) {
      if (expose.length) {
        const exposed =3D instance.exposed || (instance.exposed =3D {});
        expose.forEach((key) =3D&gt; {
          Object.defineProperty(exposed, key, {
            get: () =3D&gt; publicThis[key],
            set: (val) =3D&gt; publicThis[key] =3D val
          });
        });
      } else if (!instance.exposed) {
        instance.exposed =3D {};
      }
    }
    if (render &amp;&amp; instance.render =3D=3D=3D NOOP) {
      instance.render =3D render;
    }
    if (inheritAttrs !=3D null) {
      instance.inheritAttrs =3D inheritAttrs;
    }
    if (components) instance.components =3D components;
    if (directives) instance.directives =3D directives;
  }
  function resolveInjections(injectOptions, ctx, checkDuplicateProperties =
=3D NOOP) {
    if (isArray(injectOptions)) {
      injectOptions =3D normalizeInject(injectOptions);
    }
    for (const key in injectOptions) {
      const opt =3D injectOptions[key];
      let injected;
      if (isObject(opt)) {
        if ("default" in opt) {
          injected =3D inject(
            opt.from || key,
            opt.default,
            true
          );
        } else {
          injected =3D inject(opt.from || key);
        }
      } else {
        injected =3D inject(opt);
      }
      if (isRef(injected)) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () =3D&gt; injected.value,
          set: (v) =3D&gt; injected.value =3D v
        });
      } else {
        ctx[key] =3D injected;
      }
      {
        checkDuplicateProperties("Inject" /* INJECT */, key);
      }
    }
  }
  function callHook$1(hook, instance, type) {
    callWithAsyncErrorHandling(
      isArray(hook) ? hook.map((h) =3D&gt; h.bind(instance.proxy)) : hook.b=
ind(instance.proxy),
      instance,
      type
    );
  }
  function createWatcher(raw, ctx, publicThis, key) {
    let getter =3D key.includes(".") ? createPathGetter(publicThis, key) : =
() =3D&gt; publicThis[key];
    if (isString(raw)) {
      const handler =3D ctx[raw];
      if (isFunction(handler)) {
        {
          watch(getter, handler);
        }
      } else {
        warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
      }
    } else if (isFunction(raw)) {
      {
        watch(getter, raw.bind(publicThis));
      }
    } else if (isObject(raw)) {
      if (isArray(raw)) {
        raw.forEach((r) =3D&gt; createWatcher(r, ctx, publicThis, key));
      } else {
        const handler =3D isFunction(raw.handler) ? raw.handler.bind(public=
This) : ctx[raw.handler];
        if (isFunction(handler)) {
          watch(getter, handler, raw);
        } else {
          warn$1(`Invalid watch handler specified by key "${raw.handler}"`,=
 handler);
        }
      }
    } else {
      warn$1(`Invalid watch option: "${key}"`, raw);
    }
  }
  function resolveMergedOptions(instance) {
    const base =3D instance.type;
    const { mixins, extends: extendsOptions } =3D base;
    const {
      mixins: globalMixins,
      optionsCache: cache,
      config: { optionMergeStrategies }
    } =3D instance.appContext;
    const cached =3D cache.get(base);
    let resolved;
    if (cached) {
      resolved =3D cached;
    } else if (!globalMixins.length &amp;&amp; !mixins &amp;&amp; !extendsO=
ptions) {
      {
        resolved =3D base;
      }
    } else {
      resolved =3D {};
      if (globalMixins.length) {
        globalMixins.forEach(
          (m) =3D&gt; mergeOptions(resolved, m, optionMergeStrategies, true=
)
        );
      }
      mergeOptions(resolved, base, optionMergeStrategies);
    }
    if (isObject(base)) {
      cache.set(base, resolved);
    }
    return resolved;
  }
  function mergeOptions(to, from, strats, asMixin =3D false) {
    const { mixins, extends: extendsOptions } =3D from;
    if (extendsOptions) {
      mergeOptions(to, extendsOptions, strats, true);
    }
    if (mixins) {
      mixins.forEach(
        (m) =3D&gt; mergeOptions(to, m, strats, true)
      );
    }
    for (const key in from) {
      if (asMixin &amp;&amp; key =3D=3D=3D "expose") {
        warn$1(
          `"expose" option is ignored when declared in mixins or extends. I=
t should only be declared in the base component itself.`
        );
      } else {
        const strat =3D internalOptionMergeStrats[key] || strats &amp;&amp;=
 strats[key];
        to[key] =3D strat ? strat(to[key], from[key]) : from[key];
      }
    }
    return to;
  }
  const internalOptionMergeStrats =3D {
    data: mergeDataFn,
    props: mergeEmitsOrPropsOptions,
    emits: mergeEmitsOrPropsOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray$1,
    created: mergeAsArray$1,
    beforeMount: mergeAsArray$1,
    mounted: mergeAsArray$1,
    beforeUpdate: mergeAsArray$1,
    updated: mergeAsArray$1,
    beforeDestroy: mergeAsArray$1,
    beforeUnmount: mergeAsArray$1,
    destroyed: mergeAsArray$1,
    unmounted: mergeAsArray$1,
    activated: mergeAsArray$1,
    deactivated: mergeAsArray$1,
    errorCaptured: mergeAsArray$1,
    serverPrefetch: mergeAsArray$1,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
  };
  function mergeDataFn(to, from) {
    if (!from) {
      return to;
    }
    if (!to) {
      return from;
    }
    return function mergedDataFn() {
      return (extend)(
        isFunction(to) ? to.call(this, this) : to,
        isFunction(from) ? from.call(this, this) : from
      );
    };
  }
  function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
  }
  function normalizeInject(raw) {
    if (isArray(raw)) {
      const res =3D {};
      for (let i =3D 0; i &lt; raw.length; i++) {
        res[raw[i]] =3D raw[i];
      }
      return res;
    }
    return raw;
  }
  function mergeAsArray$1(to, from) {
    return to ? [...new Set([].concat(to, from))] : from;
  }
  function mergeObjectOptions(to, from) {
    return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : fro=
m;
  }
  function mergeEmitsOrPropsOptions(to, from) {
    if (to) {
      if (isArray(to) &amp;&amp; isArray(from)) {
        return [.../* @__PURE__ */ new Set([...to, ...from])];
      }
      return extend(
        /* @__PURE__ */ Object.create(null),
        normalizePropsOrEmits(to),
        normalizePropsOrEmits(from !=3D null ? from : {})
      );
    } else {
      return from;
    }
  }
  function mergeWatchOptions(to, from) {
    if (!to) return from;
    if (!from) return to;
    const merged =3D extend(/* @__PURE__ */ Object.create(null), to);
    for (const key in from) {
      merged[key] =3D mergeAsArray$1(to[key], from[key]);
    }
    return merged;
  }

  function createAppContext() {
    return {
      app: null,
      config: {
        isNativeTag: NO,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  let uid$1 =3D 0;
  function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps =3D null) {
      if (!isFunction(rootComponent)) {
        rootComponent =3D extend({}, rootComponent);
      }
      if (rootProps !=3D null &amp;&amp; !isObject(rootProps)) {
        warn$1(`root props passed to app.mount() must be an object.`);
        rootProps =3D null;
      }
      const context =3D createAppContext();
      const installedPlugins =3D /* @__PURE__ */ new WeakSet();
      const pluginCleanupFns =3D [];
      let isMounted =3D false;
      const app =3D context.app =3D {
        _uid: uid$1++,
        _component: rootComponent,
        _props: rootProps,
        _container: null,
        _context: context,
        _instance: null,
        version,
        get config() {
          return context.config;
        },
        set config(v) {
          {
            warn$1(
              `app.config cannot be replaced. Modify individual options ins=
tead.`
            );
          }
        },
        use(plugin, ...options) {
          if (installedPlugins.has(plugin)) {
            warn$1(`Plugin has already been applied to target app.`);
          } else if (plugin &amp;&amp; isFunction(plugin.install)) {
            installedPlugins.add(plugin);
            plugin.install(app, ...options);
          } else if (isFunction(plugin)) {
            installedPlugins.add(plugin);
            plugin(app, ...options);
          } else {
            warn$1(
              `A plugin must either be a function or an object with an "ins=
tall" function.`
            );
          }
          return app;
        },
        mixin(mixin) {
          {
            if (!context.mixins.includes(mixin)) {
              context.mixins.push(mixin);
            } else {
              warn$1(
                "Mixin has already been applied to target app" + (mixin.nam=
e ? `: ${mixin.name}` : "")
              );
            }
          }
          return app;
        },
        component(name, component) {
          {
            validateComponentName(name, context.config);
          }
          if (!component) {
            return context.components[name];
          }
          if (context.components[name]) {
            warn$1(`Component "${name}" has already been registered in targ=
et app.`);
          }
          context.components[name] =3D component;
          return app;
        },
        directive(name, directive) {
          {
            validateDirectiveName(name);
          }
          if (!directive) {
            return context.directives[name];
          }
          if (context.directives[name]) {
            warn$1(`Directive "${name}" has already been registered in targ=
et app.`);
          }
          context.directives[name] =3D directive;
          return app;
        },
        mount(rootContainer, isHydrate, namespace) {
          if (!isMounted) {
            if (rootContainer.__vue_app__) {
              warn$1(
                `There is already an app instance mounted on the host conta=
iner.
 If you want to mount another app on the same host container, you need to u=
nmount the previous app by calling \`app.unmount()\` first.`
              );
            }
            const vnode =3D app._ceVNode || createVNode(rootComponent, root=
Props);
            vnode.appContext =3D context;
            if (namespace =3D=3D=3D true) {
              namespace =3D "svg";
            } else if (namespace =3D=3D=3D false) {
              namespace =3D void 0;
            }
            {
              context.reload =3D () =3D&gt; {
                const cloned =3D cloneVNode(vnode);
                cloned.el =3D null;
                render(cloned, rootContainer, namespace);
              };
            }
            if (isHydrate &amp;&amp; hydrate) {
              hydrate(vnode, rootContainer);
            } else {
              render(vnode, rootContainer, namespace);
            }
            isMounted =3D true;
            app._container =3D rootContainer;
            rootContainer.__vue_app__ =3D app;
            {
              app._instance =3D vnode.component;
              devtoolsInitApp(app, version);
            }
            return getComponentPublicInstance(vnode.component);
          } else {
            warn$1(
              `App has already been mounted.
If you want to remount the same app, move your app creation logic into a fa=
ctory function and create fresh app instances for each mount - e.g. \`const=
 createMyApp =3D () =3D&gt; createApp(App)\``
            );
          }
        },
        onUnmount(cleanupFn) {
          if (typeof cleanupFn !=3D=3D "function") {
            warn$1(
              `Expected function as first argument to app.onUnmount(), but =
got ${typeof cleanupFn}`
            );
          }
          pluginCleanupFns.push(cleanupFn);
        },
        unmount() {
          if (isMounted) {
            callWithAsyncErrorHandling(
              pluginCleanupFns,
              app._instance,
              16
            );
            render(null, app._container);
            {
              app._instance =3D null;
              devtoolsUnmountApp(app);
            }
            delete app._container.__vue_app__;
          } else {
            warn$1(`Cannot unmount an app that is not mounted.`);
          }
        },
        provide(key, value) {
          if (key in context.provides) {
            if (hasOwn(context.provides, key)) {
              warn$1(
                `App already provides property with key "${String(key)}". I=
t will be overwritten with the new value.`
              );
            } else {
              warn$1(
                `App already provides property with key "${String(key)}" in=
herited from its parent element. It will be overwritten with the new value.=
`
              );
            }
          }
          context.provides[key] =3D value;
          return app;
        },
        runWithContext(fn) {
          const lastApp =3D currentApp;
          currentApp =3D app;
          try {
            return fn();
          } finally {
            currentApp =3D lastApp;
          }
        }
      };
      return app;
    };
  }
  let currentApp =3D null;

  function provide(key, value) {
    if (!currentInstance) {
      {
        warn$1(`provide() can only be used inside setup().`);
      }
    } else {
      let provides =3D currentInstance.provides;
      const parentProvides =3D currentInstance.parent &amp;&amp; currentIns=
tance.parent.provides;
      if (parentProvides =3D=3D=3D provides) {
        provides =3D currentInstance.provides =3D Object.create(parentProvi=
des);
      }
      provides[key] =3D value;
    }
  }
  function inject(key, defaultValue, treatDefaultAsFactory =3D false) {
    const instance =3D currentInstance || currentRenderingInstance;
    if (instance || currentApp) {
      let provides =3D currentApp ? currentApp._context.provides : instance=
 ? instance.parent =3D=3D null || instance.ce ? instance.vnode.appContext &=
amp;&amp; instance.vnode.appContext.provides : instance.parent.provides : v=
oid 0;
      if (provides &amp;&amp; key in provides) {
        return provides[key];
      } else if (arguments.length &gt; 1) {
        return treatDefaultAsFactory &amp;&amp; isFunction(defaultValue) ? =
defaultValue.call(instance &amp;&amp; instance.proxy) : defaultValue;
      } else {
        warn$1(`injection "${String(key)}" not found.`);
      }
    } else {
      warn$1(`inject() can only be used inside setup() or functional compon=
ents.`);
    }
  }
  function hasInjectionContext() {
    return !!(currentInstance || currentRenderingInstance || currentApp);
  }

  const internalObjectProto =3D {};
  const createInternalObject =3D () =3D&gt; Object.create(internalObjectPro=
to);
  const isInternalObject =3D (obj) =3D&gt; Object.getPrototypeOf(obj) =3D=
=3D=3D internalObjectProto;

  function initProps(instance, rawProps, isStateful, isSSR =3D false) {
    const props =3D {};
    const attrs =3D createInternalObject();
    instance.propsDefaults =3D /* @__PURE__ */ Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    for (const key in instance.propsOptions[0]) {
      if (!(key in props)) {
        props[key] =3D void 0;
      }
    }
    {
      validateProps(rawProps || {}, props, instance);
    }
    if (isStateful) {
      instance.props =3D isSSR ? props : shallowReactive(props);
    } else {
      if (!instance.type.props) {
        instance.props =3D attrs;
      } else {
        instance.props =3D props;
      }
    }
    instance.attrs =3D attrs;
  }
  function isInHmrContext(instance) {
    while (instance) {
      if (instance.type.__hmrId) return true;
      instance =3D instance.parent;
    }
  }
  function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const {
      props,
      attrs,
      vnode: { patchFlag }
    } =3D instance;
    const rawCurrentProps =3D toRaw(props);
    const [options] =3D instance.propsOptions;
    let hasAttrsChanged =3D false;
    if (
      // always force full diff in dev
      // - #1942 if hmr is enabled with sfc component
      // - vite#872 non-sfc component used by sfc component
      !isInHmrContext(instance) &amp;&amp; (optimized || patchFlag &gt; 0) =
&amp;&amp; !(patchFlag &amp; 16)
    ) {
      if (patchFlag &amp; 8) {
        const propsToUpdate =3D instance.vnode.dynamicProps;
        for (let i =3D 0; i &lt; propsToUpdate.length; i++) {
          let key =3D propsToUpdate[i];
          if (isEmitListener(instance.emitsOptions, key)) {
            continue;
          }
          const value =3D rawProps[key];
          if (options) {
            if (hasOwn(attrs, key)) {
              if (value !=3D=3D attrs[key]) {
                attrs[key] =3D value;
                hasAttrsChanged =3D true;
              }
            } else {
              const camelizedKey =3D camelize(key);
              props[camelizedKey] =3D resolvePropValue(
                options,
                rawCurrentProps,
                camelizedKey,
                value,
                instance,
                false
              );
            }
          } else {
            if (value !=3D=3D attrs[key]) {
              attrs[key] =3D value;
              hasAttrsChanged =3D true;
            }
          }
        }
      }
    } else {
      if (setFullProps(instance, rawProps, props, attrs)) {
        hasAttrsChanged =3D true;
      }
      let kebabKey;
      for (const key in rawCurrentProps) {
        if (!rawProps || // for camelCase
        !hasOwn(rawProps, key) &amp;&amp; // it's possible the original pro=
ps was passed in as kebab-case
        // and converted to camelCase (#955)
        ((kebabKey =3D hyphenate(key)) =3D=3D=3D key || !hasOwn(rawProps, k=
ebabKey))) {
          if (options) {
            if (rawPrevProps &amp;&amp; // for camelCase
            (rawPrevProps[key] !=3D=3D void 0 || // for kebab-case
            rawPrevProps[kebabKey] !=3D=3D void 0)) {
              props[key] =3D resolvePropValue(
                options,
                rawCurrentProps,
                key,
                void 0,
                instance,
                true
              );
            }
          } else {
            delete props[key];
          }
        }
      }
      if (attrs !=3D=3D rawCurrentProps) {
        for (const key in attrs) {
          if (!rawProps || !hasOwn(rawProps, key) &amp;&amp; true) {
            delete attrs[key];
            hasAttrsChanged =3D true;
          }
        }
      }
    }
    if (hasAttrsChanged) {
      trigger(instance.attrs, "set", "");
    }
    {
      validateProps(rawProps || {}, props, instance);
    }
  }
  function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] =3D instance.propsOptions;
    let hasAttrsChanged =3D false;
    let rawCastValues;
    if (rawProps) {
      for (let key in rawProps) {
        if (isReservedProp(key)) {
          continue;
        }
        const value =3D rawProps[key];
        let camelKey;
        if (options &amp;&amp; hasOwn(options, camelKey =3D camelize(key)))=
 {
          if (!needCastKeys || !needCastKeys.includes(camelKey)) {
            props[camelKey] =3D value;
          } else {
            (rawCastValues || (rawCastValues =3D {}))[camelKey] =3D value;
          }
        } else if (!isEmitListener(instance.emitsOptions, key)) {
          if (!(key in attrs) || value !=3D=3D attrs[key]) {
            attrs[key] =3D value;
            hasAttrsChanged =3D true;
          }
        }
      }
    }
    if (needCastKeys) {
      const rawCurrentProps =3D toRaw(props);
      const castValues =3D rawCastValues || EMPTY_OBJ;
      for (let i =3D 0; i &lt; needCastKeys.length; i++) {
        const key =3D needCastKeys[i];
        props[key] =3D resolvePropValue(
          options,
          rawCurrentProps,
          key,
          castValues[key],
          instance,
          !hasOwn(castValues, key)
        );
      }
    }
    return hasAttrsChanged;
  }
  function resolvePropValue(options, props, key, value, instance, isAbsent)=
 {
    const opt =3D options[key];
    if (opt !=3D null) {
      const hasDefault =3D hasOwn(opt, "default");
      if (hasDefault &amp;&amp; value =3D=3D=3D void 0) {
        const defaultValue =3D opt.default;
        if (opt.type !=3D=3D Function &amp;&amp; !opt.skipFactory &amp;&amp=
; isFunction(defaultValue)) {
          const { propsDefaults } =3D instance;
          if (key in propsDefaults) {
            value =3D propsDefaults[key];
          } else {
            const reset =3D setCurrentInstance(instance);
            value =3D propsDefaults[key] =3D defaultValue.call(
              null,
              props
            );
            reset();
          }
        } else {
          value =3D defaultValue;
        }
        if (instance.ce) {
          instance.ce._setProp(key, value);
        }
      }
      if (opt[0 /* shouldCast */]) {
        if (isAbsent &amp;&amp; !hasDefault) {
          value =3D false;
        } else if (opt[1 /* shouldCastTrue */] &amp;&amp; (value =3D=3D=3D =
"" || value =3D=3D=3D hyphenate(key))) {
          value =3D true;
        }
      }
    }
    return value;
  }
  const mixinPropsCache =3D /* @__PURE__ */ new WeakMap();
  function normalizePropsOptions(comp, appContext, asMixin =3D false) {
    const cache =3D asMixin ? mixinPropsCache : appContext.propsCache;
    const cached =3D cache.get(comp);
    if (cached) {
      return cached;
    }
    const raw =3D comp.props;
    const normalized =3D {};
    const needCastKeys =3D [];
    let hasExtends =3D false;
    if (!isFunction(comp)) {
      const extendProps =3D (raw2) =3D&gt; {
        hasExtends =3D true;
        const [props, keys] =3D normalizePropsOptions(raw2, appContext, tru=
e);
        extend(normalized, props);
        if (keys) needCastKeys.push(...keys);
      };
      if (!asMixin &amp;&amp; appContext.mixins.length) {
        appContext.mixins.forEach(extendProps);
      }
      if (comp.extends) {
        extendProps(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendProps);
      }
    }
    if (!raw &amp;&amp; !hasExtends) {
      if (isObject(comp)) {
        cache.set(comp, EMPTY_ARR);
      }
      return EMPTY_ARR;
    }
    if (isArray(raw)) {
      for (let i =3D 0; i &lt; raw.length; i++) {
        if (!isString(raw[i])) {
          warn$1(`props must be strings when using array syntax.`, raw[i]);
        }
        const normalizedKey =3D camelize(raw[i]);
        if (validatePropName(normalizedKey)) {
          normalized[normalizedKey] =3D EMPTY_OBJ;
        }
      }
    } else if (raw) {
      if (!isObject(raw)) {
        warn$1(`invalid props options`, raw);
      }
      for (const key in raw) {
        const normalizedKey =3D camelize(key);
        if (validatePropName(normalizedKey)) {
          const opt =3D raw[key];
          const prop =3D normalized[normalizedKey] =3D isArray(opt) || isFu=
nction(opt) ? { type: opt } : extend({}, opt);
          const propType =3D prop.type;
          let shouldCast =3D false;
          let shouldCastTrue =3D true;
          if (isArray(propType)) {
            for (let index =3D 0; index &lt; propType.length; ++index) {
              const type =3D propType[index];
              const typeName =3D isFunction(type) &amp;&amp; type.name;
              if (typeName =3D=3D=3D "Boolean") {
                shouldCast =3D true;
                break;
              } else if (typeName =3D=3D=3D "String") {
                shouldCastTrue =3D false;
              }
            }
          } else {
            shouldCast =3D isFunction(propType) &amp;&amp; propType.name =
=3D=3D=3D "Boolean";
          }
          prop[0 /* shouldCast */] =3D shouldCast;
          prop[1 /* shouldCastTrue */] =3D shouldCastTrue;
          if (shouldCast || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
    const res =3D [normalized, needCastKeys];
    if (isObject(comp)) {
      cache.set(comp, res);
    }
    return res;
  }
  function validatePropName(key) {
    if (key[0] !=3D=3D "$" &amp;&amp; !isReservedProp(key)) {
      return true;
    } else {
      warn$1(`Invalid prop name: "${key}" is a reserved property.`);
    }
    return false;
  }
  function getType(ctor) {
    if (ctor =3D=3D=3D null) {
      return "null";
    }
    if (typeof ctor =3D=3D=3D "function") {
      return ctor.name || "";
    } else if (typeof ctor =3D=3D=3D "object") {
      const name =3D ctor.constructor &amp;&amp; ctor.constructor.name;
      return name || "";
    }
    return "";
  }
  function validateProps(rawProps, props, instance) {
    const resolvedValues =3D toRaw(props);
    const options =3D instance.propsOptions[0];
    const camelizePropsKey =3D Object.keys(rawProps).map((key) =3D&gt; came=
lize(key));
    for (const key in options) {
      let opt =3D options[key];
      if (opt =3D=3D null) continue;
      validateProp(
        key,
        resolvedValues[key],
        opt,
        shallowReadonly(resolvedValues) ,
        !camelizePropsKey.includes(key)
      );
    }
  }
  function validateProp(name, value, prop, props, isAbsent) {
    const { type, required, validator, skipCheck } =3D prop;
    if (required &amp;&amp; isAbsent) {
      warn$1('Missing required prop: "' + name + '"');
      return;
    }
    if (value =3D=3D null &amp;&amp; !required) {
      return;
    }
    if (type !=3D null &amp;&amp; type !=3D=3D true &amp;&amp; !skipCheck) =
{
      let isValid =3D false;
      const types =3D isArray(type) ? type : [type];
      const expectedTypes =3D [];
      for (let i =3D 0; i &lt; types.length &amp;&amp; !isValid; i++) {
        const { valid, expectedType } =3D assertType(value, types[i]);
        expectedTypes.push(expectedType || "");
        isValid =3D valid;
      }
      if (!isValid) {
        warn$1(getInvalidTypeMessage(name, value, expectedTypes));
        return;
      }
    }
    if (validator &amp;&amp; !validator(value, props)) {
      warn$1('Invalid prop: custom validator check failed for prop "' + nam=
e + '".');
    }
  }
  const isSimpleType =3D /* @__PURE__ */ makeMap(
    "String,Number,Boolean,Function,Symbol,BigInt"
  );
  function assertType(value, type) {
    let valid;
    const expectedType =3D getType(type);
    if (expectedType =3D=3D=3D "null") {
      valid =3D value =3D=3D=3D null;
    } else if (isSimpleType(expectedType)) {
      const t =3D typeof value;
      valid =3D t =3D=3D=3D expectedType.toLowerCase();
      if (!valid &amp;&amp; t =3D=3D=3D "object") {
        valid =3D value instanceof type;
      }
    } else if (expectedType =3D=3D=3D "Object") {
      valid =3D isObject(value);
    } else if (expectedType =3D=3D=3D "Array") {
      valid =3D isArray(value);
    } else {
      valid =3D value instanceof type;
    }
    return {
      valid,
      expectedType
    };
  }
  function getInvalidTypeMessage(name, value, expectedTypes) {
    if (expectedTypes.length =3D=3D=3D 0) {
      return `Prop type [] for prop "${name}" won't match anything. Did you=
 mean to use type Array instead?`;
    }
    let message =3D `Invalid prop: type check failed for prop "${name}". Ex=
pected ${expectedTypes.map(capitalize).join(" | ")}`;
    const expectedType =3D expectedTypes[0];
    const receivedType =3D toRawType(value);
    const expectedValue =3D styleValue(value, expectedType);
    const receivedValue =3D styleValue(value, receivedType);
    if (expectedTypes.length =3D=3D=3D 1 &amp;&amp; isExplicable(expectedTy=
pe) &amp;&amp; !isBoolean(expectedType, receivedType)) {
      message +=3D ` with value ${expectedValue}`;
    }
    message +=3D `, got ${receivedType} `;
    if (isExplicable(receivedType)) {
      message +=3D `with value ${receivedValue}.`;
    }
    return message;
  }
  function styleValue(value, type) {
    if (type =3D=3D=3D "String") {
      return `"${value}"`;
    } else if (type =3D=3D=3D "Number") {
      return `${Number(value)}`;
    } else {
      return `${value}`;
    }
  }
  function isExplicable(type) {
    const explicitTypes =3D ["string", "number", "boolean"];
    return explicitTypes.some((elem) =3D&gt; type.toLowerCase() =3D=3D=3D e=
lem);
  }
  function isBoolean(...args) {
    return args.some((elem) =3D&gt; elem.toLowerCase() =3D=3D=3D "boolean")=
;
  }

  const isInternalKey =3D (key) =3D&gt; key[0] =3D=3D=3D "_" || key =3D=3D=
=3D "$stable";
  const normalizeSlotValue =3D (value) =3D&gt; isArray(value) ? value.map(n=
ormalizeVNode) : [normalizeVNode(value)];
  const normalizeSlot =3D (key, rawSlot, ctx) =3D&gt; {
    if (rawSlot._n) {
      return rawSlot;
    }
    const normalized =3D withCtx((...args) =3D&gt; {
      if (currentInstance &amp;&amp; !(ctx =3D=3D=3D null &amp;&amp; curren=
tRenderingInstance) &amp;&amp; !(ctx &amp;&amp; ctx.root !=3D=3D currentIns=
tance.root)) {
        warn$1(
          `Slot "${key}" invoked outside of the render function: this will =
not track dependencies used in the slot. Invoke the slot function inside th=
e render function instead.`
        );
      }
      return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c =3D false;
    return normalized;
  };
  const normalizeObjectSlots =3D (rawSlots, slots, instance) =3D&gt; {
    const ctx =3D rawSlots._ctx;
    for (const key in rawSlots) {
      if (isInternalKey(key)) continue;
      const value =3D rawSlots[key];
      if (isFunction(value)) {
        slots[key] =3D normalizeSlot(key, value, ctx);
      } else if (value !=3D null) {
        {
          warn$1(
            `Non-function value encountered for slot "${key}". Prefer funct=
ion slots for better performance.`
          );
        }
        const normalized =3D normalizeSlotValue(value);
        slots[key] =3D () =3D&gt; normalized;
      }
    }
  };
  const normalizeVNodeSlots =3D (instance, children) =3D&gt; {
    if (!isKeepAlive(instance.vnode) &amp;&amp; true) {
      warn$1(
        `Non-function value encountered for default slot. Prefer function s=
lots for better performance.`
      );
    }
    const normalized =3D normalizeSlotValue(children);
    instance.slots.default =3D () =3D&gt; normalized;
  };
  const assignSlots =3D (slots, children, optimized) =3D&gt; {
    for (const key in children) {
      if (optimized || !isInternalKey(key)) {
        slots[key] =3D children[key];
      }
    }
  };
  const initSlots =3D (instance, children, optimized) =3D&gt; {
    const slots =3D instance.slots =3D createInternalObject();
    if (instance.vnode.shapeFlag &amp; 32) {
      const cacheIndexes =3D children.__;
      if (cacheIndexes) def(slots, "__", cacheIndexes, true);
      const type =3D children._;
      if (type) {
        assignSlots(slots, children, optimized);
        if (optimized) {
          def(slots, "_", type, true);
        }
      } else {
        normalizeObjectSlots(children, slots);
      }
    } else if (children) {
      normalizeVNodeSlots(instance, children);
    }
  };
  const updateSlots =3D (instance, children, optimized) =3D&gt; {
    const { vnode, slots } =3D instance;
    let needDeletionCheck =3D true;
    let deletionComparisonTarget =3D EMPTY_OBJ;
    if (vnode.shapeFlag &amp; 32) {
      const type =3D children._;
      if (type) {
        if (isHmrUpdating) {
          assignSlots(slots, children, optimized);
          trigger(instance, "set", "$slots");
        } else if (optimized &amp;&amp; type =3D=3D=3D 1) {
          needDeletionCheck =3D false;
        } else {
          assignSlots(slots, children, optimized);
        }
      } else {
        needDeletionCheck =3D !children.$stable;
        normalizeObjectSlots(children, slots);
      }
      deletionComparisonTarget =3D children;
    } else if (children) {
      normalizeVNodeSlots(instance, children);
      deletionComparisonTarget =3D { default: 1 };
    }
    if (needDeletionCheck) {
      for (const key in slots) {
        if (!isInternalKey(key) &amp;&amp; deletionComparisonTarget[key] =
=3D=3D null) {
          delete slots[key];
        }
      }
    }
  };

  let supported;
  let perf;
  function startMeasure(instance, type) {
    if (instance.appContext.config.performance &amp;&amp; isSupported()) {
      perf.mark(`vue-${type}-${instance.uid}`);
    }
    {
      devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.n=
ow());
    }
  }
  function endMeasure(instance, type) {
    if (instance.appContext.config.performance &amp;&amp; isSupported()) {
      const startTag =3D `vue-${type}-${instance.uid}`;
      const endTag =3D startTag + `:end`;
      perf.mark(endTag);
      perf.measure(
        `&lt;${formatComponentName(instance, instance.type)}&gt; ${type}`,
        startTag,
        endTag
      );
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
    }
    {
      devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now=
());
    }
  }
  function isSupported() {
    if (supported !=3D=3D void 0) {
      return supported;
    }
    if (typeof window !=3D=3D "undefined" &amp;&amp; window.performance) {
      supported =3D true;
      perf =3D window.performance;
    } else {
      supported =3D false;
    }
    return supported;
  }

  const queuePostRenderEffect =3D queueEffectWithSuspense ;
  function createRenderer(options) {
    return baseCreateRenderer(options);
  }
  function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
  }
  function baseCreateRenderer(options, createHydrationFns) {
    const target =3D getGlobalThis();
    target.__VUE__ =3D true;
    {
      setDevtoolsHook$1(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    }
    const {
      insert: hostInsert,
      remove: hostRemove,
      patchProp: hostPatchProp,
      createElement: hostCreateElement,
      createText: hostCreateText,
      createComment: hostCreateComment,
      setText: hostSetText,
      setElementText: hostSetElementText,
      parentNode: hostParentNode,
      nextSibling: hostNextSibling,
      setScopeId: hostSetScopeId =3D NOOP,
      insertStaticContent: hostInsertStaticContent
    } =3D options;
    const patch =3D (n1, n2, container, anchor =3D null, parentComponent =
=3D null, parentSuspense =3D null, namespace =3D void 0, slotScopeIds =3D n=
ull, optimized =3D isHmrUpdating ? false : !!n2.dynamicChildren) =3D&gt; {
      if (n1 =3D=3D=3D n2) {
        return;
      }
      if (n1 &amp;&amp; !isSameVNodeType(n1, n2)) {
        anchor =3D getNextHostNode(n1);
        unmount(n1, parentComponent, parentSuspense, true);
        n1 =3D null;
      }
      if (n2.patchFlag =3D=3D=3D -2) {
        optimized =3D false;
        n2.dynamicChildren =3D null;
      }
      const { type, ref, shapeFlag } =3D n2;
      switch (type) {
        case Text:
          processText(n1, n2, container, anchor);
          break;
        case Comment:
          processCommentNode(n1, n2, container, anchor);
          break;
        case Static:
          if (n1 =3D=3D null) {
            mountStaticNode(n2, container, anchor, namespace);
          } else {
            patchStaticNode(n1, n2, container, namespace);
          }
          break;
        case Fragment:
          processFragment(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          break;
        default:
          if (shapeFlag &amp; 1) {
            processElement(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else if (shapeFlag &amp; 6) {
            processComponent(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else if (shapeFlag &amp; 64) {
            type.process(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized,
              internals
            );
          } else if (shapeFlag &amp; 128) {
            type.process(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized,
              internals
            );
          } else {
            warn$1("Invalid VNode type:", type, `(${typeof type})`);
          }
      }
      if (ref !=3D null &amp;&amp; parentComponent) {
        setRef(ref, n1 &amp;&amp; n1.ref, parentSuspense, n2 || n1, !n2);
      } else if (ref =3D=3D null &amp;&amp; n1 &amp;&amp; n1.ref !=3D null)=
 {
        setRef(n1.ref, null, parentSuspense, n1, true);
      }
    };
    const processText =3D (n1, n2, container, anchor) =3D&gt; {
      if (n1 =3D=3D null) {
        hostInsert(
          n2.el =3D hostCreateText(n2.children),
          container,
          anchor
        );
      } else {
        const el =3D n2.el =3D n1.el;
        if (n2.children !=3D=3D n1.children) {
          hostSetText(el, n2.children);
        }
      }
    };
    const processCommentNode =3D (n1, n2, container, anchor) =3D&gt; {
      if (n1 =3D=3D null) {
        hostInsert(
          n2.el =3D hostCreateComment(n2.children || ""),
          container,
          anchor
        );
      } else {
        n2.el =3D n1.el;
      }
    };
    const mountStaticNode =3D (n2, container, anchor, namespace) =3D&gt; {
      [n2.el, n2.anchor] =3D hostInsertStaticContent(
        n2.children,
        container,
        anchor,
        namespace,
        n2.el,
        n2.anchor
      );
    };
    const patchStaticNode =3D (n1, n2, container, namespace) =3D&gt; {
      if (n2.children !=3D=3D n1.children) {
        const anchor =3D hostNextSibling(n1.anchor);
        removeStaticNode(n1);
        [n2.el, n2.anchor] =3D hostInsertStaticContent(
          n2.children,
          container,
          anchor,
          namespace
        );
      } else {
        n2.el =3D n1.el;
        n2.anchor =3D n1.anchor;
      }
    };
    const moveStaticNode =3D ({ el, anchor }, container, nextSibling) =3D&g=
t; {
      let next;
      while (el &amp;&amp; el !=3D=3D anchor) {
        next =3D hostNextSibling(el);
        hostInsert(el, container, nextSibling);
        el =3D next;
      }
      hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode =3D ({ el, anchor }) =3D&gt; {
      let next;
      while (el &amp;&amp; el !=3D=3D anchor) {
        next =3D hostNextSibling(el);
        hostRemove(el);
        el =3D next;
      }
      hostRemove(anchor);
    };
    const processElement =3D (n1, n2, container, anchor, parentComponent, p=
arentSuspense, namespace, slotScopeIds, optimized) =3D&gt; {
      if (n2.type =3D=3D=3D "svg") {
        namespace =3D "svg";
      } else if (n2.type =3D=3D=3D "math") {
        namespace =3D "mathml";
      }
      if (n1 =3D=3D null) {
        mountElement(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        patchElement(
          n1,
          n2,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    };
    const mountElement =3D (vnode, container, anchor, parentComponent, pare=
ntSuspense, namespace, slotScopeIds, optimized) =3D&gt; {
      let el;
      let vnodeHook;
      const { props, shapeFlag, transition, dirs } =3D vnode;
      el =3D vnode.el =3D hostCreateElement(
        vnode.type,
        namespace,
        props &amp;&amp; props.is,
        props
      );
      if (shapeFlag &amp; 8) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag &amp; 16) {
        mountChildren(
          vnode.children,
          el,
          null,
          parentComponent,
          parentSuspense,
          resolveChildrenNamespace(vnode, namespace),
          slotScopeIds,
          optimized
        );
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
      if (props) {
        for (const key in props) {
          if (key !=3D=3D "value" &amp;&amp; !isReservedProp(key)) {
            hostPatchProp(el, key, null, props[key], namespace, parentCompo=
nent);
          }
        }
        if ("value" in props) {
          hostPatchProp(el, "value", null, props.value, namespace);
        }
        if (vnodeHook =3D props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      }
      {
        def(el, "__vnode", vnode, true);
        def(el, "__vueParentComponent", parentComponent, true);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      const needCallTransitionHooks =3D needTransition(parentSuspense, tran=
sition);
      if (needCallTransitionHooks) {
        transition.beforeEnter(el);
      }
      hostInsert(el, container, anchor);
      if ((vnodeHook =3D props &amp;&amp; props.onVnodeMounted) || needCall=
TransitionHooks || dirs) {
        queuePostRenderEffect(() =3D&gt; {
          vnodeHook &amp;&amp; invokeVNodeHook(vnodeHook, parentComponent, =
vnode);
          needCallTransitionHooks &amp;&amp; transition.enter(el);
          dirs &amp;&amp; invokeDirectiveHook(vnode, null, parentComponent,=
 "mounted");
        }, parentSuspense);
      }
    };
    const setScopeId =3D (el, vnode, scopeId, slotScopeIds, parentComponent=
) =3D&gt; {
      if (scopeId) {
        hostSetScopeId(el, scopeId);
      }
      if (slotScopeIds) {
        for (let i =3D 0; i &lt; slotScopeIds.length; i++) {
          hostSetScopeId(el, slotScopeIds[i]);
        }
      }
      if (parentComponent) {
        let subTree =3D parentComponent.subTree;
        if (subTree.patchFlag &gt; 0 &amp;&amp; subTree.patchFlag &amp; 204=
8) {
          subTree =3D filterSingleRoot(subTree.children) || subTree;
        }
        if (vnode =3D=3D=3D subTree || isSuspense(subTree.type) &amp;&amp; =
(subTree.ssContent =3D=3D=3D vnode || subTree.ssFallback =3D=3D=3D vnode)) =
{
          const parentVNode =3D parentComponent.vnode;
          setScopeId(
            el,
            parentVNode,
            parentVNode.scopeId,
            parentVNode.slotScopeIds,
            parentComponent.parent
          );
        }
      }
    };
    const mountChildren =3D (children, container, anchor, parentComponent, =
parentSuspense, namespace, slotScopeIds, optimized, start =3D 0) =3D&gt; {
      for (let i =3D start; i &lt; children.length; i++) {
        const child =3D children[i] =3D optimized ? cloneIfMounted(children=
[i]) : normalizeVNode(children[i]);
        patch(
          null,
          child,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    };
    const patchElement =3D (n1, n2, parentComponent, parentSuspense, namesp=
ace, slotScopeIds, optimized) =3D&gt; {
      const el =3D n2.el =3D n1.el;
      {
        el.__vnode =3D n2;
      }
      let { patchFlag, dynamicChildren, dirs } =3D n2;
      patchFlag |=3D n1.patchFlag &amp; 16;
      const oldProps =3D n1.props || EMPTY_OBJ;
      const newProps =3D n2.props || EMPTY_OBJ;
      let vnodeHook;
      parentComponent &amp;&amp; toggleRecurse(parentComponent, false);
      if (vnodeHook =3D newProps.onVnodeBeforeUpdate) {
        invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
      }
      if (dirs) {
        invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
      }
      parentComponent &amp;&amp; toggleRecurse(parentComponent, true);
      if (isHmrUpdating) {
        patchFlag =3D 0;
        optimized =3D false;
        dynamicChildren =3D null;
      }
      if (oldProps.innerHTML &amp;&amp; newProps.innerHTML =3D=3D null || o=
ldProps.textContent &amp;&amp; newProps.textContent =3D=3D null) {
        hostSetElementText(el, "");
      }
      if (dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          el,
          parentComponent,
          parentSuspense,
          resolveChildrenNamespace(n2, namespace),
          slotScopeIds
        );
        {
          traverseStaticChildren(n1, n2);
        }
      } else if (!optimized) {
        patchChildren(
          n1,
          n2,
          el,
          null,
          parentComponent,
          parentSuspense,
          resolveChildrenNamespace(n2, namespace),
          slotScopeIds,
          false
        );
      }
      if (patchFlag &gt; 0) {
        if (patchFlag &amp; 16) {
          patchProps(el, oldProps, newProps, parentComponent, namespace);
        } else {
          if (patchFlag &amp; 2) {
            if (oldProps.class !=3D=3D newProps.class) {
              hostPatchProp(el, "class", null, newProps.class, namespace);
            }
          }
          if (patchFlag &amp; 4) {
            hostPatchProp(el, "style", oldProps.style, newProps.style, name=
space);
          }
          if (patchFlag &amp; 8) {
            const propsToUpdate =3D n2.dynamicProps;
            for (let i =3D 0; i &lt; propsToUpdate.length; i++) {
              const key =3D propsToUpdate[i];
              const prev =3D oldProps[key];
              const next =3D newProps[key];
              if (next !=3D=3D prev || key =3D=3D=3D "value") {
                hostPatchProp(el, key, prev, next, namespace, parentCompone=
nt);
              }
            }
          }
        }
        if (patchFlag &amp; 1) {
          if (n1.children !=3D=3D n2.children) {
            hostSetElementText(el, n2.children);
          }
        }
      } else if (!optimized &amp;&amp; dynamicChildren =3D=3D null) {
        patchProps(el, oldProps, newProps, parentComponent, namespace);
      }
      if ((vnodeHook =3D newProps.onVnodeUpdated) || dirs) {
        queuePostRenderEffect(() =3D&gt; {
          vnodeHook &amp;&amp; invokeVNodeHook(vnodeHook, parentComponent, =
n2, n1);
          dirs &amp;&amp; invokeDirectiveHook(n2, n1, parentComponent, "upd=
ated");
        }, parentSuspense);
      }
    };
    const patchBlockChildren =3D (oldChildren, newChildren, fallbackContain=
er, parentComponent, parentSuspense, namespace, slotScopeIds) =3D&gt; {
      for (let i =3D 0; i &lt; newChildren.length; i++) {
        const oldVNode =3D oldChildren[i];
        const newVNode =3D newChildren[i];
        const container =3D (
          // oldVNode may be an errored async setup() component inside Susp=
ense
          // which will not have a mounted element
          oldVNode.el &amp;&amp; // - In the case of a Fragment, we need to=
 provide the actual parent
          // of the Fragment itself so it can move its children.
          (oldVNode.type =3D=3D=3D Fragment || // - In the case of differen=
t nodes, there is going to be a replacement
          // which also requires the correct parent container
          !isSameVNodeType(oldVNode, newVNode) || // - In the case of a com=
ponent, it could contain anything.
          oldVNode.shapeFlag &amp; (6 | 64 | 128)) ? hostParentNode(oldVNod=
e.el) : (
            // In other cases, the parent container is not actually used so=
 we
            // just pass the block element here to avoid a DOM parentNode c=
all.
            fallbackContainer
          )
        );
        patch(
          oldVNode,
          newVNode,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          true
        );
      }
    };
    const patchProps =3D (el, oldProps, newProps, parentComponent, namespac=
e) =3D&gt; {
      if (oldProps !=3D=3D newProps) {
        if (oldProps !=3D=3D EMPTY_OBJ) {
          for (const key in oldProps) {
            if (!isReservedProp(key) &amp;&amp; !(key in newProps)) {
              hostPatchProp(
                el,
                key,
                oldProps[key],
                null,
                namespace,
                parentComponent
              );
            }
          }
        }
        for (const key in newProps) {
          if (isReservedProp(key)) continue;
          const next =3D newProps[key];
          const prev =3D oldProps[key];
          if (next !=3D=3D prev &amp;&amp; key !=3D=3D "value") {
            hostPatchProp(el, key, prev, next, namespace, parentComponent);
          }
        }
        if ("value" in newProps) {
          hostPatchProp(el, "value", oldProps.value, newProps.value, namesp=
ace);
        }
      }
    };
    const processFragment =3D (n1, n2, container, anchor, parentComponent, =
parentSuspense, namespace, slotScopeIds, optimized) =3D&gt; {
      const fragmentStartAnchor =3D n2.el =3D n1 ? n1.el : hostCreateText("=
");
      const fragmentEndAnchor =3D n2.anchor =3D n1 ? n1.anchor : hostCreate=
Text("");
      let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds =
} =3D n2;
      if (
        // #5523 dev root fragment may inherit directives
        isHmrUpdating || patchFlag &amp; 2048
      ) {
        patchFlag =3D 0;
        optimized =3D false;
        dynamicChildren =3D null;
      }
      if (fragmentSlotScopeIds) {
        slotScopeIds =3D slotScopeIds ? slotScopeIds.concat(fragmentSlotSco=
peIds) : fragmentSlotScopeIds;
      }
      if (n1 =3D=3D null) {
        hostInsert(fragmentStartAnchor, container, anchor);
        hostInsert(fragmentEndAnchor, container, anchor);
        mountChildren(
          // #10007
          // such fragment like `&lt;&gt;&lt;/&gt;` will be compiled into
          // a fragment which doesn't have a children.
          // In this case fallback to an empty array
          n2.children || [],
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        if (patchFlag &gt; 0 &amp;&amp; patchFlag &amp; 64 &amp;&amp; dynam=
icChildren &amp;&amp; // #2715 the previous fragment could've been a BAILed=
 one as a result
        // of renderSlot() with no valid children
        n1.dynamicChildren) {
          patchBlockChildren(
            n1.dynamicChildren,
            dynamicChildren,
            container,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds
          );
          {
            traverseStaticChildren(n1, n2);
          }
        } else {
          patchChildren(
            n1,
            n2,
            container,
            fragmentEndAnchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      }
    };
    const processComponent =3D (n1, n2, container, anchor, parentComponent,=
 parentSuspense, namespace, slotScopeIds, optimized) =3D&gt; {
      n2.slotScopeIds =3D slotScopeIds;
      if (n1 =3D=3D null) {
        if (n2.shapeFlag &amp; 512) {
          parentComponent.ctx.activate(
            n2,
            container,
            anchor,
            namespace,
            optimized
          );
        } else {
          mountComponent(
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            optimized
          );
        }
      } else {
        updateComponent(n1, n2, optimized);
      }
    };
    const mountComponent =3D (initialVNode, container, anchor, parentCompon=
ent, parentSuspense, namespace, optimized) =3D&gt; {
      const instance =3D (initialVNode.component =3D createComponentInstanc=
e(
        initialVNode,
        parentComponent,
        parentSuspense
      ));
      if (instance.type.__hmrId) {
        registerHMR(instance);
      }
      {
        pushWarningContext(initialVNode);
        startMeasure(instance, `mount`);
      }
      if (isKeepAlive(initialVNode)) {
        instance.ctx.renderer =3D internals;
      }
      {
        {
          startMeasure(instance, `init`);
        }
        setupComponent(instance, false, optimized);
        {
          endMeasure(instance, `init`);
        }
      }
      if (isHmrUpdating) initialVNode.el =3D null;
      if (instance.asyncDep) {
        parentSuspense &amp;&amp; parentSuspense.registerDep(instance, setu=
pRenderEffect, optimized);
        if (!initialVNode.el) {
          const placeholder =3D instance.subTree =3D createVNode(Comment);
          processCommentNode(null, placeholder, container, anchor);
        }
      } else {
        setupRenderEffect(
          instance,
          initialVNode,
          container,
          anchor,
          parentSuspense,
          namespace,
          optimized
        );
      }
      {
        popWarningContext();
        endMeasure(instance, `mount`);
      }
    };
    const updateComponent =3D (n1, n2, optimized) =3D&gt; {
      const instance =3D n2.component =3D n1.component;
      if (shouldUpdateComponent(n1, n2, optimized)) {
        if (instance.asyncDep &amp;&amp; !instance.asyncResolved) {
          {
            pushWarningContext(n2);
          }
          updateComponentPreRender(instance, n2, optimized);
          {
            popWarningContext();
          }
          return;
        } else {
          instance.next =3D n2;
          instance.update();
        }
      } else {
        n2.el =3D n1.el;
        instance.vnode =3D n2;
      }
    };
    const setupRenderEffect =3D (instance, initialVNode, container, anchor,=
 parentSuspense, namespace, optimized) =3D&gt; {
      const componentUpdateFn =3D () =3D&gt; {
        if (!instance.isMounted) {
          let vnodeHook;
          const { el, props } =3D initialVNode;
          const { bm, m, parent, root, type } =3D instance;
          const isAsyncWrapperVNode =3D isAsyncWrapper(initialVNode);
          toggleRecurse(instance, false);
          if (bm) {
            invokeArrayFns(bm);
          }
          if (!isAsyncWrapperVNode &amp;&amp; (vnodeHook =3D props &amp;&am=
p; props.onVnodeBeforeMount)) {
            invokeVNodeHook(vnodeHook, parent, initialVNode);
          }
          toggleRecurse(instance, true);
          if (el &amp;&amp; hydrateNode) {
            const hydrateSubTree =3D () =3D&gt; {
              {
                startMeasure(instance, `render`);
              }
              instance.subTree =3D renderComponentRoot(instance);
              {
                endMeasure(instance, `render`);
              }
              {
                startMeasure(instance, `hydrate`);
              }
              hydrateNode(
                el,
                instance.subTree,
                instance,
                parentSuspense,
                null
              );
              {
                endMeasure(instance, `hydrate`);
              }
            };
            if (isAsyncWrapperVNode &amp;&amp; type.__asyncHydrate) {
              type.__asyncHydrate(
                el,
                instance,
                hydrateSubTree
              );
            } else {
              hydrateSubTree();
            }
          } else {
            if (root.ce &amp;&amp; // @ts-expect-error _def is private
            root.ce._def.shadowRoot !=3D=3D false) {
              root.ce._injectChildStyle(type);
            }
            {
              startMeasure(instance, `render`);
            }
            const subTree =3D instance.subTree =3D renderComponentRoot(inst=
ance);
            {
              endMeasure(instance, `render`);
            }
            {
              startMeasure(instance, `patch`);
            }
            patch(
              null,
              subTree,
              container,
              anchor,
              instance,
              parentSuspense,
              namespace
            );
            {
              endMeasure(instance, `patch`);
            }
            initialVNode.el =3D subTree.el;
          }
          if (m) {
            queuePostRenderEffect(m, parentSuspense);
          }
          if (!isAsyncWrapperVNode &amp;&amp; (vnodeHook =3D props &amp;&am=
p; props.onVnodeMounted)) {
            const scopedInitialVNode =3D initialVNode;
            queuePostRenderEffect(
              () =3D&gt; invokeVNodeHook(vnodeHook, parent, scopedInitialVN=
ode),
              parentSuspense
            );
          }
          if (initialVNode.shapeFlag &amp; 256 || parent &amp;&amp; isAsync=
Wrapper(parent.vnode) &amp;&amp; parent.vnode.shapeFlag &amp; 256) {
            instance.a &amp;&amp; queuePostRenderEffect(instance.a, parentS=
uspense);
          }
          instance.isMounted =3D true;
          {
            devtoolsComponentAdded(instance);
          }
          initialVNode =3D container =3D anchor =3D null;
        } else {
          let { next, bu, u, parent, vnode } =3D instance;
          {
            const nonHydratedAsyncRoot =3D locateNonHydratedAsyncRoot(insta=
nce);
            if (nonHydratedAsyncRoot) {
              if (next) {
                next.el =3D vnode.el;
                updateComponentPreRender(instance, next, optimized);
              }
              nonHydratedAsyncRoot.asyncDep.then(() =3D&gt; {
                if (!instance.isUnmounted) {
                  componentUpdateFn();
                }
              });
              return;
            }
          }
          let originNext =3D next;
          let vnodeHook;
          {
            pushWarningContext(next || instance.vnode);
          }
          toggleRecurse(instance, false);
          if (next) {
            next.el =3D vnode.el;
            updateComponentPreRender(instance, next, optimized);
          } else {
            next =3D vnode;
          }
          if (bu) {
            invokeArrayFns(bu);
          }
          if (vnodeHook =3D next.props &amp;&amp; next.props.onVnodeBeforeU=
pdate) {
            invokeVNodeHook(vnodeHook, parent, next, vnode);
          }
          toggleRecurse(instance, true);
          {
            startMeasure(instance, `render`);
          }
          const nextTree =3D renderComponentRoot(instance);
          {
            endMeasure(instance, `render`);
          }
          const prevTree =3D instance.subTree;
          instance.subTree =3D nextTree;
          {
            startMeasure(instance, `patch`);
          }
          patch(
            prevTree,
            nextTree,
            // parent may have changed if it's in a teleport
            hostParentNode(prevTree.el),
            // anchor may have changed if it's in a fragment
            getNextHostNode(prevTree),
            instance,
            parentSuspense,
            namespace
          );
          {
            endMeasure(instance, `patch`);
          }
          next.el =3D nextTree.el;
          if (originNext =3D=3D=3D null) {
            updateHOCHostEl(instance, nextTree.el);
          }
          if (u) {
            queuePostRenderEffect(u, parentSuspense);
          }
          if (vnodeHook =3D next.props &amp;&amp; next.props.onVnodeUpdated=
) {
            queuePostRenderEffect(
              () =3D&gt; invokeVNodeHook(vnodeHook, parent, next, vnode),
              parentSuspense
            );
          }
          {
            devtoolsComponentUpdated(instance);
          }
          {
            popWarningContext();
          }
        }
      };
      instance.scope.on();
      const effect =3D instance.effect =3D new ReactiveEffect(componentUpda=
teFn);
      instance.scope.off();
      const update =3D instance.update =3D effect.run.bind(effect);
      const job =3D instance.job =3D effect.runIfDirty.bind(effect);
      job.i =3D instance;
      job.id =3D instance.uid;
      effect.scheduler =3D () =3D&gt; queueJob(job);
      toggleRecurse(instance, true);
      {
        effect.onTrack =3D instance.rtc ? (e) =3D&gt; invokeArrayFns(instan=
ce.rtc, e) : void 0;
        effect.onTrigger =3D instance.rtg ? (e) =3D&gt; invokeArrayFns(inst=
ance.rtg, e) : void 0;
      }
      update();
    };
    const updateComponentPreRender =3D (instance, nextVNode, optimized) =3D=
&gt; {
      nextVNode.component =3D instance;
      const prevProps =3D instance.vnode.props;
      instance.vnode =3D nextVNode;
      instance.next =3D null;
      updateProps(instance, nextVNode.props, prevProps, optimized);
      updateSlots(instance, nextVNode.children, optimized);
      pauseTracking();
      flushPreFlushCbs(instance);
      resetTracking();
    };
    const patchChildren =3D (n1, n2, container, anchor, parentComponent, pa=
rentSuspense, namespace, slotScopeIds, optimized =3D false) =3D&gt; {
      const c1 =3D n1 &amp;&amp; n1.children;
      const prevShapeFlag =3D n1 ? n1.shapeFlag : 0;
      const c2 =3D n2.children;
      const { patchFlag, shapeFlag } =3D n2;
      if (patchFlag &gt; 0) {
        if (patchFlag &amp; 128) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          return;
        } else if (patchFlag &amp; 256) {
          patchUnkeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          return;
        }
      }
      if (shapeFlag &amp; 8) {
        if (prevShapeFlag &amp; 16) {
          unmountChildren(c1, parentComponent, parentSuspense);
        }
        if (c2 !=3D=3D c1) {
          hostSetElementText(container, c2);
        }
      } else {
        if (prevShapeFlag &amp; 16) {
          if (shapeFlag &amp; 16) {
            patchKeyedChildren(
              c1,
              c2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else {
            unmountChildren(c1, parentComponent, parentSuspense, true);
          }
        } else {
          if (prevShapeFlag &amp; 8) {
            hostSetElementText(container, "");
          }
          if (shapeFlag &amp; 16) {
            mountChildren(
              c2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          }
        }
      }
    };
    const patchUnkeyedChildren =3D (c1, c2, container, anchor, parentCompon=
ent, parentSuspense, namespace, slotScopeIds, optimized) =3D&gt; {
      c1 =3D c1 || EMPTY_ARR;
      c2 =3D c2 || EMPTY_ARR;
      const oldLength =3D c1.length;
      const newLength =3D c2.length;
      const commonLength =3D Math.min(oldLength, newLength);
      let i;
      for (i =3D 0; i &lt; commonLength; i++) {
        const nextChild =3D c2[i] =3D optimized ? cloneIfMounted(c2[i]) : n=
ormalizeVNode(c2[i]);
        patch(
          c1[i],
          nextChild,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
      if (oldLength &gt; newLength) {
        unmountChildren(
          c1,
          parentComponent,
          parentSuspense,
          true,
          false,
          commonLength
        );
      } else {
        mountChildren(
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized,
          commonLength
        );
      }
    };
    const patchKeyedChildren =3D (c1, c2, container, parentAnchor, parentCo=
mponent, parentSuspense, namespace, slotScopeIds, optimized) =3D&gt; {
      let i =3D 0;
      const l2 =3D c2.length;
      let e1 =3D c1.length - 1;
      let e2 =3D l2 - 1;
      while (i &lt;=3D e1 &amp;&amp; i &lt;=3D e2) {
        const n1 =3D c1[i];
        const n2 =3D c2[i] =3D optimized ? cloneIfMounted(c2[i]) : normaliz=
eVNode(c2[i]);
        if (isSameVNodeType(n1, n2)) {
          patch(
            n1,
            n2,
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          break;
        }
        i++;
      }
      while (i &lt;=3D e1 &amp;&amp; i &lt;=3D e2) {
        const n1 =3D c1[e1];
        const n2 =3D c2[e2] =3D optimized ? cloneIfMounted(c2[e2]) : normal=
izeVNode(c2[e2]);
        if (isSameVNodeType(n1, n2)) {
          patch(
            n1,
            n2,
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          break;
        }
        e1--;
        e2--;
      }
      if (i &gt; e1) {
        if (i &lt;=3D e2) {
          const nextPos =3D e2 + 1;
          const anchor =3D nextPos &lt; l2 ? c2[nextPos].el : parentAnchor;
          while (i &lt;=3D e2) {
            patch(
              null,
              c2[i] =3D optimized ? cloneIfMounted(c2[i]) : normalizeVNode(=
c2[i]),
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
            i++;
          }
        }
      } else if (i &gt; e2) {
        while (i &lt;=3D e1) {
          unmount(c1[i], parentComponent, parentSuspense, true);
          i++;
        }
      } else {
        const s1 =3D i;
        const s2 =3D i;
        const keyToNewIndexMap =3D /* @__PURE__ */ new Map();
        for (i =3D s2; i &lt;=3D e2; i++) {
          const nextChild =3D c2[i] =3D optimized ? cloneIfMounted(c2[i]) :=
 normalizeVNode(c2[i]);
          if (nextChild.key !=3D null) {
            if (keyToNewIndexMap.has(nextChild.key)) {
              warn$1(
                `Duplicate keys found during update:`,
                JSON.stringify(nextChild.key),
                `Make sure keys are unique.`
              );
            }
            keyToNewIndexMap.set(nextChild.key, i);
          }
        }
        let j;
        let patched =3D 0;
        const toBePatched =3D e2 - s2 + 1;
        let moved =3D false;
        let maxNewIndexSoFar =3D 0;
        const newIndexToOldIndexMap =3D new Array(toBePatched);
        for (i =3D 0; i &lt; toBePatched; i++) newIndexToOldIndexMap[i] =3D=
 0;
        for (i =3D s1; i &lt;=3D e1; i++) {
          const prevChild =3D c1[i];
          if (patched &gt;=3D toBePatched) {
            unmount(prevChild, parentComponent, parentSuspense, true);
            continue;
          }
          let newIndex;
          if (prevChild.key !=3D null) {
            newIndex =3D keyToNewIndexMap.get(prevChild.key);
          } else {
            for (j =3D s2; j &lt;=3D e2; j++) {
              if (newIndexToOldIndexMap[j - s2] =3D=3D=3D 0 &amp;&amp; isSa=
meVNodeType(prevChild, c2[j])) {
                newIndex =3D j;
                break;
              }
            }
          }
          if (newIndex =3D=3D=3D void 0) {
            unmount(prevChild, parentComponent, parentSuspense, true);
          } else {
            newIndexToOldIndexMap[newIndex - s2] =3D i + 1;
            if (newIndex &gt;=3D maxNewIndexSoFar) {
              maxNewIndexSoFar =3D newIndex;
            } else {
              moved =3D true;
            }
            patch(
              prevChild,
              c2[newIndex],
              container,
              null,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
            patched++;
          }
        }
        const increasingNewIndexSequence =3D moved ? getSequence(newIndexTo=
OldIndexMap) : EMPTY_ARR;
        j =3D increasingNewIndexSequence.length - 1;
        for (i =3D toBePatched - 1; i &gt;=3D 0; i--) {
          const nextIndex =3D s2 + i;
          const nextChild =3D c2[nextIndex];
          const anchor =3D nextIndex + 1 &lt; l2 ? c2[nextIndex + 1].el : p=
arentAnchor;
          if (newIndexToOldIndexMap[i] =3D=3D=3D 0) {
            patch(
              null,
              nextChild,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else if (moved) {
            if (j &lt; 0 || i !=3D=3D increasingNewIndexSequence[j]) {
              move(nextChild, container, anchor, 2);
            } else {
              j--;
            }
          }
        }
      }
    };
    const move =3D (vnode, container, anchor, moveType, parentSuspense =3D =
null) =3D&gt; {
      const { el, type, transition, children, shapeFlag } =3D vnode;
      if (shapeFlag &amp; 6) {
        move(vnode.component.subTree, container, anchor, moveType);
        return;
      }
      if (shapeFlag &amp; 128) {
        vnode.suspense.move(container, anchor, moveType);
        return;
      }
      if (shapeFlag &amp; 64) {
        type.move(vnode, container, anchor, internals);
        return;
      }
      if (type =3D=3D=3D Fragment) {
        hostInsert(el, container, anchor);
        for (let i =3D 0; i &lt; children.length; i++) {
          move(children[i], container, anchor, moveType);
        }
        hostInsert(vnode.anchor, container, anchor);
        return;
      }
      if (type =3D=3D=3D Static) {
        moveStaticNode(vnode, container, anchor);
        return;
      }
      const needTransition2 =3D moveType !=3D=3D 2 &amp;&amp; shapeFlag &am=
p; 1 &amp;&amp; transition;
      if (needTransition2) {
        if (moveType =3D=3D=3D 0) {
          transition.beforeEnter(el);
          hostInsert(el, container, anchor);
          queuePostRenderEffect(() =3D&gt; transition.enter(el), parentSusp=
ense);
        } else {
          const { leave, delayLeave, afterLeave } =3D transition;
          const remove2 =3D () =3D&gt; {
            if (vnode.ctx.isUnmounted) {
              hostRemove(el);
            } else {
              hostInsert(el, container, anchor);
            }
          };
          const performLeave =3D () =3D&gt; {
            leave(el, () =3D&gt; {
              remove2();
              afterLeave &amp;&amp; afterLeave();
            });
          };
          if (delayLeave) {
            delayLeave(el, remove2, performLeave);
          } else {
            performLeave();
          }
        }
      } else {
        hostInsert(el, container, anchor);
      }
    };
    const unmount =3D (vnode, parentComponent, parentSuspense, doRemove =3D=
 false, optimized =3D false) =3D&gt; {
      const {
        type,
        props,
        ref,
        children,
        dynamicChildren,
        shapeFlag,
        patchFlag,
        dirs,
        cacheIndex
      } =3D vnode;
      if (patchFlag =3D=3D=3D -2) {
        optimized =3D false;
      }
      if (ref !=3D null) {
        pauseTracking();
        setRef(ref, null, parentSuspense, vnode, true);
        resetTracking();
      }
      if (cacheIndex !=3D null) {
        parentComponent.renderCache[cacheIndex] =3D void 0;
      }
      if (shapeFlag &amp; 256) {
        parentComponent.ctx.deactivate(vnode);
        return;
      }
      const shouldInvokeDirs =3D shapeFlag &amp; 1 &amp;&amp; dirs;
      const shouldInvokeVnodeHook =3D !isAsyncWrapper(vnode);
      let vnodeHook;
      if (shouldInvokeVnodeHook &amp;&amp; (vnodeHook =3D props &amp;&amp; =
props.onVnodeBeforeUnmount)) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
      if (shapeFlag &amp; 6) {
        unmountComponent(vnode.component, parentSuspense, doRemove);
      } else {
        if (shapeFlag &amp; 128) {
          vnode.suspense.unmount(parentSuspense, doRemove);
          return;
        }
        if (shouldInvokeDirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount"=
);
        }
        if (shapeFlag &amp; 64) {
          vnode.type.remove(
            vnode,
            parentComponent,
            parentSuspense,
            internals,
            doRemove
          );
        } else if (dynamicChildren &amp;&amp; // #5154
        // when v-once is used inside a block, setBlockTracking(-1) marks t=
he
        // parent block with hasOnce: true
        // so that it doesn't take the fast path during unmount - otherwise
        // components nested in v-once are never unmounted.
        !dynamicChildren.hasOnce &amp;&amp; // #1153: fast path should not =
be taken for non-stable (v-for) fragments
        (type !=3D=3D Fragment || patchFlag &gt; 0 &amp;&amp; patchFlag &am=
p; 64)) {
          unmountChildren(
            dynamicChildren,
            parentComponent,
            parentSuspense,
            false,
            true
          );
        } else if (type =3D=3D=3D Fragment &amp;&amp; patchFlag &amp; (128 =
| 256) || !optimized &amp;&amp; shapeFlag &amp; 16) {
          unmountChildren(children, parentComponent, parentSuspense);
        }
        if (doRemove) {
          remove(vnode);
        }
      }
      if (shouldInvokeVnodeHook &amp;&amp; (vnodeHook =3D props &amp;&amp; =
props.onVnodeUnmounted) || shouldInvokeDirs) {
        queuePostRenderEffect(() =3D&gt; {
          vnodeHook &amp;&amp; invokeVNodeHook(vnodeHook, parentComponent, =
vnode);
          shouldInvokeDirs &amp;&amp; invokeDirectiveHook(vnode, null, pare=
ntComponent, "unmounted");
        }, parentSuspense);
      }
    };
    const remove =3D (vnode) =3D&gt; {
      const { type, el, anchor, transition } =3D vnode;
      if (type =3D=3D=3D Fragment) {
        if (vnode.patchFlag &gt; 0 &amp;&amp; vnode.patchFlag &amp; 2048 &a=
mp;&amp; transition &amp;&amp; !transition.persisted) {
          vnode.children.forEach((child) =3D&gt; {
            if (child.type =3D=3D=3D Comment) {
              hostRemove(child.el);
            } else {
              remove(child);
            }
          });
        } else {
          removeFragment(el, anchor);
        }
        return;
      }
      if (type =3D=3D=3D Static) {
        removeStaticNode(vnode);
        return;
      }
      const performRemove =3D () =3D&gt; {
        hostRemove(el);
        if (transition &amp;&amp; !transition.persisted &amp;&amp; transiti=
on.afterLeave) {
          transition.afterLeave();
        }
      };
      if (vnode.shapeFlag &amp; 1 &amp;&amp; transition &amp;&amp; !transit=
ion.persisted) {
        const { leave, delayLeave } =3D transition;
        const performLeave =3D () =3D&gt; leave(el, performRemove);
        if (delayLeave) {
          delayLeave(vnode.el, performRemove, performLeave);
        } else {
          performLeave();
        }
      } else {
        performRemove();
      }
    };
    const removeFragment =3D (cur, end) =3D&gt; {
      let next;
      while (cur !=3D=3D end) {
        next =3D hostNextSibling(cur);
        hostRemove(cur);
        cur =3D next;
      }
      hostRemove(end);
    };
    const unmountComponent =3D (instance, parentSuspense, doRemove) =3D&gt;=
 {
      if (instance.type.__hmrId) {
        unregisterHMR(instance);
      }
      const {
        bum,
        scope,
        job,
        subTree,
        um,
        m,
        a,
        parent,
        slots: { __: slotCacheKeys }
      } =3D instance;
      invalidateMount(m);
      invalidateMount(a);
      if (bum) {
        invokeArrayFns(bum);
      }
      if (parent &amp;&amp; isArray(slotCacheKeys)) {
        slotCacheKeys.forEach((v) =3D&gt; {
          parent.renderCache[v] =3D void 0;
        });
      }
      scope.stop();
      if (job) {
        job.flags |=3D 8;
        unmount(subTree, instance, parentSuspense, doRemove);
      }
      if (um) {
        queuePostRenderEffect(um, parentSuspense);
      }
      queuePostRenderEffect(() =3D&gt; {
        instance.isUnmounted =3D true;
      }, parentSuspense);
      if (parentSuspense &amp;&amp; parentSuspense.pendingBranch &amp;&amp;=
 !parentSuspense.isUnmounted &amp;&amp; instance.asyncDep &amp;&amp; !insta=
nce.asyncResolved &amp;&amp; instance.suspenseId =3D=3D=3D parentSuspense.p=
endingId) {
        parentSuspense.deps--;
        if (parentSuspense.deps =3D=3D=3D 0) {
          parentSuspense.resolve();
        }
      }
      {
        devtoolsComponentRemoved(instance);
      }
    };
    const unmountChildren =3D (children, parentComponent, parentSuspense, d=
oRemove =3D false, optimized =3D false, start =3D 0) =3D&gt; {
      for (let i =3D start; i &lt; children.length; i++) {
        unmount(children[i], parentComponent, parentSuspense, doRemove, opt=
imized);
      }
    };
    const getNextHostNode =3D (vnode) =3D&gt; {
      if (vnode.shapeFlag &amp; 6) {
        return getNextHostNode(vnode.component.subTree);
      }
      if (vnode.shapeFlag &amp; 128) {
        return vnode.suspense.next();
      }
      const el =3D hostNextSibling(vnode.anchor || vnode.el);
      const teleportEnd =3D el &amp;&amp; el[TeleportEndKey];
      return teleportEnd ? hostNextSibling(teleportEnd) : el;
    };
    let isFlushing =3D false;
    const render =3D (vnode, container, namespace) =3D&gt; {
      if (vnode =3D=3D null) {
        if (container._vnode) {
          unmount(container._vnode, null, null, true);
        }
      } else {
        patch(
          container._vnode || null,
          vnode,
          container,
          null,
          null,
          null,
          namespace
        );
      }
      container._vnode =3D vnode;
      if (!isFlushing) {
        isFlushing =3D true;
        flushPreFlushCbs();
        flushPostFlushCbs();
        isFlushing =3D false;
      }
    };
    const internals =3D {
      p: patch,
      um: unmount,
      m: move,
      r: remove,
      mt: mountComponent,
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      n: getNextHostNode,
      o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) {
      [hydrate, hydrateNode] =3D createHydrationFns(
        internals
      );
    }
    return {
      render,
      hydrate,
      createApp: createAppAPI(render, hydrate)
    };
  }
  function resolveChildrenNamespace({ type, props }, currentNamespace) {
    return currentNamespace =3D=3D=3D "svg" &amp;&amp; type =3D=3D=3D "fore=
ignObject" || currentNamespace =3D=3D=3D "mathml" &amp;&amp; type =3D=3D=3D=
 "annotation-xml" &amp;&amp; props &amp;&amp; props.encoding &amp;&amp; pro=
ps.encoding.includes("html") ? void 0 : currentNamespace;
  }
  function toggleRecurse({ effect, job }, allowed) {
    if (allowed) {
      effect.flags |=3D 32;
      job.flags |=3D 4;
    } else {
      effect.flags &amp;=3D -33;
      job.flags &amp;=3D -5;
    }
  }
  function needTransition(parentSuspense, transition) {
    return (!parentSuspense || parentSuspense &amp;&amp; !parentSuspense.pe=
ndingBranch) &amp;&amp; transition &amp;&amp; !transition.persisted;
  }
  function traverseStaticChildren(n1, n2, shallow =3D false) {
    const ch1 =3D n1.children;
    const ch2 =3D n2.children;
    if (isArray(ch1) &amp;&amp; isArray(ch2)) {
      for (let i =3D 0; i &lt; ch1.length; i++) {
        const c1 =3D ch1[i];
        let c2 =3D ch2[i];
        if (c2.shapeFlag &amp; 1 &amp;&amp; !c2.dynamicChildren) {
          if (c2.patchFlag &lt;=3D 0 || c2.patchFlag =3D=3D=3D 32) {
            c2 =3D ch2[i] =3D cloneIfMounted(ch2[i]);
            c2.el =3D c1.el;
          }
          if (!shallow &amp;&amp; c2.patchFlag !=3D=3D -2)
            traverseStaticChildren(c1, c2);
        }
        if (c2.type =3D=3D=3D Text) {
          c2.el =3D c1.el;
        }
        if (c2.type =3D=3D=3D Comment &amp;&amp; !c2.el) {
          c2.el =3D c1.el;
        }
        {
          c2.el &amp;&amp; (c2.el.__vnode =3D c2);
        }
      }
    }
  }
  function getSequence(arr) {
    const p =3D arr.slice();
    const result =3D [0];
    let i, j, u, v, c;
    const len =3D arr.length;
    for (i =3D 0; i &lt; len; i++) {
      const arrI =3D arr[i];
      if (arrI !=3D=3D 0) {
        j =3D result[result.length - 1];
        if (arr[j] &lt; arrI) {
          p[i] =3D j;
          result.push(i);
          continue;
        }
        u =3D 0;
        v =3D result.length - 1;
        while (u &lt; v) {
          c =3D u + v &gt;&gt; 1;
          if (arr[result[c]] &lt; arrI) {
            u =3D c + 1;
          } else {
            v =3D c;
          }
        }
        if (arrI &lt; arr[result[u]]) {
          if (u &gt; 0) {
            p[i] =3D result[u - 1];
          }
          result[u] =3D i;
        }
      }
    }
    u =3D result.length;
    v =3D result[u - 1];
    while (u-- &gt; 0) {
      result[u] =3D v;
      v =3D p[v];
    }
    return result;
  }
  function locateNonHydratedAsyncRoot(instance) {
    const subComponent =3D instance.subTree.component;
    if (subComponent) {
      if (subComponent.asyncDep &amp;&amp; !subComponent.asyncResolved) {
        return subComponent;
      } else {
        return locateNonHydratedAsyncRoot(subComponent);
      }
    }
  }
  function invalidateMount(hooks) {
    if (hooks) {
      for (let i =3D 0; i &lt; hooks.length; i++)
        hooks[i].flags |=3D 8;
    }
  }

  const ssrContextKey =3D Symbol.for("v-scx");
  const useSSRContext =3D () =3D&gt; {
    {
      warn$1(`useSSRContext() is not supported in the global build.`);
    }
  };

  function watchEffect(effect, options) {
    return doWatch(effect, null, options);
  }
  function watchPostEffect(effect, options) {
    return doWatch(
      effect,
      null,
      extend({}, options, { flush: "post" })=20
    );
  }
  function watchSyncEffect(effect, options) {
    return doWatch(
      effect,
      null,
      extend({}, options, { flush: "sync" })=20
    );
  }
  function watch(source, cb, options) {
    if (!isFunction(cb)) {
      warn$1(
        `\`watch(fn, options?)\` signature has been moved to a separate API=
. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`=
watch(source, cb, options?) signature.`
      );
    }
    return doWatch(source, cb, options);
  }
  function doWatch(source, cb, options =3D EMPTY_OBJ) {
    const { immediate, deep, flush, once } =3D options;
    if (!cb) {
      if (immediate !=3D=3D void 0) {
        warn$1(
          `watch() "immediate" option is only respected when using the watc=
h(source, callback, options?) signature.`
        );
      }
      if (deep !=3D=3D void 0) {
        warn$1(
          `watch() "deep" option is only respected when using the watch(sou=
rce, callback, options?) signature.`
        );
      }
      if (once !=3D=3D void 0) {
        warn$1(
          `watch() "once" option is only respected when using the watch(sou=
rce, callback, options?) signature.`
        );
      }
    }
    const baseWatchOptions =3D extend({}, options);
    baseWatchOptions.onWarn =3D warn$1;
    const instance =3D currentInstance;
    baseWatchOptions.call =3D (fn, type, args) =3D&gt; callWithAsyncErrorHa=
ndling(fn, instance, type, args);
    let isPre =3D false;
    if (flush =3D=3D=3D "post") {
      baseWatchOptions.scheduler =3D (job) =3D&gt; {
        queuePostRenderEffect(job, instance &amp;&amp; instance.suspense);
      };
    } else if (flush !=3D=3D "sync") {
      isPre =3D true;
      baseWatchOptions.scheduler =3D (job, isFirstRun) =3D&gt; {
        if (isFirstRun) {
          job();
        } else {
          queueJob(job);
        }
      };
    }
    baseWatchOptions.augmentJob =3D (job) =3D&gt; {
      if (cb) {
        job.flags |=3D 4;
      }
      if (isPre) {
        job.flags |=3D 2;
        if (instance) {
          job.id =3D instance.uid;
          job.i =3D instance;
        }
      }
    };
    const watchHandle =3D watch$1(source, cb, baseWatchOptions);
    return watchHandle;
  }
  function instanceWatch(source, value, options) {
    const publicThis =3D this.proxy;
    const getter =3D isString(source) ? source.includes(".") ? createPathGe=
tter(publicThis, source) : () =3D&gt; publicThis[source] : source.bind(publ=
icThis, publicThis);
    let cb;
    if (isFunction(value)) {
      cb =3D value;
    } else {
      cb =3D value.handler;
      options =3D value;
    }
    const reset =3D setCurrentInstance(this);
    const res =3D doWatch(getter, cb.bind(publicThis), options);
    reset();
    return res;
  }
  function createPathGetter(ctx, path) {
    const segments =3D path.split(".");
    return () =3D&gt; {
      let cur =3D ctx;
      for (let i =3D 0; i &lt; segments.length &amp;&amp; cur; i++) {
        cur =3D cur[segments[i]];
      }
      return cur;
    };
  }

  function useModel(props, name, options =3D EMPTY_OBJ) {
    const i =3D getCurrentInstance();
    if (!i) {
      warn$1(`useModel() called without active instance.`);
      return ref();
    }
    const camelizedName =3D camelize(name);
    if (!i.propsOptions[0][camelizedName]) {
      warn$1(`useModel() called with prop "${name}" which is not declared.`=
);
      return ref();
    }
    const hyphenatedName =3D hyphenate(name);
    const modifiers =3D getModelModifiers(props, camelizedName);
    const res =3D customRef((track, trigger) =3D&gt; {
      let localValue;
      let prevSetValue =3D EMPTY_OBJ;
      let prevEmittedValue;
      watchSyncEffect(() =3D&gt; {
        const propValue =3D props[camelizedName];
        if (hasChanged(localValue, propValue)) {
          localValue =3D propValue;
          trigger();
        }
      });
      return {
        get() {
          track();
          return options.get ? options.get(localValue) : localValue;
        },
        set(value) {
          const emittedValue =3D options.set ? options.set(value) : value;
          if (!hasChanged(emittedValue, localValue) &amp;&amp; !(prevSetVal=
ue !=3D=3D EMPTY_OBJ &amp;&amp; hasChanged(value, prevSetValue))) {
            return;
          }
          const rawProps =3D i.vnode.props;
          if (!(rawProps &amp;&amp; // check if parent has passed v-model
          (name in rawProps || camelizedName in rawProps || hyphenatedName =
in rawProps) &amp;&amp; (`onUpdate:${name}` in rawProps || `onUpdate:${came=
lizedName}` in rawProps || `onUpdate:${hyphenatedName}` in rawProps))) {
            localValue =3D value;
            trigger();
          }
          i.emit(`update:${name}`, emittedValue);
          if (hasChanged(value, emittedValue) &amp;&amp; hasChanged(value, =
prevSetValue) &amp;&amp; !hasChanged(emittedValue, prevEmittedValue)) {
            trigger();
          }
          prevSetValue =3D value;
          prevEmittedValue =3D emittedValue;
        }
      };
    });
    res[Symbol.iterator] =3D () =3D&gt; {
      let i2 =3D 0;
      return {
        next() {
          if (i2 &lt; 2) {
            return { value: i2++ ? modifiers || EMPTY_OBJ : res, done: fals=
e };
          } else {
            return { done: true };
          }
        }
      };
    };
    return res;
  }
  const getModelModifiers =3D (props, modelName) =3D&gt; {
    return modelName =3D=3D=3D "modelValue" || modelName =3D=3D=3D "model-v=
alue" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${c=
amelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`]=
;
  };

  function emit(instance, event, ...rawArgs) {
    if (instance.isUnmounted) return;
    const props =3D instance.vnode.props || EMPTY_OBJ;
    {
      const {
        emitsOptions,
        propsOptions: [propsOptions]
      } =3D instance;
      if (emitsOptions) {
        if (!(event in emitsOptions) &amp;&amp; true) {
          if (!propsOptions || !(toHandlerKey(camelize(event)) in propsOpti=
ons)) {
            warn$1(
              `Component emitted event "${event}" but it is neither declare=
d in the emits option nor as an "${toHandlerKey(camelize(event))}" prop.`
            );
          }
        } else {
          const validator =3D emitsOptions[event];
          if (isFunction(validator)) {
            const isValid =3D validator(...rawArgs);
            if (!isValid) {
              warn$1(
                `Invalid event arguments: event validation failed for event=
 "${event}".`
              );
            }
          }
        }
      }
    }
    let args =3D rawArgs;
    const isModelListener =3D event.startsWith("update:");
    const modifiers =3D isModelListener &amp;&amp; getModelModifiers(props,=
 event.slice(7));
    if (modifiers) {
      if (modifiers.trim) {
        args =3D rawArgs.map((a) =3D&gt; isString(a) ? a.trim() : a);
      }
      if (modifiers.number) {
        args =3D rawArgs.map(looseToNumber);
      }
    }
    {
      devtoolsComponentEmit(instance, event, args);
    }
    {
      const lowerCaseEvent =3D event.toLowerCase();
      if (lowerCaseEvent !=3D=3D event &amp;&amp; props[toHandlerKey(lowerC=
aseEvent)]) {
        warn$1(
          `Event "${lowerCaseEvent}" is emitted in component ${formatCompon=
entName(
          instance,
          instance.type
        )} but the handler is registered for "${event}". Note that HTML att=
ributes are case-insensitive and you cannot use v-on to listen to camelCase=
 events when using in-DOM templates. You should probably use "${hyphenate(
          event
        )}" instead of "${event}".`
        );
      }
    }
    let handlerName;
    let handler =3D props[handlerName =3D toHandlerKey(event)] || // also t=
ry camelCase event handler (#2249)
    props[handlerName =3D toHandlerKey(camelize(event))];
    if (!handler &amp;&amp; isModelListener) {
      handler =3D props[handlerName =3D toHandlerKey(hyphenate(event))];
    }
    if (handler) {
      callWithAsyncErrorHandling(
        handler,
        instance,
        6,
        args
      );
    }
    const onceHandler =3D props[handlerName + `Once`];
    if (onceHandler) {
      if (!instance.emitted) {
        instance.emitted =3D {};
      } else if (instance.emitted[handlerName]) {
        return;
      }
      instance.emitted[handlerName] =3D true;
      callWithAsyncErrorHandling(
        onceHandler,
        instance,
        6,
        args
      );
    }
  }
  function normalizeEmitsOptions(comp, appContext, asMixin =3D false) {
    const cache =3D appContext.emitsCache;
    const cached =3D cache.get(comp);
    if (cached !=3D=3D void 0) {
      return cached;
    }
    const raw =3D comp.emits;
    let normalized =3D {};
    let hasExtends =3D false;
    if (!isFunction(comp)) {
      const extendEmits =3D (raw2) =3D&gt; {
        const normalizedFromExtend =3D normalizeEmitsOptions(raw2, appConte=
xt, true);
        if (normalizedFromExtend) {
          hasExtends =3D true;
          extend(normalized, normalizedFromExtend);
        }
      };
      if (!asMixin &amp;&amp; appContext.mixins.length) {
        appContext.mixins.forEach(extendEmits);
      }
      if (comp.extends) {
        extendEmits(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendEmits);
      }
    }
    if (!raw &amp;&amp; !hasExtends) {
      if (isObject(comp)) {
        cache.set(comp, null);
      }
      return null;
    }
    if (isArray(raw)) {
      raw.forEach((key) =3D&gt; normalized[key] =3D null);
    } else {
      extend(normalized, raw);
    }
    if (isObject(comp)) {
      cache.set(comp, normalized);
    }
    return normalized;
  }
  function isEmitListener(options, key) {
    if (!options || !isOn(key)) {
      return false;
    }
    key =3D key.slice(2).replace(/Once$/, "");
    return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(o=
ptions, hyphenate(key)) || hasOwn(options, key);
  }

  let accessedAttrs =3D false;
  function markAttrsAccessed() {
    accessedAttrs =3D true;
  }
  function renderComponentRoot(instance) {
    const {
      type: Component,
      vnode,
      proxy,
      withProxy,
      propsOptions: [propsOptions],
      slots,
      attrs,
      emit,
      render,
      renderCache,
      props,
      data,
      setupState,
      ctx,
      inheritAttrs
    } =3D instance;
    const prev =3D setCurrentRenderingInstance(instance);
    let result;
    let fallthroughAttrs;
    {
      accessedAttrs =3D false;
    }
    try {
      if (vnode.shapeFlag &amp; 4) {
        const proxyToUse =3D withProxy || proxy;
        const thisProxy =3D setupState.__isScriptSetup ? new Proxy(proxyToU=
se, {
          get(target, key, receiver) {
            warn$1(
              `Property '${String(
              key
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
            );
            return Reflect.get(target, key, receiver);
          }
        }) : proxyToUse;
        result =3D normalizeVNode(
          render.call(
            thisProxy,
            proxyToUse,
            renderCache,
            true ? shallowReadonly(props) : props,
            setupState,
            data,
            ctx
          )
        );
        fallthroughAttrs =3D attrs;
      } else {
        const render2 =3D Component;
        if (attrs =3D=3D=3D props) {
          markAttrsAccessed();
        }
        result =3D normalizeVNode(
          render2.length &gt; 1 ? render2(
            true ? shallowReadonly(props) : props,
            true ? {
              get attrs() {
                markAttrsAccessed();
                return shallowReadonly(attrs);
              },
              slots,
              emit
            } : { attrs, slots, emit }
          ) : render2(
            true ? shallowReadonly(props) : props,
            null
          )
        );
        fallthroughAttrs =3D Component.props ? attrs : getFunctionalFallthr=
ough(attrs);
      }
    } catch (err) {
      blockStack.length =3D 0;
      handleError(err, instance, 1);
      result =3D createVNode(Comment);
    }
    let root =3D result;
    let setRoot =3D void 0;
    if (result.patchFlag &gt; 0 &amp;&amp; result.patchFlag &amp; 2048) {
      [root, setRoot] =3D getChildRoot(result);
    }
    if (fallthroughAttrs &amp;&amp; inheritAttrs !=3D=3D false) {
      const keys =3D Object.keys(fallthroughAttrs);
      const { shapeFlag } =3D root;
      if (keys.length) {
        if (shapeFlag &amp; (1 | 6)) {
          if (propsOptions &amp;&amp; keys.some(isModelListener)) {
            fallthroughAttrs =3D filterModelListeners(
              fallthroughAttrs,
              propsOptions
            );
          }
          root =3D cloneVNode(root, fallthroughAttrs, false, true);
        } else if (!accessedAttrs &amp;&amp; root.type !=3D=3D Comment) {
          const allAttrs =3D Object.keys(attrs);
          const eventAttrs =3D [];
          const extraAttrs =3D [];
          for (let i =3D 0, l =3D allAttrs.length; i &lt; l; i++) {
            const key =3D allAttrs[i];
            if (isOn(key)) {
              if (!isModelListener(key)) {
                eventAttrs.push(key[2].toLowerCase() + key.slice(3));
              }
            } else {
              extraAttrs.push(key);
            }
          }
          if (extraAttrs.length) {
            warn$1(
              `Extraneous non-props attributes (${extraAttrs.join(", ")}) w=
ere passed to component but could not be automatically inherited because co=
mponent renders fragment or text or teleport root nodes.`
            );
          }
          if (eventAttrs.length) {
            warn$1(
              `Extraneous non-emits event listeners (${eventAttrs.join(", "=
)}) were passed to component but could not be automatically inherited becau=
se component renders fragment or text root nodes. If the listener is intend=
ed to be a component custom event listener only, declare it using the "emit=
s" option.`
            );
          }
        }
      }
    }
    if (vnode.dirs) {
      if (!isElementRoot(root)) {
        warn$1(
          `Runtime directive used on component with non-element root node. =
The directives will not function as intended.`
        );
      }
      root =3D cloneVNode(root, null, false, true);
      root.dirs =3D root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    if (vnode.transition) {
      if (!isElementRoot(root)) {
        warn$1(
          `Component inside &lt;Transition&gt; renders non-element root nod=
e that cannot be animated.`
        );
      }
      setTransitionHooks(root, vnode.transition);
    }
    if (setRoot) {
      setRoot(root);
    } else {
      result =3D root;
    }
    setCurrentRenderingInstance(prev);
    return result;
  }
  const getChildRoot =3D (vnode) =3D&gt; {
    const rawChildren =3D vnode.children;
    const dynamicChildren =3D vnode.dynamicChildren;
    const childRoot =3D filterSingleRoot(rawChildren, false);
    if (!childRoot) {
      return [vnode, void 0];
    } else if (childRoot.patchFlag &gt; 0 &amp;&amp; childRoot.patchFlag &a=
mp; 2048) {
      return getChildRoot(childRoot);
    }
    const index =3D rawChildren.indexOf(childRoot);
    const dynamicIndex =3D dynamicChildren ? dynamicChildren.indexOf(childR=
oot) : -1;
    const setRoot =3D (updatedRoot) =3D&gt; {
      rawChildren[index] =3D updatedRoot;
      if (dynamicChildren) {
        if (dynamicIndex &gt; -1) {
          dynamicChildren[dynamicIndex] =3D updatedRoot;
        } else if (updatedRoot.patchFlag &gt; 0) {
          vnode.dynamicChildren =3D [...dynamicChildren, updatedRoot];
        }
      }
    };
    return [normalizeVNode(childRoot), setRoot];
  };
  function filterSingleRoot(children, recurse =3D true) {
    let singleRoot;
    for (let i =3D 0; i &lt; children.length; i++) {
      const child =3D children[i];
      if (isVNode(child)) {
        if (child.type !=3D=3D Comment || child.children =3D=3D=3D "v-if") =
{
          if (singleRoot) {
            return;
          } else {
            singleRoot =3D child;
            if (recurse &amp;&amp; singleRoot.patchFlag &gt; 0 &amp;&amp; s=
ingleRoot.patchFlag &amp; 2048) {
              return filterSingleRoot(singleRoot.children);
            }
          }
        }
      } else {
        return;
      }
    }
    return singleRoot;
  }
  const getFunctionalFallthrough =3D (attrs) =3D&gt; {
    let res;
    for (const key in attrs) {
      if (key =3D=3D=3D "class" || key =3D=3D=3D "style" || isOn(key)) {
        (res || (res =3D {}))[key] =3D attrs[key];
      }
    }
    return res;
  };
  const filterModelListeners =3D (attrs, props) =3D&gt; {
    const res =3D {};
    for (const key in attrs) {
      if (!isModelListener(key) || !(key.slice(9) in props)) {
        res[key] =3D attrs[key];
      }
    }
    return res;
  };
  const isElementRoot =3D (vnode) =3D&gt; {
    return vnode.shapeFlag &amp; (6 | 1) || vnode.type =3D=3D=3D Comment;
  };
  function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } =3D prevV=
Node;
    const { props: nextProps, children: nextChildren, patchFlag } =3D nextV=
Node;
    const emits =3D component.emitsOptions;
    if ((prevChildren || nextChildren) &amp;&amp; isHmrUpdating) {
      return true;
    }
    if (nextVNode.dirs || nextVNode.transition) {
      return true;
    }
    if (optimized &amp;&amp; patchFlag &gt;=3D 0) {
      if (patchFlag &amp; 1024) {
        return true;
      }
      if (patchFlag &amp; 16) {
        if (!prevProps) {
          return !!nextProps;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
      } else if (patchFlag &amp; 8) {
        const dynamicProps =3D nextVNode.dynamicProps;
        for (let i =3D 0; i &lt; dynamicProps.length; i++) {
          const key =3D dynamicProps[i];
          if (nextProps[key] !=3D=3D prevProps[key] &amp;&amp; !isEmitListe=
ner(emits, key)) {
            return true;
          }
        }
      }
    } else {
      if (prevChildren || nextChildren) {
        if (!nextChildren || !nextChildren.$stable) {
          return true;
        }
      }
      if (prevProps =3D=3D=3D nextProps) {
        return false;
      }
      if (!prevProps) {
        return !!nextProps;
      }
      if (!nextProps) {
        return true;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
  }
  function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys =3D Object.keys(nextProps);
    if (nextKeys.length !=3D=3D Object.keys(prevProps).length) {
      return true;
    }
    for (let i =3D 0; i &lt; nextKeys.length; i++) {
      const key =3D nextKeys[i];
      if (nextProps[key] !=3D=3D prevProps[key] &amp;&amp; !isEmitListener(=
emitsOptions, key)) {
        return true;
      }
    }
    return false;
  }
  function updateHOCHostEl({ vnode, parent }, el) {
    while (parent) {
      const root =3D parent.subTree;
      if (root.suspense &amp;&amp; root.suspense.activeBranch =3D=3D=3D vno=
de) {
        root.el =3D vnode.el;
      }
      if (root =3D=3D=3D vnode) {
        (vnode =3D parent.vnode).el =3D el;
        parent =3D parent.parent;
      } else {
        break;
      }
    }
  }

  const isSuspense =3D (type) =3D&gt; type.__isSuspense;
  let suspenseId =3D 0;
  const SuspenseImpl =3D {
    name: "Suspense",
    // In order to make Suspense tree-shakable, we need to avoid importing =
it
    // directly in the renderer. The renderer checks for the __isSuspense f=
lag
    // on a vnode's type and calls the `process` method, passing in rendere=
r
    // internals.
    __isSuspense: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, nam=
espace, slotScopeIds, optimized, rendererInternals) {
      if (n1 =3D=3D null) {
        mountSuspense(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized,
          rendererInternals
        );
      } else {
        if (parentSuspense &amp;&amp; parentSuspense.deps &gt; 0 &amp;&amp;=
 !n1.suspense.isInFallback) {
          n2.suspense =3D n1.suspense;
          n2.suspense.vnode =3D n2;
          n2.el =3D n1.el;
          return;
        }
        patchSuspense(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          namespace,
          slotScopeIds,
          optimized,
          rendererInternals
        );
      }
    },
    hydrate: hydrateSuspense,
    normalize: normalizeSuspenseChildren
  };
  const Suspense =3D SuspenseImpl ;
  function triggerEvent(vnode, name) {
    const eventListener =3D vnode.props &amp;&amp; vnode.props[name];
    if (isFunction(eventListener)) {
      eventListener();
    }
  }
  function mountSuspense(vnode, container, anchor, parentComponent, parentS=
uspense, namespace, slotScopeIds, optimized, rendererInternals) {
    const {
      p: patch,
      o: { createElement }
    } =3D rendererInternals;
    const hiddenContainer =3D createElement("div");
    const suspense =3D vnode.suspense =3D createSuspenseBoundary(
      vnode,
      parentSuspense,
      parentComponent,
      container,
      hiddenContainer,
      anchor,
      namespace,
      slotScopeIds,
      optimized,
      rendererInternals
    );
    patch(
      null,
      suspense.pendingBranch =3D vnode.ssContent,
      hiddenContainer,
      null,
      parentComponent,
      suspense,
      namespace,
      slotScopeIds
    );
    if (suspense.deps &gt; 0) {
      triggerEvent(vnode, "onPending");
      triggerEvent(vnode, "onFallback");
      patch(
        null,
        vnode.ssFallback,
        container,
        anchor,
        parentComponent,
        null,
        // fallback tree will not have suspense context
        namespace,
        slotScopeIds
      );
      setActiveBranch(suspense, vnode.ssFallback);
    } else {
      suspense.resolve(false, true);
    }
  }
  function patchSuspense(n1, n2, container, anchor, parentComponent, namesp=
ace, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement }=
 }) {
    const suspense =3D n2.suspense =3D n1.suspense;
    suspense.vnode =3D n2;
    n2.el =3D n1.el;
    const newBranch =3D n2.ssContent;
    const newFallback =3D n2.ssFallback;
    const { activeBranch, pendingBranch, isInFallback, isHydrating } =3D su=
spense;
    if (pendingBranch) {
      suspense.pendingBranch =3D newBranch;
      if (isSameVNodeType(newBranch, pendingBranch)) {
        patch(
          pendingBranch,
          newBranch,
          suspense.hiddenContainer,
          null,
          parentComponent,
          suspense,
          namespace,
          slotScopeIds,
          optimized
        );
        if (suspense.deps &lt;=3D 0) {
          suspense.resolve();
        } else if (isInFallback) {
          if (!isHydrating) {
            patch(
              activeBranch,
              newFallback,
              container,
              anchor,
              parentComponent,
              null,
              // fallback tree will not have suspense context
              namespace,
              slotScopeIds,
              optimized
            );
            setActiveBranch(suspense, newFallback);
          }
        }
      } else {
        suspense.pendingId =3D suspenseId++;
        if (isHydrating) {
          suspense.isHydrating =3D false;
          suspense.activeBranch =3D pendingBranch;
        } else {
          unmount(pendingBranch, parentComponent, suspense);
        }
        suspense.deps =3D 0;
        suspense.effects.length =3D 0;
        suspense.hiddenContainer =3D createElement("div");
        if (isInFallback) {
          patch(
            null,
            newBranch,
            suspense.hiddenContainer,
            null,
            parentComponent,
            suspense,
            namespace,
            slotScopeIds,
            optimized
          );
          if (suspense.deps &lt;=3D 0) {
            suspense.resolve();
          } else {
            patch(
              activeBranch,
              newFallback,
              container,
              anchor,
              parentComponent,
              null,
              // fallback tree will not have suspense context
              namespace,
              slotScopeIds,
              optimized
            );
            setActiveBranch(suspense, newFallback);
          }
        } else if (activeBranch &amp;&amp; isSameVNodeType(newBranch, activ=
eBranch)) {
          patch(
            activeBranch,
            newBranch,
            container,
            anchor,
            parentComponent,
            suspense,
            namespace,
            slotScopeIds,
            optimized
          );
          suspense.resolve(true);
        } else {
          patch(
            null,
            newBranch,
            suspense.hiddenContainer,
            null,
            parentComponent,
            suspense,
            namespace,
            slotScopeIds,
            optimized
          );
          if (suspense.deps &lt;=3D 0) {
            suspense.resolve();
          }
        }
      }
    } else {
      if (activeBranch &amp;&amp; isSameVNodeType(newBranch, activeBranch))=
 {
        patch(
          activeBranch,
          newBranch,
          container,
          anchor,
          parentComponent,
          suspense,
          namespace,
          slotScopeIds,
          optimized
        );
        setActiveBranch(suspense, newBranch);
      } else {
        triggerEvent(n2, "onPending");
        suspense.pendingBranch =3D newBranch;
        if (newBranch.shapeFlag &amp; 512) {
          suspense.pendingId =3D newBranch.component.suspenseId;
        } else {
          suspense.pendingId =3D suspenseId++;
        }
        patch(
          null,
          newBranch,
          suspense.hiddenContainer,
          null,
          parentComponent,
          suspense,
          namespace,
          slotScopeIds,
          optimized
        );
        if (suspense.deps &lt;=3D 0) {
          suspense.resolve();
        } else {
          const { timeout, pendingId } =3D suspense;
          if (timeout &gt; 0) {
            setTimeout(() =3D&gt; {
              if (suspense.pendingId =3D=3D=3D pendingId) {
                suspense.fallback(newFallback);
              }
            }, timeout);
          } else if (timeout =3D=3D=3D 0) {
            suspense.fallback(newFallback);
          }
        }
      }
    }
  }
  let hasWarned =3D false;
  function createSuspenseBoundary(vnode, parentSuspense, parentComponent, c=
ontainer, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rend=
ererInternals, isHydrating =3D false) {
    if (!hasWarned) {
      hasWarned =3D true;
      console[console.info ? "info" : "log"](
        `&lt;Suspense&gt; is an experimental feature and its API will likel=
y change.`
      );
    }
    const {
      p: patch,
      m: move,
      um: unmount,
      n: next,
      o: { parentNode, remove }
    } =3D rendererInternals;
    let parentSuspenseId;
    const isSuspensible =3D isVNodeSuspensible(vnode);
    if (isSuspensible) {
      if (parentSuspense &amp;&amp; parentSuspense.pendingBranch) {
        parentSuspenseId =3D parentSuspense.pendingId;
        parentSuspense.deps++;
      }
    }
    const timeout =3D vnode.props ? toNumber(vnode.props.timeout) : void 0;
    {
      assertNumber(timeout, `Suspense timeout`);
    }
    const initialAnchor =3D anchor;
    const suspense =3D {
      vnode,
      parent: parentSuspense,
      parentComponent,
      namespace,
      container,
      hiddenContainer,
      deps: 0,
      pendingId: suspenseId++,
      timeout: typeof timeout =3D=3D=3D "number" ? timeout : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !isHydrating,
      isHydrating,
      isUnmounted: false,
      effects: [],
      resolve(resume =3D false, sync =3D false) {
        {
          if (!resume &amp;&amp; !suspense.pendingBranch) {
            throw new Error(
              `suspense.resolve() is called without a pending branch.`
            );
          }
          if (suspense.isUnmounted) {
            throw new Error(
              `suspense.resolve() is called on an already unmounted suspens=
e boundary.`
            );
          }
        }
        const {
          vnode: vnode2,
          activeBranch,
          pendingBranch,
          pendingId,
          effects,
          parentComponent: parentComponent2,
          container: container2
        } =3D suspense;
        let delayEnter =3D false;
        if (suspense.isHydrating) {
          suspense.isHydrating =3D false;
        } else if (!resume) {
          delayEnter =3D activeBranch &amp;&amp; pendingBranch.transition &=
amp;&amp; pendingBranch.transition.mode =3D=3D=3D "out-in";
          if (delayEnter) {
            activeBranch.transition.afterLeave =3D () =3D&gt; {
              if (pendingId =3D=3D=3D suspense.pendingId) {
                move(
                  pendingBranch,
                  container2,
                  anchor =3D=3D=3D initialAnchor ? next(activeBranch) : anc=
hor,
                  0
                );
                queuePostFlushCb(effects);
              }
            };
          }
          if (activeBranch) {
            if (parentNode(activeBranch.el) =3D=3D=3D container2) {
              anchor =3D next(activeBranch);
            }
            unmount(activeBranch, parentComponent2, suspense, true);
          }
          if (!delayEnter) {
            move(pendingBranch, container2, anchor, 0);
          }
        }
        setActiveBranch(suspense, pendingBranch);
        suspense.pendingBranch =3D null;
        suspense.isInFallback =3D false;
        let parent =3D suspense.parent;
        let hasUnresolvedAncestor =3D false;
        while (parent) {
          if (parent.pendingBranch) {
            parent.effects.push(...effects);
            hasUnresolvedAncestor =3D true;
            break;
          }
          parent =3D parent.parent;
        }
        if (!hasUnresolvedAncestor &amp;&amp; !delayEnter) {
          queuePostFlushCb(effects);
        }
        suspense.effects =3D [];
        if (isSuspensible) {
          if (parentSuspense &amp;&amp; parentSuspense.pendingBranch &amp;&=
amp; parentSuspenseId =3D=3D=3D parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps =3D=3D=3D 0 &amp;&amp; !sync) {
              parentSuspense.resolve();
            }
          }
        }
        triggerEvent(vnode2, "onResolve");
      },
      fallback(fallbackVNode) {
        if (!suspense.pendingBranch) {
          return;
        }
        const { vnode: vnode2, activeBranch, parentComponent: parentCompone=
nt2, container: container2, namespace: namespace2 } =3D suspense;
        triggerEvent(vnode2, "onFallback");
        const anchor2 =3D next(activeBranch);
        const mountFallback =3D () =3D&gt; {
          if (!suspense.isInFallback) {
            return;
          }
          patch(
            null,
            fallbackVNode,
            container2,
            anchor2,
            parentComponent2,
            null,
            // fallback tree will not have suspense context
            namespace2,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, fallbackVNode);
        };
        const delayEnter =3D fallbackVNode.transition &amp;&amp; fallbackVN=
ode.transition.mode =3D=3D=3D "out-in";
        if (delayEnter) {
          activeBranch.transition.afterLeave =3D mountFallback;
        }
        suspense.isInFallback =3D true;
        unmount(
          activeBranch,
          parentComponent2,
          null,
          // no suspense so unmount hooks fire now
          true
          // shouldRemove
        );
        if (!delayEnter) {
          mountFallback();
        }
      },
      move(container2, anchor2, type) {
        suspense.activeBranch &amp;&amp; move(suspense.activeBranch, contai=
ner2, anchor2, type);
        suspense.container =3D container2;
      },
      next() {
        return suspense.activeBranch &amp;&amp; next(suspense.activeBranch)=
;
      },
      registerDep(instance, setupRenderEffect, optimized2) {
        const isInPendingSuspense =3D !!suspense.pendingBranch;
        if (isInPendingSuspense) {
          suspense.deps++;
        }
        const hydratedEl =3D instance.vnode.el;
        instance.asyncDep.catch((err) =3D&gt; {
          handleError(err, instance, 0);
        }).then((asyncSetupResult) =3D&gt; {
          if (instance.isUnmounted || suspense.isUnmounted || suspense.pend=
ingId !=3D=3D instance.suspenseId) {
            return;
          }
          instance.asyncResolved =3D true;
          const { vnode: vnode2 } =3D instance;
          {
            pushWarningContext(vnode2);
          }
          handleSetupResult(instance, asyncSetupResult, false);
          if (hydratedEl) {
            vnode2.el =3D hydratedEl;
          }
          const placeholder =3D !hydratedEl &amp;&amp; instance.subTree.el;
          setupRenderEffect(
            instance,
            vnode2,
            // component may have been moved before resolve.
            // if this is not a hydration, instance.subTree will be the com=
ment
            // placeholder.
            parentNode(hydratedEl || instance.subTree.el),
            // anchor will not be used if this is hydration, so only need t=
o
            // consider the comment placeholder case.
            hydratedEl ? null : next(instance.subTree),
            suspense,
            namespace,
            optimized2
          );
          if (placeholder) {
            remove(placeholder);
          }
          updateHOCHostEl(instance, vnode2.el);
          {
            popWarningContext();
          }
          if (isInPendingSuspense &amp;&amp; --suspense.deps =3D=3D=3D 0) {
            suspense.resolve();
          }
        });
      },
      unmount(parentSuspense2, doRemove) {
        suspense.isUnmounted =3D true;
        if (suspense.activeBranch) {
          unmount(
            suspense.activeBranch,
            parentComponent,
            parentSuspense2,
            doRemove
          );
        }
        if (suspense.pendingBranch) {
          unmount(
            suspense.pendingBranch,
            parentComponent,
            parentSuspense2,
            doRemove
          );
        }
      }
    };
    return suspense;
  }
  function hydrateSuspense(node, vnode, parentComponent, parentSuspense, na=
mespace, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    const suspense =3D vnode.suspense =3D createSuspenseBoundary(
      vnode,
      parentSuspense,
      parentComponent,
      node.parentNode,
      // eslint-disable-next-line no-restricted-globals
      document.createElement("div"),
      null,
      namespace,
      slotScopeIds,
      optimized,
      rendererInternals,
      true
    );
    const result =3D hydrateNode(
      node,
      suspense.pendingBranch =3D vnode.ssContent,
      parentComponent,
      suspense,
      slotScopeIds,
      optimized
    );
    if (suspense.deps =3D=3D=3D 0) {
      suspense.resolve(false, true);
    }
    return result;
  }
  function normalizeSuspenseChildren(vnode) {
    const { shapeFlag, children } =3D vnode;
    const isSlotChildren =3D shapeFlag &amp; 32;
    vnode.ssContent =3D normalizeSuspenseSlot(
      isSlotChildren ? children.default : children
    );
    vnode.ssFallback =3D isSlotChildren ? normalizeSuspenseSlot(children.fa=
llback) : createVNode(Comment);
  }
  function normalizeSuspenseSlot(s) {
    let block;
    if (isFunction(s)) {
      const trackBlock =3D isBlockTreeEnabled &amp;&amp; s._c;
      if (trackBlock) {
        s._d =3D false;
        openBlock();
      }
      s =3D s();
      if (trackBlock) {
        s._d =3D true;
        block =3D currentBlock;
        closeBlock();
      }
    }
    if (isArray(s)) {
      const singleChild =3D filterSingleRoot(s);
      if (!singleChild &amp;&amp; s.filter((child) =3D&gt; child !=3D=3D NU=
LL_DYNAMIC_COMPONENT).length &gt; 0) {
        warn$1(`&lt;Suspense&gt; slots expect a single root node.`);
      }
      s =3D singleChild;
    }
    s =3D normalizeVNode(s);
    if (block &amp;&amp; !s.dynamicChildren) {
      s.dynamicChildren =3D block.filter((c) =3D&gt; c !=3D=3D s);
    }
    return s;
  }
  function queueEffectWithSuspense(fn, suspense) {
    if (suspense &amp;&amp; suspense.pendingBranch) {
      if (isArray(fn)) {
        suspense.effects.push(...fn);
      } else {
        suspense.effects.push(fn);
      }
    } else {
      queuePostFlushCb(fn);
    }
  }
  function setActiveBranch(suspense, branch) {
    suspense.activeBranch =3D branch;
    const { vnode, parentComponent } =3D suspense;
    let el =3D branch.el;
    while (!el &amp;&amp; branch.component) {
      branch =3D branch.component.subTree;
      el =3D branch.el;
    }
    vnode.el =3D el;
    if (parentComponent &amp;&amp; parentComponent.subTree =3D=3D=3D vnode)=
 {
      parentComponent.vnode.el =3D el;
      updateHOCHostEl(parentComponent, el);
    }
  }
  function isVNodeSuspensible(vnode) {
    const suspensible =3D vnode.props &amp;&amp; vnode.props.suspensible;
    return suspensible !=3D null &amp;&amp; suspensible !=3D=3D false;
  }

  const Fragment =3D Symbol.for("v-fgt");
  const Text =3D Symbol.for("v-txt");
  const Comment =3D Symbol.for("v-cmt");
  const Static =3D Symbol.for("v-stc");
  const blockStack =3D [];
  let currentBlock =3D null;
  function openBlock(disableTracking =3D false) {
    blockStack.push(currentBlock =3D disableTracking ? null : []);
  }
  function closeBlock() {
    blockStack.pop();
    currentBlock =3D blockStack[blockStack.length - 1] || null;
  }
  let isBlockTreeEnabled =3D 1;
  function setBlockTracking(value, inVOnce =3D false) {
    isBlockTreeEnabled +=3D value;
    if (value &lt; 0 &amp;&amp; currentBlock &amp;&amp; inVOnce) {
      currentBlock.hasOnce =3D true;
    }
  }
  function setupBlock(vnode) {
    vnode.dynamicChildren =3D isBlockTreeEnabled &gt; 0 ? currentBlock || E=
MPTY_ARR : null;
    closeBlock();
    if (isBlockTreeEnabled &gt; 0 &amp;&amp; currentBlock) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  function createElementBlock(type, props, children, patchFlag, dynamicProp=
s, shapeFlag) {
    return setupBlock(
      createBaseVNode(
        type,
        props,
        children,
        patchFlag,
        dynamicProps,
        shapeFlag,
        true
      )
    );
  }
  function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(
      createVNode(
        type,
        props,
        children,
        patchFlag,
        dynamicProps,
        true
      )
    );
  }
  function isVNode(value) {
    return value ? value.__v_isVNode =3D=3D=3D true : false;
  }
  function isSameVNodeType(n1, n2) {
    if (n2.shapeFlag &amp; 6 &amp;&amp; n1.component) {
      const dirtyInstances =3D hmrDirtyComponents.get(n2.type);
      if (dirtyInstances &amp;&amp; dirtyInstances.has(n1.component)) {
        n1.shapeFlag &amp;=3D -257;
        n2.shapeFlag &amp;=3D -513;
        return false;
      }
    }
    return n1.type =3D=3D=3D n2.type &amp;&amp; n1.key =3D=3D=3D n2.key;
  }
  let vnodeArgsTransformer;
  function transformVNodeArgs(transformer) {
    vnodeArgsTransformer =3D transformer;
  }
  const createVNodeWithArgsTransform =3D (...args) =3D&gt; {
    return _createVNode(
      ...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRendering=
Instance) : args
    );
  };
  const normalizeKey =3D ({ key }) =3D&gt; key !=3D null ? key : null;
  const normalizeRef =3D ({
    ref,
    ref_key,
    ref_for
  }) =3D&gt; {
    if (typeof ref =3D=3D=3D "number") {
      ref =3D "" + ref;
    }
    return ref !=3D null ? isString(ref) || isRef(ref) || isFunction(ref) ?=
 { i: currentRenderingInstance, r: ref, k: ref_key, f: !!ref_for } : ref : =
null;
  };
  function createBaseVNode(type, props =3D null, children =3D null, patchFl=
ag =3D 0, dynamicProps =3D null, shapeFlag =3D type =3D=3D=3D Fragment ? 0 =
: 1, isBlockNode =3D false, needFullChildrenNormalization =3D false) {
    const vnode =3D {
      __v_isVNode: true,
      __v_skip: true,
      type,
      props,
      key: props &amp;&amp; normalizeKey(props),
      ref: props &amp;&amp; normalizeRef(props),
      scopeId: currentScopeId,
      slotScopeIds: null,
      children,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetStart: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag,
      patchFlag,
      dynamicProps,
      dynamicChildren: null,
      appContext: null,
      ctx: currentRenderingInstance
    };
    if (needFullChildrenNormalization) {
      normalizeChildren(vnode, children);
      if (shapeFlag &amp; 128) {
        type.normalize(vnode);
      }
    } else if (children) {
      vnode.shapeFlag |=3D isString(children) ? 8 : 16;
    }
    if (vnode.key !=3D=3D vnode.key) {
      warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.typ=
e);
    }
    if (isBlockTreeEnabled &gt; 0 &amp;&amp; // avoid a block node from tra=
cking itself
    !isBlockNode &amp;&amp; // has current parent block
    currentBlock &amp;&amp; // presence of a patch flag indicates this node=
 needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn't need to update, it needs to persist the instance o=
n to
    // the next vnode so that it can be properly unmounted later.
    (vnode.patchFlag &gt; 0 || shapeFlag &amp; 6) &amp;&amp; // the EVENTS =
flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !=3D=3D 32) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  const createVNode =3D createVNodeWithArgsTransform ;
  function _createVNode(type, props =3D null, children =3D null, patchFlag =
=3D 0, dynamicProps =3D null, isBlockNode =3D false) {
    if (!type || type =3D=3D=3D NULL_DYNAMIC_COMPONENT) {
      if (!type) {
        warn$1(`Invalid vnode type when creating vnode: ${type}.`);
      }
      type =3D Comment;
    }
    if (isVNode(type)) {
      const cloned =3D cloneVNode(
        type,
        props,
        true
        /* mergeRef: true */
      );
      if (children) {
        normalizeChildren(cloned, children);
      }
      if (isBlockTreeEnabled &gt; 0 &amp;&amp; !isBlockNode &amp;&amp; curr=
entBlock) {
        if (cloned.shapeFlag &amp; 6) {
          currentBlock[currentBlock.indexOf(type)] =3D cloned;
        } else {
          currentBlock.push(cloned);
        }
      }
      cloned.patchFlag =3D -2;
      return cloned;
    }
    if (isClassComponent(type)) {
      type =3D type.__vccOpts;
    }
    if (props) {
      props =3D guardReactiveProps(props);
      let { class: klass, style } =3D props;
      if (klass &amp;&amp; !isString(klass)) {
        props.class =3D normalizeClass(klass);
      }
      if (isObject(style)) {
        if (isProxy(style) &amp;&amp; !isArray(style)) {
          style =3D extend({}, style);
        }
        props.style =3D normalizeStyle(style);
      }
    }
    const shapeFlag =3D isString(type) ? 1 : isSuspense(type) ? 128 : isTel=
eport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
    if (shapeFlag &amp; 4 &amp;&amp; isProxy(type)) {
      type =3D toRaw(type);
      warn$1(
        `Vue received a Component that was made a reactive object. This can=
 lead to unnecessary performance overhead and should be avoided by marking =
the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`=
,
        `
Component that was made reactive: `,
        type
      );
    }
    return createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      isBlockNode,
      true
    );
  }
  function guardReactiveProps(props) {
    if (!props) return null;
    return isProxy(props) || isInternalObject(props) ? extend({}, props) : =
props;
  }
  function cloneVNode(vnode, extraProps, mergeRef =3D false, cloneTransitio=
n =3D false) {
    const { props, ref, patchFlag, children, transition } =3D vnode;
    const mergedProps =3D extraProps ? mergeProps(props || {}, extraProps) =
: props;
    const cloned =3D {
      __v_isVNode: true,
      __v_skip: true,
      type: vnode.type,
      props: mergedProps,
      key: mergedProps &amp;&amp; normalizeKey(mergedProps),
      ref: extraProps &amp;&amp; extraProps.ref ? (
        // #2078 in the case of &lt;component :is=3D"vnode" ref=3D"extra"/&=
gt;
        // if the vnode itself already has a ref, cloneVNode will need to m=
erge
        // the refs so the single vnode can be set on multiple refs
        mergeRef &amp;&amp; ref ? isArray(ref) ? ref.concat(normalizeRef(ex=
traProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps)
      ) : ref,
      scopeId: vnode.scopeId,
      slotScopeIds: vnode.slotScopeIds,
      children: patchFlag =3D=3D=3D -1 &amp;&amp; isArray(children) ? child=
ren.map(deepCloneVNode) : children,
      target: vnode.target,
      targetStart: vnode.targetStart,
      targetAnchor: vnode.targetAnchor,
      staticCount: vnode.staticCount,
      shapeFlag: vnode.shapeFlag,
      // if the vnode is cloned with extra props, we can no longer assume i=
ts
      // existing patch flag to be reliable and need to add the FULL_PROPS =
flag.
      // note: preserve flag for fragments since they use the flag for chil=
dren
      // fast paths only.
      patchFlag: extraProps &amp;&amp; vnode.type !=3D=3D Fragment ? patchF=
lag =3D=3D=3D -1 ? 16 : patchFlag | 16 : patchFlag,
      dynamicProps: vnode.dynamicProps,
      dynamicChildren: vnode.dynamicChildren,
      appContext: vnode.appContext,
      dirs: vnode.dirs,
      transition,
      // These should technically only be non-null on mounted VNodes. Howev=
er,
      // they *should* be copied for kept-alive vnodes. So we just always c=
opy
      // them since them being non-null during a mount doesn't affect the l=
ogic as
      // they will simply be overwritten.
      component: vnode.component,
      suspense: vnode.suspense,
      ssContent: vnode.ssContent &amp;&amp; cloneVNode(vnode.ssContent),
      ssFallback: vnode.ssFallback &amp;&amp; cloneVNode(vnode.ssFallback),
      el: vnode.el,
      anchor: vnode.anchor,
      ctx: vnode.ctx,
      ce: vnode.ce
    };
    if (transition &amp;&amp; cloneTransition) {
      setTransitionHooks(
        cloned,
        transition.clone(cloned)
      );
    }
    return cloned;
  }
  function deepCloneVNode(vnode) {
    const cloned =3D cloneVNode(vnode);
    if (isArray(vnode.children)) {
      cloned.children =3D vnode.children.map(deepCloneVNode);
    }
    return cloned;
  }
  function createTextVNode(text =3D " ", flag =3D 0) {
    return createVNode(Text, null, text, flag);
  }
  function createStaticVNode(content, numberOfNodes) {
    const vnode =3D createVNode(Static, null, content);
    vnode.staticCount =3D numberOfNodes;
    return vnode;
  }
  function createCommentVNode(text =3D "", asBlock =3D false) {
    return asBlock ? (openBlock(), createBlock(Comment, null, text)) : crea=
teVNode(Comment, null, text);
  }
  function normalizeVNode(child) {
    if (child =3D=3D null || typeof child =3D=3D=3D "boolean") {
      return createVNode(Comment);
    } else if (isArray(child)) {
      return createVNode(
        Fragment,
        null,
        // #3666, avoid reference pollution when reusing vnode
        child.slice()
      );
    } else if (isVNode(child)) {
      return cloneIfMounted(child);
    } else {
      return createVNode(Text, null, String(child));
    }
  }
  function cloneIfMounted(child) {
    return child.el =3D=3D=3D null &amp;&amp; child.patchFlag !=3D=3D -1 ||=
 child.memo ? child : cloneVNode(child);
  }
  function normalizeChildren(vnode, children) {
    let type =3D 0;
    const { shapeFlag } =3D vnode;
    if (children =3D=3D null) {
      children =3D null;
    } else if (isArray(children)) {
      type =3D 16;
    } else if (typeof children =3D=3D=3D "object") {
      if (shapeFlag &amp; (1 | 64)) {
        const slot =3D children.default;
        if (slot) {
          slot._c &amp;&amp; (slot._d =3D false);
          normalizeChildren(vnode, slot());
          slot._c &amp;&amp; (slot._d =3D true);
        }
        return;
      } else {
        type =3D 32;
        const slotFlag =3D children._;
        if (!slotFlag &amp;&amp; !isInternalObject(children)) {
          children._ctx =3D currentRenderingInstance;
        } else if (slotFlag =3D=3D=3D 3 &amp;&amp; currentRenderingInstance=
) {
          if (currentRenderingInstance.slots._ =3D=3D=3D 1) {
            children._ =3D 1;
          } else {
            children._ =3D 2;
            vnode.patchFlag |=3D 1024;
          }
        }
      }
    } else if (isFunction(children)) {
      children =3D { default: children, _ctx: currentRenderingInstance };
      type =3D 32;
    } else {
      children =3D String(children);
      if (shapeFlag &amp; 64) {
        type =3D 16;
        children =3D [createTextVNode(children)];
      } else {
        type =3D 8;
      }
    }
    vnode.children =3D children;
    vnode.shapeFlag |=3D type;
  }
  function mergeProps(...args) {
    const ret =3D {};
    for (let i =3D 0; i &lt; args.length; i++) {
      const toMerge =3D args[i];
      for (const key in toMerge) {
        if (key =3D=3D=3D "class") {
          if (ret.class !=3D=3D toMerge.class) {
            ret.class =3D normalizeClass([ret.class, toMerge.class]);
          }
        } else if (key =3D=3D=3D "style") {
          ret.style =3D normalizeStyle([ret.style, toMerge.style]);
        } else if (isOn(key)) {
          const existing =3D ret[key];
          const incoming =3D toMerge[key];
          if (incoming &amp;&amp; existing !=3D=3D incoming &amp;&amp; !(is=
Array(existing) &amp;&amp; existing.includes(incoming))) {
            ret[key] =3D existing ? [].concat(existing, incoming) : incomin=
g;
          }
        } else if (key !=3D=3D "") {
          ret[key] =3D toMerge[key];
        }
      }
    }
    return ret;
  }
  function invokeVNodeHook(hook, instance, vnode, prevVNode =3D null) {
    callWithAsyncErrorHandling(hook, instance, 7, [
      vnode,
      prevVNode
    ]);
  }

  const emptyAppContext =3D createAppContext();
  let uid =3D 0;
  function createComponentInstance(vnode, parent, suspense) {
    const type =3D vnode.type;
    const appContext =3D (parent ? parent.appContext : vnode.appContext) ||=
 emptyAppContext;
    const instance =3D {
      uid: uid++,
      vnode,
      type,
      parent,
      appContext,
      root: null,
      // to be immediately set
      next: null,
      subTree: null,
      // will be set synchronously right after creation
      effect: null,
      update: null,
      // will be set synchronously right after creation
      job: null,
      scope: new EffectScope(
        true
        /* detached */
      ),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: parent ? parent.provides : Object.create(appContext.provide=
s),
      ids: parent ? parent.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      // local resolved assets
      components: null,
      directives: null,
      // resolved props and emits options
      propsOptions: normalizePropsOptions(type, appContext),
      emitsOptions: normalizeEmitsOptions(type, appContext),
      // emit
      emit: null,
      // to be set immediately
      emitted: null,
      // props default value
      propsDefaults: EMPTY_OBJ,
      // inheritAttrs
      inheritAttrs: type.inheritAttrs,
      // state
      ctx: EMPTY_OBJ,
      data: EMPTY_OBJ,
      props: EMPTY_OBJ,
      attrs: EMPTY_OBJ,
      slots: EMPTY_OBJ,
      refs: EMPTY_OBJ,
      setupState: EMPTY_OBJ,
      setupContext: null,
      // suspense related
      suspense,
      suspenseId: suspense ? suspense.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      // lifecycle hooks
      // not using enums here because it results in computed properties
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    {
      instance.ctx =3D createDevRenderContext(instance);
    }
    instance.root =3D parent ? parent.root : instance;
    instance.emit =3D emit.bind(null, instance);
    if (vnode.ce) {
      vnode.ce(instance);
    }
    return instance;
  }
  let currentInstance =3D null;
  const getCurrentInstance =3D () =3D&gt; currentInstance || currentRenderi=
ngInstance;
  let internalSetCurrentInstance;
  let setInSSRSetupState;
  {
    internalSetCurrentInstance =3D (i) =3D&gt; {
      currentInstance =3D i;
    };
    setInSSRSetupState =3D (v) =3D&gt; {
      isInSSRComponentSetup =3D v;
    };
  }
  const setCurrentInstance =3D (instance) =3D&gt; {
    const prev =3D currentInstance;
    internalSetCurrentInstance(instance);
    instance.scope.on();
    return () =3D&gt; {
      instance.scope.off();
      internalSetCurrentInstance(prev);
    };
  };
  const unsetCurrentInstance =3D () =3D&gt; {
    currentInstance &amp;&amp; currentInstance.scope.off();
    internalSetCurrentInstance(null);
  };
  const isBuiltInTag =3D /* @__PURE__ */ makeMap("slot,component");
  function validateComponentName(name, { isNativeTag }) {
    if (isBuiltInTag(name) || isNativeTag(name)) {
      warn$1(
        "Do not use built-in or reserved HTML elements as component id: " +=
 name
      );
    }
  }
  function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag &amp; 4;
  }
  let isInSSRComponentSetup =3D false;
  function setupComponent(instance, isSSR =3D false, optimized =3D false) {
    isSSR &amp;&amp; setInSSRSetupState(isSSR);
    const { props, children } =3D instance.vnode;
    const isStateful =3D isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children, optimized || isSSR);
    const setupResult =3D isStateful ? setupStatefulComponent(instance, isS=
SR) : void 0;
    isSSR &amp;&amp; setInSSRSetupState(false);
    return setupResult;
  }
  function setupStatefulComponent(instance, isSSR) {
    var _a;
    const Component =3D instance.type;
    {
      if (Component.name) {
        validateComponentName(Component.name, instance.appContext.config);
      }
      if (Component.components) {
        const names =3D Object.keys(Component.components);
        for (let i =3D 0; i &lt; names.length; i++) {
          validateComponentName(names[i], instance.appContext.config);
        }
      }
      if (Component.directives) {
        const names =3D Object.keys(Component.directives);
        for (let i =3D 0; i &lt; names.length; i++) {
          validateDirectiveName(names[i]);
        }
      }
      if (Component.compilerOptions &amp;&amp; isRuntimeOnly()) {
        warn$1(
          `"compilerOptions" is only supported when using a build of Vue th=
at includes the runtime compiler. Since you are using a runtime-only build,=
 the options should be passed via your build tool config instead.`
        );
      }
    }
    instance.accessCache =3D /* @__PURE__ */ Object.create(null);
    instance.proxy =3D new Proxy(instance.ctx, PublicInstanceProxyHandlers)=
;
    {
      exposePropsOnRenderContext(instance);
    }
    const { setup } =3D Component;
    if (setup) {
      pauseTracking();
      const setupContext =3D instance.setupContext =3D setup.length &gt; 1 =
? createSetupContext(instance) : null;
      const reset =3D setCurrentInstance(instance);
      const setupResult =3D callWithErrorHandling(
        setup,
        instance,
        0,
        [
          shallowReadonly(instance.props) ,
          setupContext
        ]
      );
      const isAsyncSetup =3D isPromise(setupResult);
      resetTracking();
      reset();
      if ((isAsyncSetup || instance.sp) &amp;&amp; !isAsyncWrapper(instance=
)) {
        markAsyncBoundary(instance);
      }
      if (isAsyncSetup) {
        setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
        if (isSSR) {
          return setupResult.then((resolvedResult) =3D&gt; {
            handleSetupResult(instance, resolvedResult, isSSR);
          }).catch((e) =3D&gt; {
            handleError(e, instance, 0);
          });
        } else {
          instance.asyncDep =3D setupResult;
          if (!instance.suspense) {
            const name =3D (_a =3D Component.name) !=3D null ? _a : "Anonym=
ous";
            warn$1(
              `Component &lt;${name}&gt;: setup function returned a promise=
, but no &lt;Suspense&gt; boundary was found in the parent component tree. =
A component with async setup() must be nested in a &lt;Suspense&gt; in orde=
r to be rendered.`
            );
          }
        }
      } else {
        handleSetupResult(instance, setupResult, isSSR);
      }
    } else {
      finishComponentSetup(instance, isSSR);
    }
  }
  function handleSetupResult(instance, setupResult, isSSR) {
    if (isFunction(setupResult)) {
      {
        instance.render =3D setupResult;
      }
    } else if (isObject(setupResult)) {
      if (isVNode(setupResult)) {
        warn$1(
          `setup() should not return VNodes directly - return a render func=
tion instead.`
        );
      }
      {
        instance.devtoolsRawSetupState =3D setupResult;
      }
      instance.setupState =3D proxyRefs(setupResult);
      {
        exposeSetupStateOnRenderContext(instance);
      }
    } else if (setupResult !=3D=3D void 0) {
      warn$1(
        `setup() should return an object. Received: ${setupResult =3D=3D=3D=
 null ? "null" : typeof setupResult}`
      );
    }
    finishComponentSetup(instance, isSSR);
  }
  let compile$1;
  let installWithProxy;
  function registerRuntimeCompiler(_compile) {
    compile$1 =3D _compile;
    installWithProxy =3D (i) =3D&gt; {
      if (i.render._rc) {
        i.withProxy =3D new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxy=
Handlers);
      }
    };
  }
  const isRuntimeOnly =3D () =3D&gt; !compile$1;
  function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component =3D instance.type;
    if (!instance.render) {
      if (!isSSR &amp;&amp; compile$1 &amp;&amp; !Component.render) {
        const template =3D Component.template || resolveMergedOptions(insta=
nce).template;
        if (template) {
          {
            startMeasure(instance, `compile`);
          }
          const { isCustomElement, compilerOptions } =3D instance.appContex=
t.config;
          const { delimiters, compilerOptions: componentCompilerOptions } =
=3D Component;
          const finalCompilerOptions =3D extend(
            extend(
              {
                isCustomElement,
                delimiters
              },
              compilerOptions
            ),
            componentCompilerOptions
          );
          Component.render =3D compile$1(template, finalCompilerOptions);
          {
            endMeasure(instance, `compile`);
          }
        }
      }
      instance.render =3D Component.render || NOOP;
      if (installWithProxy) {
        installWithProxy(instance);
      }
    }
    {
      const reset =3D setCurrentInstance(instance);
      pauseTracking();
      try {
        applyOptions(instance);
      } finally {
        resetTracking();
        reset();
      }
    }
    if (!Component.render &amp;&amp; instance.render =3D=3D=3D NOOP &amp;&a=
mp; !isSSR) {
      if (!compile$1 &amp;&amp; Component.template) {
        warn$1(
          `Component provided template option but runtime compilation is no=
t supported in this build of Vue.` + (` Use "vue.global.js" instead.` )
        );
      } else {
        warn$1(`Component is missing template or render function: `, Compon=
ent);
      }
    }
  }
  const attrsProxyHandlers =3D {
    get(target, key) {
      markAttrsAccessed();
      track(target, "get", "");
      return target[key];
    },
    set() {
      warn$1(`setupContext.attrs is readonly.`);
      return false;
    },
    deleteProperty() {
      warn$1(`setupContext.attrs is readonly.`);
      return false;
    }
  } ;
  function getSlotsProxy(instance) {
    return new Proxy(instance.slots, {
      get(target, key) {
        track(instance, "get", "$slots");
        return target[key];
      }
    });
  }
  function createSetupContext(instance) {
    const expose =3D (exposed) =3D&gt; {
      {
        if (instance.exposed) {
          warn$1(`expose() should be called only once per setup().`);
        }
        if (exposed !=3D null) {
          let exposedType =3D typeof exposed;
          if (exposedType =3D=3D=3D "object") {
            if (isArray(exposed)) {
              exposedType =3D "array";
            } else if (isRef(exposed)) {
              exposedType =3D "ref";
            }
          }
          if (exposedType !=3D=3D "object") {
            warn$1(
              `expose() should be passed a plain object, received ${exposed=
Type}.`
            );
          }
        }
      }
      instance.exposed =3D exposed || {};
    };
    {
      let attrsProxy;
      let slotsProxy;
      return Object.freeze({
        get attrs() {
          return attrsProxy || (attrsProxy =3D new Proxy(instance.attrs, at=
trsProxyHandlers));
        },
        get slots() {
          return slotsProxy || (slotsProxy =3D getSlotsProxy(instance));
        },
        get emit() {
          return (event, ...args) =3D&gt; instance.emit(event, ...args);
        },
        expose
      });
    }
  }
  function getComponentPublicInstance(instance) {
    if (instance.exposed) {
      return instance.exposeProxy || (instance.exposeProxy =3D new Proxy(pr=
oxyRefs(markRaw(instance.exposed)), {
        get(target, key) {
          if (key in target) {
            return target[key];
          } else if (key in publicPropertiesMap) {
            return publicPropertiesMap[key](instance);
          }
        },
        has(target, key) {
          return key in target || key in publicPropertiesMap;
        }
      }));
    } else {
      return instance.proxy;
    }
  }
  const classifyRE =3D /(?:^|[-_])(\w)/g;
  const classify =3D (str) =3D&gt; str.replace(classifyRE, (c) =3D&gt; c.to=
UpperCase()).replace(/[-_]/g, "");
  function getComponentName(Component, includeInferred =3D true) {
    return isFunction(Component) ? Component.displayName || Component.name =
: Component.name || includeInferred &amp;&amp; Component.__name;
  }
  function formatComponentName(instance, Component, isRoot =3D false) {
    let name =3D getComponentName(Component);
    if (!name &amp;&amp; Component.__file) {
      const match =3D Component.__file.match(/([^/\\]+)\.\w+$/);
      if (match) {
        name =3D match[1];
      }
    }
    if (!name &amp;&amp; instance &amp;&amp; instance.parent) {
      const inferFromRegistry =3D (registry) =3D&gt; {
        for (const key in registry) {
          if (registry[key] =3D=3D=3D Component) {
            return key;
          }
        }
      };
      name =3D inferFromRegistry(
        instance.components || instance.parent.type.components
      ) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
  }
  function isClassComponent(value) {
    return isFunction(value) &amp;&amp; "__vccOpts" in value;
  }

  const computed =3D (getterOrOptions, debugOptions) =3D&gt; {
    const c =3D computed$1(getterOrOptions, debugOptions, isInSSRComponentS=
etup);
    {
      const i =3D getCurrentInstance();
      if (i &amp;&amp; i.appContext.config.warnRecursiveComputed) {
        c._warnRecursive =3D true;
      }
    }
    return c;
  };

  function h(type, propsOrChildren, children) {
    const l =3D arguments.length;
    if (l =3D=3D=3D 2) {
      if (isObject(propsOrChildren) &amp;&amp; !isArray(propsOrChildren)) {
        if (isVNode(propsOrChildren)) {
          return createVNode(type, null, [propsOrChildren]);
        }
        return createVNode(type, propsOrChildren);
      } else {
        return createVNode(type, null, propsOrChildren);
      }
    } else {
      if (l &gt; 3) {
        children =3D Array.prototype.slice.call(arguments, 2);
      } else if (l =3D=3D=3D 3 &amp;&amp; isVNode(children)) {
        children =3D [children];
      }
      return createVNode(type, propsOrChildren, children);
    }
  }

  function initCustomFormatter() {
    if (typeof window =3D=3D=3D "undefined") {
      return;
    }
    const vueStyle =3D { style: "color:#3ba776" };
    const numberStyle =3D { style: "color:#1677ff" };
    const stringStyle =3D { style: "color:#f5222d" };
    const keywordStyle =3D { style: "color:#eb2f96" };
    const formatter =3D {
      __vue_custom_formatter: true,
      header(obj) {
        if (!isObject(obj)) {
          return null;
        }
        if (obj.__isVue) {
          return ["div", vueStyle, `VueInstance`];
        } else if (isRef(obj)) {
          pauseTracking();
          const value =3D obj.value;
          resetTracking();
          return [
            "div",
            {},
            ["span", vueStyle, genRefFlag(obj)],
            "&lt;",
            formatValue(value),
            `&gt;`
          ];
        } else if (isReactive(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reacti=
ve"],
            "&lt;",
            formatValue(obj),
            `&gt;${isReadonly(obj) ? ` (readonly)` : ``}`
          ];
        } else if (isReadonly(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readon=
ly"],
            "&lt;",
            formatValue(obj),
            "&gt;"
          ];
        }
        return null;
      },
      hasBody(obj) {
        return obj &amp;&amp; obj.__isVue;
      },
      body(obj) {
        if (obj &amp;&amp; obj.__isVue) {
          return [
            "div",
            {},
            ...formatInstance(obj.$)
          ];
        }
      }
    };
    function formatInstance(instance) {
      const blocks =3D [];
      if (instance.type.props &amp;&amp; instance.props) {
        blocks.push(createInstanceBlock("props", toRaw(instance.props)));
      }
      if (instance.setupState !=3D=3D EMPTY_OBJ) {
        blocks.push(createInstanceBlock("setup", instance.setupState));
      }
      if (instance.data !=3D=3D EMPTY_OBJ) {
        blocks.push(createInstanceBlock("data", toRaw(instance.data)));
      }
      const computed =3D extractKeys(instance, "computed");
      if (computed) {
        blocks.push(createInstanceBlock("computed", computed));
      }
      const injected =3D extractKeys(instance, "inject");
      if (injected) {
        blocks.push(createInstanceBlock("injected", injected));
      }
      blocks.push([
        "div",
        {},
        [
          "span",
          {
            style: keywordStyle.style + ";opacity:0.66"
          },
          "$ (internal): "
        ],
        ["object", { object: instance }]
      ]);
      return blocks;
    }
    function createInstanceBlock(type, target) {
      target =3D extend({}, target);
      if (!Object.keys(target).length) {
        return ["span", {}];
      }
      return [
        "div",
        { style: "line-height:1.25em;margin-bottom:0.6em" },
        [
          "div",
          {
            style: "color:#476582"
          },
          type
        ],
        [
          "div",
          {
            style: "padding-left:1.25em"
          },
          ...Object.keys(target).map((key) =3D&gt; {
            return [
              "div",
              {},
              ["span", keywordStyle, key + ": "],
              formatValue(target[key], false)
            ];
          })
        ]
      ];
    }
    function formatValue(v, asRaw =3D true) {
      if (typeof v =3D=3D=3D "number") {
        return ["span", numberStyle, v];
      } else if (typeof v =3D=3D=3D "string") {
        return ["span", stringStyle, JSON.stringify(v)];
      } else if (typeof v =3D=3D=3D "boolean") {
        return ["span", keywordStyle, v];
      } else if (isObject(v)) {
        return ["object", { object: asRaw ? toRaw(v) : v }];
      } else {
        return ["span", stringStyle, String(v)];
      }
    }
    function extractKeys(instance, type) {
      const Comp =3D instance.type;
      if (isFunction(Comp)) {
        return;
      }
      const extracted =3D {};
      for (const key in instance.ctx) {
        if (isKeyOfType(Comp, key, type)) {
          extracted[key] =3D instance.ctx[key];
        }
      }
      return extracted;
    }
    function isKeyOfType(Comp, key, type) {
      const opts =3D Comp[type];
      if (isArray(opts) &amp;&amp; opts.includes(key) || isObject(opts) &am=
p;&amp; key in opts) {
        return true;
      }
      if (Comp.extends &amp;&amp; isKeyOfType(Comp.extends, key, type)) {
        return true;
      }
      if (Comp.mixins &amp;&amp; Comp.mixins.some((m) =3D&gt; isKeyOfType(m=
, key, type))) {
        return true;
      }
    }
    function genRefFlag(v) {
      if (isShallow(v)) {
        return `ShallowRef`;
      }
      if (v.effect) {
        return `ComputedRef`;
      }
      return `Ref`;
    }
    if (window.devtoolsFormatters) {
      window.devtoolsFormatters.push(formatter);
    } else {
      window.devtoolsFormatters =3D [formatter];
    }
  }

  function withMemo(memo, render, cache, index) {
    const cached =3D cache[index];
    if (cached &amp;&amp; isMemoSame(cached, memo)) {
      return cached;
    }
    const ret =3D render();
    ret.memo =3D memo.slice();
    ret.cacheIndex =3D index;
    return cache[index] =3D ret;
  }
  function isMemoSame(cached, memo) {
    const prev =3D cached.memo;
    if (prev.length !=3D memo.length) {
      return false;
    }
    for (let i =3D 0; i &lt; prev.length; i++) {
      if (hasChanged(prev[i], memo[i])) {
        return false;
      }
    }
    if (isBlockTreeEnabled &gt; 0 &amp;&amp; currentBlock) {
      currentBlock.push(cached);
    }
    return true;
  }

  const version =3D "3.5.17";
  const warn =3D warn$1 ;
  const ErrorTypeStrings =3D ErrorTypeStrings$1 ;
  const devtools =3D devtools$1 ;
  const setDevtoolsHook =3D setDevtoolsHook$1 ;
  const ssrUtils =3D null;
  const resolveFilter =3D null;
  const compatUtils =3D null;
  const DeprecationTypes =3D null;

  let policy =3D void 0;
  const tt =3D typeof window !=3D=3D "undefined" &amp;&amp; window.trustedT=
ypes;
  if (tt) {
    try {
      policy =3D /* @__PURE__ */ tt.createPolicy("vue", {
        createHTML: (val) =3D&gt; val
      });
    } catch (e) {
      warn(`Error creating trusted types policy: ${e}`);
    }
  }
  const unsafeToTrustedHTML =3D policy ? (val) =3D&gt; policy.createHTML(va=
l) : (val) =3D&gt; val;
  const svgNS =3D "http://www.w3.org/2000/svg";
  const mathmlNS =3D "http://www.w3.org/1998/Math/MathML";
  const doc =3D typeof document !=3D=3D "undefined" ? document : null;
  const templateContainer =3D doc &amp;&amp; /* @__PURE__ */ doc.createElem=
ent("template");
  const nodeOps =3D {
    insert: (child, parent, anchor) =3D&gt; {
      parent.insertBefore(child, anchor || null);
    },
    remove: (child) =3D&gt; {
      const parent =3D child.parentNode;
      if (parent) {
        parent.removeChild(child);
      }
    },
    createElement: (tag, namespace, is, props) =3D&gt; {
      const el =3D namespace =3D=3D=3D "svg" ? doc.createElementNS(svgNS, t=
ag) : namespace =3D=3D=3D "mathml" ? doc.createElementNS(mathmlNS, tag) : i=
s ? doc.createElement(tag, { is }) : doc.createElement(tag);
      if (tag =3D=3D=3D "select" &amp;&amp; props &amp;&amp; props.multiple=
 !=3D null) {
        el.setAttribute("multiple", props.multiple);
      }
      return el;
    },
    createText: (text) =3D&gt; doc.createTextNode(text),
    createComment: (text) =3D&gt; doc.createComment(text),
    setText: (node, text) =3D&gt; {
      node.nodeValue =3D text;
    },
    setElementText: (el, text) =3D&gt; {
      el.textContent =3D text;
    },
    parentNode: (node) =3D&gt; node.parentNode,
    nextSibling: (node) =3D&gt; node.nextSibling,
    querySelector: (selector) =3D&gt; doc.querySelector(selector),
    setScopeId(el, id) {
      el.setAttribute(id, "");
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(content, parent, anchor, namespace, start, end) {
      const before =3D anchor ? anchor.previousSibling : parent.lastChild;
      if (start &amp;&amp; (start =3D=3D=3D end || start.nextSibling)) {
        while (true) {
          parent.insertBefore(start.cloneNode(true), anchor);
          if (start =3D=3D=3D end || !(start =3D start.nextSibling)) break;
        }
      } else {
        templateContainer.innerHTML =3D unsafeToTrustedHTML(
          namespace =3D=3D=3D "svg" ? `&lt;svg&gt;${content}&lt;/svg&gt;` :=
 namespace =3D=3D=3D "mathml" ? `&lt;math&gt;${content}&lt;/math&gt;` : con=
tent
        );
        const template =3D templateContainer.content;
        if (namespace =3D=3D=3D "svg" || namespace =3D=3D=3D "mathml") {
          const wrapper =3D template.firstChild;
          while (wrapper.firstChild) {
            template.appendChild(wrapper.firstChild);
          }
          template.removeChild(wrapper);
        }
        parent.insertBefore(template, anchor);
      }
      return [
        // first
        before ? before.nextSibling : parent.firstChild,
        // last
        anchor ? anchor.previousSibling : parent.lastChild
      ];
    }
  };

  const TRANSITION$1 =3D "transition";
  const ANIMATION =3D "animation";
  const vtcKey =3D Symbol("_vtc");
  const DOMTransitionPropsValidators =3D {
    name: String,
    type: String,
    css: {
      type: Boolean,
      default: true
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  };
  const TransitionPropsValidators =3D /* @__PURE__ */ extend(
    {},
    BaseTransitionPropsValidators,
    DOMTransitionPropsValidators
  );
  const decorate$1 =3D (t) =3D&gt; {
    t.displayName =3D "Transition";
    t.props =3D TransitionPropsValidators;
    return t;
  };
  const Transition =3D /* @__PURE__ */ decorate$1(
    (props, { slots }) =3D&gt; h(BaseTransition, resolveTransitionProps(pro=
ps), slots)
  );
  const callHook =3D (hook, args =3D []) =3D&gt; {
    if (isArray(hook)) {
      hook.forEach((h2) =3D&gt; h2(...args));
    } else if (hook) {
      hook(...args);
    }
  };
  const hasExplicitCallback =3D (hook) =3D&gt; {
    return hook ? isArray(hook) ? hook.some((h2) =3D&gt; h2.length &gt; 1) =
: hook.length &gt; 1 : false;
  };
  function resolveTransitionProps(rawProps) {
    const baseProps =3D {};
    for (const key in rawProps) {
      if (!(key in DOMTransitionPropsValidators)) {
        baseProps[key] =3D rawProps[key];
      }
    }
    if (rawProps.css =3D=3D=3D false) {
      return baseProps;
    }
    const {
      name =3D "v",
      type,
      duration,
      enterFromClass =3D `${name}-enter-from`,
      enterActiveClass =3D `${name}-enter-active`,
      enterToClass =3D `${name}-enter-to`,
      appearFromClass =3D enterFromClass,
      appearActiveClass =3D enterActiveClass,
      appearToClass =3D enterToClass,
      leaveFromClass =3D `${name}-leave-from`,
      leaveActiveClass =3D `${name}-leave-active`,
      leaveToClass =3D `${name}-leave-to`
    } =3D rawProps;
    const durations =3D normalizeDuration(duration);
    const enterDuration =3D durations &amp;&amp; durations[0];
    const leaveDuration =3D durations &amp;&amp; durations[1];
    const {
      onBeforeEnter,
      onEnter,
      onEnterCancelled,
      onLeave,
      onLeaveCancelled,
      onBeforeAppear =3D onBeforeEnter,
      onAppear =3D onEnter,
      onAppearCancelled =3D onEnterCancelled
    } =3D baseProps;
    const finishEnter =3D (el, isAppear, done, isCancelled) =3D&gt; {
      el._enterCancelled =3D isCancelled;
      removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
      removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveC=
lass);
      done &amp;&amp; done();
    };
    const finishLeave =3D (el, done) =3D&gt; {
      el._isLeaving =3D false;
      removeTransitionClass(el, leaveFromClass);
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
      done &amp;&amp; done();
    };
    const makeEnterHook =3D (isAppear) =3D&gt; {
      return (el, done) =3D&gt; {
        const hook =3D isAppear ? onAppear : onEnter;
        const resolve =3D () =3D&gt; finishEnter(el, isAppear, done);
        callHook(hook, [el, resolve]);
        nextFrame(() =3D&gt; {
          removeTransitionClass(el, isAppear ? appearFromClass : enterFromC=
lass);
          addTransitionClass(el, isAppear ? appearToClass : enterToClass);
          if (!hasExplicitCallback(hook)) {
            whenTransitionEnds(el, type, enterDuration, resolve);
          }
        });
      };
    };
    return extend(baseProps, {
      onBeforeEnter(el) {
        callHook(onBeforeEnter, [el]);
        addTransitionClass(el, enterFromClass);
        addTransitionClass(el, enterActiveClass);
      },
      onBeforeAppear(el) {
        callHook(onBeforeAppear, [el]);
        addTransitionClass(el, appearFromClass);
        addTransitionClass(el, appearActiveClass);
      },
      onEnter: makeEnterHook(false),
      onAppear: makeEnterHook(true),
      onLeave(el, done) {
        el._isLeaving =3D true;
        const resolve =3D () =3D&gt; finishLeave(el, done);
        addTransitionClass(el, leaveFromClass);
        if (!el._enterCancelled) {
          forceReflow();
          addTransitionClass(el, leaveActiveClass);
        } else {
          addTransitionClass(el, leaveActiveClass);
          forceReflow();
        }
        nextFrame(() =3D&gt; {
          if (!el._isLeaving) {
            return;
          }
          removeTransitionClass(el, leaveFromClass);
          addTransitionClass(el, leaveToClass);
          if (!hasExplicitCallback(onLeave)) {
            whenTransitionEnds(el, type, leaveDuration, resolve);
          }
        });
        callHook(onLeave, [el, resolve]);
      },
      onEnterCancelled(el) {
        finishEnter(el, false, void 0, true);
        callHook(onEnterCancelled, [el]);
      },
      onAppearCancelled(el) {
        finishEnter(el, true, void 0, true);
        callHook(onAppearCancelled, [el]);
      },
      onLeaveCancelled(el) {
        finishLeave(el);
        callHook(onLeaveCancelled, [el]);
      }
    });
  }
  function normalizeDuration(duration) {
    if (duration =3D=3D null) {
      return null;
    } else if (isObject(duration)) {
      return [NumberOf(duration.enter), NumberOf(duration.leave)];
    } else {
      const n =3D NumberOf(duration);
      return [n, n];
    }
  }
  function NumberOf(val) {
    const res =3D toNumber(val);
    {
      assertNumber(res, "&lt;transition&gt; explicit duration");
    }
    return res;
  }
  function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c) =3D&gt; c &amp;&amp; el.classList.add(c));
    (el[vtcKey] || (el[vtcKey] =3D /* @__PURE__ */ new Set())).add(cls);
  }
  function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c) =3D&gt; c &amp;&amp; el.classList.remove(c=
));
    const _vtc =3D el[vtcKey];
    if (_vtc) {
      _vtc.delete(cls);
      if (!_vtc.size) {
        el[vtcKey] =3D void 0;
      }
    }
  }
  function nextFrame(cb) {
    requestAnimationFrame(() =3D&gt; {
      requestAnimationFrame(cb);
    });
  }
  let endId =3D 0;
  function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id =3D el._endId =3D ++endId;
    const resolveIfNotStale =3D () =3D&gt; {
      if (id =3D=3D=3D el._endId) {
        resolve();
      }
    };
    if (explicitTimeout !=3D null) {
      return setTimeout(resolveIfNotStale, explicitTimeout);
    }
    const { type, timeout, propCount } =3D getTransitionInfo(el, expectedTy=
pe);
    if (!type) {
      return resolve();
    }
    const endEvent =3D type + "end";
    let ended =3D 0;
    const end =3D () =3D&gt; {
      el.removeEventListener(endEvent, onEnd);
      resolveIfNotStale();
    };
    const onEnd =3D (e) =3D&gt; {
      if (e.target =3D=3D=3D el &amp;&amp; ++ended &gt;=3D propCount) {
        end();
      }
    };
    setTimeout(() =3D&gt; {
      if (ended &lt; propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
  }
  function getTransitionInfo(el, expectedType) {
    const styles =3D window.getComputedStyle(el);
    const getStyleProperties =3D (key) =3D&gt; (styles[key] || "").split(",=
 ");
    const transitionDelays =3D getStyleProperties(`${TRANSITION$1}Delay`);
    const transitionDurations =3D getStyleProperties(`${TRANSITION$1}Durati=
on`);
    const transitionTimeout =3D getTimeout(transitionDelays, transitionDura=
tions);
    const animationDelays =3D getStyleProperties(`${ANIMATION}Delay`);
    const animationDurations =3D getStyleProperties(`${ANIMATION}Duration`)=
;
    const animationTimeout =3D getTimeout(animationDelays, animationDuratio=
ns);
    let type =3D null;
    let timeout =3D 0;
    let propCount =3D 0;
    if (expectedType =3D=3D=3D TRANSITION$1) {
      if (transitionTimeout &gt; 0) {
        type =3D TRANSITION$1;
        timeout =3D transitionTimeout;
        propCount =3D transitionDurations.length;
      }
    } else if (expectedType =3D=3D=3D ANIMATION) {
      if (animationTimeout &gt; 0) {
        type =3D ANIMATION;
        timeout =3D animationTimeout;
        propCount =3D animationDurations.length;
      }
    } else {
      timeout =3D Math.max(transitionTimeout, animationTimeout);
      type =3D timeout &gt; 0 ? transitionTimeout &gt; animationTimeout ? T=
RANSITION$1 : ANIMATION : null;
      propCount =3D type ? type =3D=3D=3D TRANSITION$1 ? transitionDuration=
s.length : animationDurations.length : 0;
    }
    const hasTransform =3D type =3D=3D=3D TRANSITION$1 &amp;&amp; /\b(trans=
form|all)(,|$)/.test(
      getStyleProperties(`${TRANSITION$1}Property`).toString()
    );
    return {
      type,
      timeout,
      propCount,
      hasTransform
    };
  }
  function getTimeout(delays, durations) {
    while (delays.length &lt; durations.length) {
      delays =3D delays.concat(delays);
    }
    return Math.max(...durations.map((d, i) =3D&gt; toMs(d) + toMs(delays[i=
])));
  }
  function toMs(s) {
    if (s =3D=3D=3D "auto") return 0;
    return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function forceReflow() {
    return document.body.offsetHeight;
  }

  function patchClass(el, value, isSVG) {
    const transitionClasses =3D el[vtcKey];
    if (transitionClasses) {
      value =3D (value ? [value, ...transitionClasses] : [...transitionClas=
ses]).join(" ");
    }
    if (value =3D=3D null) {
      el.removeAttribute("class");
    } else if (isSVG) {
      el.setAttribute("class", value);
    } else {
      el.className =3D value;
    }
  }

  const vShowOriginalDisplay =3D Symbol("_vod");
  const vShowHidden =3D Symbol("_vsh");
  const vShow =3D {
    beforeMount(el, { value }, { transition }) {
      el[vShowOriginalDisplay] =3D el.style.display =3D=3D=3D "none" ? "" :=
 el.style.display;
      if (transition &amp;&amp; value) {
        transition.beforeEnter(el);
      } else {
        setDisplay(el, value);
      }
    },
    mounted(el, { value }, { transition }) {
      if (transition &amp;&amp; value) {
        transition.enter(el);
      }
    },
    updated(el, { value, oldValue }, { transition }) {
      if (!value =3D=3D=3D !oldValue) return;
      if (transition) {
        if (value) {
          transition.beforeEnter(el);
          setDisplay(el, true);
          transition.enter(el);
        } else {
          transition.leave(el, () =3D&gt; {
            setDisplay(el, false);
          });
        }
      } else {
        setDisplay(el, value);
      }
    },
    beforeUnmount(el, { value }) {
      setDisplay(el, value);
    }
  };
  {
    vShow.name =3D "show";
  }
  function setDisplay(el, value) {
    el.style.display =3D value ? el[vShowOriginalDisplay] : "none";
    el[vShowHidden] =3D !value;
  }

  const CSS_VAR_TEXT =3D Symbol("CSS_VAR_TEXT" );
  function useCssVars(getter) {
    const instance =3D getCurrentInstance();
    if (!instance) {
      warn(`useCssVars is called without current active component instance.=
`);
      return;
    }
    const updateTeleports =3D instance.ut =3D (vars =3D getter(instance.pro=
xy)) =3D&gt; {
      Array.from(
        document.querySelectorAll(`[data-v-owner=3D"${instance.uid}"]`)
      ).forEach((node) =3D&gt; setVarsOnNode(node, vars));
    };
    {
      instance.getCssVars =3D () =3D&gt; getter(instance.proxy);
    }
    const setVars =3D () =3D&gt; {
      const vars =3D getter(instance.proxy);
      if (instance.ce) {
        setVarsOnNode(instance.ce, vars);
      } else {
        setVarsOnVNode(instance.subTree, vars);
      }
      updateTeleports(vars);
    };
    onBeforeUpdate(() =3D&gt; {
      queuePostFlushCb(setVars);
    });
    onMounted(() =3D&gt; {
      watch(setVars, NOOP, { flush: "post" });
      const ob =3D new MutationObserver(setVars);
      ob.observe(instance.subTree.el.parentNode, { childList: true });
      onUnmounted(() =3D&gt; ob.disconnect());
    });
  }
  function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag &amp; 128) {
      const suspense =3D vnode.suspense;
      vnode =3D suspense.activeBranch;
      if (suspense.pendingBranch &amp;&amp; !suspense.isHydrating) {
        suspense.effects.push(() =3D&gt; {
          setVarsOnVNode(suspense.activeBranch, vars);
        });
      }
    }
    while (vnode.component) {
      vnode =3D vnode.component.subTree;
    }
    if (vnode.shapeFlag &amp; 1 &amp;&amp; vnode.el) {
      setVarsOnNode(vnode.el, vars);
    } else if (vnode.type =3D=3D=3D Fragment) {
      vnode.children.forEach((c) =3D&gt; setVarsOnVNode(c, vars));
    } else if (vnode.type =3D=3D=3D Static) {
      let { el, anchor } =3D vnode;
      while (el) {
        setVarsOnNode(el, vars);
        if (el =3D=3D=3D anchor) break;
        el =3D el.nextSibling;
      }
    }
  }
  function setVarsOnNode(el, vars) {
    if (el.nodeType =3D=3D=3D 1) {
      const style =3D el.style;
      let cssText =3D "";
      for (const key in vars) {
        style.setProperty(`--${key}`, vars[key]);
        cssText +=3D `--${key}: ${vars[key]};`;
      }
      style[CSS_VAR_TEXT] =3D cssText;
    }
  }

  const displayRE =3D /(^|;)\s*display\s*:/;
  function patchStyle(el, prev, next) {
    const style =3D el.style;
    const isCssString =3D isString(next);
    let hasControlledDisplay =3D false;
    if (next &amp;&amp; !isCssString) {
      if (prev) {
        if (!isString(prev)) {
          for (const key in prev) {
            if (next[key] =3D=3D null) {
              setStyle(style, key, "");
            }
          }
        } else {
          for (const prevStyle of prev.split(";")) {
            const key =3D prevStyle.slice(0, prevStyle.indexOf(":")).trim()=
;
            if (next[key] =3D=3D null) {
              setStyle(style, key, "");
            }
          }
        }
      }
      for (const key in next) {
        if (key =3D=3D=3D "display") {
          hasControlledDisplay =3D true;
        }
        setStyle(style, key, next[key]);
      }
    } else {
      if (isCssString) {
        if (prev !=3D=3D next) {
          const cssVarText =3D style[CSS_VAR_TEXT];
          if (cssVarText) {
            next +=3D ";" + cssVarText;
          }
          style.cssText =3D next;
          hasControlledDisplay =3D displayRE.test(next);
        }
      } else if (prev) {
        el.removeAttribute("style");
      }
    }
    if (vShowOriginalDisplay in el) {
      el[vShowOriginalDisplay] =3D hasControlledDisplay ? style.display : "=
";
      if (el[vShowHidden]) {
        style.display =3D "none";
      }
    }
  }
  const semicolonRE =3D /[^\\];\s*$/;
  const importantRE =3D /\s*!important$/;
  function setStyle(style, name, val) {
    if (isArray(val)) {
      val.forEach((v) =3D&gt; setStyle(style, name, v));
    } else {
      if (val =3D=3D null) val =3D "";
      {
        if (semicolonRE.test(val)) {
          warn(
            `Unexpected semicolon at the end of '${name}' style value: '${v=
al}'`
          );
        }
      }
      if (name.startsWith("--")) {
        style.setProperty(name, val);
      } else {
        const prefixed =3D autoPrefix(style, name);
        if (importantRE.test(val)) {
          style.setProperty(
            hyphenate(prefixed),
            val.replace(importantRE, ""),
            "important"
          );
        } else {
          style[prefixed] =3D val;
        }
      }
    }
  }
  const prefixes =3D ["Webkit", "Moz", "ms"];
  const prefixCache =3D {};
  function autoPrefix(style, rawName) {
    const cached =3D prefixCache[rawName];
    if (cached) {
      return cached;
    }
    let name =3D camelize(rawName);
    if (name !=3D=3D "filter" &amp;&amp; name in style) {
      return prefixCache[rawName] =3D name;
    }
    name =3D capitalize(name);
    for (let i =3D 0; i &lt; prefixes.length; i++) {
      const prefixed =3D prefixes[i] + name;
      if (prefixed in style) {
        return prefixCache[rawName] =3D prefixed;
      }
    }
    return rawName;
  }

  const xlinkNS =3D "http://www.w3.org/1999/xlink";
  function patchAttr(el, key, value, isSVG, instance, isBoolean =3D isSpeci=
alBooleanAttr(key)) {
    if (isSVG &amp;&amp; key.startsWith("xlink:")) {
      if (value =3D=3D null) {
        el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      if (value =3D=3D null || isBoolean &amp;&amp; !includeBooleanAttr(val=
ue)) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(
          key,
          isBoolean ? "" : isSymbol(value) ? String(value) : value
        );
      }
    }
  }

  function patchDOMProp(el, key, value, parentComponent, attrName) {
    if (key =3D=3D=3D "innerHTML" || key =3D=3D=3D "textContent") {
      if (value !=3D null) {
        el[key] =3D key =3D=3D=3D "innerHTML" ? unsafeToTrustedHTML(value) =
: value;
      }
      return;
    }
    const tag =3D el.tagName;
    if (key =3D=3D=3D "value" &amp;&amp; tag !=3D=3D "PROGRESS" &amp;&amp; =
// custom elements may use _value internally
    !tag.includes("-")) {
      const oldValue =3D tag =3D=3D=3D "OPTION" ? el.getAttribute("value") =
|| "" : el.value;
      const newValue =3D value =3D=3D null ? (
        // #11647: value should be set as empty string for null and undefin=
ed,
        // but &lt;input type=3D"checkbox"&gt; should be set as 'on'.
        el.type =3D=3D=3D "checkbox" ? "on" : ""
      ) : String(value);
      if (oldValue !=3D=3D newValue || !("_value" in el)) {
        el.value =3D newValue;
      }
      if (value =3D=3D null) {
        el.removeAttribute(key);
      }
      el._value =3D value;
      return;
    }
    let needRemove =3D false;
    if (value =3D=3D=3D "" || value =3D=3D null) {
      const type =3D typeof el[key];
      if (type =3D=3D=3D "boolean") {
        value =3D includeBooleanAttr(value);
      } else if (value =3D=3D null &amp;&amp; type =3D=3D=3D "string") {
        value =3D "";
        needRemove =3D true;
      } else if (type =3D=3D=3D "number") {
        value =3D 0;
        needRemove =3D true;
      }
    }
    try {
      el[key] =3D value;
    } catch (e) {
      if (!needRemove) {
        warn(
          `Failed setting prop "${key}" on &lt;${tag.toLowerCase()}&gt;: va=
lue ${value} is invalid.`,
          e
        );
      }
    }
    needRemove &amp;&amp; el.removeAttribute(attrName || key);
  }

  function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
  }
  function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
  }
  const veiKey =3D Symbol("_vei");
  function patchEvent(el, rawName, prevValue, nextValue, instance =3D null)=
 {
    const invokers =3D el[veiKey] || (el[veiKey] =3D {});
    const existingInvoker =3D invokers[rawName];
    if (nextValue &amp;&amp; existingInvoker) {
      existingInvoker.value =3D sanitizeEventValue(nextValue, rawName) ;
    } else {
      const [name, options] =3D parseName(rawName);
      if (nextValue) {
        const invoker =3D invokers[rawName] =3D createInvoker(
          sanitizeEventValue(nextValue, rawName) ,
          instance
        );
        addEventListener(el, name, invoker, options);
      } else if (existingInvoker) {
        removeEventListener(el, name, existingInvoker, options);
        invokers[rawName] =3D void 0;
      }
    }
  }
  const optionsModifierRE =3D /(?:Once|Passive|Capture)$/;
  function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
      options =3D {};
      let m;
      while (m =3D name.match(optionsModifierRE)) {
        name =3D name.slice(0, name.length - m[0].length);
        options[m[0].toLowerCase()] =3D true;
      }
    }
    const event =3D name[2] =3D=3D=3D ":" ? name.slice(3) : hyphenate(name.=
slice(2));
    return [event, options];
  }
  let cachedNow =3D 0;
  const p =3D /* @__PURE__ */ Promise.resolve();
  const getNow =3D () =3D&gt; cachedNow || (p.then(() =3D&gt; cachedNow =3D=
 0), cachedNow =3D Date.now());
  function createInvoker(initialValue, instance) {
    const invoker =3D (e) =3D&gt; {
      if (!e._vts) {
        e._vts =3D Date.now();
      } else if (e._vts &lt;=3D invoker.attached) {
        return;
      }
      callWithAsyncErrorHandling(
        patchStopImmediatePropagation(e, invoker.value),
        instance,
        5,
        [e]
      );
    };
    invoker.value =3D initialValue;
    invoker.attached =3D getNow();
    return invoker;
  }
  function sanitizeEventValue(value, propName) {
    if (isFunction(value) || isArray(value)) {
      return value;
    }
    warn(
      `Wrong type passed as event handler to ${propName} - did you forget @=
 or : in front of your prop?
Expected function or array of functions, received type ${typeof value}.`
    );
    return NOOP;
  }
  function patchStopImmediatePropagation(e, value) {
    if (isArray(value)) {
      const originalStop =3D e.stopImmediatePropagation;
      e.stopImmediatePropagation =3D () =3D&gt; {
        originalStop.call(e);
        e._stopped =3D true;
      };
      return value.map(
        (fn) =3D&gt; (e2) =3D&gt; !e2._stopped &amp;&amp; fn &amp;&amp; fn(=
e2)
      );
    } else {
      return value;
    }
  }

  const isNativeOn =3D (key) =3D&gt; key.charCodeAt(0) =3D=3D=3D 111 &amp;&=
amp; key.charCodeAt(1) =3D=3D=3D 110 &amp;&amp; // lowercase letter
  key.charCodeAt(2) &gt; 96 &amp;&amp; key.charCodeAt(2) &lt; 123;
  const patchProp =3D (el, key, prevValue, nextValue, namespace, parentComp=
onent) =3D&gt; {
    const isSVG =3D namespace =3D=3D=3D "svg";
    if (key =3D=3D=3D "class") {
      patchClass(el, nextValue, isSVG);
    } else if (key =3D=3D=3D "style") {
      patchStyle(el, prevValue, nextValue);
    } else if (isOn(key)) {
      if (!isModelListener(key)) {
        patchEvent(el, key, prevValue, nextValue, parentComponent);
      }
    } else if (key[0] =3D=3D=3D "." ? (key =3D key.slice(1), true) : key[0]=
 =3D=3D=3D "^" ? (key =3D key.slice(1), false) : shouldSetAsProp(el, key, n=
extValue, isSVG)) {
      patchDOMProp(el, key, nextValue);
      if (!el.tagName.includes("-") &amp;&amp; (key =3D=3D=3D "value" || ke=
y =3D=3D=3D "checked" || key =3D=3D=3D "selected")) {
        patchAttr(el, key, nextValue, isSVG, parentComponent, key !=3D=3D "=
value");
      }
    } else if (
      // #11081 force set props for possible async custom element
      el._isVueCE &amp;&amp; (/[A-Z]/.test(key) || !isString(nextValue))
    ) {
      patchDOMProp(el, camelize(key), nextValue, parentComponent, key);
    } else {
      if (key =3D=3D=3D "true-value") {
        el._trueValue =3D nextValue;
      } else if (key =3D=3D=3D "false-value") {
        el._falseValue =3D nextValue;
      }
      patchAttr(el, key, nextValue, isSVG);
    }
  };
  function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
      if (key =3D=3D=3D "innerHTML" || key =3D=3D=3D "textContent") {
        return true;
      }
      if (key in el &amp;&amp; isNativeOn(key) &amp;&amp; isFunction(value)=
) {
        return true;
      }
      return false;
    }
    if (key =3D=3D=3D "spellcheck" || key =3D=3D=3D "draggable" || key =3D=
=3D=3D "translate" || key =3D=3D=3D "autocorrect") {
      return false;
    }
    if (key =3D=3D=3D "form") {
      return false;
    }
    if (key =3D=3D=3D "list" &amp;&amp; el.tagName =3D=3D=3D "INPUT") {
      return false;
    }
    if (key =3D=3D=3D "type" &amp;&amp; el.tagName =3D=3D=3D "TEXTAREA") {
      return false;
    }
    if (key =3D=3D=3D "width" || key =3D=3D=3D "height") {
      const tag =3D el.tagName;
      if (tag =3D=3D=3D "IMG" || tag =3D=3D=3D "VIDEO" || tag =3D=3D=3D "CA=
NVAS" || tag =3D=3D=3D "SOURCE") {
        return false;
      }
    }
    if (isNativeOn(key) &amp;&amp; isString(value)) {
      return false;
    }
    return key in el;
  }

  const REMOVAL =3D {};
  /*! #__NO_SIDE_EFFECTS__ */
  // @__NO_SIDE_EFFECTS__
  function defineCustomElement(options, extraOptions, _createApp) {
    const Comp =3D defineComponent(options, extraOptions);
    if (isPlainObject(Comp)) extend(Comp, extraOptions);
    class VueCustomElement extends VueElement {
      constructor(initialProps) {
        super(Comp, initialProps, _createApp);
      }
    }
    VueCustomElement.def =3D Comp;
    return VueCustomElement;
  }
  /*! #__NO_SIDE_EFFECTS__ */
  const defineSSRCustomElement =3D /* @__NO_SIDE_EFFECTS__ */ (options, ext=
raOptions) =3D&gt; {
    return /* @__PURE__ */ defineCustomElement(options, extraOptions, creat=
eSSRApp);
  };
  const BaseClass =3D typeof HTMLElement !=3D=3D "undefined" ? HTMLElement =
: class {
  };
  class VueElement extends BaseClass {
    constructor(_def, _props =3D {}, _createApp =3D createApp) {
      super();
      this._def =3D _def;
      this._props =3D _props;
      this._createApp =3D _createApp;
      this._isVueCE =3D true;
      /**
       * @internal
       */
      this._instance =3D null;
      /**
       * @internal
       */
      this._app =3D null;
      /**
       * @internal
       */
      this._nonce =3D this._def.nonce;
      this._connected =3D false;
      this._resolved =3D false;
      this._numberProps =3D null;
      this._styleChildren =3D /* @__PURE__ */ new WeakSet();
      this._ob =3D null;
      if (this.shadowRoot &amp;&amp; _createApp !=3D=3D createApp) {
        this._root =3D this.shadowRoot;
      } else {
        if (this.shadowRoot) {
          warn(
            `Custom element has pre-rendered declarative shadow root but is=
 not defined as hydratable. Use \`defineSSRCustomElement\`.`
          );
        }
        if (_def.shadowRoot !=3D=3D false) {
          this.attachShadow({ mode: "open" });
          this._root =3D this.shadowRoot;
        } else {
          this._root =3D this;
        }
      }
    }
    connectedCallback() {
      if (!this.isConnected) return;
      if (!this.shadowRoot &amp;&amp; !this._resolved) {
        this._parseSlots();
      }
      this._connected =3D true;
      let parent =3D this;
      while (parent =3D parent &amp;&amp; (parent.parentNode || parent.host=
)) {
        if (parent instanceof VueElement) {
          this._parent =3D parent;
          break;
        }
      }
      if (!this._instance) {
        if (this._resolved) {
          this._mount(this._def);
        } else {
          if (parent &amp;&amp; parent._pendingResolve) {
            this._pendingResolve =3D parent._pendingResolve.then(() =3D&gt;=
 {
              this._pendingResolve =3D void 0;
              this._resolveDef();
            });
          } else {
            this._resolveDef();
          }
        }
      }
    }
    _setParent(parent =3D this._parent) {
      if (parent) {
        this._instance.parent =3D parent._instance;
        this._inheritParentContext(parent);
      }
    }
    _inheritParentContext(parent =3D this._parent) {
      if (parent &amp;&amp; this._app) {
        Object.setPrototypeOf(
          this._app._context.provides,
          parent._instance.provides
        );
      }
    }
    disconnectedCallback() {
      this._connected =3D false;
      nextTick(() =3D&gt; {
        if (!this._connected) {
          if (this._ob) {
            this._ob.disconnect();
            this._ob =3D null;
          }
          this._app &amp;&amp; this._app.unmount();
          if (this._instance) this._instance.ce =3D void 0;
          this._app =3D this._instance =3D null;
        }
      });
    }
    /**
     * resolve inner component definition (handle possible async component)
     */
    _resolveDef() {
      if (this._pendingResolve) {
        return;
      }
      for (let i =3D 0; i &lt; this.attributes.length; i++) {
        this._setAttr(this.attributes[i].name);
      }
      this._ob =3D new MutationObserver((mutations) =3D&gt; {
        for (const m of mutations) {
          this._setAttr(m.attributeName);
        }
      });
      this._ob.observe(this, { attributes: true });
      const resolve =3D (def, isAsync =3D false) =3D&gt; {
        this._resolved =3D true;
        this._pendingResolve =3D void 0;
        const { props, styles } =3D def;
        let numberProps;
        if (props &amp;&amp; !isArray(props)) {
          for (const key in props) {
            const opt =3D props[key];
            if (opt =3D=3D=3D Number || opt &amp;&amp; opt.type =3D=3D=3D N=
umber) {
              if (key in this._props) {
                this._props[key] =3D toNumber(this._props[key]);
              }
              (numberProps || (numberProps =3D /* @__PURE__ */ Object.creat=
e(null)))[camelize(key)] =3D true;
            }
          }
        }
        this._numberProps =3D numberProps;
        this._resolveProps(def);
        if (this.shadowRoot) {
          this._applyStyles(styles);
        } else if (styles) {
          warn(
            "Custom element style injection is not supported when using sha=
dowRoot: false"
          );
        }
        this._mount(def);
      };
      const asyncDef =3D this._def.__asyncLoader;
      if (asyncDef) {
        this._pendingResolve =3D asyncDef().then((def) =3D&gt; {
          def.configureApp =3D this._def.configureApp;
          resolve(this._def =3D def, true);
        });
      } else {
        resolve(this._def);
      }
    }
    _mount(def) {
      if (!def.name) {
        def.name =3D "VueElement";
      }
      this._app =3D this._createApp(def);
      this._inheritParentContext();
      if (def.configureApp) {
        def.configureApp(this._app);
      }
      this._app._ceVNode =3D this._createVNode();
      this._app.mount(this._root);
      const exposed =3D this._instance &amp;&amp; this._instance.exposed;
      if (!exposed) return;
      for (const key in exposed) {
        if (!hasOwn(this, key)) {
          Object.defineProperty(this, key, {
            // unwrap ref to be consistent with public instance behavior
            get: () =3D&gt; unref(exposed[key])
          });
        } else {
          warn(`Exposed property "${key}" already exists on custom element.=
`);
        }
      }
    }
    _resolveProps(def) {
      const { props } =3D def;
      const declaredPropKeys =3D isArray(props) ? props : Object.keys(props=
 || {});
      for (const key of Object.keys(this)) {
        if (key[0] !=3D=3D "_" &amp;&amp; declaredPropKeys.includes(key)) {
          this._setProp(key, this[key]);
        }
      }
      for (const key of declaredPropKeys.map(camelize)) {
        Object.defineProperty(this, key, {
          get() {
            return this._getProp(key);
          },
          set(val) {
            this._setProp(key, val, true, true);
          }
        });
      }
    }
    _setAttr(key) {
      if (key.startsWith("data-v-")) return;
      const has =3D this.hasAttribute(key);
      let value =3D has ? this.getAttribute(key) : REMOVAL;
      const camelKey =3D camelize(key);
      if (has &amp;&amp; this._numberProps &amp;&amp; this._numberProps[cam=
elKey]) {
        value =3D toNumber(value);
      }
      this._setProp(camelKey, value, false, true);
    }
    /**
     * @internal
     */
    _getProp(key) {
      return this._props[key];
    }
    /**
     * @internal
     */
    _setProp(key, val, shouldReflect =3D true, shouldUpdate =3D false) {
      if (val !=3D=3D this._props[key]) {
        if (val =3D=3D=3D REMOVAL) {
          delete this._props[key];
        } else {
          this._props[key] =3D val;
          if (key =3D=3D=3D "key" &amp;&amp; this._app) {
            this._app._ceVNode.key =3D val;
          }
        }
        if (shouldUpdate &amp;&amp; this._instance) {
          this._update();
        }
        if (shouldReflect) {
          const ob =3D this._ob;
          ob &amp;&amp; ob.disconnect();
          if (val =3D=3D=3D true) {
            this.setAttribute(hyphenate(key), "");
          } else if (typeof val =3D=3D=3D "string" || typeof val =3D=3D=3D =
"number") {
            this.setAttribute(hyphenate(key), val + "");
          } else if (!val) {
            this.removeAttribute(hyphenate(key));
          }
          ob &amp;&amp; ob.observe(this, { attributes: true });
        }
      }
    }
    _update() {
      const vnode =3D this._createVNode();
      if (this._app) vnode.appContext =3D this._app._context;
      render(vnode, this._root);
    }
    _createVNode() {
      const baseProps =3D {};
      if (!this.shadowRoot) {
        baseProps.onVnodeMounted =3D baseProps.onVnodeUpdated =3D this._ren=
derSlots.bind(this);
      }
      const vnode =3D createVNode(this._def, extend(baseProps, this._props)=
);
      if (!this._instance) {
        vnode.ce =3D (instance) =3D&gt; {
          this._instance =3D instance;
          instance.ce =3D this;
          instance.isCE =3D true;
          {
            instance.ceReload =3D (newStyles) =3D&gt; {
              if (this._styles) {
                this._styles.forEach((s) =3D&gt; this._root.removeChild(s))=
;
                this._styles.length =3D 0;
              }
              this._applyStyles(newStyles);
              this._instance =3D null;
              this._update();
            };
          }
          const dispatch =3D (event, args) =3D&gt; {
            this.dispatchEvent(
              new CustomEvent(
                event,
                isPlainObject(args[0]) ? extend({ detail: args }, args[0]) =
: { detail: args }
              )
            );
          };
          instance.emit =3D (event, ...args) =3D&gt; {
            dispatch(event, args);
            if (hyphenate(event) !=3D=3D event) {
              dispatch(hyphenate(event), args);
            }
          };
          this._setParent();
        };
      }
      return vnode;
    }
    _applyStyles(styles, owner) {
      if (!styles) return;
      if (owner) {
        if (owner =3D=3D=3D this._def || this._styleChildren.has(owner)) {
          return;
        }
        this._styleChildren.add(owner);
      }
      const nonce =3D this._nonce;
      for (let i =3D styles.length - 1; i &gt;=3D 0; i--) {
        const s =3D document.createElement("style");
        if (nonce) s.setAttribute("nonce", nonce);
        s.textContent =3D styles[i];
        this.shadowRoot.prepend(s);
        {
          if (owner) {
            if (owner.__hmrId) {
              if (!this._childStyles) this._childStyles =3D /* @__PURE__ */=
 new Map();
              let entry =3D this._childStyles.get(owner.__hmrId);
              if (!entry) {
                this._childStyles.set(owner.__hmrId, entry =3D []);
              }
              entry.push(s);
            }
          } else {
            (this._styles || (this._styles =3D [])).push(s);
          }
        }
      }
    }
    /**
     * Only called when shadowRoot is false
     */
    _parseSlots() {
      const slots =3D this._slots =3D {};
      let n;
      while (n =3D this.firstChild) {
        const slotName =3D n.nodeType =3D=3D=3D 1 &amp;&amp; n.getAttribute=
("slot") || "default";
        (slots[slotName] || (slots[slotName] =3D [])).push(n);
        this.removeChild(n);
      }
    }
    /**
     * Only called when shadowRoot is false
     */
    _renderSlots() {
      const outlets =3D (this._teleportTarget || this).querySelectorAll("sl=
ot");
      const scopeId =3D this._instance.type.__scopeId;
      for (let i =3D 0; i &lt; outlets.length; i++) {
        const o =3D outlets[i];
        const slotName =3D o.getAttribute("name") || "default";
        const content =3D this._slots[slotName];
        const parent =3D o.parentNode;
        if (content) {
          for (const n of content) {
            if (scopeId &amp;&amp; n.nodeType =3D=3D=3D 1) {
              const id =3D scopeId + "-s";
              const walker =3D document.createTreeWalker(n, 1);
              n.setAttribute(id, "");
              let child;
              while (child =3D walker.nextNode()) {
                child.setAttribute(id, "");
              }
            }
            parent.insertBefore(n, o);
          }
        } else {
          while (o.firstChild) parent.insertBefore(o.firstChild, o);
        }
        parent.removeChild(o);
      }
    }
    /**
     * @internal
     */
    _injectChildStyle(comp) {
      this._applyStyles(comp.styles, comp);
    }
    /**
     * @internal
     */
    _removeChildStyle(comp) {
      {
        this._styleChildren.delete(comp);
        if (this._childStyles &amp;&amp; comp.__hmrId) {
          const oldStyles =3D this._childStyles.get(comp.__hmrId);
          if (oldStyles) {
            oldStyles.forEach((s) =3D&gt; this._root.removeChild(s));
            oldStyles.length =3D 0;
          }
        }
      }
    }
  }
  function useHost(caller) {
    const instance =3D getCurrentInstance();
    const el =3D instance &amp;&amp; instance.ce;
    if (el) {
      return el;
    } else {
      if (!instance) {
        warn(
          `${caller || "useHost"} called without an active component instan=
ce.`
        );
      } else {
        warn(
          `${caller || "useHost"} can only be used in components defined vi=
a defineCustomElement.`
        );
      }
    }
    return null;
  }
  function useShadowRoot() {
    const el =3D useHost("useShadowRoot") ;
    return el &amp;&amp; el.shadowRoot;
  }

  function useCssModule(name =3D "$style") {
    {
      {
        warn(`useCssModule() is not supported in the global build.`);
      }
      return EMPTY_OBJ;
    }
  }

  const positionMap =3D /* @__PURE__ */ new WeakMap();
  const newPositionMap =3D /* @__PURE__ */ new WeakMap();
  const moveCbKey =3D Symbol("_moveCb");
  const enterCbKey =3D Symbol("_enterCb");
  const decorate =3D (t) =3D&gt; {
    delete t.props.mode;
    return t;
  };
  const TransitionGroupImpl =3D /* @__PURE__ */ decorate({
    name: "TransitionGroup",
    props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
      tag: String,
      moveClass: String
    }),
    setup(props, { slots }) {
      const instance =3D getCurrentInstance();
      const state =3D useTransitionState();
      let prevChildren;
      let children;
      onUpdated(() =3D&gt; {
        if (!prevChildren.length) {
          return;
        }
        const moveClass =3D props.moveClass || `${props.name || "v"}-move`;
        if (!hasCSSTransform(
          prevChildren[0].el,
          instance.vnode.el,
          moveClass
        )) {
          prevChildren =3D [];
          return;
        }
        prevChildren.forEach(callPendingCbs);
        prevChildren.forEach(recordPosition);
        const movedChildren =3D prevChildren.filter(applyTranslation);
        forceReflow();
        movedChildren.forEach((c) =3D&gt; {
          const el =3D c.el;
          const style =3D el.style;
          addTransitionClass(el, moveClass);
          style.transform =3D style.webkitTransform =3D style.transitionDur=
ation =3D "";
          const cb =3D el[moveCbKey] =3D (e) =3D&gt; {
            if (e &amp;&amp; e.target !=3D=3D el) {
              return;
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener("transitionend", cb);
              el[moveCbKey] =3D null;
              removeTransitionClass(el, moveClass);
            }
          };
          el.addEventListener("transitionend", cb);
        });
        prevChildren =3D [];
      });
      return () =3D&gt; {
        const rawProps =3D toRaw(props);
        const cssTransitionProps =3D resolveTransitionProps(rawProps);
        let tag =3D rawProps.tag || Fragment;
        prevChildren =3D [];
        if (children) {
          for (let i =3D 0; i &lt; children.length; i++) {
            const child =3D children[i];
            if (child.el &amp;&amp; child.el instanceof Element) {
              prevChildren.push(child);
              setTransitionHooks(
                child,
                resolveTransitionHooks(
                  child,
                  cssTransitionProps,
                  state,
                  instance
                )
              );
              positionMap.set(
                child,
                child.el.getBoundingClientRect()
              );
            }
          }
        }
        children =3D slots.default ? getTransitionRawChildren(slots.default=
()) : [];
        for (let i =3D 0; i &lt; children.length; i++) {
          const child =3D children[i];
          if (child.key !=3D null) {
            setTransitionHooks(
              child,
              resolveTransitionHooks(child, cssTransitionProps, state, inst=
ance)
            );
          } else if (child.type !=3D=3D Text) {
            warn(`&lt;TransitionGroup&gt; children must be keyed.`);
          }
        }
        return createVNode(tag, null, children);
      };
    }
  });
  const TransitionGroup =3D TransitionGroupImpl;
  function callPendingCbs(c) {
    const el =3D c.el;
    if (el[moveCbKey]) {
      el[moveCbKey]();
    }
    if (el[enterCbKey]) {
      el[enterCbKey]();
    }
  }
  function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
  }
  function applyTranslation(c) {
    const oldPos =3D positionMap.get(c);
    const newPos =3D newPositionMap.get(c);
    const dx =3D oldPos.left - newPos.left;
    const dy =3D oldPos.top - newPos.top;
    if (dx || dy) {
      const s =3D c.el.style;
      s.transform =3D s.webkitTransform =3D `translate(${dx}px,${dy}px)`;
      s.transitionDuration =3D "0s";
      return c;
    }
  }
  function hasCSSTransform(el, root, moveClass) {
    const clone =3D el.cloneNode();
    const _vtc =3D el[vtcKey];
    if (_vtc) {
      _vtc.forEach((cls) =3D&gt; {
        cls.split(/\s+/).forEach((c) =3D&gt; c &amp;&amp; clone.classList.r=
emove(c));
      });
    }
    moveClass.split(/\s+/).forEach((c) =3D&gt; c &amp;&amp; clone.classList=
.add(c));
    clone.style.display =3D "none";
    const container =3D root.nodeType =3D=3D=3D 1 ? root : root.parentNode;
    container.appendChild(clone);
    const { hasTransform } =3D getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
  }

  const getModelAssigner =3D (vnode) =3D&gt; {
    const fn =3D vnode.props["onUpdate:modelValue"] || false;
    return isArray(fn) ? (value) =3D&gt; invokeArrayFns(fn, value) : fn;
  };
  function onCompositionStart(e) {
    e.target.composing =3D true;
  }
  function onCompositionEnd(e) {
    const target =3D e.target;
    if (target.composing) {
      target.composing =3D false;
      target.dispatchEvent(new Event("input"));
    }
  }
  const assignKey =3D Symbol("_assign");
  const vModelText =3D {
    created(el, { modifiers: { lazy, trim, number } }, vnode) {
      el[assignKey] =3D getModelAssigner(vnode);
      const castToNumber =3D number || vnode.props &amp;&amp; vnode.props.t=
ype =3D=3D=3D "number";
      addEventListener(el, lazy ? "change" : "input", (e) =3D&gt; {
        if (e.target.composing) return;
        let domValue =3D el.value;
        if (trim) {
          domValue =3D domValue.trim();
        }
        if (castToNumber) {
          domValue =3D looseToNumber(domValue);
        }
        el[assignKey](domValue);
      });
      if (trim) {
        addEventListener(el, "change", () =3D&gt; {
          el.value =3D el.value.trim();
        });
      }
      if (!lazy) {
        addEventListener(el, "compositionstart", onCompositionStart);
        addEventListener(el, "compositionend", onCompositionEnd);
        addEventListener(el, "change", onCompositionEnd);
      }
    },
    // set value on mounted so it's after min/max for type=3D"range"
    mounted(el, { value }) {
      el.value =3D value =3D=3D null ? "" : value;
    },
    beforeUpdate(el, { value, oldValue, modifiers: { lazy, trim, number } }=
, vnode) {
      el[assignKey] =3D getModelAssigner(vnode);
      if (el.composing) return;
      const elValue =3D (number || el.type =3D=3D=3D "number") &amp;&amp; !=
/^0\d/.test(el.value) ? looseToNumber(el.value) : el.value;
      const newValue =3D value =3D=3D null ? "" : value;
      if (elValue =3D=3D=3D newValue) {
        return;
      }
      if (document.activeElement =3D=3D=3D el &amp;&amp; el.type !=3D=3D "r=
ange") {
        if (lazy &amp;&amp; value =3D=3D=3D oldValue) {
          return;
        }
        if (trim &amp;&amp; el.value.trim() =3D=3D=3D newValue) {
          return;
        }
      }
      el.value =3D newValue;
    }
  };
  const vModelCheckbox =3D {
    // #4096 array checkboxes need to be deep traversed
    deep: true,
    created(el, _, vnode) {
      el[assignKey] =3D getModelAssigner(vnode);
      addEventListener(el, "change", () =3D&gt; {
        const modelValue =3D el._modelValue;
        const elementValue =3D getValue(el);
        const checked =3D el.checked;
        const assign =3D el[assignKey];
        if (isArray(modelValue)) {
          const index =3D looseIndexOf(modelValue, elementValue);
          const found =3D index !=3D=3D -1;
          if (checked &amp;&amp; !found) {
            assign(modelValue.concat(elementValue));
          } else if (!checked &amp;&amp; found) {
            const filtered =3D [...modelValue];
            filtered.splice(index, 1);
            assign(filtered);
          }
        } else if (isSet(modelValue)) {
          const cloned =3D new Set(modelValue);
          if (checked) {
            cloned.add(elementValue);
          } else {
            cloned.delete(elementValue);
          }
          assign(cloned);
        } else {
          assign(getCheckboxValue(el, checked));
        }
      });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate(el, binding, vnode) {
      el[assignKey] =3D getModelAssigner(vnode);
      setChecked(el, binding, vnode);
    }
  };
  function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue =3D value;
    let checked;
    if (isArray(value)) {
      checked =3D looseIndexOf(value, vnode.props.value) &gt; -1;
    } else if (isSet(value)) {
      checked =3D value.has(vnode.props.value);
    } else {
      if (value =3D=3D=3D oldValue) return;
      checked =3D looseEqual(value, getCheckboxValue(el, true));
    }
    if (el.checked !=3D=3D checked) {
      el.checked =3D checked;
    }
  }
  const vModelRadio =3D {
    created(el, { value }, vnode) {
      el.checked =3D looseEqual(value, vnode.props.value);
      el[assignKey] =3D getModelAssigner(vnode);
      addEventListener(el, "change", () =3D&gt; {
        el[assignKey](getValue(el));
      });
    },
    beforeUpdate(el, { value, oldValue }, vnode) {
      el[assignKey] =3D getModelAssigner(vnode);
      if (value !=3D=3D oldValue) {
        el.checked =3D looseEqual(value, vnode.props.value);
      }
    }
  };
  const vModelSelect =3D {
    // &lt;select multiple&gt; value need to be deep traversed
    deep: true,
    created(el, { value, modifiers: { number } }, vnode) {
      const isSetModel =3D isSet(value);
      addEventListener(el, "change", () =3D&gt; {
        const selectedVal =3D Array.prototype.filter.call(el.options, (o) =
=3D&gt; o.selected).map(
          (o) =3D&gt; number ? looseToNumber(getValue(o)) : getValue(o)
        );
        el[assignKey](
          el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : s=
electedVal[0]
        );
        el._assigning =3D true;
        nextTick(() =3D&gt; {
          el._assigning =3D false;
        });
      });
      el[assignKey] =3D getModelAssigner(vnode);
    },
    // set value in mounted &amp; updated because &lt;select&gt; relies on =
its children
    // &lt;option&gt;s.
    mounted(el, { value }) {
      setSelected(el, value);
    },
    beforeUpdate(el, _binding, vnode) {
      el[assignKey] =3D getModelAssigner(vnode);
    },
    updated(el, { value }) {
      if (!el._assigning) {
        setSelected(el, value);
      }
    }
  };
  function setSelected(el, value) {
    const isMultiple =3D el.multiple;
    const isArrayValue =3D isArray(value);
    if (isMultiple &amp;&amp; !isArrayValue &amp;&amp; !isSet(value)) {
      warn(
        `&lt;select multiple v-model&gt; expects an Array or Set value for =
its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.=
`
      );
      return;
    }
    for (let i =3D 0, l =3D el.options.length; i &lt; l; i++) {
      const option =3D el.options[i];
      const optionValue =3D getValue(option);
      if (isMultiple) {
        if (isArrayValue) {
          const optionType =3D typeof optionValue;
          if (optionType =3D=3D=3D "string" || optionType =3D=3D=3D "number=
") {
            option.selected =3D value.some((v) =3D&gt; String(v) =3D=3D=3D =
String(optionValue));
          } else {
            option.selected =3D looseIndexOf(value, optionValue) &gt; -1;
          }
        } else {
          option.selected =3D value.has(optionValue);
        }
      } else if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !=3D=3D i) el.selectedIndex =3D i;
        return;
      }
    }
    if (!isMultiple &amp;&amp; el.selectedIndex !=3D=3D -1) {
      el.selectedIndex =3D -1;
    }
  }
  function getValue(el) {
    return "_value" in el ? el._value : el.value;
  }
  function getCheckboxValue(el, checked) {
    const key =3D checked ? "_trueValue" : "_falseValue";
    return key in el ? el[key] : checked;
  }
  const vModelDynamic =3D {
    created(el, binding, vnode) {
      callModelHook(el, binding, vnode, null, "created");
    },
    mounted(el, binding, vnode) {
      callModelHook(el, binding, vnode, null, "mounted");
    },
    beforeUpdate(el, binding, vnode, prevVNode) {
      callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
    },
    updated(el, binding, vnode, prevVNode) {
      callModelHook(el, binding, vnode, prevVNode, "updated");
    }
  };
  function resolveDynamicModel(tagName, type) {
    switch (tagName) {
      case "SELECT":
        return vModelSelect;
      case "TEXTAREA":
        return vModelText;
      default:
        switch (type) {
          case "checkbox":
            return vModelCheckbox;
          case "radio":
            return vModelRadio;
          default:
            return vModelText;
        }
    }
  }
  function callModelHook(el, binding, vnode, prevVNode, hook) {
    const modelToUse =3D resolveDynamicModel(
      el.tagName,
      vnode.props &amp;&amp; vnode.props.type
    );
    const fn =3D modelToUse[hook];
    fn &amp;&amp; fn(el, binding, vnode, prevVNode);
  }

  const systemModifiers =3D ["ctrl", "shift", "alt", "meta"];
  const modifierGuards =3D {
    stop: (e) =3D&gt; e.stopPropagation(),
    prevent: (e) =3D&gt; e.preventDefault(),
    self: (e) =3D&gt; e.target !=3D=3D e.currentTarget,
    ctrl: (e) =3D&gt; !e.ctrlKey,
    shift: (e) =3D&gt; !e.shiftKey,
    alt: (e) =3D&gt; !e.altKey,
    meta: (e) =3D&gt; !e.metaKey,
    left: (e) =3D&gt; "button" in e &amp;&amp; e.button !=3D=3D 0,
    middle: (e) =3D&gt; "button" in e &amp;&amp; e.button !=3D=3D 1,
    right: (e) =3D&gt; "button" in e &amp;&amp; e.button !=3D=3D 2,
    exact: (e, modifiers) =3D&gt; systemModifiers.some((m) =3D&gt; e[`${m}K=
ey`] &amp;&amp; !modifiers.includes(m))
  };
  const withModifiers =3D (fn, modifiers) =3D&gt; {
    const cache =3D fn._withMods || (fn._withMods =3D {});
    const cacheKey =3D modifiers.join(".");
    return cache[cacheKey] || (cache[cacheKey] =3D (event, ...args) =3D&gt;=
 {
      for (let i =3D 0; i &lt; modifiers.length; i++) {
        const guard =3D modifierGuards[modifiers[i]];
        if (guard &amp;&amp; guard(event, modifiers)) return;
      }
      return fn(event, ...args);
    });
  };
  const keyNames =3D {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  const withKeys =3D (fn, modifiers) =3D&gt; {
    const cache =3D fn._withKeys || (fn._withKeys =3D {});
    const cacheKey =3D modifiers.join(".");
    return cache[cacheKey] || (cache[cacheKey] =3D (event) =3D&gt; {
      if (!("key" in event)) {
        return;
      }
      const eventKey =3D hyphenate(event.key);
      if (modifiers.some(
        (k) =3D&gt; k =3D=3D=3D eventKey || keyNames[k] =3D=3D=3D eventKey
      )) {
        return fn(event);
      }
    });
  };

  const rendererOptions =3D /* @__PURE__ */ extend({ patchProp }, nodeOps);
  let renderer;
  let enabledHydration =3D false;
  function ensureRenderer() {
    return renderer || (renderer =3D createRenderer(rendererOptions));
  }
  function ensureHydrationRenderer() {
    renderer =3D enabledHydration ? renderer : createHydrationRenderer(rend=
ererOptions);
    enabledHydration =3D true;
    return renderer;
  }
  const render =3D (...args) =3D&gt; {
    ensureRenderer().render(...args);
  };
  const hydrate =3D (...args) =3D&gt; {
    ensureHydrationRenderer().hydrate(...args);
  };
  const createApp =3D (...args) =3D&gt; {
    const app =3D ensureRenderer().createApp(...args);
    {
      injectNativeTagCheck(app);
      injectCompilerOptionsCheck(app);
    }
    const { mount } =3D app;
    app.mount =3D (containerOrSelector) =3D&gt; {
      const container =3D normalizeContainer(containerOrSelector);
      if (!container) return;
      const component =3D app._component;
      if (!isFunction(component) &amp;&amp; !component.render &amp;&amp; !c=
omponent.template) {
        component.template =3D container.innerHTML;
      }
      if (container.nodeType =3D=3D=3D 1) {
        container.textContent =3D "";
      }
      const proxy =3D mount(container, false, resolveRootNamespace(containe=
r));
      if (container instanceof Element) {
        container.removeAttribute("v-cloak");
        container.setAttribute("data-v-app", "");
      }
      return proxy;
    };
    return app;
  };
  const createSSRApp =3D (...args) =3D&gt; {
    const app =3D ensureHydrationRenderer().createApp(...args);
    {
      injectNativeTagCheck(app);
      injectCompilerOptionsCheck(app);
    }
    const { mount } =3D app;
    app.mount =3D (containerOrSelector) =3D&gt; {
      const container =3D normalizeContainer(containerOrSelector);
      if (container) {
        return mount(container, true, resolveRootNamespace(container));
      }
    };
    return app;
  };
  function resolveRootNamespace(container) {
    if (container instanceof SVGElement) {
      return "svg";
    }
    if (typeof MathMLElement =3D=3D=3D "function" &amp;&amp; container inst=
anceof MathMLElement) {
      return "mathml";
    }
  }
  function injectNativeTagCheck(app) {
    Object.defineProperty(app.config, "isNativeTag", {
      value: (tag) =3D&gt; isHTMLTag(tag) || isSVGTag(tag) || isMathMLTag(t=
ag),
      writable: false
    });
  }
  function injectCompilerOptionsCheck(app) {
    if (isRuntimeOnly()) {
      const isCustomElement =3D app.config.isCustomElement;
      Object.defineProperty(app.config, "isCustomElement", {
        get() {
          return isCustomElement;
        },
        set() {
          warn(
            `The \`isCustomElement\` config option is deprecated. Use \`com=
pilerOptions.isCustomElement\` instead.`
          );
        }
      });
      const compilerOptions =3D app.config.compilerOptions;
      const msg =3D `The \`compilerOptions\` config option is only respecte=
d when using a build of Vue.js that includes the runtime compiler (aka "ful=
l build"). Since you are using the runtime-only build, \`compilerOptions\` =
must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader optio=
n.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-optio=
ns-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/=
vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-op=
tions-to-vuecompiler-sfc`;
      Object.defineProperty(app.config, "compilerOptions", {
        get() {
          warn(msg);
          return compilerOptions;
        },
        set() {
          warn(msg);
        }
      });
    }
  }
  function normalizeContainer(container) {
    if (isString(container)) {
      const res =3D document.querySelector(container);
      if (!res) {
        warn(
          `Failed to mount app: mount target selector "${container}" return=
ed null.`
        );
      }
      return res;
    }
    if (window.ShadowRoot &amp;&amp; container instanceof window.ShadowRoot=
 &amp;&amp; container.mode =3D=3D=3D "closed") {
      warn(
        `mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unp=
redictable bugs`
      );
    }
    return container;
  }
  const initDirectivesForSSR =3D NOOP;

  function initDev() {
    {
      {
        console.info(
          `You are running a development build of Vue.
Make sure to use the production build (*.prod.js) when deploying for produc=
tion.`
        );
      }
      initCustomFormatter();
    }
  }

  const FRAGMENT =3D Symbol(`Fragment` );
  const TELEPORT =3D Symbol(`Teleport` );
  const SUSPENSE =3D Symbol(`Suspense` );
  const KEEP_ALIVE =3D Symbol(`KeepAlive` );
  const BASE_TRANSITION =3D Symbol(
    `BaseTransition`=20
  );
  const OPEN_BLOCK =3D Symbol(`openBlock` );
  const CREATE_BLOCK =3D Symbol(`createBlock` );
  const CREATE_ELEMENT_BLOCK =3D Symbol(
    `createElementBlock`=20
  );
  const CREATE_VNODE =3D Symbol(`createVNode` );
  const CREATE_ELEMENT_VNODE =3D Symbol(
    `createElementVNode`=20
  );
  const CREATE_COMMENT =3D Symbol(
    `createCommentVNode`=20
  );
  const CREATE_TEXT =3D Symbol(
    `createTextVNode`=20
  );
  const CREATE_STATIC =3D Symbol(
    `createStaticVNode`=20
  );
  const RESOLVE_COMPONENT =3D Symbol(
    `resolveComponent`=20
  );
  const RESOLVE_DYNAMIC_COMPONENT =3D Symbol(
    `resolveDynamicComponent`=20
  );
  const RESOLVE_DIRECTIVE =3D Symbol(
    `resolveDirective`=20
  );
  const RESOLVE_FILTER =3D Symbol(
    `resolveFilter`=20
  );
  const WITH_DIRECTIVES =3D Symbol(
    `withDirectives`=20
  );
  const RENDER_LIST =3D Symbol(`renderList` );
  const RENDER_SLOT =3D Symbol(`renderSlot` );
  const CREATE_SLOTS =3D Symbol(`createSlots` );
  const TO_DISPLAY_STRING =3D Symbol(
    `toDisplayString`=20
  );
  const MERGE_PROPS =3D Symbol(`mergeProps` );
  const NORMALIZE_CLASS =3D Symbol(
    `normalizeClass`=20
  );
  const NORMALIZE_STYLE =3D Symbol(
    `normalizeStyle`=20
  );
  const NORMALIZE_PROPS =3D Symbol(
    `normalizeProps`=20
  );
  const GUARD_REACTIVE_PROPS =3D Symbol(
    `guardReactiveProps`=20
  );
  const TO_HANDLERS =3D Symbol(`toHandlers` );
  const CAMELIZE =3D Symbol(`camelize` );
  const CAPITALIZE =3D Symbol(`capitalize` );
  const TO_HANDLER_KEY =3D Symbol(
    `toHandlerKey`=20
  );
  const SET_BLOCK_TRACKING =3D Symbol(
    `setBlockTracking`=20
  );
  const PUSH_SCOPE_ID =3D Symbol(`pushScopeId` );
  const POP_SCOPE_ID =3D Symbol(`popScopeId` );
  const WITH_CTX =3D Symbol(`withCtx` );
  const UNREF =3D Symbol(`unref` );
  const IS_REF =3D Symbol(`isRef` );
  const WITH_MEMO =3D Symbol(`withMemo` );
  const IS_MEMO_SAME =3D Symbol(`isMemoSame` );
  const helperNameMap =3D {
    [FRAGMENT]: `Fragment`,
    [TELEPORT]: `Teleport`,
    [SUSPENSE]: `Suspense`,
    [KEEP_ALIVE]: `KeepAlive`,
    [BASE_TRANSITION]: `BaseTransition`,
    [OPEN_BLOCK]: `openBlock`,
    [CREATE_BLOCK]: `createBlock`,
    [CREATE_ELEMENT_BLOCK]: `createElementBlock`,
    [CREATE_VNODE]: `createVNode`,
    [CREATE_ELEMENT_VNODE]: `createElementVNode`,
    [CREATE_COMMENT]: `createCommentVNode`,
    [CREATE_TEXT]: `createTextVNode`,
    [CREATE_STATIC]: `createStaticVNode`,
    [RESOLVE_COMPONENT]: `resolveComponent`,
    [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
    [RESOLVE_DIRECTIVE]: `resolveDirective`,
    [RESOLVE_FILTER]: `resolveFilter`,
    [WITH_DIRECTIVES]: `withDirectives`,
    [RENDER_LIST]: `renderList`,
    [RENDER_SLOT]: `renderSlot`,
    [CREATE_SLOTS]: `createSlots`,
    [TO_DISPLAY_STRING]: `toDisplayString`,
    [MERGE_PROPS]: `mergeProps`,
    [NORMALIZE_CLASS]: `normalizeClass`,
    [NORMALIZE_STYLE]: `normalizeStyle`,
    [NORMALIZE_PROPS]: `normalizeProps`,
    [GUARD_REACTIVE_PROPS]: `guardReactiveProps`,
    [TO_HANDLERS]: `toHandlers`,
    [CAMELIZE]: `camelize`,
    [CAPITALIZE]: `capitalize`,
    [TO_HANDLER_KEY]: `toHandlerKey`,
    [SET_BLOCK_TRACKING]: `setBlockTracking`,
    [PUSH_SCOPE_ID]: `pushScopeId`,
    [POP_SCOPE_ID]: `popScopeId`,
    [WITH_CTX]: `withCtx`,
    [UNREF]: `unref`,
    [IS_REF]: `isRef`,
    [WITH_MEMO]: `withMemo`,
    [IS_MEMO_SAME]: `isMemoSame`
  };
  function registerRuntimeHelpers(helpers) {
    Object.getOwnPropertySymbols(helpers).forEach((s) =3D&gt; {
      helperNameMap[s] =3D helpers[s];
    });
  }

  const locStub =3D {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1, column: 1, offset: 0 },
    source: ""
  };
  function createRoot(children, source =3D "") {
    return {
      type: 0,
      source,
      children,
      helpers: /* @__PURE__ */ new Set(),
      components: [],
      directives: [],
      hoists: [],
      imports: [],
      cached: [],
      temps: 0,
      codegenNode: void 0,
      loc: locStub
    };
  }
  function createVNodeCall(context, tag, props, children, patchFlag, dynami=
cProps, directives, isBlock =3D false, disableTracking =3D false, isCompone=
nt =3D false, loc =3D locStub) {
    if (context) {
      if (isBlock) {
        context.helper(OPEN_BLOCK);
        context.helper(getVNodeBlockHelper(context.inSSR, isComponent));
      } else {
        context.helper(getVNodeHelper(context.inSSR, isComponent));
      }
      if (directives) {
        context.helper(WITH_DIRECTIVES);
      }
    }
    return {
      type: 13,
      tag,
      props,
      children,
      patchFlag,
      dynamicProps,
      directives,
      isBlock,
      disableTracking,
      isComponent,
      loc
    };
  }
  function createArrayExpression(elements, loc =3D locStub) {
    return {
      type: 17,
      loc,
      elements
    };
  }
  function createObjectExpression(properties, loc =3D locStub) {
    return {
      type: 15,
      loc,
      properties
    };
  }
  function createObjectProperty(key, value) {
    return {
      type: 16,
      loc: locStub,
      key: isString(key) ? createSimpleExpression(key, true) : key,
      value
    };
  }
  function createSimpleExpression(content, isStatic =3D false, loc =3D locS=
tub, constType =3D 0) {
    return {
      type: 4,
      loc,
      content,
      isStatic,
      constType: isStatic ? 3 : constType
    };
  }
  function createCompoundExpression(children, loc =3D locStub) {
    return {
      type: 8,
      loc,
      children
    };
  }
  function createCallExpression(callee, args =3D [], loc =3D locStub) {
    return {
      type: 14,
      loc,
      callee,
      arguments: args
    };
  }
  function createFunctionExpression(params, returns =3D void 0, newline =3D=
 false, isSlot =3D false, loc =3D locStub) {
    return {
      type: 18,
      params,
      returns,
      newline,
      isSlot,
      loc
    };
  }
  function createConditionalExpression(test, consequent, alternate, newline=
 =3D true) {
    return {
      type: 19,
      test,
      consequent,
      alternate,
      newline,
      loc: locStub
    };
  }
  function createCacheExpression(index, value, needPauseTracking =3D false,=
 inVOnce =3D false) {
    return {
      type: 20,
      index,
      value,
      needPauseTracking,
      inVOnce,
      needArraySpread: false,
      loc: locStub
    };
  }
  function createBlockStatement(body) {
    return {
      type: 21,
      body,
      loc: locStub
    };
  }
  function getVNodeHelper(ssr, isComponent) {
    return ssr || isComponent ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
  }
  function getVNodeBlockHelper(ssr, isComponent) {
    return ssr || isComponent ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
  }
  function convertToBlock(node, { helper, removeHelper, inSSR }) {
    if (!node.isBlock) {
      node.isBlock =3D true;
      removeHelper(getVNodeHelper(inSSR, node.isComponent));
      helper(OPEN_BLOCK);
      helper(getVNodeBlockHelper(inSSR, node.isComponent));
    }
  }

  const defaultDelimitersOpen =3D new Uint8Array([123, 123]);
  const defaultDelimitersClose =3D new Uint8Array([125, 125]);
  function isTagStartChar(c) {
    return c &gt;=3D 97 &amp;&amp; c &lt;=3D 122 || c &gt;=3D 65 &amp;&amp;=
 c &lt;=3D 90;
  }
  function isWhitespace(c) {
    return c =3D=3D=3D 32 || c =3D=3D=3D 10 || c =3D=3D=3D 9 || c =3D=3D=3D=
 12 || c =3D=3D=3D 13;
  }
  function isEndOfTagSection(c) {
    return c =3D=3D=3D 47 || c =3D=3D=3D 62 || isWhitespace(c);
  }
  function toCharCodes(str) {
    const ret =3D new Uint8Array(str.length);
    for (let i =3D 0; i &lt; str.length; i++) {
      ret[i] =3D str.charCodeAt(i);
    }
    return ret;
  }
  const Sequences =3D {
    Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
    // CDATA[
    CdataEnd: new Uint8Array([93, 93, 62]),
    // ]]&gt;
    CommentEnd: new Uint8Array([45, 45, 62]),
    // `--&gt;`
    ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
    // `&lt;\/script`
    StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
    // `&lt;/style`
    TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
    // `&lt;/title`
    TextareaEnd: new Uint8Array([
      60,
      47,
      116,
      101,
      120,
      116,
      97,
      114,
      101,
      97
    ])
    // `&lt;/textarea
  };
  class Tokenizer {
    constructor(stack, cbs) {
      this.stack =3D stack;
      this.cbs =3D cbs;
      /** The current state the tokenizer is in. */
      this.state =3D 1;
      /** The read buffer. */
      this.buffer =3D "";
      /** The beginning of the section that is currently being read. */
      this.sectionStart =3D 0;
      /** The index within the buffer that we are currently looking at. */
      this.index =3D 0;
      /** The start of the last entity. */
      this.entityStart =3D 0;
      /** Some behavior, eg. when decoding entities, is done while we are i=
n another state. This keeps track of the other state type. */
      this.baseState =3D 1;
      /** For special parsing behavior inside of script and style tags. */
      this.inRCDATA =3D false;
      /** For disabling RCDATA tags handling */
      this.inXML =3D false;
      /** For disabling interpolation parsing in v-pre */
      this.inVPre =3D false;
      /** Record newline positions for fast line / column calculation */
      this.newlines =3D [];
      this.mode =3D 0;
      this.delimiterOpen =3D defaultDelimitersOpen;
      this.delimiterClose =3D defaultDelimitersClose;
      this.delimiterIndex =3D -1;
      this.currentSequence =3D void 0;
      this.sequenceIndex =3D 0;
    }
    get inSFCRoot() {
      return this.mode =3D=3D=3D 2 &amp;&amp; this.stack.length =3D=3D=3D 0=
;
    }
    reset() {
      this.state =3D 1;
      this.mode =3D 0;
      this.buffer =3D "";
      this.sectionStart =3D 0;
      this.index =3D 0;
      this.baseState =3D 1;
      this.inRCDATA =3D false;
      this.currentSequence =3D void 0;
      this.newlines.length =3D 0;
      this.delimiterOpen =3D defaultDelimitersOpen;
      this.delimiterClose =3D defaultDelimitersClose;
    }
    /**
     * Generate Position object with line / column information using record=
ed
     * newline positions. We know the index is always going to be an alread=
y
     * processed index, so all the newlines up to this index should have be=
en
     * recorded.
     */
    getPos(index) {
      let line =3D 1;
      let column =3D index + 1;
      for (let i =3D this.newlines.length - 1; i &gt;=3D 0; i--) {
        const newlineIndex =3D this.newlines[i];
        if (index &gt; newlineIndex) {
          line =3D i + 2;
          column =3D index - newlineIndex;
          break;
        }
      }
      return {
        column,
        line,
        offset: index
      };
    }
    peek() {
      return this.buffer.charCodeAt(this.index + 1);
    }
    stateText(c) {
      if (c =3D=3D=3D 60) {
        if (this.index &gt; this.sectionStart) {
          this.cbs.ontext(this.sectionStart, this.index);
        }
        this.state =3D 5;
        this.sectionStart =3D this.index;
      } else if (!this.inVPre &amp;&amp; c =3D=3D=3D this.delimiterOpen[0])=
 {
        this.state =3D 2;
        this.delimiterIndex =3D 0;
        this.stateInterpolationOpen(c);
      }
    }
    stateInterpolationOpen(c) {
      if (c =3D=3D=3D this.delimiterOpen[this.delimiterIndex]) {
        if (this.delimiterIndex =3D=3D=3D this.delimiterOpen.length - 1) {
          const start =3D this.index + 1 - this.delimiterOpen.length;
          if (start &gt; this.sectionStart) {
            this.cbs.ontext(this.sectionStart, start);
          }
          this.state =3D 3;
          this.sectionStart =3D start;
        } else {
          this.delimiterIndex++;
        }
      } else if (this.inRCDATA) {
        this.state =3D 32;
        this.stateInRCDATA(c);
      } else {
        this.state =3D 1;
        this.stateText(c);
      }
    }
    stateInterpolation(c) {
      if (c =3D=3D=3D this.delimiterClose[0]) {
        this.state =3D 4;
        this.delimiterIndex =3D 0;
        this.stateInterpolationClose(c);
      }
    }
    stateInterpolationClose(c) {
      if (c =3D=3D=3D this.delimiterClose[this.delimiterIndex]) {
        if (this.delimiterIndex =3D=3D=3D this.delimiterClose.length - 1) {
          this.cbs.oninterpolation(this.sectionStart, this.index + 1);
          if (this.inRCDATA) {
            this.state =3D 32;
          } else {
            this.state =3D 1;
          }
          this.sectionStart =3D this.index + 1;
        } else {
          this.delimiterIndex++;
        }
      } else {
        this.state =3D 3;
        this.stateInterpolation(c);
      }
    }
    stateSpecialStartSequence(c) {
      const isEnd =3D this.sequenceIndex =3D=3D=3D this.currentSequence.len=
gth;
      const isMatch =3D isEnd ? (
        // If we are at the end of the sequence, make sure the tag name has=
 ended
        isEndOfTagSection(c)
      ) : (
        // Otherwise, do a case-insensitive comparison
        (c | 32) =3D=3D=3D this.currentSequence[this.sequenceIndex]
      );
      if (!isMatch) {
        this.inRCDATA =3D false;
      } else if (!isEnd) {
        this.sequenceIndex++;
        return;
      }
      this.sequenceIndex =3D 0;
      this.state =3D 6;
      this.stateInTagName(c);
    }
    /** Look for an end tag. For &lt;title&gt; and &lt;textarea&gt;, also d=
ecode entities. */
    stateInRCDATA(c) {
      if (this.sequenceIndex =3D=3D=3D this.currentSequence.length) {
        if (c =3D=3D=3D 62 || isWhitespace(c)) {
          const endOfText =3D this.index - this.currentSequence.length;
          if (this.sectionStart &lt; endOfText) {
            const actualIndex =3D this.index;
            this.index =3D endOfText;
            this.cbs.ontext(this.sectionStart, endOfText);
            this.index =3D actualIndex;
          }
          this.sectionStart =3D endOfText + 2;
          this.stateInClosingTagName(c);
          this.inRCDATA =3D false;
          return;
        }
        this.sequenceIndex =3D 0;
      }
      if ((c | 32) =3D=3D=3D this.currentSequence[this.sequenceIndex]) {
        this.sequenceIndex +=3D 1;
      } else if (this.sequenceIndex =3D=3D=3D 0) {
        if (this.currentSequence =3D=3D=3D Sequences.TitleEnd || this.curre=
ntSequence =3D=3D=3D Sequences.TextareaEnd &amp;&amp; !this.inSFCRoot) {
          if (!this.inVPre &amp;&amp; c =3D=3D=3D this.delimiterOpen[0]) {
            this.state =3D 2;
            this.delimiterIndex =3D 0;
            this.stateInterpolationOpen(c);
          }
        } else if (this.fastForwardTo(60)) {
          this.sequenceIndex =3D 1;
        }
      } else {
        this.sequenceIndex =3D Number(c =3D=3D=3D 60);
      }
    }
    stateCDATASequence(c) {
      if (c =3D=3D=3D Sequences.Cdata[this.sequenceIndex]) {
        if (++this.sequenceIndex =3D=3D=3D Sequences.Cdata.length) {
          this.state =3D 28;
          this.currentSequence =3D Sequences.CdataEnd;
          this.sequenceIndex =3D 0;
          this.sectionStart =3D this.index + 1;
        }
      } else {
        this.sequenceIndex =3D 0;
        this.state =3D 23;
        this.stateInDeclaration(c);
      }
    }
    /**
     * When we wait for one specific character, we can speed things up
     * by skipping through the buffer until we find it.
     *
     * @returns Whether the character was found.
     */
    fastForwardTo(c) {
      while (++this.index &lt; this.buffer.length) {
        const cc =3D this.buffer.charCodeAt(this.index);
        if (cc =3D=3D=3D 10) {
          this.newlines.push(this.index);
        }
        if (cc =3D=3D=3D c) {
          return true;
        }
      }
      this.index =3D this.buffer.length - 1;
      return false;
    }
    /**
     * Comments and CDATA end with `--&gt;` and `]]&gt;`.
     *
     * Their common qualities are:
     * - Their end sequences have a distinct character they start with.
     * - That character is then repeated, so we have to check multiple repe=
ats.
     * - All characters but the start character of the sequence can be skip=
ped.
     */
    stateInCommentLike(c) {
      if (c =3D=3D=3D this.currentSequence[this.sequenceIndex]) {
        if (++this.sequenceIndex =3D=3D=3D this.currentSequence.length) {
          if (this.currentSequence =3D=3D=3D Sequences.CdataEnd) {
            this.cbs.oncdata(this.sectionStart, this.index - 2);
          } else {
            this.cbs.oncomment(this.sectionStart, this.index - 2);
          }
          this.sequenceIndex =3D 0;
          this.sectionStart =3D this.index + 1;
          this.state =3D 1;
        }
      } else if (this.sequenceIndex =3D=3D=3D 0) {
        if (this.fastForwardTo(this.currentSequence[0])) {
          this.sequenceIndex =3D 1;
        }
      } else if (c !=3D=3D this.currentSequence[this.sequenceIndex - 1]) {
        this.sequenceIndex =3D 0;
      }
    }
    startSpecial(sequence, offset) {
      this.enterRCDATA(sequence, offset);
      this.state =3D 31;
    }
    enterRCDATA(sequence, offset) {
      this.inRCDATA =3D true;
      this.currentSequence =3D sequence;
      this.sequenceIndex =3D offset;
    }
    stateBeforeTagName(c) {
      if (c =3D=3D=3D 33) {
        this.state =3D 22;
        this.sectionStart =3D this.index + 1;
      } else if (c =3D=3D=3D 63) {
        this.state =3D 24;
        this.sectionStart =3D this.index + 1;
      } else if (isTagStartChar(c)) {
        this.sectionStart =3D this.index;
        if (this.mode =3D=3D=3D 0) {
          this.state =3D 6;
        } else if (this.inSFCRoot) {
          this.state =3D 34;
        } else if (!this.inXML) {
          if (c =3D=3D=3D 116) {
            this.state =3D 30;
          } else {
            this.state =3D c =3D=3D=3D 115 ? 29 : 6;
          }
        } else {
          this.state =3D 6;
        }
      } else if (c =3D=3D=3D 47) {
        this.state =3D 8;
      } else {
        this.state =3D 1;
        this.stateText(c);
      }
    }
    stateInTagName(c) {
      if (isEndOfTagSection(c)) {
        this.handleTagName(c);
      }
    }
    stateInSFCRootTagName(c) {
      if (isEndOfTagSection(c)) {
        const tag =3D this.buffer.slice(this.sectionStart, this.index);
        if (tag !=3D=3D "template") {
          this.enterRCDATA(toCharCodes(`&lt;/` + tag), 0);
        }
        this.handleTagName(c);
      }
    }
    handleTagName(c) {
      this.cbs.onopentagname(this.sectionStart, this.index);
      this.sectionStart =3D -1;
      this.state =3D 11;
      this.stateBeforeAttrName(c);
    }
    stateBeforeClosingTagName(c) {
      if (isWhitespace(c)) ; else if (c =3D=3D=3D 62) {
        {
          this.cbs.onerr(14, this.index);
        }
        this.state =3D 1;
        this.sectionStart =3D this.index + 1;
      } else {
        this.state =3D isTagStartChar(c) ? 9 : 27;
        this.sectionStart =3D this.index;
      }
    }
    stateInClosingTagName(c) {
      if (c =3D=3D=3D 62 || isWhitespace(c)) {
        this.cbs.onclosetag(this.sectionStart, this.index);
        this.sectionStart =3D -1;
        this.state =3D 10;
        this.stateAfterClosingTagName(c);
      }
    }
    stateAfterClosingTagName(c) {
      if (c =3D=3D=3D 62) {
        this.state =3D 1;
        this.sectionStart =3D this.index + 1;
      }
    }
    stateBeforeAttrName(c) {
      if (c =3D=3D=3D 62) {
        this.cbs.onopentagend(this.index);
        if (this.inRCDATA) {
          this.state =3D 32;
        } else {
          this.state =3D 1;
        }
        this.sectionStart =3D this.index + 1;
      } else if (c =3D=3D=3D 47) {
        this.state =3D 7;
        if (this.peek() !=3D=3D 62) {
          this.cbs.onerr(22, this.index);
        }
      } else if (c =3D=3D=3D 60 &amp;&amp; this.peek() =3D=3D=3D 47) {
        this.cbs.onopentagend(this.index);
        this.state =3D 5;
        this.sectionStart =3D this.index;
      } else if (!isWhitespace(c)) {
        if (c =3D=3D=3D 61) {
          this.cbs.onerr(
            19,
            this.index
          );
        }
        this.handleAttrStart(c);
      }
    }
    handleAttrStart(c) {
      if (c =3D=3D=3D 118 &amp;&amp; this.peek() =3D=3D=3D 45) {
        this.state =3D 13;
        this.sectionStart =3D this.index;
      } else if (c =3D=3D=3D 46 || c =3D=3D=3D 58 || c =3D=3D=3D 64 || c =
=3D=3D=3D 35) {
        this.cbs.ondirname(this.index, this.index + 1);
        this.state =3D 14;
        this.sectionStart =3D this.index + 1;
      } else {
        this.state =3D 12;
        this.sectionStart =3D this.index;
      }
    }
    stateInSelfClosingTag(c) {
      if (c =3D=3D=3D 62) {
        this.cbs.onselfclosingtag(this.index);
        this.state =3D 1;
        this.sectionStart =3D this.index + 1;
        this.inRCDATA =3D false;
      } else if (!isWhitespace(c)) {
        this.state =3D 11;
        this.stateBeforeAttrName(c);
      }
    }
    stateInAttrName(c) {
      if (c =3D=3D=3D 61 || isEndOfTagSection(c)) {
        this.cbs.onattribname(this.sectionStart, this.index);
        this.handleAttrNameEnd(c);
      } else if (c =3D=3D=3D 34 || c =3D=3D=3D 39 || c =3D=3D=3D 60) {
        this.cbs.onerr(
          17,
          this.index
        );
      }
    }
    stateInDirName(c) {
      if (c =3D=3D=3D 61 || isEndOfTagSection(c)) {
        this.cbs.ondirname(this.sectionStart, this.index);
        this.handleAttrNameEnd(c);
      } else if (c =3D=3D=3D 58) {
        this.cbs.ondirname(this.sectionStart, this.index);
        this.state =3D 14;
        this.sectionStart =3D this.index + 1;
      } else if (c =3D=3D=3D 46) {
        this.cbs.ondirname(this.sectionStart, this.index);
        this.state =3D 16;
        this.sectionStart =3D this.index + 1;
      }
    }
    stateInDirArg(c) {
      if (c =3D=3D=3D 61 || isEndOfTagSection(c)) {
        this.cbs.ondirarg(this.sectionStart, this.index);
        this.handleAttrNameEnd(c);
      } else if (c =3D=3D=3D 91) {
        this.state =3D 15;
      } else if (c =3D=3D=3D 46) {
        this.cbs.ondirarg(this.sectionStart, this.index);
        this.state =3D 16;
        this.sectionStart =3D this.index + 1;
      }
    }
    stateInDynamicDirArg(c) {
      if (c =3D=3D=3D 93) {
        this.state =3D 14;
      } else if (c =3D=3D=3D 61 || isEndOfTagSection(c)) {
        this.cbs.ondirarg(this.sectionStart, this.index + 1);
        this.handleAttrNameEnd(c);
        {
          this.cbs.onerr(
            27,
            this.index
          );
        }
      }
    }
    stateInDirModifier(c) {
      if (c =3D=3D=3D 61 || isEndOfTagSection(c)) {
        this.cbs.ondirmodifier(this.sectionStart, this.index);
        this.handleAttrNameEnd(c);
      } else if (c =3D=3D=3D 46) {
        this.cbs.ondirmodifier(this.sectionStart, this.index);
        this.sectionStart =3D this.index + 1;
      }
    }
    handleAttrNameEnd(c) {
      this.sectionStart =3D this.index;
      this.state =3D 17;
      this.cbs.onattribnameend(this.index);
      this.stateAfterAttrName(c);
    }
    stateAfterAttrName(c) {
      if (c =3D=3D=3D 61) {
        this.state =3D 18;
      } else if (c =3D=3D=3D 47 || c =3D=3D=3D 62) {
        this.cbs.onattribend(0, this.sectionStart);
        this.sectionStart =3D -1;
        this.state =3D 11;
        this.stateBeforeAttrName(c);
      } else if (!isWhitespace(c)) {
        this.cbs.onattribend(0, this.sectionStart);
        this.handleAttrStart(c);
      }
    }
    stateBeforeAttrValue(c) {
      if (c =3D=3D=3D 34) {
        this.state =3D 19;
        this.sectionStart =3D this.index + 1;
      } else if (c =3D=3D=3D 39) {
        this.state =3D 20;
        this.sectionStart =3D this.index + 1;
      } else if (!isWhitespace(c)) {
        this.sectionStart =3D this.index;
        this.state =3D 21;
        this.stateInAttrValueNoQuotes(c);
      }
    }
    handleInAttrValue(c, quote) {
      if (c =3D=3D=3D quote || this.fastForwardTo(quote)) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart =3D -1;
        this.cbs.onattribend(
          quote =3D=3D=3D 34 ? 3 : 2,
          this.index + 1
        );
        this.state =3D 11;
      }
    }
    stateInAttrValueDoubleQuotes(c) {
      this.handleInAttrValue(c, 34);
    }
    stateInAttrValueSingleQuotes(c) {
      this.handleInAttrValue(c, 39);
    }
    stateInAttrValueNoQuotes(c) {
      if (isWhitespace(c) || c =3D=3D=3D 62) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart =3D -1;
        this.cbs.onattribend(1, this.index);
        this.state =3D 11;
        this.stateBeforeAttrName(c);
      } else if (c =3D=3D=3D 34 || c =3D=3D=3D 39 || c =3D=3D=3D 60 || c =
=3D=3D=3D 61 || c =3D=3D=3D 96) {
        this.cbs.onerr(
          18,
          this.index
        );
      } else ;
    }
    stateBeforeDeclaration(c) {
      if (c =3D=3D=3D 91) {
        this.state =3D 26;
        this.sequenceIndex =3D 0;
      } else {
        this.state =3D c =3D=3D=3D 45 ? 25 : 23;
      }
    }
    stateInDeclaration(c) {
      if (c =3D=3D=3D 62 || this.fastForwardTo(62)) {
        this.state =3D 1;
        this.sectionStart =3D this.index + 1;
      }
    }
    stateInProcessingInstruction(c) {
      if (c =3D=3D=3D 62 || this.fastForwardTo(62)) {
        this.cbs.onprocessinginstruction(this.sectionStart, this.index);
        this.state =3D 1;
        this.sectionStart =3D this.index + 1;
      }
    }
    stateBeforeComment(c) {
      if (c =3D=3D=3D 45) {
        this.state =3D 28;
        this.currentSequence =3D Sequences.CommentEnd;
        this.sequenceIndex =3D 2;
        this.sectionStart =3D this.index + 1;
      } else {
        this.state =3D 23;
      }
    }
    stateInSpecialComment(c) {
      if (c =3D=3D=3D 62 || this.fastForwardTo(62)) {
        this.cbs.oncomment(this.sectionStart, this.index);
        this.state =3D 1;
        this.sectionStart =3D this.index + 1;
      }
    }
    stateBeforeSpecialS(c) {
      if (c =3D=3D=3D Sequences.ScriptEnd[3]) {
        this.startSpecial(Sequences.ScriptEnd, 4);
      } else if (c =3D=3D=3D Sequences.StyleEnd[3]) {
        this.startSpecial(Sequences.StyleEnd, 4);
      } else {
        this.state =3D 6;
        this.stateInTagName(c);
      }
    }
    stateBeforeSpecialT(c) {
      if (c =3D=3D=3D Sequences.TitleEnd[3]) {
        this.startSpecial(Sequences.TitleEnd, 4);
      } else if (c =3D=3D=3D Sequences.TextareaEnd[3]) {
        this.startSpecial(Sequences.TextareaEnd, 4);
      } else {
        this.state =3D 6;
        this.stateInTagName(c);
      }
    }
    startEntity() {
    }
    stateInEntity() {
    }
    /**
     * Iterates through the buffer, calling the function corresponding to t=
he current state.
     *
     * States that are more likely to be hit are higher up, as a performanc=
e improvement.
     */
    parse(input) {
      this.buffer =3D input;
      while (this.index &lt; this.buffer.length) {
        const c =3D this.buffer.charCodeAt(this.index);
        if (c =3D=3D=3D 10 &amp;&amp; this.state !=3D=3D 33) {
          this.newlines.push(this.index);
        }
        switch (this.state) {
          case 1: {
            this.stateText(c);
            break;
          }
          case 2: {
            this.stateInterpolationOpen(c);
            break;
          }
          case 3: {
            this.stateInterpolation(c);
            break;
          }
          case 4: {
            this.stateInterpolationClose(c);
            break;
          }
          case 31: {
            this.stateSpecialStartSequence(c);
            break;
          }
          case 32: {
            this.stateInRCDATA(c);
            break;
          }
          case 26: {
            this.stateCDATASequence(c);
            break;
          }
          case 19: {
            this.stateInAttrValueDoubleQuotes(c);
            break;
          }
          case 12: {
            this.stateInAttrName(c);
            break;
          }
          case 13: {
            this.stateInDirName(c);
            break;
          }
          case 14: {
            this.stateInDirArg(c);
            break;
          }
          case 15: {
            this.stateInDynamicDirArg(c);
            break;
          }
          case 16: {
            this.stateInDirModifier(c);
            break;
          }
          case 28: {
            this.stateInCommentLike(c);
            break;
          }
          case 27: {
            this.stateInSpecialComment(c);
            break;
          }
          case 11: {
            this.stateBeforeAttrName(c);
            break;
          }
          case 6: {
            this.stateInTagName(c);
            break;
          }
          case 34: {
            this.stateInSFCRootTagName(c);
            break;
          }
          case 9: {
            this.stateInClosingTagName(c);
            break;
          }
          case 5: {
            this.stateBeforeTagName(c);
            break;
          }
          case 17: {
            this.stateAfterAttrName(c);
            break;
          }
          case 20: {
            this.stateInAttrValueSingleQuotes(c);
            break;
          }
          case 18: {
            this.stateBeforeAttrValue(c);
            break;
          }
          case 8: {
            this.stateBeforeClosingTagName(c);
            break;
          }
          case 10: {
            this.stateAfterClosingTagName(c);
            break;
          }
          case 29: {
            this.stateBeforeSpecialS(c);
            break;
          }
          case 30: {
            this.stateBeforeSpecialT(c);
            break;
          }
          case 21: {
            this.stateInAttrValueNoQuotes(c);
            break;
          }
          case 7: {
            this.stateInSelfClosingTag(c);
            break;
          }
          case 23: {
            this.stateInDeclaration(c);
            break;
          }
          case 22: {
            this.stateBeforeDeclaration(c);
            break;
          }
          case 25: {
            this.stateBeforeComment(c);
            break;
          }
          case 24: {
            this.stateInProcessingInstruction(c);
            break;
          }
          case 33: {
            this.stateInEntity();
            break;
          }
        }
        this.index++;
      }
      this.cleanup();
      this.finish();
    }
    /**
     * Remove data that has already been consumed from the buffer.
     */
    cleanup() {
      if (this.sectionStart !=3D=3D this.index) {
        if (this.state =3D=3D=3D 1 || this.state =3D=3D=3D 32 &amp;&amp; th=
is.sequenceIndex =3D=3D=3D 0) {
          this.cbs.ontext(this.sectionStart, this.index);
          this.sectionStart =3D this.index;
        } else if (this.state =3D=3D=3D 19 || this.state =3D=3D=3D 20 || th=
is.state =3D=3D=3D 21) {
          this.cbs.onattribdata(this.sectionStart, this.index);
          this.sectionStart =3D this.index;
        }
      }
    }
    finish() {
      this.handleTrailingData();
      this.cbs.onend();
    }
    /** Handle any trailing data. */
    handleTrailingData() {
      const endIndex =3D this.buffer.length;
      if (this.sectionStart &gt;=3D endIndex) {
        return;
      }
      if (this.state =3D=3D=3D 28) {
        if (this.currentSequence =3D=3D=3D Sequences.CdataEnd) {
          this.cbs.oncdata(this.sectionStart, endIndex);
        } else {
          this.cbs.oncomment(this.sectionStart, endIndex);
        }
      } else if (this.state =3D=3D=3D 6 || this.state =3D=3D=3D 11 || this.=
state =3D=3D=3D 18 || this.state =3D=3D=3D 17 || this.state =3D=3D=3D 12 ||=
 this.state =3D=3D=3D 13 || this.state =3D=3D=3D 14 || this.state =3D=3D=3D=
 15 || this.state =3D=3D=3D 16 || this.state =3D=3D=3D 20 || this.state =3D=
=3D=3D 19 || this.state =3D=3D=3D 21 || this.state =3D=3D=3D 9) ; else {
        this.cbs.ontext(this.sectionStart, endIndex);
      }
    }
    emitCodePoint(cp, consumed) {
    }
  }

  function defaultOnError(error) {
    throw error;
  }
  function defaultOnWarn(msg) {
    console.warn(`[Vue warn] ${msg.message}`);
  }
  function createCompilerError(code, loc, messages, additionalMessage) {
    const msg =3D (messages || errorMessages)[code] + (additionalMessage ||=
 ``) ;
    const error =3D new SyntaxError(String(msg));
    error.code =3D code;
    error.loc =3D loc;
    return error;
  }
  const errorMessages =3D {
    // parse errors
    [0]: "Illegal comment.",
    [1]: "CDATA section is allowed only in XML context.",
    [2]: "Duplicate attribute.",
    [3]: "End tag cannot have attributes.",
    [4]: "Illegal '/' in tags.",
    [5]: "Unexpected EOF in tag.",
    [6]: "Unexpected EOF in CDATA section.",
    [7]: "Unexpected EOF in comment.",
    [8]: "Unexpected EOF in script.",
    [9]: "Unexpected EOF in tag.",
    [10]: "Incorrectly closed comment.",
    [11]: "Incorrectly opened comment.",
    [12]: "Illegal tag name. Use '&amp;lt;' to print '&lt;'.",
    [13]: "Attribute value was expected.",
    [14]: "End tag name was expected.",
    [15]: "Whitespace was expected.",
    [16]: "Unexpected '&lt;!--' in comment.",
    [17]: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C=
 (&lt;).`,
    [18]: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('),=
 U+003C (&lt;), U+003D (=3D), and U+0060 (`).",
    [19]: "Attribute name cannot start with '=3D'.",
    [21]: "'&lt;?' is allowed only in XML context.",
    [20]: `Unexpected null character.`,
    [22]: "Illegal '/' in tags.",
    // Vue-specific parse errors
    [23]: "Invalid end tag.",
    [24]: "Element is missing end tag.",
    [25]: "Interpolation end sign was not found.",
    [27]: "End bracket for dynamic directive argument was not found. Note t=
hat dynamic directive argument cannot contain spaces.",
    [26]: "Legal directive name was expected.",
    // transform errors
    [28]: `v-if/v-else-if is missing expression.`,
    [29]: `v-if/else branches must use unique keys.`,
    [30]: `v-else/v-else-if has no adjacent v-if or v-else-if.`,
    [31]: `v-for is missing expression.`,
    [32]: `v-for has invalid expression.`,
    [33]: `&lt;template v-for&gt; key should be placed on the &lt;template&=
gt; tag.`,
    [34]: `v-bind is missing expression.`,
    [52]: `v-bind with same-name shorthand only allows static argument.`,
    [35]: `v-on is missing expression.`,
    [36]: `Unexpected custom directive on &lt;slot&gt; outlet.`,
    [37]: `Mixed v-slot usage on both the component and nested &lt;template=
&gt;. When there are multiple named slots, all slots should use &lt;templat=
e&gt; syntax to avoid scope ambiguity.`,
    [38]: `Duplicate slot names found. `,
    [39]: `Extraneous children found when component already has explicitly =
named default slot. These children will be ignored.`,
    [40]: `v-slot can only be used on components or &lt;template&gt; tags.`=
,
    [41]: `v-model is missing expression.`,
    [42]: `v-model value must be a valid JavaScript member expression.`,
    [43]: `v-model cannot be used on v-for or v-slot scope variables becaus=
e they are not writable.`,
    [44]: `v-model cannot be used on a prop, because local prop bindings ar=
e not writable.
Use a v-bind binding combined with a v-on listener that emits update:x even=
t instead.`,
    [45]: `Error parsing JavaScript expression: `,
    [46]: `&lt;KeepAlive&gt; expects exactly one child component.`,
    [51]: `@vnode-* hooks in templates are no longer supported. Use the vue=
: prefix instead. For example, @vnode-mounted should be changed to @vue:mou=
nted. @vnode-* hooks support has been removed in 3.4.`,
    // generic errors
    [47]: `"prefixIdentifiers" option is not supported in this build of com=
piler.`,
    [48]: `ES module mode is not supported in this build of compiler.`,
    [49]: `"cacheHandlers" option is only supported when the "prefixIdentif=
iers" option is enabled.`,
    [50]: `"scopeId" option is only supported in module mode.`,
    // just to fulfill types
    [53]: ``
  };

  const isStaticExp =3D (p) =3D&gt; p.type =3D=3D=3D 4 &amp;&amp; p.isStati=
c;
  function isCoreComponent(tag) {
    switch (tag) {
      case "Teleport":
      case "teleport":
        return TELEPORT;
      case "Suspense":
      case "suspense":
        return SUSPENSE;
      case "KeepAlive":
      case "keep-alive":
        return KEEP_ALIVE;
      case "BaseTransition":
      case "base-transition":
        return BASE_TRANSITION;
    }
  }
  const nonIdentifierRE =3D /^\d|[^\$\w\xA0-\uFFFF]/;
  const isSimpleIdentifier =3D (name) =3D&gt; !nonIdentifierRE.test(name);
  const validFirstIdentCharRE =3D /[A-Za-z_$\xA0-\uFFFF]/;
  const validIdentCharRE =3D /[\.\?\w$\xA0-\uFFFF]/;
  const whitespaceRE =3D /\s+[.[]\s*|\s*[.[]\s+/g;
  const getExpSource =3D (exp) =3D&gt; exp.type =3D=3D=3D 4 ? exp.content :=
 exp.loc.source;
  const isMemberExpressionBrowser =3D (exp) =3D&gt; {
    const path =3D getExpSource(exp).trim().replace(whitespaceRE, (s) =3D&g=
t; s.trim());
    let state =3D 0 /* inMemberExp */;
    let stateStack =3D [];
    let currentOpenBracketCount =3D 0;
    let currentOpenParensCount =3D 0;
    let currentStringType =3D null;
    for (let i =3D 0; i &lt; path.length; i++) {
      const char =3D path.charAt(i);
      switch (state) {
        case 0 /* inMemberExp */:
          if (char =3D=3D=3D "[") {
            stateStack.push(state);
            state =3D 1 /* inBrackets */;
            currentOpenBracketCount++;
          } else if (char =3D=3D=3D "(") {
            stateStack.push(state);
            state =3D 2 /* inParens */;
            currentOpenParensCount++;
          } else if (!(i =3D=3D=3D 0 ? validFirstIdentCharRE : validIdentCh=
arRE).test(char)) {
            return false;
          }
          break;
        case 1 /* inBrackets */:
          if (char =3D=3D=3D `'` || char =3D=3D=3D `"` || char =3D=3D=3D "`=
") {
            stateStack.push(state);
            state =3D 3 /* inString */;
            currentStringType =3D char;
          } else if (char =3D=3D=3D `[`) {
            currentOpenBracketCount++;
          } else if (char =3D=3D=3D `]`) {
            if (!--currentOpenBracketCount) {
              state =3D stateStack.pop();
            }
          }
          break;
        case 2 /* inParens */:
          if (char =3D=3D=3D `'` || char =3D=3D=3D `"` || char =3D=3D=3D "`=
") {
            stateStack.push(state);
            state =3D 3 /* inString */;
            currentStringType =3D char;
          } else if (char =3D=3D=3D `(`) {
            currentOpenParensCount++;
          } else if (char =3D=3D=3D `)`) {
            if (i =3D=3D=3D path.length - 1) {
              return false;
            }
            if (!--currentOpenParensCount) {
              state =3D stateStack.pop();
            }
          }
          break;
        case 3 /* inString */:
          if (char =3D=3D=3D currentStringType) {
            state =3D stateStack.pop();
            currentStringType =3D null;
          }
          break;
      }
    }
    return !currentOpenBracketCount &amp;&amp; !currentOpenParensCount;
  };
  const isMemberExpression =3D isMemberExpressionBrowser ;
  const fnExpRE =3D /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=3D]+)?=3D&g=
t;|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
  const isFnExpressionBrowser =3D (exp) =3D&gt; fnExpRE.test(getExpSource(e=
xp));
  const isFnExpression =3D isFnExpressionBrowser ;
  function assert(condition, msg) {
    if (!condition) {
      throw new Error(msg || `unexpected compiler condition`);
    }
  }
  function findDir(node, name, allowEmpty =3D false) {
    for (let i =3D 0; i &lt; node.props.length; i++) {
      const p =3D node.props[i];
      if (p.type =3D=3D=3D 7 &amp;&amp; (allowEmpty || p.exp) &amp;&amp; (i=
sString(name) ? p.name =3D=3D=3D name : name.test(p.name))) {
        return p;
      }
    }
  }
  function findProp(node, name, dynamicOnly =3D false, allowEmpty =3D false=
) {
    for (let i =3D 0; i &lt; node.props.length; i++) {
      const p =3D node.props[i];
      if (p.type =3D=3D=3D 6) {
        if (dynamicOnly) continue;
        if (p.name =3D=3D=3D name &amp;&amp; (p.value || allowEmpty)) {
          return p;
        }
      } else if (p.name =3D=3D=3D "bind" &amp;&amp; (p.exp || allowEmpty) &=
amp;&amp; isStaticArgOf(p.arg, name)) {
        return p;
      }
    }
  }
  function isStaticArgOf(arg, name) {
    return !!(arg &amp;&amp; isStaticExp(arg) &amp;&amp; arg.content =3D=3D=
=3D name);
  }
  function hasDynamicKeyVBind(node) {
    return node.props.some(
      (p) =3D&gt; p.type =3D=3D=3D 7 &amp;&amp; p.name =3D=3D=3D "bind" &am=
p;&amp; (!p.arg || // v-bind=3D"obj"
      p.arg.type !=3D=3D 4 || // v-bind:[_ctx.foo]
      !p.arg.isStatic)
      // v-bind:[foo]
    );
  }
  function isText$1(node) {
    return node.type =3D=3D=3D 5 || node.type =3D=3D=3D 2;
  }
  function isVSlot(p) {
    return p.type =3D=3D=3D 7 &amp;&amp; p.name =3D=3D=3D "slot";
  }
  function isTemplateNode(node) {
    return node.type =3D=3D=3D 1 &amp;&amp; node.tagType =3D=3D=3D 3;
  }
  function isSlotOutlet(node) {
    return node.type =3D=3D=3D 1 &amp;&amp; node.tagType =3D=3D=3D 2;
  }
  const propsHelperSet =3D /* @__PURE__ */ new Set([NORMALIZE_PROPS, GUARD_=
REACTIVE_PROPS]);
  function getUnnormalizedProps(props, callPath =3D []) {
    if (props &amp;&amp; !isString(props) &amp;&amp; props.type =3D=3D=3D 1=
4) {
      const callee =3D props.callee;
      if (!isString(callee) &amp;&amp; propsHelperSet.has(callee)) {
        return getUnnormalizedProps(
          props.arguments[0],
          callPath.concat(props)
        );
      }
    }
    return [props, callPath];
  }
  function injectProp(node, prop, context) {
    let propsWithInjection;
    let props =3D node.type =3D=3D=3D 13 ? node.props : node.arguments[2];
    let callPath =3D [];
    let parentCall;
    if (props &amp;&amp; !isString(props) &amp;&amp; props.type =3D=3D=3D 1=
4) {
      const ret =3D getUnnormalizedProps(props);
      props =3D ret[0];
      callPath =3D ret[1];
      parentCall =3D callPath[callPath.length - 1];
    }
    if (props =3D=3D null || isString(props)) {
      propsWithInjection =3D createObjectExpression([prop]);
    } else if (props.type =3D=3D=3D 14) {
      const first =3D props.arguments[0];
      if (!isString(first) &amp;&amp; first.type =3D=3D=3D 15) {
        if (!hasProp(prop, first)) {
          first.properties.unshift(prop);
        }
      } else {
        if (props.callee =3D=3D=3D TO_HANDLERS) {
          propsWithInjection =3D createCallExpression(context.helper(MERGE_=
PROPS), [
            createObjectExpression([prop]),
            props
          ]);
        } else {
          props.arguments.unshift(createObjectExpression([prop]));
        }
      }
      !propsWithInjection &amp;&amp; (propsWithInjection =3D props);
    } else if (props.type =3D=3D=3D 15) {
      if (!hasProp(prop, props)) {
        props.properties.unshift(prop);
      }
      propsWithInjection =3D props;
    } else {
      propsWithInjection =3D createCallExpression(context.helper(MERGE_PROP=
S), [
        createObjectExpression([prop]),
        props
      ]);
      if (parentCall &amp;&amp; parentCall.callee =3D=3D=3D GUARD_REACTIVE_=
PROPS) {
        parentCall =3D callPath[callPath.length - 2];
      }
    }
    if (node.type =3D=3D=3D 13) {
      if (parentCall) {
        parentCall.arguments[0] =3D propsWithInjection;
      } else {
        node.props =3D propsWithInjection;
      }
    } else {
      if (parentCall) {
        parentCall.arguments[0] =3D propsWithInjection;
      } else {
        node.arguments[2] =3D propsWithInjection;
      }
    }
  }
  function hasProp(prop, props) {
    let result =3D false;
    if (prop.key.type =3D=3D=3D 4) {
      const propKeyName =3D prop.key.content;
      result =3D props.properties.some(
        (p) =3D&gt; p.key.type =3D=3D=3D 4 &amp;&amp; p.key.content =3D=3D=
=3D propKeyName
      );
    }
    return result;
  }
  function toValidAssetId(name, type) {
    return `_${type}_${name.replace(/[^\w]/g, (searchValue, replaceValue) =
=3D&gt; {
    return searchValue =3D=3D=3D "-" ? "_" : name.charCodeAt(replaceValue).=
toString();
  })}`;
  }
  function getMemoedVNodeCall(node) {
    if (node.type =3D=3D=3D 14 &amp;&amp; node.callee =3D=3D=3D WITH_MEMO) =
{
      return node.arguments[1].returns;
    } else {
      return node;
    }
  }
  const forAliasRE =3D /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;

  const defaultParserOptions =3D {
    parseMode: "base",
    ns: 0,
    delimiters: [`{{`, `}}`],
    getNamespace: () =3D&gt; 0,
    isVoidTag: NO,
    isPreTag: NO,
    isIgnoreNewlineTag: NO,
    isCustomElement: NO,
    onError: defaultOnError,
    onWarn: defaultOnWarn,
    comments: true,
    prefixIdentifiers: false
  };
  let currentOptions =3D defaultParserOptions;
  let currentRoot =3D null;
  let currentInput =3D "";
  let currentOpenTag =3D null;
  let currentProp =3D null;
  let currentAttrValue =3D "";
  let currentAttrStartIndex =3D -1;
  let currentAttrEndIndex =3D -1;
  let inPre =3D 0;
  let inVPre =3D false;
  let currentVPreBoundary =3D null;
  const stack =3D [];
  const tokenizer =3D new Tokenizer(stack, {
    onerr: emitError,
    ontext(start, end) {
      onText(getSlice(start, end), start, end);
    },
    ontextentity(char, start, end) {
      onText(char, start, end);
    },
    oninterpolation(start, end) {
      if (inVPre) {
        return onText(getSlice(start, end), start, end);
      }
      let innerStart =3D start + tokenizer.delimiterOpen.length;
      let innerEnd =3D end - tokenizer.delimiterClose.length;
      while (isWhitespace(currentInput.charCodeAt(innerStart))) {
        innerStart++;
      }
      while (isWhitespace(currentInput.charCodeAt(innerEnd - 1))) {
        innerEnd--;
      }
      let exp =3D getSlice(innerStart, innerEnd);
      if (exp.includes("&amp;")) {
        {
          exp =3D currentOptions.decodeEntities(exp, false);
        }
      }
      addNode({
        type: 5,
        content: createExp(exp, false, getLoc(innerStart, innerEnd)),
        loc: getLoc(start, end)
      });
    },
    onopentagname(start, end) {
      const name =3D getSlice(start, end);
      currentOpenTag =3D {
        type: 1,
        tag: name,
        ns: currentOptions.getNamespace(name, stack[0], currentOptions.ns),
        tagType: 0,
        // will be refined on tag close
        props: [],
        children: [],
        loc: getLoc(start - 1, end),
        codegenNode: void 0
      };
    },
    onopentagend(end) {
      endOpenTag(end);
    },
    onclosetag(start, end) {
      const name =3D getSlice(start, end);
      if (!currentOptions.isVoidTag(name)) {
        let found =3D false;
        for (let i =3D 0; i &lt; stack.length; i++) {
          const e =3D stack[i];
          if (e.tag.toLowerCase() =3D=3D=3D name.toLowerCase()) {
            found =3D true;
            if (i &gt; 0) {
              emitError(24, stack[0].loc.start.offset);
            }
            for (let j =3D 0; j &lt;=3D i; j++) {
              const el =3D stack.shift();
              onCloseTag(el, end, j &lt; i);
            }
            break;
          }
        }
        if (!found) {
          emitError(23, backTrack(start, 60));
        }
      }
    },
    onselfclosingtag(end) {
      const name =3D currentOpenTag.tag;
      currentOpenTag.isSelfClosing =3D true;
      endOpenTag(end);
      if (stack[0] &amp;&amp; stack[0].tag =3D=3D=3D name) {
        onCloseTag(stack.shift(), end);
      }
    },
    onattribname(start, end) {
      currentProp =3D {
        type: 6,
        name: getSlice(start, end),
        nameLoc: getLoc(start, end),
        value: void 0,
        loc: getLoc(start)
      };
    },
    ondirname(start, end) {
      const raw =3D getSlice(start, end);
      const name =3D raw =3D=3D=3D "." || raw =3D=3D=3D ":" ? "bind" : raw =
=3D=3D=3D "@" ? "on" : raw =3D=3D=3D "#" ? "slot" : raw.slice(2);
      if (!inVPre &amp;&amp; name =3D=3D=3D "") {
        emitError(26, start);
      }
      if (inVPre || name =3D=3D=3D "") {
        currentProp =3D {
          type: 6,
          name: raw,
          nameLoc: getLoc(start, end),
          value: void 0,
          loc: getLoc(start)
        };
      } else {
        currentProp =3D {
          type: 7,
          name,
          rawName: raw,
          exp: void 0,
          arg: void 0,
          modifiers: raw =3D=3D=3D "." ? [createSimpleExpression("prop")] :=
 [],
          loc: getLoc(start)
        };
        if (name =3D=3D=3D "pre") {
          inVPre =3D tokenizer.inVPre =3D true;
          currentVPreBoundary =3D currentOpenTag;
          const props =3D currentOpenTag.props;
          for (let i =3D 0; i &lt; props.length; i++) {
            if (props[i].type =3D=3D=3D 7) {
              props[i] =3D dirToAttr(props[i]);
            }
          }
        }
      }
    },
    ondirarg(start, end) {
      if (start =3D=3D=3D end) return;
      const arg =3D getSlice(start, end);
      if (inVPre) {
        currentProp.name +=3D arg;
        setLocEnd(currentProp.nameLoc, end);
      } else {
        const isStatic =3D arg[0] !=3D=3D `[`;
        currentProp.arg =3D createExp(
          isStatic ? arg : arg.slice(1, -1),
          isStatic,
          getLoc(start, end),
          isStatic ? 3 : 0
        );
      }
    },
    ondirmodifier(start, end) {
      const mod =3D getSlice(start, end);
      if (inVPre) {
        currentProp.name +=3D "." + mod;
        setLocEnd(currentProp.nameLoc, end);
      } else if (currentProp.name =3D=3D=3D "slot") {
        const arg =3D currentProp.arg;
        if (arg) {
          arg.content +=3D "." + mod;
          setLocEnd(arg.loc, end);
        }
      } else {
        const exp =3D createSimpleExpression(mod, true, getLoc(start, end))=
;
        currentProp.modifiers.push(exp);
      }
    },
    onattribdata(start, end) {
      currentAttrValue +=3D getSlice(start, end);
      if (currentAttrStartIndex &lt; 0) currentAttrStartIndex =3D start;
      currentAttrEndIndex =3D end;
    },
    onattribentity(char, start, end) {
      currentAttrValue +=3D char;
      if (currentAttrStartIndex &lt; 0) currentAttrStartIndex =3D start;
      currentAttrEndIndex =3D end;
    },
    onattribnameend(end) {
      const start =3D currentProp.loc.start.offset;
      const name =3D getSlice(start, end);
      if (currentProp.type =3D=3D=3D 7) {
        currentProp.rawName =3D name;
      }
      if (currentOpenTag.props.some(
        (p) =3D&gt; (p.type =3D=3D=3D 7 ? p.rawName : p.name) =3D=3D=3D nam=
e
      )) {
        emitError(2, start);
      }
    },
    onattribend(quote, end) {
      if (currentOpenTag &amp;&amp; currentProp) {
        setLocEnd(currentProp.loc, end);
        if (quote !=3D=3D 0) {
          if (currentAttrValue.includes("&amp;")) {
            currentAttrValue =3D currentOptions.decodeEntities(
              currentAttrValue,
              true
            );
          }
          if (currentProp.type =3D=3D=3D 6) {
            if (currentProp.name =3D=3D=3D "class") {
              currentAttrValue =3D condense(currentAttrValue).trim();
            }
            if (quote =3D=3D=3D 1 &amp;&amp; !currentAttrValue) {
              emitError(13, end);
            }
            currentProp.value =3D {
              type: 2,
              content: currentAttrValue,
              loc: quote =3D=3D=3D 1 ? getLoc(currentAttrStartIndex, curren=
tAttrEndIndex) : getLoc(currentAttrStartIndex - 1, currentAttrEndIndex + 1)
            };
            if (tokenizer.inSFCRoot &amp;&amp; currentOpenTag.tag =3D=3D=3D=
 "template" &amp;&amp; currentProp.name =3D=3D=3D "lang" &amp;&amp; current=
AttrValue &amp;&amp; currentAttrValue !=3D=3D "html") {
              tokenizer.enterRCDATA(toCharCodes(`&lt;/template`), 0);
            }
          } else {
            let expParseMode =3D 0 /* Normal */;
            currentProp.exp =3D createExp(
              currentAttrValue,
              false,
              getLoc(currentAttrStartIndex, currentAttrEndIndex),
              0,
              expParseMode
            );
            if (currentProp.name =3D=3D=3D "for") {
              currentProp.forParseResult =3D parseForExpression(currentProp=
.exp);
            }
          }
        }
        if (currentProp.type !=3D=3D 7 || currentProp.name !=3D=3D "pre") {
          currentOpenTag.props.push(currentProp);
        }
      }
      currentAttrValue =3D "";
      currentAttrStartIndex =3D currentAttrEndIndex =3D -1;
    },
    oncomment(start, end) {
      if (currentOptions.comments) {
        addNode({
          type: 3,
          content: getSlice(start, end),
          loc: getLoc(start - 4, end + 3)
        });
      }
    },
    onend() {
      const end =3D currentInput.length;
      if (tokenizer.state !=3D=3D 1) {
        switch (tokenizer.state) {
          case 5:
          case 8:
            emitError(5, end);
            break;
          case 3:
          case 4:
            emitError(
              25,
              tokenizer.sectionStart
            );
            break;
          case 28:
            if (tokenizer.currentSequence =3D=3D=3D Sequences.CdataEnd) {
              emitError(6, end);
            } else {
              emitError(7, end);
            }
            break;
          case 6:
          case 7:
          case 9:
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
          case 16:
          case 17:
          case 18:
          case 19:
          // "
          case 20:
          // '
          case 21:
            emitError(9, end);
            break;
        }
      }
      for (let index =3D 0; index &lt; stack.length; index++) {
        onCloseTag(stack[index], end - 1);
        emitError(24, stack[index].loc.start.offset);
      }
    },
    oncdata(start, end) {
      if (stack[0].ns !=3D=3D 0) {
        onText(getSlice(start, end), start, end);
      } else {
        emitError(1, start - 9);
      }
    },
    onprocessinginstruction(start) {
      if ((stack[0] ? stack[0].ns : currentOptions.ns) =3D=3D=3D 0) {
        emitError(
          21,
          start - 1
        );
      }
    }
  });
  const forIteratorRE =3D /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  const stripParensRE =3D /^\(|\)$/g;
  function parseForExpression(input) {
    const loc =3D input.loc;
    const exp =3D input.content;
    const inMatch =3D exp.match(forAliasRE);
    if (!inMatch) return;
    const [, LHS, RHS] =3D inMatch;
    const createAliasExpression =3D (content, offset, asParam =3D false) =
=3D&gt; {
      const start =3D loc.start.offset + offset;
      const end =3D start + content.length;
      return createExp(
        content,
        false,
        getLoc(start, end),
        0,
        asParam ? 1 /* Params */ : 0 /* Normal */
      );
    };
    const result =3D {
      source: createAliasExpression(RHS.trim(), exp.indexOf(RHS, LHS.length=
)),
      value: void 0,
      key: void 0,
      index: void 0,
      finalized: false
    };
    let valueContent =3D LHS.trim().replace(stripParensRE, "").trim();
    const trimmedOffset =3D LHS.indexOf(valueContent);
    const iteratorMatch =3D valueContent.match(forIteratorRE);
    if (iteratorMatch) {
      valueContent =3D valueContent.replace(forIteratorRE, "").trim();
      const keyContent =3D iteratorMatch[1].trim();
      let keyOffset;
      if (keyContent) {
        keyOffset =3D exp.indexOf(keyContent, trimmedOffset + valueContent.=
length);
        result.key =3D createAliasExpression(keyContent, keyOffset, true);
      }
      if (iteratorMatch[2]) {
        const indexContent =3D iteratorMatch[2].trim();
        if (indexContent) {
          result.index =3D createAliasExpression(
            indexContent,
            exp.indexOf(
              indexContent,
              result.key ? keyOffset + keyContent.length : trimmedOffset + =
valueContent.length
            ),
            true
          );
        }
      }
    }
    if (valueContent) {
      result.value =3D createAliasExpression(valueContent, trimmedOffset, t=
rue);
    }
    return result;
  }
  function getSlice(start, end) {
    return currentInput.slice(start, end);
  }
  function endOpenTag(end) {
    if (tokenizer.inSFCRoot) {
      currentOpenTag.innerLoc =3D getLoc(end + 1, end + 1);
    }
    addNode(currentOpenTag);
    const { tag, ns } =3D currentOpenTag;
    if (ns =3D=3D=3D 0 &amp;&amp; currentOptions.isPreTag(tag)) {
      inPre++;
    }
    if (currentOptions.isVoidTag(tag)) {
      onCloseTag(currentOpenTag, end);
    } else {
      stack.unshift(currentOpenTag);
      if (ns =3D=3D=3D 1 || ns =3D=3D=3D 2) {
        tokenizer.inXML =3D true;
      }
    }
    currentOpenTag =3D null;
  }
  function onText(content, start, end) {
    {
      const tag =3D stack[0] &amp;&amp; stack[0].tag;
      if (tag !=3D=3D "script" &amp;&amp; tag !=3D=3D "style" &amp;&amp; co=
ntent.includes("&amp;")) {
        content =3D currentOptions.decodeEntities(content, false);
      }
    }
    const parent =3D stack[0] || currentRoot;
    const lastNode =3D parent.children[parent.children.length - 1];
    if (lastNode &amp;&amp; lastNode.type =3D=3D=3D 2) {
      lastNode.content +=3D content;
      setLocEnd(lastNode.loc, end);
    } else {
      parent.children.push({
        type: 2,
        content,
        loc: getLoc(start, end)
      });
    }
  }
  function onCloseTag(el, end, isImplied =3D false) {
    if (isImplied) {
      setLocEnd(el.loc, backTrack(end, 60));
    } else {
      setLocEnd(el.loc, lookAhead(end, 62) + 1);
    }
    if (tokenizer.inSFCRoot) {
      if (el.children.length) {
        el.innerLoc.end =3D extend({}, el.children[el.children.length - 1].=
loc.end);
      } else {
        el.innerLoc.end =3D extend({}, el.innerLoc.start);
      }
      el.innerLoc.source =3D getSlice(
        el.innerLoc.start.offset,
        el.innerLoc.end.offset
      );
    }
    const { tag, ns, children } =3D el;
    if (!inVPre) {
      if (tag =3D=3D=3D "slot") {
        el.tagType =3D 2;
      } else if (isFragmentTemplate(el)) {
        el.tagType =3D 3;
      } else if (isComponent(el)) {
        el.tagType =3D 1;
      }
    }
    if (!tokenizer.inRCDATA) {
      el.children =3D condenseWhitespace(children);
    }
    if (ns =3D=3D=3D 0 &amp;&amp; currentOptions.isIgnoreNewlineTag(tag)) {
      const first =3D children[0];
      if (first &amp;&amp; first.type =3D=3D=3D 2) {
        first.content =3D first.content.replace(/^\r?\n/, "");
      }
    }
    if (ns =3D=3D=3D 0 &amp;&amp; currentOptions.isPreTag(tag)) {
      inPre--;
    }
    if (currentVPreBoundary =3D=3D=3D el) {
      inVPre =3D tokenizer.inVPre =3D false;
      currentVPreBoundary =3D null;
    }
    if (tokenizer.inXML &amp;&amp; (stack[0] ? stack[0].ns : currentOptions=
.ns) =3D=3D=3D 0) {
      tokenizer.inXML =3D false;
    }
  }
  function lookAhead(index, c) {
    let i =3D index;
    while (currentInput.charCodeAt(i) !=3D=3D c &amp;&amp; i &lt; currentIn=
put.length - 1) i++;
    return i;
  }
  function backTrack(index, c) {
    let i =3D index;
    while (currentInput.charCodeAt(i) !=3D=3D c &amp;&amp; i &gt;=3D 0) i--=
;
    return i;
  }
  const specialTemplateDir =3D /* @__PURE__ */ new Set(["if", "else", "else=
-if", "for", "slot"]);
  function isFragmentTemplate({ tag, props }) {
    if (tag =3D=3D=3D "template") {
      for (let i =3D 0; i &lt; props.length; i++) {
        if (props[i].type =3D=3D=3D 7 &amp;&amp; specialTemplateDir.has(pro=
ps[i].name)) {
          return true;
        }
      }
    }
    return false;
  }
  function isComponent({ tag, props }) {
    if (currentOptions.isCustomElement(tag)) {
      return false;
    }
    if (tag =3D=3D=3D "component" || isUpperCase(tag.charCodeAt(0)) || isCo=
reComponent(tag) || currentOptions.isBuiltInComponent &amp;&amp; currentOpt=
ions.isBuiltInComponent(tag) || currentOptions.isNativeTag &amp;&amp; !curr=
entOptions.isNativeTag(tag)) {
      return true;
    }
    for (let i =3D 0; i &lt; props.length; i++) {
      const p =3D props[i];
      if (p.type =3D=3D=3D 6) {
        if (p.name =3D=3D=3D "is" &amp;&amp; p.value) {
          if (p.value.content.startsWith("vue:")) {
            return true;
          }
        }
      }
    }
    return false;
  }
  function isUpperCase(c) {
    return c &gt; 64 &amp;&amp; c &lt; 91;
  }
  const windowsNewlineRE =3D /\r\n/g;
  function condenseWhitespace(nodes) {
    const shouldCondense =3D currentOptions.whitespace !=3D=3D "preserve";
    let removedWhitespace =3D false;
    for (let i =3D 0; i &lt; nodes.length; i++) {
      const node =3D nodes[i];
      if (node.type =3D=3D=3D 2) {
        if (!inPre) {
          if (isAllWhitespace(node.content)) {
            const prev =3D nodes[i - 1] &amp;&amp; nodes[i - 1].type;
            const next =3D nodes[i + 1] &amp;&amp; nodes[i + 1].type;
            if (!prev || !next || shouldCondense &amp;&amp; (prev =3D=3D=3D=
 3 &amp;&amp; (next =3D=3D=3D 3 || next =3D=3D=3D 1) || prev =3D=3D=3D 1 &a=
mp;&amp; (next =3D=3D=3D 3 || next =3D=3D=3D 1 &amp;&amp; hasNewlineChar(no=
de.content)))) {
              removedWhitespace =3D true;
              nodes[i] =3D null;
            } else {
              node.content =3D " ";
            }
          } else if (shouldCondense) {
            node.content =3D condense(node.content);
          }
        } else {
          node.content =3D node.content.replace(windowsNewlineRE, "\n");
        }
      }
    }
    return removedWhitespace ? nodes.filter(Boolean) : nodes;
  }
  function isAllWhitespace(str) {
    for (let i =3D 0; i &lt; str.length; i++) {
      if (!isWhitespace(str.charCodeAt(i))) {
        return false;
      }
    }
    return true;
  }
  function hasNewlineChar(str) {
    for (let i =3D 0; i &lt; str.length; i++) {
      const c =3D str.charCodeAt(i);
      if (c =3D=3D=3D 10 || c =3D=3D=3D 13) {
        return true;
      }
    }
    return false;
  }
  function condense(str) {
    let ret =3D "";
    let prevCharIsWhitespace =3D false;
    for (let i =3D 0; i &lt; str.length; i++) {
      if (isWhitespace(str.charCodeAt(i))) {
        if (!prevCharIsWhitespace) {
          ret +=3D " ";
          prevCharIsWhitespace =3D true;
        }
      } else {
        ret +=3D str[i];
        prevCharIsWhitespace =3D false;
      }
    }
    return ret;
  }
  function addNode(node) {
    (stack[0] || currentRoot).children.push(node);
  }
  function getLoc(start, end) {
    return {
      start: tokenizer.getPos(start),
      // @ts-expect-error allow late attachment
      end: end =3D=3D null ? end : tokenizer.getPos(end),
      // @ts-expect-error allow late attachment
      source: end =3D=3D null ? end : getSlice(start, end)
    };
  }
  function cloneLoc(loc) {
    return getLoc(loc.start.offset, loc.end.offset);
  }
  function setLocEnd(loc, end) {
    loc.end =3D tokenizer.getPos(end);
    loc.source =3D getSlice(loc.start.offset, end);
  }
  function dirToAttr(dir) {
    const attr =3D {
      type: 6,
      name: dir.rawName,
      nameLoc: getLoc(
        dir.loc.start.offset,
        dir.loc.start.offset + dir.rawName.length
      ),
      value: void 0,
      loc: dir.loc
    };
    if (dir.exp) {
      const loc =3D dir.exp.loc;
      if (loc.end.offset &lt; dir.loc.end.offset) {
        loc.start.offset--;
        loc.start.column--;
        loc.end.offset++;
        loc.end.column++;
      }
      attr.value =3D {
        type: 2,
        content: dir.exp.content,
        loc
      };
    }
    return attr;
  }
  function createExp(content, isStatic =3D false, loc, constType =3D 0, par=
seMode =3D 0 /* Normal */) {
    const exp =3D createSimpleExpression(content, isStatic, loc, constType)=
;
    return exp;
  }
  function emitError(code, index, message) {
    currentOptions.onError(
      createCompilerError(code, getLoc(index, index), void 0, message)
    );
  }
  function reset() {
    tokenizer.reset();
    currentOpenTag =3D null;
    currentProp =3D null;
    currentAttrValue =3D "";
    currentAttrStartIndex =3D -1;
    currentAttrEndIndex =3D -1;
    stack.length =3D 0;
  }
  function baseParse(input, options) {
    reset();
    currentInput =3D input;
    currentOptions =3D extend({}, defaultParserOptions);
    if (options) {
      let key;
      for (key in options) {
        if (options[key] !=3D null) {
          currentOptions[key] =3D options[key];
        }
      }
    }
    {
      if (!currentOptions.decodeEntities) {
        throw new Error(
          `[@vue/compiler-core] decodeEntities option is required in browse=
r builds.`
        );
      }
    }
    tokenizer.mode =3D currentOptions.parseMode =3D=3D=3D "html" ? 1 : curr=
entOptions.parseMode =3D=3D=3D "sfc" ? 2 : 0;
    tokenizer.inXML =3D currentOptions.ns =3D=3D=3D 1 || currentOptions.ns =
=3D=3D=3D 2;
    const delimiters =3D options &amp;&amp; options.delimiters;
    if (delimiters) {
      tokenizer.delimiterOpen =3D toCharCodes(delimiters[0]);
      tokenizer.delimiterClose =3D toCharCodes(delimiters[1]);
    }
    const root =3D currentRoot =3D createRoot([], input);
    tokenizer.parse(currentInput);
    root.loc =3D getLoc(0, input.length);
    root.children =3D condenseWhitespace(root.children);
    currentRoot =3D null;
    return root;
  }

  function cacheStatic(root, context) {
    walk(
      root,
      void 0,
      context,
      // Root node is unfortunately non-hoistable due to potential parent
      // fallthrough attributes.
      !!getSingleElementRoot(root)
    );
  }
  function getSingleElementRoot(root) {
    const children =3D root.children.filter((x) =3D&gt; x.type !=3D=3D 3);
    return children.length =3D=3D=3D 1 &amp;&amp; children[0].type =3D=3D=
=3D 1 &amp;&amp; !isSlotOutlet(children[0]) ? children[0] : null;
  }
  function walk(node, parent, context, doNotHoistNode =3D false, inFor =3D =
false) {
    const { children } =3D node;
    const toCache =3D [];
    for (let i =3D 0; i &lt; children.length; i++) {
      const child =3D children[i];
      if (child.type =3D=3D=3D 1 &amp;&amp; child.tagType =3D=3D=3D 0) {
        const constantType =3D doNotHoistNode ? 0 : getConstantType(child, =
context);
        if (constantType &gt; 0) {
          if (constantType &gt;=3D 2) {
            child.codegenNode.patchFlag =3D -1;
            toCache.push(child);
            continue;
          }
        } else {
          const codegenNode =3D child.codegenNode;
          if (codegenNode.type =3D=3D=3D 13) {
            const flag =3D codegenNode.patchFlag;
            if ((flag =3D=3D=3D void 0 || flag =3D=3D=3D 512 || flag =3D=3D=
=3D 1) &amp;&amp; getGeneratedPropsConstantType(child, context) &gt;=3D 2) =
{
              const props =3D getNodeProps(child);
              if (props) {
                codegenNode.props =3D context.hoist(props);
              }
            }
            if (codegenNode.dynamicProps) {
              codegenNode.dynamicProps =3D context.hoist(codegenNode.dynami=
cProps);
            }
          }
        }
      } else if (child.type =3D=3D=3D 12) {
        const constantType =3D doNotHoistNode ? 0 : getConstantType(child, =
context);
        if (constantType &gt;=3D 2) {
          toCache.push(child);
          continue;
        }
      }
      if (child.type =3D=3D=3D 1) {
        const isComponent =3D child.tagType =3D=3D=3D 1;
        if (isComponent) {
          context.scopes.vSlot++;
        }
        walk(child, node, context, false, inFor);
        if (isComponent) {
          context.scopes.vSlot--;
        }
      } else if (child.type =3D=3D=3D 11) {
        walk(child, node, context, child.children.length =3D=3D=3D 1, true)=
;
      } else if (child.type =3D=3D=3D 9) {
        for (let i2 =3D 0; i2 &lt; child.branches.length; i2++) {
          walk(
            child.branches[i2],
            node,
            context,
            child.branches[i2].children.length =3D=3D=3D 1,
            inFor
          );
        }
      }
    }
    let cachedAsArray =3D false;
    const slotCacheKeys =3D [];
    if (toCache.length =3D=3D=3D children.length &amp;&amp; node.type =3D=
=3D=3D 1) {
      if (node.tagType =3D=3D=3D 0 &amp;&amp; node.codegenNode &amp;&amp; n=
ode.codegenNode.type =3D=3D=3D 13 &amp;&amp; isArray(node.codegenNode.child=
ren)) {
        node.codegenNode.children =3D getCacheExpression(
          createArrayExpression(node.codegenNode.children)
        );
        cachedAsArray =3D true;
      } else if (node.tagType =3D=3D=3D 1 &amp;&amp; node.codegenNode &amp;=
&amp; node.codegenNode.type =3D=3D=3D 13 &amp;&amp; node.codegenNode.childr=
en &amp;&amp; !isArray(node.codegenNode.children) &amp;&amp; node.codegenNo=
de.children.type =3D=3D=3D 15) {
        const slot =3D getSlotNode(node.codegenNode, "default");
        if (slot) {
          slotCacheKeys.push(context.cached.length);
          slot.returns =3D getCacheExpression(
            createArrayExpression(slot.returns)
          );
          cachedAsArray =3D true;
        }
      } else if (node.tagType =3D=3D=3D 3 &amp;&amp; parent &amp;&amp; pare=
nt.type =3D=3D=3D 1 &amp;&amp; parent.tagType =3D=3D=3D 1 &amp;&amp; parent=
.codegenNode &amp;&amp; parent.codegenNode.type =3D=3D=3D 13 &amp;&amp; par=
ent.codegenNode.children &amp;&amp; !isArray(parent.codegenNode.children) &=
amp;&amp; parent.codegenNode.children.type =3D=3D=3D 15) {
        const slotName =3D findDir(node, "slot", true);
        const slot =3D slotName &amp;&amp; slotName.arg &amp;&amp; getSlotN=
ode(parent.codegenNode, slotName.arg);
        if (slot) {
          slotCacheKeys.push(context.cached.length);
          slot.returns =3D getCacheExpression(
            createArrayExpression(slot.returns)
          );
          cachedAsArray =3D true;
        }
      }
    }
    if (!cachedAsArray) {
      for (const child of toCache) {
        slotCacheKeys.push(context.cached.length);
        child.codegenNode =3D context.cache(child.codegenNode);
      }
    }
    if (slotCacheKeys.length &amp;&amp; node.type =3D=3D=3D 1 &amp;&amp; no=
de.tagType =3D=3D=3D 1 &amp;&amp; node.codegenNode &amp;&amp; node.codegenN=
ode.type =3D=3D=3D 13 &amp;&amp; node.codegenNode.children &amp;&amp; !isAr=
ray(node.codegenNode.children) &amp;&amp; node.codegenNode.children.type =
=3D=3D=3D 15) {
      node.codegenNode.children.properties.push(
        createObjectProperty(
          `__`,
          createSimpleExpression(JSON.stringify(slotCacheKeys), false)
        )
      );
    }
    function getCacheExpression(value) {
      const exp =3D context.cache(value);
      if (inFor &amp;&amp; context.hmr) {
        exp.needArraySpread =3D true;
      }
      return exp;
    }
    function getSlotNode(node2, name) {
      if (node2.children &amp;&amp; !isArray(node2.children) &amp;&amp; nod=
e2.children.type =3D=3D=3D 15) {
        const slot =3D node2.children.properties.find(
          (p) =3D&gt; p.key =3D=3D=3D name || p.key.content =3D=3D=3D name
        );
        return slot &amp;&amp; slot.value;
      }
    }
    if (toCache.length &amp;&amp; context.transformHoist) {
      context.transformHoist(children, context, node);
    }
  }
  function getConstantType(node, context) {
    const { constantCache } =3D context;
    switch (node.type) {
      case 1:
        if (node.tagType !=3D=3D 0) {
          return 0;
        }
        const cached =3D constantCache.get(node);
        if (cached !=3D=3D void 0) {
          return cached;
        }
        const codegenNode =3D node.codegenNode;
        if (codegenNode.type !=3D=3D 13) {
          return 0;
        }
        if (codegenNode.isBlock &amp;&amp; node.tag !=3D=3D "svg" &amp;&amp=
; node.tag !=3D=3D "foreignObject" &amp;&amp; node.tag !=3D=3D "math") {
          return 0;
        }
        if (codegenNode.patchFlag =3D=3D=3D void 0) {
          let returnType2 =3D 3;
          const generatedPropsType =3D getGeneratedPropsConstantType(node, =
context);
          if (generatedPropsType =3D=3D=3D 0) {
            constantCache.set(node, 0);
            return 0;
          }
          if (generatedPropsType &lt; returnType2) {
            returnType2 =3D generatedPropsType;
          }
          for (let i =3D 0; i &lt; node.children.length; i++) {
            const childType =3D getConstantType(node.children[i], context);
            if (childType =3D=3D=3D 0) {
              constantCache.set(node, 0);
              return 0;
            }
            if (childType &lt; returnType2) {
              returnType2 =3D childType;
            }
          }
          if (returnType2 &gt; 1) {
            for (let i =3D 0; i &lt; node.props.length; i++) {
              const p =3D node.props[i];
              if (p.type =3D=3D=3D 7 &amp;&amp; p.name =3D=3D=3D "bind" &am=
p;&amp; p.exp) {
                const expType =3D getConstantType(p.exp, context);
                if (expType =3D=3D=3D 0) {
                  constantCache.set(node, 0);
                  return 0;
                }
                if (expType &lt; returnType2) {
                  returnType2 =3D expType;
                }
              }
            }
          }
          if (codegenNode.isBlock) {
            for (let i =3D 0; i &lt; node.props.length; i++) {
              const p =3D node.props[i];
              if (p.type =3D=3D=3D 7) {
                constantCache.set(node, 0);
                return 0;
              }
            }
            context.removeHelper(OPEN_BLOCK);
            context.removeHelper(
              getVNodeBlockHelper(context.inSSR, codegenNode.isComponent)
            );
            codegenNode.isBlock =3D false;
            context.helper(getVNodeHelper(context.inSSR, codegenNode.isComp=
onent));
          }
          constantCache.set(node, returnType2);
          return returnType2;
        } else {
          constantCache.set(node, 0);
          return 0;
        }
      case 2:
      case 3:
        return 3;
      case 9:
      case 11:
      case 10:
        return 0;
      case 5:
      case 12:
        return getConstantType(node.content, context);
      case 4:
        return node.constType;
      case 8:
        let returnType =3D 3;
        for (let i =3D 0; i &lt; node.children.length; i++) {
          const child =3D node.children[i];
          if (isString(child) || isSymbol(child)) {
            continue;
          }
          const childType =3D getConstantType(child, context);
          if (childType =3D=3D=3D 0) {
            return 0;
          } else if (childType &lt; returnType) {
            returnType =3D childType;
          }
        }
        return returnType;
      case 20:
        return 2;
      default:
        return 0;
    }
  }
  const allowHoistedHelperSet =3D /* @__PURE__ */ new Set([
    NORMALIZE_CLASS,
    NORMALIZE_STYLE,
    NORMALIZE_PROPS,
    GUARD_REACTIVE_PROPS
  ]);
  function getConstantTypeOfHelperCall(value, context) {
    if (value.type =3D=3D=3D 14 &amp;&amp; !isString(value.callee) &amp;&am=
p; allowHoistedHelperSet.has(value.callee)) {
      const arg =3D value.arguments[0];
      if (arg.type =3D=3D=3D 4) {
        return getConstantType(arg, context);
      } else if (arg.type =3D=3D=3D 14) {
        return getConstantTypeOfHelperCall(arg, context);
      }
    }
    return 0;
  }
  function getGeneratedPropsConstantType(node, context) {
    let returnType =3D 3;
    const props =3D getNodeProps(node);
    if (props &amp;&amp; props.type =3D=3D=3D 15) {
      const { properties } =3D props;
      for (let i =3D 0; i &lt; properties.length; i++) {
        const { key, value } =3D properties[i];
        const keyType =3D getConstantType(key, context);
        if (keyType =3D=3D=3D 0) {
          return keyType;
        }
        if (keyType &lt; returnType) {
          returnType =3D keyType;
        }
        let valueType;
        if (value.type =3D=3D=3D 4) {
          valueType =3D getConstantType(value, context);
        } else if (value.type =3D=3D=3D 14) {
          valueType =3D getConstantTypeOfHelperCall(value, context);
        } else {
          valueType =3D 0;
        }
        if (valueType =3D=3D=3D 0) {
          return valueType;
        }
        if (valueType &lt; returnType) {
          returnType =3D valueType;
        }
      }
    }
    return returnType;
  }
  function getNodeProps(node) {
    const codegenNode =3D node.codegenNode;
    if (codegenNode.type =3D=3D=3D 13) {
      return codegenNode.props;
    }
  }

  function createTransformContext(root, {
    filename =3D "",
    prefixIdentifiers =3D false,
    hoistStatic =3D false,
    hmr =3D false,
    cacheHandlers =3D false,
    nodeTransforms =3D [],
    directiveTransforms =3D {},
    transformHoist =3D null,
    isBuiltInComponent =3D NOOP,
    isCustomElement =3D NOOP,
    expressionPlugins =3D [],
    scopeId =3D null,
    slotted =3D true,
    ssr =3D false,
    inSSR =3D false,
    ssrCssVars =3D ``,
    bindingMetadata =3D EMPTY_OBJ,
    inline =3D false,
    isTS =3D false,
    onError =3D defaultOnError,
    onWarn =3D defaultOnWarn,
    compatConfig
  }) {
    const nameMatch =3D filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+=
$/);
    const context =3D {
      // options
      filename,
      selfName: nameMatch &amp;&amp; capitalize(camelize(nameMatch[1])),
      prefixIdentifiers,
      hoistStatic,
      hmr,
      cacheHandlers,
      nodeTransforms,
      directiveTransforms,
      transformHoist,
      isBuiltInComponent,
      isCustomElement,
      expressionPlugins,
      scopeId,
      slotted,
      ssr,
      inSSR,
      ssrCssVars,
      bindingMetadata,
      inline,
      isTS,
      onError,
      onWarn,
      compatConfig,
      // state
      root,
      helpers: /* @__PURE__ */ new Map(),
      components: /* @__PURE__ */ new Set(),
      directives: /* @__PURE__ */ new Set(),
      hoists: [],
      imports: [],
      cached: [],
      constantCache: /* @__PURE__ */ new WeakMap(),
      temps: 0,
      identifiers: /* @__PURE__ */ Object.create(null),
      scopes: {
        vFor: 0,
        vSlot: 0,
        vPre: 0,
        vOnce: 0
      },
      parent: null,
      grandParent: null,
      currentNode: root,
      childIndex: 0,
      inVOnce: false,
      // methods
      helper(name) {
        const count =3D context.helpers.get(name) || 0;
        context.helpers.set(name, count + 1);
        return name;
      },
      removeHelper(name) {
        const count =3D context.helpers.get(name);
        if (count) {
          const currentCount =3D count - 1;
          if (!currentCount) {
            context.helpers.delete(name);
          } else {
            context.helpers.set(name, currentCount);
          }
        }
      },
      helperString(name) {
        return `_${helperNameMap[context.helper(name)]}`;
      },
      replaceNode(node) {
        {
          if (!context.currentNode) {
            throw new Error(`Node being replaced is already removed.`);
          }
          if (!context.parent) {
            throw new Error(`Cannot replace root node.`);
          }
        }
        context.parent.children[context.childIndex] =3D context.currentNode=
 =3D node;
      },
      removeNode(node) {
        if (!context.parent) {
          throw new Error(`Cannot remove root node.`);
        }
        const list =3D context.parent.children;
        const removalIndex =3D node ? list.indexOf(node) : context.currentN=
ode ? context.childIndex : -1;
        if (removalIndex &lt; 0) {
          throw new Error(`node being removed is not a child of current par=
ent`);
        }
        if (!node || node =3D=3D=3D context.currentNode) {
          context.currentNode =3D null;
          context.onNodeRemoved();
        } else {
          if (context.childIndex &gt; removalIndex) {
            context.childIndex--;
            context.onNodeRemoved();
          }
        }
        context.parent.children.splice(removalIndex, 1);
      },
      onNodeRemoved: NOOP,
      addIdentifiers(exp) {
      },
      removeIdentifiers(exp) {
      },
      hoist(exp) {
        if (isString(exp)) exp =3D createSimpleExpression(exp);
        context.hoists.push(exp);
        const identifier =3D createSimpleExpression(
          `_hoisted_${context.hoists.length}`,
          false,
          exp.loc,
          2
        );
        identifier.hoisted =3D exp;
        return identifier;
      },
      cache(exp, isVNode =3D false, inVOnce =3D false) {
        const cacheExp =3D createCacheExpression(
          context.cached.length,
          exp,
          isVNode,
          inVOnce
        );
        context.cached.push(cacheExp);
        return cacheExp;
      }
    };
    return context;
  }
  function transform(root, options) {
    const context =3D createTransformContext(root, options);
    traverseNode(root, context);
    if (options.hoistStatic) {
      cacheStatic(root, context);
    }
    if (!options.ssr) {
      createRootCodegen(root, context);
    }
    root.helpers =3D /* @__PURE__ */ new Set([...context.helpers.keys()]);
    root.components =3D [...context.components];
    root.directives =3D [...context.directives];
    root.imports =3D context.imports;
    root.hoists =3D context.hoists;
    root.temps =3D context.temps;
    root.cached =3D context.cached;
    root.transformed =3D true;
  }
  function createRootCodegen(root, context) {
    const { helper } =3D context;
    const { children } =3D root;
    if (children.length =3D=3D=3D 1) {
      const singleElementRootChild =3D getSingleElementRoot(root);
      if (singleElementRootChild &amp;&amp; singleElementRootChild.codegenN=
ode) {
        const codegenNode =3D singleElementRootChild.codegenNode;
        if (codegenNode.type =3D=3D=3D 13) {
          convertToBlock(codegenNode, context);
        }
        root.codegenNode =3D codegenNode;
      } else {
        root.codegenNode =3D children[0];
      }
    } else if (children.length &gt; 1) {
      let patchFlag =3D 64;
      if (children.filter((c) =3D&gt; c.type !=3D=3D 3).length =3D=3D=3D 1)=
 {
        patchFlag |=3D 2048;
      }
      root.codegenNode =3D createVNodeCall(
        context,
        helper(FRAGMENT),
        void 0,
        root.children,
        patchFlag,
        void 0,
        void 0,
        true,
        void 0,
        false
      );
    } else ;
  }
  function traverseChildren(parent, context) {
    let i =3D 0;
    const nodeRemoved =3D () =3D&gt; {
      i--;
    };
    for (; i &lt; parent.children.length; i++) {
      const child =3D parent.children[i];
      if (isString(child)) continue;
      context.grandParent =3D context.parent;
      context.parent =3D parent;
      context.childIndex =3D i;
      context.onNodeRemoved =3D nodeRemoved;
      traverseNode(child, context);
    }
  }
  function traverseNode(node, context) {
    context.currentNode =3D node;
    const { nodeTransforms } =3D context;
    const exitFns =3D [];
    for (let i2 =3D 0; i2 &lt; nodeTransforms.length; i2++) {
      const onExit =3D nodeTransforms[i2](node, context);
      if (onExit) {
        if (isArray(onExit)) {
          exitFns.push(...onExit);
        } else {
          exitFns.push(onExit);
        }
      }
      if (!context.currentNode) {
        return;
      } else {
        node =3D context.currentNode;
      }
    }
    switch (node.type) {
      case 3:
        if (!context.ssr) {
          context.helper(CREATE_COMMENT);
        }
        break;
      case 5:
        if (!context.ssr) {
          context.helper(TO_DISPLAY_STRING);
        }
        break;
      // for container types, further traverse downwards
      case 9:
        for (let i2 =3D 0; i2 &lt; node.branches.length; i2++) {
          traverseNode(node.branches[i2], context);
        }
        break;
      case 10:
      case 11:
      case 1:
      case 0:
        traverseChildren(node, context);
        break;
    }
    context.currentNode =3D node;
    let i =3D exitFns.length;
    while (i--) {
      exitFns[i]();
    }
  }
  function createStructuralDirectiveTransform(name, fn) {
    const matches =3D isString(name) ? (n) =3D&gt; n =3D=3D=3D name : (n) =
=3D&gt; name.test(n);
    return (node, context) =3D&gt; {
      if (node.type =3D=3D=3D 1) {
        const { props } =3D node;
        if (node.tagType =3D=3D=3D 3 &amp;&amp; props.some(isVSlot)) {
          return;
        }
        const exitFns =3D [];
        for (let i =3D 0; i &lt; props.length; i++) {
          const prop =3D props[i];
          if (prop.type =3D=3D=3D 7 &amp;&amp; matches(prop.name)) {
            props.splice(i, 1);
            i--;
            const onExit =3D fn(node, prop, context);
            if (onExit) exitFns.push(onExit);
          }
        }
        return exitFns;
      }
    };
  }

  const PURE_ANNOTATION =3D `/*@__PURE__*/`;
  const aliasHelper =3D (s) =3D&gt; `${helperNameMap[s]}: _${helperNameMap[=
s]}`;
  function createCodegenContext(ast, {
    mode =3D "function",
    prefixIdentifiers =3D mode =3D=3D=3D "module",
    sourceMap =3D false,
    filename =3D `template.vue.html`,
    scopeId =3D null,
    optimizeImports =3D false,
    runtimeGlobalName =3D `Vue`,
    runtimeModuleName =3D `vue`,
    ssrRuntimeModuleName =3D "vue/server-renderer",
    ssr =3D false,
    isTS =3D false,
    inSSR =3D false
  }) {
    const context =3D {
      mode,
      prefixIdentifiers,
      sourceMap,
      filename,
      scopeId,
      optimizeImports,
      runtimeGlobalName,
      runtimeModuleName,
      ssrRuntimeModuleName,
      ssr,
      isTS,
      inSSR,
      source: ast.source,
      code: ``,
      column: 1,
      line: 1,
      offset: 0,
      indentLevel: 0,
      pure: false,
      map: void 0,
      helper(key) {
        return `_${helperNameMap[key]}`;
      },
      push(code, newlineIndex =3D -2 /* None */, node) {
        context.code +=3D code;
      },
      indent() {
        newline(++context.indentLevel);
      },
      deindent(withoutNewLine =3D false) {
        if (withoutNewLine) {
          --context.indentLevel;
        } else {
          newline(--context.indentLevel);
        }
      },
      newline() {
        newline(context.indentLevel);
      }
    };
    function newline(n) {
      context.push("\n" + `  `.repeat(n), 0 /* Start */);
    }
    return context;
  }
  function generate(ast, options =3D {}) {
    const context =3D createCodegenContext(ast, options);
    if (options.onContextCreated) options.onContextCreated(context);
    const {
      mode,
      push,
      prefixIdentifiers,
      indent,
      deindent,
      newline,
      scopeId,
      ssr
    } =3D context;
    const helpers =3D Array.from(ast.helpers);
    const hasHelpers =3D helpers.length &gt; 0;
    const useWithBlock =3D !prefixIdentifiers &amp;&amp; mode !=3D=3D "modu=
le";
    const preambleContext =3D context;
    {
      genFunctionPreamble(ast, preambleContext);
    }
    const functionName =3D ssr ? `ssrRender` : `render`;
    const args =3D ssr ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", =
"_cache"];
    const signature =3D args.join(", ");
    {
      push(`function ${functionName}(${signature}) {`);
    }
    indent();
    if (useWithBlock) {
      push(`with (_ctx) {`);
      indent();
      if (hasHelpers) {
        push(
          `const { ${helpers.map(aliasHelper).join(", ")} } =3D _Vue
`,
          -1 /* End */
        );
        newline();
      }
    }
    if (ast.components.length) {
      genAssets(ast.components, "component", context);
      if (ast.directives.length || ast.temps &gt; 0) {
        newline();
      }
    }
    if (ast.directives.length) {
      genAssets(ast.directives, "directive", context);
      if (ast.temps &gt; 0) {
        newline();
      }
    }
    if (ast.temps &gt; 0) {
      push(`let `);
      for (let i =3D 0; i &lt; ast.temps; i++) {
        push(`${i &gt; 0 ? `, ` : ``}_temp${i}`);
      }
    }
    if (ast.components.length || ast.directives.length || ast.temps) {
      push(`
`, 0 /* Start */);
      newline();
    }
    if (!ssr) {
      push(`return `);
    }
    if (ast.codegenNode) {
      genNode(ast.codegenNode, context);
    } else {
      push(`null`);
    }
    if (useWithBlock) {
      deindent();
      push(`}`);
    }
    deindent();
    push(`}`);
    return {
      ast,
      code: context.code,
      preamble: ``,
      map: context.map ? context.map.toJSON() : void 0
    };
  }
  function genFunctionPreamble(ast, context) {
    const {
      ssr,
      prefixIdentifiers,
      push,
      newline,
      runtimeModuleName,
      runtimeGlobalName,
      ssrRuntimeModuleName
    } =3D context;
    const VueBinding =3D runtimeGlobalName;
    const helpers =3D Array.from(ast.helpers);
    if (helpers.length &gt; 0) {
      {
        push(`const _Vue =3D ${VueBinding}
`, -1 /* End */);
        if (ast.hoists.length) {
          const staticHelpers =3D [
            CREATE_VNODE,
            CREATE_ELEMENT_VNODE,
            CREATE_COMMENT,
            CREATE_TEXT,
            CREATE_STATIC
          ].filter((helper) =3D&gt; helpers.includes(helper)).map(aliasHelp=
er).join(", ");
          push(`const { ${staticHelpers} } =3D _Vue
`, -1 /* End */);
        }
      }
    }
    genHoists(ast.hoists, context);
    newline();
    push(`return `);
  }
  function genAssets(assets, type, { helper, push, newline, isTS }) {
    const resolver =3D helper(
      type =3D=3D=3D "component" ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE
    );
    for (let i =3D 0; i &lt; assets.length; i++) {
      let id =3D assets[i];
      const maybeSelfReference =3D id.endsWith("__self");
      if (maybeSelfReference) {
        id =3D id.slice(0, -6);
      }
      push(
        `const ${toValidAssetId(id, type)} =3D ${resolver}(${JSON.stringify=
(id)}${maybeSelfReference ? `, true` : ``})${isTS ? `!` : ``}`
      );
      if (i &lt; assets.length - 1) {
        newline();
      }
    }
  }
  function genHoists(hoists, context) {
    if (!hoists.length) {
      return;
    }
    context.pure =3D true;
    const { push, newline } =3D context;
    newline();
    for (let i =3D 0; i &lt; hoists.length; i++) {
      const exp =3D hoists[i];
      if (exp) {
        push(`const _hoisted_${i + 1} =3D `);
        genNode(exp, context);
        newline();
      }
    }
    context.pure =3D false;
  }
  function isText(n) {
    return isString(n) || n.type =3D=3D=3D 4 || n.type =3D=3D=3D 2 || n.typ=
e =3D=3D=3D 5 || n.type =3D=3D=3D 8;
  }
  function genNodeListAsArray(nodes, context) {
    const multilines =3D nodes.length &gt; 3 || nodes.some((n) =3D&gt; isAr=
ray(n) || !isText(n));
    context.push(`[`);
    multilines &amp;&amp; context.indent();
    genNodeList(nodes, context, multilines);
    multilines &amp;&amp; context.deindent();
    context.push(`]`);
  }
  function genNodeList(nodes, context, multilines =3D false, comma =3D true=
) {
    const { push, newline } =3D context;
    for (let i =3D 0; i &lt; nodes.length; i++) {
      const node =3D nodes[i];
      if (isString(node)) {
        push(node, -3 /* Unknown */);
      } else if (isArray(node)) {
        genNodeListAsArray(node, context);
      } else {
        genNode(node, context);
      }
      if (i &lt; nodes.length - 1) {
        if (multilines) {
          comma &amp;&amp; push(",");
          newline();
        } else {
          comma &amp;&amp; push(", ");
        }
      }
    }
  }
  function genNode(node, context) {
    if (isString(node)) {
      context.push(node, -3 /* Unknown */);
      return;
    }
    if (isSymbol(node)) {
      context.push(context.helper(node));
      return;
    }
    switch (node.type) {
      case 1:
      case 9:
      case 11:
        assert(
          node.codegenNode !=3D null,
          `Codegen node is missing for element/if/for node. Apply appropria=
te transforms first.`
        );
        genNode(node.codegenNode, context);
        break;
      case 2:
        genText(node, context);
        break;
      case 4:
        genExpression(node, context);
        break;
      case 5:
        genInterpolation(node, context);
        break;
      case 12:
        genNode(node.codegenNode, context);
        break;
      case 8:
        genCompoundExpression(node, context);
        break;
      case 3:
        genComment(node, context);
        break;
      case 13:
        genVNodeCall(node, context);
        break;
      case 14:
        genCallExpression(node, context);
        break;
      case 15:
        genObjectExpression(node, context);
        break;
      case 17:
        genArrayExpression(node, context);
        break;
      case 18:
        genFunctionExpression(node, context);
        break;
      case 19:
        genConditionalExpression(node, context);
        break;
      case 20:
        genCacheExpression(node, context);
        break;
      case 21:
        genNodeList(node.body, context, true, false);
        break;
      // SSR only types
      case 22:
        break;
      case 23:
        break;
      case 24:
        break;
      case 25:
        break;
      case 26:
        break;
      /* v8 ignore start */
      case 10:
        break;
      default:
        {
          assert(false, `unhandled codegen node type: ${node.type}`);
          const exhaustiveCheck =3D node;
          return exhaustiveCheck;
        }
    }
  }
  function genText(node, context) {
    context.push(JSON.stringify(node.content), -3 /* Unknown */, node);
  }
  function genExpression(node, context) {
    const { content, isStatic } =3D node;
    context.push(
      isStatic ? JSON.stringify(content) : content,
      -3 /* Unknown */,
      node
    );
  }
  function genInterpolation(node, context) {
    const { push, helper, pure } =3D context;
    if (pure) push(PURE_ANNOTATION);
    push(`${helper(TO_DISPLAY_STRING)}(`);
    genNode(node.content, context);
    push(`)`);
  }
  function genCompoundExpression(node, context) {
    for (let i =3D 0; i &lt; node.children.length; i++) {
      const child =3D node.children[i];
      if (isString(child)) {
        context.push(child, -3 /* Unknown */);
      } else {
        genNode(child, context);
      }
    }
  }
  function genExpressionAsPropertyKey(node, context) {
    const { push } =3D context;
    if (node.type =3D=3D=3D 8) {
      push(`[`);
      genCompoundExpression(node, context);
      push(`]`);
    } else if (node.isStatic) {
      const text =3D isSimpleIdentifier(node.content) ? node.content : JSON=
.stringify(node.content);
      push(text, -2 /* None */, node);
    } else {
      push(`[${node.content}]`, -3 /* Unknown */, node);
    }
  }
  function genComment(node, context) {
    const { push, helper, pure } =3D context;
    if (pure) {
      push(PURE_ANNOTATION);
    }
    push(
      `${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`,
      -3 /* Unknown */,
      node
    );
  }
  function genVNodeCall(node, context) {
    const { push, helper, pure } =3D context;
    const {
      tag,
      props,
      children,
      patchFlag,
      dynamicProps,
      directives,
      isBlock,
      disableTracking,
      isComponent
    } =3D node;
    let patchFlagString;
    if (patchFlag) {
      {
        if (patchFlag &lt; 0) {
          patchFlagString =3D patchFlag + ` /* ${PatchFlagNames[patchFlag]}=
 */`;
        } else {
          const flagNames =3D Object.keys(PatchFlagNames).map(Number).filte=
r((n) =3D&gt; n &gt; 0 &amp;&amp; patchFlag &amp; n).map((n) =3D&gt; PatchF=
lagNames[n]).join(`, `);
          patchFlagString =3D patchFlag + ` /* ${flagNames} */`;
        }
      }
    }
    if (directives) {
      push(helper(WITH_DIRECTIVES) + `(`);
    }
    if (isBlock) {
      push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
    }
    if (pure) {
      push(PURE_ANNOTATION);
    }
    const callHelper =3D isBlock ? getVNodeBlockHelper(context.inSSR, isCom=
ponent) : getVNodeHelper(context.inSSR, isComponent);
    push(helper(callHelper) + `(`, -2 /* None */, node);
    genNodeList(
      genNullableArgs([tag, props, children, patchFlagString, dynamicProps]=
),
      context
    );
    push(`)`);
    if (isBlock) {
      push(`)`);
    }
    if (directives) {
      push(`, `);
      genNode(directives, context);
      push(`)`);
    }
  }
  function genNullableArgs(args) {
    let i =3D args.length;
    while (i--) {
      if (args[i] !=3D null) break;
    }
    return args.slice(0, i + 1).map((arg) =3D&gt; arg || `null`);
  }
  function genCallExpression(node, context) {
    const { push, helper, pure } =3D context;
    const callee =3D isString(node.callee) ? node.callee : helper(node.call=
ee);
    if (pure) {
      push(PURE_ANNOTATION);
    }
    push(callee + `(`, -2 /* None */, node);
    genNodeList(node.arguments, context);
    push(`)`);
  }
  function genObjectExpression(node, context) {
    const { push, indent, deindent, newline } =3D context;
    const { properties } =3D node;
    if (!properties.length) {
      push(`{}`, -2 /* None */, node);
      return;
    }
    const multilines =3D properties.length &gt; 1 || properties.some((p) =
=3D&gt; p.value.type !=3D=3D 4);
    push(multilines ? `{` : `{ `);
    multilines &amp;&amp; indent();
    for (let i =3D 0; i &lt; properties.length; i++) {
      const { key, value } =3D properties[i];
      genExpressionAsPropertyKey(key, context);
      push(`: `);
      genNode(value, context);
      if (i &lt; properties.length - 1) {
        push(`,`);
        newline();
      }
    }
    multilines &amp;&amp; deindent();
    push(multilines ? `}` : ` }`);
  }
  function genArrayExpression(node, context) {
    genNodeListAsArray(node.elements, context);
  }
  function genFunctionExpression(node, context) {
    const { push, indent, deindent } =3D context;
    const { params, returns, body, newline, isSlot } =3D node;
    if (isSlot) {
      push(`_${helperNameMap[WITH_CTX]}(`);
    }
    push(`(`, -2 /* None */, node);
    if (isArray(params)) {
      genNodeList(params, context);
    } else if (params) {
      genNode(params, context);
    }
    push(`) =3D&gt; `);
    if (newline || body) {
      push(`{`);
      indent();
    }
    if (returns) {
      if (newline) {
        push(`return `);
      }
      if (isArray(returns)) {
        genNodeListAsArray(returns, context);
      } else {
        genNode(returns, context);
      }
    } else if (body) {
      genNode(body, context);
    }
    if (newline || body) {
      deindent();
      push(`}`);
    }
    if (isSlot) {
      push(`)`);
    }
  }
  function genConditionalExpression(node, context) {
    const { test, consequent, alternate, newline: needNewline } =3D node;
    const { push, indent, deindent, newline } =3D context;
    if (test.type =3D=3D=3D 4) {
      const needsParens =3D !isSimpleIdentifier(test.content);
      needsParens &amp;&amp; push(`(`);
      genExpression(test, context);
      needsParens &amp;&amp; push(`)`);
    } else {
      push(`(`);
      genNode(test, context);
      push(`)`);
    }
    needNewline &amp;&amp; indent();
    context.indentLevel++;
    needNewline || push(` `);
    push(`? `);
    genNode(consequent, context);
    context.indentLevel--;
    needNewline &amp;&amp; newline();
    needNewline || push(` `);
    push(`: `);
    const isNested =3D alternate.type =3D=3D=3D 19;
    if (!isNested) {
      context.indentLevel++;
    }
    genNode(alternate, context);
    if (!isNested) {
      context.indentLevel--;
    }
    needNewline &amp;&amp; deindent(
      true
      /* without newline */
    );
  }
  function genCacheExpression(node, context) {
    const { push, helper, indent, deindent, newline } =3D context;
    const { needPauseTracking, needArraySpread } =3D node;
    if (needArraySpread) {
      push(`[...(`);
    }
    push(`_cache[${node.index}] || (`);
    if (needPauseTracking) {
      indent();
      push(`${helper(SET_BLOCK_TRACKING)}(-1`);
      if (node.inVOnce) push(`, true`);
      push(`),`);
      newline();
      push(`(`);
    }
    push(`_cache[${node.index}] =3D `);
    genNode(node.value, context);
    if (needPauseTracking) {
      push(`).cacheIndex =3D ${node.index},`);
      newline();
      push(`${helper(SET_BLOCK_TRACKING)}(1),`);
      newline();
      push(`_cache[${node.index}]`);
      deindent();
    }
    push(`)`);
    if (needArraySpread) {
      push(`)]`);
    }
  }

  const prohibitedKeywordRE =3D new RegExp(
    "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger=
,default,delete,do,else,export,extends,finally,for,function,if,import,let,n=
ew,return,super,switch,throw,try,var,void,while,with,yield".split(",").join=
("\\b|\\b") + "\\b"
  );
  const stripStringRE =3D /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\=
\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
  function validateBrowserExpression(node, context, asParams =3D false, asR=
awStatements =3D false) {
    const exp =3D node.content;
    if (!exp.trim()) {
      return;
    }
    try {
      new Function(
        asRawStatements ? ` ${exp} ` : `return ${asParams ? `(${exp}) =3D&g=
t; {}` : `(${exp})`}`
      );
    } catch (e) {
      let message =3D e.message;
      const keywordMatch =3D exp.replace(stripStringRE, "").match(prohibite=
dKeywordRE);
      if (keywordMatch) {
        message =3D `avoid using JavaScript keyword as property name: "${ke=
ywordMatch[0]}"`;
      }
      context.onError(
        createCompilerError(
          45,
          node.loc,
          void 0,
          message
        )
      );
    }
  }

  const transformExpression =3D (node, context) =3D&gt; {
    if (node.type =3D=3D=3D 5) {
      node.content =3D processExpression(
        node.content,
        context
      );
    } else if (node.type =3D=3D=3D 1) {
      const memo =3D findDir(node, "memo");
      for (let i =3D 0; i &lt; node.props.length; i++) {
        const dir =3D node.props[i];
        if (dir.type =3D=3D=3D 7 &amp;&amp; dir.name !=3D=3D "for") {
          const exp =3D dir.exp;
          const arg =3D dir.arg;
          if (exp &amp;&amp; exp.type =3D=3D=3D 4 &amp;&amp; !(dir.name =3D=
=3D=3D "on" &amp;&amp; arg) &amp;&amp; // key has been processed in transfo=
rmFor(vMemo + vFor)
          !(memo &amp;&amp; arg &amp;&amp; arg.type =3D=3D=3D 4 &amp;&amp; =
arg.content =3D=3D=3D "key")) {
            dir.exp =3D processExpression(
              exp,
              context,
              // slot args must be processed as function params
              dir.name =3D=3D=3D "slot"
            );
          }
          if (arg &amp;&amp; arg.type =3D=3D=3D 4 &amp;&amp; !arg.isStatic)=
 {
            dir.arg =3D processExpression(arg, context);
          }
        }
      }
    }
  };
  function processExpression(node, context, asParams =3D false, asRawStatem=
ents =3D false, localVars =3D Object.create(context.identifiers)) {
    {
      {
        validateBrowserExpression(node, context, asParams, asRawStatements)=
;
      }
      return node;
    }
  }

  const transformIf =3D createStructuralDirectiveTransform(
    /^(if|else|else-if)$/,
    (node, dir, context) =3D&gt; {
      return processIf(node, dir, context, (ifNode, branch, isRoot) =3D&gt;=
 {
        const siblings =3D context.parent.children;
        let i =3D siblings.indexOf(ifNode);
        let key =3D 0;
        while (i-- &gt;=3D 0) {
          const sibling =3D siblings[i];
          if (sibling &amp;&amp; sibling.type =3D=3D=3D 9) {
            key +=3D sibling.branches.length;
          }
        }
        return () =3D&gt; {
          if (isRoot) {
            ifNode.codegenNode =3D createCodegenNodeForBranch(
              branch,
              key,
              context
            );
          } else {
            const parentCondition =3D getParentCondition(ifNode.codegenNode=
);
            parentCondition.alternate =3D createCodegenNodeForBranch(
              branch,
              key + ifNode.branches.length - 1,
              context
            );
          }
        };
      });
    }
  );
  function processIf(node, dir, context, processCodegen) {
    if (dir.name !=3D=3D "else" &amp;&amp; (!dir.exp || !dir.exp.content.tr=
im())) {
      const loc =3D dir.exp ? dir.exp.loc : node.loc;
      context.onError(
        createCompilerError(28, dir.loc)
      );
      dir.exp =3D createSimpleExpression(`true`, false, loc);
    }
    if (dir.exp) {
      validateBrowserExpression(dir.exp, context);
    }
    if (dir.name =3D=3D=3D "if") {
      const branch =3D createIfBranch(node, dir);
      const ifNode =3D {
        type: 9,
        loc: cloneLoc(node.loc),
        branches: [branch]
      };
      context.replaceNode(ifNode);
      if (processCodegen) {
        return processCodegen(ifNode, branch, true);
      }
    } else {
      const siblings =3D context.parent.children;
      const comments =3D [];
      let i =3D siblings.indexOf(node);
      while (i-- &gt;=3D -1) {
        const sibling =3D siblings[i];
        if (sibling &amp;&amp; sibling.type =3D=3D=3D 3) {
          context.removeNode(sibling);
          comments.unshift(sibling);
          continue;
        }
        if (sibling &amp;&amp; sibling.type =3D=3D=3D 2 &amp;&amp; !sibling=
.content.trim().length) {
          context.removeNode(sibling);
          continue;
        }
        if (sibling &amp;&amp; sibling.type =3D=3D=3D 9) {
          if (dir.name =3D=3D=3D "else-if" &amp;&amp; sibling.branches[sibl=
ing.branches.length - 1].condition =3D=3D=3D void 0) {
            context.onError(
              createCompilerError(30, node.loc)
            );
          }
          context.removeNode();
          const branch =3D createIfBranch(node, dir);
          if (comments.length &amp;&amp; // #3619 ignore comments if the v-=
if is direct child of &lt;transition&gt;
          !(context.parent &amp;&amp; context.parent.type =3D=3D=3D 1 &amp;=
&amp; (context.parent.tag =3D=3D=3D "transition" || context.parent.tag =3D=
=3D=3D "Transition"))) {
            branch.children =3D [...comments, ...branch.children];
          }
          {
            const key =3D branch.userKey;
            if (key) {
              sibling.branches.forEach(({ userKey }) =3D&gt; {
                if (isSameKey(userKey, key)) {
                  context.onError(
                    createCompilerError(
                      29,
                      branch.userKey.loc
                    )
                  );
                }
              });
            }
          }
          sibling.branches.push(branch);
          const onExit =3D processCodegen &amp;&amp; processCodegen(sibling=
, branch, false);
          traverseNode(branch, context);
          if (onExit) onExit();
          context.currentNode =3D null;
        } else {
          context.onError(
            createCompilerError(30, node.loc)
          );
        }
        break;
      }
    }
  }
  function createIfBranch(node, dir) {
    const isTemplateIf =3D node.tagType =3D=3D=3D 3;
    return {
      type: 10,
      loc: node.loc,
      condition: dir.name =3D=3D=3D "else" ? void 0 : dir.exp,
      children: isTemplateIf &amp;&amp; !findDir(node, "for") ? node.childr=
en : [node],
      userKey: findProp(node, `key`),
      isTemplateIf
    };
  }
  function createCodegenNodeForBranch(branch, keyIndex, context) {
    if (branch.condition) {
      return createConditionalExpression(
        branch.condition,
        createChildrenCodegenNode(branch, keyIndex, context),
        // make sure to pass in asBlock: true so that the comment node call
        // closes the current block.
        createCallExpression(context.helper(CREATE_COMMENT), [
          '"v-if"' ,
          "true"
        ])
      );
    } else {
      return createChildrenCodegenNode(branch, keyIndex, context);
    }
  }
  function createChildrenCodegenNode(branch, keyIndex, context) {
    const { helper } =3D context;
    const keyProperty =3D createObjectProperty(
      `key`,
      createSimpleExpression(
        `${keyIndex}`,
        false,
        locStub,
        2
      )
    );
    const { children } =3D branch;
    const firstChild =3D children[0];
    const needFragmentWrapper =3D children.length !=3D=3D 1 || firstChild.t=
ype !=3D=3D 1;
    if (needFragmentWrapper) {
      if (children.length =3D=3D=3D 1 &amp;&amp; firstChild.type =3D=3D=3D =
11) {
        const vnodeCall =3D firstChild.codegenNode;
        injectProp(vnodeCall, keyProperty, context);
        return vnodeCall;
      } else {
        let patchFlag =3D 64;
        if (!branch.isTemplateIf &amp;&amp; children.filter((c) =3D&gt; c.t=
ype !=3D=3D 3).length =3D=3D=3D 1) {
          patchFlag |=3D 2048;
        }
        return createVNodeCall(
          context,
          helper(FRAGMENT),
          createObjectExpression([keyProperty]),
          children,
          patchFlag,
          void 0,
          void 0,
          true,
          false,
          false,
          branch.loc
        );
      }
    } else {
      const ret =3D firstChild.codegenNode;
      const vnodeCall =3D getMemoedVNodeCall(ret);
      if (vnodeCall.type =3D=3D=3D 13) {
        convertToBlock(vnodeCall, context);
      }
      injectProp(vnodeCall, keyProperty, context);
      return ret;
    }
  }
  function isSameKey(a, b) {
    if (!a || a.type !=3D=3D b.type) {
      return false;
    }
    if (a.type =3D=3D=3D 6) {
      if (a.value.content !=3D=3D b.value.content) {
        return false;
      }
    } else {
      const exp =3D a.exp;
      const branchExp =3D b.exp;
      if (exp.type !=3D=3D branchExp.type) {
        return false;
      }
      if (exp.type !=3D=3D 4 || exp.isStatic !=3D=3D branchExp.isStatic || =
exp.content !=3D=3D branchExp.content) {
        return false;
      }
    }
    return true;
  }
  function getParentCondition(node) {
    while (true) {
      if (node.type =3D=3D=3D 19) {
        if (node.alternate.type =3D=3D=3D 19) {
          node =3D node.alternate;
        } else {
          return node;
        }
      } else if (node.type =3D=3D=3D 20) {
        node =3D node.value;
      }
    }
  }

  const transformBind =3D (dir, _node, context) =3D&gt; {
    const { modifiers, loc } =3D dir;
    const arg =3D dir.arg;
    let { exp } =3D dir;
    if (exp &amp;&amp; exp.type =3D=3D=3D 4 &amp;&amp; !exp.content.trim())=
 {
      {
        exp =3D void 0;
      }
    }
    if (!exp) {
      if (arg.type !=3D=3D 4 || !arg.isStatic) {
        context.onError(
          createCompilerError(
            52,
            arg.loc
          )
        );
        return {
          props: [
            createObjectProperty(arg, createSimpleExpression("", true, loc)=
)
          ]
        };
      }
      transformBindShorthand(dir);
      exp =3D dir.exp;
    }
    if (arg.type !=3D=3D 4) {
      arg.children.unshift(`(`);
      arg.children.push(`) || ""`);
    } else if (!arg.isStatic) {
      arg.content =3D `${arg.content} || ""`;
    }
    if (modifiers.some((mod) =3D&gt; mod.content =3D=3D=3D "camel")) {
      if (arg.type =3D=3D=3D 4) {
        if (arg.isStatic) {
          arg.content =3D camelize(arg.content);
        } else {
          arg.content =3D `${context.helperString(CAMELIZE)}(${arg.content}=
)`;
        }
      } else {
        arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
        arg.children.push(`)`);
      }
    }
    if (!context.inSSR) {
      if (modifiers.some((mod) =3D&gt; mod.content =3D=3D=3D "prop")) {
        injectPrefix(arg, ".");
      }
      if (modifiers.some((mod) =3D&gt; mod.content =3D=3D=3D "attr")) {
        injectPrefix(arg, "^");
      }
    }
    return {
      props: [createObjectProperty(arg, exp)]
    };
  };
  const transformBindShorthand =3D (dir, context) =3D&gt; {
    const arg =3D dir.arg;
    const propName =3D camelize(arg.content);
    dir.exp =3D createSimpleExpression(propName, false, arg.loc);
  };
  const injectPrefix =3D (arg, prefix) =3D&gt; {
    if (arg.type =3D=3D=3D 4) {
      if (arg.isStatic) {
        arg.content =3D prefix + arg.content;
      } else {
        arg.content =3D `\`${prefix}\${${arg.content}}\``;
      }
    } else {
      arg.children.unshift(`'${prefix}' + (`);
      arg.children.push(`)`);
    }
  };

  const transformFor =3D createStructuralDirectiveTransform(
    "for",
    (node, dir, context) =3D&gt; {
      const { helper, removeHelper } =3D context;
      return processFor(node, dir, context, (forNode) =3D&gt; {
        const renderExp =3D createCallExpression(helper(RENDER_LIST), [
          forNode.source
        ]);
        const isTemplate =3D isTemplateNode(node);
        const memo =3D findDir(node, "memo");
        const keyProp =3D findProp(node, `key`, false, true);
        const isDirKey =3D keyProp &amp;&amp; keyProp.type =3D=3D=3D 7;
        if (isDirKey &amp;&amp; !keyProp.exp) {
          transformBindShorthand(keyProp);
        }
        let keyExp =3D keyProp &amp;&amp; (keyProp.type =3D=3D=3D 6 ? keyPr=
op.value ? createSimpleExpression(keyProp.value.content, true) : void 0 : k=
eyProp.exp);
        const keyProperty =3D keyProp &amp;&amp; keyExp ? createObjectPrope=
rty(`key`, keyExp) : null;
        const isStableFragment =3D forNode.source.type =3D=3D=3D 4 &amp;&am=
p; forNode.source.constType &gt; 0;
        const fragmentFlag =3D isStableFragment ? 64 : keyProp ? 128 : 256;
        forNode.codegenNode =3D createVNodeCall(
          context,
          helper(FRAGMENT),
          void 0,
          renderExp,
          fragmentFlag,
          void 0,
          void 0,
          true,
          !isStableFragment,
          false,
          node.loc
        );
        return () =3D&gt; {
          let childBlock;
          const { children } =3D forNode;
          if (isTemplate) {
            node.children.some((c) =3D&gt; {
              if (c.type =3D=3D=3D 1) {
                const key =3D findProp(c, "key");
                if (key) {
                  context.onError(
                    createCompilerError(
                      33,
                      key.loc
                    )
                  );
                  return true;
                }
              }
            });
          }
          const needFragmentWrapper =3D children.length !=3D=3D 1 || childr=
en[0].type !=3D=3D 1;
          const slotOutlet =3D isSlotOutlet(node) ? node : isTemplate &amp;=
&amp; node.children.length =3D=3D=3D 1 &amp;&amp; isSlotOutlet(node.childre=
n[0]) ? node.children[0] : null;
          if (slotOutlet) {
            childBlock =3D slotOutlet.codegenNode;
            if (isTemplate &amp;&amp; keyProperty) {
              injectProp(childBlock, keyProperty, context);
            }
          } else if (needFragmentWrapper) {
            childBlock =3D createVNodeCall(
              context,
              helper(FRAGMENT),
              keyProperty ? createObjectExpression([keyProperty]) : void 0,
              node.children,
              64,
              void 0,
              void 0,
              true,
              void 0,
              false
            );
          } else {
            childBlock =3D children[0].codegenNode;
            if (isTemplate &amp;&amp; keyProperty) {
              injectProp(childBlock, keyProperty, context);
            }
            if (childBlock.isBlock !=3D=3D !isStableFragment) {
              if (childBlock.isBlock) {
                removeHelper(OPEN_BLOCK);
                removeHelper(
                  getVNodeBlockHelper(context.inSSR, childBlock.isComponent=
)
                );
              } else {
                removeHelper(
                  getVNodeHelper(context.inSSR, childBlock.isComponent)
                );
              }
            }
            childBlock.isBlock =3D !isStableFragment;
            if (childBlock.isBlock) {
              helper(OPEN_BLOCK);
              helper(getVNodeBlockHelper(context.inSSR, childBlock.isCompon=
ent));
            } else {
              helper(getVNodeHelper(context.inSSR, childBlock.isComponent))=
;
            }
          }
          if (memo) {
            const loop =3D createFunctionExpression(
              createForLoopParams(forNode.parseResult, [
                createSimpleExpression(`_cached`)
              ])
            );
            loop.body =3D createBlockStatement([
              createCompoundExpression([`const _memo =3D (`, memo.exp, `)`]=
),
              createCompoundExpression([
                `if (_cached`,
                ...keyExp ? [` &amp;&amp; _cached.key =3D=3D=3D `, keyExp] =
: [],
                ` &amp;&amp; ${context.helperString(
                IS_MEMO_SAME
              )}(_cached, _memo)) return _cached`
              ]),
              createCompoundExpression([`const _item =3D `, childBlock]),
              createSimpleExpression(`_item.memo =3D _memo`),
              createSimpleExpression(`return _item`)
            ]);
            renderExp.arguments.push(
              loop,
              createSimpleExpression(`_cache`),
              createSimpleExpression(String(context.cached.length))
            );
            context.cached.push(null);
          } else {
            renderExp.arguments.push(
              createFunctionExpression(
                createForLoopParams(forNode.parseResult),
                childBlock,
                true
              )
            );
          }
        };
      });
    }
  );
  function processFor(node, dir, context, processCodegen) {
    if (!dir.exp) {
      context.onError(
        createCompilerError(31, dir.loc)
      );
      return;
    }
    const parseResult =3D dir.forParseResult;
    if (!parseResult) {
      context.onError(
        createCompilerError(32, dir.loc)
      );
      return;
    }
    finalizeForParseResult(parseResult, context);
    const { addIdentifiers, removeIdentifiers, scopes } =3D context;
    const { source, value, key, index } =3D parseResult;
    const forNode =3D {
      type: 11,
      loc: dir.loc,
      source,
      valueAlias: value,
      keyAlias: key,
      objectIndexAlias: index,
      parseResult,
      children: isTemplateNode(node) ? node.children : [node]
    };
    context.replaceNode(forNode);
    scopes.vFor++;
    const onExit =3D processCodegen &amp;&amp; processCodegen(forNode);
    return () =3D&gt; {
      scopes.vFor--;
      if (onExit) onExit();
    };
  }
  function finalizeForParseResult(result, context) {
    if (result.finalized) return;
    {
      validateBrowserExpression(result.source, context);
      if (result.key) {
        validateBrowserExpression(
          result.key,
          context,
          true
        );
      }
      if (result.index) {
        validateBrowserExpression(
          result.index,
          context,
          true
        );
      }
      if (result.value) {
        validateBrowserExpression(
          result.value,
          context,
          true
        );
      }
    }
    result.finalized =3D true;
  }
  function createForLoopParams({ value, key, index }, memoArgs =3D []) {
    return createParamsList([value, key, index, ...memoArgs]);
  }
  function createParamsList(args) {
    let i =3D args.length;
    while (i--) {
      if (args[i]) break;
    }
    return args.slice(0, i + 1).map((arg, i2) =3D&gt; arg || createSimpleEx=
pression(`_`.repeat(i2 + 1), false));
  }

  const defaultFallback =3D createSimpleExpression(`undefined`, false);
  const trackSlotScopes =3D (node, context) =3D&gt; {
    if (node.type =3D=3D=3D 1 &amp;&amp; (node.tagType =3D=3D=3D 1 || node.=
tagType =3D=3D=3D 3)) {
      const vSlot =3D findDir(node, "slot");
      if (vSlot) {
        vSlot.exp;
        context.scopes.vSlot++;
        return () =3D&gt; {
          context.scopes.vSlot--;
        };
      }
    }
  };
  const buildClientSlotFn =3D (props, _vForExp, children, loc) =3D&gt; crea=
teFunctionExpression(
    props,
    children,
    false,
    true,
    children.length ? children[0].loc : loc
  );
  function buildSlots(node, context, buildSlotFn =3D buildClientSlotFn) {
    context.helper(WITH_CTX);
    const { children, loc } =3D node;
    const slotsProperties =3D [];
    const dynamicSlots =3D [];
    let hasDynamicSlots =3D context.scopes.vSlot &gt; 0 || context.scopes.v=
For &gt; 0;
    const onComponentSlot =3D findDir(node, "slot", true);
    if (onComponentSlot) {
      const { arg, exp } =3D onComponentSlot;
      if (arg &amp;&amp; !isStaticExp(arg)) {
        hasDynamicSlots =3D true;
      }
      slotsProperties.push(
        createObjectProperty(
          arg || createSimpleExpression("default", true),
          buildSlotFn(exp, void 0, children, loc)
        )
      );
    }
    let hasTemplateSlots =3D false;
    let hasNamedDefaultSlot =3D false;
    const implicitDefaultChildren =3D [];
    const seenSlotNames =3D /* @__PURE__ */ new Set();
    let conditionalBranchIndex =3D 0;
    for (let i =3D 0; i &lt; children.length; i++) {
      const slotElement =3D children[i];
      let slotDir;
      if (!isTemplateNode(slotElement) || !(slotDir =3D findDir(slotElement=
, "slot", true))) {
        if (slotElement.type !=3D=3D 3) {
          implicitDefaultChildren.push(slotElement);
        }
        continue;
      }
      if (onComponentSlot) {
        context.onError(
          createCompilerError(37, slotDir.loc)
        );
        break;
      }
      hasTemplateSlots =3D true;
      const { children: slotChildren, loc: slotLoc } =3D slotElement;
      const {
        arg: slotName =3D createSimpleExpression(`default`, true),
        exp: slotProps,
        loc: dirLoc
      } =3D slotDir;
      let staticSlotName;
      if (isStaticExp(slotName)) {
        staticSlotName =3D slotName ? slotName.content : `default`;
      } else {
        hasDynamicSlots =3D true;
      }
      const vFor =3D findDir(slotElement, "for");
      const slotFunction =3D buildSlotFn(slotProps, vFor, slotChildren, slo=
tLoc);
      let vIf;
      let vElse;
      if (vIf =3D findDir(slotElement, "if")) {
        hasDynamicSlots =3D true;
        dynamicSlots.push(
          createConditionalExpression(
            vIf.exp,
            buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex=
++),
            defaultFallback
          )
        );
      } else if (vElse =3D findDir(
        slotElement,
        /^else(-if)?$/,
        true
        /* allowEmpty */
      )) {
        let j =3D i;
        let prev;
        while (j--) {
          prev =3D children[j];
          if (prev.type !=3D=3D 3 &amp;&amp; isNonWhitespaceContent(prev)) =
{
            break;
          }
        }
        if (prev &amp;&amp; isTemplateNode(prev) &amp;&amp; findDir(prev, /=
^(else-)?if$/)) {
          let conditional =3D dynamicSlots[dynamicSlots.length - 1];
          while (conditional.alternate.type =3D=3D=3D 19) {
            conditional =3D conditional.alternate;
          }
          conditional.alternate =3D vElse.exp ? createConditionalExpression=
(
            vElse.exp,
            buildDynamicSlot(
              slotName,
              slotFunction,
              conditionalBranchIndex++
            ),
            defaultFallback
          ) : buildDynamicSlot(slotName, slotFunction, conditionalBranchInd=
ex++);
        } else {
          context.onError(
            createCompilerError(30, vElse.loc)
          );
        }
      } else if (vFor) {
        hasDynamicSlots =3D true;
        const parseResult =3D vFor.forParseResult;
        if (parseResult) {
          finalizeForParseResult(parseResult, context);
          dynamicSlots.push(
            createCallExpression(context.helper(RENDER_LIST), [
              parseResult.source,
              createFunctionExpression(
                createForLoopParams(parseResult),
                buildDynamicSlot(slotName, slotFunction),
                true
              )
            ])
          );
        } else {
          context.onError(
            createCompilerError(
              32,
              vFor.loc
            )
          );
        }
      } else {
        if (staticSlotName) {
          if (seenSlotNames.has(staticSlotName)) {
            context.onError(
              createCompilerError(
                38,
                dirLoc
              )
            );
            continue;
          }
          seenSlotNames.add(staticSlotName);
          if (staticSlotName =3D=3D=3D "default") {
            hasNamedDefaultSlot =3D true;
          }
        }
        slotsProperties.push(createObjectProperty(slotName, slotFunction));
      }
    }
    if (!onComponentSlot) {
      const buildDefaultSlotProperty =3D (props, children2) =3D&gt; {
        const fn =3D buildSlotFn(props, void 0, children2, loc);
        return createObjectProperty(`default`, fn);
      };
      if (!hasTemplateSlots) {
        slotsProperties.push(buildDefaultSlotProperty(void 0, children));
      } else if (implicitDefaultChildren.length &amp;&amp; // #3766
      // with whitespace: 'preserve', whitespaces between slots will end up=
 in
      // implicitDefaultChildren. Ignore if all implicit children are white=
spaces.
      implicitDefaultChildren.some((node2) =3D&gt; isNonWhitespaceContent(n=
ode2))) {
        if (hasNamedDefaultSlot) {
          context.onError(
            createCompilerError(
              39,
              implicitDefaultChildren[0].loc
            )
          );
        } else {
          slotsProperties.push(
            buildDefaultSlotProperty(void 0, implicitDefaultChildren)
          );
        }
      }
    }
    const slotFlag =3D hasDynamicSlots ? 2 : hasForwardedSlots(node.childre=
n) ? 3 : 1;
    let slots =3D createObjectExpression(
      slotsProperties.concat(
        createObjectProperty(
          `_`,
          // 2 =3D compiled but dynamic =3D can skip normalization, but mus=
t run diff
          // 1 =3D compiled and static =3D can skip normalization AND diff =
as optimized
          createSimpleExpression(
            slotFlag + (` /* ${slotFlagsText[slotFlag]} */` ),
            false
          )
        )
      ),
      loc
    );
    if (dynamicSlots.length) {
      slots =3D createCallExpression(context.helper(CREATE_SLOTS), [
        slots,
        createArrayExpression(dynamicSlots)
      ]);
    }
    return {
      slots,
      hasDynamicSlots
    };
  }
  function buildDynamicSlot(name, fn, index) {
    const props =3D [
      createObjectProperty(`name`, name),
      createObjectProperty(`fn`, fn)
    ];
    if (index !=3D null) {
      props.push(
        createObjectProperty(`key`, createSimpleExpression(String(index), t=
rue))
      );
    }
    return createObjectExpression(props);
  }
  function hasForwardedSlots(children) {
    for (let i =3D 0; i &lt; children.length; i++) {
      const child =3D children[i];
      switch (child.type) {
        case 1:
          if (child.tagType =3D=3D=3D 2 || hasForwardedSlots(child.children=
)) {
            return true;
          }
          break;
        case 9:
          if (hasForwardedSlots(child.branches)) return true;
          break;
        case 10:
        case 11:
          if (hasForwardedSlots(child.children)) return true;
          break;
      }
    }
    return false;
  }
  function isNonWhitespaceContent(node) {
    if (node.type !=3D=3D 2 &amp;&amp; node.type !=3D=3D 12)
      return true;
    return node.type =3D=3D=3D 2 ? !!node.content.trim() : isNonWhitespaceC=
ontent(node.content);
  }

  const directiveImportMap =3D /* @__PURE__ */ new WeakMap();
  const transformElement =3D (node, context) =3D&gt; {
    return function postTransformElement() {
      node =3D context.currentNode;
      if (!(node.type =3D=3D=3D 1 &amp;&amp; (node.tagType =3D=3D=3D 0 || n=
ode.tagType =3D=3D=3D 1))) {
        return;
      }
      const { tag, props } =3D node;
      const isComponent =3D node.tagType =3D=3D=3D 1;
      let vnodeTag =3D isComponent ? resolveComponentType(node, context) : =
`"${tag}"`;
      const isDynamicComponent =3D isObject(vnodeTag) &amp;&amp; vnodeTag.c=
allee =3D=3D=3D RESOLVE_DYNAMIC_COMPONENT;
      let vnodeProps;
      let vnodeChildren;
      let patchFlag =3D 0;
      let vnodeDynamicProps;
      let dynamicPropNames;
      let vnodeDirectives;
      let shouldUseBlock =3D (
        // dynamic component may resolve to plain elements
        isDynamicComponent || vnodeTag =3D=3D=3D TELEPORT || vnodeTag =3D=
=3D=3D SUSPENSE || !isComponent &amp;&amp; // &lt;svg&gt; and &lt;foreignOb=
ject&gt; must be forced into blocks so that block
        // updates inside get proper isSVG flag at runtime. (#639, #643)
        // This is technically web-specific, but splitting the logic out of=
 core
        // leads to too much unnecessary complexity.
        (tag =3D=3D=3D "svg" || tag =3D=3D=3D "foreignObject" || tag =3D=3D=
=3D "math")
      );
      if (props.length &gt; 0) {
        const propsBuildResult =3D buildProps(
          node,
          context,
          void 0,
          isComponent,
          isDynamicComponent
        );
        vnodeProps =3D propsBuildResult.props;
        patchFlag =3D propsBuildResult.patchFlag;
        dynamicPropNames =3D propsBuildResult.dynamicPropNames;
        const directives =3D propsBuildResult.directives;
        vnodeDirectives =3D directives &amp;&amp; directives.length ? creat=
eArrayExpression(
          directives.map((dir) =3D&gt; buildDirectiveArgs(dir, context))
        ) : void 0;
        if (propsBuildResult.shouldUseBlock) {
          shouldUseBlock =3D true;
        }
      }
      if (node.children.length &gt; 0) {
        if (vnodeTag =3D=3D=3D KEEP_ALIVE) {
          shouldUseBlock =3D true;
          patchFlag |=3D 1024;
          if (node.children.length &gt; 1) {
            context.onError(
              createCompilerError(46, {
                start: node.children[0].loc.start,
                end: node.children[node.children.length - 1].loc.end,
                source: ""
              })
            );
          }
        }
        const shouldBuildAsSlots =3D isComponent &amp;&amp; // Teleport is =
not a real component and has dedicated runtime handling
        vnodeTag !=3D=3D TELEPORT &amp;&amp; // explained above.
        vnodeTag !=3D=3D KEEP_ALIVE;
        if (shouldBuildAsSlots) {
          const { slots, hasDynamicSlots } =3D buildSlots(node, context);
          vnodeChildren =3D slots;
          if (hasDynamicSlots) {
            patchFlag |=3D 1024;
          }
        } else if (node.children.length =3D=3D=3D 1 &amp;&amp; vnodeTag !=
=3D=3D TELEPORT) {
          const child =3D node.children[0];
          const type =3D child.type;
          const hasDynamicTextChild =3D type =3D=3D=3D 5 || type =3D=3D=3D =
8;
          if (hasDynamicTextChild &amp;&amp; getConstantType(child, context=
) =3D=3D=3D 0) {
            patchFlag |=3D 1;
          }
          if (hasDynamicTextChild || type =3D=3D=3D 2) {
            vnodeChildren =3D child;
          } else {
            vnodeChildren =3D node.children;
          }
        } else {
          vnodeChildren =3D node.children;
        }
      }
      if (dynamicPropNames &amp;&amp; dynamicPropNames.length) {
        vnodeDynamicProps =3D stringifyDynamicPropNames(dynamicPropNames);
      }
      node.codegenNode =3D createVNodeCall(
        context,
        vnodeTag,
        vnodeProps,
        vnodeChildren,
        patchFlag =3D=3D=3D 0 ? void 0 : patchFlag,
        vnodeDynamicProps,
        vnodeDirectives,
        !!shouldUseBlock,
        false,
        isComponent,
        node.loc
      );
    };
  };
  function resolveComponentType(node, context, ssr =3D false) {
    let { tag } =3D node;
    const isExplicitDynamic =3D isComponentTag(tag);
    const isProp =3D findProp(
      node,
      "is",
      false,
      true
      /* allow empty */
    );
    if (isProp) {
      if (isExplicitDynamic || false) {
        let exp;
        if (isProp.type =3D=3D=3D 6) {
          exp =3D isProp.value &amp;&amp; createSimpleExpression(isProp.val=
ue.content, true);
        } else {
          exp =3D isProp.exp;
          if (!exp) {
            exp =3D createSimpleExpression(`is`, false, isProp.arg.loc);
          }
        }
        if (exp) {
          return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPON=
ENT), [
            exp
          ]);
        }
      } else if (isProp.type =3D=3D=3D 6 &amp;&amp; isProp.value.content.st=
artsWith("vue:")) {
        tag =3D isProp.value.content.slice(4);
      }
    }
    const builtIn =3D isCoreComponent(tag) || context.isBuiltInComponent(ta=
g);
    if (builtIn) {
      if (!ssr) context.helper(builtIn);
      return builtIn;
    }
    context.helper(RESOLVE_COMPONENT);
    context.components.add(tag);
    return toValidAssetId(tag, `component`);
  }
  function buildProps(node, context, props =3D node.props, isComponent, isD=
ynamicComponent, ssr =3D false) {
    const { tag, loc: elementLoc, children } =3D node;
    let properties =3D [];
    const mergeArgs =3D [];
    const runtimeDirectives =3D [];
    const hasChildren =3D children.length &gt; 0;
    let shouldUseBlock =3D false;
    let patchFlag =3D 0;
    let hasRef =3D false;
    let hasClassBinding =3D false;
    let hasStyleBinding =3D false;
    let hasHydrationEventBinding =3D false;
    let hasDynamicKeys =3D false;
    let hasVnodeHook =3D false;
    const dynamicPropNames =3D [];
    const pushMergeArg =3D (arg) =3D&gt; {
      if (properties.length) {
        mergeArgs.push(
          createObjectExpression(dedupeProperties(properties), elementLoc)
        );
        properties =3D [];
      }
      if (arg) mergeArgs.push(arg);
    };
    const pushRefVForMarker =3D () =3D&gt; {
      if (context.scopes.vFor &gt; 0) {
        properties.push(
          createObjectProperty(
            createSimpleExpression("ref_for", true),
            createSimpleExpression("true")
          )
        );
      }
    };
    const analyzePatchFlag =3D ({ key, value }) =3D&gt; {
      if (isStaticExp(key)) {
        const name =3D key.content;
        const isEventHandler =3D isOn(name);
        if (isEventHandler &amp;&amp; (!isComponent || isDynamicComponent) =
&amp;&amp; // omit the flag for click handlers because hydration gives clic=
k
        // dedicated fast path.
        name.toLowerCase() !=3D=3D "onclick" &amp;&amp; // omit v-model han=
dlers
        name !=3D=3D "onUpdate:modelValue" &amp;&amp; // omit onVnodeXXX ho=
oks
        !isReservedProp(name)) {
          hasHydrationEventBinding =3D true;
        }
        if (isEventHandler &amp;&amp; isReservedProp(name)) {
          hasVnodeHook =3D true;
        }
        if (isEventHandler &amp;&amp; value.type =3D=3D=3D 14) {
          value =3D value.arguments[0];
        }
        if (value.type =3D=3D=3D 20 || (value.type =3D=3D=3D 4 || value.typ=
e =3D=3D=3D 8) &amp;&amp; getConstantType(value, context) &gt; 0) {
          return;
        }
        if (name =3D=3D=3D "ref") {
          hasRef =3D true;
        } else if (name =3D=3D=3D "class") {
          hasClassBinding =3D true;
        } else if (name =3D=3D=3D "style") {
          hasStyleBinding =3D true;
        } else if (name !=3D=3D "key" &amp;&amp; !dynamicPropNames.includes=
(name)) {
          dynamicPropNames.push(name);
        }
        if (isComponent &amp;&amp; (name =3D=3D=3D "class" || name =3D=3D=
=3D "style") &amp;&amp; !dynamicPropNames.includes(name)) {
          dynamicPropNames.push(name);
        }
      } else {
        hasDynamicKeys =3D true;
      }
    };
    for (let i =3D 0; i &lt; props.length; i++) {
      const prop =3D props[i];
      if (prop.type =3D=3D=3D 6) {
        const { loc, name, nameLoc, value } =3D prop;
        let isStatic =3D true;
        if (name =3D=3D=3D "ref") {
          hasRef =3D true;
          pushRefVForMarker();
        }
        if (name =3D=3D=3D "is" &amp;&amp; (isComponentTag(tag) || value &a=
mp;&amp; value.content.startsWith("vue:") || false)) {
          continue;
        }
        properties.push(
          createObjectProperty(
            createSimpleExpression(name, true, nameLoc),
            createSimpleExpression(
              value ? value.content : "",
              isStatic,
              value ? value.loc : loc
            )
          )
        );
      } else {
        const { name, arg, exp, loc, modifiers } =3D prop;
        const isVBind =3D name =3D=3D=3D "bind";
        const isVOn =3D name =3D=3D=3D "on";
        if (name =3D=3D=3D "slot") {
          if (!isComponent) {
            context.onError(
              createCompilerError(40, loc)
            );
          }
          continue;
        }
        if (name =3D=3D=3D "once" || name =3D=3D=3D "memo") {
          continue;
        }
        if (name =3D=3D=3D "is" || isVBind &amp;&amp; isStaticArgOf(arg, "i=
s") &amp;&amp; (isComponentTag(tag) || false)) {
          continue;
        }
        if (isVOn &amp;&amp; ssr) {
          continue;
        }
        if (
          // #938: elements with dynamic keys should be forced into blocks
          isVBind &amp;&amp; isStaticArgOf(arg, "key") || // inline before-=
update hooks need to force block so that it is invoked
          // before children
          isVOn &amp;&amp; hasChildren &amp;&amp; isStaticArgOf(arg, "vue:b=
efore-update")
        ) {
          shouldUseBlock =3D true;
        }
        if (isVBind &amp;&amp; isStaticArgOf(arg, "ref")) {
          pushRefVForMarker();
        }
        if (!arg &amp;&amp; (isVBind || isVOn)) {
          hasDynamicKeys =3D true;
          if (exp) {
            if (isVBind) {
              pushRefVForMarker();
              pushMergeArg();
              mergeArgs.push(exp);
            } else {
              pushMergeArg({
                type: 14,
                loc,
                callee: context.helper(TO_HANDLERS),
                arguments: isComponent ? [exp] : [exp, `true`]
              });
            }
          } else {
            context.onError(
              createCompilerError(
                isVBind ? 34 : 35,
                loc
              )
            );
          }
          continue;
        }
        if (isVBind &amp;&amp; modifiers.some((mod) =3D&gt; mod.content =3D=
=3D=3D "prop")) {
          patchFlag |=3D 32;
        }
        const directiveTransform =3D context.directiveTransforms[name];
        if (directiveTransform) {
          const { props: props2, needRuntime } =3D directiveTransform(prop,=
 node, context);
          !ssr &amp;&amp; props2.forEach(analyzePatchFlag);
          if (isVOn &amp;&amp; arg &amp;&amp; !isStaticExp(arg)) {
            pushMergeArg(createObjectExpression(props2, elementLoc));
          } else {
            properties.push(...props2);
          }
          if (needRuntime) {
            runtimeDirectives.push(prop);
            if (isSymbol(needRuntime)) {
              directiveImportMap.set(prop, needRuntime);
            }
          }
        } else if (!isBuiltInDirective(name)) {
          runtimeDirectives.push(prop);
          if (hasChildren) {
            shouldUseBlock =3D true;
          }
        }
      }
    }
    let propsExpression =3D void 0;
    if (mergeArgs.length) {
      pushMergeArg();
      if (mergeArgs.length &gt; 1) {
        propsExpression =3D createCallExpression(
          context.helper(MERGE_PROPS),
          mergeArgs,
          elementLoc
        );
      } else {
        propsExpression =3D mergeArgs[0];
      }
    } else if (properties.length) {
      propsExpression =3D createObjectExpression(
        dedupeProperties(properties),
        elementLoc
      );
    }
    if (hasDynamicKeys) {
      patchFlag |=3D 16;
    } else {
      if (hasClassBinding &amp;&amp; !isComponent) {
        patchFlag |=3D 2;
      }
      if (hasStyleBinding &amp;&amp; !isComponent) {
        patchFlag |=3D 4;
      }
      if (dynamicPropNames.length) {
        patchFlag |=3D 8;
      }
      if (hasHydrationEventBinding) {
        patchFlag |=3D 32;
      }
    }
    if (!shouldUseBlock &amp;&amp; (patchFlag =3D=3D=3D 0 || patchFlag =3D=
=3D=3D 32) &amp;&amp; (hasRef || hasVnodeHook || runtimeDirectives.length &=
gt; 0)) {
      patchFlag |=3D 512;
    }
    if (!context.inSSR &amp;&amp; propsExpression) {
      switch (propsExpression.type) {
        case 15:
          let classKeyIndex =3D -1;
          let styleKeyIndex =3D -1;
          let hasDynamicKey =3D false;
          for (let i =3D 0; i &lt; propsExpression.properties.length; i++) =
{
            const key =3D propsExpression.properties[i].key;
            if (isStaticExp(key)) {
              if (key.content =3D=3D=3D "class") {
                classKeyIndex =3D i;
              } else if (key.content =3D=3D=3D "style") {
                styleKeyIndex =3D i;
              }
            } else if (!key.isHandlerKey) {
              hasDynamicKey =3D true;
            }
          }
          const classProp =3D propsExpression.properties[classKeyIndex];
          const styleProp =3D propsExpression.properties[styleKeyIndex];
          if (!hasDynamicKey) {
            if (classProp &amp;&amp; !isStaticExp(classProp.value)) {
              classProp.value =3D createCallExpression(
                context.helper(NORMALIZE_CLASS),
                [classProp.value]
              );
            }
            if (styleProp &amp;&amp; // the static style is compiled into a=
n object,
            // so use `hasStyleBinding` to ensure that it is a dynamic styl=
e binding
            (hasStyleBinding || styleProp.value.type =3D=3D=3D 4 &amp;&amp;=
 styleProp.value.content.trim()[0] =3D=3D=3D `[` || // v-bind:style and sty=
le both exist,
            // v-bind:style with static literal object
            styleProp.value.type =3D=3D=3D 17)) {
              styleProp.value =3D createCallExpression(
                context.helper(NORMALIZE_STYLE),
                [styleProp.value]
              );
            }
          } else {
            propsExpression =3D createCallExpression(
              context.helper(NORMALIZE_PROPS),
              [propsExpression]
            );
          }
          break;
        case 14:
          break;
        default:
          propsExpression =3D createCallExpression(
            context.helper(NORMALIZE_PROPS),
            [
              createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [
                propsExpression
              ])
            ]
          );
          break;
      }
    }
    return {
      props: propsExpression,
      directives: runtimeDirectives,
      patchFlag,
      dynamicPropNames,
      shouldUseBlock
    };
  }
  function dedupeProperties(properties) {
    const knownProps =3D /* @__PURE__ */ new Map();
    const deduped =3D [];
    for (let i =3D 0; i &lt; properties.length; i++) {
      const prop =3D properties[i];
      if (prop.key.type =3D=3D=3D 8 || !prop.key.isStatic) {
        deduped.push(prop);
        continue;
      }
      const name =3D prop.key.content;
      const existing =3D knownProps.get(name);
      if (existing) {
        if (name =3D=3D=3D "style" || name =3D=3D=3D "class" || isOn(name))=
 {
          mergeAsArray(existing, prop);
        }
      } else {
        knownProps.set(name, prop);
        deduped.push(prop);
      }
    }
    return deduped;
  }
  function mergeAsArray(existing, incoming) {
    if (existing.value.type =3D=3D=3D 17) {
      existing.value.elements.push(incoming.value);
    } else {
      existing.value =3D createArrayExpression(
        [existing.value, incoming.value],
        existing.loc
      );
    }
  }
  function buildDirectiveArgs(dir, context) {
    const dirArgs =3D [];
    const runtime =3D directiveImportMap.get(dir);
    if (runtime) {
      dirArgs.push(context.helperString(runtime));
    } else {
      {
        context.helper(RESOLVE_DIRECTIVE);
        context.directives.add(dir.name);
        dirArgs.push(toValidAssetId(dir.name, `directive`));
      }
    }
    const { loc } =3D dir;
    if (dir.exp) dirArgs.push(dir.exp);
    if (dir.arg) {
      if (!dir.exp) {
        dirArgs.push(`void 0`);
      }
      dirArgs.push(dir.arg);
    }
    if (Object.keys(dir.modifiers).length) {
      if (!dir.arg) {
        if (!dir.exp) {
          dirArgs.push(`void 0`);
        }
        dirArgs.push(`void 0`);
      }
      const trueExpression =3D createSimpleExpression(`true`, false, loc);
      dirArgs.push(
        createObjectExpression(
          dir.modifiers.map(
            (modifier) =3D&gt; createObjectProperty(modifier, trueExpressio=
n)
          ),
          loc
        )
      );
    }
    return createArrayExpression(dirArgs, dir.loc);
  }
  function stringifyDynamicPropNames(props) {
    let propsNamesString =3D `[`;
    for (let i =3D 0, l =3D props.length; i &lt; l; i++) {
      propsNamesString +=3D JSON.stringify(props[i]);
      if (i &lt; l - 1) propsNamesString +=3D ", ";
    }
    return propsNamesString + `]`;
  }
  function isComponentTag(tag) {
    return tag =3D=3D=3D "component" || tag =3D=3D=3D "Component";
  }

  const transformSlotOutlet =3D (node, context) =3D&gt; {
    if (isSlotOutlet(node)) {
      const { children, loc } =3D node;
      const { slotName, slotProps } =3D processSlotOutlet(node, context);
      const slotArgs =3D [
        context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
        slotName,
        "{}",
        "undefined",
        "true"
      ];
      let expectedLen =3D 2;
      if (slotProps) {
        slotArgs[2] =3D slotProps;
        expectedLen =3D 3;
      }
      if (children.length) {
        slotArgs[3] =3D createFunctionExpression([], children, false, false=
, loc);
        expectedLen =3D 4;
      }
      if (context.scopeId &amp;&amp; !context.slotted) {
        expectedLen =3D 5;
      }
      slotArgs.splice(expectedLen);
      node.codegenNode =3D createCallExpression(
        context.helper(RENDER_SLOT),
        slotArgs,
        loc
      );
    }
  };
  function processSlotOutlet(node, context) {
    let slotName =3D `"default"`;
    let slotProps =3D void 0;
    const nonNameProps =3D [];
    for (let i =3D 0; i &lt; node.props.length; i++) {
      const p =3D node.props[i];
      if (p.type =3D=3D=3D 6) {
        if (p.value) {
          if (p.name =3D=3D=3D "name") {
            slotName =3D JSON.stringify(p.value.content);
          } else {
            p.name =3D camelize(p.name);
            nonNameProps.push(p);
          }
        }
      } else {
        if (p.name =3D=3D=3D "bind" &amp;&amp; isStaticArgOf(p.arg, "name")=
) {
          if (p.exp) {
            slotName =3D p.exp;
          } else if (p.arg &amp;&amp; p.arg.type =3D=3D=3D 4) {
            const name =3D camelize(p.arg.content);
            slotName =3D p.exp =3D createSimpleExpression(name, false, p.ar=
g.loc);
          }
        } else {
          if (p.name =3D=3D=3D "bind" &amp;&amp; p.arg &amp;&amp; isStaticE=
xp(p.arg)) {
            p.arg.content =3D camelize(p.arg.content);
          }
          nonNameProps.push(p);
        }
      }
    }
    if (nonNameProps.length &gt; 0) {
      const { props, directives } =3D buildProps(
        node,
        context,
        nonNameProps,
        false,
        false
      );
      slotProps =3D props;
      if (directives.length) {
        context.onError(
          createCompilerError(
            36,
            directives[0].loc
          )
        );
      }
    }
    return {
      slotName,
      slotProps
    };
  }

  const transformOn$1 =3D (dir, node, context, augmentor) =3D&gt; {
    const { loc, modifiers, arg } =3D dir;
    if (!dir.exp &amp;&amp; !modifiers.length) {
      context.onError(createCompilerError(35, loc));
    }
    let eventName;
    if (arg.type =3D=3D=3D 4) {
      if (arg.isStatic) {
        let rawName =3D arg.content;
        if (rawName.startsWith("vnode")) {
          context.onError(createCompilerError(51, arg.loc));
        }
        if (rawName.startsWith("vue:")) {
          rawName =3D `vnode-${rawName.slice(4)}`;
        }
        const eventString =3D node.tagType !=3D=3D 0 || rawName.startsWith(=
"vnode") || !/[A-Z]/.test(rawName) ? (
          // for non-element and vnode lifecycle event listeners, auto conv=
ert
          // it to camelCase. See issue #2249
          toHandlerKey(camelize(rawName))
        ) : (
          // preserve case for plain element listeners that have uppercase
          // letters, as these may be custom elements' custom events
          `on:${rawName}`
        );
        eventName =3D createSimpleExpression(eventString, true, arg.loc);
      } else {
        eventName =3D createCompoundExpression([
          `${context.helperString(TO_HANDLER_KEY)}(`,
          arg,
          `)`
        ]);
      }
    } else {
      eventName =3D arg;
      eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`=
);
      eventName.children.push(`)`);
    }
    let exp =3D dir.exp;
    if (exp &amp;&amp; !exp.content.trim()) {
      exp =3D void 0;
    }
    let shouldCache =3D context.cacheHandlers &amp;&amp; !exp &amp;&amp; !c=
ontext.inVOnce;
    if (exp) {
      const isMemberExp =3D isMemberExpression(exp);
      const isInlineStatement =3D !(isMemberExp || isFnExpression(exp));
      const hasMultipleStatements =3D exp.content.includes(`;`);
      {
        validateBrowserExpression(
          exp,
          context,
          false,
          hasMultipleStatements
        );
      }
      if (isInlineStatement || shouldCache &amp;&amp; isMemberExp) {
        exp =3D createCompoundExpression([
          `${isInlineStatement ? `$event` : `${``}(...args)`} =3D&gt; ${has=
MultipleStatements ? `{` : `(`}`,
          exp,
          hasMultipleStatements ? `}` : `)`
        ]);
      }
    }
    let ret =3D {
      props: [
        createObjectProperty(
          eventName,
          exp || createSimpleExpression(`() =3D&gt; {}`, false, loc)
        )
      ]
    };
    if (augmentor) {
      ret =3D augmentor(ret);
    }
    if (shouldCache) {
      ret.props[0].value =3D context.cache(ret.props[0].value);
    }
    ret.props.forEach((p) =3D&gt; p.key.isHandlerKey =3D true);
    return ret;
  };

  const transformText =3D (node, context) =3D&gt; {
    if (node.type =3D=3D=3D 0 || node.type =3D=3D=3D 1 || node.type =3D=3D=
=3D 11 || node.type =3D=3D=3D 10) {
      return () =3D&gt; {
        const children =3D node.children;
        let currentContainer =3D void 0;
        let hasText =3D false;
        for (let i =3D 0; i &lt; children.length; i++) {
          const child =3D children[i];
          if (isText$1(child)) {
            hasText =3D true;
            for (let j =3D i + 1; j &lt; children.length; j++) {
              const next =3D children[j];
              if (isText$1(next)) {
                if (!currentContainer) {
                  currentContainer =3D children[i] =3D createCompoundExpres=
sion(
                    [child],
                    child.loc
                  );
                }
                currentContainer.children.push(` + `, next);
                children.splice(j, 1);
                j--;
              } else {
                currentContainer =3D void 0;
                break;
              }
            }
          }
        }
        if (!hasText || // if this is a plain element with a single text ch=
ild, leave it
        // as-is since the runtime has dedicated fast path for this by dire=
ctly
        // setting textContent of the element.
        // for component root it's always normalized anyway.
        children.length =3D=3D=3D 1 &amp;&amp; (node.type =3D=3D=3D 0 || no=
de.type =3D=3D=3D 1 &amp;&amp; node.tagType =3D=3D=3D 0 &amp;&amp; // #3756
        // custom directives can potentially add DOM elements arbitrarily,
        // we need to avoid setting textContent of the element at runtime
        // to avoid accidentally overwriting the DOM elements added
        // by the user through custom directives.
        !node.props.find(
          (p) =3D&gt; p.type =3D=3D=3D 7 &amp;&amp; !context.directiveTrans=
forms[p.name]
        ) &amp;&amp; // in compat mode, &lt;template&gt; tags with no speci=
al directives
        // will be rendered as a fragment so its children must be
        // converted into vnodes.
        true)) {
          return;
        }
        for (let i =3D 0; i &lt; children.length; i++) {
          const child =3D children[i];
          if (isText$1(child) || child.type =3D=3D=3D 8) {
            const callArgs =3D [];
            if (child.type !=3D=3D 2 || child.content !=3D=3D " ") {
              callArgs.push(child);
            }
            if (!context.ssr &amp;&amp; getConstantType(child, context) =3D=
=3D=3D 0) {
              callArgs.push(
                1 + (` /* ${PatchFlagNames[1]} */` )
              );
            }
            children[i] =3D {
              type: 12,
              content: child,
              loc: child.loc,
              codegenNode: createCallExpression(
                context.helper(CREATE_TEXT),
                callArgs
              )
            };
          }
        }
      };
    }
  };

  const seen$1 =3D /* @__PURE__ */ new WeakSet();
  const transformOnce =3D (node, context) =3D&gt; {
    if (node.type =3D=3D=3D 1 &amp;&amp; findDir(node, "once", true)) {
      if (seen$1.has(node) || context.inVOnce || context.inSSR) {
        return;
      }
      seen$1.add(node);
      context.inVOnce =3D true;
      context.helper(SET_BLOCK_TRACKING);
      return () =3D&gt; {
        context.inVOnce =3D false;
        const cur =3D context.currentNode;
        if (cur.codegenNode) {
          cur.codegenNode =3D context.cache(
            cur.codegenNode,
            true,
            true
          );
        }
      };
    }
  };

  const transformModel$1 =3D (dir, node, context) =3D&gt; {
    const { exp, arg } =3D dir;
    if (!exp) {
      context.onError(
        createCompilerError(41, dir.loc)
      );
      return createTransformProps();
    }
    const rawExp =3D exp.loc.source.trim();
    const expString =3D exp.type =3D=3D=3D 4 ? exp.content : rawExp;
    const bindingType =3D context.bindingMetadata[rawExp];
    if (bindingType =3D=3D=3D "props" || bindingType =3D=3D=3D "props-alias=
ed") {
      context.onError(createCompilerError(44, exp.loc));
      return createTransformProps();
    }
    if (!expString.trim() || !isMemberExpression(exp) &amp;&amp; true) {
      context.onError(
        createCompilerError(42, exp.loc)
      );
      return createTransformProps();
    }
    const propName =3D arg ? arg : createSimpleExpression("modelValue", tru=
e);
    const eventName =3D arg ? isStaticExp(arg) ? `onUpdate:${camelize(arg.c=
ontent)}` : createCompoundExpression(['"onUpdate:" + ', arg]) : `onUpdate:m=
odelValue`;
    let assignmentExp;
    const eventArg =3D context.isTS ? `($event: any)` : `$event`;
    {
      assignmentExp =3D createCompoundExpression([
        `${eventArg} =3D&gt; ((`,
        exp,
        `) =3D $event)`
      ]);
    }
    const props =3D [
      // modelValue: foo
      createObjectProperty(propName, dir.exp),
      // "onUpdate:modelValue": $event =3D&gt; (foo =3D $event)
      createObjectProperty(eventName, assignmentExp)
    ];
    if (dir.modifiers.length &amp;&amp; node.tagType =3D=3D=3D 1) {
      const modifiers =3D dir.modifiers.map((m) =3D&gt; m.content).map((m) =
=3D&gt; (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`).join(`,=
 `);
      const modifiersKey =3D arg ? isStaticExp(arg) ? `${arg.content}Modifi=
ers` : createCompoundExpression([arg, ' + "Modifiers"']) : `modelModifiers`=
;
      props.push(
        createObjectProperty(
          modifiersKey,
          createSimpleExpression(
            `{ ${modifiers} }`,
            false,
            dir.loc,
            2
          )
        )
      );
    }
    return createTransformProps(props);
  };
  function createTransformProps(props =3D []) {
    return { props };
  }

  const seen =3D /* @__PURE__ */ new WeakSet();
  const transformMemo =3D (node, context) =3D&gt; {
    if (node.type =3D=3D=3D 1) {
      const dir =3D findDir(node, "memo");
      if (!dir || seen.has(node)) {
        return;
      }
      seen.add(node);
      return () =3D&gt; {
        const codegenNode =3D node.codegenNode || context.currentNode.codeg=
enNode;
        if (codegenNode &amp;&amp; codegenNode.type =3D=3D=3D 13) {
          if (node.tagType !=3D=3D 1) {
            convertToBlock(codegenNode, context);
          }
          node.codegenNode =3D createCallExpression(context.helper(WITH_MEM=
O), [
            dir.exp,
            createFunctionExpression(void 0, codegenNode),
            `_cache`,
            String(context.cached.length)
          ]);
          context.cached.push(null);
        }
      };
    }
  };

  function getBaseTransformPreset(prefixIdentifiers) {
    return [
      [
        transformOnce,
        transformIf,
        transformMemo,
        transformFor,
        ...[],
        ...[transformExpression] ,
        transformSlotOutlet,
        transformElement,
        trackSlotScopes,
        transformText
      ],
      {
        on: transformOn$1,
        bind: transformBind,
        model: transformModel$1
      }
    ];
  }
  function baseCompile(source, options =3D {}) {
    const onError =3D options.onError || defaultOnError;
    const isModuleMode =3D options.mode =3D=3D=3D "module";
    {
      if (options.prefixIdentifiers =3D=3D=3D true) {
        onError(createCompilerError(47));
      } else if (isModuleMode) {
        onError(createCompilerError(48));
      }
    }
    const prefixIdentifiers =3D false;
    if (options.cacheHandlers) {
      onError(createCompilerError(49));
    }
    if (options.scopeId &amp;&amp; !isModuleMode) {
      onError(createCompilerError(50));
    }
    const resolvedOptions =3D extend({}, options, {
      prefixIdentifiers
    });
    const ast =3D isString(source) ? baseParse(source, resolvedOptions) : s=
ource;
    const [nodeTransforms, directiveTransforms] =3D getBaseTransformPreset(=
);
    transform(
      ast,
      extend({}, resolvedOptions, {
        nodeTransforms: [
          ...nodeTransforms,
          ...options.nodeTransforms || []
          // user transforms
        ],
        directiveTransforms: extend(
          {},
          directiveTransforms,
          options.directiveTransforms || {}
          // user transforms
        )
      })
    );
    return generate(ast, resolvedOptions);
  }

  const noopDirectiveTransform =3D () =3D&gt; ({ props: [] });

  const V_MODEL_RADIO =3D Symbol(`vModelRadio` );
  const V_MODEL_CHECKBOX =3D Symbol(
    `vModelCheckbox`=20
  );
  const V_MODEL_TEXT =3D Symbol(`vModelText` );
  const V_MODEL_SELECT =3D Symbol(
    `vModelSelect`=20
  );
  const V_MODEL_DYNAMIC =3D Symbol(
    `vModelDynamic`=20
  );
  const V_ON_WITH_MODIFIERS =3D Symbol(
    `vOnModifiersGuard`=20
  );
  const V_ON_WITH_KEYS =3D Symbol(
    `vOnKeysGuard`=20
  );
  const V_SHOW =3D Symbol(`vShow` );
  const TRANSITION =3D Symbol(`Transition` );
  const TRANSITION_GROUP =3D Symbol(
    `TransitionGroup`=20
  );
  registerRuntimeHelpers({
    [V_MODEL_RADIO]: `vModelRadio`,
    [V_MODEL_CHECKBOX]: `vModelCheckbox`,
    [V_MODEL_TEXT]: `vModelText`,
    [V_MODEL_SELECT]: `vModelSelect`,
    [V_MODEL_DYNAMIC]: `vModelDynamic`,
    [V_ON_WITH_MODIFIERS]: `withModifiers`,
    [V_ON_WITH_KEYS]: `withKeys`,
    [V_SHOW]: `vShow`,
    [TRANSITION]: `Transition`,
    [TRANSITION_GROUP]: `TransitionGroup`
  });

  let decoder;
  function decodeHtmlBrowser(raw, asAttr =3D false) {
    if (!decoder) {
      decoder =3D document.createElement("div");
    }
    if (asAttr) {
      decoder.innerHTML =3D `&lt;div foo=3D"${raw.replace(/"/g, "&amp;quot;=
")}"&gt;`;
      return decoder.children[0].getAttribute("foo");
    } else {
      decoder.innerHTML =3D raw;
      return decoder.textContent;
    }
  }

  const parserOptions =3D {
    parseMode: "html",
    isVoidTag,
    isNativeTag: (tag) =3D&gt; isHTMLTag(tag) || isSVGTag(tag) || isMathMLT=
ag(tag),
    isPreTag: (tag) =3D&gt; tag =3D=3D=3D "pre",
    isIgnoreNewlineTag: (tag) =3D&gt; tag =3D=3D=3D "pre" || tag =3D=3D=3D =
"textarea",
    decodeEntities: decodeHtmlBrowser ,
    isBuiltInComponent: (tag) =3D&gt; {
      if (tag =3D=3D=3D "Transition" || tag =3D=3D=3D "transition") {
        return TRANSITION;
      } else if (tag =3D=3D=3D "TransitionGroup" || tag =3D=3D=3D "transiti=
on-group") {
        return TRANSITION_GROUP;
      }
    },
    // https://html.spec.whatwg.org/multipage/parsing.html#tree-constructio=
n-dispatcher
    getNamespace(tag, parent, rootNamespace) {
      let ns =3D parent ? parent.ns : rootNamespace;
      if (parent &amp;&amp; ns =3D=3D=3D 2) {
        if (parent.tag =3D=3D=3D "annotation-xml") {
          if (tag =3D=3D=3D "svg") {
            return 1;
          }
          if (parent.props.some(
            (a) =3D&gt; a.type =3D=3D=3D 6 &amp;&amp; a.name =3D=3D=3D "enc=
oding" &amp;&amp; a.value !=3D null &amp;&amp; (a.value.content =3D=3D=3D "=
text/html" || a.value.content =3D=3D=3D "application/xhtml+xml")
          )) {
            ns =3D 0;
          }
        } else if (/^m(?:[ions]|text)$/.test(parent.tag) &amp;&amp; tag !=
=3D=3D "mglyph" &amp;&amp; tag !=3D=3D "malignmark") {
          ns =3D 0;
        }
      } else if (parent &amp;&amp; ns =3D=3D=3D 1) {
        if (parent.tag =3D=3D=3D "foreignObject" || parent.tag =3D=3D=3D "d=
esc" || parent.tag =3D=3D=3D "title") {
          ns =3D 0;
        }
      }
      if (ns =3D=3D=3D 0) {
        if (tag =3D=3D=3D "svg") {
          return 1;
        }
        if (tag =3D=3D=3D "math") {
          return 2;
        }
      }
      return ns;
    }
  };

  const transformStyle =3D (node) =3D&gt; {
    if (node.type =3D=3D=3D 1) {
      node.props.forEach((p, i) =3D&gt; {
        if (p.type =3D=3D=3D 6 &amp;&amp; p.name =3D=3D=3D "style" &amp;&am=
p; p.value) {
          node.props[i] =3D {
            type: 7,
            name: `bind`,
            arg: createSimpleExpression(`style`, true, p.loc),
            exp: parseInlineCSS(p.value.content, p.loc),
            modifiers: [],
            loc: p.loc
          };
        }
      });
    }
  };
  const parseInlineCSS =3D (cssText, loc) =3D&gt; {
    const normalized =3D parseStringStyle(cssText);
    return createSimpleExpression(
      JSON.stringify(normalized),
      false,
      loc,
      3
    );
  };

  function createDOMCompilerError(code, loc) {
    return createCompilerError(
      code,
      loc,
      DOMErrorMessages=20
    );
  }
  const DOMErrorMessages =3D {
    [53]: `v-html is missing expression.`,
    [54]: `v-html will override element children.`,
    [55]: `v-text is missing expression.`,
    [56]: `v-text will override element children.`,
    [57]: `v-model can only be used on &lt;input&gt;, &lt;textarea&gt; and =
&lt;select&gt; elements.`,
    [58]: `v-model argument is not supported on plain elements.`,
    [59]: `v-model cannot be used on file inputs since they are read-only. =
Use a v-on:change listener instead.`,
    [60]: `Unnecessary value binding used alongside v-model. It will interf=
ere with v-model's behavior.`,
    [61]: `v-show is missing expression.`,
    [62]: `&lt;Transition&gt; expects exactly one child element or componen=
t.`,
    [63]: `Tags with side effect (&lt;script&gt; and &lt;style&gt;) are ign=
ored in client component templates.`
  };

  const transformVHtml =3D (dir, node, context) =3D&gt; {
    const { exp, loc } =3D dir;
    if (!exp) {
      context.onError(
        createDOMCompilerError(53, loc)
      );
    }
    if (node.children.length) {
      context.onError(
        createDOMCompilerError(54, loc)
      );
      node.children.length =3D 0;
    }
    return {
      props: [
        createObjectProperty(
          createSimpleExpression(`innerHTML`, true, loc),
          exp || createSimpleExpression("", true)
        )
      ]
    };
  };

  const transformVText =3D (dir, node, context) =3D&gt; {
    const { exp, loc } =3D dir;
    if (!exp) {
      context.onError(
        createDOMCompilerError(55, loc)
      );
    }
    if (node.children.length) {
      context.onError(
        createDOMCompilerError(56, loc)
      );
      node.children.length =3D 0;
    }
    return {
      props: [
        createObjectProperty(
          createSimpleExpression(`textContent`, true),
          exp ? getConstantType(exp, context) &gt; 0 ? exp : createCallExpr=
ession(
            context.helperString(TO_DISPLAY_STRING),
            [exp],
            loc
          ) : createSimpleExpression("", true)
        )
      ]
    };
  };

  const transformModel =3D (dir, node, context) =3D&gt; {
    const baseResult =3D transformModel$1(dir, node, context);
    if (!baseResult.props.length || node.tagType =3D=3D=3D 1) {
      return baseResult;
    }
    if (dir.arg) {
      context.onError(
        createDOMCompilerError(
          58,
          dir.arg.loc
        )
      );
    }
    function checkDuplicatedValue() {
      const value =3D findDir(node, "bind");
      if (value &amp;&amp; isStaticArgOf(value.arg, "value")) {
        context.onError(
          createDOMCompilerError(
            60,
            value.loc
          )
        );
      }
    }
    const { tag } =3D node;
    const isCustomElement =3D context.isCustomElement(tag);
    if (tag =3D=3D=3D "input" || tag =3D=3D=3D "textarea" || tag =3D=3D=3D =
"select" || isCustomElement) {
      let directiveToUse =3D V_MODEL_TEXT;
      let isInvalidType =3D false;
      if (tag =3D=3D=3D "input" || isCustomElement) {
        const type =3D findProp(node, `type`);
        if (type) {
          if (type.type =3D=3D=3D 7) {
            directiveToUse =3D V_MODEL_DYNAMIC;
          } else if (type.value) {
            switch (type.value.content) {
              case "radio":
                directiveToUse =3D V_MODEL_RADIO;
                break;
              case "checkbox":
                directiveToUse =3D V_MODEL_CHECKBOX;
                break;
              case "file":
                isInvalidType =3D true;
                context.onError(
                  createDOMCompilerError(
                    59,
                    dir.loc
                  )
                );
                break;
              default:
                checkDuplicatedValue();
                break;
            }
          }
        } else if (hasDynamicKeyVBind(node)) {
          directiveToUse =3D V_MODEL_DYNAMIC;
        } else {
          checkDuplicatedValue();
        }
      } else if (tag =3D=3D=3D "select") {
        directiveToUse =3D V_MODEL_SELECT;
      } else {
        checkDuplicatedValue();
      }
      if (!isInvalidType) {
        baseResult.needRuntime =3D context.helper(directiveToUse);
      }
    } else {
      context.onError(
        createDOMCompilerError(
          57,
          dir.loc
        )
      );
    }
    baseResult.props =3D baseResult.props.filter(
      (p) =3D&gt; !(p.key.type =3D=3D=3D 4 &amp;&amp; p.key.content =3D=3D=
=3D "modelValue")
    );
    return baseResult;
  };

  const isEventOptionModifier =3D /* @__PURE__ */ makeMap(`passive,once,cap=
ture`);
  const isNonKeyModifier =3D /* @__PURE__ */ makeMap(
    // event propagation management
    `stop,prevent,self,ctrl,shift,alt,meta,exact,middle`
  );
  const maybeKeyModifier =3D /* @__PURE__ */ makeMap("left,right");
  const isKeyboardEvent =3D /* @__PURE__ */ makeMap(`onkeyup,onkeydown,onke=
ypress`);
  const resolveModifiers =3D (key, modifiers, context, loc) =3D&gt; {
    const keyModifiers =3D [];
    const nonKeyModifiers =3D [];
    const eventOptionModifiers =3D [];
    for (let i =3D 0; i &lt; modifiers.length; i++) {
      const modifier =3D modifiers[i].content;
      if (isEventOptionModifier(modifier)) {
        eventOptionModifiers.push(modifier);
      } else {
        if (maybeKeyModifier(modifier)) {
          if (isStaticExp(key)) {
            if (isKeyboardEvent(key.content.toLowerCase())) {
              keyModifiers.push(modifier);
            } else {
              nonKeyModifiers.push(modifier);
            }
          } else {
            keyModifiers.push(modifier);
            nonKeyModifiers.push(modifier);
          }
        } else {
          if (isNonKeyModifier(modifier)) {
            nonKeyModifiers.push(modifier);
          } else {
            keyModifiers.push(modifier);
          }
        }
      }
    }
    return {
      keyModifiers,
      nonKeyModifiers,
      eventOptionModifiers
    };
  };
  const transformClick =3D (key, event) =3D&gt; {
    const isStaticClick =3D isStaticExp(key) &amp;&amp; key.content.toLower=
Case() =3D=3D=3D "onclick";
    return isStaticClick ? createSimpleExpression(event, true) : key.type !=
=3D=3D 4 ? createCompoundExpression([
      `(`,
      key,
      `) =3D=3D=3D "onClick" ? "${event}" : (`,
      key,
      `)`
    ]) : key;
  };
  const transformOn =3D (dir, node, context) =3D&gt; {
    return transformOn$1(dir, node, context, (baseResult) =3D&gt; {
      const { modifiers } =3D dir;
      if (!modifiers.length) return baseResult;
      let { key, value: handlerExp } =3D baseResult.props[0];
      const { keyModifiers, nonKeyModifiers, eventOptionModifiers } =3D res=
olveModifiers(key, modifiers, context, dir.loc);
      if (nonKeyModifiers.includes("right")) {
        key =3D transformClick(key, `onContextmenu`);
      }
      if (nonKeyModifiers.includes("middle")) {
        key =3D transformClick(key, `onMouseup`);
      }
      if (nonKeyModifiers.length) {
        handlerExp =3D createCallExpression(context.helper(V_ON_WITH_MODIFI=
ERS), [
          handlerExp,
          JSON.stringify(nonKeyModifiers)
        ]);
      }
      if (keyModifiers.length &amp;&amp; // if event name is dynamic, alway=
s wrap with keys guard
      (!isStaticExp(key) || isKeyboardEvent(key.content.toLowerCase()))) {
        handlerExp =3D createCallExpression(context.helper(V_ON_WITH_KEYS),=
 [
          handlerExp,
          JSON.stringify(keyModifiers)
        ]);
      }
      if (eventOptionModifiers.length) {
        const modifierPostfix =3D eventOptionModifiers.map(capitalize).join=
("");
        key =3D isStaticExp(key) ? createSimpleExpression(`${key.content}${=
modifierPostfix}`, true) : createCompoundExpression([`(`, key, `) + "${modi=
fierPostfix}"`]);
      }
      return {
        props: [createObjectProperty(key, handlerExp)]
      };
    });
  };

  const transformShow =3D (dir, node, context) =3D&gt; {
    const { exp, loc } =3D dir;
    if (!exp) {
      context.onError(
        createDOMCompilerError(61, loc)
      );
    }
    return {
      props: [],
      needRuntime: context.helper(V_SHOW)
    };
  };

  const transformTransition =3D (node, context) =3D&gt; {
    if (node.type =3D=3D=3D 1 &amp;&amp; node.tagType =3D=3D=3D 1) {
      const component =3D context.isBuiltInComponent(node.tag);
      if (component =3D=3D=3D TRANSITION) {
        return () =3D&gt; {
          if (!node.children.length) {
            return;
          }
          if (hasMultipleChildren(node)) {
            context.onError(
              createDOMCompilerError(
                62,
                {
                  start: node.children[0].loc.start,
                  end: node.children[node.children.length - 1].loc.end,
                  source: ""
                }
              )
            );
          }
          const child =3D node.children[0];
          if (child.type =3D=3D=3D 1) {
            for (const p of child.props) {
              if (p.type =3D=3D=3D 7 &amp;&amp; p.name =3D=3D=3D "show") {
                node.props.push({
                  type: 6,
                  name: "persisted",
                  nameLoc: node.loc,
                  value: void 0,
                  loc: node.loc
                });
              }
            }
          }
        };
      }
    }
  };
  function hasMultipleChildren(node) {
    const children =3D node.children =3D node.children.filter(
      (c) =3D&gt; c.type !=3D=3D 3 &amp;&amp; !(c.type =3D=3D=3D 2 &amp;&am=
p; !c.content.trim())
    );
    const child =3D children[0];
    return children.length !=3D=3D 1 || child.type =3D=3D=3D 11 || child.ty=
pe =3D=3D=3D 9 &amp;&amp; child.branches.some(hasMultipleChildren);
  }

  const ignoreSideEffectTags =3D (node, context) =3D&gt; {
    if (node.type =3D=3D=3D 1 &amp;&amp; node.tagType =3D=3D=3D 0 &amp;&amp=
; (node.tag =3D=3D=3D "script" || node.tag =3D=3D=3D "style")) {
      context.onError(
        createDOMCompilerError(
          63,
          node.loc
        )
      );
      context.removeNode();
    }
  };

  function isValidHTMLNesting(parent, child) {
    if (parent =3D=3D=3D "template") {
      return true;
    }
    if (parent in onlyValidChildren) {
      return onlyValidChildren[parent].has(child);
    }
    if (child in onlyValidParents) {
      return onlyValidParents[child].has(parent);
    }
    if (parent in knownInvalidChildren) {
      if (knownInvalidChildren[parent].has(child)) return false;
    }
    if (child in knownInvalidParents) {
      if (knownInvalidParents[child].has(parent)) return false;
    }
    return true;
  }
  const headings =3D /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5",=
 "h6"]);
  const emptySet =3D /* @__PURE__ */ new Set([]);
  const onlyValidChildren =3D {
    head: /* @__PURE__ */ new Set([
      "base",
      "basefront",
      "bgsound",
      "link",
      "meta",
      "title",
      "noscript",
      "noframes",
      "style",
      "script",
      "template"
    ]),
    optgroup: /* @__PURE__ */ new Set(["option"]),
    select: /* @__PURE__ */ new Set(["optgroup", "option", "hr"]),
    // table
    table: /* @__PURE__ */ new Set(["caption", "colgroup", "tbody", "tfoot"=
, "thead"]),
    tr: /* @__PURE__ */ new Set(["td", "th"]),
    colgroup: /* @__PURE__ */ new Set(["col"]),
    tbody: /* @__PURE__ */ new Set(["tr"]),
    thead: /* @__PURE__ */ new Set(["tr"]),
    tfoot: /* @__PURE__ */ new Set(["tr"]),
    // these elements can not have any children elements
    script: emptySet,
    iframe: emptySet,
    option: emptySet,
    textarea: emptySet,
    style: emptySet,
    title: emptySet
  };
  const onlyValidParents =3D {
    // sections
    html: emptySet,
    body: /* @__PURE__ */ new Set(["html"]),
    head: /* @__PURE__ */ new Set(["html"]),
    // table
    td: /* @__PURE__ */ new Set(["tr"]),
    colgroup: /* @__PURE__ */ new Set(["table"]),
    caption: /* @__PURE__ */ new Set(["table"]),
    tbody: /* @__PURE__ */ new Set(["table"]),
    tfoot: /* @__PURE__ */ new Set(["table"]),
    col: /* @__PURE__ */ new Set(["colgroup"]),
    th: /* @__PURE__ */ new Set(["tr"]),
    thead: /* @__PURE__ */ new Set(["table"]),
    tr: /* @__PURE__ */ new Set(["tbody", "thead", "tfoot"]),
    // data list
    dd: /* @__PURE__ */ new Set(["dl", "div"]),
    dt: /* @__PURE__ */ new Set(["dl", "div"]),
    // other
    figcaption: /* @__PURE__ */ new Set(["figure"]),
    // li: new Set(["ul", "ol"]),
    summary: /* @__PURE__ */ new Set(["details"]),
    area: /* @__PURE__ */ new Set(["map"])
  };
  const knownInvalidChildren =3D {
    p: /* @__PURE__ */ new Set([
      "address",
      "article",
      "aside",
      "blockquote",
      "center",
      "details",
      "dialog",
      "dir",
      "div",
      "dl",
      "fieldset",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "li",
      "main",
      "nav",
      "menu",
      "ol",
      "p",
      "pre",
      "section",
      "table",
      "ul"
    ]),
    svg: /* @__PURE__ */ new Set([
      "b",
      "blockquote",
      "br",
      "code",
      "dd",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "hr",
      "i",
      "img",
      "li",
      "menu",
      "meta",
      "ol",
      "p",
      "pre",
      "ruby",
      "s",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "table",
      "u",
      "ul",
      "var"
    ])
  };
  const knownInvalidParents =3D {
    a: /* @__PURE__ */ new Set(["a"]),
    button: /* @__PURE__ */ new Set(["button"]),
    dd: /* @__PURE__ */ new Set(["dd", "dt"]),
    dt: /* @__PURE__ */ new Set(["dd", "dt"]),
    form: /* @__PURE__ */ new Set(["form"]),
    li: /* @__PURE__ */ new Set(["li"]),
    h1: headings,
    h2: headings,
    h3: headings,
    h4: headings,
    h5: headings,
    h6: headings
  };

  const validateHtmlNesting =3D (node, context) =3D&gt; {
    if (node.type =3D=3D=3D 1 &amp;&amp; node.tagType =3D=3D=3D 0 &amp;&amp=
; context.parent &amp;&amp; context.parent.type =3D=3D=3D 1 &amp;&amp; cont=
ext.parent.tagType =3D=3D=3D 0 &amp;&amp; !isValidHTMLNesting(context.paren=
t.tag, node.tag)) {
      const error =3D new SyntaxError(
        `&lt;${node.tag}&gt; cannot be child of &lt;${context.parent.tag}&g=
t;, according to HTML specifications. This can cause hydration errors or po=
tentially disrupt future functionality.`
      );
      error.loc =3D node.loc;
      context.onWarn(error);
    }
  };

  const DOMNodeTransforms =3D [
    transformStyle,
    ...[transformTransition, validateHtmlNesting]=20
  ];
  const DOMDirectiveTransforms =3D {
    cloak: noopDirectiveTransform,
    html: transformVHtml,
    text: transformVText,
    model: transformModel,
    // override compiler-core
    on: transformOn,
    // override compiler-core
    show: transformShow
  };
  function compile(src, options =3D {}) {
    return baseCompile(
      src,
      extend({}, parserOptions, options, {
        nodeTransforms: [
          // ignore &lt;script&gt; and &lt;tag&gt;
          // this is not put inside DOMNodeTransforms because that list is =
used
          // by compiler-ssr to generate vnode fallback branches
          ignoreSideEffectTags,
          ...DOMNodeTransforms,
          ...options.nodeTransforms || []
        ],
        directiveTransforms: extend(
          {},
          DOMDirectiveTransforms,
          options.directiveTransforms || {}
        ),
        transformHoist: null=20
      })
    );
  }

  {
    initDev();
  }
  const compileCache =3D /* @__PURE__ */ Object.create(null);
  function compileToFunction(template, options) {
    if (!isString(template)) {
      if (template.nodeType) {
        template =3D template.innerHTML;
      } else {
        warn(`invalid template option: `, template);
        return NOOP;
      }
    }
    const key =3D genCacheKey(template, options);
    const cached =3D compileCache[key];
    if (cached) {
      return cached;
    }
    if (template[0] =3D=3D=3D "#") {
      const el =3D document.querySelector(template);
      if (!el) {
        warn(`Template element not found or is empty: ${template}`);
      }
      template =3D el ? el.innerHTML : ``;
    }
    const opts =3D extend(
      {
        hoistStatic: true,
        onError: onError ,
        onWarn: (e) =3D&gt; onError(e, true)=20
      },
      options
    );
    if (!opts.isCustomElement &amp;&amp; typeof customElements !=3D=3D "und=
efined") {
      opts.isCustomElement =3D (tag) =3D&gt; !!customElements.get(tag);
    }
    const { code } =3D compile(template, opts);
    function onError(err, asWarning =3D false) {
      const message =3D asWarning ? err.message : `Template compilation err=
or: ${err.message}`;
      const codeFrame =3D err.loc &amp;&amp; generateCodeFrame(
        template,
        err.loc.start.offset,
        err.loc.end.offset
      );
      warn(codeFrame ? `${message}
${codeFrame}` : message);
    }
    const render =3D new Function(code)() ;
    render._rc =3D true;
    return compileCache[key] =3D render;
  }
  registerRuntimeCompiler(compileToFunction);

  exports.BaseTransition =3D BaseTransition;
  exports.BaseTransitionPropsValidators =3D BaseTransitionPropsValidators;
  exports.Comment =3D Comment;
  exports.DeprecationTypes =3D DeprecationTypes;
  exports.EffectScope =3D EffectScope;
  exports.ErrorCodes =3D ErrorCodes;
  exports.ErrorTypeStrings =3D ErrorTypeStrings;
  exports.Fragment =3D Fragment;
  exports.KeepAlive =3D KeepAlive;
  exports.ReactiveEffect =3D ReactiveEffect;
  exports.Static =3D Static;
  exports.Suspense =3D Suspense;
  exports.Teleport =3D Teleport;
  exports.Text =3D Text;
  exports.TrackOpTypes =3D TrackOpTypes;
  exports.Transition =3D Transition;
  exports.TransitionGroup =3D TransitionGroup;
  exports.TriggerOpTypes =3D TriggerOpTypes;
  exports.VueElement =3D VueElement;
  exports.assertNumber =3D assertNumber;
  exports.callWithAsyncErrorHandling =3D callWithAsyncErrorHandling;
  exports.callWithErrorHandling =3D callWithErrorHandling;
  exports.camelize =3D camelize;
  exports.capitalize =3D capitalize;
  exports.cloneVNode =3D cloneVNode;
  exports.compatUtils =3D compatUtils;
  exports.compile =3D compileToFunction;
  exports.computed =3D computed;
  exports.createApp =3D createApp;
  exports.createBlock =3D createBlock;
  exports.createCommentVNode =3D createCommentVNode;
  exports.createElementBlock =3D createElementBlock;
  exports.createElementVNode =3D createBaseVNode;
  exports.createHydrationRenderer =3D createHydrationRenderer;
  exports.createPropsRestProxy =3D createPropsRestProxy;
  exports.createRenderer =3D createRenderer;
  exports.createSSRApp =3D createSSRApp;
  exports.createSlots =3D createSlots;
  exports.createStaticVNode =3D createStaticVNode;
  exports.createTextVNode =3D createTextVNode;
  exports.createVNode =3D createVNode;
  exports.customRef =3D customRef;
  exports.defineAsyncComponent =3D defineAsyncComponent;
  exports.defineComponent =3D defineComponent;
  exports.defineCustomElement =3D defineCustomElement;
  exports.defineEmits =3D defineEmits;
  exports.defineExpose =3D defineExpose;
  exports.defineModel =3D defineModel;
  exports.defineOptions =3D defineOptions;
  exports.defineProps =3D defineProps;
  exports.defineSSRCustomElement =3D defineSSRCustomElement;
  exports.defineSlots =3D defineSlots;
  exports.devtools =3D devtools;
  exports.effect =3D effect;
  exports.effectScope =3D effectScope;
  exports.getCurrentInstance =3D getCurrentInstance;
  exports.getCurrentScope =3D getCurrentScope;
  exports.getCurrentWatcher =3D getCurrentWatcher;
  exports.getTransitionRawChildren =3D getTransitionRawChildren;
  exports.guardReactiveProps =3D guardReactiveProps;
  exports.h =3D h;
  exports.handleError =3D handleError;
  exports.hasInjectionContext =3D hasInjectionContext;
  exports.hydrate =3D hydrate;
  exports.hydrateOnIdle =3D hydrateOnIdle;
  exports.hydrateOnInteraction =3D hydrateOnInteraction;
  exports.hydrateOnMediaQuery =3D hydrateOnMediaQuery;
  exports.hydrateOnVisible =3D hydrateOnVisible;
  exports.initCustomFormatter =3D initCustomFormatter;
  exports.initDirectivesForSSR =3D initDirectivesForSSR;
  exports.inject =3D inject;
  exports.isMemoSame =3D isMemoSame;
  exports.isProxy =3D isProxy;
  exports.isReactive =3D isReactive;
  exports.isReadonly =3D isReadonly;
  exports.isRef =3D isRef;
  exports.isRuntimeOnly =3D isRuntimeOnly;
  exports.isShallow =3D isShallow;
  exports.isVNode =3D isVNode;
  exports.markRaw =3D markRaw;
  exports.mergeDefaults =3D mergeDefaults;
  exports.mergeModels =3D mergeModels;
  exports.mergeProps =3D mergeProps;
  exports.nextTick =3D nextTick;
  exports.normalizeClass =3D normalizeClass;
  exports.normalizeProps =3D normalizeProps;
  exports.normalizeStyle =3D normalizeStyle;
  exports.onActivated =3D onActivated;
  exports.onBeforeMount =3D onBeforeMount;
  exports.onBeforeUnmount =3D onBeforeUnmount;
  exports.onBeforeUpdate =3D onBeforeUpdate;
  exports.onDeactivated =3D onDeactivated;
  exports.onErrorCaptured =3D onErrorCaptured;
  exports.onMounted =3D onMounted;
  exports.onRenderTracked =3D onRenderTracked;
  exports.onRenderTriggered =3D onRenderTriggered;
  exports.onScopeDispose =3D onScopeDispose;
  exports.onServerPrefetch =3D onServerPrefetch;
  exports.onUnmounted =3D onUnmounted;
  exports.onUpdated =3D onUpdated;
  exports.onWatcherCleanup =3D onWatcherCleanup;
  exports.openBlock =3D openBlock;
  exports.popScopeId =3D popScopeId;
  exports.provide =3D provide;
  exports.proxyRefs =3D proxyRefs;
  exports.pushScopeId =3D pushScopeId;
  exports.queuePostFlushCb =3D queuePostFlushCb;
  exports.reactive =3D reactive;
  exports.readonly =3D readonly;
  exports.ref =3D ref;
  exports.registerRuntimeCompiler =3D registerRuntimeCompiler;
  exports.render =3D render;
  exports.renderList =3D renderList;
  exports.renderSlot =3D renderSlot;
  exports.resolveComponent =3D resolveComponent;
  exports.resolveDirective =3D resolveDirective;
  exports.resolveDynamicComponent =3D resolveDynamicComponent;
  exports.resolveFilter =3D resolveFilter;
  exports.resolveTransitionHooks =3D resolveTransitionHooks;
  exports.setBlockTracking =3D setBlockTracking;
  exports.setDevtoolsHook =3D setDevtoolsHook;
  exports.setTransitionHooks =3D setTransitionHooks;
  exports.shallowReactive =3D shallowReactive;
  exports.shallowReadonly =3D shallowReadonly;
  exports.shallowRef =3D shallowRef;
  exports.ssrContextKey =3D ssrContextKey;
  exports.ssrUtils =3D ssrUtils;
  exports.stop =3D stop;
  exports.toDisplayString =3D toDisplayString;
  exports.toHandlerKey =3D toHandlerKey;
  exports.toHandlers =3D toHandlers;
  exports.toRaw =3D toRaw;
  exports.toRef =3D toRef;
  exports.toRefs =3D toRefs;
  exports.toValue =3D toValue;
  exports.transformVNodeArgs =3D transformVNodeArgs;
  exports.triggerRef =3D triggerRef;
  exports.unref =3D unref;
  exports.useAttrs =3D useAttrs;
  exports.useCssModule =3D useCssModule;
  exports.useCssVars =3D useCssVars;
  exports.useHost =3D useHost;
  exports.useId =3D useId;
  exports.useModel =3D useModel;
  exports.useSSRContext =3D useSSRContext;
  exports.useShadowRoot =3D useShadowRoot;
  exports.useSlots =3D useSlots;
  exports.useTemplateRef =3D useTemplateRef;
  exports.useTransitionState =3D useTransitionState;
  exports.vModelCheckbox =3D vModelCheckbox;
  exports.vModelDynamic =3D vModelDynamic;
  exports.vModelRadio =3D vModelRadio;
  exports.vModelSelect =3D vModelSelect;
  exports.vModelText =3D vModelText;
  exports.vShow =3D vShow;
  exports.version =3D version;
  exports.warn =3D warn;
  exports.watch =3D watch;
  exports.watchEffect =3D watchEffect;
  exports.watchPostEffect =3D watchPostEffect;
  exports.watchSyncEffect =3D watchSyncEffect;
  exports.withAsyncContext =3D withAsyncContext;
  exports.withCtx =3D withCtx;
  exports.withDefaults =3D withDefaults;
  exports.withDirectives =3D withDirectives;
  exports.withKeys =3D withKeys;
  exports.withMemo =3D withMemo;
  exports.withModifiers =3D withModifiers;
  exports.withScopeId =3D withScopeId;

  return exports;

})({});
</pre></body></html>
------MultipartBoundary--rguc72PgCYiaB5Chly3h058foHyOxr2k0sOz7PdVcO----
Content-Type: text/css
Content-Transfer-Encoding: quoted-printable
Content-Location: cid:css-7065c238-4842-455b-b610-47f2775ec168@mhtml.blink

@charset "utf-8";

ins[class*=3D"adsbygoogle"], ins[class*=3D"adsbyadop"], [id*=3D"div-gpt-ad"=
], amp-ad { display: none !important; }
------MultipartBoundary--rguc72PgCYiaB5Chly3h058foHyOxr2k0sOz7PdVcO------
