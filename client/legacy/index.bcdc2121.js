function t(t){var n=t-1;return n*n*n+1}function n(n,o){var a=o.delay,r=void 0===a?0:a,i=o.duration,c=void 0===i?400:i,e=o.easing,d=void 0===e?t:e,s=o.x,u=void 0===s?0:s,v=o.y,f=void 0===v?0:v,p=o.opacity,y=void 0===p?0:p,l=getComputedStyle(n),m=+l.opacity,x="none"===l.transform?"":l.transform,g=m*(1-y);return{delay:r,duration:c,easing:d,css:function(t,n){return"\n\t\t\ttransform: ".concat(x," translate(").concat((1-t)*u,"px, ").concat((1-t)*f,"px);\n\t\t\topacity: ").concat(m-g*n)}}}export{n as f};