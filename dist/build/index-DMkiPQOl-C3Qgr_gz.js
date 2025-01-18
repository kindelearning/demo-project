import{g as A,aH as R,k as d,i as u,j as a,P as o,v as h,u as L,n as I,Y as P,m as z,o as N,q as B,t as C,w as H,x as k,l as e,Z as q,b as m,S as O,a0 as Q,B as U,F as $,T as D,Q as g,_ as G}from"./strapi-DYsZX9B9.js";const W=[{label:{id:e("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},hint:{id:e("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"boolean",size:12},{label:{id:e("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},hint:{id:e("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"boolean",size:12},{label:{id:e("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},hint:{id:e("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:e("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"string",size:12},{label:{id:e("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},hint:{id:e("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"boolean",size:12},{label:{id:e("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},hint:{id:e("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:e("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"string",size:12}],p=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),V=A().shape({email_confirmation_redirection:R().when("email_confirmation",{is:!0,then:d().matches(p).required(),otherwise:d().nullable()}),email_reset_password:d(u.string).matches(p,{id:u.regex.id,defaultMessage:"This is not a valid URL"}).nullable()}),Z=()=>a.jsx(o.Protect,{permissions:h.readAdvancedSettings,children:a.jsx(X,{})}),X=()=>{const{formatMessage:t}=L(),{toggleNotification:r}=I(),{notifyStatus:f}=P(),b=z(),{get:v,put:y}=N(),{formatAPIError:M}=B(),{isLoading:S,allowedActions:{canUpdate:x}}=C({update:h.updateAdvancedSettings}),{isLoading:w,data:l}=H(["users-permissions","advanced"],async()=>{const{data:i}=await v("/users-permissions/advanced");return i},{onSuccess(){f(t({id:e("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){r({type:"danger",message:t({id:e("notification.error"),defaultMessage:"An error occured"})})}}),E=S||w,c=k(i=>y("/users-permissions/advanced",i),{async onSuccess(){await b.invalidateQueries(["users-permissions","advanced"]),r({type:"success",message:t({id:e("notification.success.saved"),defaultMessage:"Saved"})})},onError(i){r({type:"danger",message:M(i)})},refetchActive:!0}),{isLoading:F}=c,_=async i=>{c.mutate({...i,email_confirmation_redirection:i.email_confirmation?i.email_confirmation_redirection:""})};return E?a.jsx(o.Loading,{}):a.jsxs(o.Main,{"aria-busy":F,children:[a.jsx(o.Title,{children:t({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:t({id:e("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})})}),a.jsx(q,{onSubmit:_,initialValues:l.settings,validationSchema:V,children:({values:i,isSubmitting:T,modified:j})=>a.jsxs(a.Fragment,{children:[a.jsx(m.Header,{title:t({id:e("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:a.jsx(O,{loading:T,type:"submit",disabled:!j||!x,startIcon:a.jsx(Q,{}),size:"S",children:t({id:"global.save",defaultMessage:"Save"})})}),a.jsx(m.Content,{children:a.jsx(U,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:a.jsxs($,{direction:"column",alignItems:"stretch",gap:4,children:[a.jsx(D,{variant:"delta",tag:"h2",children:t({id:"global.settings",defaultMessage:"Settings"})}),a.jsx(g.Root,{gap:6,children:[{label:{id:e("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"},hint:{id:e("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."},options:l.roles.map(n=>({label:n.name,value:n.type})),name:"default_role",size:6,type:"enumeration"},...W].map(({size:n,...s})=>a.jsx(g.Item,{col:n,direction:"column",alignItems:"stretch",children:a.jsx(G,{...s,disabled:s.name==="email_confirmation_redirection"&&i.email_confirmation===!1,label:t(s.label),hint:s.hint?t(s.hint):void 0,placeholder:s.placeholder?t(s.placeholder):void 0})},s.name))})]})})})]})})]})};export{X as AdvancedSettingsPage,Z as ProtectedAdvancedSettingsPage};
