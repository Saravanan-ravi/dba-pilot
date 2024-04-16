"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5187);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4225);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification/notification.component */ 6878);
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status/status.component */ 4200);
/* harmony import */ var _user_activation_user_activation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-activation/user-activation.component */ 9952);
/* harmony import */ var _techies_techies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./techies/techies.component */ 6961);
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports/reports.component */ 5734);
/* harmony import */ var _customised_report_customised_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customised-report/customised-report.component */ 3203);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 5879);











const routes = [{
  path: "",
  redirectTo: "/login",
  pathMatch: "full"
}, {
  path: "dashboard",
  component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}, {
  path: "login",
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: "notification",
  component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__.NotificationComponent
}, {
  path: "status",
  component: _status_status_component__WEBPACK_IMPORTED_MODULE_3__.StatusComponent
}, {
  path: "user-activation",
  component: _user_activation_user_activation_component__WEBPACK_IMPORTED_MODULE_4__.UserActivationComponent
}, {
  path: "techies",
  component: _techies_techies_component__WEBPACK_IMPORTED_MODULE_5__.TechiesComponent
}, {
  path: "reports",
  component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_6__.ReportsComponent
}, {
  path: "customised-report",
  component: _customised_report_customised_report_component__WEBPACK_IMPORTED_MODULE_7__.CustomisedReportComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 3519);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session.service */ 2510);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 9862);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5187);
/* harmony import */ var _ip_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ip-service.service */ 3942);
/* harmony import */ var angular_user_idle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-user-idle */ 8165);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6814);








const _c0 = ["navToggle"];
function AppComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_6_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.logOutAlert());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00A0Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function AppComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 15, 16)(7, "a", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 23, 24)(17, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_7_Template_div_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.notification());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\u00A0Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_7_Template_div_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.status());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\u00A0Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_7_Template_div_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.reports());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "\u00A0Reports");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_7_Template_div_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r23.customReports());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "\u00A0Customised Reports");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_7_Template_div_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r24.activation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "\u00A0User Activation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_7_Template_div_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r25.icms());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "\u00A0ICMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_7_Template_div_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r26.ntes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "\u00A0NTES");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_7_Template_div_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r27.irctc());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "\u00A0IRCTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_7_Template_div_click_58_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r28.primes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "\u00A0PRIMES");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_7_Template_div_click_63_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r29.govdotin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "\u00A0GOV.IN");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_7_Template_div_click_69_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r30.techies());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "\u00A0IT Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "div", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "input", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_7_Template_input_click_76_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.cancelAutoClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 41, 42)(80, "div", 43, 44)(82, "div", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 48, 49)(87, "a", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "span", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 56, 57)(97, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A0Hey, ", ctx_r1.dudename, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.roleindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Hey, ", ctx_r1.greet, "");
  }
}
function AppComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58)(1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r32.returnTop());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
var roleindex, Loggedusername, strip;
class AppComponent {
  constructor(session, httpClient, router, ip, userIdle) {
    this.session = session;
    this.httpClient = httpClient;
    this.router = router;
    this.ip = ip;
    this.userIdle = userIdle;
    this.CRyear = new Date().getFullYear();
    this.isLoggedIn = null;
    this.user = {};
  }
  ngOnInit() {
    this.user = this.session.getUser();
    this.isLoggedIn = this.user;
    // this.getIP();
    this.authCheck();
    this.gtUSR();
    this.userTimeOut();
    this.userWelcome();
    this.navAutoClose();
  }
  navAutoClose() {
    clearTimeout(this.autoCloseTimeout);
    this.autoCloseTimeout = setTimeout(() => {
      this.navToggleCheckbox.nativeElement.checked = false;
    }, 800);
  }
  cancelAutoClose() {
    clearTimeout(this.autoCloseTimeout);
  }
  authCheck() {
    try {
      if (this.isLoggedIn == null) {
        this.router.navigate(["/login"]);
      }
      this.httpClient.get("/users?token=" + this.user.token).subscribe(data => {
        // console.log(data)
        this.resStr = JSON.stringify(data);
        this.resJSON = JSON.parse(this.resStr);
      }, error => {
        // console.log(error);
        if (error.status == 401) {
          this.session.delUser();
          window.location.href = "/login";
        }
      });
    } catch (error) {
      console.log("Login to Continue");
    }
  }
  userTimeOut() {
    setTimeout(() => {
      this.navToggleCheckbox.nativeElement.checked = true;
    }, 1500);
    this.userIdle.startWatching();
    this.userIdle.onTimerStart().subscribe(count => console.log(count));
    this.userIdle.onTimeout().subscribe(() => console.log('Session Time-out!'));
    this.userIdle.onTimeout().subscribe(() => this.logOutTimer());
  }
  userWelcome() {
    this.myDate = new Date();
    this.hrs = this.myDate.getHours();
    if (this.hrs < 12) this.greet = 'Good Morning';else if (this.hrs >= 12 && this.hrs <= 16) this.greet = 'Good Afternoon';else if (this.hrs >= 16 && this.hrs <= 22) this.greet = 'Good Evening';else if (this.hrs >= 22 && this.hrs <= 24) this.greet = 'Good Evening, Dawn is Coming Soon';
  }
  gtUSR() {
    try {
      this.user = this.session.getUser();
      this.dudename = this.user.dude;
      this.roleindex = this.user.role;
      this.username = this.user.username;
      // this.Loggedusername = this.user.username;
      // roleindex = this.user.role;
      // this.EntireUserRole = this.user.role;
    } catch (error) {
      console.log("Login Records Not Available");
    }
  }
  stop() {
    this.userIdle.stopTimer();
  }
  stopWatching() {
    this.userIdle.stopWatching();
  }
  startWatching() {
    this.userIdle.startWatching();
  }
  restart() {
    this.userIdle.resetTimer();
  }
  returnTop() {
    //  window.scrollTo(0,0);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    // console.log("i=" + this.ipAddress);
  }
  returnBottom() {
    window.scrollTo(0, document.body.scrollHeight), {
      behavior: 'smooth'
    };
  }
  NavFunc() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  logMeOut() {
    // const allInfo = `You've Logged Out..!`;
    // alert(allInfo);
    this.httpClient.post("/auth/logout", {
      token: this.user.token
    }).subscribe(data => {
      this.session.delUser();
      window.location.href = "/login";
      var lgodate = new Date();
      this.logOutTime = lgodate;
      sessionStorage.clear();
    }, error => {
      console.log(error);
      window.location.href = "/login";
    });
  }
  logOutTimer() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Session Time-Out! \n Please Re-login',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
    // const allInfo = `Oops..!! Timed Out.. Please Re-login..!`;
    // alert(allInfo);
    this.httpClient.post("/auth/logout", {
      token: this.user.token
    }).subscribe(data => {
      this.session.delUser();
      window.location.href = "/login";
      var lgodate = new Date();
      this.logOutTime = lgodate;
    }, error => {
      console.log(error);
      window.location.href = "/login";
    });
  }
  logOutAlert() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Are you sure?',
      text: "Do You Wanna Logout..?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, LogOut!'
    }).then(result => {
      if (result.isConfirmed) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('GoodBye!', 'See you next time..!', 'success');
        this.logMeOut(); //This function logsOut the user and the timer
      }
    });
  }
  // geting user ip code. DO NOT DETELE
  // UserLog() {
  //   var myDate = new Date();
  //   this.hrs = myDate;
  //     this.httpClient.post("/logfile/savelog", {
  //       UsrName: this.Loggedusername,
  //       UsrRole: this.EntireUserRole,
  //       UsrDate: this.hrs,
  //       UsrIPv4: this.ipv4,
  //       UsrIPv6: this.ipv6,
  //       UsrMAC: this.ipmac
  //     }).subscribe(data => {
  //         console.log("USERLOG: "+data)
  //     }, error => {
  //       console.log(error)
  //       this.error = true;
  //       this.errorMsg = error.error.message;
  //     })
  // }
  notification() {
    this.router.navigate(['/notification']);
  }
  status() {
    this.router.navigate(['/status']);
  }
  reports() {
    this.router.navigate(['/reports']);
  }
  customReports() {
    this.router.navigate(['/customised-report']);
  }
  activation() {
    this.router.navigate(['/user-activation']);
  }
  icms() {
    var url = 'https://icms.indianrail.gov.in/reports/';
    window.open(url, '_blank');
  }
  ntes() {
    var url = 'https://enquiry.indianrail.gov.in/mntes/';
    window.open(url, '_blank');
  }
  irctc() {
    var url = 'https://www.irctc.co.in/nget/train-search';
    window.open(url, '_blank');
  }
  primes() {
    var url = 'https://primes.indianrail.gov.in/PRIMES/logi';
    window.open(url, '_blank');
  }
  govdotin() {
    var url = 'https://email.gov.in/';
    window.open(url, '_blank');
  }
  techies() {
    this.router.navigate(['/techies']);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ip_service_service__WEBPACK_IMPORTED_MODULE_2__.IpServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](angular_user_idle__WEBPACK_IMPORTED_MODULE_6__.UserIdleService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    viewQuery: function AppComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.navToggleCheckbox = _t.first);
      }
    },
    decls: 14,
    vars: 4,
    consts: [["rel", "preconnect", "href", "https://fonts.googleapis.com"], ["rel", "preconnect", "href", "https://fonts.gstatic.com", "crossorigin", ""], ["href", "https://fonts.googleapis.com/css2?family=Arima:wght@300;600&display=swap", "rel", "stylesheet"], ["rel", "stylesheet", "href", "https://fonts.googleapis.com/css?family=Trirong"], ["rel", "stylesheet", "href", "https://fonts.googleapis.com/css?family=Sofia"], ["href", "https://fonts.googleapis.com/css2?family=Arima:wght@200;300;500;600;700&family=Changa:wght@500&family=Russo+One&family=Secular+One&display=swap", "rel", "stylesheet"], [4, "ngIf"], ["class", "GoToTopButton", 4, "ngIf"], [1, "newcopyright"], ["value", "Logout", 2, "float", "right", "line-height", "10px", "margin", "10px", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sign-out", 2, "font-size", "20px"], ["id", "nav-bar"], ["navbar", ""], ["id", "nav-toggle", "type", "checkbox"], ["navToggle", ""], ["id", "nav-header"], ["navHeader", ""], ["id", "nav-title", "href", "#"], ["navTitle", ""], [1, "fa-brands", "fa-codepen"], [2, "font-size", "14px", "color", "#FFFFF0"], ["for", "nav-toggle"], [1, "fas", "fa-sliders-h"], ["id", "nav-content"], ["navContent", ""], [1, "nav-button", 3, "click"], [1, "fa-solid", "fa-bell"], [1, "fa-solid", "fa-bars-progress"], [1, "fa-solid", "fa-file-invoice"], [1, "fa-solid", "fa-sheet-plastic"], [1, "fa-solid", "fa-person-circle-check"], [1, "fa-solid", "fa-business-time"], [1, "fa-solid", "fa-train"], [1, "fa-solid", "fa-ticket"], [1, "fa-solid", "fa-database"], [1, "fa-solid", "fa-envelopes-bulk"], [1, "fa-solid", "fa-people-group"], ["id", "nav-content-highlight"], ["navContenthighlight", ""], ["id", "nav-footer-toggle", "type", "checkbox", 3, "click"], ["navfootertoggle", ""], ["id", "nav-footer"], ["navfooter", ""], ["id", "nav-footer-heading"], ["navfooterheading", ""], ["id", "nav-footer-avatar"], ["navfooteravatar", ""], ["src", "assets/images/dp.png", "alt", ""], ["id", "nav-footer-titlebox"], ["navfootertitlebox", ""], ["id", "nav-footer-title", "href", "#", "target", "_blank"], ["navfootertitle", ""], ["id", "nav-footer-subtitle"], ["navfootersubtitl", ""], ["for", "nav-footer-toggle"], [1, "fas", "fa-caret-up"], ["id", "nav-footer-content"], ["navfootercontent", ""], [1, "GoToTopButton"], [1, "top", 3, "click"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "link", 0)(1, "link", 1)(2, "link", 2)(3, "link", 3)(4, "link", 4)(5, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AppComponent_div_6_Template, 4, 0, "div", 6)(7, AppComponent_div_7_Template, 99, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AppComponent_div_9_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A9 Copyright ", ctx.CRyear, ", IT-Cell/CCM/PM, Southern Railway.");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet],
    styles: ["body[_ngcontent-%COMP%] {\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.topnav[_ngcontent-%COMP%] {\n    overflow: hidden;\n    background-image: linear-gradient(147deg, #030000 0%, #dccf11 74%);\n    font-family: 'Arima', cursive;\n    font-weight: 500;\n}\n\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: left;\n    display: block;\n    color: #f2f2f2;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n    font-size: 17px;\n}\n\n.active[_ngcontent-%COMP%] {\n    background-color: #04AA6D;\n    color: white;\n}\n\n.topnav[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n    float: left;\n    overflow: hidden;\n}\n\n.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n    font-size: 17px;\n    border: none;\n    outline: none;\n    color: white;\n    padding: 14px 16px;\n    background-color: inherit;\n    font-family: inherit;\n    margin: 0;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n    display: none;\n    position: absolute;\n    background-color: whitesmoke;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 4;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n    text-align: left;\n}\n\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n    background-color: #ffe8cc;\n    color: black;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: #dc2611;\n    color: #ffe8cc;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n    display: block;\n}\n\n@media screen and (max-width: 600px) {\n\n    .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:first-child), .dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .topnav[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%] {\n        float: right;\n        display: block;\n    }\n}\n\n@media screen and (max-width: 600px) {\n    .topnav.responsive[_ngcontent-%COMP%] {\n        position: relative;\n    }\n\n    .topnav.responsive[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n        position: absolute;\n        right: 0;\n        top: 0;\n    }\n\n    .topnav.responsive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        float: none;\n        display: block;\n        text-align: left;\n    }\n\n    .topnav.responsive[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n        float: none;\n    }\n\n    .topnav.responsive[_ngcontent-%COMP%]   .dropdown-content[_ngcontent-%COMP%] {\n        position: relative;\n    }\n\n    .topnav.responsive[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n        display: block;\n        width: 100%;\n        text-align: left;\n    }\n}\n\n.usr[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    color: gold;\n    padding: 5px;\n}\n\n.usr1[_ngcontent-%COMP%] {\n    color: rgb(228, 179, 57);\n    padding: 10px;\n    margin-left: 7px;\n}\n\n\n.fthead[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0;\n    padding: 5%;\n    width: 90%;\n    background-color: white;\n}\n\n.footer[_ngcontent-%COMP%] {\n    padding-top: 1%;\n    text-align: center;\n    position: relative;\n    font-family: \"Trirong\", serif;\n    text-shadow: 3px 3px 3px #ababab;\n    padding-right: 0.5%;\n    border-radius: 5px;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 30px;\n    background-color: rgba(34, 31, 31, 0.247);\n    z-index: 1;\n    font-size: 0.7em;\n}\n\n.top[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    display: inline-flex;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    margin: 0 3em 3em 0;\n    border-radius: 20%;\n    padding: .25em;\n    width: 70px;\n    height: 50px;\n    border: solid .10em rgba(153, 153, 153, 0.178);\n    background-color: rgba(245, 245, 245, 0.185);\n}\n\n.top[_ngcontent-%COMP%]:before {\n    content: '\u25B2';\n    margin-top: .7em;\n    font-size: 1em;\n    position: absolute;\n    top: 0;\n    left: 40%;\n    margin-left: -.7em;\n    border: solid .10em goldenrod;\n    padding: 2%;\n    border-radius: 10em;\n    width: 2.4em;\n    height: 1.7em;\n    line-height: 1.3em;\n    transition: transform .5s ease-in;\n}\n\n.top[_ngcontent-%COMP%]:hover {\n    color: #dc2611;\n}\n\n.top[_ngcontent-%COMP%]:hover:before {\n    transform: rotate(360deg);\n    border: solid .13em #dc2611;\n}\n\n.bottom[_ngcontent-%COMP%] {\n    float: right;\n}\n\n.GoToTopButton[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 4;\n}\n\n.newcopyright[_ngcontent-%COMP%] {\n    position: fixed;\n    font-size: smaller;\n    font-family: Trirong;\n    bottom: 1px;\n    right: 20px;\n    color: #8888888e;\n    \n\n}"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 6593);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 6223);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 9347);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4225);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 9862);
