"use strict";
(self["webpackChunkPortfolio"] = self["webpackChunkPortfolio"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 2284);
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments/comments.component */ 3742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent },
    { path: 'rate/:id', component: _comments_comments_component__WEBPACK_IMPORTED_MODULE_1__.CommentsComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);



class AppComponent {
    constructor() {
        this.title = 'Portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar")(1, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ 2284);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ 5609);
/* harmony import */ var _services_projectsapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/projectsapi.service */ 1098);
/* harmony import */ var _testing_testing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testing/testing.component */ 6042);
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comments/comments.component */ 3742);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var ngx_hide_on_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-hide-on-scroll */ 3103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_services_projectsapi_service__WEBPACK_IMPORTED_MODULE_5__.ProjectsapiService], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
        ngx_hide_on_scroll__WEBPACK_IMPORTED_MODULE_14__.NgxHideOnScrollModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent,
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent,
        _testing_testing_component__WEBPACK_IMPORTED_MODULE_6__.TestingComponent,
        _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__.CommentsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
        ngx_hide_on_scroll__WEBPACK_IMPORTED_MODULE_14__.NgxHideOnScrollModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 3742:
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsComponent": () => (/* binding */ CommentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-animate */ 1921);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);










function CommentsComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const project_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", project_r7.name, " ");
} }
function CommentsComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Kindly input your Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CommentsComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Kindly input a comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CommentsComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fill_r8 = ctx.fill;
    const index_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("filled", fill_r8 === 100)("bad", index_r9 < 5);
} }
function CommentsComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fill_r10 = ctx.fill;
    const index_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("filled", fill_r10 === 100)("bad", index_r11 < 5);
} }
function CommentsComponent_ng_template_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fill_r12 = ctx.fill;
    const index_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("filled", fill_r12 === 100)("bad", index_r13 < 5);
} }
class CommentsComponent {
    constructor(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.data = [];
        this.alert = false;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.allComments;
        this.id = '';
        this.byId = '';
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            design_rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            user_rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            content_rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            project: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
        });
        this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.myForm.patchValue({
            project: this.id,
        });
        this.projectsById();
    }
    getText(data) {
        if (this.myForm.valid) {
            this.myForm.reset();
            this.alert = true;
        }
        this.http
            .post(this.url, data)
            .toPromise()
            .then((data) => { });
        console.log(data);
    }
    toggle() {
        if (this.ctrl.disabled) {
            this.ctrl.enable();
        }
        else {
            this.ctrl.disable();
        }
    }
    projectsById() {
        this.id = this.route.snapshot.params.id;
        this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.projectsById + this.id)
            .subscribe((response) => {
            this.byId = response;
        });
        console.log('id' + this.id);
    }
}
CommentsComponent.ɵfac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
CommentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CommentsComponent, selectors: [["app-comments"]], decls: 80, vars: 7, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "container"], [1, "half"], [1, "text"], [1, "image-container"], ["src", "assets/images/comp1.jpg", "alt", "image", 1, "image"], [1, "buttons"], ["href", "#about"], [1, "btn"], ["href", ""], ["href", "#projects"], [1, "half2"], [1, "form-title"], ["class", "block-items", 4, "ngFor", "ngForOf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["testForm", "ngForm"], [1, "form-group"], ["type", "text", "formControlName", "name", 1, "form-control"], ["style", "color: red;", 4, "ngIf"], ["type", "email", "placeholder", "(Optional)", "formControlName", "email", 1, "form-control"], ["type", "text", "rows", "10", "formControlName", "comment", 1, "form-control"], ["type", "number", "formControlName", "design_rating", 1, "review", 3, "max"], ["named", "user", "type", "number", "formControlName", "user_rating", 1, "review", 3, "max"], ["type", "number", "formControlName", "content_rating", 1, "review", 3, "max"], ["type", "submit", 1, "btn", "btn-primary"], [1, "block-items"], [2, "color", "red"], [1, "star"]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 1)(3, "meta", 2)(4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "body")(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Kindly rate the site in order to help improve it further.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br")(14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Kindly follow the \"live link\" button below to go to the site and explore if you are yet to.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br")(18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " You can rate it based on the design, The User Experience and the Content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " You can also leave a comment on which parts of the site you liked and which ones you feel could use some improvement, and i will work on getting them to perfect quality as well as take your comments into consideration on future projects.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " If you wish you can leave your email address and I can let you know when your suggestions have been implemented either on the current or a future project.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br")(28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Thank you in advance for your feedback ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 9)(33, "a", 10)(34, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Live site");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 12)(37, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 13)(40, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "All Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 14)(43, "div", 15)(44, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Kindly rate the site");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, CommentsComponent_div_46_Template, 3, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "form", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CommentsComponent_Template_form_ngSubmit_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](48); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.getText(_r1.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 19)(50, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, CommentsComponent_div_53_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, CommentsComponent_div_60_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Design Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ngb-rating", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, CommentsComponent_ng_template_65_Template, 2, 4, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "User Experience Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "ngb-rating", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, CommentsComponent_ng_template_71_Template, 2, 4, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Content Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "ngb-rating", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, CommentsComponent_ng_template_77_Template, 2, 4, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.project);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myForm.controls.name.invalid && ctx.myForm.controls.name.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myForm.controls.comment.invalid && ctx.myForm.controls.comment.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("max", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("max", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("max", 5);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbRating], styles: ["*[_ngcontent-%COMP%] {\n  text-decoration: none;\n  list-style-type: none;\n}\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  text-align: justify;\n  text-justify: inter-word;\n}\nbody[_ngcontent-%COMP%] {\n  padding-top: 150px;\n  background-color: #f4ebd9;\n  text-align: justify;\n}\n.star[_ngcontent-%COMP%] {\n  \n  font-size: 3rem;\n\n  color: #ffffffb9;\n}\n.filled[_ngcontent-%COMP%] {\n  color: #028115;\n}\n.rating[_ngcontent-%COMP%] {\n  padding: 5px;\n}\nli[_ngcontent-%COMP%]:before {\n  content: \"\\2738\";\n}\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: start center;\n  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));\n  gap: 20vw;\n}\n.half[_ngcontent-%COMP%] {\n  width: 35vw;\n}\n\n@media only screen and (max-width: 992px) {\n  .half2[_ngcontent-%COMP%] {\n    display: grid;\n    grid-row: 1;\n  }\n  .container[_ngcontent-%COMP%] {\n    display: grid;\n\n    gap: 5rem;\n  }\n}\n.image[_ngcontent-%COMP%] {\n  width: 35vw;\n  border-radius: 10px;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n}\n.image-container[_ngcontent-%COMP%] {\n  margin: 50px 0px 50px 0px;\n}\nform[_ngcontent-%COMP%] {\n  border-radius: 10px;\n\n  padding: 30px;\n  background-color: #25a9e128;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  place-content: center;\n}\n.btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 1vw;\n  display: grid;\n  place-items: center;\n\n  color: #fff;\n  cursor: pointer;\n  margin: 20px;\n  text-align: center;\n  border: none;\n  background-size: 300% 100%;\n  border-radius: 50px;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\nbtn[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.btn[_ngcontent-%COMP%] {\n  background-image: linear-gradient(\n    to right,\n    #25aae1,\n    #4481eb,\n    #04befe,\n    #3f86ed\n  );\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCO0FBQ0E7OztFQUdFLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7O0VBRWYsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QiwyREFBMkQ7RUFDM0QsU0FBUztBQUNYO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTs7R0FFRztBQUVIO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhOztJQUViLFNBQVM7RUFDWDtBQUNGO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLDRDQUE0QztBQUM5QztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxtQkFBbUI7O0VBRW5CLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsNENBQTRDO0FBQzlDO0FBRUEsWUFBWTtBQUNaO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjs7RUFFbkIsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUdwQyxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFHcEMsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFOzs7Ozs7R0FNQztFQUNELGlEQUFpRDtBQUNuRCIsImZpbGUiOiJjb21tZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxucCxcbmxpLFxubGFiZWwge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbn1cbmJvZHkge1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGViZDk7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5zdGFyIHtcbiAgLyogZm9udC1zaXplOiA4dnc7ICovXG4gIGZvbnQtc2l6ZTogM3JlbTtcblxuICBjb2xvcjogI2ZmZmZmZmI5O1xufVxuLmZpbGxlZCB7XG4gIGNvbG9yOiAjMDI4MTE1O1xufVxuXG4ucmF0aW5nIHtcbiAgcGFkZGluZzogNXB4O1xufVxubGk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDI3MzhcIjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBzdGFydCBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzYwcHgsIDFmcikpO1xuICBnYXA6IDIwdnc7XG59XG5cbi5oYWxmIHtcbiAgd2lkdGg6IDM1dnc7XG59XG4vKiAuaGFsZjIge1xuICB3aWR0aDogNzB2dztcbn0gKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaGFsZjIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1yb3c6IDE7XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGdhcDogNXJlbTtcbiAgfVxufVxuLmltYWdlIHtcbiAgd2lkdGg6IDM1dnc7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA4cHggcmdiKDE3OCwgMTc4LCAxNzgpO1xufVxuLmltYWdlLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogNTBweCAwcHggNTBweCAwcHg7XG59XG5cbmZvcm0ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNWE5ZTEyODtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDhweCByZ2IoMTc4LCAxNzgsIDE3OCk7XG59XG5cbi8qIGJ1dHRvbnMgKi9cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xufVxuXG4uYnRuIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMXZ3O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuXG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtc2l6ZTogMzAwJSAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbmJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgIzI1YWFlMSxcbiAgICAjNDQ4MWViLFxuICAgICMwNGJlZmUsXG4gICAgIzNmODZlZFxuICApO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSg2NSwgMTMyLCAyMzQsIDAuNzUpO1xufVxuIl19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slideInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_8__.slideInRight))]),
        ] } });


