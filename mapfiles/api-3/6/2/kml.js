google.maps.__gjsload__('kml', 'function Sx(a,b){if(a&&L(b)){var c=Kj(a,b);return m[Ab](c.x*c.x+c.y*c.y)}}function Tx(a,b,c,d,e){if(a&&b&&L(c)&&(b=Fg(a,b,c))){if(d&&(a=Sx(a,c))&&a!=Lh)c=b.x-d.x,c=qd(c,-(a/2),a/2),b.x=d.x+c;return new T(b.x-e[s],b.y-e[G])}return j}function Ux(a){this.j=a||[]}function Vx(a){this.j=a||[]}function Wx(a){this.j=a||[]}function Xx(a){this.j=a||[]}function Yx(a){this.j=a||[]}function Zx(a){this.j=a||[]}function $x(a){this.j=a||[]}function ay(a){this.j=a||[]}function by(a){this.j=a||[]}\nfunction cy(a){this.j=a||[]}function dy(a){this.j=a||[]}function ey(){this.j=[]}function fy(a){this.j=a||[]}Ra(Ux[B],function(){var a=this.j[0];return a!=j?a:""});Ra(Vx[B],function(){var a=this.j[0];return a!=j?a:""});var gy=new Xx;function hy(a){return(a=a.j[4])?new Xx(a):gy}var iy=new Yx,jy=new Vx,ky=new Sj,ly=new Vx,my=new $x;function ny(a){return(a=a.j[1])?new $x(a):my}var oy=new $x;function py(a){return(a=a.j[2])?new $x(a):oy}var qy=new by;function ry(a){return(a=a.j[3])?new by(a):qy}\nfunction sy(a){a=a.j[0];return a!=j?a:0}function ty(a){a=a.j[1];return a!=j?a:0}var uy=new Zx;function vy(a){return(a=a.j[0])?new Zx(a):uy}var wy=new Zx;function xy(a){return(a=a.j[1])?new Zx(a):wy}function yy(a){a=a.j[0];return a!=j?a:0}var zy=new Zx;function Ay(a){return(a=a.j[1])?new Zx(a):zy}var By=new ay;function Cy(a){return(a=a.j[0])?new ay(a):By}var Dy=new ay;function Ey(a){return(a=a.j[1])?new ay(a):Dy}var Fy=new fy;dy[B].Ea=function(){var a=this.j[0];return a!=j?a:-1};var Gy=new cy,Hy=new Sj;\ndy[B].getDefaultViewport=function(){var a=this.j[4];return a?new Sj(a):Hy};function Iy(a){this.b=a}Th(Iy[B],function(a,b){var c=new Ux;c.j[0]=a;var c=Qc(c.j,[{type:"s",label:1}]),d=N(this,this.e,b),e=N(this,this.d,b);this.b(c,d,e)});Iy[B].d=function(a){a(j)};Iy[B].e=function(a,b){a(new dy(b))};function Jy(a){this.d=0;this.b=[];this.e=a}Th(Jy[B],function(a,b){this.d++;b=Nd(N(this,this.f,b));this.e[si](a,b)});Jy[B].f=function(a,b){this.b[n](N(j,a,b));this.d--;if(this.d==0){for(var c=0;c<this.b[A];++c)this.b[c]();this.b=[]}};function Ky(){Hg[ec](this)}K(Ky,Hg);Ky[B].projection_changed=function(){Ly(this)};zn(Ky[B],function(){Ly(this)});Ky[B].projectionBounds_changed=function(){this.L()};Ky[B].T=function(){var a=this.get("projectionBounds"),b=this.get("zoom"),c=this.get("projection");if(a&&c&&L(b)){a=gf(a.D,a.C,a.H,a.I);b=Kj(c,b);c=(a.D+a.H)/2;b=c-qd(c,0,m[Ab](b.x*b.x+b.y*b.y));a.H-=b;a.D-=b;if(!this.b||!this.b.hb(a))b=a[ri](),a=Fo(a),this.b=new ff([new T(b.x-a[s],b.y-a[G]),new T(b.x+a[s],b.y+a[G])]);Ly(this)}};\nfunction Ly(a){if(a.b){var b;b=a.get("projection");var c=a.get("bounds"),d=a.get("zoom");b=!b||!c||!L(d)?i:Oj(b,c,d);b=gf(ed(a.b.D,b.D),ed(a.b.C,b.C),fd(a.b.H,b.H),fd(a.b.I,b.I));if(!b[ub](a.d))a.set("croppedBounds",b),a.d=b}};function My(a,b){return{Ob:function(b,d){if(d)return j;var e=j,f=b.latLng;a[yb](function(a){if(!e){var b=a.get("bounds");b&&b[nc](f)&&a.get("clickable")!=!1&&(e=a)}});return e},zb:function(a,d,e){a==Dj?b.set("cursor","pointer"):a==Cj&&b.set("cursor",j);R[q](e,a,d)},zIndex:2}};function Ny(a,b){Hg[ec](this);this.d=a;this.b=b}K(Ny,Hg);Ca(Ny[B],function(a){(a=="bounds"||a=="zoom"||a=="projection")&&this.L()});\nNy[B].T=function(){var a=this.get("projection"),b=this.get("bounds"),c=this.get("zoom");Oy(this);if(a&&b&&L(c)&&!b[Wa]())for(var d=m[u](b.C),b=m[u](b.I),e=this.get("projection"),f=this.get("zoom"),g=this.d,a=(new P(g.ba.d,g.V.d,!0)).lng(),c=(new P(g.ba.b,g.V.b,!0)).lng(),e=Oj(e,g,f),e=m[u](Fo(e)[s]),g=g[pb]().lat()-g[Vb]().lat(),h=Py(this,d),o=d;d<=b;++d){var f=Py(this,d),p;p=o;var t=d,y=h,z=f,H=(y+z)/2,V=Py(this,(p+t)/2);p=bd((V-H)*((p-t)/(z-y)));t=bd(d-o);if(p>=1&&t>10||d==b)p=new P(f,c),h=new P(h,\na),o=new U(e,d-o),h=new Vd(p,h),p=g,t=h[pb]().lat(),y=h[Vb]().lat(),y=o[G]/(t-y),t=(this.d[pb]().lat()-t)*y,p=bd(p*y),t=new T(0,t),h=h[pb](),this.b.Z({f:t,position:h,e:o,scaledSize:new U(o[s],p)}),o=d,h=f}Nd(N(this,this.e))()};function Oy(a){a.b[yb](function(a){a.Yi=!0})}Ny[B].e=function(){this.b[yb](function(a){a.Yi&&this[tb](a)})};function Py(a,b){var c=a.get("projection"),d=a.get("zoom");return Pj(c,new T(0,b),d).lat()};function Qy(a,b,c){Hg[ec](this);this.e=a;this.K=b;this.b=c;this.d={alpha:!0,scale:!0};R[E](c,Ge,N(this,this.Uh));R[E](c,He,N(this,this.xf))}K(Qy,Hg);I=Qy[B];Ca(I,function(){this.L()});\nI.T=function(){if(Eo(this.b)){var a=this.get("projection"),b=this.get("zoom"),c=this.get("center"),d=this.get("offset"),e=this.get("latLngBounds");if(L(b)&&e&&a&&d&&c){var f;f=e[Vb]();f=Tx(a,f,b,c,d);var e=e[pb](),e=Tx(a,e,b,c,d),g=Sx(a,b);e.x=qd(e.x,f.x,f.x+g);if((f=new ff([f,e]))&&!f[ub](this.f))this.f=f,this.b[yb](N(this,this.xf)),this.b[yb](N(this,this.og,a,b,c,d))}}};\nI.Uh=function(a){var b=this.get("projection"),c=this.get("zoom"),d=this.get("center"),e=this.get("offset");b&&L(c)&&e&&d&&this.og(b,c,d,e,a)};I.og=function(a,b,c,d,e){e.d=Tx(a,e[Si],b,c,d);e.b=Ro(this.e,this.K,e.f,e.e,e.d,e[Rn],this.d)};I.xf=function(a){if(a.b)Wo(a.b),a.b=j};function Ry(a,b,c){this.b=N(j,Pm,a,b,$m+"/maps/api/js/KmlOverlayService.GetFeature",c)}Th(Ry[B],function(a,b){var c=new ey;c.j[0]=a.aa;c.j[1]=a.te;c=Qc(c.j,[{type:"s",label:1},{type:"s",label:1}]);this.b(c,b,b);return c});Rh(Ry[B],function(){aa(ka("Not implemented"))});function Sy(){}function Ty(a,b){if(ty(a)==0)return sy(a)*b;else if(ty(a)==2)return b-sy(a);else if(ty(a)==1)return sy(a)}function Uy(a,b,c){return yy(a)==2?(a=ty(Ay(a))==0?sy(Ay(a))*b:sy(Ay(a)),a/c):1};function Vy(a,b){this.e=a;this.b=b;this.d=j;R[E](this.b,Ge,N(this,this.Mf));R[E](this.b,He,N(this,this.Nf))}K(Vy,W);I=Vy[B];I.innerContainer_changed=function(){var a=this.K;this.K=this.get("innerContainer");this.d&&(R[kb](this.d),delete this.d);a&&this.b[yb](N(this,this.Nf));this.d=R[x](this.K,kk,this,this.oi);this.b[yb](N(this,this.Mf))};I.oi=function(){var a=this;Nd(function(){a.b[yb](N(a,a.wg))})()};\nI.Mf=function(a){if(this.K){var b=Jg(this.K),b=$("div",this.K,new T(b[s],b[G]));gl(b);Nk(b,2);a.oa=b;b=$("div",a.oa,new T(0,0),j,!0);gl(b);a.d=b;var b={alpha:!0,scale:!0,La:N(this,this.Wh,a)},c=a.b.j[0];a.ca=Ml((c?new Vx(c):ly)[qj](),a.oa,j,j,b)}};I.Nf=function(a){Yj(a.oa);Yj(a.d);a.ca&&Yj(a.ca);a.oa=j;a.ca=j;a.d=j};I.Wh=function(a,b,c){if(a.oa&&c)a.ca=c,gl(c),this.wg(a)};\nI.wg=function(a){var b=Jg(this.K),c=new U(yy(Cy(ry(a.b)))==0?Jg(a.ca)[s]:yy(Cy(ry(a.b)))==2?Ty(Ay(Cy(ry(a.b))),b[s]):Jg(a.ca)[s]*Uy(Ey(ry(a.b)),b[G],Jg(a.ca)[G]),yy(Ey(ry(a.b)))==0?Jg(a.ca)[G]:yy(Ey(ry(a.b)))==2?Ty(Ay(Ey(ry(a.b))),b[G]):Jg(a.ca)[G]*Uy(Cy(ry(a.b)),b[s],Jg(a.ca)[s])),d=Ty(vy(py(a.b)),b[s]),e=Ty(xy(py(a.b)),b[G]),e=b[G]-e-c[G];Ok(a.oa,new T(d-Ty(vy(ny(a.b)),c[s]),e+Ty(xy(ny(a.b)),c[G])));Ig(a.oa,c);Ig(a.ca,c);Ig(a.d,c)};function Wy(a,b){if(!b.B){var c=N(j,Pm,l,Rf,$m+"/maps/api/js/KmlOverlayService.GetOverlays",Qf);b.B=new Jy(new Iy(c))}if(!a.l)a.l=vk(function(c){c=N(j,Xy,c);b.B[si](a.get("url"),c)});a.l(N(j,Yy,a))}\nfunction Yy(a,b,c,d,e,f){var g=a.get("map");if(g){var h=Ww.Oa(g),o=Zy(g);a.e=e;a.d=f;c&&a.set("defaultViewport",c);a.set("metadata",d);c=new Ry(l,Rf,Qf);d=zl(c);e=new rw;e.aa=b;e.d=N(d,d[si]);yn(e,a.get("clickable")!=!1);a.$a=e;h[n](e);if(!a.f)a.f=R[E](e,Q,N(a,$y,a,g));for(b=a.e[A]-1;b>=0;--b)o.Z(a.e[b]);for(b=0;b<a.d[A];++b)o=a.d[b],o.gc.set("map",g),o.gc[r]("clickable",a),az(c,o,a,g);o=a.get("preserveViewport");c=a.get("defaultViewport");!o&&c&&g[tc](c);a.Ua=new Lf;R[E](a,"clickable_changed",function(){yn(a.$a,\na.get("clickable")!=!1)})}}function az(a,b,c,d){var e=new sw(c.$a.aa,b.aa),c=N(c,bz,c,d,b.gc.get("bounds")[ri](),j),a=N(a,a[si],e,c);b.md=R[E](b.gc,Q,a)}function bz(a,b,c,d,e){var f={};f.latLng=c;f.pixelOffset=d;if(!e.infoWindowHtml){var g=cz(e),h="";g&&(h=l[vb]("div"),h[Va](g),h=h[In]);e.infoWindowHtml=h}f.featureData=e;R[q](a,Q,f);if(!a.get("suppressInfoWindows")&&a.Ua&&(e=cz(e)))a.Ua.setOptions({pixelOffset:d,position:c,content:e}),a.Ua[Fn](b)}function $y(a,b,c,d,e,f){bz(a,b,d,e,f)}\nfunction cz(a){var b=$("div",j,j,j,j,{style:"font-family: Arial, sans-serif; font-size: small"});if(a.info_window_html)Vo(b,a.info_window_html);else if(a[Jb]||a[wo]){if(a[Jb]){var c=$("div",b,j,j,j,{style:"font-weight: bold; font-size: medium; margin-bottom: 0em"});fl(a[Jb],c)}a[wo]&&(c=$("div",b),Vo(c,a[wo]))}else return j;return b}\nfunction Xy(a,b){if(b&&a&&b.Ea()==0){for(var c=[],d=[],e=0;e<Jj(b.j,5);++e){var f=new Wx(Vc(b.j,5)[e]);if(f.j[5]!=j)f=f.j[5],d[n]({b:f?new Yx(f):iy});else if(f.j[4]!=j){var g=hy(f).j[1],g=dz(g?new Sj(g):ky),h=hy(f).j[0],g=new Tf((h?new Vx(h):jy)[qj](),g),f=f.j[0];c[n]({gc:g,aa:f!=j?f:""})}}e=b.j[1];f=b.j[2];e=(e!=j?e:"")+(f!=j?f:"");f=dz(b.getDefaultViewport());g=b.j[3];if(g=g?new cy(g):Gy){var o;o=(h=g.j[3])?new fy(h):Fy;var h={},p=o.j[0];Fa(h,p!=j?p:"");p=o.j[2];h.email=p!=j?p:"";o=o.j[1];h.uri=\no!=j?o:"";o={};p=g.j[0];Fa(o,p!=j?p:"");p=g.j[1];o.description=p!=j?p:"";g=g.j[2];o.snippet=g!=j?g:"";o.author=h;g=o}else g=j;a(e,f,g,d,c)}}function Zy(a){if(!a.e)a.e=new wf,(new Vy(new Sy,a.e))[r]("innerContainer",a.O());return a.e}\nfunction ez(a,b){var c=j,d=Ww.Oa(b);d[yb](function(b,d){b==a.$a&&(c=d)});c!=j&&d[Fb](c);a.f&&(R[kb](a.f),delete a.f);var e=Zy(b);if(a.e)for(d=0;d<a.e[A];++d)e[tb](a.e[d]);if(a.d)for(d=0;d<a.d[A];++d)e=a.d[d],e.gc.set("map",j),R[kb](e.md),delete e.md;a.Ua[jo]();delete a.Ua}function dz(a){var b=new P(Ij(Vj(a)),Gj(Vj(a))),a=new P(Ij(Tj(a)),Gj(Tj(a)));return new Vd(a,b)};function fz(){}fz[B].mk=function(a){var b=a.b,c=a.b=a.get("map");b&&ez(a,b);c&&Wy(a,c)};\nfz[B].pi=function(a,b){if(b&&!b.R){var c=b.R=My(b.d,b.O());Do(b.gb,c)}a.d&&(a.d.set("bounds",j),a.e[Ci](),a.d[Ci](),a.f[Ci](),delete a.e,delete a.d,delete a.f);if(b){var c=a.get("bounds"),d=a.get("url"),e=b.O(),f=e.get("panes").overlayLayer,g=new wf;a.l=g;var h=new Ky;h[r]("projectionBounds",e);h[r]("projectionTopLeft",e);h[r]("projection",b);h[r]("zoom",b);h.set("bounds",c);a.e=h;var o=new Ny(c,g);o[r]("zoom",b);o[r]("projection",b);o[r]("bounds",h,"croppedBounds");a.d=o;d=new Qy(d,f,g);d[r]("offset",\ne);d[r]("zoom",b);d[r]("center",e,"projectionCenterQ");d[r]("projection",b);d[r]("clickable",a);d.set("latLngBounds",c);a.f=d;R[C](d,Q,a)}};var gz=new fz;Ve.kml=function(a){eval(a)};Ye("kml",gz);\n')