/* harmony import */ var _table_filter_pipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-filter.pipe.service */ 5943);
/* harmony import */ var _excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./excel.service */ 4050);
/* harmony import */ var angular_user_idle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-user-idle */ 8165);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ 4104);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2931);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 4554);
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status/status.component */ 4200);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification/notification.component */ 6878);
/* harmony import */ var _user_activation_user_activation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-activation/user-activation.component */ 9952);
/* harmony import */ var _reports_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reports/filter.pipe */ 2204);
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reports/reports.component */ 5734);
/* harmony import */ var _customised_report_customised_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customised-report/customised-report.component */ 3203);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 5879);












// import { NgIdleModule } from '@ng-idle/core'; //not supported
 //new










const idleConfig = {
  idle: 1800,
  // in seconds
  timeout: 50,
  // in seconds
  ping: 300 // in seconds
};
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    providers: [(0,angular_user_idle__WEBPACK_IMPORTED_MODULE_13__.provideUserIdleConfig)({
      idle: 2200,
      timeout: 1500,
      ping: 820
    }),
    //new //idle: 600, timeout: 300, ping: 120 
    _excel_service__WEBPACK_IMPORTED_MODULE_5__.ExcelService, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatCommonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule
    //  NgIdleModule.forRoot(), //not supported // to be uninstalled
    //  UserIdleModule.forRoot({ idle: 1800, timeout: 50, ping: 300 }), //deprecated
    ]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _table_filter_pipe_service__WEBPACK_IMPORTED_MODULE_4__.TableFilterPipe, _status_status_component__WEBPACK_IMPORTED_MODULE_6__.StatusComponent, _notification_notification_component__WEBPACK_IMPORTED_MODULE_7__.NotificationComponent, _user_activation_user_activation_component__WEBPACK_IMPORTED_MODULE_8__.UserActivationComponent, _reports_reports_component__WEBPACK_IMPORTED_MODULE_10__.ReportsComponent, _customised_report_customised_report_component__WEBPACK_IMPORTED_MODULE_11__.CustomisedReportComponent, _reports_filter_pipe__WEBPACK_IMPORTED_MODULE_9__.FilterPipe],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatCommonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule
    //  NgIdleModule.forRoot(), //not supported // to be uninstalled
    //  UserIdleModule.forRoot({ idle: 1800, timeout: 50, ping: 300 }), //deprecated
    ]
  });
})();

/***/ }),

/***/ 3203:
/*!******************************************************************!*\
  !*** ./src/app/customised-report/customised-report.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomisedReportComponent: () => (/* binding */ CustomisedReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 9862);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 6223);
/* harmony import */ var _reports_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reports/filter.pipe */ 2204);





function CustomisedReportComponent_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const activity_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", activity_r7, " ");
  }
}
function CustomisedReportComponent_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const trainaction1_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", trainaction1_r8, " ");
  }
}
function CustomisedReportComponent_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const effective_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, effective_r9, "dd/MM/yyyy"), " ");
  }
}
function CustomisedReportComponent_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const jobpicked_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", jobpicked_r10, " ");
  }
}
function CustomisedReportComponent_ng_container_65_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "HRS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const list_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r12.notification_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 10, list_r12.notification_date, "dd-MMyyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 13, list_r12.notification_received_date, "dd-MM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r12.notificationupdatedtime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r12.reception_mode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r12.activity_type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r12.trainaction, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 16, list_r12.effectivefromdate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](24, 19, list_r12.effectivetodate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r12.notify_status, " ");
  }
}
function CustomisedReportComponent_ng_container_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomisedReportComponent_ng_container_65_tr_1_Template, 29, 22, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r4.customarray, ctx_r4.searchText));
  }
}
function CustomisedReportComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 23)(2, "span")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " No data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
class CustomisedReportComponent {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.activityboolean = false;
    this.trainactionboolean = false;
    this.ddeffectiveboolean = false;
    this.jobboolean = false;
  }
  ngOnInit() {
    this.loadfun();
  }
  loadfun() {
    // custom report
    this.todayDate = new Date();
    try {
      this.httpClient.get("/fetchnotify/activity").subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.activityarray = JSON.parse(this.responsejsonconvert);
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }
    try {
      this.httpClient.get("/fetchnotify/trainaction").subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.trainactionarray = JSON.parse(this.responsejsonconvert);
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }
    try {
      this.httpClient.get("/fetchnotify/effectdate").subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.effectdatearray = JSON.parse(this.responsejsonconvert);
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }
    try {
      this.httpClient.get("/fetchnotify/jobpickedby").subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.jobpickedbyarray = JSON.parse(this.responsejsonconvert);
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }
  }
  reportcustom() {
    var activity_type = "";
    var trainaction = "";
    var effectivefromdate;
    var jobpickedby = "";
    this.g = "";
    if (this.activityboolean) {
      activity_type += this.ddActivity;
      this.g = {
        activity_type
      };
    }
    if (this.trainactionboolean) {
      trainaction += this.ddTrainaction;
      if (this.activityboolean) {
        this.g = {
          activity_type,
          trainaction
        };
      } else {
        this.g = {
          trainaction
        };
      }
    }
    if (this.ddeffectiveboolean) {
      var newdate = this.ddeffevtivefrom.split("/").reverse().join("/");
      var dummy = new Date(newdate);
      dummy.setMinutes(dummy.getMinutes() + 330);
      effectivefromdate = {
        $gte: dummy.toISOString(),
        $lte: dummy.toISOString()
      };
      if (this.activityboolean && this.trainactionboolean) {
        this.g = {
          activity_type,
          trainaction,
          effectivefromdate
        }; // , effectivefromdate
      } else if (this.activityboolean && !this.trainactionboolean) {
        this.g = {
          activity_type,
          effectivefromdate
        }; // , effectivefromdate
      } else if (!this.activityboolean && this.trainactionboolean) {
        this.g = {
          trainaction,
          effectivefromdate
        }; //, effectivefromdate
      } else if (!this.activityboolean && this.trainactionboolean) {
        this.g = {
          effectivefromdate
        }; // effectivefromdate
      }
    }
    if (this.jobboolean) {
      jobpickedby = this.ddjobpicked;
      if (this.activityboolean && this.trainactionboolean && this.ddeffectiveboolean) {
        this.g = {
          activity_type,
          trainaction,
          jobpickedby,
          effectivefromdate
        }; //, effectivefromdate
      } else if (this.activityboolean && !this.trainactionboolean && this.ddeffectiveboolean) {
        this.g = {
          activity_type,
          jobpickedby,
          effectivefromdate
        }; //, effectivefromdate
      } else if (!this.activityboolean && this.trainactionboolean && this.ddeffectiveboolean) {
        this.g = {
          trainaction,
          jobpickedby,
          effectivefromdate
        }; //, effectivefromdate
      } else if (!this.activityboolean && !this.trainactionboolean && this.ddeffectiveboolean) {
        this.g = {
          jobpickedby,
          effectivefromdate
        }; //effectivefromdate,
      } else if (this.activityboolean && this.trainactionboolean && !this.ddeffectiveboolean) {
        this.g = {
          activity_type,
          trainaction,
          jobpickedby
        };
      } else if (!this.activityboolean && !this.trainactionboolean && !this.ddeffectiveboolean) {
        this.g = {
          jobpickedby
        };
      } else if (!this.activityboolean && this.trainactionboolean && !this.ddeffectiveboolean) {
        this.g = {
          trainaction,
          jobpickedby
        };
      } else if (this.activityboolean && !this.trainactionboolean && !this.ddeffectiveboolean) {
        this.g = {
          activity_type,
          jobpickedby
        };
      }
    }
    try {
      console.log(activity_type);
      this.httpClient.post("/fetchnotify/custom", this.g).subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.customarray = JSON.parse(this.responsejsonconvert);
        console.log(this.customarray);
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }
  }
  activity(activitytype) {
    this.ddActivity = activitytype.target.value;
    this.activityboolean = true;
    console.log(activitytype.target.value);
    try {
      this.httpClient.post("/fetchnotify/trainaction1", {
        activity_type: this.ddActivity
      }).subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.trainactionarray = JSON.parse(this.responsejsonconvert);
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }
    this.reportcustom();
  }
  trainaction(actiontrain) {
    this.ddTrainaction = actiontrain.target.value;
    this.trainactionboolean = true;
    console.log(actiontrain.target.value);
    try {
      this.httpClient.post("/fetchnotify/effectdate1", {
        trainaction: this.ddTrainaction
      }).subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.effectdatearray = JSON.parse(this.responsejsonconvert);
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }
    this.reportcustom();
  }
  effective(effect) {
    this.ddeffevtivefrom = effect.target.value;
    this.ddeffectiveboolean = true;
    var newdate = this.ddeffevtivefrom.split("/").reverse().join("/");
    var dummy = new Date(newdate);
    console.log(effect.target.value);
    try {
      this.httpClient.post("/fetchnotify/jobpickedby1", {
        effectivefromdate: dummy
      }).subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.jobpickedbyarray = JSON.parse(this.responsejsonconvert);
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }
    this.reportcustom();
  }
  jobpickedfun(job) {
    this.ddjobpicked = job.target.value;
    this.jobboolean = true;
    console.log(job.target.value);
    this.reportcustom();
  }
  static #_ = this.ɵfac = function CustomisedReportComponent_Factory(t) {
    return new (t || CustomisedReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CustomisedReportComponent,
    selectors: [["app-customised-report"]],
    decls: 69,
    vars: 18,
    consts: [[1, "formMaster"], [1, "form-group", 2, "margin-left", "10%"], [1, "container"], ["id", "ddActivity", "name", "ddActivity", 1, "dropdown", 3, "ngModel", "ngModelChange", "change"], ["value", "-- Select Station --"], ["style", "font-weight: 600;", 4, "ngFor", "ngForOf"], ["id", "ddTrainaction", "name", "ddTrainaction", 1, "dropdown", 3, "ngModel", "ngModelChange", "change"], ["id", "ddeffevtivefrom", "name", "ddeffevtivefrom", 1, "dropdown", 3, "ngModel", "ngModelChange", "change"], ["value", "-- Select Effective From --"], ["id", "ddjobpicked", "name", "ddjobpicked", 1, "dropdown", 3, "ngModel", "ngModelChange", "change"], ["colspan", "11", 1, "centeredHeading"], [1, "headerSpan"], [2, "color", "#b6ab45"], [1, "searchBox"], [1, "fa-solid", "fa-magnifying-glass"], ["for", "searchText", 1, "searchLabel"], ["name", "searchText", "placeholder", "search by key word(s)", 1, "searchInput", 2, "background-color", "rgba(0, 0, 0, 0)", "color", "antiquewhite", "width", "auto", 3, "ngModel", "ngModelChange"], [4, "ngIf", "ngIfElse"], ["noDataMessage", ""], [2, "font-weight", "600"], [4, "ngFor", "ngForOf"], [1, "pdfIcon"], [1, "form-group"], ["colspan", "11", 2, "text-align", "center", "color", "red"]],
    template: function CustomisedReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomisedReportComponent_Template_select_ngModelChange_4_listener($event) {
          return ctx.ddActivity = $event;
        })("change", function CustomisedReportComponent_Template_select_change_4_listener($event) {
          return ctx.activity($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " -- Select Activity Type -- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CustomisedReportComponent_option_7_Template, 2, 1, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomisedReportComponent_Template_select_ngModelChange_8_listener($event) {
          return ctx.ddTrainaction = $event;
        })("change", function CustomisedReportComponent_Template_select_change_8_listener($event) {
          return ctx.trainaction($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " -- Select Action / Train -- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CustomisedReportComponent_option_11_Template, 2, 1, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomisedReportComponent_Template_select_ngModelChange_12_listener($event) {
          return ctx.ddeffevtivefrom = $event;
        })("change", function CustomisedReportComponent_Template_select_change_12_listener($event) {
          return ctx.effective($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " -- Select Effective From -- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CustomisedReportComponent_option_15_Template, 3, 4, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomisedReportComponent_Template_select_ngModelChange_16_listener($event) {
          return ctx.ddjobpicked = $event;
        })("change", function CustomisedReportComponent_Template_select_change_16_listener($event) {
          return ctx.jobpickedfun($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " -- Select Effective From -- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CustomisedReportComponent_option_19_Template, 2, 1, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 0)(21, "div", 1)(22, "div", 2)(23, "table")(24, "thead")(25, "tr")(26, "th", 10)(27, "p", 11)(28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "TODAY'S ACTIVITY REPORT |");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u00A0Find ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "hat:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomisedReportComponent_Template_input_ngModelChange_40_listener($event) {
          return ctx.searchText = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "tr")(42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Notification Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Notification Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Received Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Received Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Reception Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Activity Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Action/Train");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "EFD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "ETD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Notification Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, CustomisedReportComponent_ng_container_65_Template, 3, 4, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](66, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, CustomisedReportComponent_ng_template_67_Template, 5, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](68);
        let tmp_10_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ddActivity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.activityarray);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ddTrainaction);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.trainactionarray);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ddeffevtivefrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.effectdatearray);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ddjobpicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.jobpickedbyarray);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](32, 12, ctx.todayDate, "dd-MMMM-yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](66, 15, ctx.customarray, ctx.searchText)) == null ? null : tmp_10_0.length) > 0)("ngIfElse", _r6);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _reports_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe],
    styles: ["table[_ngcontent-%COMP%] {\n    margin: 0; \n\n    width: 80%;\n    \n\n\n    background-color: #18283b;\n    border-radius: 10px;\n    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.1);\n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n    font-family: Kode Mono;\n}\n\nth[_ngcontent-%COMP%] {\n    color: #fde89b;\n    font-size: 14px;\n    text-align: center;\n}\n\ntr[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    font-size: 12px;\n    text-align: center;\n    padding-left: 8px;\n    padding-right: 8px;\n    text-shadow: 3px 3px 20px rgb(0, 0, 0);\n    color: white;\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n    width: calc(30% - 16px);\n    \n\n    min-height: 30px;\n    padding: 10px;\n    letter-spacing: 0.5px;\n    border: 0;\n    border-bottom: 2px solid red;\n    margin: 10px;\n}\n\n.headerSpan[_ngcontent-%COMP%] {\n    letter-spacing: 12px;\n}\n\n.centeredHeading[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.searchBox[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end; \n\n}\n\n.searchLabel[_ngcontent-%COMP%] {\n    margin-right: 10px;\n}\n\n\n\u200B.pdfIcon[_ngcontent-%COMP%] {\n    color: orangered;\n    font-size: 16px;\n}\n\n.pdfIcon[_ngcontent-%COMP%]:hover {\n    color: #fde89b;\n}"]
  });
}