/***/ }),

/***/ 2284:
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects/projects.component */ 5609);



class MainComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() { }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 69, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "container"], [1, "headings"], [1, "head"], [1, "title-heading"], ["src", "/assets/images/me.jpeg", "alt", "", 1, "heading-img"], [1, "heading-text"], ["src", "/assets/images/comp1.jpg", "alt", "", 1, "heading-img2"], [1, "portfolio-date"], [1, "buttons"], ["href", "#about"], [1, "btn"], ["href", "#projects"], [1, "about-footer"], [1, "about-header-container"], [1, "about-header"], ["src", "/assets/images/sun.png", "alt", "", 1, "about-header-icon"], ["id", "about", 1, "about"], ["src", "/assets/images/comp2.jpg", "alt", "", 1, "about-img"], [1, "about-text"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 1)(3, "meta", 2)(4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "body")(8, "section")(9, "div", 4)(10, "div", 5)(11, "div", 6)(12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "ISAAC MARIGA WANGOMBE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div")(15, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u201CModern technology has become a total phenomenon for civilization, the defining force of a new social order in which efficiency is no longer an option but a necessity imposed on all human activity.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u2015 Jacques Ellul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 11)(26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "2021-2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12)(29, "a", 13)(30, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 15)(33, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 16)(39, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "ISAAC WANGOMBE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "SOFTWARE DEVELOPER PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "section")(45, "div", 4)(46, "div", 17)(47, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "WHO AM I");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "A developer with a deep passion for computing and software, solid foundational skills in finance and training as a full stack developer in HTML, CSS, Javascript and Python, with additional strengths and experience in design, sales and project management. I am looking to use technology to develop innovative solutions that solve real world problems");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 12)(56, "a", 15)(57, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 16)(63, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "ISAAC WANGOMBE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "SOFTWARE DEVELOPER PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_projects_projects_component__WEBPACK_IMPORTED_MODULE_0__.ProjectsComponent], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  border: 0px;\n  text-decoration: none;\n}\nbody[_ngcontent-%COMP%] {\n  padding-top: 90px;\n  background-color: #f4ebd9;\n  color: black;\n  text-align: justify;\n}\nsection[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n}\np[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-size: 1.3vw;\n  text-align: justify;\n  text-justify: inter-word;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 8.5vw;\n  font-family: \"Playfair Display\", serif;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: min(1.5rem, 2vw);\n  font-family: \"Playfair Display\", serif;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 1.5vw;\n  font-family: \"Playfair Display\", serif;\n}\n.title-heading[_ngcontent-%COMP%] {\n  margin-right: -10vw;\n  z-index: 5;\n  position: relative;\n}\n.container[_ngcontent-%COMP%] {\n  height: 50vw;\n  display: grid;\n  place-items: center;\n}\n.heading-img[_ngcontent-%COMP%] {\n  margin-top: 3vw;\n  width: 25vw;\n  border-radius: 50%;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n  z-index: 1;\n}\n.headings[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  place-items: end center;\n  margin-right: 5vw;\n  width: 70vw;\n  height: 28vw;\n}\n.head[_ngcontent-%COMP%] {\n  margin-top: 8vw;\n}\n.head[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-top: 9vw;\n}\n.heading-text[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  grid-template-columns: 1fr 3fr 1fr;\n  gap: 5vw;\n  height: 100%;\n  width: 75vw;\n  margin-right: 7vw;\n}\n.heading-img2[_ngcontent-%COMP%] {\n  width: 15vw;\n  height: 15vw;\n  border-radius: 50%;\n  margin-bottom: 10vw;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n  margin-right: -5vw;\n}\n.portfolio-date[_ngcontent-%COMP%] {\n  background-color: black;\n  color: antiquewhite;\n  padding: 1vw;\n  border-radius: 4vw;\n  display: grid;\n  place-items: center;\n}\n.about[_ngcontent-%COMP%] {\n  margin: 10vw;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2vw;\n  place-items: center;\n  \n  position: absolute;\n}\n.about-img[_ngcontent-%COMP%] {\n  width: 40vw;\n  height: 30vw;\n  border-radius: 12vw;\n  \n  box-shadow: -10px 10px 8px rgb(178, 178, 178);\n  transform: scaleX(-1);\n  object-fit: cover;\n}\n.about-text[_ngcontent-%COMP%] {\n  margin-top: 25vw;\n  padding-right: 5vw;\n}\n.about-header-container[_ngcontent-%COMP%] {\n  gap: 0.5vw;\n  display: grid;\n  place-items: center end;\n  grid-template-columns: 4fr 1fr;\n  margin-left: 20vw;\n  z-index: 1;\n}\n.about-header[_ngcontent-%COMP%] {\n  margin-left: -10vw;\n}\n.about-header-icon[_ngcontent-%COMP%] {\n  margin-left: 2vw;\n\n  width: 8vw;\n}\n.about-footer[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: 1fr 2fr 2fr;\n  margin-left: 10vw;\n  margin-right: 10vw;\n}\n.about-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: black;\n  height: 3px;\n  margin-top: 1vw;\n  border-radius: 100vw;\n  margin-right: 1.5vw;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 1vw;\n  display: grid;\n  place-items: center;\n\n  color: #fff;\n  cursor: pointer;\n  margin: 20px;\n  text-align: center;\n  border: none;\n  background-size: 300% 100%;\n  border-radius: 50px;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\nbtn[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.btn[_ngcontent-%COMP%] {\n  background-image: linear-gradient(\n    to right,\n    #25aae1,\n    #4481eb,\n    #04befe,\n    #3f86ed\n  );\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixzQ0FBc0M7QUFDeEM7QUFDQTs7T0FFTztBQUVQO0VBQ0UsMkJBQTJCO0VBQzNCLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNDQUFzQztBQUN4QztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsVUFBVTtBQUNaO0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsUUFBUTtFQUNSLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsNENBQTRDO0VBQzVDLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLDZDQUE2QztFQUc3QyxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxnQkFBZ0I7O0VBRWhCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjtBQUVBLFlBQVk7QUFDWjtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7O0VBRW5CLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFHcEMsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isb0NBQW9DO0VBR3BDLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRTs7Ozs7O0dBTUM7RUFDRCxpREFBaUQ7QUFDbkQiLCJmaWxlIjoibWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlcjogMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5ib2R5IHtcbiAgcGFkZGluZy10b3A6IDkwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGViZDk7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxucCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjN2dztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xufVxuaDEge1xuICBmb250LXNpemU6IDguNXZ3O1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xufVxuLyogaDIge31cbmgzIHt9XG5oNCB7fSAqL1xuXG5oNSB7XG4gIGZvbnQtc2l6ZTogbWluKDEuNXJlbSwgMnZ3KTtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbn1cbmg2IHtcbiAgZm9udC1zaXplOiAxLjV2dztcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbn1cblxuLnRpdGxlLWhlYWRpbmcge1xuICBtYXJnaW4tcmlnaHQ6IC0xMHZ3O1xuICB6LWluZGV4OiA1O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDUwdnc7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkaW5nLWltZyB7XG4gIG1hcmdpbi10b3A6IDN2dztcbiAgd2lkdGg6IDI1dnc7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDhweCByZ2IoMTc4LCAxNzgsIDE3OCk7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5oZWFkaW5ncyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcbiAgcGxhY2UtaXRlbXM6IGVuZCBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNXZ3O1xuICB3aWR0aDogNzB2dztcbiAgaGVpZ2h0OiAyOHZ3O1xufVxuXG4uaGVhZCB7XG4gIG1hcmdpbi10b3A6IDh2dztcbn1cbi5oZWFkID4gZGl2IHtcbiAgbWFyZ2luLXRvcDogOXZ3O1xufVxuXG4uaGVhZGluZy10ZXh0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcbiAgZ2FwOiA1dnc7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDc1dnc7XG4gIG1hcmdpbi1yaWdodDogN3Z3O1xufVxuLmhlYWRpbmctaW1nMiB7XG4gIHdpZHRoOiAxNXZ3O1xuICBoZWlnaHQ6IDE1dnc7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTB2dztcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDhweCByZ2IoMTc4LCAxNzgsIDE3OCk7XG4gIG1hcmdpbi1yaWdodDogLTV2dztcbn1cblxuLnBvcnRmb2xpby1kYXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XG4gIHBhZGRpbmc6IDF2dztcbiAgYm9yZGVyLXJhZGl1czogNHZ3O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4uYWJvdXQge1xuICBtYXJnaW46IDEwdnc7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAydnc7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYWJvdXQtaW1nIHtcbiAgd2lkdGg6IDQwdnc7XG4gIGhlaWdodDogMzB2dztcbiAgYm9yZGVyLXJhZGl1czogMTJ2dztcbiAgLyogYm94LXNoYWRvdzogLTEwcHggMTBweCA4cHggIzg4ODg4ODsgKi9cbiAgYm94LXNoYWRvdzogLTEwcHggMTBweCA4cHggcmdiKDE3OCwgMTc4LCAxNzgpO1xuXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uYWJvdXQtdGV4dCB7XG4gIG1hcmdpbi10b3A6IDI1dnc7XG4gIHBhZGRpbmctcmlnaHQ6IDV2dztcbn1cblxuLmFib3V0LWhlYWRlci1jb250YWluZXIge1xuICBnYXA6IDAuNXZ3O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyIGVuZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyO1xuICBtYXJnaW4tbGVmdDogMjB2dztcbiAgei1pbmRleDogMTtcbn1cblxuLmFib3V0LWhlYWRlciB7XG4gIG1hcmdpbi1sZWZ0OiAtMTB2dztcbn1cblxuLmFib3V0LWhlYWRlci1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcblxuICB3aWR0aDogOHZ3O1xufVxuXG4uYWJvdXQtZm9vdGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxdnc7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAyZnI7XG4gIG1hcmdpbi1sZWZ0OiAxMHZ3O1xuICBtYXJnaW4tcmlnaHQ6IDEwdnc7XG59XG5cbi5hYm91dC1mb290ZXIgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiAzcHg7XG4gIG1hcmdpbi10b3A6IDF2dztcbiAgYm9yZGVyLXJhZGl1czogMTAwdnc7XG4gIG1hcmdpbi1yaWdodDogMS41dnc7XG59XG5cbi8qIGJ1dHRvbnMgKi9cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ0biB7XG4gIHBhZGRpbmc6IDF2dztcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcblxuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwMCUgMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG5idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgICMyNWFhZTEsXG4gICAgIzQ0ODFlYixcbiAgICAjMDRiZWZlLFxuICAgICMzZjg2ZWRcbiAgKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoNjUsIDEzMiwgMjM0LCAwLjc1KTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6313:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var ngx_hide_on_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-hide-on-scroll */ 3103);



class NavbarComponent {
    constructor() {
        this.navbarCollapsed = false;
        this.dropdownCollapsed = false;
    }
    ngOnInit() { }
    toggleNavbarCollapsing() {
        this.navbarCollapsed = !this.navbarCollapsed;
    }
    showDropdown() {
        this.dropdownCollapsed = !this.dropdownCollapsed;
    }
    hideDropdown() {
        this.dropdownCollapsed = !this.dropdownCollapsed;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 32, vars: 4, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["ngxHideOnScroll", "", 1, "navbar", "navbar-expand-lg", "navbar-light", 3, "classNameWhenHidden"], [1, "container-fluid"], ["src", "assets/images/logo.png", "alt", "", 1, "navbar-img"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", " collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["ngxHideOnScroll", "", "id", "navbarSupportedContent", 1, "navbar-collapse", 3, "classNameWhenHidden"], [1, "navbar-nav"], [1, "nav-item"], ["href", "#about", 1, "nav-link"], [1, "nav-item", "dropdown", 3, "mouseenter", "mouseleave"], ["href", "#projects", "id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link"], ["href", "#", "tabindex", "-1", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1)(3, "meta", 2)(4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body")(8, "nav", 4)(9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mariga's Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_13_listener() { return ctx.toggleNavbarCollapsing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10)(16, "ul", 11)(17, "li", 12)(18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NavbarComponent_Template_li_mouseenter_20_listener() { return ctx.showDropdown(); })("mouseleave", function NavbarComponent_Template_li_mouseleave_20_listener() { return ctx.hideDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 12)(24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 12)(27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Linked-In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 12)(30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("classNameWhenHidden", "nav--hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("collapse", !ctx.navbarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("classNameWhenHidden", "collapse--hidden");
    } }, dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavbar, ngx_hide_on_scroll__WEBPACK_IMPORTED_MODULE_2__.NgxHideOnScrollDirective], styles: ["nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  color: white;\n  \n  \n  background-image: linear-gradient(\n    to right,\n    #25a9e14c,\n    #4481eb52,\n    #04c0fe58,\n    #3f85ed53\n  );\n  padding: 0 2rem;\n  z-index: 10;\n  -webkit-backdrop-filter: blur(6px);\n          backdrop-filter: blur(6px);\n  border-style: solid;\n  border-width: 1px;\n  border-color: #4481eb4a;\n  height: 100px;\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  margin-bottom: 32px;\n  color: black;\n}\nnav.nav--hidden[_ngcontent-%COMP%] {\n  transform: translateY(-100%);\n}\n.navbar-nav[_ngcontent-%COMP%] {\n  background-image: linear-gradient(\n    to right,\n    #25a9e14c,\n    #4481eb52,\n    #04c0fe58,\n    #3f85ed53\n  );\n  padding: 30px;\n  z-index: 15;\n  -webkit-backdrop-filter: blur(200);\n          backdrop-filter: blur(200);\n  width: 87vw;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #4481eb;\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n  \n  place-content: center;\n}\n.collapse--hidden[_ngcontent-%COMP%] {\n  border-color: #4481eb;\n  transform: translateY(-100%);\n}\n.nav-item[_ngcontent-%COMP%] {\n  padding-right: 4vw;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\nli[_ngcontent-%COMP%] {\n  display: table-cell;\n  position: relative;\n}\na[_ngcontent-%COMP%] {\n  color: #fff;\n  text-transform: uppercase;\n  text-decoration: none;\n  letter-spacing: 0.15em;\n\n  display: inline-block;\n  position: relative;\n}\na[_ngcontent-%COMP%]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  height: 2px;\n  left: 50%;\n  position: absolute;\n  background: #fff;\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\na[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n}\n.navbar-img[_ngcontent-%COMP%] {\n  padding: 0px 15px 5px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxpQ0FBaUM7RUFDakM7Ozs7OztHQU1DO0VBQ0QsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFOzs7Ozs7R0FNQztFQUNELGFBQWE7RUFDYixXQUFXO0VBQ1gsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsaURBQWlEO0VBQ2pELGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7O0VBRXRCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDhDQUE4QztFQUM5QyxTQUFTO0VBQ1QsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaURBQWlEO0VBQ2pELFFBQVE7QUFDVjtBQUNBO0VBQ0UsV0FBVztFQUNYLE9BQU87QUFDVDtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMyOTdmYjkwMDsgKi9cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzQ0ODFlYjcyOyAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgIzI1YTllMTRjLFxuICAgICM0NDgxZWI1MixcbiAgICAjMDRjMGZlNTgsXG4gICAgIzNmODVlZDUzXG4gICk7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjNDQ4MWViNGE7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDY1LCAxMzIsIDIzNCwgMC43NSk7XG59XG4ubmF2YmFyLWJyYW5kIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbm5hdi5uYXYtLWhpZGRlbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG59XG5cbi5uYXZiYXItbmF2IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgICMyNWE5ZTE0YyxcbiAgICAjNDQ4MWViNTIsXG4gICAgIzA0YzBmZTU4LFxuICAgICMzZjg1ZWQ1M1xuICApO1xuICBwYWRkaW5nOiAzMHB4O1xuICB6LWluZGV4OiAxNTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwMCk7XG4gIHdpZHRoOiA4N3Z3O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjNDQ4MWViO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSg2NSwgMTMyLCAyMzQsIDAuNzUpO1xuICAvKiBmbG9hdDogcmlnaHQ7ICovXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbGxhcHNlLS1oaWRkZW4ge1xuICBib3JkZXItY29sb3I6ICM0NDgxZWI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG59XG5cbi5uYXYtaXRlbSB7XG4gIHBhZGRpbmctcmlnaHQ6IDR2dztcbn1cbi5uYXYtaXRlbTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5saSB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xuXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuYTphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XG4gIGJvdHRvbTogMDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMnB4O1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcbiAgd2lkdGg6IDA7XG59XG5hOmhvdmVyOmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG59XG5cbi5uYXZiYXItaW1nIHtcbiAgcGFkZGluZzogMHB4IDE1cHggNXB4IDVweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5609:
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-animate */ 1921);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);











function ProjectsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_div_21_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.selectedLanguage = $event); })("change", function ProjectsComponent_div_21_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.projectsByLanguage()); })("change", function ProjectsComponent_div_21_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.togglelanguage()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", language_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", language_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", language_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.selectedLanguage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", language_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r5.language);
} }
function ProjectsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_div_25_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.selectedFramework = $event); })("change", function ProjectsComponent_div_25_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.projectsByFramework()); })("change", function ProjectsComponent_div_25_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.toggleframework()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", framework_r10.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", framework_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", framework_r10.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.selectedFramework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", framework_r10.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r10.framework);
} }
function ProjectsComponent_div_27_div_4_ul_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 40)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r21.language);
} }
function ProjectsComponent_div_27_div_4_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 40)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r22.framework);
} }
function ProjectsComponent_div_27_div_4_ng_template_38_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r28.language);
} }
function ProjectsComponent_div_27_div_4_ng_template_38_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r29.framework);
} }
function ProjectsComponent_div_27_div_4_ng_template_38_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tools_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tools_r30.tool);
} }
function ProjectsComponent_div_27_div_4_ng_template_38_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const database_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](database_r31.database);
} }
function ProjectsComponent_div_27_div_4_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_27_div_4_ng_template_38_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const modal_r23 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r23.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 45)(7, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 48)(10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 28)(15, "li", 29)(16, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 31)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 33)(22, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 31)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 35)(28, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 36)(31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 51)(34, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Built with:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 52)(37, "div", 25)(38, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ProjectsComponent_div_27_div_4_ng_template_38_div_40_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 25)(42, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Frameworks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, ProjectsComponent_div_27_div_4_ng_template_38_div_44_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 25)(46, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Other tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, ProjectsComponent_div_27_div_4_ng_template_38_div_48_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 25)(50, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, ProjectsComponent_div_27_div_4_ng_template_38_div_52_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const project_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r20.cloud, "", project_r16.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r16.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r16.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r16.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r16.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r20.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r20.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r20.tools);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r20.database);
} }
function ProjectsComponent_div_27_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_27_div_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.open(_r19)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 21)(4, "div", 22)(5, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 24)(8, "div", 25)(9, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Languages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProjectsComponent_div_27_div_4_ul_11_Template, 3, 1, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 25)(13, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Frameworks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProjectsComponent_div_27_div_4_ul_15_Template, 3, 1, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 28)(17, "li", 29)(18, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 31)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 33)(24, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 31)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 35)(30, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 36)(33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 38)(36, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ProjectsComponent_div_27_div_4_ng_template_38_Template, 53, 11, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r15.cloud, "", project_r16.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r16.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r15.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r15.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r16.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r16.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r16.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r16.name);
} }
function ProjectsComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "h1", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "All Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProjectsComponent_div_27_div_4_Template, 40, 9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.project);
} }
function ProjectsComponent_div_28_div_4_ul_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 40)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r43.language);
} }
function ProjectsComponent_div_28_div_4_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 40)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r44.framework);
} }
function ProjectsComponent_div_28_div_4_ng_template_40_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r50.language);
} }
function ProjectsComponent_div_28_div_4_ng_template_40_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r51.framework);
} }
function ProjectsComponent_div_28_div_4_ng_template_40_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tools_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tools_r52.tool);
} }
function ProjectsComponent_div_28_div_4_ng_template_40_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const database_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](database_r53.database);
} }
function ProjectsComponent_div_28_div_4_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41)(1, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 45)(4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 48)(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 28)(12, "li", 29)(13, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 31)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 33)(19, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 31)(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 35)(25, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 36)(28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 51)(31, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Built with:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 52)(34, "div", 25)(35, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ProjectsComponent_div_28_div_4_ng_template_40_div_37_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 25)(39, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Frameworks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ProjectsComponent_div_28_div_4_ng_template_40_div_41_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 25)(43, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Other tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ProjectsComponent_div_28_div_4_ng_template_40_div_45_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 25)(47, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, ProjectsComponent_div_28_div_4_ng_template_40_div_49_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const project_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r38.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r42.cloud, "", project_r38.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r38.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r38.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r38.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r38.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r42.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r42.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r42.tools);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r42.database);
} }
function ProjectsComponent_div_28_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_28_div_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](41); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r55.open(_r41)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 21)(4, "div", 22)(5, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 24)(8, "div", 25)(9, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Languages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProjectsComponent_div_28_div_4_ul_11_Template, 3, 1, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 25)(13, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Frameworks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProjectsComponent_div_28_div_4_ul_15_Template, 3, 1, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 28)(17, "li", 29)(18, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 31)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 33)(24, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 31)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 35)(30, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 36)(33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 38)(36, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ProjectsComponent_div_28_div_4_ng_template_40_Template, 50, 11, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r38 = ctx.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flipInX", ctx_r37.flipInX);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r37.cloud, "", project_r38.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r38.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r37.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r37.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r38.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r38.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r38.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r38.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r38.id, "");
} }
function ProjectsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Projects by language");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProjectsComponent_div_28_div_4_Template, 42, 11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.byLanguage);
} }
function ProjectsComponent_div_29_div_4_ul_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 40)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r63.language);
} }
function ProjectsComponent_div_29_div_4_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 40)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r64.framework);
} }
function ProjectsComponent_div_29_div_4_ng_template_40_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r70.language);
} }
function ProjectsComponent_div_29_div_4_ng_template_40_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r71.framework);
} }
function ProjectsComponent_div_29_div_4_ng_template_40_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tools_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tools_r72.tool);
} }
function ProjectsComponent_div_29_div_4_ng_template_40_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const database_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](database_r73.database);
} }
function ProjectsComponent_div_29_div_4_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41)(1, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 45)(4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 48)(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 28)(12, "li", 29)(13, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 31)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 33)(19, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 31)(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 35)(25, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 36)(28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 51)(31, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Built with:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 52)(34, "div", 25)(35, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ProjectsComponent_div_29_div_4_ng_template_40_div_37_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 25)(39, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Frameworks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ProjectsComponent_div_29_div_4_ng_template_40_div_41_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 25)(43, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Other tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ProjectsComponent_div_29_div_4_ng_template_40_div_45_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 25)(47, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, ProjectsComponent_div_29_div_4_ng_template_40_div_49_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const project_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r58.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r62.cloud, "", project_r58.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r58.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r58.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r58.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r58.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r62.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r62.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r62.tools);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r62.database);
} }
function ProjectsComponent_div_29_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_29_div_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](41); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r75.open(_r61)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 21)(4, "div", 22)(5, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 24)(8, "div", 25)(9, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Languages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProjectsComponent_div_29_div_4_ul_11_Template, 3, 1, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 25)(13, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Frameworks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProjectsComponent_div_29_div_4_ul_15_Template, 3, 1, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 28)(17, "li", 29)(18, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 31)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 33)(24, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 31)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 35)(30, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 36)(33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 38)(36, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ProjectsComponent_div_29_div_4_ng_template_40_Template, 50, 11, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r58 = ctx.$implicit;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flipInX", ctx_r57.flipInX);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r57.cloud, "", project_r58.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r58.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r57.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r57.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r58.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r58.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r58.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r58.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r58.id, "");
} }
function ProjectsComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Projects by framework");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProjectsComponent_div_29_div_4_Template, 42, 11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.byFramework);
} }
class ProjectsComponent {
    constructor(httpClient, modalService) {
        this.httpClient = httpClient;
        this.modalService = modalService;
        // Selected in html
        this.selectedLanguage = '';
        this.selectedTool = '';
        this.selectedDatabase = '';
        this.selectedFramework = '';
        // cloudinary
        this.cloud = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cloudinary;
        this.selectedChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.langShow = false;
        this.dbShow = false;
        this.frameShow = false;
        this.toolShow = false;
        this.AllShow = true;
    }
    ngOnInit() {
        this.getAllDatabases();
        this.getAllFrameworks();
        this.getAllProjects();
        this.getAllTools();
        this.getAlllanguages();
        this.projectsByDatabase();
        this.projectsByFramework();
        this.projectsByLanguage();
        this.projectsByTools();
    }
    onSelectedChanged() { }
    getAllProjects() {
        this.httpClient
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.allProjectsApi)
            .subscribe((response) => {
            this.project = response;
        });
    }
    getAllTools() {
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.allTools).subscribe((response) => {
            this.tools = response;
        });
    }
    getAlllanguages() {
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.allLanguage).subscribe((response) => {
            this.language = response;
        });
    }
    getAllDatabases() {
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.allDb).subscribe((response) => {
            this.database = response;
        });
    }
    getAllFrameworks() {
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.allFramework).subscribe((response) => {
            this.framework = response;
        });
    }
    projectsByDatabase() {
        this.httpClient
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.projectsByDb + this.selectedDatabase)
            .subscribe((response) => {
            this.byDatabase = response;
        });
    }
    projectsByFramework() {
        this.httpClient
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.projectsByFramework + this.selectedFramework)
            .subscribe((response) => {
            this.byFramework = response;
        });
    }
    projectsByTools() {
        this.httpClient
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.projectsByTools + this.selectedTool)
            .subscribe((response) => {
            this.byTools = response;
        });
    }
    projectsByLanguage() {
        this.httpClient
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.projectsByLanguage + this.selectedLanguage)
            .subscribe((response) => {
            this.byLanguage = response;
        });
    }
    open(content) {
        this.modalService
            .open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    togglelanguage() {
        this.langShow = true;
        this.frameShow = false;
        this.toolShow = false;
        this.dbShow = false;
        this.AllShow = false;
    }
    toggleframework() {
        this.langShow = false;
        this.frameShow = true;
        this.toolShow = false;
        this.dbShow = false;
        this.AllShow = false;
    }
    toggleAll() {
        this.langShow = false;
        this.frameShow = false;
        this.toolShow = false;
        this.dbShow = false;
        this.AllShow = true;
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal)); };
ProjectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], outputs: { selectedChanged: "selectedChanged" }, decls: 30, vars: 5, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "container-fluid"], ["id", "projects", 1, "menu-container"], [1, "menu-header"], [1, "menu"], [1, "menu-item"], [1, "menu-title"], [1, "btn", 3, "click"], [4, "ngFor", "ngForOf"], [1, "half"], ["class", "allprojects-title", 4, "ngIf"], ["type", "radio", 1, "btn-check", 3, "name", "value", "ngModel", "id", "ngModelChange", "change"], [1, "btn", 3, "for"], [1, "allprojects-title"], [1, "projects-header"], [1, "allprojects-container"], ["id", "box", 1, "box", 3, "click"], [1, "project-img", 3, "src"], ["type", "button", 1, "box-content"], [1, "box-text"], [1, "post"], [1, "building-blocks"], [1, "block"], [1, "block-title"], ["class", "block-items", 4, "ngFor", "ngForOf"], [1, "icon"], [1, "icons", "facebook"], [1, "tooltip"], [3, "href"], ["src", "assets/images/link.gif", 1, "fab", "fa-facebook-f"], [1, "icons", "github"], ["src", "assets/images/github.png", 1, "fab", "fa-github"], [1, "icons", "twitter"], [3, "routerLink"], ["src", "assets/images/star.gif", 1, "fab", "fa-twitter"], [1, "project-name"], ["mymodal", ""], [1, "block-items"], [1, "modal-content"], [1, "modal-title-container"], [1, "modal-title", "m-piece"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-cont-img"], [1, "modal-image", "m-piece"], [1, "modal-img", "project-img", 3, "src"], [1, "modal-details", "m-piece"], ["src", "assets/images/link.png", 1, "fab", "fa-facebook-f"], ["src", "assets/images/star2.png", 1, "fab", "fa-twitter"], [1, "modal-tool", "m-piece"], [1, "modal-tools"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 1)(3, "meta", 2)(4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "body")(8, "div", 4)(9, "div", 5)(10, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sort By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_16_listener() { return ctx.toggleAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8)(19, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ProjectsComponent_div_21_Template, 4, 6, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8)(23, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Framework");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ProjectsComponent_div_25_Template, 4, 6, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ProjectsComponent_div_27_Template, 5, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ProjectsComponent_div_28_Template, 5, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ProjectsComponent_div_29_Template, 5, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.framework);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.AllShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.langShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.frameShow);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], styles: ["body[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  background-color: #f4ebd9;\n  display: grid;\n  place-items: center;\n  color: black;\n}\n\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-size: min(1rem, 2.5vw);\n  text-align: justify;\n  text-justify: inter-word;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 8vw;\n  font-family: \"Playfair Display\", serif;\n}\n\n\n\nh3[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-family: \"Playfair Display\", serif;\n}\n\nh5[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  font-size: min(2rem, 5vw);\n  font-family: \"Playfair Display\", serif;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: 1.5vw;\n  font-family: \"Playfair Display\", serif;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  margin: 20px;\n  display: grid;\n  width: 90vw;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 3fr 1fr;\n}\n\n.menu-title[_ngcontent-%COMP%] {\n  padding: 25px 0px 5px 10px;\n}\n\n.menu-container[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  left: 10;\n  padding-top: 120px;\n  margin-left: 5vw;\n  z-index: 5;\n  max-width: 80vw;\n  max-height: 800px;\n  display: grid;\n  place-items: start center;\n}\n\n.half[_ngcontent-%COMP%] {\n  padding-top: 50px;\n\n  display: grid;\n  place-items: center;\n  color: black;\n  place-self: end;\n  grid-row: 1/2;\n  grid-column: 2;\n}\n\n@media screen and (max-width: 992px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-rows: 1fr 5fr;\n    max-width: 100vw;\n  }\n  .menu-container[_ngcontent-%COMP%] {\n    background-color: #f4ebd9;\n    width: 120vw;\n  }\n  .menu[_ngcontent-%COMP%] {\n    display: flex;\n    max-width: 90vw;\n  }\n\n  .half[_ngcontent-%COMP%] {\n    place-self: start;\n    grid-row: 2;\n    grid-column: 1;\n  }\n}\n\n.menu-header[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n}\n\n.allprojects-title[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  max-width: 100vw;\n}\n\n.allprojects-container[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3rem;\n  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));\n  padding: 5vw;\n  max-width: 70vw;\n}\n\n.building-blocks[_ngcontent-%COMP%] {\n  display: grid;\n\n  grid-template-rows: 1fr 1fr;\n  gap: 15px;\n}\n\n.box-text[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n}\n\n\n\n.block-title[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: bold;\n}\n\n.block-items[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: inline;\n}\n\n.project-name[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  margin-top: 20px;\n}\n\n.box[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  transition: all 0.3s ease 0.3s;\n  border-style: solid;\n  border-color: rgb(178, 178, 178);\n  border-radius: 0 30px;\n  border-width: 1px;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n}\n\n.box[_ngcontent-%COMP%]:hover {\n  background-color: #254ae1;\n}\n\n.box[_ngcontent-%COMP%]:before, .box[_ngcontent-%COMP%]:after, .box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]:before, .box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]:after {\n  content: \"\";\n  background-color: #4481eb;\n\n  width: 100%;\n  height: 5px;\n  position: absolute;\n  top: 0;\n  left: -100%;\n  transition: all 0.4s ease-in;\n}\n\n.box[_ngcontent-%COMP%]:after {\n  top: auto;\n  bottom: 0;\n  left: 100%;\n}\n\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]:before {\n  width: 5px;\n  height: 100%;\n  top: 100%;\n  left: 0;\n}\n\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]:after {\n  width: 5px;\n  height: 100%;\n  top: -100%;\n  left: auto;\n  right: 0;\n}\n\n.box[_ngcontent-%COMP%]:hover:before, .box[_ngcontent-%COMP%]:hover:after {\n  opacity: 0.2;\n  left: 0;\n}\n\n.box[_ngcontent-%COMP%]:hover   .box-content[_ngcontent-%COMP%]:before, .box[_ngcontent-%COMP%]:hover   .box-content[_ngcontent-%COMP%]:after {\n  opacity: 0.2;\n  top: 0;\n}\n\n.box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  transition: all 0.3s ease;\n}\n\n.box[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.35;\n}\n\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%] {\n  color: #fff;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  position: absolute;\n  top: 20px;\n  left: 0;\n  transition: all 0.45s ease;\n  padding: 30px 50px 0px 50px;\n  display: grid;\n  place-items: center start;\n}\n\n.box[_ngcontent-%COMP%]:hover   .box-content[_ngcontent-%COMP%] {\n  opacity: 1;\n  top: 0;\n}\n\n.box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  margin: 0 0 4px;\n}\n\n.box[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n  \n  text-transform: lowercase;\n  text-shadow: 0 0 10px rgb(0, 0, 0);\n  margin: 0 0 5px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  \n  -webkit-box-orient: vertical;\n}\n\n\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  list-style: none;\n}\n\n.icon[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border-radius: 50%;\n  padding: 15px;\n  margin: 10px;\n  width: 50px;\n  height: 50px;\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n.box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  opacity: 0;\n  transform: rotate(-45deg);\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  transition: all 0.4s cubic-bezier(0.6, -0.8, 0.735, 0.045);\n}\n\n.box[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  opacity: 100%;\n  transform: rotate(0deg);\n}\n\n.icon[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  font-size: 14px;\n  background: #ffffff;\n  color: #ffffff;\n  padding: 5px 8px;\n  border-radius: 5px;\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  white-space: nowrap;\n}\n\n.icon[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  height: 8px;\n  width: 8px;\n  background: #ffffff;\n  bottom: -3px;\n  left: 50%;\n  transform: translate(-50%) rotate(45deg);\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n.icon[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  top: -45px;\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}\n\n.icon[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);\n}\n\n.icon[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover, .icon[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%]::before {\n  background: #1877f2;\n  color: #ffffff;\n}\n\n.icon[_ngcontent-%COMP%]   .github[_ngcontent-%COMP%]:hover, .icon[_ngcontent-%COMP%]   .github[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]   .github[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%]::before {\n  background: #333333;\n  color: #ffffff;\n}\n\n.icon[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%]:hover, .icon[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%]::before {\n  background: #1da1f2;\n  color: #ffffff;\n}\n\n.fab[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  border-color: transparent;\n}\n\n@media only screen and (max-width: 990px) {\n  .box[_ngcontent-%COMP%] {\n    margin: 0 0 30px;\n  }\n}\n\n\n\n.modal[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100vh;\n  width: 50vw;\n  place-content: center;\n  place-items: center;\n}\n\n.modal-img[_ngcontent-%COMP%] {\n  height: auto;\n  width: 450px;\n  border-style: solid;\n  border-color: rgb(178, 178, 178);\n  border-radius: 0 30px;\n  border-width: 1px;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  height: 600px;\n  width: 540px;\n\n  background-color: #f4ebd9;\n}\n\n.modal-details[_ngcontent-%COMP%] {\n  margin-bottom: -50px;\n  display: grid;\n  place-items: center;\n}\n\n.nav--hidden[_ngcontent-%COMP%] {\n  transform: none;\n}\n\n.modal-title-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 5fr 1fr;\n}\n\n.close[_ngcontent-%COMP%] {\n  width: 50px;\n  margin-right: 30px;\n  border-radius: 2px;\n  place-self: center end;\n  background-color: #1876f276;\n  border-color: #04befe;\n}\n\n@media screen and (max-width: 574px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 95vw;\n  }\n  .modal-img[_ngcontent-%COMP%] {\n    height: auto;\n    width: 80vw;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 65vw;\n    right: 20vw;\n    border-radius: 20px;\n    background-color: #f4ebd9;\n  }\n  .modal-img[_ngcontent-%COMP%] {\n    height: auto;\n    width: 32vw;\n  }\n  .modal-cont-img[_ngcontent-%COMP%] {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 1fr 1fr;\n  }\n  .container-fluid[_ngcontent-%COMP%] {\n    margin: 20px;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n  }\n  .menu[_ngcontent-%COMP%] {\n    z-index: 5;\n  }\n  .half[_ngcontent-%COMP%] {\n    padding-top: 50px;\n  }\n  .nav--hidden[_ngcontent-%COMP%] {\n    transform: translateY(-100%);\n  }\n}\n\n.modal-tools[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  height: 200px;\n}\n\n.m-piece[_ngcontent-%COMP%] {\n  padding: 20px;\n\n  background-color: #ffffff;\n  border-radius: 20px;\n  background-color: #f4ebd9;\n}\n\n\n\n.btn[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 160px;\n  font-size: 1.5vw;\n  color: #fff;\n  cursor: pointer;\n  margin: 2px;\n  padding: 1vw;\n  width: 20vw;\n  border: none;\n  background-size: 300% 100%;\n  border-radius: 10px;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\nbtn[_ngcontent-%COMP%]:active {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-image: linear-gradient(\n    to right,\n    #25aae1,\n    #4481eb,\n    #04befe,\n    #3f86ed\n  );\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBOztFQUVFLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxzQ0FBc0M7QUFDeEM7O0FBQ0E7O09BRU87O0FBRVA7RUFDRSxlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixzQ0FBc0M7QUFDeEM7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGlCQUFpQjs7RUFFakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGNBQWM7RUFDaEI7QUFDRjs7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULDJEQUEyRDtFQUMzRCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7O0VBRWIsMkJBQTJCO0VBQzNCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBQ0E7OztHQUdHOztBQUVIO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQiw0Q0FBNEM7QUFDOUM7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7Ozs7RUFJRSxXQUFXO0VBQ1gseUJBQXlCOztFQUV6QixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixTQUFTO0VBQ1QsT0FBTztBQUNUOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixVQUFVO0VBQ1YsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFDQTs7RUFFRSxZQUFZO0VBQ1osT0FBTztBQUNUOztBQUNBOztFQUVFLFlBQVk7RUFDWixNQUFNO0FBQ1I7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsTUFBTTtBQUNSOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHdDQUF3QztFQUN4QyxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLDRCQUE0QjtBQUM5Qjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDBDQUEwQztFQUMxQyxlQUFlO0VBQ2YsMkRBQTJEO0FBQzdEOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCwwREFBMEQ7QUFDNUQ7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLDJEQUEyRDtFQUMzRCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixTQUFTO0VBQ1Qsd0NBQXdDO0VBQ3hDLDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSw0Q0FBNEM7QUFDOUM7O0FBRUE7OztFQUdFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUNBOzs7RUFHRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUEsVUFBVTs7QUFDVjtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTs7RUFFWix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7SUFDYixTQUFTO0lBQ1QsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhOztFQUViLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFHcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUdwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isb0NBQW9DO0VBR3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFOzs7Ozs7R0FNQztFQUNELGlEQUFpRDtBQUNuRCIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZWJkOTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5wLFxubGkge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogbWluKDFyZW0sIDIuNXZ3KTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xufVxuaDEge1xuICBmb250LXNpemU6IDh2dztcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbn1cbi8qIGgyIHt9XG5oMyB7fVxuaDQge30gKi9cblxuaDMge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG59XG5cbmg1LFxubGFiZWwge1xuICBmb250LXNpemU6IG1pbigycmVtLCA1dncpO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xufVxuaDYge1xuICBmb250LXNpemU6IDEuNXZ3O1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogOTB2dztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XG59XG5cbi5tZW51LXRpdGxlIHtcbiAgcGFkZGluZzogMjVweCAwcHggNXB4IDEwcHg7XG59XG5cbi5tZW51LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgbGVmdDogMTA7XG4gIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgei1pbmRleDogNTtcbiAgbWF4LXdpZHRoOiA4MHZ3O1xuICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IHN0YXJ0IGNlbnRlcjtcbn1cbi5oYWxmIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBwbGFjZS1zZWxmOiBlbmQ7XG4gIGdyaWQtcm93OiAxLzI7XG4gIGdyaWQtY29sdW1uOiAyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgfVxuICAubWVudS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGViZDk7XG4gICAgd2lkdGg6IDEyMHZ3O1xuICB9XG4gIC5tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogOTB2dztcbiAgfVxuXG4gIC5oYWxmIHtcbiAgICBwbGFjZS1zZWxmOiBzdGFydDtcbiAgICBncmlkLXJvdzogMjtcbiAgICBncmlkLWNvbHVtbjogMTtcbiAgfVxufVxuLm1lbnUtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiAwcHg7XG59XG4uYWxscHJvamVjdHMtdGl0bGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xufVxuLmFsbHByb2plY3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogM3JlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNXJlbSwgMWZyKSk7XG4gIHBhZGRpbmc6IDV2dztcbiAgbWF4LXdpZHRoOiA3MHZ3O1xufVxuXG4uYnVpbGRpbmctYmxvY2tzIHtcbiAgZGlzcGxheTogZ3JpZDtcblxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIGdhcDogMTVweDtcbn1cblxuLmJveC10ZXh0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cbi8qIC5ibG9jayB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbn0gKi9cblxuLmJsb2NrLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmxvY2staXRlbXMsXG5saSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ucHJvamVjdC1uYW1lIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJveCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwLjNzO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYigxNzgsIDE3OCwgMTc4KTtcbiAgYm9yZGVyLXJhZGl1czogMCAzMHB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDhweCByZ2IoMTc4LCAxNzgsIDE3OCk7XG59XG4uYm94OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1NGFlMTtcbn1cbi5ib3g6YmVmb3JlLFxuLmJveDphZnRlcixcbi5ib3ggLmJveC1jb250ZW50OmJlZm9yZSxcbi5ib3ggLmJveC1jb250ZW50OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0ODFlYjtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcbn1cbi5ib3g6YWZ0ZXIge1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMTAwJTtcbn1cbi5ib3ggLmJveC1jb250ZW50OmJlZm9yZSB7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xufVxuLmJveCAuYm94LWNvbnRlbnQ6YWZ0ZXIge1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogLTEwMCU7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAwO1xufVxuLmJveDpob3ZlcjpiZWZvcmUsXG4uYm94OmhvdmVyOmFmdGVyIHtcbiAgb3BhY2l0eTogMC4yO1xuICBsZWZ0OiAwO1xufVxuLmJveDpob3ZlciAuYm94LWNvbnRlbnQ6YmVmb3JlLFxuLmJveDpob3ZlciAuYm94LWNvbnRlbnQ6YWZ0ZXIge1xuICBvcGFjaXR5OiAwLjI7XG4gIHRvcDogMDtcbn1cbi5ib3ggaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5ib3g6aG92ZXIgaW1nIHtcbiAgb3BhY2l0eTogMC4zNTtcbn1cbi5ib3ggLmJveC1jb250ZW50IHtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40NXMgZWFzZTtcbiAgcGFkZGluZzogMzBweCA1MHB4IDBweCA1MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyIHN0YXJ0O1xufVxuLmJveDpob3ZlciAuYm94LWNvbnRlbnQge1xuICBvcGFjaXR5OiAxO1xuICB0b3A6IDA7XG59XG4uYm94IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgbWFyZ2luOiAwIDAgNHB4O1xufVxuLmJveCAucG9zdCB7XG4gIC8qIGxldHRlci1zcGFjaW5nOiAxcHg7ICovXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCByZ2IoMCwgMCwgMCk7XG4gIG1hcmdpbjogMCAwIDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4vKiBUcmlwcGxlIGJ1dHRvbiAqL1xuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uaWNvbiAuaWNvbnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XG59XG4uYm94IC5pY29uIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjYsIC0wLjgsIDAuNzM1LCAwLjA0NSk7XG59XG4uYm94OmhvdmVyIC5pY29uIHtcbiAgb3BhY2l0eTogMTAwJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG5cbi5pY29uIC50b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5pY29uIC50b29sdGlwOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3R0b206IC0zcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XG59XG5cbi5pY29uIC5pY29uczpob3ZlciAudG9vbHRpcCB7XG4gIHRvcDogLTQ1cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4uaWNvbiAuaWNvbnM6aG92ZXIgc3Bhbixcbi5pY29uIC5pY29uczpob3ZlciAudG9vbHRpcCB7XG4gIHRleHQtc2hhZG93OiAwcHggLTFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaWNvbiAuZmFjZWJvb2s6aG92ZXIsXG4uaWNvbiAuZmFjZWJvb2s6aG92ZXIgLnRvb2x0aXAsXG4uaWNvbiAuZmFjZWJvb2s6aG92ZXIgLnRvb2x0aXA6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMxODc3ZjI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmljb24gLmdpdGh1Yjpob3Zlcixcbi5pY29uIC5naXRodWI6aG92ZXIgLnRvb2x0aXAsXG4uaWNvbiAuZ2l0aHViOmhvdmVyIC50b29sdGlwOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmljb24gLnR3aXR0ZXI6aG92ZXIsXG4uaWNvbiAudHdpdHRlcjpob3ZlciAudG9vbHRpcCxcbi5pY29uIC50d2l0dGVyOmhvdmVyIC50b29sdGlwOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjMWRhMWYyO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5mYWIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XG4gIC5ib3gge1xuICAgIG1hcmdpbjogMCAwIDMwcHg7XG4gIH1cbn1cblxuLyogTW9kYWwgKi9cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiA1MHZ3O1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG4ubW9kYWwtaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogNDUwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiKDE3OCwgMTc4LCAxNzgpO1xuICBib3JkZXItcmFkaXVzOiAwIDMwcHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggOHB4IHJnYigxNzgsIDE3OCwgMTc4KTtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBoZWlnaHQ6IDYwMHB4O1xuICB3aWR0aDogNTQwcHg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZWJkOTtcbn1cbi5tb2RhbC1kZXRhaWxzIHtcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXYtLWhpZGRlbiB7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cbi5tb2RhbC10aXRsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XG59XG4uY2xvc2Uge1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBsYWNlLXNlbGY6IGNlbnRlciBlbmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODc2ZjI3NjtcbiAgYm9yZGVyLWNvbG9yOiAjMDRiZWZlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc0cHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIHdpZHRoOiA5NXZ3O1xuICB9XG4gIC5tb2RhbC1pbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogODB2dztcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIHdpZHRoOiA2NXZ3O1xuICAgIHJpZ2h0OiAyMHZ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZWJkOTtcbiAgfVxuICAubW9kYWwtaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDMydnc7XG4gIH1cbiAgLm1vZGFsLWNvbnQtaW1nIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMXJlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICB9XG4gIC5tZW51IHtcbiAgICB6LWluZGV4OiA1O1xuICB9XG4gIC5oYWxmIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgfVxuICAubmF2LS1oaWRkZW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIH1cbn1cblxuLm1vZGFsLXRvb2xzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5tLXBpZWNlIHtcbiAgcGFkZGluZzogMjBweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlYmQ5O1xufVxuXG4vKiBidXR0b25zICovXG5cbi5idG4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTYwcHg7XG4gIGZvbnQtc2l6ZTogMS41dnc7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiAxdnc7XG4gIHdpZHRoOiAyMHZ3O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtc2l6ZTogMzAwJSAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbmJ0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgICMyNWFhZTEsXG4gICAgIzQ0ODFlYixcbiAgICAjMDRiZWZlLFxuICAgICMzZjg2ZWRcbiAgKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoNjUsIDEzMiwgMjM0LCAwLjc1KTtcbn1cbiJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('flipInX', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_8__.flipInX, { params: { timing: 0, delay: 0 } })),
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slideOutLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_8__.slideOutLeft))]),
        ] } });


