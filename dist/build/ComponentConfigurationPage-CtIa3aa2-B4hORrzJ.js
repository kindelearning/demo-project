import{cn as I,bn as v,n as z,u as O,q,f5 as R,f7 as G,r as S,f8 as U,j as c,P as h,f9 as T}from"./strapi-yZ8sydA6.js";import{C as $,T as w}from"./Form-C1IcWm1u-Ds7YVivn.js";import{u as Q}from"./hooks-E5u1mcgM-INma7tur.js";import{s as k}from"./objects-D6yBsdmx-CRjd29XA.js";import"./useDragAndDrop-DJ6jqvZN-D5Yb34iA.js";import"./ComponentIcon-u4bIXTFY-Dtd02BBU.js";import"./FieldTypeIcon-CMlNO8PE-6ZeyoPMm.js";import"./getEmptyImage-CjqolaH3.js";const B=I.injectEndpoints({endpoints:e=>({getComponentConfiguration:e.query({query:t=>`/content-manager/components/${t}/configuration`,transformResponse:t=>t.data,providesTags:(t,o,s)=>[{type:"ComponentConfiguration",id:s}]}),updateComponentConfiguration:e.mutation({query:({uid:t,...o})=>({url:`/content-manager/components/${t}/configuration`,method:"PUT",data:o}),transformResponse:t=>t.data,invalidatesTags:(t,o,{uid:s})=>[{type:"ComponentConfiguration",id:s},{type:"ContentTypeSettings",id:"LIST"}]})})}),{useGetComponentConfigurationQuery:D,useUpdateComponentConfigurationMutation:H}=B,K=()=>{const{slug:e}=v(),{toggleNotification:t}=z(),{formatMessage:o}=O(),{_unstableFormatAPIError:s}=q(),{components:f,fieldSizes:E,schema:r,error:i,isLoading:d,isFetching:F}=R(void 0,{selectFromResult:a=>{const y=a.data?.components.find(n=>n.uid===e),C=a.data?.components.reduce((n,u)=>(n[u.uid]=u,n),{}),p=G(y?.attributes,C),m=Object.entries(a.data?.fieldSizes??{}).reduce((n,[u,{default:j}])=>(n[u]=j,n),{});return{isFetching:a.isFetching,isLoading:a.isLoading,error:a.error,components:p,schema:y,fieldSizes:m}}});S.useEffect(()=>{i&&t({type:"danger",message:s(i)})},[i,s,t]);const{data:g,isLoading:x,isFetching:M,error:l}=D(e??"");S.useEffect(()=>{l&&t({type:"danger",message:s(l)})},[l,s,t]);const _=x||d||M||F,b=S.useMemo(()=>g&&!_?V(g,{schema:r,components:f}):{layout:[],components:{},metadatas:{},options:{},settings:U},[g,_,r,f]),[P]=H(),A=async a=>{try{const y=Object.entries(g?.component.metadatas??{}).reduce((p,[m,{edit:n,list:u}])=>{const{__temp_key__:j,size:J,name:W,...N}=a.layout.flatMap(L=>L.children).find(L=>L.name===m)??{};return p[m]={edit:{...n,...N},list:u},p},{}),C=await P({layouts:{edit:a.layout.map(p=>p.children.reduce((m,{name:n,size:u})=>n!==w?[...m,{name:n,size:u}]:m,[])),list:g?.component.layouts.list},settings:k(a.settings,"displayName",void 0),metadatas:y,uid:e});"data"in C?t({type:"success",message:o({id:"notification.success.saved",defaultMessage:"Saved"})}):t({type:"danger",message:s(C.error)})}catch{t({type:"danger",message:o({id:"notification.error",defaultMessage:"An error occurred"})})}};return _?c.jsx(h.Loading,{}):l||i||!r?c.jsx(h.Error,{}):c.jsxs(c.Fragment,{children:[c.jsx(h.Title,{children:`Configure ${b.settings.displayName} Edit View`}),c.jsx($,{onSubmit:A,attributes:r.attributes,fieldSizes:E,layout:b})]})},V=(e,{schema:t,components:o})=>{const s=T(e.component.layouts.edit,t?.attributes,e.component.metadatas,{configurations:e.components,schemas:o}),f=Object.entries(e.components).reduce((r,[i,d])=>(r[i]={layout:T(d.layouts.edit,o[i].attributes,d.metadatas),settings:{...d.settings,icon:o[i].info.icon,displayName:o[i].info.displayName}},r),{}),E=Object.entries(e.component.metadatas).reduce((r,[i,d])=>({...r,[i]:d.edit}),{});return{layout:[s],components:f,metadatas:E,options:{...t?.options,...t?.pluginOptions},settings:{...e.component.settings,displayName:t?.info.displayName}}},it=()=>{const e=Q(t=>t.admin_app.permissions.contentManager?.componentsConfigurations);return c.jsx(h.Protect,{permissions:e,children:c.jsx(K,{})})};export{K as ComponentConfigurationPage,it as ProtectedComponentConfigurationPage};