/***/ }),

/***/ 4225:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5187);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../session.service */ 2510);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 9862);






var resStr, resJSON;
class DashboardComponent {
  constructor(router, session, httpClient, datepipe) {
    this.router = router;
    this.session = session;
    this.httpClient = httpClient;
    this.datepipe = datepipe;
    this.errorMsg = "All the fields are mandatory";
    this.user = {};
    this.zone = "Southern Railway";
  }
  ngOnInit() {
    this.user = this.session.getUser();
    this.gtUSR();
    this.CheckAdmin();
  }
  CheckAdmin() {
    this.httpClient.get("/users?token=" + this.user.token).subscribe(data => {
      resStr = JSON.stringify(data);
      resJSON = JSON.parse(resStr);
      this.roleindex = this.user.role;
      this.username = this.user.username;
      this.dudename = this.user.dude;
      // console.log("tokenCheck", this.user);
    }, error => {
      console.log(error);
      if (error.status == 401) {
        this.session.delUser();
        window.location.href = "/login";
      }
    });
  }
  gtUSR() {
    this.user = this.session.getUser();
    this.roleindex = this.user.role;
    window.location.href = "/notification";
  }
  logMeOut() {
    this.httpClient.post("/auth/logout", {
      token: this.user.token
    }).subscribe(data => {
      this.session.delUser();
      window.location.href = "/login";
      sessionStorage.clear();
    }, error => {
      console.log(error);
    });
  }
  static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe])],
    decls: 2,
    vars: 0,
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Dashboard Works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }
  });
}

/***/ }),

/***/ 4050:
/*!**********************************!*\
  !*** ./src/app/excel.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExcelService: () => (/* binding */ ExcelService)
/* harmony export */ });
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xlsx */ 1486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5879);


const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
var todayDate;
const getFileName = name => {
  let timeSpan = new Date().toISOString();
  let sheetName = name || "OSOP_Reports";
  let fileName = `${sheetName}_${timeSpan}`;
  return {
    sheetName,
    fileName
  };
};
class ExcelService {
  constructor() {}
  // public exportAsExcelFile(json: any[], excelFileName: string): void {
  //   const myworksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
  //   const myworkbook: XLSX.WorkBook = { Sheets: { 'data': myworksheet }, SheetNames: ['data'] };
  //   const excelBuffer: any = XLSX.write(myworkbook, { bookType: 'xlsx', type: 'array' });
  //   this.saveAsExcelFile(excelBuffer, excelFileName);
  // }
  // private saveAsExcelFile(buffer: any, fileName: string): void {
  //   const data: Blob = new Blob([buffer], {
  //     type: EXCEL_TYPE
  //   });
  //   todayDate = new Date();
  //   FileSaver.saveAs(data, fileName + todayDate+ EXCEL_EXTENSION);
  // }
  static exportTableToExcel(tableId, name) {
    let {
      sheetName,
      fileName
    } = getFileName(name);
    let targetTableElm = document.getElementById(tableId);
    let wb = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.table_to_book(targetTableElm, {
      sheet: sheetName
    });
    xlsx__WEBPACK_IMPORTED_MODULE_0__.writeFile(wb, `${fileName}.xlsx`);
  }
  static exportArrayToExcel(arr, name) {
    let {
      sheetName,
      fileName
    } = getFileName(name);
    var wb = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.book_new();
    var ws = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.json_to_sheet(arr);
    xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.book_append_sheet(wb, ws, sheetName);
    xlsx__WEBPACK_IMPORTED_MODULE_0__.writeFile(wb, `${fileName}.xlsx`);
  }
  static #_ = this.ɵfac = function ExcelService_Factory(t) {
    return new (t || ExcelService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ExcelService,
    factory: ExcelService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3942:
/*!***************************************!*\
  !*** ./src/app/ip-service.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IpServiceService: () => (/* binding */ IpServiceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 9862);


class IpServiceService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getIPAddress() {
    return this.httpClient.get("http://api.ipify.org/?format=json");
  }
  static #_ = this.ɵfac = function IpServiceService_Factory(t) {
    return new (t || IpServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: IpServiceService,
    factory: IpServiceService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2014:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6814);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 9862);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../session.service */ 2510);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5187);
/* harmony import */ var _ip_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ip-service.service */ 3942);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 9347);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 6223);