/***/ }),

/***/ 1098:
/*!*************************************************!*\
  !*** ./src/app/services/projectsapi.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsapiService": () => (/* binding */ ProjectsapiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class ProjectsapiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
}
ProjectsapiService.ɵfac = function ProjectsapiService_Factory(t) { return new (t || ProjectsapiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ProjectsapiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectsapiService, factory: ProjectsapiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6042:
/*!**********************************************!*\
  !*** ./src/app/testing/testing.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestingComponent": () => (/* binding */ TestingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TestingComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestingComponent.ɵfac = function TestingComponent_Factory(t) { return new (t || TestingComponent)(); };
TestingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestingComponent, selectors: [["app-testing"]], decls: 2, vars: 0, template: function TestingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "testing works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0aW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    allProjectsApi: 'https://marigaportfolio.herokuapp.com/api/all_projects/',
    allDb: 'https://marigaportfolio.herokuapp.com/api/all_databases/',
    allTools: 'https://marigaportfolio.herokuapp.com/api/all_tools/',
    allFramework: 'https://marigaportfolio.herokuapp.com/api/all_frameworks/',
    allLanguage: 'https://marigaportfolio.herokuapp.com/api/all_languages/',
    allComments: 'https://marigaportfolio.herokuapp.com/api/all_comments/',
    projectsByDb: 'https://marigaportfolio.herokuapp.com/api/database_projects/',
    projectsByTools: 'https://marigaportfolio.herokuapp.com/api/tools_projects/',
    projectsByFramework: 'https://marigaportfolio.herokuapp.com/api/framework_projects/',
    projectsByLanguage: 'https://marigaportfolio.herokuapp.com/api/languages_projects/',
    projectsById: 'https://marigaportfolio.herokuapp.com/api/id_projects/',
    cloudinary: 'https://res.cloudinary.com/dtj7bnapz/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map