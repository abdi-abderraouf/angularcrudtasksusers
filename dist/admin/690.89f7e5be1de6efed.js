"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[690],{5690:(M,u,n)=>{n.r(u),n.d(u,{AuthModule:()=>U});var c=n(6895),g=n(9373),o=n(4006),l=n(529),a=n(9299),t=n(4650);let p=(()=>{class e{constructor(r){this.http=r}register(r){return this.http.post("https://crud-hiz5.onrender.com/auth/createAccount",r)}}return e.\u0275fac=function(r){return new(r||e)(t.LFG(l.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var f=n(7185),h=n(4859),m=n(9549),v=n(4144);const Z=[{path:"",component:(()=>{class e{constructor(r,s,d,y){this.formBuilder=r,this.router=s,this.service=d,this.toaster=y}ngOnInit(){this.registerForm=this.formBuilder.group({firstName:["",o.kI.required],lastName:["",o.kI.required],username:["",o.kI.required],email:["",[o.kI.required,o.kI.email]],password:["",[o.kI.required,o.kI.minLength(3),o.kI.maxLength(20)]],role:["admin"]})}register(){this.service.register(this.registerForm.value).subscribe(r=>{this.toaster.success("success you are registered in our site","register success"),this.router.navigate(["/tasks"])},r=>{this.toaster.error("try again ","register error")})}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(o.qu),t.Y36(a.F0),t.Y36(p),t.Y36(f._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:45,vars:1,consts:[[1,"login","d-flex","justify-content-center","align-items-center","m-auto"],[1,"row"],[1,"col-md-6","p-0"],[1,"overlay"],["src","../../../../assets/welcome.jpg","alt",""],[1,"col-md-6"],[1,"h-100","d-flex","align-items-center","justify-content-center","w-100"],[1,"box","w-75"],[3,"formGroup"],["appearance","outline",1,"w-100"],["matInput","","formControlName","lastName","type","LastName","placeholder","LastName"],["matInput","","formControlName","firstName","type","FirstName","placeholder","FirstName"],["matInput","","formControlName","username","type","UserName","placeholder","UserName"],["matInput","","formControlName","email","placeholder","email"],["matInput","","formControlName","password","type","password","placeholder","password"],[1,"d-flex","justify-content-center"],["mat-raised-button","","color","warn",3,"click"]],template:function(r,s){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"div",3)(4,"img",4),t.qZA(),t.TgZ(5,"div",5)(6,"div",6)(7,"div",7)(8,"h1"),t._uU(9,"Register"),t.qZA(),t.TgZ(10,"form",8)(11,"mat-form-field",9)(12,"mat-label"),t._uU(13,"LastName"),t.qZA(),t._UZ(14,"input",10),t.TgZ(15,"mat-error"),t._uU(16,"required"),t.qZA()(),t.TgZ(17,"mat-form-field",9)(18,"mat-label"),t._uU(19,"FirstName"),t.qZA(),t._UZ(20,"input",11),t.TgZ(21,"mat-error"),t._uU(22,"required"),t.qZA()(),t.TgZ(23,"mat-form-field",9)(24,"mat-label"),t._uU(25,"UserName"),t.qZA(),t._UZ(26,"input",12),t.TgZ(27,"mat-error"),t._uU(28,"required"),t.qZA()(),t.TgZ(29,"mat-form-field",9)(30,"mat-label"),t._uU(31,"Email"),t.qZA(),t._UZ(32,"input",13),t.TgZ(33,"mat-error"),t._uU(34,"required"),t.qZA()(),t.TgZ(35,"mat-form-field",9)(36,"mat-label"),t._uU(37,"Password"),t.qZA(),t._UZ(38,"input",14),t.TgZ(39,"mat-error"),t._uU(40,"required"),t.qZA()()(),t.TgZ(41,"div",15)(42,"button",16),t.NdJ("click",function(){return s.register()}),t._uU(43,"Register"),t.qZA()(),t._UZ(44,"div",15),t.qZA()()()()()),2&r&&(t.xp6(10),t.Q6J("formGroup",s.registerForm))},dependencies:[h.lW,m.TO,m.KE,m.hX,v.Nt,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:["*[_ngcontent-%COMP%]{font-family:cursive}.login[_ngcontent-%COMP%]{position:absolute;inset:0}.login[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{position:relative;inset:0;z-index:1}.login[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:50vh}.login[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{z-index:5;width:30%;padding:50px 20px;border:1px solid #ddd;border-radius:15px;box-shadow:0 2px 5px #ca25104d}.login[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;color:#bc1059}.login[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:2px 30px}"]}),e})()}];let C=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.Bz.forChild(Z),a.Bz]}),e})();var A=n(9027);let U=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.q,C,o.u5,o.UX,l.JF,c.ez,A.m]}),e})()}}]);