function LoginComponent_i_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 71);
  }
}
function LoginComponent_i_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 72);
  }
}
function LoginComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.errorMsg, " ");
  }
}
function LoginComponent_span_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.errorMsgRecvy);
  }
}
function LoginComponent_i_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 71);
  }
}
function LoginComponent_i_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 72);
  }
}
function LoginComponent_i_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 71);
  }
}
function LoginComponent_i_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 72);
  }
}
function LoginComponent_div_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r13.errorMsgConfirm, " ");
  }
}
function LoginComponent_div_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r14.passwordMatchError);
  }
}
function LoginComponent_i_162_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 71);
  }
}
function LoginComponent_i_163_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 72);
  }
}
function LoginComponent_div_195_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r19.errorMsgSign, " ");
  }
}
class LoginComponent {
  constructor(datepipe, httpClient, session, router, ipadd, dialog) {
    this.datepipe = datepipe;
    this.httpClient = httpClient;
    this.session = session;
    this.router = router;
    this.ipadd = ipadd;
    this.dialog = dialog;
    this.username = "";
    this.password = "";
    this.error = false;
    this.errorMsg = "";
    this.errorRecvy = false;
    this.errorMsgRecvy = "";
    this.errorSign = false;
    this.errorMsgSign = "";
    this.errorConfirm = false;
    this.errorMsgConfirm = "";
    this.CRyear = new Date().getFullYear();
    this.SuperOption = '';
    this.showPassword = true;
    this.passwordMatchError = "";
    this.dbausers = ["SuperAdmin", "Admin", "DBAU-1", "DBAU-2", "DBAU-3", "DBAU-4", "DBAU-5", "DBAU-6"];
  }
  ngOnInit() {
    var isLoggedIn = this.session.getUser();
    if (isLoggedIn != null) {
      this.router.navigate(["/dashboard"]);
    }
    this.passwords = 'password';
  }
  togglePassword() {
    if (this.passwords === 'password') {
      this.showPassword = false;
      this.passwords = '';
    } else {
      this.passwords = 'password';
      this.showPassword = true;
    }
  }
  loginMe() {
    this.error = false;
    this.errorMsg = "";
    if (!this.username) {
      this.error = true;
      this.errorMsg = "Incorrect Username or Password";
      return;
    }
    if (!this.password) {
      this.error = true;
      this.errorMsg = "Check your Password";
      return;
    }
    this.httpClient.post("/auth/login", {
      username: this.username,
      password: this.password
    }).subscribe(data => {
      // console.log(data);
      // this.UserLog();
      this.session.setUser(data);
      window.location.href = "/dashboard";
    }, error => {
      console.log(error);
      this.error = true;
      this.errorMsg = error.error.message;
    });
  }
  // openDialog(){
  //   const dialogRef = this.dialog.open();
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  getIP() {
    this.ipadd.getIPAddress().subscribe(res => {
      this.ipAddress = res.ip;
    });
  }
  fetcher() {
    this.Loggedusername = this.username;
    var myDate = new Date();
    const iso = myDate.toISOString();
    this.hrs = this.datepipe.transform(iso, 'dd-MMM-yyyy, h:mm:ss a');
  }
  UserLog() {
    this.fetcher();
    this.httpClient.post("/loginlog/savelog", {
      UsrName: this.Loggedusername,
      UsrDate: this.hrs,
      UsrIPv4: this.ipAddress,
      UsrRemark: "Logged-In"
    }).subscribe(data => {
      console.log("USERLOG: " + data);
    }, error => {
      console.log(error);
      this.error = true;
      this.errorMsg = error.error.message;
    });
  }
  signUpValidate() {
    this.errorSign = false;
    this.errorMsgSign = "";
    if (!this.registerdudename) {
      this.errorSign = true;
      this.errorMsgSign = "Incomplete Field Error";
      return;
    }
    if (!this.registerusername) {
      this.errorSign = true;
      this.errorMsgSign = "Incomplete Field Error";
      return;
    }
    if (!this.registerpassword) {
      this.errorSign = true;
      this.errorMsgSign = "Incomplete Field Error";
      return;
    }
    if (!this.registerrole) {
      this.errorSign = true;
      this.errorMsgSign = "Incomplete Field Error";
      return;
    }
    if (!this.registersecretquestion) {
      this.errorSign = true;
      this.errorMsgSign = "Incomplete Field Error";
      return;
    }
    if (!this.registersecretanswer) {
      this.errorSign = true;
      this.errorMsgSign = "Incomplete Field Error";
      return;
    }
    this.signUp();
  }
  recoveryPwdValidate() {
    this.errorRecvy = false;
    this.errorMsgRecvy = "";
    if (!this.recoveryusername) {
      this.errorRecvy = true;
      this.errorMsgRecvy = "Incomplete Field Error";
      return;
    }
    if (!this.recoverysecretquestion) {
      this.errorRecvy = true;
      this.errorMsgRecvy = "Incomplete Field Error";
      return;
    }
    if (!this.recoverysecretanswer) {
      this.errorRecvy = true;
      this.errorMsgRecvy = "Incomplete Field Error";
      return;
    }
    this.recoverPassword();
  }
  DisablePaste(event) {
    alert("You can't paste in this input");
    event.preventDefault();
  }
  updatePwdValidate() {
    this.errorConfirm = false;
    this.errorMsgConfirm = "";
    if (!this.updatepassword) {
      this.errorConfirm = true;
      this.errorMsgConfirm = "Incomplete Field Error";
      return;
    }
    if (!this.confirmpassword) {
      this.errorConfirm = true;
      this.errorMsgConfirm = "Incomplete Field Error";
      return;
    }
    this.updatePassword();
  }
  signUp() {
    this.httpClient.post("/registeruser/registration", {
      dude: this.registerdudename,
      username: this.registerusername,
      password: this.registerpassword,
      role: this.registerrole,
      token: null,
      secretquestion: this.registersecretquestion,
      secretanswer: this.registersecretanswer,
      isActive: "false"
    }).subscribe(data => {
      console.log("USERregistration:", data);
    }, error => {
      console.log(error);
      this.error = true;
      this.errorMsg = error.error.message;
    });
    window.location.reload();
  }
  recoverPassword() {
    try {
      this.httpClient.post("/auth/recover", {
        username: this.recoveryusername,
        secretquestion: this.recoverysecretquestion,
        secretanswer: this.recoverysecretanswer
      }).subscribe(data => {
        console.log("RecoverPassword:", data);
        this.updateusername = this.recoveryusername;
        document.getElementById('forgotPassword').style.display = 'none';
        document.getElementById('registerNewPassword').style.display = 'block';
      }, error => {
        if (error.status === 0) {
          console.error('An error occurred:', error.error);
          this.recoveryValidationResponse = "Wrong username or Secret question or Answer.";
        } else {
          console.error(`Backend returned code ${error.status}, body was: `, error.error);
          this.recoveryValidationResponse = "Wrong username or Secret question or Answer.";
        }
        // console.log("recvyError", error)
        this.error = true;
        this.errorMsg = error.error.message;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Something bad happened; please try again later.'));
      });
    } catch {
      console.log("error in uploading");
    }
  }
  updatePassword() {
    this.updateusername;
    if (this.updatepassword === this.confirmpassword) {
      this.httpClient.post("/auth/updatepassword", {
        username: this.updateusername,
        password: this.confirmpassword
      }).subscribe(data => {
        console.log("Password Updated:", data);
      }, error => {
        console.log(error);
        this.error = true;
        this.errorMsg = error.error.message;
      });
      window.location.reload();
      console.log("Password Correct");
    } else {
      console.log("Passwords do not match");
      this.passwordMatchError = "Passwords do not match.";
    }
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ip_service_service__WEBPACK_IMPORTED_MODULE_1__.IpServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 202,
    vars: 33,
    consts: [[1, "modal"], [1, "modal__container"], [1, "modal__featured"], [1, "modal__circle"], ["src", "/assets/loginimg/login2.jpg", 1, "modal__product"], [1, "modal__content"], [1, "logocarrier"], ["src", "/assets/images/irlogo.png", "alt", "ir-logo", 1, "bg1"], [2, "text-align", "center"], ["id", "login-form"], ["loginform", ""], [1, "form-list"], [1, "form-list__row"], ["type", "text", "name", "username", "id", "username", "required", "", 3, "ngModel", "ngModelChange"], [1, "pwdEyeFrame"], ["type", "password", "name", "cc_number", "required", "", 3, "type", "ngModel", "ngModelChange"], [1, "pwdEye", 3, "click"], ["class", "fa-regular fa-eye", 4, "ngIf"], ["class", "fa-regular fa-eye-slash", 4, "ngIf"], ["style", "color: red;", 4, "ngIf"], ["type", "button", 1, "button", 3, "click"], [2, "font-size", "12px"], [1, "register"], ["onclick", "document.getElementById('createAccount').style.display='block'"], [1, "fa-solid", "fa-user-plus"], ["onclick", "document.getElementById('forgotPassword').style.display='block'"], [1, "fa-solid", "fa-link-slash"], [1, "w3-container"], ["id", "forgotPassword", 1, "w3-modal"], ["forgotPassword", ""], [1, "w3-modal-content", "w3-card-4", "w3-animate-zoom", 2, "max-width", "600px"], [1, "close-center"], ["onclick", "document.getElementById('forgotPassword').style.display='none'", "title", "Close Modal"], [1, "headerModal"], ["id", "pwdrecovery-form", 1, "w3-container"], ["pwdrecoveryform", ""], [1, "w3-section"], ["type", "text", "name", "recoveryusername", "id", "recoveryusername", "required", "", 3, "ngModel", "ngModelChange"], ["name", "recoverysecretquestion", "id", "recoverysecretquestion", 3, "ngModel", "ngModelChange"], ["disabled", "", "selected", ""], ["value", "kids name"], ["value", "spouse name"], ["type", "text", "name", "recoverysecretanswer", "id", "recoverysecretanswer", "required", "", 3, "ngModel", "ngModelChange"], [2, "color", "red"], [1, "closeModal"], ["onclick", "document.getElementById('forgotPassword').style.display='none'", "type", "button", 1, "buttonClose"], ["id", "registerNewPassword", 1, "w3-modal"], ["registerNewPassword", ""], ["onclick", "document.getElementById('registerNewPassword').style.display='none'", "title", "Close Modal"], ["id", "updatepwd-form", 1, "w3-container"], ["updatepwdform", ""], ["type", "text", "disabled", "", "name", "recoveryusername", 3, "ngModel", "ngModelChange"], ["type", "password", "id", "updatepassword", "name", "updatepassword", "required", "", 3, "type", "ngModel", "ngModelChange"], ["type", "password", "id", "confirmpassword", "name", "confirmpassword", "required", "", 3, "type", "ngModel", "ngModelChange", "paste"], ["onclick", "document.getElementById('registerNewPassword').style.display='none'", "type", "button", 1, "buttonClose"], ["id", "createAccount", 1, "w3-modal"], ["createAccount", ""], ["onclick", "document.getElementById('createAccount').style.display='none'", "title", "Close Modal"], ["id", "signup-form", 1, "w3-container"], ["signupform", ""], ["type", "text", "name", "registerdudename", "id", "registerdudename", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "registerusername", "id", "registerusername", "required", "", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "registerpassword", "id", "registerpassword", "required", "", 3, "type", "ngModel", "ngModelChange"], ["name", "registerrole", "id", "roregisterrolele", "required", "", 3, "ngModel", "ngModelChange"], ["value", "Administrator"], ["value", "Supervisor"], ["value", "dbaUser"], ["name", "registersecretquestion", "id", "registersecretquestion", "required", "", 3, "ngModel", "ngModelChange"], ["value", "favbook"], ["type", "text", "name", "registersecretanswer", "id", "registersecretanswer", "required", "", 3, "ngModel", "ngModelChange"], ["onclick", "document.getElementById('createAccount').style.display='none'", "type", "button", 1, "buttonClose"], [1, "fa-regular", "fa-eye"], [1, "fa-regular", "fa-eye-slash"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3)(4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Welcome | DB Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 9, 10)(13, "ul", 11)(14, "li", 12)(15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) {
          return ctx.username = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 12)(19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14)(22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_22_listener($event) {
          return ctx.password = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_23_listener() {
          return ctx.togglePassword();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, LoginComponent_i_24_Template, 1, 0, "i", 17)(25, LoginComponent_i_25_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, LoginComponent_div_27_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "li")(29, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_29_listener() {
          return ctx.loginMe();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "li", 21)(32, "span", 22)(33, "a", 23)(34, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Create An Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 22)(38, "a", 25)(39, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 27)(43, "div", 28, 29)(45, "div", 30)(46, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span", 32)(49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " Password Recovery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "form", 34, 35)(55, "div", 36)(56, "ul", 11)(57, "li", 12)(58, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_60_listener($event) {
          return ctx.recoveryusername = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "li", 12)(62, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Choose Your Secret Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 14)(65, "select", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_select_ngModelChange_65_listener($event) {
          return ctx.recoverysecretquestion = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "-- Select Question--");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Kids Name?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Spouse Name?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "li", 12)(73, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Enter The Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_75_listener($event) {
          return ctx.recoverysecretanswer = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "li", 12)(77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](78, LoginComponent_span_78_Template, 2, 1, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "li")(84, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_84_listener() {
          return ctx.recoveryPwdValidate();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Recover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 44)(87, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 27)(90, "div", 46, 47)(92, "div", 30)(93, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "span", 48)(96, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, " Update Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "form", 49, 50)(102, "div", 36)(103, "ul", 11)(104, "li", 12)(105, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_107_listener($event) {
          return ctx.recoveryusername = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "li", 12)(109, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Create New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 14)(112, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_112_listener($event) {
          return ctx.updatepassword = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_113_listener() {
          return ctx.togglePassword();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](114, LoginComponent_i_114_Template, 1, 0, "i", 17)(115, LoginComponent_i_115_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "li", 12)(117, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Confirm New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 14)(120, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_120_listener($event) {
          return ctx.confirmpassword = $event;
        })("paste", function LoginComponent_Template_input_paste_120_listener($event) {
          return ctx.DisablePaste($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_121_listener() {
          return ctx.togglePassword();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](122, LoginComponent_i_122_Template, 1, 0, "i", 17)(123, LoginComponent_i_123_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](125, LoginComponent_div_125_Template, 2, 1, "div", 19)(126, LoginComponent_div_126_Template, 3, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "li")(128, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_128_listener() {
          return ctx.updatePwdValidate();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 44)(131, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "div", 27)(134, "div", 55, 56)(136, "div", 30)(137, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "span", 57)(140, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, " SignUp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "form", 58, 59)(146, "div", 36)(147, "ul", 11)(148, "li", 12)(149, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_151_listener($event) {
          return ctx.registerdudename = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "li", 12)(153, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_155_listener($event) {
          return ctx.registerusername = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "li", 12)(157, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "div", 14)(160, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_160_listener($event) {
          return ctx.registerpassword = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_161_listener() {
          return ctx.togglePassword();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](162, LoginComponent_i_162_Template, 1, 0, "i", 17)(163, LoginComponent_i_163_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "li", 12)(165, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "Select Your Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "div", 14)(168, "select", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_select_ngModelChange_168_listener($event) {
          return ctx.registerrole = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "-- Select Role--");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, "Administrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "Supervisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "dbaUser");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "li", 12)(178, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "Choose Your Secret Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "div", 14)(181, "select", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_select_ngModelChange_181_listener($event) {
          return ctx.registersecretquestion = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "-- Select Question--");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, "Kids Name?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, "Spouse Name?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "option", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "What is your favorite Book?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "li", 12)(191, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "Enter The Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_193_listener($event) {
          return ctx.registersecretanswer = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](195, LoginComponent_div_195_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "li")(197, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_197_listener() {
          return ctx.signUpValidate();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, "SignUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "div", 44)(200, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.passwords)("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.recoveryusername);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.recoverysecretquestion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.recoverysecretanswer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorRecvy);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.recoveryValidationResponse);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.resCheck);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.recoveryusername);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.passwords)("ngModel", ctx.updatepassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.passwords)("ngModel", ctx.confirmpassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorConfirm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passwordMatchError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.registerdudename);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.registerusername);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.passwords)("ngModel", ctx.registerpassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.registerrole);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.registersecretquestion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.registersecretanswer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorSign);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm],
    styles: [".logocarrier[_ngcontent-%COMP%] {\n  margin-left: 120px;\n}\n\n.bg1[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 50px;\n  font-weight: 600;\n}"]
  });
}

/***/ }),

/***/ 6878:
/*!********************************************************!*\
  !*** ./src/app/notification/notification.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationComponent: () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 3519);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../session.service */ 2510);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 9862);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6593);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 6223);







function NotificationComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 34)(2, "p")(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Case Sequel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 35)(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 36)(9, "div", 37)(10, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Activity Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NotificationComponent_div_42_Template_select_ngModelChange_12_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const inputSet_r4 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](inputSet_r4.activity_type = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "-- Select an activity --");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Re-Firing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Switch Setting");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Add Coach");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Add Route Class");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Add ISL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "TT-Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Quota Distribution");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "New Train");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Specials");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Frequent Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Src/Destn Extn");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Token Lost (Non-Train Activity)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "TDM (Non-Train Activity)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 37)(44, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Train/Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NotificationComponent_div_42_Template_input_ngModelChange_46_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const inputSet_r4 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](inputSet_r4.trainaction = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 37)(48, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Effective From Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NotificationComponent_div_42_Template_input_ngModelChange_50_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const inputSet_r4 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](inputSet_r4.efromdate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 37)(52, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Effective To Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NotificationComponent_div_42_Template_input_ngModelChange_54_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const inputSet_r4 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](inputSet_r4.etodate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const inputSet_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A0", i_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("for", "activity_type", i_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("name", "activity_type", i_r5 + 1, "")("id", "activity_type", i_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", inputSet_r4.activity_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("for", "trainaction", i_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "trainaction", i_r5 + 1, "")("name", "trainaction", i_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", inputSet_r4.trainaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("for", "efromdate", i_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "efromdate", i_r5 + 1, "")("name", "efromdate", i_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", inputSet_r4.efromdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("for", "etodate", i_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "etodate", i_r5 + 1, "")("name", "etodate", i_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", inputSet_r4.etodate);
  }
}
function NotificationComponent_span_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Successfully Uploaded: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.pdfname);
  }
}
function NotificationComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.errorMsg);
  }
}
class NotificationComponent {
  constructor(session, httpClient, sanitizer) {
    this.session = session;
    this.httpClient = httpClient;
    this.sanitizer = sanitizer;
    this.showTokenLost = false;
    this.showFrequentChange = false;
    this.notification_number = '';
    this.reception_mode = '';
    // activity_type: string = '';
    this.pdffilenotification = null;
    this.tokenLost = false;
    this.frequentChange = false;
    this.notify_status = 'Open';
    this.pdfname = '';
    this.inputSets = [];
    this.pdfstatus = false;
  }
  ngOnInit() {
    this.user = this.session.getUser();
    this.dudename = this.user.dude;
    this.addInputSet();
  }
  addInputSet() {
    this.inputSets.push({
      activity_type: '',
      trainaction: '',
      efromdate: '',
      etodate: ''
    });
  }
  show() {
    console.log("testArray", JSON.stringify(this.inputSets));
  }
  toggleCheckboxes() {
    const activityType = document.getElementById('activitytype').value;
    this.showTokenLost = activityType === 'token lost';
    this.showFrequentChange = activityType === 'frequent change';
  }
  onNotifypdfSelected(event, type) {
    this.pdffilenotification = event.target.files[0];
    const fileName = event.target.files[0].name;
    if (!fileName.toLowerCase().endsWith('.pdf')) {
      alert('Please upload a PDF file.');
      return;
    }
    if (type === 'notificationpdf') {
      this.pdfname = fileName;
    }
    this.pdfstatus = true;
  }
  RegisterNotifyerrorCheck() {
    this.error = false;
    this.errorMsg = "";
    if (!this.notification_number) {
      this.error = true;
      this.errorMsg = "All Fields Are Mandatory";
      return;
    }
    if (!this.notification_date) {
      this.error = true;
      this.errorMsg = "All Fields Are Mandatory";
      return;
    }
    if (!this.notification_received_date) {
      this.error = true;
      this.errorMsg = "All Fields Are Mandatory";
      return;
    }
    if (!this.notification_received_time) {
      this.error = true;
      this.errorMsg = "All Fields Are Mandatory";
      return;
    }
    if (!this.reception_mode) {
      this.error = true;
      this.errorMsg = "All Fields Are Mandatory";
      return;
    }
    if (!this.inputSets) {
      this.error = true;
      this.errorMsg = "All Fields Are Mandatory";
      return;
    } else {
      this.registerNotify();
    }
  }
  registerNotify() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Do You Wish To Submit?',
      text: "Data will be saved to Database",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit'
    }).then(result => {
      if (result.isConfirmed) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Submitted!', 'Data Saved', 'success');
        try {
          this.responsejsonconvert = JSON.stringify(this.inputSets);
          this.jsonarrayconvert = JSON.parse(this.responsejsonconvert);
          console.log(this.jsonarrayconvert);
          for (var t = 0; t < this.jsonarrayconvert.length; t++) {
            const formData = new FormData();
            formData.append('notification_number', this.notification_number);
            formData.append('notification_date', this.notification_date);
            formData.append('notification_received_date', this.notification_received_date);
            formData.append('notification_received_time', this.notification_received_time);
            formData.append('notificationupdatedby', this.dudename);
            formData.append('reception_mode', this.reception_mode);
            formData.append('notify_status', this.notify_status);
            formData.append('activity_type', this.jsonarrayconvert[t].activity_type);
            formData.append('trainaction', this.jsonarrayconvert[t].trainaction);
            formData.append('effectivefromdate', this.jsonarrayconvert[t].efromdate);
            formData.append('effectivetodate', this.jsonarrayconvert[t].etodate);
            formData.append('pdfstatus', this.pdfstatus.toString());
            if (this.pdfstatus) {
              formData.append('pdffilenotification', this.pdffilenotification, this.pdffilenotification.name);
            }
            // to append "inputSets as Array" 
            this.httpClient.post("/regnotify/notification", formData).subscribe(response => {
              console.log("Uploading values and PDF", response);
              window.location.reload();
            }, error => {
              console.log(error);
              console.log('Unable to Save Data:', error);
              this.error = true;
              this.errorMsg = error.error.message;
            });
          }
        } catch (error) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: 'Data Not Saved. Check if any field is empty'
          });
          console.log("Data Not Saved");
        }
      }
    });
  }
  static #_ = this.ɵfac = function NotificationComponent_Factory(t) {
    return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NotificationComponent,
    selectors: [["app-notification"]],
    decls: 56,
    vars: 8,
    consts: [["rel", "preconnect", "href", "https://fonts.googleapis.com"], ["rel", "preconnect", "href", "https://fonts.gstatic.com", "crossorigin", ""], ["href", "https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap", "rel", "stylesheet"], [1, "formMaster"], [1, "form-group", 2, "margin-left", "10%"], ["novalidate", ""], ["form", "ngForm"], [1, "container"], [1, "form-list"], [1, "col-sm-6", "form-group"], [1, "sectioninput"], ["for", "notification_number"], ["type", "text", "id", "notification_number", "placeholder", "Enter Notification Number", "name", "notification_number", 2, "text-transform", "uppercase", 3, "ngModel", "ngModelChange"], ["for", "notification_date"], ["type", "date", "id", "notification_date", "name", "notification_date", 3, "ngModel", "ngModelChange"], ["for", "notification_received_date"], ["type", "date", "id", "notification_received_date", "name", "notification_received_date", 3, "ngModel", "ngModelChange"], ["for", "notification_received_time"], ["type", "time", "id", "notification_received_time", "name", "notification_received_time", 3, "ngModel", "ngModelChange"], ["for", "reception_mode"], ["name", "reception_mode", "id", "reception_mode", 3, "ngModel", "ngModelChange"], ["disabled", "", "selected", ""], ["value", "whatsapp"], ["value", "Telegram"], ["value", "Mail"], ["value", "Officers"], [4, "ngFor", "ngForOf"], [1, "sequence", 3, "click"], [1, "fa-solid", "fa-circle-plus"], ["for", "pdffilenotification"], ["type", "file", "id", "pdffilenotification", "accept", ".pdf", 3, "change"], [4, "ngIf"], ["class", "sectioninput", 4, "ngIf"], ["type", "submit", 1, "button", 3, "click"], [1, "sequel"], [2, "color", "#FF5F1F"], [1, "input-set"], [1, "form-group"], [3, "for"], ["required", "", 3, "name", "id", "ngModel", "ngModelChange"], ["value", "refiring"], ["value", "switch setting"], ["value", "add coach"], ["value", "add route class"], ["value", "add isl"], ["value", "tt change"], ["value", "quota distribution"], ["value", "new train"], ["value", "specials"], ["value", "frequent change"], ["value", "src-dstn extn"], ["value", "token lost"], ["value", "tdm"], ["value", "other"], ["type", "text", "required", "", 3, "id", "name", "ngModel", "ngModelChange"], ["type", "date", "required", "", 3, "id", "name", "ngModel", "ngModelChange"], [2, "color", "red"]],
    template: function NotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "link", 0)(1, "link", 1)(2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "form", 5, 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Notification Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NotificationComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.notification_number = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Date Of Notification Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NotificationComponent_Template_input_ngModelChange_17_listener($event) {
          return ctx.notification_date = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10)(19, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Date Of Notification Received");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NotificationComponent_Template_input_ngModelChange_21_listener($event) {
          return ctx.notification_received_date = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 10)(23, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Notification Received Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NotificationComponent_Template_input_ngModelChange_25_listener($event) {
          return ctx.notification_received_time = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 10)(27, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Mode of Reception");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 10)(30, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NotificationComponent_Template_select_ngModelChange_30_listener($event) {
          return ctx.reception_mode = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "-- Select --");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "WhatsApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Telegram");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Officers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, NotificationComponent_div_42_Template, 55, 17, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 10)(44, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationComponent_Template_span_click_44_listener() {
          return ctx.addInputSet();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "\u00A0Add sequence");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 10)(48, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Notification PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function NotificationComponent_Template_input_change_50_listener($event) {
          return ctx.onNotifypdfSelected($event, "notificationpdf");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, NotificationComponent_span_51_Template, 4, 1, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, NotificationComponent_div_52_Template, 3, 1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div")(54, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_54_listener() {
          return ctx.RegisterNotifyerrorCheck();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Sumbit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.notification_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.notification_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.notification_received_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.notification_received_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.reception_mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.inputSets);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pdfname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm],
    styles: [".container[_ngcontent-%COMP%] {\n    display: flex;\n    place-items: center;\n    justify-content: center;\n    align-items: center;\n    height: 90vh;\n    font-family: \"Chakra Petch\", sans-serif;\n    \n\n    width: 100%;\n    \n\n    color: #FFFFF0;\n    padding: 25px;\n    box-sizing: border-box;\n    \n\n}\n\nlabel[_ngcontent-%COMP%] {\n    color: #fde89b;\n}\n\n.sectioninput[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n}\n\n.form-list[_ngcontent-%COMP%] {\n    background-color: #18283b;\n    padding: 50px;\n    width: 50%;\n    border-radius: 10px;\n    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.1);\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    \n\n    min-height: 30px;\n    padding: 3px;\n    letter-spacing: 0.5px;\n    border: 0;\n    border-bottom: 2px solid red;\n\n}\n\ninput[type=\"date\"][_ngcontent-%COMP%] {\n    display: inline-block;\n    position: relative;\n}\n\ninput[type=\"date\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n    background: transparent;\n    bottom: 0;\n    color: transparent;\n    cursor: pointer;\n    height: auto;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: auto;\n}\n\ninput[type=\"time\"][_ngcontent-%COMP%] {\n    position: relative;\n}\n\ninput[type=\"time\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n    display: block;\n    top: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    background: transparent;\n}\n\noption[_ngcontent-%COMP%] {\n    background-color: #f5f6fa;\n    color: black;\n}\n\ninput[_ngcontent-%COMP%]:valid {\n    border-bottom: 3px solid #FF5F1F;\n}\n\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n    outline: none;\n    border-bottom: 4px solid #fbcf34;\n}\n\nselect[_ngcontent-%COMP%] {\n    width: calc(100% - 10px);\n    min-height: 38px;\n    padding: 3px;\n    letter-spacing: 0.5px;\n    \n\n    border-bottom: 3px solid #FF5F1F;\n}\n\n.button[_ngcontent-%COMP%] {\n    display: flex;\n    place-items: center;\n    justify-content: center;\n    align-items: center;\n    color: #ffffff;\n    background-color: #ffa500;\n    padding: 12px 25px;\n    font-size: 12px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    border: 0;\n    border-radius: 2px;\n    outline: 0;\n    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);\n    transition: all .2s;\n}\n\n.button[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:active, .button[_ngcontent-%COMP%]:focus {\n    transform: scale(1.1);\n}\n\n.input-set[_ngcontent-%COMP%] {\n    display: flex;\n    margin-bottom: 10px;\n}\n\n.input-set[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    margin-right: 10px;\n}\n\n.sequence[_ngcontent-%COMP%] {\n    float: right;\n    color: #f1cb3e;\n    font-weight: 500;\n}\n\n.sequence[_ngcontent-%COMP%]:hover {\n    color: #FFFFF0;\n}\n\n.sequel[_ngcontent-%COMP%] {\n    text-align: start;\n    color: #FFFFF0;\n    font-weight: 500;\n    padding-bottom: 8px;\n}"]
  });
}

/***/ }),

/***/ 2204:
/*!****************************************!*\
  !*** ./src/app/reports/filter.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterPipe: () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5879);

class FilterPipe {
  transform(items, searchText) {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      // Customize this condition according to your data structure
      return item.notification_number.toLowerCase().includes(searchText) || item.notification_date.toLowerCase().includes(searchText) || item.notification_received_date.toLowerCase().includes(searchText) || item.notificationupdatedtime.toLowerCase().includes(searchText) || item.reception_mode.toLowerCase().includes(searchText) || item.activity_type.toLowerCase().includes(searchText) || item.trainaction.toLowerCase().includes(searchText) || item.effectivefromdate.toLowerCase().includes(searchText) || item.effectivetodate.toLowerCase().includes(searchText) || item.notify_status.toLowerCase().includes(searchText);
    });
  }
  static #_ = this.ɵfac = function FilterPipe_Factory(t) {
    return new (t || FilterPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "filter",
    type: FilterPipe,
    pure: true
  });
}

/***/ }),

/***/ 5734:
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsComponent: () => (/* binding */ ReportsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../session.service */ 2510);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 9862);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6593);
/* harmony import */ var _sanitizer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sanitizer.service */ 606);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 6223);
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.pipe */ 2204);









