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
/* harmony import */ var mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! mdb-angular-ui-kit/collapse */ 8723);
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
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_16__.MdbCollapseModule] });
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
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_16__.MdbCollapseModule] }); })();


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
        console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.projectsById + this.id);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 14)(43, "div", 15)(44, "h3");
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbRating], styles: ["*[_ngcontent-%COMP%] {\n  text-decoration: none;\n  list-style-type: none;\n}\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-size: min(1rem, 4vw);\n  line-height: 1.5;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 8vw;\n  font-family: \"Playfair Display\", serif;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: min(3rem, 6vw);\n  font-family: \"Playfair Display\", serif;\n}\nh5[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  font-size: min(1.5rem, 3vw);\n  font-family: \"Playfair Display\", serif;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 1.5vw;\n  font-family: \"Playfair Display\", serif;\n}\nbody[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  background-color: #f4ebd9;\n  text-align: justify;\n}\n.star[_ngcontent-%COMP%] {\n  \n  font-size: 3rem;\n\n  color: #ffffffb9;\n}\n.filled[_ngcontent-%COMP%] {\n  color: #028115;\n}\n.rating[_ngcontent-%COMP%] {\n  padding: 5px;\n}\nli[_ngcontent-%COMP%]:before {\n  content: \"\\2738\";\n}\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: start center;\n  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));\n  gap: 20vw;\n  height: 100%;\n}\n.half[_ngcontent-%COMP%] {\n  width: 35vw;\n  padding-top: 70px;\n}\n.half2[_ngcontent-%COMP%] {\n  width: 35vw;\n}\n.image[_ngcontent-%COMP%] {\n  width: 35vw;\n  border-radius: 10px;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n}\n@media only screen and (max-width: 992px) {\n  .half2[_ngcontent-%COMP%] {\n    display: grid;\n    grid-row: 1;\n    width: 80vw;\n  }\n  .half[_ngcontent-%COMP%] {\n    width: 80vw;\n  }\n  .image[_ngcontent-%COMP%] {\n    width: 80vw;\n  }\n  .container[_ngcontent-%COMP%] {\n    display: grid;\n    width: 100vw;\n    gap: 5rem;\n  }\n}\n.image-container[_ngcontent-%COMP%] {\n  margin: 50px 0px 50px 0px;\n}\nform[_ngcontent-%COMP%] {\n  border-radius: 10px;\n\n  padding: 30px;\n  background-color: #25a9e128;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  place-content: center;\n}\n.btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 1vw;\n  display: grid;\n  place-items: center;\n\n  color: #fff;\n  cursor: pointer;\n  margin: 20px;\n  text-align: center;\n  border: none;\n  background-size: 300% 100%;\n  border-radius: 50px;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\nbtn[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.btn[_ngcontent-%COMP%] {\n  background-image: linear-gradient(\n    to right,\n    #25aae1,\n    #4481eb,\n    #04befe,\n    #3f86ed\n  );\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxzQ0FBc0M7QUFDeEM7QUFDQTs7T0FFTztBQUVQO0VBQ0UseUJBQXlCO0VBQ3pCLHNDQUFzQztBQUN4QztBQUVBOztFQUVFLDJCQUEyQjtFQUMzQixzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTs7RUFFZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDJEQUEyRDtFQUMzRCxTQUFTO0VBQ1QsWUFBWTtBQUNkO0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsNENBQTRDO0FBQzlDO0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixTQUFTO0VBQ1g7QUFDRjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxtQkFBbUI7O0VBRW5CLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsNENBQTRDO0FBQzlDO0FBRUEsWUFBWTtBQUNaO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjs7RUFFbkIsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUdwQyxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFHcEMsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFOzs7Ozs7R0FNQztFQUNELGlEQUFpRDtBQUNuRCIsImZpbGUiOiJjb21tZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxucCxcbmxpIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IG1pbigxcmVtLCA0dncpO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuaDEge1xuICBmb250LXNpemU6IDh2dztcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbn1cbi8qIGgyIHt9XG5oMyB7fVxuaDQge30gKi9cblxuaDMge1xuICBmb250LXNpemU6IG1pbigzcmVtLCA2dncpO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xufVxuXG5oNSxcbmxhYmVsIHtcbiAgZm9udC1zaXplOiBtaW4oMS41cmVtLCAzdncpO1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xufVxuaDYge1xuICBmb250LXNpemU6IDEuNXZ3O1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xufVxuYm9keSB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZWJkOTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnN0YXIge1xuICAvKiBmb250LXNpemU6IDh2dzsgKi9cbiAgZm9udC1zaXplOiAzcmVtO1xuXG4gIGNvbG9yOiAjZmZmZmZmYjk7XG59XG4uZmlsbGVkIHtcbiAgY29sb3I6ICMwMjgxMTU7XG59XG5cbi5yYXRpbmcge1xuICBwYWRkaW5nOiA1cHg7XG59XG5saTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjczOFwiO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IHN0YXJ0IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNjBweCwgMWZyKSk7XG4gIGdhcDogMjB2dztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGFsZiB7XG4gIHdpZHRoOiAzNXZ3O1xuICBwYWRkaW5nLXRvcDogNzBweDtcbn1cbi5oYWxmMiB7XG4gIHdpZHRoOiAzNXZ3O1xufVxuLmltYWdlIHtcbiAgd2lkdGg6IDM1dnc7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA4cHggcmdiKDE3OCwgMTc4LCAxNzgpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5oYWxmMiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXJvdzogMTtcbiAgICB3aWR0aDogODB2dztcbiAgfVxuICAuaGFsZiB7XG4gICAgd2lkdGg6IDgwdnc7XG4gIH1cbiAgLmltYWdlIHtcbiAgICB3aWR0aDogODB2dztcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBnYXA6IDVyZW07XG4gIH1cbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogNTBweCAwcHggNTBweCAwcHg7XG59XG5cbmZvcm0ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNWE5ZTEyODtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDhweCByZ2IoMTc4LCAxNzgsIDE3OCk7XG59XG5cbi8qIGJ1dHRvbnMgKi9cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xufVxuXG4uYnRuIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMXZ3O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuXG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtc2l6ZTogMzAwJSAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbmJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgIzI1YWFlMSxcbiAgICAjNDQ4MWViLFxuICAgICMwNGJlZmUsXG4gICAgIzNmODZlZFxuICApO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSg2NSwgMTMyLCAyMzQsIDAuNzUpO1xufVxuIl19 */"], data: { animation: [
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
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 71, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "container"], [1, "headings"], [1, "head"], [1, "title-heading"], ["src", "assets/images/me.jpeg", "alt", "", 1, "heading-img"], [1, "heading-text"], ["src", "assets/images/comp1.jpg", "alt", "", 1, "heading-img2"], [1, "portfolio-date"], [1, "buttons"], ["href", "#about"], [1, "btn"], ["href", "#projects"], ["target", "blank", "href", "https://drive.google.com/file/d/1Nb3V3mWSJbd-NC6MjJRG5pUEFDY9Fubx/view?usp=sharing"], [1, "about-footer"], [1, "about-header-container"], [1, "about-header"], ["src", "assets/images/sun.png", "alt", "", 1, "about-header-icon"], ["id", "about", 1, "about"], ["src", "assets/images/comp2.jpg", "alt", "", 1, "about-img"], [1, "about-text"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 16)(36, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 17)(40, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "ISAAC WANGOMBE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "SOFTWARE DEVELOPER PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "section")(46, "div", 4)(47, "div", 18)(48, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "WHO AM I");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "A developer with a deep passion for computing and software, solid foundational skills in finance and training as a full stack developer in HTML, CSS, Javascript and Python, with additional strengths and experience in design, sales and project management. I am looking to use technology to develop innovative solutions that solve real world problems");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 12)(57, "a", 15)(58, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 16)(61, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 17)(65, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "ISAAC WANGOMBE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "SOFTWARE DEVELOPER PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_projects_projects_component__WEBPACK_IMPORTED_MODULE_0__.ProjectsComponent], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  border: 0px;\n  text-decoration: none;\n}\nbody[_ngcontent-%COMP%] {\n  padding-top: 90px;\n  background-color: #f4ebd9;\n  color: black;\n  text-align: justify;\n}\nsection[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n}\np[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-size: min(1.5rem, 1.8vw);\n  line-height: 1.5;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 8.5vw;\n  font-family: \"Playfair Display\", serif;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: min(1.5rem, 2vw);\n  font-family: \"Playfair Display\", serif;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 1.5vw;\n  font-family: \"Playfair Display\", serif;\n}\n.title-heading[_ngcontent-%COMP%] {\n  margin-right: -10vw;\n  z-index: 5;\n  position: relative;\n}\n.container[_ngcontent-%COMP%] {\n  height: 50vw;\n  display: grid;\n  place-items: center;\n}\n.heading-img[_ngcontent-%COMP%] {\n  margin-top: 3vw;\n  width: 25vw;\n  border-radius: 50%;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n  z-index: 1;\n}\n.headings[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  place-items: end center;\n  margin-right: 5vw;\n  width: 80vw;\n  height: 28vw;\n}\n.head[_ngcontent-%COMP%] {\n  margin-top: 8vw;\n}\n.head[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-top: 9vw;\n}\n.heading-text[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  grid-template-columns: 1fr 3fr 1fr;\n  gap: 5vw;\n  height: 100%;\n  width: 75vw;\n  margin-right: 7vw;\n}\n.heading-img2[_ngcontent-%COMP%] {\n  width: 15vw;\n  height: 15vw;\n  border-radius: 50%;\n  margin-bottom: 10vw;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n  margin-right: -5vw;\n}\n.portfolio-date[_ngcontent-%COMP%] {\n  background-color: black;\n  color: antiquewhite;\n  padding: 1vw;\n  border-radius: 4vw;\n  display: grid;\n  place-items: center;\n}\n.about[_ngcontent-%COMP%] {\n  margin: 5vw;\n  \n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2vw;\n  place-items: center;\n  position: absolute;\n}\n.about-img[_ngcontent-%COMP%] {\n  width: 40vw;\n  height: 30vw;\n  border-radius: 12vw;\n  \n  box-shadow: -10px 10px 8px rgb(178, 178, 178);\n  transform: scaleX(-1);\n  object-fit: cover;\n}\n.about-text[_ngcontent-%COMP%] {\n  margin-top: 30vw;\n}\n.about-header-container[_ngcontent-%COMP%] {\n  gap: 0.5vw;\n  display: grid;\n  place-items: center end;\n  grid-template-columns: 4fr 1fr;\n  margin-left: 20vw;\n  z-index: 1;\n}\n.about-header[_ngcontent-%COMP%] {\n  margin-left: -10vw;\n}\n.about-header-icon[_ngcontent-%COMP%] {\n  margin-left: 2vw;\n\n  width: 8vw;\n}\n.about-footer[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: 1fr 2fr 2fr;\n  margin-left: 10vw;\n  margin-right: 10vw;\n}\n.about-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: black;\n  height: 3px;\n  margin-top: 1vw;\n  border-radius: 100vw;\n  margin-right: 1.5vw;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 1vw;\n  display: grid;\n  place-items: center;\n\n  color: #fff;\n  cursor: pointer;\n  margin: 20px;\n  text-align: center;\n  border: none;\n  background-size: 300% 100%;\n  border-radius: 50px;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\nbtn[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.btn[_ngcontent-%COMP%] {\n  background-image: linear-gradient(\n    to right,\n    #25aae1,\n    #4481eb,\n    #04befe,\n    #3f86ed\n  );\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNDQUFzQztBQUN4QztBQUNBOztPQUVPO0FBRVA7RUFDRSwyQkFBMkI7RUFDM0Isc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsc0NBQXNDO0FBQ3hDO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxVQUFVO0FBQ1o7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw0Q0FBNEM7RUFDNUMsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsNkNBQTZDO0VBRzdDLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCOztFQUVoQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1Isa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7QUFFQSxZQUFZO0FBQ1o7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1COztFQUVuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBR3BDLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUdwQyxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0U7Ozs7OztHQU1DO0VBQ0QsaURBQWlEO0FBQ25EIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYm9keSB7XG4gIHBhZGRpbmctdG9wOiA5MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlYmQ5O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5zZWN0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cbnAge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogbWluKDEuNXJlbSwgMS44dncpO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuaDEge1xuICBmb250LXNpemU6IDguNXZ3O1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xufVxuLyogaDIge31cbmgzIHt9XG5oNCB7fSAqL1xuXG5oNSB7XG4gIGZvbnQtc2l6ZTogbWluKDEuNXJlbSwgMnZ3KTtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbn1cbmg2IHtcbiAgZm9udC1zaXplOiAxLjV2dztcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbn1cblxuLnRpdGxlLWhlYWRpbmcge1xuICBtYXJnaW4tcmlnaHQ6IC0xMHZ3O1xuICB6LWluZGV4OiA1O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDUwdnc7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkaW5nLWltZyB7XG4gIG1hcmdpbi10b3A6IDN2dztcbiAgd2lkdGg6IDI1dnc7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDhweCByZ2IoMTc4LCAxNzgsIDE3OCk7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5oZWFkaW5ncyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcbiAgcGxhY2UtaXRlbXM6IGVuZCBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNXZ3O1xuICB3aWR0aDogODB2dztcbiAgaGVpZ2h0OiAyOHZ3O1xufVxuXG4uaGVhZCB7XG4gIG1hcmdpbi10b3A6IDh2dztcbn1cbi5oZWFkID4gZGl2IHtcbiAgbWFyZ2luLXRvcDogOXZ3O1xufVxuXG4uaGVhZGluZy10ZXh0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcbiAgZ2FwOiA1dnc7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDc1dnc7XG4gIG1hcmdpbi1yaWdodDogN3Z3O1xufVxuLmhlYWRpbmctaW1nMiB7XG4gIHdpZHRoOiAxNXZ3O1xuICBoZWlnaHQ6IDE1dnc7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTB2dztcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDhweCByZ2IoMTc4LCAxNzgsIDE3OCk7XG4gIG1hcmdpbi1yaWdodDogLTV2dztcbn1cblxuLnBvcnRmb2xpby1kYXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XG4gIHBhZGRpbmc6IDF2dztcbiAgYm9yZGVyLXJhZGl1czogNHZ3O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4uYWJvdXQge1xuICBtYXJnaW46IDV2dztcbiAgLyogbWFyZ2luLWxlZnQ6IC0wLjV2dzsgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDJ2dztcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYWJvdXQtaW1nIHtcbiAgd2lkdGg6IDQwdnc7XG4gIGhlaWdodDogMzB2dztcbiAgYm9yZGVyLXJhZGl1czogMTJ2dztcbiAgLyogYm94LXNoYWRvdzogLTEwcHggMTBweCA4cHggIzg4ODg4ODsgKi9cbiAgYm94LXNoYWRvdzogLTEwcHggMTBweCA4cHggcmdiKDE3OCwgMTc4LCAxNzgpO1xuXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uYWJvdXQtdGV4dCB7XG4gIG1hcmdpbi10b3A6IDMwdnc7XG59XG5cbi5hYm91dC1oZWFkZXItY29udGFpbmVyIHtcbiAgZ2FwOiAwLjV2dztcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlciBlbmQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcbiAgbWFyZ2luLWxlZnQ6IDIwdnc7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5hYm91dC1oZWFkZXIge1xuICBtYXJnaW4tbGVmdDogLTEwdnc7XG59XG5cbi5hYm91dC1oZWFkZXItaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAydnc7XG5cbiAgd2lkdGg6IDh2dztcbn1cblxuLmFib3V0LWZvb3RlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXZ3O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMmZyO1xuICBtYXJnaW4tbGVmdDogMTB2dztcbiAgbWFyZ2luLXJpZ2h0OiAxMHZ3O1xufVxuXG4uYWJvdXQtZm9vdGVyID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGhlaWdodDogM3B4O1xuICBtYXJnaW4tdG9wOiAxdnc7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xuICBtYXJnaW4tcmlnaHQ6IDEuNXZ3O1xufVxuXG4vKiBidXR0b25zICovXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idG4ge1xuICBwYWRkaW5nOiAxdnc7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5cbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1zaXplOiAzMDAlIDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cblxuYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICAjMjVhYWUxLFxuICAgICM0NDgxZWIsXG4gICAgIzA0YmVmZSxcbiAgICAjM2Y4NmVkXG4gICk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDY1LCAxMzIsIDIzNCwgMC43NSk7XG59XG4iXX0= */"] });


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
/* harmony import */ var mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdb-angular-ui-kit/collapse */ 8723);




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
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 35, vars: 1, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["ngxHideOnScroll", "", 1, "navbar", "navbar-expand-lg", 3, "classNameWhenHidden"], [1, "container-fluid"], ["href", "/"], ["src", "assets/images/logo.png", "alt", ""], ["type", "button", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["src", "assets/images/menu.png", "alt", "", 1, "toggle-img"], ["id", "navbarSupportedContent", "mdbCollapse", "", 1, "collapse", "navbar-collapse"], ["basicNavbar", "mdbCollapse"], [1, "navbar-nav", "d-flex", "w-auto", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "href", "#", 1, "nav-link", "active"], ["aria-current", "page", "href", "#about", 1, "nav-link"], ["href", "#projects", "tabindex", "-1", 1, "nav-link"], ["target", "blank", "href", "https://drive.google.com/file/d/1Nb3V3mWSJbd-NC6MjJRG5pUEFDY9Fubx/view?usp=sharing", "tabindex", "-1", 1, "nav-link"], ["target", "blank", "href", "https://www.linkedin.com/in/isaacwangombe/", "tabindex", "-1", 1, "nav-link"], ["target", "blank", "href", "https://github.com/isaacmariga", "tabindex", "-1", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1)(3, "meta", 2)(4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body")(8, "nav", 4)(9, "div", 5)(10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10, 11)(16, "ul", 12)(17, "li", 13)(18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mariga's Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 13)(21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 13)(24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 13)(27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 13)(30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Linked-In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 13)(33, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("classNameWhenHidden", "nav--hidden");
    } }, dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbNavbar, ngx_hide_on_scroll__WEBPACK_IMPORTED_MODULE_2__.NgxHideOnScrollDirective, mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_3__.MdbCollapseDirective], styles: ["nav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  color: white;\n  background-image: linear-gradient(\n    to right,\n    #25a9e14c,\n    #4481eb52,\n    #04c0fe58,\n    #3f85ed53\n  );\n  padding: 0 2rem;\n  z-index: 100;\n  -webkit-backdrop-filter: blur(6px);\n          backdrop-filter: blur(6px);\n  border-style: solid;\n  border-width: 1px;\n  border-color: #4481eb4a;\n\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  border-color: transparent;\n}\n\nimg[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  height: 5rem;\n}\n\n@media screen and (max-width: 992px) {\n  img[_ngcontent-%COMP%] {\n    height: 3rem;\n  }\n}\n\nli[_ngcontent-%COMP%] {\n  display: table-cell;\n  position: relative;\n}\n\na[_ngcontent-%COMP%] {\n  color: #fff;\n  text-transform: uppercase;\n  text-decoration: none;\n  letter-spacing: 0.15em;\n  font-size: min(0.9rem, 2vw);\n  margin-left: 1vw;\n\n  display: inline-block;\n  position: relative;\n}\n\na[_ngcontent-%COMP%]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  height: 2px;\n  left: 50%;\n  position: absolute;\n  background: #fff;\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\n\na[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n}\n\nnav.nav--hidden[_ngcontent-%COMP%] {\n  transform: translateY(-100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1o7Ozs7OztHQU1DO0VBQ0QsZUFBZTtFQUNmLFlBQVk7RUFDWixrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsdUJBQXVCOztFQUV2QixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGdCQUFnQjs7RUFFaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLDhDQUE4QztFQUM5QyxTQUFTO0VBQ1QsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaURBQWlEO0VBQ2pELFFBQVE7QUFDVjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICAjMjVhOWUxNGMsXG4gICAgIzQ0ODFlYjUyLFxuICAgICMwNGMwZmU1OCxcbiAgICAjM2Y4NWVkNTNcbiAgKTtcbiAgcGFkZGluZzogMCAycmVtO1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjNDQ4MWViNGE7XG5cbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoNjUsIDEzMiwgMjM0LCAwLjc1KTtcbn1cblxuLm5hdmJhci10b2dnbGVyIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW1nIHtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGhlaWdodDogNXJlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIGltZyB7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICB9XG59XG5cbmxpIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE1ZW07XG4gIGZvbnQtc2l6ZTogbWluKDAuOXJlbSwgMnZ3KTtcbiAgbWFyZ2luLWxlZnQ6IDF2dztcblxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmE6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICBib3R0b206IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDJweDtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XG4gIHdpZHRoOiAwO1xufVxuYTpob3ZlcjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xufVxuXG5uYXYubmF2LS1oaWRkZW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xufVxuIl19 */"] });


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











function ProjectsComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_div_21_div_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.selectedLanguage = $event); })("change", function ProjectsComponent_div_21_div_1_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.projectsByLanguage()); })("change", function ProjectsComponent_div_21_div_1_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.togglelanguage()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", language_r5.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", language_r5.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", language_r5.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.selectedLanguage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", language_r5.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r5.language);
} }
function ProjectsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectsComponent_div_21_div_1_Template, 4, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showLangList);
} }
function ProjectsComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "a", 17)(2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_div_26_div_1_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.selectedFramework = $event); })("change", function ProjectsComponent_div_26_div_1_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.projectsByFramework()); })("change", function ProjectsComponent_div_26_div_1_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.toggleframework()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const framework_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", framework_r13.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", framework_r13.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", framework_r13.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r12.selectedFramework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", framework_r13.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r13.framework);
} }
function ProjectsComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectsComponent_div_26_div_1_Template, 5, 6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.framework);
} }
function ProjectsComponent_div_28_div_5_ul_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 42)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r24.language);
} }
function ProjectsComponent_div_28_div_5_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 42)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r25.framework);
} }
function ProjectsComponent_div_28_div_5_ng_template_38_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r31.language);
} }
function ProjectsComponent_div_28_div_5_ng_template_38_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r32.framework);
} }
function ProjectsComponent_div_28_div_5_ng_template_38_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tools_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tools_r33.tool);
} }
function ProjectsComponent_div_28_div_5_ng_template_38_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const database_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](database_r34.database);
} }
function ProjectsComponent_div_28_div_5_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "h3", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_28_div_5_ng_template_38_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const modal_r26 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r26.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 47)(7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 50)(10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 30)(15, "li", 31)(16, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 33)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 35)(22, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 33)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 37)(28, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_28_div_5_ng_template_38_Template_a_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const modal_r26 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r26.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 54)(34, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Built with:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 55)(37, "div", 27)(38, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ProjectsComponent_div_28_div_5_ng_template_38_div_40_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 27)(42, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Frameworks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, ProjectsComponent_div_28_div_5_ng_template_38_div_44_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 27)(46, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Other tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, ProjectsComponent_div_28_div_5_ng_template_38_div_48_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 27)(50, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, ProjectsComponent_div_28_div_5_ng_template_38_div_52_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const project_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r23.cloud, "", project_r19.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r19.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r19.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r19.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r19.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r23.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r23.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r23.tools);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r23.database);
} }
function ProjectsComponent_div_28_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_28_div_5_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r39.open(_r22)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 23)(4, "div", 24)(5, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 26)(8, "div", 27)(9, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Languages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProjectsComponent_div_28_div_5_ul_11_Template, 3, 1, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 27)(13, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Frameworks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProjectsComponent_div_28_div_5_ul_15_Template, 3, 1, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 30)(17, "li", 31)(18, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 33)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 35)(24, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 33)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 37)(30, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 38)(33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 40)(36, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ProjectsComponent_div_28_div_5_ng_template_38_Template, 53, 11, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flipInX", ctx_r18.flipInX);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r18.cloud, "", project_r19.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r19.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r18.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r18.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r19.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r19.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r19.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r19.name);
} }
function ProjectsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "All Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProjectsComponent_div_28_div_5_Template, 40, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.project);
} }
function ProjectsComponent_div_29_div_7_ul_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 42)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r47.language);
} }
function ProjectsComponent_div_29_div_7_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 42)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r48.framework);
} }
function ProjectsComponent_div_29_div_7_ng_template_38_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r54.language);
} }
function ProjectsComponent_div_29_div_7_ng_template_38_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r55.framework);
} }
function ProjectsComponent_div_29_div_7_ng_template_38_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tools_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tools_r56.tool);
} }
function ProjectsComponent_div_29_div_7_ng_template_38_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const database_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](database_r57.database);
} }
function ProjectsComponent_div_29_div_7_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_29_div_7_ng_template_38_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59); const modal_r49 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r49.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 47)(7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 50)(10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 30)(15, "li", 31)(16, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 33)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 35)(22, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 33)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 37)(28, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_29_div_7_ng_template_38_Template_a_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59); const modal_r49 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r49.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 54)(34, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Built with:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 55)(37, "div", 27)(38, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ProjectsComponent_div_29_div_7_ng_template_38_div_40_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 27)(42, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Frameworks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, ProjectsComponent_div_29_div_7_ng_template_38_div_44_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 27)(46, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Other tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, ProjectsComponent_div_29_div_7_ng_template_38_div_48_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 27)(50, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, ProjectsComponent_div_29_div_7_ng_template_38_div_52_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const project_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r42.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r46.cloud, "", project_r42.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r42.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r42.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r42.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r42.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r46.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r46.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r46.tools);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r46.database);
} }
function ProjectsComponent_div_29_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_29_div_7_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63); const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r62.open(_r45)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 23)(4, "div", 24)(5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 26)(8, "div", 27)(9, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Languages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProjectsComponent_div_29_div_7_ul_11_Template, 3, 1, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 27)(13, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Frameworks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProjectsComponent_div_29_div_7_ul_15_Template, 3, 1, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 30)(17, "li", 31)(18, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 33)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 35)(24, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 33)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 37)(30, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 38)(33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 40)(36, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ProjectsComponent_div_29_div_7_ng_template_38_Template, 53, 11, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r42 = ctx.$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flipInX", ctx_r41.flipInX);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r41.cloud, "", project_r42.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r42.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r41.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r41.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r42.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r42.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r42.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r42.name);
} }
function ProjectsComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Projects by language:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProjectsComponent_div_29_div_7_Template, 40, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.selectedLanguage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.byLanguage);
} }
function ProjectsComponent_div_30_div_7_ul_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 42)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r70.language);
} }
function ProjectsComponent_div_30_div_7_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 42)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r71.framework);
} }
function ProjectsComponent_div_30_div_7_ng_template_38_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const language_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r77.language);
} }
function ProjectsComponent_div_30_div_7_ng_template_38_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const framework_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](framework_r78.framework);
} }
function ProjectsComponent_div_30_div_7_ng_template_38_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tools_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tools_r79.tool);
} }
function ProjectsComponent_div_30_div_7_ng_template_38_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const database_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](database_r80.database);
} }
function ProjectsComponent_div_30_div_7_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "h3", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_30_div_7_ng_template_38_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r82); const modal_r72 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r72.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 47)(7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 50)(10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 30)(15, "li", 31)(16, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 33)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 35)(22, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 33)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 37)(28, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_30_div_7_ng_template_38_Template_a_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r82); const modal_r72 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r72.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 54)(34, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Built with:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 55)(37, "div", 27)(38, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ProjectsComponent_div_30_div_7_ng_template_38_div_40_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 27)(42, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Frameworks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, ProjectsComponent_div_30_div_7_ng_template_38_div_44_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 27)(46, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Other tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, ProjectsComponent_div_30_div_7_ng_template_38_div_48_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 27)(50, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, ProjectsComponent_div_30_div_7_ng_template_38_div_52_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const project_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r65.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r69.cloud, "", project_r65.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r65.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r65.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r65.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r65.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r69.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r69.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r69.tools);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r69.database);
} }
function ProjectsComponent_div_30_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_30_div_7_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r85.open(_r68)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 23)(4, "div", 24)(5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 26)(8, "div", 27)(9, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Languages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProjectsComponent_div_30_div_7_ul_11_Template, 3, 1, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 27)(13, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Frameworks:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProjectsComponent_div_30_div_7_ul_15_Template, 3, 1, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 30)(17, "li", 31)(18, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Live Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 33)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 35)(24, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 33)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 37)(30, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Rate Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 38)(33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 40)(36, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ProjectsComponent_div_30_div_7_ng_template_38_Template, 53, 11, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r65 = ctx.$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flipInX", ctx_r64.flipInX);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r64.cloud, "", project_r65.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r65.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r64.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r64.framework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r65.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r65.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/rate/", project_r65.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r65.name);
} }
function ProjectsComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Projects by framework:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProjectsComponent_div_30_div_7_Template, 40, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.selectedFramework);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
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
        this.langList = false;
        this.frameList = false;
        this.showLangList = false;
        this.showFrameList = false;
        this.showAllList = false;
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
    toggleLangList() {
        this.showLangList = !this.showLangList;
        this.showFrameList = false;
        this.showAllList = false;
    }
    toggleFrameList() {
        this.showLangList = false;
        this.showFrameList = !this.showFrameList;
        this.showAllList = false;
    }
    toggleAllList() {
        this.showLangList = false;
        this.showFrameList = false;
        this.showAllList = !this.showAllList;
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal)); };
ProjectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], outputs: { selectedChanged: "selectedChanged" }, decls: 31, vars: 5, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "container-fluid"], ["id", "projects", 1, "menu-cont"], [1, "menu-header"], [1, "menu"], [1, "menu-item"], [1, "menu-title-btn", 3, "click"], [4, "ngFor", "ngForOf"], ["class", "input-container", 4, "ngIf"], [1, "half"], ["class", "allprojects-title", 4, "ngIf"], [1, "input-container"], ["type", "radio", 1, "btn-check", 3, "name", "value", "ngModel", "id", "ngModelChange", "change"], [1, "btn", 3, "for"], ["href", "#about"], [1, "allprojects-title"], [1, "projects-header"], [1, "allprojects-container"], ["id", "box", 1, "box", 3, "click"], [1, "project-img", 3, "src"], ["type", "button", 1, "box-content"], [1, "box-text"], [1, "post"], [1, "building-blocks"], [1, "block"], [1, "block-title"], ["class", "block-items", 4, "ngFor", "ngForOf"], [1, "icon"], [1, "icons", "facebook"], [1, "tooltip"], [3, "href"], ["src", "assets/images/link.gif", 1, "fab", "fa-facebook-f"], [1, "icons", "github"], ["src", "assets/images/github.png", 1, "fab", "fa-github"], [1, "icons", "twitter"], [3, "routerLink"], ["src", "assets/images/star.gif", 1, "fab", "fa-twitter"], [1, "project-name"], ["mymodal", ""], [1, "block-items"], [1, "modal-content"], [1, "modal-title-container"], [1, "modal-title", "m-piece"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-cont-img"], [1, "modal-image", "m-piece"], [1, "modal-img", "project-img", 3, "src"], [1, "modal-details", "m-piece"], ["src", "assets/images/link.png", 1, "fab", "fa-facebook-f"], [3, "routerLink", "click"], ["src", "assets/images/star2.png", 1, "fab", "fa-twitter"], [1, "modal-tool", "m-piece"], [1, "modal-tools"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 1)(3, "meta", 2)(4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "body")(8, "div", 4)(9, "div", 5)(10, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sort By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_14_listener() { return ctx.toggleAll(); })("click", function ProjectsComponent_Template_button_click_14_listener() { return ctx.toggleAllList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8)(18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_18_listener() { return ctx.toggleLangList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ProjectsComponent_div_21_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8)(23, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_23_listener() { return ctx.toggleFrameList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Framework");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ProjectsComponent_div_26_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ProjectsComponent_div_28_Template, 6, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ProjectsComponent_div_29_Template, 8, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ProjectsComponent_div_30_Template, 8, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFrameList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.AllShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.langShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.frameShow);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], styles: ["body[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  background-color: #f4ebd9;\n  display: grid;\n  place-items: center;\n  color: black;\n}\n\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-size: min(1rem, 2.5vw);\n  text-align: justify;\n  text-justify: inter-word;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 8vw;\n  font-family: \"Playfair Display\", serif;\n}\n\n\n\nh3[_ngcontent-%COMP%] {\n  font-size: min(4rem, 8vw);\n  font-family: \"Playfair Display\", serif;\n}\n\nh5[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  font-size: min(2rem, 5vw);\n  font-family: \"Playfair Display\", serif;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: 1.5vw;\n  font-family: \"Playfair Display\", serif;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  margin: 20px;\n  display: grid;\n  width: 90vw;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 3fr 1fr;\n}\n\n.menu-cont[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  left: 10;\n  padding-top: 60px;\n  z-index: 5;\n  max-width: 90vw;\n  max-height: 850px;\n  display: grid;\n  place-items: start center;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n}\n\n.half[_ngcontent-%COMP%] {\n  padding-top: 50px;\n\n  display: grid;\n  place-items: center;\n  color: black;\n  place-self: end;\n  grid-row: 1/2;\n  grid-column: 2;\n}\n\n@media screen and (max-width: 992px) {\n  body[_ngcontent-%COMP%] {\n    padding-top: 0px;\n  }\n  .container-fluid[_ngcontent-%COMP%] {\n    padding-top: 0px;\n    display: grid;\n    grid-template-rows: 1fr 20fr;\n    max-width: 100vw;\n  }\n  .menu-cont[_ngcontent-%COMP%] {\n    padding-top: calc(10vw + 23px);\n    background-color: #f4ebd9;\n    width: 120vw;\n    height: calc(20vw + 60px);\n    box-shadow: 0 4px 15px 0 #f4ebd9;\n  }\n  .menu[_ngcontent-%COMP%] {\n    display: flex;\n    max-width: 90vw;\n  }\n\n  .half[_ngcontent-%COMP%] {\n    place-self: start;\n    grid-row: 2;\n    grid-column: 1;\n  }\n}\n\n.menu-header[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n}\n\n.allprojects-title[_ngcontent-%COMP%] {\n  display: grid;\n  place-content: center;\n  max-width: 100vw;\n}\n\n.projects-header[_ngcontent-%COMP%] {\n  display: grid;\n  place-content: center;\n}\n\n.allprojects-container[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3rem;\n  grid-template-columns: repeat(auto-fit, minmax(25rem, 2fr));\n  padding: 5vw;\n  max-width: 70vw;\n}\n\n@media screen and (max-width: 420px) {\n  .allprojects-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(15rem, 2fr));\n  }\n}\n\n.building-blocks[_ngcontent-%COMP%] {\n  display: grid;\n\n  grid-template-rows: 1fr 1fr;\n  gap: 15px;\n}\n\n.box-text[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n}\n\n\n\n.block-title[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: bold;\n}\n\n.block-items[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: inline;\n}\n\n.project-name[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  margin-top: 20px;\n}\n\n.box[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  transition: all 0.3s ease 0.3s;\n  border-style: solid;\n  border-color: rgb(178, 178, 178);\n  border-radius: 0 30px;\n  border-width: 1px;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n}\n\n.box[_ngcontent-%COMP%]:hover {\n  background-color: #254ae1;\n}\n\n.box[_ngcontent-%COMP%]:before, .box[_ngcontent-%COMP%]:after, .box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]:before, .box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]:after {\n  content: \"\";\n  background-color: #4481eb;\n\n  width: 100%;\n  height: 5px;\n  position: absolute;\n  top: 0;\n  left: -100%;\n  transition: all 0.4s ease-in;\n}\n\n.box[_ngcontent-%COMP%]:after {\n  top: auto;\n  bottom: 0;\n  left: 100%;\n}\n\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]:before {\n  width: 5px;\n  height: 100%;\n  top: 100%;\n  left: 0;\n}\n\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]:after {\n  width: 5px;\n  height: 100%;\n  top: -100%;\n  left: auto;\n  right: 0;\n}\n\n.box[_ngcontent-%COMP%]:hover:before, .box[_ngcontent-%COMP%]:hover:after {\n  opacity: 0.2;\n  left: 0;\n}\n\n.box[_ngcontent-%COMP%]:hover   .box-content[_ngcontent-%COMP%]:before, .box[_ngcontent-%COMP%]:hover   .box-content[_ngcontent-%COMP%]:after {\n  opacity: 0.2;\n  top: 0;\n}\n\n.box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  transition: all 0.3s ease;\n}\n\n.box[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.35;\n}\n\n.box[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%] {\n  color: #fff;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  position: absolute;\n  top: 20px;\n  left: 0;\n  transition: all 0.45s ease;\n  padding: 30px 50px 0px 50px;\n  display: grid;\n  place-items: center start;\n}\n\n.box[_ngcontent-%COMP%]:hover   .box-content[_ngcontent-%COMP%] {\n  opacity: 1;\n  top: 0;\n}\n\n.box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  margin: 0 0 4px;\n}\n\n.box[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n  \n  text-transform: lowercase;\n  text-shadow: 0 0 10px rgb(0, 0, 0);\n  margin: 0 0 5px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  \n  -webkit-box-orient: vertical;\n}\n\n\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  list-style: none;\n}\n\n.icon[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border-radius: 50%;\n  padding: 15px;\n  margin: 10px;\n  width: 50px;\n  height: 50px;\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n.box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  opacity: 0;\n  transform: rotate(-45deg);\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  transition: all 0.4s cubic-bezier(0.6, -0.8, 0.735, 0.045);\n}\n\n.box[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  opacity: 100%;\n  transform: rotate(0deg);\n}\n\n.icon[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  font-size: 14px;\n  background: #ffffff;\n  color: #ffffff;\n  padding: 5px 8px;\n  border-radius: 5px;\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  white-space: nowrap;\n}\n\n.icon[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  height: 8px;\n  width: 8px;\n  background: #ffffff;\n  bottom: -3px;\n  left: 50%;\n  transform: translate(-50%) rotate(45deg);\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n.icon[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  top: -45px;\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}\n\n.icon[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);\n}\n\n.icon[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover, .icon[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%]::before {\n  background: #1877f2;\n  color: #ffffff;\n}\n\n.icon[_ngcontent-%COMP%]   .github[_ngcontent-%COMP%]:hover, .icon[_ngcontent-%COMP%]   .github[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]   .github[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%]::before {\n  background: #333333;\n  color: #ffffff;\n}\n\n.icon[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%]:hover, .icon[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%]::before {\n  background: #1da1f2;\n  color: #ffffff;\n}\n\n.fab[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  border-color: transparent;\n}\n\n@media only screen and (max-width: 990px) {\n  .box[_ngcontent-%COMP%] {\n    margin: 0 0 30px;\n  }\n}\n\n\n\n.modal[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100vh;\n  width: 50vw;\n  place-content: center;\n  place-items: center;\n}\n\n.modal-img[_ngcontent-%COMP%] {\n  height: auto;\n  width: 450px;\n  border-style: solid;\n  border-color: rgb(178, 178, 178);\n  border-radius: 0 30px;\n  border-width: 1px;\n  box-shadow: 10px 10px 8px rgb(178, 178, 178);\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  height: 600px;\n  width: 540px;\n\n  background-color: #f4ebd9;\n}\n\n.modal-details[_ngcontent-%COMP%] {\n  margin-bottom: -50px;\n  display: grid;\n  place-items: center;\n}\n\n.nav--hidden[_ngcontent-%COMP%] {\n  transform: none;\n}\n\n.modal-title-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 5fr 1fr;\n}\n\n.close[_ngcontent-%COMP%] {\n  width: 50px;\n  margin-right: 30px;\n  border-radius: 2px;\n  place-self: center end;\n  background-color: #1876f276;\n  border-color: #04befe;\n}\n\n@media screen and (max-width: 574px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 97vw;\n  }\n  .modal-img[_ngcontent-%COMP%] {\n    height: auto;\n    width: 80vw;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 65vw;\n    right: 20vw;\n    border-radius: 20px;\n    background-color: #f4ebd9;\n  }\n  .modal-img[_ngcontent-%COMP%] {\n    height: auto;\n    width: 32vw;\n  }\n  .modal-cont-img[_ngcontent-%COMP%] {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 1fr 1fr;\n  }\n  .container-fluid[_ngcontent-%COMP%] {\n    margin: 20px;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n  }\n  .menu[_ngcontent-%COMP%] {\n    z-index: 5;\n  }\n  .half[_ngcontent-%COMP%] {\n    padding-top: 50px;\n  }\n  .nav--hidden[_ngcontent-%COMP%] {\n    transform: translateY(-100%);\n  }\n}\n\n.modal-tools[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  height: 200px;\n}\n\n.m-piece[_ngcontent-%COMP%] {\n  padding: 20px;\n\n  background-color: #ffffff;\n  border-radius: 20px;\n  background-color: #f4ebd9;\n}\n\n\n\n.btn[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  font-size: min(1rem, 2.5vw);\n  color: #fff;\n  cursor: pointer;\n  margin: 2px;\n  padding: 0.5vw;\n  width: 20vw;\n  border: none;\n  background-size: 300% 100%;\n  border-radius: 10px;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.btn[_ngcontent-%COMP%]:active {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-image: linear-gradient(\n    to right,\n    #25aae1,\n    #4481eb,\n    #04befe,\n    #3f86ed\n  );\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n}\n\n.menu-title-btn[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  color: #fff;\n  cursor: pointer;\n  margin: 2px;\n  padding: 1vw;\n  width: 25vw;\n  border: none;\n  background-size: 300% 100%;\n  border-radius: 10px;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.menu-title-btn[_ngcontent-%COMP%]:hover {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.menu-title-btn[_ngcontent-%COMP%]:active {\n  background-position: 100% 0;\n  moz-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.menu-title-btn[_ngcontent-%COMP%] {\n  background-image: linear-gradient(\n    to right,\n    #25aae1,\n    #4481eb,\n    #04befe,\n    #3f86ed\n  );\n  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBOztFQUVFLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxzQ0FBc0M7QUFDeEM7O0FBQ0E7O09BRU87O0FBRVA7RUFDRSx5QkFBeUI7RUFDekIsc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixzQ0FBc0M7QUFDeEM7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGlCQUFpQjs7RUFFakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGNBQWM7RUFDaEI7QUFDRjs7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCwyREFBMkQ7RUFDM0QsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLDJEQUEyRDtFQUM3RDtBQUNGOztBQUVBO0VBQ0UsYUFBYTs7RUFFYiwyQkFBMkI7RUFDM0IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFDQTs7O0dBR0c7O0FBRUg7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLDRDQUE0QztBQUM5Qzs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTs7OztFQUlFLFdBQVc7RUFDWCx5QkFBeUI7O0VBRXpCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFNBQVM7RUFDVCxPQUFPO0FBQ1Q7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFVBQVU7RUFDVixVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUNBOztFQUVFLFlBQVk7RUFDWixPQUFPO0FBQ1Q7O0FBQ0E7O0VBRUUsWUFBWTtFQUNaLE1BQU07QUFDUjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixNQUFNO0FBQ1I7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsd0NBQXdDO0VBQ3hDLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0FBQzlCOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsMENBQTBDO0VBQzFDLGVBQWU7RUFDZiwyREFBMkQ7QUFDN0Q7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLDBEQUEwRDtBQUM1RDs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsMkRBQTJEO0VBQzNELG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFNBQVM7RUFDVCx3Q0FBd0M7RUFDeEMsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLDRDQUE0QztBQUM5Qzs7QUFFQTs7O0VBR0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBQ0E7OztFQUdFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQSxVQUFVOztBQUNWO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZOztFQUVaLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFNBQVM7SUFDVCw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7O0VBRWIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBR3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFHcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUdwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTs7Ozs7O0dBTUM7RUFDRCxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBR3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFHcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUdwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTs7Ozs7O0dBTUM7RUFDRCxpREFBaUQ7QUFDbkQiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGViZDk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxucCxcbmxpIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IG1pbigxcmVtLCAyLjV2dyk7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbn1cbmgxIHtcbiAgZm9udC1zaXplOiA4dnc7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG59XG4vKiBoMiB7fVxuaDMge31cbmg0IHt9ICovXG5cbmgzIHtcbiAgZm9udC1zaXplOiBtaW4oNHJlbSwgOHZ3KTtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbn1cblxuaDUsXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogbWluKDJyZW0sIDV2dyk7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG59XG5oNiB7XG4gIGZvbnQtc2l6ZTogMS41dnc7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICBtYXJnaW46IDIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiA5MHZ3O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmcjtcbn1cblxuLm1lbnUtY29udCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgbGVmdDogMTA7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICB6LWluZGV4OiA1O1xuICBtYXgtd2lkdGg6IDkwdnc7XG4gIG1heC1oZWlnaHQ6IDg1MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogc3RhcnQgY2VudGVyO1xufVxuLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGFsZiB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgcGxhY2Utc2VsZjogZW5kO1xuICBncmlkLXJvdzogMS8yO1xuICBncmlkLWNvbHVtbjogMjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDIwZnI7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgfVxuICAubWVudS1jb250IHtcbiAgICBwYWRkaW5nLXRvcDogY2FsYygxMHZ3ICsgMjNweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZWJkOTtcbiAgICB3aWR0aDogMTIwdnc7XG4gICAgaGVpZ2h0OiBjYWxjKDIwdncgKyA2MHB4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgI2Y0ZWJkOTtcbiAgfVxuICAubWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDkwdnc7XG4gIH1cblxuICAuaGFsZiB7XG4gICAgcGxhY2Utc2VsZjogc3RhcnQ7XG4gICAgZ3JpZC1yb3c6IDI7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gIH1cbn1cbi5tZW51LWhlYWRlciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogMHB4O1xufVxuLmFsbHByb2plY3RzLXRpdGxlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xufVxuLnByb2plY3RzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hbGxwcm9qZWN0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDNyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjVyZW0sIDJmcikpO1xuICBwYWRkaW5nOiA1dnc7XG4gIG1heC13aWR0aDogNzB2dztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmFsbHByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNXJlbSwgMmZyKSk7XG4gIH1cbn1cblxuLmJ1aWxkaW5nLWJsb2NrcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG5cbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICBnYXA6IDE1cHg7XG59XG5cbi5ib3gtdGV4dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG4vKiAuYmxvY2sge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG59ICovXG5cbi5ibG9jay10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJsb2NrLWl0ZW1zLFxubGkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnByb2plY3QtbmFtZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5ib3gge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMC4zcztcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTc4LCAxNzgsIDE3OCk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMzBweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA4cHggcmdiKDE3OCwgMTc4LCAxNzgpO1xufVxuLmJveDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTRhZTE7XG59XG4uYm94OmJlZm9yZSxcbi5ib3g6YWZ0ZXIsXG4uYm94IC5ib3gtY29udGVudDpiZWZvcmUsXG4uYm94IC5ib3gtY29udGVudDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDgxZWI7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogLTEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XG59XG4uYm94OmFmdGVyIHtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDEwMCU7XG59XG4uYm94IC5ib3gtY29udGVudDpiZWZvcmUge1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbn1cbi5ib3ggLmJveC1jb250ZW50OmFmdGVyIHtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IC0xMDAlO1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogMDtcbn1cbi5ib3g6aG92ZXI6YmVmb3JlLFxuLmJveDpob3ZlcjphZnRlciB7XG4gIG9wYWNpdHk6IDAuMjtcbiAgbGVmdDogMDtcbn1cbi5ib3g6aG92ZXIgLmJveC1jb250ZW50OmJlZm9yZSxcbi5ib3g6aG92ZXIgLmJveC1jb250ZW50OmFmdGVyIHtcbiAgb3BhY2l0eTogMC4yO1xuICB0b3A6IDA7XG59XG4uYm94IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uYm94OmhvdmVyIGltZyB7XG4gIG9wYWNpdHk6IDAuMzU7XG59XG4uYm94IC5ib3gtY29udGVudCB7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNDVzIGVhc2U7XG4gIHBhZGRpbmc6IDMwcHggNTBweCAwcHggNTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlciBzdGFydDtcbn1cbi5ib3g6aG92ZXIgLmJveC1jb250ZW50IHtcbiAgb3BhY2l0eTogMTtcbiAgdG9wOiAwO1xufVxuLmJveCAudGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIG1hcmdpbjogMCAwIDRweDtcbn1cbi5ib3ggLnBvc3Qge1xuICAvKiBsZXR0ZXItc3BhY2luZzogMXB4OyAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiKDAsIDAsIDApO1xuICBtYXJnaW46IDAgMCA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLyogVHJpcHBsZSBidXR0b24gKi9cblxuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmljb24gLmljb25zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xufVxuLmJveCAuaWNvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC42LCAtMC44LCAwLjczNSwgMC4wNDUpO1xufVxuLmJveDpob3ZlciAuaWNvbiB7XG4gIG9wYWNpdHk6IDEwMCU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xufVxuXG4uaWNvbiAudG9vbHRpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uaWNvbiAudG9vbHRpcDo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDhweDtcbiAgd2lkdGg6IDhweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm90dG9tOiAtM3B4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xufVxuXG4uaWNvbiAuaWNvbnM6aG92ZXIgLnRvb2x0aXAge1xuICB0b3A6IC00NXB4O1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLmljb24gLmljb25zOmhvdmVyIHNwYW4sXG4uaWNvbiAuaWNvbnM6aG92ZXIgLnRvb2x0aXAge1xuICB0ZXh0LXNoYWRvdzogMHB4IC0xcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmljb24gLmZhY2Vib29rOmhvdmVyLFxuLmljb24gLmZhY2Vib29rOmhvdmVyIC50b29sdGlwLFxuLmljb24gLmZhY2Vib29rOmhvdmVyIC50b29sdGlwOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjMTg3N2YyO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5pY29uIC5naXRodWI6aG92ZXIsXG4uaWNvbiAuZ2l0aHViOmhvdmVyIC50b29sdGlwLFxuLmljb24gLmdpdGh1Yjpob3ZlciAudG9vbHRpcDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pY29uIC50d2l0dGVyOmhvdmVyLFxuLmljb24gLnR3aXR0ZXI6aG92ZXIgLnRvb2x0aXAsXG4uaWNvbiAudHdpdHRlcjpob3ZlciAudG9vbHRpcDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzFkYTFmMjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uZmFiIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xuICAuYm94IHtcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xuICB9XG59XG5cbi8qIE1vZGFsICovXG4ubW9kYWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogNTB2dztcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuLm1vZGFsLWltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDQ1MHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYigxNzgsIDE3OCwgMTc4KTtcbiAgYm9yZGVyLXJhZGl1czogMCAzMHB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDhweCByZ2IoMTc4LCAxNzgsIDE3OCk7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgd2lkdGg6IDU0MHB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGViZDk7XG59XG4ubW9kYWwtZGV0YWlscyB7XG4gIG1hcmdpbi1ib3R0b206IC01MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2LS1oaWRkZW4ge1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG4ubW9kYWwtdGl0bGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyO1xufVxuLmNsb3NlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwbGFjZS1zZWxmOiBjZW50ZXIgZW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3NmYyNzY7XG4gIGJvcmRlci1jb2xvcjogIzA0YmVmZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NHB4KSB7XG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICB3aWR0aDogOTd2dztcbiAgfVxuICAubW9kYWwtaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDgwdnc7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICB3aWR0aDogNjV2dztcbiAgICByaWdodDogMjB2dztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGViZDk7XG4gIH1cbiAgLm1vZGFsLWltZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAzMnZ3O1xuICB9XG4gIC5tb2RhbC1jb250LWltZyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDFyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICB9XG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgfVxuICAubWVudSB7XG4gICAgei1pbmRleDogNTtcbiAgfVxuICAuaGFsZiB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gIH1cbiAgLm5hdi0taGlkZGVuIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICB9XG59XG5cbi5tb2RhbC10b29scyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4ubS1waWVjZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZWJkOTtcbn1cblxuLyogYnV0dG9ucyAqL1xuXG4uYnRuIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiBtaW4oMXJlbSwgMi41dncpO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDJweDtcbiAgcGFkZGluZzogMC41dnc7XG4gIHdpZHRoOiAyMHZ3O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtc2l6ZTogMzAwJSAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5idG46YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICAjMjVhYWUxLFxuICAgICM0NDgxZWIsXG4gICAgIzA0YmVmZSxcbiAgICAjM2Y4NmVkXG4gICk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDY1LCAxMzIsIDIzNCwgMC43NSk7XG59XG5cbi5tZW51LXRpdGxlLWJ0biB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiAxdnc7XG4gIHdpZHRoOiAyNXZ3O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtc2l6ZTogMzAwJSAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLm1lbnUtdGl0bGUtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICBtb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLm1lbnUtdGl0bGUtYnRuOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tZW51LXRpdGxlLWJ0biB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICAjMjVhYWUxLFxuICAgICM0NDgxZWIsXG4gICAgIzA0YmVmZSxcbiAgICAjM2Y4NmVkXG4gICk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDY1LCAxMzIsIDIzNCwgMC43NSk7XG59XG4iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('flipInX', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_8__.flipInX, { params: { timing: 1, delay: 0 } })),
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