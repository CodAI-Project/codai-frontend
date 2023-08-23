(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9140:function(e,a,t){Promise.resolve().then(t.bind(t,512))},8871:function(e,a,t){"use strict";t.d(a,{K:function(){return n}});var r=t(7437);t(2265);var s=t(1396),l=t.n(s);let n=()=>(0,r.jsx)("div",{children:(0,r.jsx)(l(),{href:"/",passHref:!0,children:(0,r.jsx)(i,{children:"CodAI"})})}),i=e=>{let{children:a}=e;return(0,r.jsx)("span",{className:"gradient-text-logo",children:a})}},512:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return ec}});var r=t(7437),s=t(2265);function l(){return(0,r.jsx)("div",{className:"abstract-bg"})}var n=t(3024),[i,o]=(0,n.k)({name:"NavbarContext",strict:!0,errorMessage:"useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />"}),d={enter:{height:"calc(100vh - var(--navbar-height) - 1px)",transition:{duration:.3,easings:"easeOut"}},exit:{height:0,transition:{duration:.25,easings:"easeIn"}}},u=t(4480),c=t(5312),x=t(9762),m=t(8794),f=t(2167),b=t(2979),p=t(2650),v=t(7552),g=t(8769),h=(0,u.Gp)((e,a)=>{var t,l;let{className:n,children:i,portalContainer:u,motionProps:h,style:j,...y}=e,w=(0,c.gy)(a),{slots:N,isMenuOpen:k,height:P,disableAnimation:B,classNames:I}=o(),C=(0,x.W)(null==I?void 0:I.menu,n),W=(0,s.useCallback)(({children:e})=>(0,r.jsx)(v.Z,{forwardProps:!0,enabled:k,removeScrollBar:!1,children:e}),[k]),A=B?(0,r.jsx)(W,{children:(0,r.jsx)("ul",{ref:w,className:null==(t=N.menu)?void 0:t.call(N,{class:C}),"data-open":(0,m.PB)(k),style:{"--navbar-height":P},...y,children:i})}):(0,r.jsx)(f.M,{children:k?(0,r.jsx)(W,{children:(0,r.jsx)(b.E.ul,{ref:w,layoutScroll:!0,animate:"enter",className:null==(l=N.menu)?void 0:l.call(N,{class:C}),"data-open":(0,m.PB)(k),exit:"exit",initial:"exit",style:{"--navbar-height":P,...j},variants:d,...(0,p.dG)(h,y),children:i})}):null});return(0,r.jsx)(g.aV,{portalContainer:u,children:A})});h.displayName="NextUI.NavbarMenu";var j=t(4923),y={visible:{y:0,transition:{ease:j.Lj.easeOut}},hidden:{y:"-100%",transition:{ease:j.Lj.easeIn}}},w=t(6551),N=t(7174),k=(0,w.tv)({slots:{base:["flex","z-40","w-full","h-auto","items-center","justify-center","data-[menu-open=true]:border-none"],wrapper:["z-40","flex","px-6","gap-4","w-full","flex-row","relative","flex-nowrap","items-center","justify-between","h-[var(--navbar-height)]"],toggle:["group","flex","items-center","justify-center","w-6","h-full","outline-none","rounded-small","tap-highlight-transparent",...N.Dh],srOnly:["sr-only"],toggleIcon:["w-full","h-full","pointer-events-none","flex","flex-col","items-center","justify-center","text-inherit","group-data-[pressed=true]:opacity-70","transition-opacity","before:content-['']","before:block","before:h-px","before:w-6","before:bg-current","before:transition-transform","before:duration-150","before:-translate-y-1","before:rotate-0","group-data-[open=true]:before:translate-y-px","group-data-[open=true]:before:rotate-45","after:content-['']","after:block","after:h-px","after:w-6","after:bg-current","after:transition-transform","after:duration-150","after:translate-y-1","after:rotate-0","group-data-[open=true]:after:translate-y-0","group-data-[open=true]:after:-rotate-45"],brand:["flex","basis-0","flex-row","flex-grow","flex-nowrap","justify-start","bg-transparent","items-center","no-underline","text-medium","whitespace-nowrap","box-border"],content:["flex","gap-4","h-full","flex-row","flex-nowrap","items-center","data-[justify=start]:justify-start","data-[justify=start]:flex-grow","data-[justify=start]:basis-0","data-[justify=center]:justify-center","data-[justify=end]:justify-end","data-[justify=end]:flex-grow","data-[justify=end]:basis-0"],item:["text-medium","whitespace-nowrap","box-border","list-none","data-[active=true]:font-semibold"],menu:["z-30","px-6","pt-2","fixed","flex","max-w-full","top-[var(--navbar-height)]","inset-x-0","bottom-0","w-screen","flex-col","gap-2","overflow-y-auto"],menuItem:["text-large"]},variants:{position:{static:{base:"static"},sticky:{base:"sticky top-0 inset-x-0"}},maxWidth:{sm:{wrapper:"max-w-[640px]"},md:{wrapper:"max-w-[768px]"},lg:{wrapper:"max-w-[1024px]"},xl:{wrapper:"max-w-[1280px]"},"2xl":{wrapper:"max-w-[1536px]"},full:{wrapper:"max-w-full"}},hideOnScroll:{true:{base:["sticky","top-0","inset-x-0"]}},isBordered:{true:{base:["border-b","border-divider"]}},isBlurred:{false:{base:"bg-background",menu:"bg-background"},true:{base:["backdrop-blur-lg","data-[menu-open=true]:backdrop-blur-xl","backdrop-saturate-150","bg-background/70"],menu:["backdrop-blur-xl","backdrop-saturate-150","bg-background/70"]}},disableAnimation:{true:{menu:["hidden","h-[calc(100dvh_-_var(--navbar-height)_-_1px)]","data-[open=true]:flex"]}}},defaultVariants:{maxWidth:"lg",position:"sticky",isBlurred:!0}}),P="undefined"!=typeof window;function B(e){return P?e?{x:e.scrollLeft,y:e.scrollTop}:{x:window.scrollX,y:window.scrollY}:{x:0,y:0}}var I=e=>{let{elementRef:a,delay:t=30,callback:r,isEnabled:l}=e,n=(0,s.useRef)(l?B(null==a?void 0:a.current):{x:0,y:0}),i=null,o=()=>{let e=B(null==a?void 0:a.current);"function"==typeof r&&r({prevPos:n.current,currPos:e}),n.current=e,i=null};return(0,s.useEffect)(()=>{if(!l)return;let e=()=>{t?null===i&&(i=setTimeout(o,t)):o()},r=(null==a?void 0:a.current)||window;return r.addEventListener("scroll",e),()=>r.removeEventListener("scroll",e)},[null==a?void 0:a.current,t,l]),n.current},C=t(4114),W=t(8150),A=(0,u.Gp)((e,a)=>{let{children:t,...l}=e,n=function(e){var a;let[t,r]=(0,u.oe)(e,k.variantKeys),{ref:l,as:n,parentRef:i,height:o="4rem",shouldHideOnScroll:d=!1,disableScrollHandler:f=!1,onScrollPositionChange:b,isMenuOpen:v,isMenuDefaultOpen:g,onMenuOpenChange:h=()=>{},motionProps:j,className:y,classNames:w,...N}=t,P=(0,c.gy)(l),B=(0,s.useRef)(0),W=(0,s.useRef)(0),[A,q]=(0,s.useState)(!1),G=(0,s.useCallback)(e=>{h(e||!1)},[h]),[S,z]=(0,C.zk)(v,g,G),O=()=>{if(P.current){let e=P.current.offsetWidth;e!==B.current&&(B.current=e)}};(0,p.yU)({ref:P,onResize:()=>{var e;let a=null==(e=P.current)?void 0:e.offsetWidth;a!==B.current&&(O(),z(!1))}}),(0,s.useEffect)(()=>{var e;O(),W.current=(null==(e=P.current)?void 0:e.offsetHeight)||0},[]);let E=(0,s.useMemo)(()=>k({...r,hideOnScroll:d}),[...Object.values(r),d]),H=(0,x.W)(null==w?void 0:w.base,y);return I({elementRef:i,isEnabled:d||!f,callback:({prevPos:e,currPos:a})=>{null==b||b(a.y),d&&q(t=>{let r=a.y>e.y&&a.y>W.current;return r!==t?r:t})}}),{Component:n||"nav",slots:E,domRef:P,height:o,isHidden:A,disableAnimation:null!=(a=e.disableAnimation)&&a,shouldHideOnScroll:d,isMenuOpen:S,classNames:w,setIsMenuOpen:z,motionProps:j,getBaseProps:(e={})=>({...(0,p.dG)(N,e),"data-hidden":(0,m.PB)(A),"data-menu-open":(0,m.PB)(S),ref:P,className:E.base({class:(0,x.W)(H,null==e?void 0:e.className)}),style:{"--navbar-height":o,...null==e?void 0:e.style}}),getWrapperProps:(e={})=>({...e,"data-menu-open":(0,m.PB)(S),className:E.wrapper({class:(0,x.W)(null==w?void 0:w.wrapper,null==e?void 0:e.className)})})}}({...l,ref:a}),o=n.Component,[d,f]=(0,W.N)(t,h),v=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("header",{...n.getWrapperProps(),children:d}),f]});return(0,r.jsx)(i,{value:n,children:n.shouldHideOnScroll?(0,r.jsx)(b.E.nav,{animate:n.isHidden?"hidden":"visible",initial:!1,variants:y,...(0,p.dG)(n.getBaseProps(),n.motionProps),children:v}):(0,r.jsx)(o,{...n.getBaseProps(),children:v})})});A.displayName="NextUI.Navbar";var q=(0,u.Gp)((e,a)=>{var t;let{as:s,className:l,children:n,justify:i="start",...d}=e,u=s||"ul",m=(0,c.gy)(a),{slots:f,classNames:b}=o(),p=(0,x.W)(null==b?void 0:b.content,l);return(0,r.jsx)(u,{ref:m,className:null==(t=f.content)?void 0:t.call(f,{class:p}),"data-justify":i,...d,children:n})});q.displayName="NextUI.NavbarContent";var G=t(2835),S=t(6565),z=t(6820),O=(0,u.Gp)((e,a)=>{var t;let{as:l,icon:n,className:i,onChange:d,autoFocus:u,srOnlyText:f,...b}=e,v=l||"button",g=(0,c.gy)(a),{slots:h,classNames:j,isMenuOpen:y,setIsMenuOpen:w}=o(),N=function(e={}){let{isReadOnly:a}=e,[t,r]=(0,C.zk)(e.isSelected,e.defaultSelected||!1,e.onChange);return{isSelected:t,setSelected:function(e){a||r(e)},toggle:function(){a||r(!t)}}}({...b,isSelected:y,onChange:e=>{null==d||d(e),w(e)}}),{buttonProps:k,isPressed:P}=function(e,a,t){let{isSelected:r}=a,{isPressed:s,buttonProps:l}=(0,G.j)({...e,onPress:(0,p.tS)(a.toggle,e.onPress)},t);return{isPressed:s,buttonProps:(0,p.dG)(l,{"aria-pressed":r})}}(e,N,g),{isFocusVisible:B,focusProps:I}=(0,S.Fx)({autoFocus:u}),{isHovered:W,hoverProps:A}=(0,z.XI)({}),q=(0,x.W)(null==j?void 0:j.toggle,i),O=(0,s.useMemo)(()=>"function"==typeof n?n(null!=y&&y):n||(0,r.jsx)("span",{className:h.toggleIcon({class:null==j?void 0:j.toggleIcon})}),[n,h.toggleIcon,null==j?void 0:j.toggleIcon]),E=(0,s.useMemo)(()=>f||(N.isSelected?"close navigation menu":"open navigation menu"),[f,y]);return(0,r.jsxs)(v,{ref:g,className:null==(t=h.toggle)?void 0:t.call(h,{class:q}),"data-focus-visible":(0,m.PB)(B),"data-hover":(0,m.PB)(W),"data-open":(0,m.PB)(y),"data-pressed":(0,m.PB)(P),...(0,p.dG)(k,I,A,b),children:[(0,r.jsx)("span",{className:h.srOnly(),children:E}),O]})});O.displayName="NextUI.NavbarMenuToggle";var E=(0,u.Gp)((e,a)=>{var t;let{as:s,className:l,children:n,...i}=e,d=s||"div",u=(0,c.gy)(a),{slots:m,classNames:f}=o(),b=(0,x.W)(null==f?void 0:f.brand,l);return(0,r.jsx)(d,{ref:u,className:null==(t=m.brand)?void 0:t.call(m,{class:b}),...i,children:n})});E.displayName="NextUI.NavbarBrand";var H=(0,u.Gp)((e,a)=>{var t;let{as:s,className:l,children:n,isActive:i,...d}=e,u=s||"li",f=(0,c.gy)(a),{slots:b,classNames:p}=o(),v=(0,x.W)(null==p?void 0:p.item,l);return(0,r.jsx)(u,{ref:f,className:null==(t=b.item)?void 0:t.call(b,{class:v}),"data-active":(0,m.PB)(i),...d,children:n})});H.displayName="NextUI.NavbarItem";var D=t(8871),M=t(1396),U=t.n(M);function _(){let[e,a]=(0,s.useState)(!1);return(0,r.jsxs)(A,{onMenuOpenChange:a,isBlurred:!0,position:"static",maxWidth:"xl",classNames:{base:"lg:px-56 py-2"},children:[(0,r.jsxs)(q,{children:[(0,r.jsx)(O,{"aria-label":e?"Close menu":"Open menu",className:"sm:hidden"}),(0,r.jsx)(E,{children:(0,r.jsx)(D.K,{})})]}),(0,r.jsx)(q,{as:"div",justify:"end",children:(0,r.jsx)(H,{children:(0,r.jsx)(U(),{href:"/login",passHref:!0,children:"Entrar"})})})]})}var F=t(7623);function L(){return(0,r.jsx)("div",{className:"bg-futurist",children:(0,r.jsxs)("div",{className:"relative max-w-full mx-4 md:mx-16 lg:mx-60 my-20 bg-opacity-60 bg-slate-800 backdrop-blur-md rounded-3xl flex flex-col md:flex-row items-center justify-center p-6 md:p-16",children:[(0,r.jsx)("img",{src:"/bg-futuristic.svg",alt:"",className:"absolute top-0 left-0 w-full h-full bg-futuristic blur-0 object-cover rounded-3xl z-0"}),(0,r.jsx)("img",{src:"/fundo-da-main.svg",alt:"",className:"absolute top-0 left-0 w-full h-full object-cover rounded-3xl z-0"}),(0,r.jsxs)("div",{className:"z-10 text-center w-full",children:[(0,r.jsxs)("h1",{className:"text-white text-2xl md:text-4xl font-bold mb-4",children:["Use o poder da"," ",(0,r.jsx)(R,{children:"IA Generativa"})," e crie templates"]}),(0,r.jsx)("p",{className:"text-white text-base md:text-lg mb-8",children:"Descubra como nossa tecnologia de IA generativa pode ajudar voc\xea a criar templates exclusivos e visualmente impressionantes para suas necessidades criativas."}),(0,r.jsxs)("div",{className:"flex flex-col px-12 justify-center md:flex-row gap-10 w-full",children:[(0,r.jsx)(T,{className:"w-full p-7 bg-gradient-to-r text-black from-malibu-300  to-sulu-200",children:"Come\xe7ar a usar"}),(0,r.jsx)(K,{className:"w-full p-7  md:mt-0",children:"Assista a demonstra\xe7\xe3o"})]})]})]})})}let R=e=>{let{children:a}=e;return(0,r.jsx)("span",{className:"gradient-text",children:a})},T=e=>{let{className:a,children:t}=e;return(0,r.jsx)(F.A,{className:"bg-primary-gradient-logo font-bold text-lg py-2 px-4 ".concat(a),children:t})},K=e=>{let{className:a,children:t}=e;return(0,r.jsx)(F.A,{className:"border-gradient border text-white font-bold text-lg py-2 px-4 ".concat(a),variant:"text",children:t})};var[V,X]=(0,n.k)({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"}),Y=(0,w.tv)({slots:{base:["flex","flex-col","relative","overflow-hidden","height-auto","outline-none","text-foreground","box-border","bg-content1",...N.Dh],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-5","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,disableAnimation:!1,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,disableAnimation:!1,isFooterBlurred:!1}}),Z=t(1345),J=t(9142),Q=t(2610),$=(0,u.Gp)((e,a)=>{let{children:t,context:l,Component:n,ripples:i,isPressable:o,disableAnimation:d,disableRipple:f,getCardProps:b}=function(e){let[a,t]=(0,u.oe)(e,Y.variantKeys),{ref:r,as:l,children:n,disableRipple:i=!1,onClick:o,onPress:d,autoFocus:f,className:b,classNames:v,allowTextSelectionOnPress:g=!0,...h}=a,j=(0,c.gy)(r),y=l||(e.isPressable?"button":"div"),w="string"==typeof y,N=(0,x.W)(null==v?void 0:v.base,b),{onClick:k,ripples:P}=(0,J.i)(),B=a=>{e.disableAnimation||i||!j.current||k(a)},{buttonProps:I,isPressed:C}=(0,G.j)({onPress:d,elementType:l,isDisabled:!e.isPressable,onClick:(0,p.tS)(o,B),allowTextSelectionOnPress:g,...h},j),{hoverProps:W,isHovered:A}=(0,z.XI)({isDisabled:!e.isHoverable,...h}),{isFocusVisible:q,isFocused:O,focusProps:E}=(0,S.Fx)({autoFocus:f}),H=(0,s.useMemo)(()=>Y({...t}),[...Object.values(t)]),D=(0,s.useMemo)(()=>({isDisabled:e.isDisabled,isFooterBlurred:e.isFooterBlurred,disableAnimation:e.disableAnimation,fullWidth:e.fullWidth,slots:H,classNames:v}),[H,v,e.isDisabled,e.isFooterBlurred,e.disableAnimation,e.fullWidth]),M=(0,s.useCallback)((a={})=>({ref:j,className:H.base({class:N}),tabIndex:e.isPressable?0:-1,"data-hover":(0,m.PB)(A),"data-pressed":(0,m.PB)(C),"data-focus":(0,m.PB)(O),"data-focus-visible":(0,m.PB)(q),"data-disabled":(0,m.PB)(e.isDisabled),...(0,p.dG)(e.isPressable?{...I,...E,role:"button"}:{},e.isHoverable?W:{},(0,Z.z)(h,{enabled:w}),(0,Z.z)(a))}),[j,H,N,w,e.isPressable,e.isHoverable,e.isDisabled,A,C,q,I,E,W,h]);return{context:D,domRef:j,Component:y,classNames:v,children:n,ripples:P,isHovered:A,isPressed:C,isPressable:e.isPressable,isHoverable:e.isHoverable,disableAnimation:e.disableAnimation,disableRipple:i,handleClick:B,isFocusVisible:q,getCardProps:M}}({...e,ref:a});return(0,r.jsxs)(n,{...b(),children:[(0,r.jsx)(V,{value:l,children:t}),o&&!d&&!f&&(0,r.jsx)(Q.L,{ripples:i})]})});$.displayName="NextUI.Card";var ee=(0,u.Gp)((e,a)=>{var t;let{as:s,className:l,children:n,...i}=e,o=s||"div",d=(0,c.gy)(a),{slots:u,classNames:m}=X(),f=(0,x.W)(null==m?void 0:m.header,l);return(0,r.jsx)(o,{ref:d,className:null==(t=u.header)?void 0:t.call(u,{class:f}),...i,children:n})});ee.displayName="NextUI.CardHeader";var ea=(0,u.Gp)((e,a)=>{var t;let{as:s,className:l,children:n,...i}=e,o=s||"div",d=(0,c.gy)(a),{slots:u,classNames:m}=X(),f=(0,x.W)(null==m?void 0:m.body,l);return(0,r.jsx)(o,{ref:d,className:null==(t=u.body)?void 0:t.call(u,{class:f}),...i,children:n})});ea.displayName="NextUI.CardBody";var et=t(9571),er=(0,u.Gp)((e,a)=>{var t;let{as:s,className:l,children:n,...i}=e,o=s||"div",d=(0,c.gy)(a),{slots:u,classNames:m}=X(),f=(0,x.W)(null==m?void 0:m.body,l);return(0,r.jsx)(o,{ref:d,className:null==(t=u.footer)?void 0:t.call(u,{class:f}),...i,children:n})});er.displayName="NextUI.CardFooter";var es=e=>{let{image:a,title:t,description:s}=e;return(0,r.jsxs)($,{isPressable:!0,className:"group lg:max-w-[31%] p-4 border-2 border-opacity-50 border-bright-turquoise-400 shadow-neon",children:[(0,r.jsx)(ee,{className:"flex gap-3",children:(0,r.jsx)("img",{className:"",alt:"nextui logo",height:50,radius:"sm",src:a,width:50})}),(0,r.jsx)(ea,{className:"text-xl",children:t}),(0,r.jsx)(et.j,{}),(0,r.jsx)(er,{children:s})]})};let el=[{image:"./clock.svg",title:"Gere rapidamente c\xf3digos e gere na hora",description:"\xc9 um fato conhecido de todos que um leitor se distrair\xe1 com o conte\xfado de texto leg\xedvel de uma p\xe1gina quando estiver examinando sua diagrama\xe7\xe3o. A vantagem de usar Lorem Ipsum \xe9 que ele tem uma distribui\xe7\xe3o normal de letras, ao contr\xe1rio de 'Conte\xfado aqui, conte\xfado aqui', fazendo com que ele tenha uma apar\xeancia similar"},{image:"./code.svg",title:"Edite os c\xf3digos junto com a IA",description:"\xc9 um fato conhecido de todos que um leitor se distrair\xe1 com o conte\xfado de texto leg\xedvel de uma p\xe1gina quando estiver examinando sua diagrama\xe7\xe3o. A vantagem de usar Lorem Ipsum \xe9 que ele tem uma distribui\xe7\xe3o normal de letras, ao contr\xe1rio de 'Conte\xfado aqui, conte\xfado aqui', fazendo com que ele tenha uma apar\xeancia similar"},{image:"./cloud.svg",title:"Baixe o projeto direto pra sua m\xe1quina",description:"\xc9 um fato conhecido de todos que um leitor se distrair\xe1 com o conte\xfado de texto leg\xedvel de uma p\xe1gina quando estiver examinando sua diagrama\xe7\xe3o. A vantagem de usar Lorem Ipsum \xe9 que ele tem uma distribui\xe7\xe3o normal de letras, ao contr\xe1rio de 'Conte\xfado aqui, conte\xfado aqui', fazendo com que ele tenha uma apar\xeancia similar"}];var en=()=>(0,r.jsxs)("div",{className:"relative max-w-full mx-4 md:mx-16 lg:mx-60 my-20 flex flex-col md:flex-col",children:[(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("h1",{className:"text-3xl",children:"Eleve seus projetos"}),(0,r.jsx)("img",{className:"ml-28 mb-4",alt:"",src:"/vector-498.svg"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("h2",{className:"text-xl",children:"Inicialize suas ideias, de uma maneira mais pr\xe1tica e r\xe1pida"})}),(0,r.jsx)("div",{className:"my-5 "}),(0,r.jsx)("div",{className:"flex flex-row gap-5 flex-wrap justify-center",children:el.map((e,a)=>(0,r.jsx)(es,{image:e.image,title:e.title,description:e.description},a))})]});function ei(){return(0,r.jsxs)("div",{className:"max-w-fullbackdrop-blur-md flex flex-col md:flex-row items-center justify-center p-6 md:p-16 relative",children:[(0,r.jsx)("img",{src:"/fundo-partnes.svg",alt:"",className:"absolute w-full h-full z-0",style:{boxShadow:"rgba(255, 255, 255, 0.1) 0px 14px 13px -1px inset"}}),(0,r.jsxs)("div",{className:"flex flex-row gap-8 md:flex-row",children:[(0,r.jsx)("img",{src:"/plusoft.svg",alt:"",className:"w-40 h-auto"}),(0,r.jsx)("img",{src:"/fiap.svg",alt:"",className:"w-32 h-auto"})]})]})}var eo=()=>(0,r.jsxs)("footer",{className:"py-6",children:[(0,r.jsx)("hr",{className:"w-full border-1 opacity-50  border-white my-4"}),(0,r.jsx)("p",{className:"text-center opacity-50 text-white",children:"\xa9 CodAI 2023"})]});function ed(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(l,{}),(0,r.jsx)(_,{}),(0,r.jsx)(L,{}),(0,r.jsx)(en,{}),(0,r.jsx)(ei,{}),(0,r.jsx)("div",{className:"py-10"}),(0,r.jsx)(eo,{})]})}var eu=t(7415);function ec(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(ed,{}),(0,r.jsx)(eu.Ix,{})]})}}},function(e){e.O(0,[529,623,769,396,841,927,971,596,744],function(){return e(e.s=9140)}),_N_E=e.O()}]);