function ReportsComponent_ng_container_48_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "HRS");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td", 29)(26, "div", 30)(27, "p")(28, "span")(29, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportsComponent_ng_container_48_tr_1_Template_a_click_29_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const list_r5 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.openPDF(list_r5._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const list_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", list_r5.notification_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 10, list_r5.notification_date, "dd-MMyyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](8, 13, list_r5.notification_received_date, "dd-MM-yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", list_r5.notificationupdatedtime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", list_r5.reception_mode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", list_r5.activity_type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", list_r5.trainaction, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](21, 16, list_r5.effectivefromdate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](24, 19, list_r5.effectivetodate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", list_r5.notify_status, " ");
  }
}
function ReportsComponent_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReportsComponent_ng_container_48_tr_1_Template, 33, 22, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r0.jsonarrayconvert, ctx_r0.searchText));
  }
}
function ReportsComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 33)(2, "span")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " No data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function ReportsComponent_span_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Loading please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class ReportsComponent {
  constructor(session, httpClient, sanitizer, sanitizerService) {
    this.session = session;
    this.httpClient = httpClient;
    this.sanitizer = sanitizer;
    this.sanitizerService = sanitizerService;
    this.ProgLoaded = false;
    this.flagpdf = false;
  }
  ngOnInit() {
    this.loadReport();
  }
  loadReport() {
    this.todayDate = new Date();
    try {
      this.httpClient.get("/fetchnotify/fetchdailyreport").subscribe(data => {
        var responsejsonconvert = JSON.stringify(data);
        this.jsonarrayconvert = JSON.parse(responsejsonconvert);
        console.log(this.jsonarrayconvert);
        console.log("sundar");
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }
  }
  openPDF(value) {
    this.idGetter = value;
    console.log(value);
    this.viewPDF();
  }
  viewPDF() {
    document.getElementById('pdfOpenModal').style.display = 'block';
    this.ProgLoaded = true;
    const pdfObservable = this.httpClient.get(`/fetchnotify/fetchnotificationID/${this.idGetter}`, {
      responseType: 'blob'
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)([pdfObservable]).subscribe(([pdfBlob]) => {
      // Handling PDF
      this.pdfRaw = URL.createObjectURL(pdfBlob);
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfRaw);
    });
  }
  static #_ = this.ɵfac = function ReportsComponent_Factory(t) {
    return new (t || ReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_sanitizer_service__WEBPACK_IMPORTED_MODULE_1__.SanitizerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ReportsComponent,
    selectors: [["app-reports"]],
    decls: 74,
    vars: 12,
    consts: [["rel", "preconnect", "href", "https://fonts.googleapis.com"], ["rel", "preconnect", "href", "https://fonts.gstatic.com", "crossorigin", ""], ["href", "https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap", "rel", "stylesheet"], [1, "formMaster"], [1, "form-group", 2, "margin-left", "10%"], [1, "container"], ["colspan", "11", 1, "centeredHeading"], [1, "headerSpan"], [2, "color", "#b6ab45"], [1, "searchBox"], [1, "fa-solid", "fa-magnifying-glass"], ["for", "searchText", 1, "searchLabel"], ["name", "searchText", "placeholder", "search by key word(s)", 1, "searchInput", 2, "background-color", "rgba(0, 0, 0, 0)", "color", "antiquewhite", "width", "auto", 3, "ngModel", "ngModelChange"], [4, "ngIf", "ngIfElse"], ["noDataMessage", ""], [1, "w3-container"], ["id", "pdfOpenModal", 1, "w3-modal"], [1, "w3-modal-content", "w3-card-4", "w3-animate-zoom", 2, "max-width", "900px", "max-height", "950px"], [1, "close-center"], ["onclick", "document.getElementById('pdfOpenModal').style.display='none'", "title", "Close Modal"], [1, "headerModal"], [1, "w3-section"], [1, "form-list"], [1, "form-list__row"], [4, "ngIf"], ["type", "application/pdf", "width", "100%", "height", "500px", 3, "src"], [1, "closeModal"], ["onclick", "document.getElementById('pdfOpenModal').style.display='none'", "type", "button", 1, "buttonClose"], [4, "ngFor", "ngForOf"], [1, "pdfIcon"], [1, "form-group"], [3, "click"], [1, "fa-regular", "fa-file-pdf"], ["colspan", "11", 2, "text-align", "center", "color", "red"]],
    template: function ReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "link", 0)(1, "link", 1)(2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "table")(7, "thead")(8, "tr")(9, "th", 6)(10, "p", 7)(11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "TODAY'S ACTIVITY REPORT |");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\u00A0Find ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "hat:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReportsComponent_Template_input_ngModelChange_23_listener($event) {
          return ctx.searchText = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "tr")(25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Notification Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Notification Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Received Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Received Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Reception Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Activity Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Action/Train");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "EFD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "ETD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Notification Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, ReportsComponent_ng_container_48_Template, 3, 4, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, ReportsComponent_ng_template_50_Template, 5, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 15)(53, "div", 16)(54, "div", 17)(55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "span", 19)(58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, " PDF Viewer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "form", 15)(63, "div", 21)(64, "ul", 22)(65, "li", 23)(66, "div")(67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, ReportsComponent_span_68_Template, 3, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "embed", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 26)(72, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](51);
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](15, 6, ctx.todayDate, "dd-MMMM-yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](49, 9, ctx.jsonarrayconvert, ctx.searchText)) == null ? null : tmp_2_0.length) > 0)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ProgLoaded === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.pdfUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeResourceUrl"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe],
    styles: ["table[_ngcontent-%COMP%] {\n    margin: 0; \n\n    width: 80%;\n    \n\n\n    background-color: #18283b;\n    border-radius: 10px;\n    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.1);\n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n    font-family: Kode Mono;\n}\n\nth[_ngcontent-%COMP%] {\n    color: #fde89b;\n    font-size: 14px;\n    text-align: center;\n}\n\ntr[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    font-size: 12px;\n    text-align: center;\n    padding-left: 8px;\n    padding-right: 8px;\n    text-shadow: 3px 3px 20px rgb(0, 0, 0);\n    color: white;\n}\n\n\n.headerSpan[_ngcontent-%COMP%] {\n    letter-spacing: 12px;\n}\n\n.centeredHeading[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.searchBox[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end; \n\n}\n\n.searchLabel[_ngcontent-%COMP%] {\n    margin-right: 10px;\n}\n\n\n\u200B.pdfIcon[_ngcontent-%COMP%] {\n    color: orangered;\n    font-size: 16px;\n}\n\n.pdfIcon[_ngcontent-%COMP%]:hover {\n    color: #fde89b;\n}"]
  });
}

/***/ }),

/***/ 606:
/*!**************************************!*\
  !*** ./src/app/sanitizer.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SanitizerService: () => (/* binding */ SanitizerService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 9862);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6593);




class SanitizerService {
  constructor(httpClient, sanitizer) {
    this.httpClient = httpClient;
    this.sanitizer = sanitizer;
  }
  transformPdfUrl(id) {
    return this.httpClient.get(`/fetchnotify/fetchnotificationID/${id}`, {
      responseType: 'blob'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(pdfBlob => {
      const pdfRaw = URL.createObjectURL(pdfBlob);
      return this.sanitizer.bypassSecurityTrustResourceUrl(pdfRaw);
    }));
  }
  static #_ = this.ɵfac = function SanitizerService_Factory(t) {
    return new (t || SanitizerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SanitizerService,
    factory: SanitizerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2510:
/*!************************************!*\
  !*** ./src/app/session.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionService: () => (/* binding */ SessionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5879);

class SessionService {
  constructor() {}
  getUser() {
    var user = localStorage.getItem("railUser");
    user = user == null ? null : JSON.parse(user);
    return user;
  }
  setUser(user) {
    localStorage.setItem("railUser", JSON.stringify(user));
  }
  delUser() {
    localStorage.removeItem("railUser");
  }
  static #_ = this.ɵfac = function SessionService_Factory(t) {
    return new (t || SessionService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SessionService,
    factory: SessionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4200:
/*!********************************************!*\
  !*** ./src/app/status/status.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusComponent: () => (/* binding */ StatusComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7504);
/* harmony import */ var _sanitizer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sanitizer.service */ 606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../session.service */ 2510);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 9862);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6593);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 6223);









function StatusComponent_tr_28_span_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatusComponent_tr_28_span_16_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const list_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.openPDF(list_r4._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function StatusComponent_tr_28_td_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td")(1, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatusComponent_tr_28_td_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const list_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.assigneduservalue(list_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const list_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](list_r4.notify_status);
  }
}
function StatusComponent_tr_28_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td")(1, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatusComponent_tr_28_td_18_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const list_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.assigneduservalue(list_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const list_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", list_r4.notify_status, "-", list_r4.jobpickedby, "");
  }
}
function StatusComponent_tr_28_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td")(1, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatusComponent_tr_28_td_19_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);
      const list_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.assigneduservalue(list_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const list_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](list_r4.notify_status);
  }
}
function StatusComponent_tr_28_td_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td")(1, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatusComponent_tr_28_td_20_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const list_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.assigneduservalue(list_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function StatusComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, StatusComponent_tr_28_span_16_Template, 3, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, StatusComponent_tr_28_td_17_Template, 3, 1, "td", 17)(18, StatusComponent_tr_28_td_18_Template, 3, 2, "td", 17)(19, StatusComponent_tr_28_td_19_Template, 3, 1, "td", 17)(20, StatusComponent_tr_28_td_20_Template, 3, 0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const list_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", i_r5 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", list_r4.notification_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", list_r4.activity_type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", list_r4.trainaction, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 11, list_r4.effectivefromdate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](14, 14, list_r4.effectivetodate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", list_r4.pdfstatus === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", list_r4.notify_status === "Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", list_r4.notify_status === "processing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", list_r4.notify_status === "Awaited for Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", list_r4.notify_status === "Closed");
  }
}
function StatusComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Loading please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function StatusComponent_p_203_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p")(1, "span")(2, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatusComponent_p_203_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r29.openPDFread());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function StatusComponent_p_251_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p")(1, "span")(2, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatusComponent_p_251_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.openPDFread());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class StatusComponent {
  constructor(session, httpClient, sanitizer, sanitizerService) {
    this.session = session;
    this.httpClient = httpClient;
    this.sanitizer = sanitizer;
    this.sanitizerService = sanitizerService;
    this.ProgLoaded = false;
    this.flagpdf = false;
    this.alertflag = false;
  }
  ngOnInit() {
    this.statusTable();
    this.activitypicked[0].pdfstatus = false;
    this.activitypicked[0]._id = 1;
  }
  statusTable() {
    this.user = this.session.getUser();
    this.dudename = this.user.dude;
    this.role = this.user.role;
    if (this.role === "Supervisor") {
      try {
        this.httpClient.get("/fetchnotify/fetchnotification").subscribe(data => {
          this.responsejsonconvert = JSON.stringify(data);
          this.jsonarrayconvert = JSON.parse(this.responsejsonconvert);
          console.log(this.jsonarrayconvert);
        }, error => {
          this.errorst = true;
          console.log('Unable to Fetch:', error);
          this.errorMsgst = error.error.message;
        });
      } catch (error) {
        console.log('Unable to Fetch:', error);
      }
    } else {
      try {
        this.httpClient.post("/fetchnotify/fetchnotificationuser", {
          username: this.dudename
        }).subscribe(data => {
          this.responsejsonconvert = JSON.stringify(data);
          this.jsonarrayconvert = JSON.parse(this.responsejsonconvert);
          console.log(this.jsonarrayconvert);
        }, error => {
          this.errorst = true;
          console.log('Unable to Fetch:', error);
          this.errorMsgst = error.error.message;
        });
      } catch (error) {
        console.log('Unable to Fetch:', error);
      }
    }
  }
  openPDF(value) {
    document.getElementById('pdfOpenModal').style.display = 'block';
    this.idGetter = value;
    this.viewPDF();
  }
  viewPDF() {
    this.ProgLoaded = true;
    const pdfObservable = this.httpClient.get(`/fetchnotify/fetchnotificationID/${this.idGetter}`, {
      responseType: 'blob'
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)([pdfObservable]).subscribe(([pdfBlob]) => {
      // Handling PDF
      this.pdfRaw = URL.createObjectURL(pdfBlob);
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfRaw);
    });
  }
  assigneduservalue(list) {
    this.user = this.session.getUser();
    this.dudename = this.user.dude;
    if (list.notify_status === "Open") {
      this.httpClient.post("/regnotify/jobopenstatuscheck", {
        id: list._id
      }).subscribe(response => {
        console.log("checking user with job picked success", response);
        this.responsejsonconvert2 = JSON.stringify(response);
        this.jsonarrayconvert2 = JSON.parse(this.responsejsonconvert2);
        if (this.jsonarrayconvert2[0].notify_status === "Open") {
          document.getElementById('jobassigned').style.display = 'block';
        } else {
          console.log("already job picked another User");
          this.ngOnInit();
        }
      }, error => {
        console.log(error);
        console.log('job picked by other user', error);
        this.errorauv = true;
        this.errorMsgauv = error.error.message;
      });
    } else if (list.notify_status === "processing") {
      console.log(list._id + this.dudename);
      this.httpClient.post("/regnotify/jobusercheck", {
        id: list._id,
        username: this.dudename
      }).subscribe(response => {
        console.log("checking user with job picked success", response);
        this.activity_type = "";
        this.trainaction = "";
        this.efromdate = "";
        this.etodate = "";
        this.remarks = "";
        this.alertdate = "";
        this.checkresult = "";
        document.getElementById('completed').style.display = 'block';
      }, error => {
        console.log(error);
        console.log('job picked by other user', error);
        this.errorauv = true;
        this.errorMsgauv = error.error.message;
      });
    } else if (list.notify_status === "Awaited for Approval") {
      if (this.role === "Supervisor") {
        this.httpClient.post("/regnotify/aprovalremarks", {
          id: list._id
        }).subscribe(response => {
          console.log("Get the User remarks and Alert Date", response);
          this.responsejsonconvert1 = JSON.stringify(response);
          this.jsonarrayconvert1 = JSON.parse(this.responsejsonconvert1);
          this.useralertdate = this.jsonarrayconvert1[0].alertdate;
          this.userremarks = this.jsonarrayconvert1[0].remarksbyuser;
          this.workdoneby = this.jsonarrayconvert1[0].jobpickedby;
          this.completedate = this.jsonarrayconvert1[0].completdate;
          this.completetime = this.jsonarrayconvert1[0].complettime;
          this.flagpdf = this.jsonarrayconvert1[0].pdfstatus;
          document.getElementById('checkedadmin').style.display = 'block';
        }, error => {
          console.log(error);
          console.log('job picked by other user', error);
          this.errorauv = true;
          this.errorMsgauv = error.error.message;
        });
      } else {
        console.log("your not autorsied to approval please contact Supervisor");
      }
    } else if (list.notify_status === "Closed") {
      console.log(list);
      this.adminremarksshow = list.remarksbyadmin;
      this.useralertdateshow = list.alertdate;
      this.userremarksshow = list.remarksbyuser;
      this.workdonebyshow = list.jobpickedby;
      document.getElementById('alertrevoke').style.display = 'block';
    }
    this.activitypicked = list;
  }
  assigneduser() {
    this.httpClient.post("/regnotify/jobassigned", {
      id: this.activitypicked._id,
      username: this.dudename
    }).subscribe(response => {
      console.log("User assigned", response);
      this.ngOnInit();
    }, error => {
      console.log(error);
      console.log('user not assigned', error);
      this.errorau = true;
      this.errorMsgau = error.error.message;
    });
    document.getElementById('jobassigned').style.display = 'none';
  }
  completion() {
    this.errorMsg = "";
    if (!this.activity_type) {
      this.error = true;
      this.errorMsg = "All Fields Are Mandatory";
      if (this.activitypicked.activity_type !== "") {
        this.checkresult = "Not Matched with As per Notification5";
        return;
      }
    }
    if (!this.trainaction) {
      this.error = true;
      this.errorMsg = "All Fields Are Mandatory";
      if (this.activitypicked.trainaction !== "") {
        this.checkresult = "Not Matched with As per Notification4";
        return;
      }
    }
    if (!this.efromdate) {
      this.error = true;
      this.efromdate = null;
      this.errorMsg = "All Fields Are Mandatory";
      if (this.activitypicked.effectivefromdate !== null) {
        this.checkresult = "Not Matched with As per Notification3";
        return;
      }
    }
    if (!this.etodate) {
      this.error = true;
      this.etodate = null;
      this.errorMsg = "All Fields Are Mandatory";
      if (this.activitypicked.effectivetodate !== null) {
        this.checkresult = "Not Matched with As per Notification2";
        return;
      }
    }
    if (!this.alertdate) {
      this.alertflag = false;
    } else {
      this.alertflag = true;
    }
    if (this.errorMsg !== "All Fields Are Mandatory" || this.activitypicked.effectivefromdate === null || this.activitypicked.effectivetodate === null || !this.activitypicked.trainaction || !this.activitypicked.activity_type) {
      if (this.activity_type === this.activitypicked.activity_type && this.trainaction === this.activitypicked.trainaction && new Date(this.efromdate).toISOString() === this.activitypicked.effectivefromdate && new Date(this.etodate).toISOString() === this.activitypicked.effectivetodate) {
        this.httpClient.post("/regnotify/jobcompltion", {
          id: this.activitypicked._id,
          remarks: this.remarks,
          alertdate: this.alertdate,
          alertflag: this.alertflag
        }).subscribe(response => {
          console.log("Completion Updated", response);
          document.getElementById('completed').style.display = 'none';
          this.ngOnInit();
        }, error => {
          console.log(error);
          console.log('Completion Not Updated', error);
          this.errorau = true;
          this.errorMsgau = error.error.message;
        });
      } else {
        this.checkresult = "Not Matched with As per Notification1";
      }
    }
  }
  approval() {
    this.httpClient.post("/regnotify/aprovalupdate", {
      id: this.activitypicked._id,
      remarksbyadmin: this.remarksadmin
    }).subscribe(response => {
      console.log("Completion Updated", response);
      document.getElementById('checkedadmin').style.display = 'none';
      this.ngOnInit();
    }, error => {
      console.log(error);
      console.log('Completion Not Updated', error);
      this.errorau = true;
      this.errorMsgau = error.error.message;
    });
  }
  openPDFread() {
    document.getElementById('pdfOpenModal').style.display = 'block';
    this.idGetter = this.activitypicked._id;
    this.viewPDF();
  }
  revokeupdate() {
    console.log(this.dudename);
    this.httpClient.post("/regnotify/alertrevokeupdate", {
      id: this.activitypicked._id,
      alertremarks: this.revokeremark,
      alertrevokedupdatedby: this.dudename
    }).subscribe(response => {
      console.log("Alert Revoked", response);
      document.getElementById('alertrevoke').style.display = 'none';
      this.ngOnInit();
    }, error => {
      console.log(error);
      console.log('Alert Revoked Not Updated', error);
      this.errorau = true;
      this.errorMsgau = error.error.message;
    });
  }
  static #_ = this.ɵfac = function StatusComponent_Factory(t) {
    return new (t || StatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_sanitizer_service__WEBPACK_IMPORTED_MODULE_0__.SanitizerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: StatusComponent,
    selectors: [["app-status"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_sanitizer_service__WEBPACK_IMPORTED_MODULE_0__.SanitizerService])],
    decls: 263,
    vars: 29,
    consts: [["rel", "preconnect", "href", "https://fonts.googleapis.com"], ["rel", "preconnect", "href", "https://fonts.gstatic.com", "crossorigin", ""], ["href", "https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap", "rel", "stylesheet"], [1, "formMaster"], [1, "form-group", 2, "margin-left", "10%"], [1, "container"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], [1, "w3-container"], ["id", "pdfOpenModal", 1, "w3-modal"], [1, "w3-modal-content", "w3-card-4", "w3-animate-zoom", 2, "max-width", "900px", "max-height", "950px"], [1, "close-center"], ["onclick", "document.getElementById('pdfOpenModal').style.display='none'", "title", "Close Modal"], [1, "headerModal"], [1, "w3-section"], [1, "form-list"], [1, "form-list__row"], [4, "ngIf"], ["type", "application/pdf", "width", "100%", "height", "500px", 3, "src"], [1, "closeModal"], ["onclick", "document.getElementById('pdfOpenModal').style.display='none'", "type", "button", 1, "buttonClose"], ["id", "jobassigned", 1, "w3-modal"], [1, "w3-modal-content", "w3-card-4", "w3-animate-zoom", 2, "max-width", "600px"], ["onclick", "document.getElementById('jobassigned').style.display='none'", "title", "Close Modal"], ["type", "button", 1, "buttonCNF", 2, "align-content", "center", 3, "click"], ["onclick", "document.getElementById('jobassigned').style.display='none'", "type", "button", 1, "buttonClose"], ["id", "completed", 1, "w3-modal"], ["onclick", "document.getElementById('completed').style.display='none'", "title", "Close Modal"], [2, "color", "red", "text-align", "center"], ["for", "activity_type"], ["name", "activity_type", "id", "activity_type", "required", "", 3, "ngModel", "ngModelChange"], ["disabled", "", "selected", ""], ["value", "refiring"], ["value", "switch setting"], ["value", "add coach"], ["value", "add route class"], ["value", "add isl"], ["value", "tt change"], ["value", "quota distribution"], ["value", "new train"], ["value", "specials"], ["value", "frequent change"], ["value", "src-dstn extn"], ["value", "token lost"], ["value", "tdm"], ["value", "other"], ["for", "trainaction"], ["type", "text", "id", "trainaction", "name", "trainaction", "required", "", 3, "ngModel", "ngModelChange"], ["for", "efromdate"], ["type", "date", "id", "efromdate", "name", "efromdate", "required", "", 3, "ngModel", "ngModelChange"], ["for", "etodate"], ["type", "date", "id", "etodate", "name", "etodate", "required", "", 3, "ngModel", "ngModelChange"], ["for", "remarks"], ["rows", "3", "cols", "75", "id", "remarks", "name", "remarks", "required", "", 3, "ngModel", "ngModelChange"], ["for", "alertdate"], ["type", "date", "id", "alertdate", "name", "alertdate", "required", "", 3, "ngModel", "ngModelChange"], [2, "color", "red"], ["onclick", "document.getElementById('completed').style.display='none'", "type", "button", 1, "buttonClose"], ["id", "checkedadmin", 1, "w3-modal"], ["onclick", "document.getElementById('checkedadmin').style.display='none'", "title", "Close Modal"], [1, "form-group"], ["for", "workdoneby"], ["for", "remarksadmin"], ["rows", "3", "cols", "80", "id", "remarksadmin", "name", "remarksadmin", "required", "", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "buttonClose", 3, "click"], ["onclick", "document.getElementById('checkedadmin').style.display='none'", "type", "button", 1, "buttonClose"], ["id", "alertrevoke", 1, "w3-modal"], ["onclick", "document.getElementById('alertrevoke').style.display='none'", "title", "Close Modal"], ["for", "revokeremark"], ["rows", "3", "cols", "80", "id", "revokeremark", "name", "revokeremark", "required", "", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "buttonCNF", 3, "click"], ["onclick", "document.getElementById('alertrevoke').style.display='none'", "type", "button", 1, "buttonClose"], [1, "pdfIcon"], [3, "click"], [1, "fa-regular", "fa-file-pdf"]],
    template: function StatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "link", 0)(1, "link", 1)(2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Work Status | Job Assign Manifest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "table")(9, "thead")(10, "tr")(11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Sl. No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Notification Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Activity Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Action/Train");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "EFD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "ETD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, StatusComponent_tr_28_Template, 21, 17, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 8)(30, "div", 9)(31, "div", 10)(32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 12)(35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " PDF Viewer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "form", 8)(40, "div", 14)(41, "ul", 15)(42, "li", 16)(43, "div")(44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, StatusComponent_span_45_Template, 3, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "embed", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 19)(49, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 8)(52, "div", 21)(53, "div", 22)(54, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span", 23)(57, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " Job Assigning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "form", 8)(62, "div", 14)(63, "ul", 15)(64, "li", 16)(65, "div")(66, "div")(67, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Do you wish to pickup this Notification? Confirming will make you assigned to this task.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatusComponent_Template_button_click_70_listener() {
          return ctx.assigneduser();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Yeah, assign!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 19)(73, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 8)(76, "div", 26)(77, "div", 22)(78, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "span", 27)(81, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, " Self Cross-examination ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "form", 8)(86, "div", 14)(87, "ul", 15)(88, "li", 16)(89, "div", 28)(90, "h5")(91, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "**Re-Confirm your activity by entering the below details correctly**");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "li", 16)(94, "div")(95, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Activity Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StatusComponent_Template_select_ngModelChange_97_listener($event) {
          return ctx.activity_type = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "-- Select an activity --");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Re-Firing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Switch Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Add Coach");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Add Route Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Add ISL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "TT-Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "Quota Distribution");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "New Train");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Specials");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Frequent Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Src/Destn Extn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Token Lost (Non-Train Activity)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "TDM (Non-Train Activity)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "li", 16)(129, "div")(130, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Train/Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StatusComponent_Template_input_ngModelChange_132_listener($event) {
          return ctx.trainaction = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "li", 16)(134, "div")(135, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "Effective From Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StatusComponent_Template_input_ngModelChange_137_listener($event) {
          return ctx.efromdate = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "li", 16)(139, "div")(140, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Effective To Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StatusComponent_Template_input_ngModelChange_142_listener($event) {
          return ctx.etodate = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "li", 16)(144, "div")(145, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "textarea", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StatusComponent_Template_textarea_ngModelChange_147_listener($event) {
          return ctx.remarks = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "li", 16)(149, "div")(150, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "Alert Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StatusComponent_Template_input_ngModelChange_152_listener($event) {
          return ctx.alertdate = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "li", 16)(154, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "li", 16)(157, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatusComponent_Template_button_click_157_listener() {
          return ctx.completion();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "Validate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "div", 19)(160, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 8)(163, "div", 58)(164, "div", 22)(165, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "span", 59)(168, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](171, " Approval Modal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "form", 8)(173, "div", 14)(174, "ul", 15)(175, "li", 16)(176, "div")(177, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "Please read the notification thoroughly and confirm your activity(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](180, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "div", 60)(182, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "li", 16)(185, "div", 60)(186, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "li", 16)(189, "div", 60)(190, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "li", 16)(193, "div", 60)(194, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](196, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "li", 16)(198, "div", 60)(199, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "li", 16)(202, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](203, StatusComponent_p_203_Template, 4, 0, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "li", 16)(205, "div", 60)(206, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](207, "Admin Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "textarea", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StatusComponent_Template_textarea_ngModelChange_208_listener($event) {
          return ctx.remarksadmin = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "li", 16)(210, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatusComponent_Template_button_click_210_listener() {
          return ctx.approval();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](211, "Yes, Approve!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "div", 19)(213, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "div", 8)(216, "div", 66)(217, "div", 22)(218, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](219, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "span", 67)(221, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, " Revoke Modal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "form", 8)(226, "div", 14)(227, "ul", 15)(228, "li", 16)(229, "div")(230, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](231, "Alert Revoke with Suitable Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "li", 16)(233, "div", 60)(234, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](235);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](236, "li", 16)(237, "div", 60)(238, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](239);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](240, "li", 16)(241, "div", 60)(242, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](243);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](244, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "li", 16)(246, "div", 60)(247, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](248);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "li", 16)(250, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](251, StatusComponent_p_251_Template, 4, 0, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "li", 16)(253, "div", 60)(254, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, "Alert Revoke Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "textarea", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StatusComponent_Template_textarea_ngModelChange_256_listener($event) {
          return ctx.revokeremark = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "li", 16)(258, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatusComponent_Template_button_click_258_listener() {
          return ctx.revokeupdate();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](259, "Revoke");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](260, "div", 19)(261, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](262, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.jsonarrayconvert);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ProgLoaded === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.pdfUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.activity_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.trainaction);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.efromdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.etodate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.remarks);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.alertdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.checkresult);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("UserName :", ctx.workdoneby, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("User Remarks :", ctx.userremarks, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Alert Date :", ctx.useralertdate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Completed Date :", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](196, 23, ctx.completedate, "dd/mm/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Completed Time :", ctx.completetime, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.flagpdf === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.remarksadmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("UserName :", ctx.workdonebyshow, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("User Remarks :", ctx.userremarksshow, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Alert Date :", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](244, 26, ctx.useralertdateshow, "dd/mm/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Admin Remark :", ctx.adminremarksshow, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.flagpdf === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.revokeremark);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
    styles: ["table {\n    border-collapse: collapse;\n    /* padding-left: 50px;\n    padding-right: 50px; */\n    padding: 10px;\n    background-color: #18283b;\n    border-radius: 10px;\n    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.1);\n    color: white;\n    width: 85%;\n    font-size: 12px;\n}\n\nh3,\nh4,\nh5 {\n    font-family: Kode Mono;\n}\n\nth {\n    color: #fde89b;\n    font-size: 14px;\n    text-align: center;\n}\n\ntr,\ntd {\n    padding-left: 50px;\n    padding-right: 50px;\n    text-shadow: 3px 3px 20px rgb(0, 0, 0);\n}\n\n.pdfIcon {\n    color: orangered;\n    font-size: 16px;\n}\n\n.pdfIcon:hover {\n    color: #fde89b;\n}"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5943:
/*!**********************************************!*\
  !*** ./src/app/table-filter.pipe.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableFilterPipe: () => (/* binding */ TableFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5879);

class TableFilterPipe {
  transform(list, filters) {
    const keys = Object.keys(filters).filter(key => filters[key]);
    const filterUser = user => keys.every(key => user[key] === filters[key]);
    return keys.length ? list.filter(filterUser) : list;
  }
  static #_ = this.ɵfac = function TableFilterPipe_Factory(t) {
    return new (t || TableFilterPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "tableFilter",
    type: TableFilterPipe,
    pure: true
  });
}

/***/ }),

/***/ 6961:
/*!**********************************************!*\
  !*** ./src/app/techies/techies.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TechiesComponent: () => (/* binding */ TechiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5879);

class TechiesComponent {
  static #_ = this.ɵfac = function TechiesComponent_Factory(t) {
    return new (t || TechiesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TechiesComponent,
    selectors: [["app-techies"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 37,
    vars: 0,
    consts: [["rel", "preconnect", "href", "https://fonts.googleapis.com"], ["rel", "preconnect", "href", "https://fonts.gstatic.com", "crossorigin", ""], ["href", "https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap", "rel", "stylesheet"], [2, "font-size", "16px", "font-weight", "bold"], [2, "float", "right", "color", "goldenrod"]],
    template: function TechiesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0)(1, "link", 1)(2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table")(4, "tr")(5, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "WRITEUP & CREDITS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr")(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0\u00A0\u00A0\u00A0\u00A0We, The IT-Cell of CCM/PM Office, developers of this application for the internal use for PRS Database Administration of CCM/PM/Office, Southern Railway.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0\u00A0\u00A0\u00A0\u00A0This application is developed in Angular (Version: 17.1.3 on the initial release), Node (Version: 20.11.0), MongoDB Compass (Version: 1.42.2), Nodemon (Version: 3.0.3 for underdevelopment build). Application Production Mode launched using 'PM2' Server Command on 'Windows Server 2019 Edition'.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00A0\u00A0\u00A0\u00A0\u00A0This is a Stable 'Mean Stack Application' of Version 1.1.5 developed in 'Visual Studio Code' IDE with the following features:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul")(15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "User Registration, Login and Forgot Password Feature.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Passwords are 'End-to-End Encryted' even developers cannot see.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Token-based login and logout system.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "User-Idle Timeout, which logs out the user if inactive for 15 Minutes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "PDF Uploader.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Smooth UI/UX using Font-Awesome Icons and Google fonts for a better user experience and user-friendly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Quick access to Important Railway Sites.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Ease follow through of Job/Tasks. Prevents hiccups in the work-flow.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "It is a go-green project.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "No additional expenses were spent for the development of this application. Library, dependencies and resources are used from Open Source by Google and Angular.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "- IT-Cell: 20219(Railway number)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: ["table[_ngcontent-%COMP%] {\n    border-collapse: collapse;\n    \n\n\n    margin-left: 20%;\n    margin-top: 1%;\n    padding: 20px;\n    background-color: #18283b;\n    border-radius: 10px;\n    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.1);\n    color: white;\n    width: 70%;\n    font-size: 18px;\n    font-family: Kode Mono;\n}\n\np[_ngcontent-%COMP%] {\n    padding: 15px;\n    margin: 2%;\n}\nul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n    \n    margin: 2%; \n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n    font-family: Kode Mono;\n}\n\nth[_ngcontent-%COMP%] {\n    color: #fde89b;\n    font-size: 14px;\n    text-align: center;\n}\n\ntr[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    padding-left: 50px;\n    padding-right: 50px;\n    text-shadow: 3px 3px 20px rgb(0, 0, 0);\n}"]
  });
}

/***/ }),

/***/ 9952:
/*!**************************************************************!*\
  !*** ./src/app/user-activation/user-activation.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserActivationComponent: () => (/* binding */ UserActivationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 9862);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 6223);




function UserActivationComponent_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td")(8, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserActivationComponent_tr_38_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const tag_r3 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.approved(tag_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td")(11, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserActivationComponent_tr_38_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const tag_r3 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.roleChangeRequest(tag_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Role Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r3.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r3.role);
  }
}
function UserActivationComponent_span_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Modified Role:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r2.rolechangeapprove, "");
  }
}
class UserActivationComponent {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  ngOnInit() {
    this.notActivated();
  }
  notActivated() {
    try {
      this.httpClient.get("/auth/notactivated").subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.jsonarrayconvert = JSON.parse(this.responsejsonconvert);
        console.log(this.jsonarrayconvert);
      }, error => {
        this.error = true;
        console.log('Unable to Fetch:', error);
        this.errorMsg = error.error.message;
        this.jsonarrayconvert = [];
        if (this.jsonarrayconvert = []) {
          this.nullMsg = "No Pending Approval";
        }
      });
    } catch (error) {
      console.log('Activation Fetch:', error);
    }
  }
  approved(value) {
    try {
      this.httpClient.post("/auth/activationupdate", {
        dude: value.dude,
        username: value.username
      }).subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.jsonarrayconvert = JSON.parse(this.responsejsonconvert);
        console.log(this.jsonarrayconvert);
      }, error => {
        this.error = true;
        this.errorMsg = error.error.message;
        this.ngOnInit();
      });
    } catch (error) {
      console.log('Unable to Update:', error);
    }
  }
  roleChangeRequest(value) {
    document.getElementById('changeRoleModal').style.display = 'block';
    this.changeDude = value.dude;
    this.changeUsername = value.username;
    this.changeRole = value.rolechange;
  }
  rolechange() {
    try {
      this.httpClient.post("/auth/activationonrolechange", {
        dude: this.changeDude,
        username: this.changeUsername,
        role: this.rolechangeapprove
      }).subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.jsonarrayconvert = JSON.parse(this.responsejsonconvert);
        console.log(this.jsonarrayconvert);
      }, error => {
        this.error = true;
        this.errorMsg = error.error.message;
        this.ngOnInit();
      });
    } catch (error) {
      console.log('Unable to Update:', error);
    }
    window.location.reload();
  }
  static #_ = this.ɵfac = function UserActivationComponent_Factory(t) {
    return new (t || UserActivationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: UserActivationComponent,
    selectors: [["app-user-activation"]],
    decls: 74,
    vars: 3,
    consts: [["rel", "preconnect", "href", "https://fonts.googleapis.com"], ["rel", "preconnect", "href", "https://fonts.gstatic.com", "crossorigin", ""], ["href", "https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap", "rel", "stylesheet"], [1, "formMaster"], [1, "form-group", 2, "margin-left", "10%"], [2, "margin-left", "10%"], [1, "container"], [1, "form-list"], [2, "text-align", "center"], [1, "capsHighlighter"], ["id", "exportable", 1, "table"], ["table", ""], [1, "trhead"], ["colspan", "5"], [4, "ngFor", "ngForOf"], [1, "w3-container"], ["id", "changeRoleModal", 1, "w3-modal"], [1, "w3-modal-content", "w3-card-4", "w3-animate-zoom", 2, "max-width", "600px"], [1, "close-center"], ["onclick", "document.getElementById('changeRoleModal').style.display='none'", "title", "Close Modal"], [1, "headerModal"], [1, "w3-section"], [1, "form-list__row"], [1, "cllbl"], [1, "pwdEyeFrame"], ["name", "registerrole", "id", "roregisterrolele", "required", "", 3, "ngModel", "ngModelChange"], ["disabled", "", "selected", ""], ["value", "Administrator"], ["value", "Supervisor"], ["value", "dbaUser"], [2, "margin", "7px"], [4, "ngIf"], ["type", "button", 1, "button", 2, "color", "black", 3, "click"], [1, "closeModal"], ["onclick", "document.getElementById('changeRoleModal').style.display='none'", "type", "button", 1, "buttonClose"], ["type", "submit", 1, "button", 2, "background-color", "#ffa500", 3, "click"], ["type", "submit", 1, "button", 2, "background-color", "crimson", 3, "click"]],
    template: function UserActivationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0)(1, "link", 1)(2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "form", 5)(6, "div", 6)(7, "div", 7)(8, "h3", 8)(9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "U");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ser ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ignUp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "pproval &");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ole Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 10, 11)(23, "thead")(24, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr")(27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sl.No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Approval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Change Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, UserActivationComponent_tr_38_Template, 13, 3, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15)(40, "div", 16)(41, "div", 17)(42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 19)(45, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Change Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "form", 15)(50, "div", 21)(51, "ul", 7)(52, "li", 22)(53, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Change Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24)(56, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserActivationComponent_Template_select_ngModelChange_56_listener($event) {
          return ctx.rolechangeapprove = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "-- Select Role --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Administrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Supervisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "dbaUser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div")(66, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, UserActivationComponent_span_67_Template, 4, 1, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li")(69, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserActivationComponent_Template_button_click_69_listener() {
          return ctx.rolechange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Update & Approve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 33)(72, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jsonarrayconvert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rolechangeapprove);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rolechangeapprove);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: [".form-list[_ngcontent-%COMP%] {\n    background-color: #2c3e50;\n    padding: 50px;\n    margin-top: 10px;\n    width: 70%;\n    border-radius: 10px;\n    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.1);\n    color: #fde89b;\n}\n\nh3[_ngcontent-%COMP%] {\n    color: #FFFFF0;\n    font-family: \"Kode Mono\", monospace;\n    font-optical-sizing: auto;\n    font-weight: 950;\n    font-style: normal;\n}\n\n.capsHighlighter[_ngcontent-%COMP%] {\n    color: #D62929;\n}\n\ntable[_ngcontent-%COMP%] {\n    margin: auto;\n    padding: auto;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    padding: 25px;\n    text-align: left;\n    border-bottom: 1px solid #ddd;\n    font-family: \"Kode Mono\", monospace;\n}\n\n.cllbl[_ngcontent-%COMP%] {\n    color: #FFFDD0;\n    font-family: \"Kode Mono\", monospace;\n}\n\n.button[_ngcontent-%COMP%] {\n    display: flex;\n    place-items: center;\n    justify-content: center;\n    align-items: center;\n    color: #ffffff;\n    padding: 12px 25px;\n    font-size: 12px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    border: 0;\n    border-radius: 2px;\n    outline: 0;\n    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);\n    transition: all .2s;\n}\n\n.button[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:active, .button[_ngcontent-%COMP%]:focus {\n    transform: scale(1.1);\n}"]
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
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

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);