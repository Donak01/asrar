(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Code\Donak\donak-asrar\src\main.ts */"zUnb");


/***/ }),

/***/ "0Rlb":
/*!************************************************************************************!*\
  !*** ./src/app/authentication/change-password/services/change-password.service.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordService = void 0;
var http_1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var core_2 = __webpack_require__(/*! @app/core */ "ey9i");
var rxjs_1 = __webpack_require__(/*! rxjs */ "qCKp");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "kU1M");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
var ChangePasswordService = /** @class */ (function () {
    function ChangePasswordService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    ChangePasswordService.prototype.changePassword = function (model) {
        var headers = new http_1.HttpHeaders({ "Content-Type": "application/json" });
        var url = this.appConfig.apiEndpoint + "/ChangePassword";
        return this.http
            .post(url, model, { headers: headers })
            .pipe(operators_1.map(function (response) { return response || {}; }), operators_1.catchError(function (error) { return rxjs_1.throwError(error); }));
    };
    ChangePasswordService.ɵfac = function ChangePasswordService_Factory(t) { return new (t || ChangePasswordService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(core_2.APP_CONFIG)); };
    ChangePasswordService.ɵprov = i0.ɵɵdefineInjectable({ token: ChangePasswordService, factory: ChangePasswordService.ɵfac });
    return ChangePasswordService;
}());
exports.ChangePasswordService = ChangePasswordService;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChangePasswordService, [{
        type: core_1.Injectable
    }], function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                type: core_1.Inject,
                args: [core_2.APP_CONFIG]
            }] }]; }, null); })();


/***/ }),

/***/ "4CYu":
/*!**********************************************************!*\
  !*** ./src/app/core/services/browser-storage.service.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserStorageService = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var BrowserStorageService = /** @class */ (function () {
    function BrowserStorageService() {
    }
    BrowserStorageService.prototype.getSession = function (key) {
        var data = window.sessionStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
        else {
            return null;
        }
    };
    BrowserStorageService.prototype.setSession = function (key, value) {
        var data = value === undefined ? "" : JSON.stringify(value);
        window.sessionStorage.setItem(key, data);
    };
    BrowserStorageService.prototype.removeSession = function (key) {
        window.sessionStorage.removeItem(key);
    };
    BrowserStorageService.prototype.removeAllSessions = function () {
        for (var key in window.sessionStorage) {
            if (window.sessionStorage.hasOwnProperty(key)) {
                this.removeSession(key);
            }
        }
    };
    BrowserStorageService.prototype.getLocal = function (key) {
        var data = window.localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
        else {
            return null;
        }
    };
    BrowserStorageService.prototype.setLocal = function (key, value) {
        var data = value === undefined ? "" : JSON.stringify(value);
        window.localStorage.setItem(key, data);
    };
    BrowserStorageService.prototype.removeLocal = function (key) {
        window.localStorage.removeItem(key);
    };
    BrowserStorageService.prototype.removeAllLocals = function () {
        for (var key in window.localStorage) {
            if (window.localStorage.hasOwnProperty(key)) {
                this.removeLocal(key);
            }
        }
    };
    BrowserStorageService.ɵfac = function BrowserStorageService_Factory(t) { return new (t || BrowserStorageService)(); };
    BrowserStorageService.ɵprov = i0.ɵɵdefineInjectable({ token: BrowserStorageService, factory: BrowserStorageService.ɵfac, providedIn: 'root' });
    return BrowserStorageService;
}());
exports.BrowserStorageService = BrowserStorageService;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BrowserStorageService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "4iQD":
/*!*********************************************!*\
  !*** ./src/app/core/services/app.config.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = exports.APP_CONFIG = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
exports.APP_CONFIG = new core_1.InjectionToken("app.config");
exports.AppConfig = {
    apiEndpoint: "https://api.donak.ir/api",
    apiSettingsPath: "ApiSettings",
    dashboardEndPoint: "asrar/dashboard"
};


/***/ }),

/***/ "7dP1":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var http_1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var rxjs_1 = __webpack_require__(/*! rxjs */ "qCKp");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "kU1M");
var auth_token_type_1 = __webpack_require__(/*! ./../models/auth-token-type */ "L7i+");
var api_config_service_1 = __webpack_require__(/*! ./api-config.service */ "jI5v");
var app_config_1 = __webpack_require__(/*! ./app.config */ "4iQD");
var refresh_token_service_1 = __webpack_require__(/*! ./refresh-token.service */ "PS5g");
var token_store_service_1 = __webpack_require__(/*! ./token-store.service */ "ft2M");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
var i2 = __webpack_require__(/*! @angular/router */ "tyNb");
var i3 = __webpack_require__(/*! ./api-config.service */ "jI5v");
var i4 = __webpack_require__(/*! ./token-store.service */ "ft2M");
var i5 = __webpack_require__(/*! ./refresh-token.service */ "PS5g");
var AuthService = /** @class */ (function () {
    function AuthService(http, router, appConfig, apiConfigService, tokenStoreService, refreshTokenService) {
        this.http = http;
        this.router = router;
        this.appConfig = appConfig;
        this.apiConfigService = apiConfigService;
        this.tokenStoreService = tokenStoreService;
        this.refreshTokenService = refreshTokenService;
        this.authStatusSource = new rxjs_1.BehaviorSubject(false);
        this.authStatus$ = this.authStatusSource.asObservable();
        this.updateStatusOnPageRefresh();
        this.refreshTokenService.scheduleRefreshToken(this.isAuthUserLoggedIn(), false);
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        var headers = new http_1.HttpHeaders({ "Content-Type": "application/json" });
        return this.http
            .post(this.appConfig.apiEndpoint + "/" + this.apiConfigService.configuration.loginPath, credentials, { headers: headers })
            .pipe(operators_1.map(function (response) {
            _this.tokenStoreService.setRememberMe(true);
            if (!response) {
                console.error("There is no `{'" + _this.apiConfigService.configuration.accessTokenObjectKey +
                    "':'...','" + _this.apiConfigService.configuration.refreshTokenObjectKey + "':'...value...'}` response after login.");
                _this.authStatusSource.next(false);
                return false;
            }
            _this.tokenStoreService.storeLoginSession(response);
            console.log("Logged-in user info", _this.getAuthUser());
            // this.refreshTokenService.scheduleRefreshToken(true, true);
            _this.authStatusSource.next(true);
            return true;
        }), operators_1.catchError(function (error) { return rxjs_1.throwError(error); }));
    };
    AuthService.prototype.getBearerAuthHeader = function () {
        return new http_1.HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": "Bearer " + this.tokenStoreService.getRawAuthToken(auth_token_type_1.AuthTokenType.AccessToken)
        });
    };
    AuthService.prototype.logout = function (navigateToHome) {
        var _this = this;
        var headers = new http_1.HttpHeaders({ "Content-Type": "application/json" });
        var refreshToken = encodeURIComponent(this.tokenStoreService.getRawAuthToken(auth_token_type_1.AuthTokenType.RefreshToken));
        this.http
            .get(this.appConfig.apiEndpoint + "/" + this.apiConfigService.configuration.logoutPath + "?refreshToken=" + refreshToken, { headers: headers })
            .pipe(operators_1.map(function (response) { return response || {}; }), operators_1.catchError(function (error) { return rxjs_1.throwError(error); }), operators_1.finalize(function () {
            _this.tokenStoreService.deleteAuthTokens();
            _this.refreshTokenService.unscheduleRefreshToken(true);
            _this.authStatusSource.next(false);
            if (navigateToHome) {
                _this.router.navigate(["/"]);
            }
        }))
            .subscribe(function (result) {
            console.log("logout", result);
        });
    };
    AuthService.prototype.isAuthUserLoggedIn = function () {
        return this.tokenStoreService.hasStoredAccessAndRefreshTokens() &&
            !this.tokenStoreService.isAccessTokenTokenExpired();
    };
    AuthService.prototype.getAuthUser = function () {
        if (!this.isAuthUserLoggedIn()) {
            return null;
        }
        var decodedToken = this.tokenStoreService.getDecodedAccessToken();
        var roles = this.tokenStoreService.getDecodedTokenRoles();
        return Object.freeze({
            userId: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
            userName: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
            displayName: decodedToken["DisplayName"],
            roles: roles
        });
    };
    AuthService.prototype.isAuthUserInRoles = function (requiredRoles) {
        var user = this.getAuthUser();
        if (!user || !user.roles) {
            return false;
        }
        if (user.roles.indexOf(this.apiConfigService.configuration.adminRoleName.toLowerCase()) >= 0) {
            return true; // The `Admin` role has full access to every pages.
        }
        return requiredRoles.some(function (requiredRole) {
            if (user.roles) {
                return user.roles.indexOf(requiredRole.toLowerCase()) >= 0;
            }
            else {
                return false;
            }
        });
    };
    AuthService.prototype.isAuthUserInRole = function (requiredRole) {
        return this.isAuthUserInRoles([requiredRole]);
    };
    AuthService.prototype.updateStatusOnPageRefresh = function () {
        this.authStatusSource.next(this.isAuthUserLoggedIn());
    };
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Router), i0.ɵɵinject(app_config_1.APP_CONFIG), i0.ɵɵinject(i3.ApiConfigService), i0.ɵɵinject(i4.TokenStoreService), i0.ɵɵinject(i5.RefreshTokenService)); };
    AuthService.ɵprov = i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
    return AuthService;
}());
exports.AuthService = AuthService;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.Router }, { type: undefined, decorators: [{
                type: core_1.Inject,
                args: [app_config_1.APP_CONFIG]
            }] }, { type: i3.ApiConfigService }, { type: i4.TokenStoreService }, { type: i5.RefreshTokenService }]; }, null); })();


/***/ }),

/***/ "7z7v":
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/equal-validator.directive.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EqualValidatorDirective = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var EqualValidatorDirective = /** @class */ (function () {
    function EqualValidatorDirective(compareToControl) {
        this.compareToControl = compareToControl;
    }
    EqualValidatorDirective.prototype.validate = function (element) {
        var selfValue = element.value;
        var otherControl = element.root.get(this.compareToControl);
        /*
        console.log("EqualValidatorDirective", {
          thisControlValue: selfValue,
          otherControlValue: otherControl ? otherControl.value : null
        });
        */
        if (otherControl && selfValue !== otherControl.value) {
            return {
                appValidateEqual: true // Or a string such as 'Password mismatch.' or an abject.
            };
        }
        if (otherControl &&
            otherControl.errors &&
            selfValue === otherControl.value) {
            delete otherControl.errors["appValidateEqual"];
            if (!Object.keys(otherControl.errors).length) {
                otherControl.setErrors(null);
            }
        }
        return null;
    };
    EqualValidatorDirective.ɵfac = function EqualValidatorDirective_Factory(t) { return new (t || EqualValidatorDirective)(i0.ɵɵinjectAttribute("compare-to")); };
    EqualValidatorDirective.ɵdir = i0.ɵɵdefineDirective({ type: EqualValidatorDirective, selectors: [["", "appValidateEqual", "", "formControlName", ""], ["", "appValidateEqual", "", "formControl", ""], ["", "appValidateEqual", "", "ngModel", ""]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: EqualValidatorDirective,
                    multi: true // the new directives are added to the previously registered directives instead of overriding them.
                }
            ])] });
    return EqualValidatorDirective;
}());
exports.EqualValidatorDirective = EqualValidatorDirective;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EqualValidatorDirective, [{
        type: core_1.Directive,
        args: [{
                // https://angular.io/guide/styleguide#style-02-08
                // Do use a custom prefix for the selector of directives (e.g, the prefix toh from Tour of Heroes).
                // Do spell non-element selectors in lower camel case unless the selector is meant to match a native HTML attribute.
                // the directive matches elements that have the attribute appValidateEqual and one of the formControlName or formControl or ngModel
                selector: "[appValidateEqual][formControlName],[appValidateEqual][formControl],[appValidateEqual][ngModel]",
                providers: [
                    {
                        provide: forms_1.NG_VALIDATORS,
                        useExisting: EqualValidatorDirective,
                        multi: true // the new directives are added to the previously registered directives instead of overriding them.
                    }
                ]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: core_1.Attribute,
                args: ["compare-to"]
            }] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    production: false
};


/***/ }),

/***/ "INwz":
/*!***********************************************************!*\
  !*** ./src/app/core/component/header/header.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var auth_service_1 = __webpack_require__(/*! ../../services/auth.service */ "7dP1");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ../../services/auth.service */ "7dP1");
var i2 = __webpack_require__(/*! @angular/router */ "tyNb");
var _c0 = function () { return ["/welcome"]; };
var _c1 = function () { return ["/login"]; };
var _c2 = function () { return ["/protectedPage"]; };
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.title = "اسرار دنک";
        this.isLoggedIn = false;
        this.subscription = null;
        this.displayName = "";
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.authService.authStatus$.subscribe(function (status) {
            _this.isLoggedIn = status;
            if (status) {
                var authUser = _this.authService.getAuthUser();
                _this.displayName = authUser ? authUser.displayName : "";
            }
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout(true);
    };
    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(i0.ɵɵdirectiveInject(i1.AuthService)); };
    HeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["app-header"]], decls: 10, vars: 6, consts: [["role", "navigation", "aria-label", "main navigation", 1, "navbar"], ["id", "navbarBasicExample", 1, "navbar-menu"], [1, "navbar-item"], [1, "buttons"], [1, "button", 3, "routerLink"], [1, "button", "is-primary", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelementStart(4, "a", 4);
            i0.ɵɵtext(5, " \u062E\u0648\u0646\u0647 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "a", 4);
            i0.ɵɵtext(7, "\u062F\u062E\u0648\u0644 \u06A9\u0646");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "a", 5);
            i0.ɵɵtext(9, "\u0627\u0635\u0644 \u06A9\u0627\u0631\u06CC");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(3, _c0));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(4, _c1));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(5, _c2));
        } }, directives: [i2.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeaderComponent, [{
        type: core_1.Component,
        args: [{
                selector: "app-header",
                templateUrl: "./header.component.html",
                styleUrls: ["./header.component.css"]
            }]
    }], function () { return [{ type: i1.AuthService }]; }, null); })();


/***/ }),

/***/ "J7Q4":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
    WelcomeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 4, vars: 0, template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1, "\u0642\u062F\u0645 \u0631\u0648 \u062A\u062E\u0645 \u0686\u06CC\u0634\u0627\u0645 \u06AF\u0630\u0648\u0634\u062A\u06CC. \u0631\u0645\u0632\u062A \u0631\u0648 \u0628\u0632\u0646 \u0648 \u0648\u0627\u0631\u062F \u0634\u0648 \u0633\u06CC\u062F.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3, " \u062F\u06A9\u0645\u0647 \u06CC \u0644\u0627\u06AF\u06CC\u0646 \u0628\u0627\u0644\u0627 \u0647\u0633 ");
            i0.ɵɵelementEnd();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5jc3MifQ== */"] });
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WelcomeComponent, [{
        type: core_1.Component,
        args: [{
                selector: "app-welcome",
                templateUrl: "./welcome.component.html",
                styleUrls: ["./welcome.component.css"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "L4pY":
/*!***************************************************!*\
  !*** ./src/app/core/services/xsrf.interceptor.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.XsrfInterceptor = void 0;
var http_1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
var XsrfInterceptor = /** @class */ (function () {
    function XsrfInterceptor(tokenExtractor) {
        this.tokenExtractor = tokenExtractor;
    }
    XsrfInterceptor.prototype.intercept = function (request, next) {
        /*
            const lcUrl = request.url.toLowerCase();
            if (request.method === "GET" || request.method === "HEAD" ||
              lcUrl.startsWith("http://") || lcUrl.startsWith("https://")) {
              console.log("Original HttpXsrfInterceptor skips both non-mutating requests and absolute URLs.");
              console.log("Skipped request", { lcUrl: lcUrl, method: request.method });
            }
        */
        if (request.method === "POST") {
            var headerName = "X-XSRF-TOKEN";
            var token = this.tokenExtractor.getToken();
            if (token && !request.headers.has(headerName)) {
                request = request.clone({
                    headers: request.headers.set(headerName, token)
                });
            }
        }
        return next.handle(request);
    };
    XsrfInterceptor.ɵfac = function XsrfInterceptor_Factory(t) { return new (t || XsrfInterceptor)(i0.ɵɵinject(i1.HttpXsrfTokenExtractor)); };
    XsrfInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: XsrfInterceptor, factory: XsrfInterceptor.ɵfac });
    return XsrfInterceptor;
}());
exports.XsrfInterceptor = XsrfInterceptor;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(XsrfInterceptor, [{
        type: core_1.Injectable
    }], function () { return [{ type: i1.HttpXsrfTokenExtractor }]; }, null); })();


/***/ }),

/***/ "L7i+":
/*!************************************************!*\
  !*** ./src/app/core/models/auth-token-type.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTokenType = void 0;
var AuthTokenType;
(function (AuthTokenType) {
    AuthTokenType[AuthTokenType["AccessToken"] = 0] = "AccessToken";
    AuthTokenType[AuthTokenType["RefreshToken"] = 1] = "RefreshToken";
})(AuthTokenType = exports.AuthTokenType || (exports.AuthTokenType = {}));


/***/ }),

/***/ "NfzT":
/*!*************************************************************************!*\
  !*** ./src/app/authentication/access-denied/access-denied.component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessDeniedComponent = void 0;
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var core_2 = __webpack_require__(/*! @app/core */ "ey9i");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/common */ "ofXK");
var i2 = __webpack_require__(/*! @app/core */ "ey9i");
var i3 = __webpack_require__(/*! @angular/router */ "tyNb");
var _c0 = function () { return ["/login"]; };
function AccessDeniedComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵtext(1, " \u0648\u0627\u0631\u062F \u0634\u0648\n");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(1, _c0));
} }
var AccessDeniedComponent = /** @class */ (function () {
    function AccessDeniedComponent(location, authService) {
        this.location = location;
        this.authService = authService;
        this.isAuthenticated = false;
    }
    AccessDeniedComponent.prototype.ngOnInit = function () {
        this.isAuthenticated = this.authService.isAuthUserLoggedIn();
    };
    AccessDeniedComponent.prototype.goBack = function () {
        this.location.back(); // <-- go back to previous location on cancel
    };
    AccessDeniedComponent.ɵfac = function AccessDeniedComponent_Factory(t) { return new (t || AccessDeniedComponent)(i0.ɵɵdirectiveInject(i1.Location), i0.ɵɵdirectiveInject(i2.AuthService)); };
    AccessDeniedComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AccessDeniedComponent, selectors: [["app-access-denied"]], decls: 9, vars: 1, consts: [[1, "text-danger"], ["aria-hidden", "true", 1, "fa", "fa-ban"], [1, "btn", "btn-default", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], ["class", "btn btn-success", "queryParamsHandling", "merge", 3, "routerLink", 4, "ngIf"], ["queryParamsHandling", "merge", 1, "btn", "btn-success", 3, "routerLink"]], template: function AccessDeniedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1", 0);
            i0.ɵɵelement(1, "i", 1);
            i0.ɵɵtext(2, " \u0646\u0635\u0644\u0627\u062D \u0647\u0633\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4, "\u0627\u06CC\u0646\u062C\u0648 \u062C\u0648\u06CC \u0634\u0645\u0627 \u0646\u06CC\u0633. (\u062F\u0633\u062A\u0631\u0633\u06CC \u0646\u062F\u0627\u0631\u06CC )");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 2);
            i0.ɵɵlistener("click", function AccessDeniedComponent_Template_button_click_5_listener() { return ctx.goBack(); });
            i0.ɵɵelement(6, "i", 3);
            i0.ɵɵtext(7, " Back\n");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, AccessDeniedComponent_button_8_Template, 2, 2, "button", 4);
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.isAuthenticated);
        } }, directives: [i1.NgIf, i3.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Nlc3MtZGVuaWVkLmNvbXBvbmVudC5jc3MifQ== */"] });
    return AccessDeniedComponent;
}());
exports.AccessDeniedComponent = AccessDeniedComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AccessDeniedComponent, [{
        type: core_1.Component,
        args: [{
                selector: "app-access-denied",
                templateUrl: "./access-denied.component.html",
                styleUrls: ["./access-denied.component.css"]
            }]
    }], function () { return [{ type: i1.Location }, { type: i2.AuthService }]; }, null); })();


/***/ }),

/***/ "OiFK":
/*!************************************************!*\
  !*** ./src/app/core/services/utils.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsService = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var browser_storage_service_1 = __webpack_require__(/*! ./browser-storage.service */ "4CYu");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./browser-storage.service */ "4CYu");
var UtilsService = /** @class */ (function () {
    function UtilsService(browserStorageService) {
        this.browserStorageService = browserStorageService;
    }
    UtilsService.prototype.isEmptyString = function (value) {
        return !value || 0 === value.length;
    };
    UtilsService.prototype.getCurrentTabId = function () {
        var tabIdToken = "currentTabId";
        var tabId = this.browserStorageService.getSession(tabIdToken);
        if (tabId) {
            return tabId;
        }
        tabId = Math.random();
        this.browserStorageService.setSession(tabIdToken, tabId);
        return tabId;
    };
    UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(i0.ɵɵinject(i1.BrowserStorageService)); };
    UtilsService.ɵprov = i0.ɵɵdefineInjectable({ token: UtilsService, factory: UtilsService.ɵfac, providedIn: 'root' });
    return UtilsService;
}());
exports.UtilsService = UtilsService;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UtilsService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.BrowserStorageService }]; }, null); })();


/***/ }),

/***/ "OpKh":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationModule = void 0;
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var shared_module_1 = __webpack_require__(/*! @app/shared/shared.module */ "PCNd");
var access_denied_component_1 = __webpack_require__(/*! ./access-denied/access-denied.component */ "NfzT");
var authentication_routing_module_1 = __webpack_require__(/*! ./authentication-routing.module */ "ionX");
var change_password_component_1 = __webpack_require__(/*! ./change-password/change-password.component */ "Y9CB");
var change_password_service_1 = __webpack_require__(/*! ./change-password/services/change-password.service */ "0Rlb");
var login_component_1 = __webpack_require__(/*! ./login/login.component */ "kuBs");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule.ɵmod = i0.ɵɵdefineNgModule({ type: AuthenticationModule });
    AuthenticationModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); }, providers: [change_password_service_1.ChangePasswordService], imports: [[
                common_1.CommonModule,
                forms_1.FormsModule,
                shared_module_1.SharedModule,
                authentication_routing_module_1.AuthenticationRoutingModule
            ]] });
    return AuthenticationModule;
}());
exports.AuthenticationModule = AuthenticationModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AuthenticationModule, { declarations: [login_component_1.LoginComponent, access_denied_component_1.AccessDeniedComponent, change_password_component_1.ChangePasswordComponent], imports: [common_1.CommonModule,
        forms_1.FormsModule,
        shared_module_1.SharedModule,
        authentication_routing_module_1.AuthenticationRoutingModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthenticationModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    shared_module_1.SharedModule,
                    authentication_routing_module_1.AuthenticationRoutingModule
                ],
                declarations: [login_component_1.LoginComponent, access_denied_component_1.AccessDeniedComponent, change_password_component_1.ChangePasswordComponent],
                providers: [change_password_service_1.ChangePasswordService]
            }]
    }], null, null); })();


/***/ }),

/***/ "Oy4E":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardRoutingModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var core_2 = __webpack_require__(/*! @app/core */ "ey9i");
var call_protected_api_component_1 = __webpack_require__(/*! ./call-protected-api/call-protected-api.component */ "czTL");
var protected_page_component_1 = __webpack_require__(/*! ./protected-page/protected-page.component */ "tQTw");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/router */ "tyNb");
var routes = [
    {
        path: "protectedPage",
        component: protected_page_component_1.ProtectedPageComponent,
        data: {
            permission: {
                permittedRoles: ["Admin"]
            }
        },
        canActivate: [core_2.AuthGuard]
    },
    {
        path: "callProtectedApi",
        component: call_protected_api_component_1.CallProtectedApiComponent,
        data: {
            permission: {
                permittedRoles: ["Admin", "User"]
            }
        },
        canActivate: [core_2.AuthGuard]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: DashboardRoutingModule });
    DashboardRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[router_1.RouterModule.forChild(routes)], router_1.RouterModule] });
    return DashboardRoutingModule;
}());
exports.DashboardRoutingModule = DashboardRoutingModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DashboardRoutingModule, { imports: [i1.RouterModule], exports: [router_1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DashboardRoutingModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            }]
    }], null, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var http_1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var equal_validator_directive_1 = __webpack_require__(/*! ./directives/equal-validator.directive */ "7z7v");
var has_auth_user_view_permission_directive_1 = __webpack_require__(/*! ./directives/has-auth-user-view-permission.directive */ "Y5Oc");
var is_visible_for_auth_user_directive_1 = __webpack_require__(/*! ./directives/is-visible-for-auth-user.directive */ "Sbaa");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        // Forcing the whole app to use the returned providers from the AppModule only.
        return {
            ngModule: SharedModule,
            providers: [ /* All of your services here. It will hold the services needed by `itself`. */]
        };
    };
    SharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedModule });
    SharedModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ], 
            // common and shared components/directives/pipes between more than one module and components will be listed here.
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpClientModule] });
    return SharedModule;
}());
exports.SharedModule = SharedModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { declarations: [
        // common and shared components/directives/pipes between more than one module and components will be listed here.
        is_visible_for_auth_user_directive_1.IsVisibleForAuthUserDirective,
        has_auth_user_view_permission_directive_1.HasAuthUserViewPermissionDirective,
        equal_validator_directive_1.EqualValidatorDirective], imports: [common_1.CommonModule,
        forms_1.FormsModule,
        http_1.HttpClientModule], exports: [
        // common and shared components/directives/pipes between more than one module and components will be listed here.
        common_1.CommonModule,
        forms_1.FormsModule,
        http_1.HttpClientModule,
        is_visible_for_auth_user_directive_1.IsVisibleForAuthUserDirective,
        has_auth_user_view_permission_directive_1.HasAuthUserViewPermissionDirective,
        equal_validator_directive_1.EqualValidatorDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SharedModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule
                ],
                entryComponents: [
                // All components about to be loaded "dynamically" need to be declared in the entryComponents section.
                ],
                declarations: [
                    // common and shared components/directives/pipes between more than one module and components will be listed here.
                    is_visible_for_auth_user_directive_1.IsVisibleForAuthUserDirective,
                    has_auth_user_view_permission_directive_1.HasAuthUserViewPermissionDirective,
                    equal_validator_directive_1.EqualValidatorDirective
                ],
                exports: [
                    // common and shared components/directives/pipes between more than one module and components will be listed here.
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    is_visible_for_auth_user_directive_1.IsVisibleForAuthUserDirective,
                    has_auth_user_view_permission_directive_1.HasAuthUserViewPermissionDirective,
                    equal_validator_directive_1.EqualValidatorDirective
                ]
                /* No providers here! Since they’ll be already provided in AppModule. */
            }]
    }], null, null); })();


/***/ }),

/***/ "PS5g":
/*!********************************************************!*\
  !*** ./src/app/core/services/refresh-token.service.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenService = void 0;
var http_1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var rxjs_1 = __webpack_require__(/*! rxjs */ "qCKp");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "kU1M");
var auth_token_type_1 = __webpack_require__(/*! ./../models/auth-token-type */ "L7i+");
var api_config_service_1 = __webpack_require__(/*! ./api-config.service */ "jI5v");
var app_config_1 = __webpack_require__(/*! ./app.config */ "4iQD");
var browser_storage_service_1 = __webpack_require__(/*! ./browser-storage.service */ "4CYu");
var token_store_service_1 = __webpack_require__(/*! ./token-store.service */ "ft2M");
var utils_service_1 = __webpack_require__(/*! ./utils.service */ "OiFK");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./token-store.service */ "ft2M");
var i2 = __webpack_require__(/*! ./api-config.service */ "jI5v");
var i3 = __webpack_require__(/*! @angular/common/http */ "tk/3");
var i4 = __webpack_require__(/*! ./browser-storage.service */ "4CYu");
var i5 = __webpack_require__(/*! ./utils.service */ "OiFK");
var RefreshTokenService = /** @class */ (function () {
    function RefreshTokenService(tokenStoreService, appConfig, apiConfigService, http, browserStorageService, utilsService) {
        this.tokenStoreService = tokenStoreService;
        this.appConfig = appConfig;
        this.apiConfigService = apiConfigService;
        this.http = http;
        this.browserStorageService = browserStorageService;
        this.utilsService = utilsService;
        this.refreshTokenTimerCheckId = "is_refreshToken_timer_started";
        this.refreshTokenSubscription = null;
    }
    RefreshTokenService.prototype.scheduleRefreshToken = function (isAuthUserLoggedIn, calledFromLogin) {
        var _this = this;
        this.unscheduleRefreshToken(false);
        if (!isAuthUserLoggedIn) {
            return;
        }
        var expDateUtc = this.tokenStoreService.getAccessTokenExpirationDateUtc();
        if (!expDateUtc) {
            throw new Error("This access token has not the `exp` property.");
        }
        var expiresAtUtc = expDateUtc.valueOf();
        var nowUtc = new Date().valueOf();
        var threeSeconds = 3000;
        // threeSeconds instead of 1 to prevent other tab timers run less than threeSeconds
        var initialDelay = Math.max(threeSeconds, expiresAtUtc - nowUtc - threeSeconds);
        console.log("Initial scheduleRefreshToken Delay(ms)", initialDelay);
        var timerSource$ = rxjs_1.timer(initialDelay);
        this.refreshTokenSubscription = timerSource$.subscribe(function () {
            if (calledFromLogin || !_this.isRefreshTokenTimerStartedInAnotherTab()) {
                _this.refreshToken(isAuthUserLoggedIn);
            }
            else {
                _this.scheduleRefreshToken(isAuthUserLoggedIn, false);
            }
        });
        if (calledFromLogin || !this.isRefreshTokenTimerStartedInAnotherTab()) {
            this.setRefreshTokenTimerStarted();
        }
    };
    RefreshTokenService.prototype.unscheduleRefreshToken = function (cancelTimerCheckToken) {
        if (this.refreshTokenSubscription) {
            this.refreshTokenSubscription.unsubscribe();
        }
        if (cancelTimerCheckToken) {
            this.deleteRefreshTokenTimerCheckId();
        }
    };
    RefreshTokenService.prototype.invalidateCurrentTabId = function () {
        if (!this.tokenStoreService.rememberMe()) {
            return;
        }
        var currentTabId = this.utilsService.getCurrentTabId();
        var timerStat = this.browserStorageService.getLocal(this.refreshTokenTimerCheckId);
        if (timerStat && timerStat.tabId === currentTabId) {
            this.setRefreshTokenTimerStopped();
        }
    };
    RefreshTokenService.prototype.refreshToken = function (isAuthUserLoggedIn) {
        var _this = this;
        var headers = new http_1.HttpHeaders({ "Content-Type": "application/json" });
        var model = { refreshToken: this.tokenStoreService.getRawAuthToken(auth_token_type_1.AuthTokenType.RefreshToken) };
        return this.http
            .post(this.appConfig.apiEndpoint + "/" + this.apiConfigService.configuration.refreshTokenPath, model, { headers: headers })
            .pipe(operators_1.map(function (response) { return response || {}; }), operators_1.catchError(function (error) { return rxjs_1.throwError(error); }))
            .subscribe(function (result) {
            console.log("RefreshToken Result", result);
            _this.tokenStoreService.storeLoginSession(result);
            // this.deleteRefreshTokenTimerCheckId();
            _this.scheduleRefreshToken(isAuthUserLoggedIn, false);
        });
    };
    RefreshTokenService.prototype.isRefreshTokenTimerStartedInAnotherTab = function () {
        if (!this.tokenStoreService.rememberMe()) {
            return false; // It uses the session storage for the tokens and its access scope is limited to the current tab.
        }
        var currentTabId = this.utilsService.getCurrentTabId();
        var timerStat = this.browserStorageService.getLocal(this.refreshTokenTimerCheckId);
        console.log("RefreshTokenTimer Check", {
            refreshTokenTimerCheckId: timerStat,
            currentTabId: currentTabId
        });
        var isStarted = timerStat && timerStat.isStarted === true && timerStat.tabId !== currentTabId;
        if (isStarted) {
            console.log("RefreshToken timer has already been started in another tab with tabId=" + timerStat.tabId + ".\n      currentTabId=" + currentTabId + ".");
        }
        return isStarted;
    };
    RefreshTokenService.prototype.setRefreshTokenTimerStarted = function () {
        this.browserStorageService.setLocal(this.refreshTokenTimerCheckId, {
            isStarted: true,
            tabId: this.utilsService.getCurrentTabId()
        });
    };
    RefreshTokenService.prototype.deleteRefreshTokenTimerCheckId = function () {
        this.browserStorageService.removeLocal(this.refreshTokenTimerCheckId);
    };
    RefreshTokenService.prototype.setRefreshTokenTimerStopped = function () {
        this.browserStorageService.setLocal(this.refreshTokenTimerCheckId, {
            isStarted: false,
            tabId: -1
        });
    };
    RefreshTokenService.ɵfac = function RefreshTokenService_Factory(t) { return new (t || RefreshTokenService)(i0.ɵɵinject(i1.TokenStoreService), i0.ɵɵinject(app_config_1.APP_CONFIG), i0.ɵɵinject(i2.ApiConfigService), i0.ɵɵinject(i3.HttpClient), i0.ɵɵinject(i4.BrowserStorageService), i0.ɵɵinject(i5.UtilsService)); };
    RefreshTokenService.ɵprov = i0.ɵɵdefineInjectable({ token: RefreshTokenService, factory: RefreshTokenService.ɵfac, providedIn: 'root' });
    return RefreshTokenService;
}());
exports.RefreshTokenService = RefreshTokenService;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RefreshTokenService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.TokenStoreService }, { type: undefined, decorators: [{
                type: core_1.Inject,
                args: [app_config_1.APP_CONFIG]
            }] }, { type: i2.ApiConfigService }, { type: i3.HttpClient }, { type: i4.BrowserStorageService }, { type: i5.UtilsService }]; }, null); })();


/***/ }),

/***/ "RC5f":
/*!******************************************************!*\
  !*** ./src/app/core/models/auth-guard-permission.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "Sbaa":
/*!*************************************************************************!*\
  !*** ./src/app/shared/directives/is-visible-for-auth-user.directive.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IsVisibleForAuthUserDirective = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var core_2 = __webpack_require__(/*! @app/core */ "ey9i");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @app/core */ "ey9i");
var IsVisibleForAuthUserDirective = /** @class */ (function () {
    function IsVisibleForAuthUserDirective(elem, authService) {
        this.elem = elem;
        this.authService = authService;
        this.subscription = null;
        this.isVisibleForRoles = null;
    }
    IsVisibleForAuthUserDirective.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    IsVisibleForAuthUserDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.authService.authStatus$.subscribe(function (status) { return _this.changeVisibility(status); });
        this.changeVisibility(this.authService.isAuthUserLoggedIn());
    };
    IsVisibleForAuthUserDirective.prototype.changeVisibility = function (status) {
        var isInRoles = !this.isVisibleForRoles ? true : this.authService.isAuthUserInRoles(this.isVisibleForRoles);
        this.elem.nativeElement.style.display = isInRoles && status ? "" : "none";
    };
    IsVisibleForAuthUserDirective.ɵfac = function IsVisibleForAuthUserDirective_Factory(t) { return new (t || IsVisibleForAuthUserDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.AuthService)); };
    IsVisibleForAuthUserDirective.ɵdir = i0.ɵɵdefineDirective({ type: IsVisibleForAuthUserDirective, selectors: [["", "isVisibleForAuthUser", ""]], inputs: { isVisibleForRoles: "isVisibleForRoles" } });
    return IsVisibleForAuthUserDirective;
}());
exports.IsVisibleForAuthUserDirective = IsVisibleForAuthUserDirective;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IsVisibleForAuthUserDirective, [{
        type: core_1.Directive,
        args: [{
                selector: "[isVisibleForAuthUser]"
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.AuthService }]; }, { isVisibleForRoles: [{
            type: core_1.Input
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var core_2 = __webpack_require__(/*! app/core */ "ey9i");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! app/core */ "ey9i");
var i2 = __webpack_require__(/*! ./core/component/header/header.component */ "INwz");
var i3 = __webpack_require__(/*! @angular/router */ "tyNb");
var AppComponent = /** @class */ (function () {
    function AppComponent(refreshTokenService) {
        this.refreshTokenService = refreshTokenService;
    }
    AppComponent.prototype.unloadHandler = function () {
        // Invalidate current tab as active RefreshToken timer
        this.refreshTokenService.invalidateCurrentTabId();
    };
    AppComponent.prototype.beforeUnloadHander = function () {
        // ...
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(i0.ɵɵdirectiveInject(i1.RefreshTokenService)); };
    AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("unload", function AppComponent_unload_HostBindingHandler($event) { return ctx.unloadHandler($event); }, false, i0.ɵɵresolveWindow)("beforeunload", function AppComponent_beforeunload_HostBindingHandler($event) { return ctx.beforeUnloadHander($event); }, false, i0.ɵɵresolveWindow);
        } }, decls: 3, vars: 0, consts: [[1, "container", "p-5"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-header");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵelement(2, "router-outlet");
            i0.ɵɵelementEnd();
        } }, directives: [i2.HeaderComponent, i3.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppComponent, [{
        type: core_1.Component,
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.css"]
            }]
    }], function () { return [{ type: i1.RefreshTokenService }]; }, { unloadHandler: [{
            type: core_1.HostListener,
            args: ["window:unload", ["$event"]]
        }], beforeUnloadHander: [{
            type: core_1.HostListener,
            args: ["window:beforeunload", ["$event"]]
        }] }); })();


/***/ }),

/***/ "TDBs":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var shared_module_1 = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
var call_protected_api_component_1 = __webpack_require__(/*! ./call-protected-api/call-protected-api.component */ "czTL");
var dashboard_routing_module_1 = __webpack_require__(/*! ./dashboard-routing.module */ "Oy4E");
var protected_page_component_1 = __webpack_require__(/*! ./protected-page/protected-page.component */ "tQTw");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule.ɵmod = i0.ɵɵdefineNgModule({ type: DashboardModule });
    DashboardModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
                common_1.CommonModule,
                shared_module_1.SharedModule,
                dashboard_routing_module_1.DashboardRoutingModule
            ]] });
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DashboardModule, { declarations: [protected_page_component_1.ProtectedPageComponent, call_protected_api_component_1.CallProtectedApiComponent], imports: [common_1.CommonModule,
        shared_module_1.SharedModule,
        dashboard_routing_module_1.DashboardRoutingModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DashboardModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [
                    common_1.CommonModule,
                    shared_module_1.SharedModule,
                    dashboard_routing_module_1.DashboardRoutingModule
                ],
                declarations: [protected_page_component_1.ProtectedPageComponent, call_protected_api_component_1.CallProtectedApiComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "Y5Oc":
/*!******************************************************************************!*\
  !*** ./src/app/shared/directives/has-auth-user-view-permission.directive.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HasAuthUserViewPermissionDirective = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var core_2 = __webpack_require__(/*! @app/core */ "ey9i");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @app/core */ "ey9i");
var HasAuthUserViewPermissionDirective = /** @class */ (function () {
    // Note, if you don't place the * in front, you won't be able to inject the TemplateRef<any> or ViewContainerRef into your directive.
    function HasAuthUserViewPermissionDirective(templateRef, viewContainer, authService) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.authService = authService;
        this.isVisible = false;
        this.requiredRoles = null;
        this.subscription = null;
    }
    Object.defineProperty(HasAuthUserViewPermissionDirective.prototype, "hasAuthUserViewPermission", {
        set: function (roles) {
            this.requiredRoles = roles;
        },
        enumerable: false,
        configurable: true
    });
    HasAuthUserViewPermissionDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.authService.authStatus$.subscribe(function (status) { return _this.changeVisibility(status); });
        this.changeVisibility(this.authService.isAuthUserLoggedIn());
    };
    HasAuthUserViewPermissionDirective.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    HasAuthUserViewPermissionDirective.prototype.changeVisibility = function (status) {
        var isInRoles = !this.requiredRoles ? true : this.authService.isAuthUserInRoles(this.requiredRoles);
        if (isInRoles && status) {
            if (!this.isVisible) {
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.isVisible = true;
            }
        }
        else {
            this.isVisible = false;
            this.viewContainer.clear();
        }
    };
    HasAuthUserViewPermissionDirective.ɵfac = function HasAuthUserViewPermissionDirective_Factory(t) { return new (t || HasAuthUserViewPermissionDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.AuthService)); };
    HasAuthUserViewPermissionDirective.ɵdir = i0.ɵɵdefineDirective({ type: HasAuthUserViewPermissionDirective, selectors: [["", "hasAuthUserViewPermission", ""]], inputs: { hasAuthUserViewPermission: "hasAuthUserViewPermission" } });
    return HasAuthUserViewPermissionDirective;
}());
exports.HasAuthUserViewPermissionDirective = HasAuthUserViewPermissionDirective;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HasAuthUserViewPermissionDirective, [{
        type: core_1.Directive,
        args: [{
                selector: "[hasAuthUserViewPermission]"
            }]
    }], function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.AuthService }]; }, { hasAuthUserViewPermission: [{
            type: core_1.Input
        }] }); })();


/***/ }),

/***/ "Y9CB":
/*!*****************************************************************************!*\
  !*** ./src/app/authentication/change-password/change-password.component.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var change_password_service_1 = __webpack_require__(/*! ./services/change-password.service */ "0Rlb");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/router */ "tyNb");
var i2 = __webpack_require__(/*! ./services/change-password.service */ "0Rlb");
var i3 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i4 = __webpack_require__(/*! @angular/common */ "ofXK");
var i5 = __webpack_require__(/*! ../../shared/directives/equal-validator.directive */ "7z7v");
function ChangePasswordComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ChangePasswordComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ChangePasswordComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ChangePasswordComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.error, " ");
} }
function ChangePasswordComponent_ng_template_29_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1, " This field is required. ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordComponent_ng_template_29_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctrl_r10 = i0.ɵɵnextContext(2).control;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" This field should be minimum ", ctrl_r10.errors.minlength.requiredLength, " characters. ");
} }
function ChangePasswordComponent_ng_template_29_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctrl_r10 = i0.ɵɵnextContext(2).control;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" This field should be max ", ctrl_r10.errors.maxlength.requiredLength, " characters. ");
} }
function ChangePasswordComponent_ng_template_29_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctrl_r10 = i0.ɵɵnextContext(2).control;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" This field's pattern: ", ctrl_r10.errors.pattern.requiredPattern, " ");
} }
function ChangePasswordComponent_ng_template_29_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctrl_r10 = i0.ɵɵnextContext(2).control;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctrl_r10.errors.modelStateError.error, " ");
} }
function ChangePasswordComponent_ng_template_29_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1, " Password mismatch. ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordComponent_ng_template_29_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ChangePasswordComponent_ng_template_29_div_0_div_1_Template, 2, 0, "div", 21);
    i0.ɵɵtemplate(2, ChangePasswordComponent_ng_template_29_div_0_div_2_Template, 2, 1, "div", 21);
    i0.ɵɵtemplate(3, ChangePasswordComponent_ng_template_29_div_0_div_3_Template, 2, 1, "div", 21);
    i0.ɵɵtemplate(4, ChangePasswordComponent_ng_template_29_div_0_div_4_Template, 2, 1, "div", 21);
    i0.ɵɵtemplate(5, ChangePasswordComponent_ng_template_29_div_0_div_5_Template, 2, 1, "div", 21);
    i0.ɵɵtemplate(6, ChangePasswordComponent_ng_template_29_div_0_div_6_Template, 2, 0, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctrl_r10 = i0.ɵɵnextContext().control;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctrl_r10.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctrl_r10.errors.minlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctrl_r10.errors.maxlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctrl_r10.errors.pattern);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctrl_r10.errors.modelStateError);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctrl_r10.errors.appValidateEqual);
} }
function ChangePasswordComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ChangePasswordComponent_ng_template_29_div_0_Template, 7, 6, "div", 20);
} if (rf & 2) {
    var ctrl_r10 = ctx.control;
    i0.ɵɵproperty("ngIf", ctrl_r10.invalid && ctrl_r10.touched);
} }
var _c0 = function (a0) { return { control: a0 }; };
var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(router, changePasswordService) {
        this.router = router;
        this.changePasswordService = changePasswordService;
        this.error = "";
        this.model = {
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""
        };
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.submitForm = function (form) {
        var _this = this;
        console.log(this.model);
        console.log(form.value);
        this.error = "";
        this.changePasswordService.changePassword(this.model)
            .subscribe(function () {
            _this.router.navigate(["/welcome"]);
        }, function (error) {
            console.error("ChangePassword error", error);
            _this.error = error.error + " -> " + error.statusText + ": " + error.message;
        });
    };
    ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.ChangePasswordService)); };
    ChangePasswordComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 31, vars: 23, consts: [[1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "container"], ["novalidate", "", 3, "submit"], ["form", "ngForm"], [1, "form-group"], [1, "control-label"], ["name", "oldPassword", "type", "password", "required", "", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["oldPassword", "ngModel"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["name", "newPassword", "type", "password", "required", "", "minlength", "4", "name", "newPassword", "appValidateEqual", "", "compare-to", "confirmPassword", 1, "form-control", 3, "ngModel", "ngModelChange"], ["newPassword", "ngModel"], ["name", "confirmPassword", "type", "password", "required", "", "minlength", "4", "name", "confirmPassword", "appValidateEqual", "", "compare-to", "newPassword", 1, "form-control", 3, "ngModel", "ngModelChange"], ["confirmPassword", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "alert alert-danger ", "role", "alert ", 4, "ngIf"], ["validationErrorsTemplate", ""], ["role", "alert ", 1, "alert", "alert-danger"], [4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
            var _r23 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "h2", 2);
            i0.ɵɵtext(3, "Change Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵelementStart(6, "form", 5, 6);
            i0.ɵɵlistener("submit", function ChangePasswordComponent_Template_form_submit_6_listener() { i0.ɵɵrestoreView(_r23); var _r0 = i0.ɵɵreference(7); return ctx.submitForm(_r0); });
            i0.ɵɵelementStart(8, "div", 7);
            i0.ɵɵelementStart(9, "label", 8);
            i0.ɵɵtext(10, "Current Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "input", 9, 10);
            i0.ɵɵlistener("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_11_listener($event) { return ctx.model.oldPassword = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(13, ChangePasswordComponent_ng_container_13_Template, 1, 0, "ng-container", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 7);
            i0.ɵɵelementStart(15, "label", 8);
            i0.ɵɵtext(16, "New Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "input", 12, 13);
            i0.ɵɵlistener("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_17_listener($event) { return ctx.model.newPassword = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(19, ChangePasswordComponent_ng_container_19_Template, 1, 0, "ng-container", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div", 7);
            i0.ɵɵelementStart(21, "label", 8);
            i0.ɵɵtext(22, "Confirm Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "input", 14, 15);
            i0.ɵɵlistener("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_23_listener($event) { return ctx.model.confirmPassword = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(25, ChangePasswordComponent_ng_container_25_Template, 1, 0, "ng-container", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "button", 16);
            i0.ɵɵtext(27, "Submit");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(28, ChangePasswordComponent_div_28_Template, 2, 1, "div", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(29, ChangePasswordComponent_ng_template_29_Template, 1, 1, "ng-template", null, 18, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(7);
            var _r1 = i0.ɵɵreference(12);
            var _r3 = i0.ɵɵreference(18);
            var _r5 = i0.ɵɵreference(24);
            var _r8 = i0.ɵɵreference(30);
            i0.ɵɵadvance(11);
            i0.ɵɵclassProp("is-invalid", _r1.invalid && _r1.touched);
            i0.ɵɵproperty("ngModel", ctx.model.oldPassword);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r8)("ngTemplateOutletContext", i0.ɵɵpureFunction1(17, _c0, _r1));
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("is-invalid", _r3.invalid && _r3.touched);
            i0.ɵɵproperty("ngModel", ctx.model.newPassword);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r8)("ngTemplateOutletContext", i0.ɵɵpureFunction1(19, _c0, _r3));
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("is-invalid", _r5.invalid && _r5.touched);
            i0.ɵɵproperty("ngModel", ctx.model.confirmPassword);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r8)("ngTemplateOutletContext", i0.ɵɵpureFunction1(21, _c0, _r5));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("disabled", _r0.invalid);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, directives: [i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i4.NgTemplateOutlet, i3.MinLengthValidator, i5.EqualValidatorDirective, i4.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"] });
    return ChangePasswordComponent;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChangePasswordComponent, [{
        type: core_1.Component,
        args: [{
                selector: "app-change-password",
                templateUrl: "./change-password.component.html",
                styleUrls: ["./change-password.component.css"]
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.ChangePasswordService }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "vY5A");
var app_component_1 = __webpack_require__(/*! ./app.component */ "Sy1n");
var authentication_module_1 = __webpack_require__(/*! ./authentication/authentication.module */ "OpKh");
var core_module_1 = __webpack_require__(/*! ./core/core.module */ "pKmL");
var dashboard_module_1 = __webpack_require__(/*! ./dashboard/dashboard.module */ "TDBs");
var page_not_found_component_1 = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
var shared_module_1 = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
var welcome_component_1 = __webpack_require__(/*! ./welcome/welcome.component */ "J7Q4");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [app_component_1.AppComponent] });
    AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                platform_browser_1.BrowserModule,
                core_module_1.CoreModule,
                shared_module_1.SharedModule.forRoot(),
                authentication_module_1.AuthenticationModule,
                dashboard_module_1.DashboardModule,
                app_routing_module_1.AppRoutingModule
            ]] });
    return AppModule;
}());
exports.AppModule = AppModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [app_component_1.AppComponent,
        welcome_component_1.WelcomeComponent,
        page_not_found_component_1.PageNotFoundComponent], imports: [platform_browser_1.BrowserModule,
        core_module_1.CoreModule, i1.SharedModule, authentication_module_1.AuthenticationModule,
        dashboard_module_1.DashboardModule,
        app_routing_module_1.AppRoutingModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    app_component_1.AppComponent,
                    welcome_component_1.WelcomeComponent,
                    page_not_found_component_1.PageNotFoundComponent
                ],
                imports: [
                    platform_browser_1.BrowserModule,
                    core_module_1.CoreModule,
                    shared_module_1.SharedModule.forRoot(),
                    authentication_module_1.AuthenticationModule,
                    dashboard_module_1.DashboardModule,
                    app_routing_module_1.AppRoutingModule
                ],
                providers: [],
                bootstrap: [app_component_1.AppComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "c6Eg":
/*!*********************************************!*\
  !*** ./src/app/core/services/auth.guard.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "7dP1");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./auth.service */ "7dP1");
var i2 = __webpack_require__(/*! @angular/router */ "tyNb");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
        this.permissionObjectKey = "permission";
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var permissionData = route.data[this.permissionObjectKey];
        var returnUrl = state.url;
        return this.hasAuthUserAccessToThisRoute(permissionData, returnUrl);
    };
    AuthGuard.prototype.canActivateChild = function (childRoute, state) {
        var permissionData = childRoute.data[this.permissionObjectKey];
        var returnUrl = state.url;
        return this.hasAuthUserAccessToThisRoute(permissionData, returnUrl);
    };
    AuthGuard.prototype.canLoad = function (route) {
        if (route.data) {
            var permissionData = route.data[this.permissionObjectKey];
            var returnUrl = "/" + route.path;
            return this.hasAuthUserAccessToThisRoute(permissionData, returnUrl);
        }
        else {
            return true;
        }
    };
    AuthGuard.prototype.hasAuthUserAccessToThisRoute = function (permissionData, returnUrl) {
        if (!this.authService.isAuthUserLoggedIn()) {
            this.showAccessDenied(returnUrl);
            return false;
        }
        if (!permissionData) {
            return true;
        }
        if (Array.isArray(permissionData.deniedRoles) && Array.isArray(permissionData.permittedRoles)) {
            throw new Error("Don't set both 'deniedRoles' and 'permittedRoles' in route data.");
        }
        if (Array.isArray(permissionData.permittedRoles)) {
            var isInRole = this.authService.isAuthUserInRoles(permissionData.permittedRoles);
            if (isInRole) {
                return true;
            }
            this.showAccessDenied(returnUrl);
            return false;
        }
        if (Array.isArray(permissionData.deniedRoles)) {
            var isInRole = this.authService.isAuthUserInRoles(permissionData.deniedRoles);
            if (!isInRole) {
                return true;
            }
            this.showAccessDenied(returnUrl);
            return false;
        }
        return true;
    };
    AuthGuard.prototype.showAccessDenied = function (returnUrl) {
        this.router.navigate(["/accessDenied"], { queryParams: { returnUrl: returnUrl } });
    };
    AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.Router)); };
    AuthGuard.ɵprov = i0.ɵɵdefineInjectable({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthGuard, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.Router }]; }, null); })();


/***/ }),

/***/ "czTL":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/call-protected-api/call-protected-api.component.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CallProtectedApiComponent = void 0;
var http_1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var core_2 = __webpack_require__(/*! @app/core */ "ey9i");
var rxjs_1 = __webpack_require__(/*! rxjs */ "qCKp");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "kU1M");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @app/core */ "ey9i");
var i2 = __webpack_require__(/*! @angular/common/http */ "tk/3");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var i4 = __webpack_require__(/*! ../../shared/directives/is-visible-for-auth-user.directive */ "Sbaa");
var i5 = __webpack_require__(/*! ../../shared/directives/has-auth-user-view-permission.directive */ "Y5Oc");
function CallProtectedApiComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function CallProtectedApiComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.callMyProtectedAdminApiController(); });
    i0.ɵɵtext(1, " Call [Authorize(Roles = \"Admin\")] API ");
    i0.ɵɵelementEnd();
} }
function CallProtectedApiComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function CallProtectedApiComponent_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.callMyProtectedApiController(); });
    i0.ɵɵtext(1, " Call [Authorize] API ");
    i0.ɵɵelementEnd();
} }
function CallProtectedApiComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelementStart(1, "pre");
    i0.ɵɵelementStart(2, "code");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "json");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 1, ctx_r2.result));
} }
function CallProtectedApiComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1, " *hasAuthUserViewPermission=\"\" ");
    i0.ɵɵelementEnd();
} }
function CallProtectedApiComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1, " *hasAuthUserViewPermission=\"['Admin','User']\" ");
    i0.ɵɵelementEnd();
} }
var _c0 = function () { return ["Admin", "User"]; };
var CallProtectedApiComponent = /** @class */ (function () {
    function CallProtectedApiComponent(authService, httpClient, appConfig) {
        this.authService = authService;
        this.httpClient = httpClient;
        this.appConfig = appConfig;
        this.isAdmin = false;
        this.isUser = false;
    }
    CallProtectedApiComponent.prototype.ngOnInit = function () {
        this.isAdmin = this.authService.isAuthUserInRole("Admin");
        this.isUser = this.authService.isAuthUserInRole("User");
    };
    CallProtectedApiComponent.prototype.callMyProtectedAdminApiController = function () {
        var _this = this;
        this.httpClient
            .get(this.appConfig.apiEndpoint + "/MyProtectedAdminApi")
            .pipe(operators_1.map(function (response) { return response || {}; }), operators_1.catchError(function (error) { return rxjs_1.throwError(error); }))
            .subscribe(function (result) {
            _this.result = result;
        });
    };
    CallProtectedApiComponent.prototype.callMyProtectedApiController = function () {
        var _this = this;
        this.httpClient
            .get(this.appConfig.apiEndpoint + "/MyProtectedApi")
            .pipe(operators_1.map(function (response) { return response || {}; }), operators_1.catchError(function (error) { return rxjs_1.throwError(error); }))
            .subscribe(function (result) {
            _this.result = result;
        });
    };
    CallProtectedApiComponent.prototype.callMyProtectedEditorsApiController = function () {
        var _this = this;
        this.httpClient
            .get(this.appConfig.apiEndpoint + "/MyProtectedEditorsApi")
            .pipe(operators_1.map(function (response) { return response || {}; }), operators_1.catchError(function (error) { return rxjs_1.throwError(error); }))
            .subscribe(function (result) {
            _this.result = result;
        });
    };
    CallProtectedApiComponent.ɵfac = function CallProtectedApiComponent_Factory(t) { return new (t || CallProtectedApiComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.HttpClient), i0.ɵɵdirectiveInject(core_2.APP_CONFIG)); };
    CallProtectedApiComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CallProtectedApiComponent, selectors: [["app-call-protected-api"]], decls: 28, vars: 7, consts: [[1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-default", 3, "click", 4, "ngIf"], [1, "btn", "btn-warning", 3, "click"], ["class", "highlight", 4, "ngIf"], [1, "top15"], ["isVisibleForAuthUser", "", 1, "alert", "alert-info"], ["isVisibleForAuthUser", "", 1, "alert", "alert-success", 3, "isVisibleForRoles"], ["class", "alert alert-info", 4, "hasAuthUserViewPermission"], ["class", "alert alert-success", 4, "hasAuthUserViewPermission"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-default", 3, "click"], [1, "highlight"], [1, "alert", "alert-info"], [1, "alert", "alert-success"]], template: function CallProtectedApiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "h2", 2);
            i0.ɵɵtext(3, "Call protected API");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵtemplate(5, CallProtectedApiComponent_button_5_Template, 2, 0, "button", 4);
            i0.ɵɵtemplate(6, CallProtectedApiComponent_button_6_Template, 2, 0, "button", 5);
            i0.ɵɵelementStart(7, "button", 6);
            i0.ɵɵlistener("click", function CallProtectedApiComponent_Template_button_click_7_listener() { return ctx.callMyProtectedEditorsApiController(); });
            i0.ɵɵtext(8, " Call [Authorize(Roles = \"Editor\")] API ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, CallProtectedApiComponent_div_9_Template, 5, 3, "div", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 8);
            i0.ɵɵelementStart(11, "div", 0);
            i0.ɵɵelementStart(12, "div", 1);
            i0.ɵɵelementStart(13, "h2", 2);
            i0.ɵɵtext(14, "Show/Hide elements using isVisibleForAuthUser directive");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 3);
            i0.ɵɵelementStart(16, "div", 9);
            i0.ɵɵtext(17, " Is-Visible-For-AuthUser ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 10);
            i0.ɵɵtext(19, " Is-Visible-For-Roles = ['Admin','User'] ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div", 8);
            i0.ɵɵelementStart(21, "div", 0);
            i0.ɵɵelementStart(22, "div", 1);
            i0.ɵɵelementStart(23, "h2", 2);
            i0.ɵɵtext(24, "Show/Hide elements using *hasAuthUserViewPermission directive");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 3);
            i0.ɵɵtemplate(26, CallProtectedApiComponent_div_26_Template, 2, 0, "div", 11);
            i0.ɵɵtemplate(27, CallProtectedApiComponent_div_27_Template, 2, 0, "div", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.isAdmin);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isAdmin || ctx.isUser);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.result);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("isVisibleForRoles", i0.ɵɵpureFunction0(5, _c0));
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("hasAuthUserViewPermission", i0.ɵɵpureFunction0(6, _c0));
        } }, directives: [i3.NgIf, i4.IsVisibleForAuthUserDirective, i5.HasAuthUserViewPermissionDirective], pipes: [i3.JsonPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxsLXByb3RlY3RlZC1hcGkuY29tcG9uZW50LmNzcyJ9 */"] });
    return CallProtectedApiComponent;
}());
exports.CallProtectedApiComponent = CallProtectedApiComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CallProtectedApiComponent, [{
        type: core_1.Component,
        args: [{
                selector: "app-call-protected-api",
                templateUrl: "./call-protected-api.component.html",
                styleUrls: ["./call-protected-api.component.css"]
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.HttpClient }, { type: undefined, decorators: [{
                type: core_1.Inject,
                args: [core_2.APP_CONFIG]
            }] }]; }, null); })();


/***/ }),

/***/ "dMvD":
/*!***************************************************!*\
  !*** ./src/app/core/services/auth.interceptor.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthInterceptor = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var rxjs_1 = __webpack_require__(/*! rxjs */ "qCKp");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "kU1M");
var auth_token_type_1 = __webpack_require__(/*! ./../models/auth-token-type */ "L7i+");
var token_store_service_1 = __webpack_require__(/*! ./token-store.service */ "ft2M");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./token-store.service */ "ft2M");
var i2 = __webpack_require__(/*! @angular/router */ "tyNb");
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(tokenStoreService, router) {
        this.tokenStoreService = tokenStoreService;
        this.router = router;
        this.delayBetweenRetriesMs = 1000;
        this.numberOfRetries = 3;
        this.authorizationHeader = "Authorization";
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var accessToken = this.tokenStoreService.getRawAuthToken(auth_token_type_1.AuthTokenType.AccessToken);
        if (accessToken) {
            request = request.clone({
                headers: request.headers.set(this.authorizationHeader, "Bearer " + accessToken)
            });
            return next.handle(request).pipe(operators_1.retryWhen(function (errors) { return errors.pipe(operators_1.mergeMap(function (error, retryAttempt) {
                if (retryAttempt === _this.numberOfRetries - 1) {
                    console.log("HTTP call '" + request.method + " " + request.url + "' failed after " + _this.numberOfRetries + " retries.");
                    return rxjs_1.throwError(error); // no retry
                }
                switch (error.status) {
                    case 400:
                    case 404:
                        return rxjs_1.throwError(error); // no retry
                }
                return rxjs_1.of(error); // retry
            }), operators_1.delay(_this.delayBetweenRetriesMs), operators_1.take(_this.numberOfRetries)); }), operators_1.catchError(function (error, caught) {
                console.error({ error: error, caught: caught });
                if (error.status === 401 || error.status === 403) {
                    var newRequest = _this.getNewAuthRequest(request);
                    if (newRequest) {
                        console.log("Try new AuthRequest ...");
                        return next.handle(newRequest);
                    }
                    _this.router.navigate(["/accessDenied"]);
                }
                return rxjs_1.throwError(error);
            }));
        }
        else {
            // login page
            return next.handle(request);
        }
    };
    AuthInterceptor.prototype.getNewAuthRequest = function (request) {
        var newStoredToken = this.tokenStoreService.getRawAuthToken(auth_token_type_1.AuthTokenType.AccessToken);
        var requestAccessTokenHeader = request.headers.get(this.authorizationHeader);
        if (!newStoredToken || !requestAccessTokenHeader) {
            console.log("There is no new AccessToken.", { requestAccessTokenHeader: requestAccessTokenHeader, newStoredToken: newStoredToken });
            return null;
        }
        var newAccessTokenHeader = "Bearer " + newStoredToken;
        if (requestAccessTokenHeader === newAccessTokenHeader) {
            console.log("There is no new AccessToken.", { requestAccessTokenHeader: requestAccessTokenHeader, newAccessTokenHeader: newAccessTokenHeader });
            return null;
        }
        return request.clone({ headers: request.headers.set(this.authorizationHeader, newAccessTokenHeader) });
    };
    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(i0.ɵɵinject(i1.TokenStoreService), i0.ɵɵinject(i2.Router)); };
    AuthInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
    return AuthInterceptor;
}());
exports.AuthInterceptor = AuthInterceptor;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthInterceptor, [{
        type: core_1.Injectable
    }], function () { return [{ type: i1.TokenStoreService }, { type: i2.Router }]; }, null); })();


/***/ }),

/***/ "ey9i":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./models/auth-guard-permission */ "RC5f"), exports);
__exportStar(__webpack_require__(/*! ./models/auth-token-type */ "L7i+"), exports);
__exportStar(__webpack_require__(/*! ./models/auth-user */ "tUjc"), exports);
__exportStar(__webpack_require__(/*! ./models/credentials */ "glxq"), exports);
__exportStar(__webpack_require__(/*! ./services/api-config.service */ "jI5v"), exports);
__exportStar(__webpack_require__(/*! ./services/app.config */ "4iQD"), exports);
__exportStar(__webpack_require__(/*! ./services/auth.guard */ "c6Eg"), exports);
__exportStar(__webpack_require__(/*! ./services/auth.service */ "7dP1"), exports);
__exportStar(__webpack_require__(/*! ./services/browser-storage.service */ "4CYu"), exports);
__exportStar(__webpack_require__(/*! ./services/refresh-token.service */ "PS5g"), exports);
__exportStar(__webpack_require__(/*! ./services/token-store.service */ "ft2M"), exports);
__exportStar(__webpack_require__(/*! ./services/utils.service */ "OiFK"), exports);


/***/ }),

/***/ "ft2M":
/*!******************************************************!*\
  !*** ./src/app/core/services/token-store.service.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenStoreService = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var jwt_decode_1 = __webpack_require__(/*! jwt-decode */ "EjJx");
var auth_token_type_1 = __webpack_require__(/*! ./../models/auth-token-type */ "L7i+");
var api_config_service_1 = __webpack_require__(/*! ./api-config.service */ "jI5v");
var browser_storage_service_1 = __webpack_require__(/*! ./browser-storage.service */ "4CYu");
var utils_service_1 = __webpack_require__(/*! ./utils.service */ "OiFK");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./browser-storage.service */ "4CYu");
var i2 = __webpack_require__(/*! ./utils.service */ "OiFK");
var i3 = __webpack_require__(/*! ./api-config.service */ "jI5v");
var TokenStoreService = /** @class */ (function () {
    function TokenStoreService(browserStorageService, utilsService, apiConfigService) {
        this.browserStorageService = browserStorageService;
        this.utilsService = utilsService;
        this.apiConfigService = apiConfigService;
        this.rememberMeToken = "rememberMe_token";
    }
    TokenStoreService.prototype.getRawAuthToken = function (tokenType) {
        if (this.rememberMe()) {
            return this.browserStorageService.getLocal(auth_token_type_1.AuthTokenType[tokenType]);
        }
        else {
            return this.browserStorageService.getSession(auth_token_type_1.AuthTokenType[tokenType]);
        }
    };
    TokenStoreService.prototype.getDecodedAccessToken = function () {
        return jwt_decode_1.default(this.getRawAuthToken(auth_token_type_1.AuthTokenType.AccessToken));
    };
    TokenStoreService.prototype.getAuthUserDisplayName = function () {
        return this.getDecodedAccessToken().DisplayName;
    };
    TokenStoreService.prototype.getAccessTokenExpirationDateUtc = function () {
        var decoded = this.getDecodedAccessToken();
        if (decoded.exp === undefined) {
            return null;
        }
        var date = new Date(0); // The 0 sets the date to the epoch
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    TokenStoreService.prototype.isAccessTokenTokenExpired = function () {
        var expirationDateUtc = this.getAccessTokenExpirationDateUtc();
        if (!expirationDateUtc) {
            return true;
        }
        return !(expirationDateUtc.valueOf() > new Date().valueOf());
    };
    TokenStoreService.prototype.deleteAuthTokens = function () {
        if (this.rememberMe()) {
            this.browserStorageService.removeLocal(auth_token_type_1.AuthTokenType[auth_token_type_1.AuthTokenType.AccessToken]);
            this.browserStorageService.removeLocal(auth_token_type_1.AuthTokenType[auth_token_type_1.AuthTokenType.RefreshToken]);
        }
        else {
            this.browserStorageService.removeSession(auth_token_type_1.AuthTokenType[auth_token_type_1.AuthTokenType.AccessToken]);
            this.browserStorageService.removeSession(auth_token_type_1.AuthTokenType[auth_token_type_1.AuthTokenType.RefreshToken]);
        }
        this.browserStorageService.removeLocal(this.rememberMeToken);
    };
    TokenStoreService.prototype.setToken = function (tokenType, tokenValue) {
        if (this.utilsService.isEmptyString(tokenValue)) {
            console.error(auth_token_type_1.AuthTokenType[tokenType] + " is null or empty.");
        }
        if (tokenType === auth_token_type_1.AuthTokenType.AccessToken && this.utilsService.isEmptyString(tokenValue)) {
            throw new Error("AccessToken can't be null or empty.");
        }
        if (this.rememberMe()) {
            this.browserStorageService.setLocal(auth_token_type_1.AuthTokenType[tokenType], tokenValue);
        }
        else {
            this.browserStorageService.setSession(auth_token_type_1.AuthTokenType[tokenType], tokenValue);
        }
    };
    TokenStoreService.prototype.getDecodedTokenRoles = function () {
        var decodedToken = this.getDecodedAccessToken();
        var roles = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        if (!roles) {
            return null;
        }
        if (Array.isArray(roles)) {
            return roles.map(function (role) { return role.toLowerCase(); });
        }
        else {
            return [roles.toLowerCase()];
        }
    };
    TokenStoreService.prototype.storeLoginSession = function (response) {
        this.setToken(auth_token_type_1.AuthTokenType.AccessToken, response[this.apiConfigService.configuration.accessTokenObjectKey]);
        this.setToken(auth_token_type_1.AuthTokenType.RefreshToken, response[this.apiConfigService.configuration.refreshTokenObjectKey]);
    };
    TokenStoreService.prototype.rememberMe = function () {
        return this.browserStorageService.getLocal(this.rememberMeToken) === true;
    };
    TokenStoreService.prototype.setRememberMe = function (value) {
        this.browserStorageService.setLocal(this.rememberMeToken, value);
    };
    TokenStoreService.prototype.hasStoredAccessAndRefreshTokens = function () {
        var accessToken = this.getRawAuthToken(auth_token_type_1.AuthTokenType.AccessToken);
        var refreshToken = this.getRawAuthToken(auth_token_type_1.AuthTokenType.RefreshToken);
        return !this.utilsService.isEmptyString(accessToken) && !this.utilsService.isEmptyString(refreshToken);
    };
    TokenStoreService.ɵfac = function TokenStoreService_Factory(t) { return new (t || TokenStoreService)(i0.ɵɵinject(i1.BrowserStorageService), i0.ɵɵinject(i2.UtilsService), i0.ɵɵinject(i3.ApiConfigService)); };
    TokenStoreService.ɵprov = i0.ɵɵdefineInjectable({ token: TokenStoreService, factory: TokenStoreService.ɵfac, providedIn: 'root' });
    return TokenStoreService;
}());
exports.TokenStoreService = TokenStoreService;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TokenStoreService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.BrowserStorageService }, { type: i2.UtilsService }, { type: i3.ApiConfigService }]; }, null); })();


/***/ }),

/***/ "glxq":
/*!********************************************!*\
  !*** ./src/app/core/models/credentials.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "ionX":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationRoutingModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var core_2 = __webpack_require__(/*! @app/core */ "ey9i");
var access_denied_component_1 = __webpack_require__(/*! ./access-denied/access-denied.component */ "NfzT");
var change_password_component_1 = __webpack_require__(/*! ./change-password/change-password.component */ "Y9CB");
var login_component_1 = __webpack_require__(/*! ./login/login.component */ "kuBs");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/router */ "tyNb");
var routes = [
    { path: "login", component: login_component_1.LoginComponent },
    { path: "accessDenied", component: access_denied_component_1.AccessDeniedComponent },
    {
        path: "changePassword", component: change_password_component_1.ChangePasswordComponent,
        data: {
            permission: {
                permittedRoles: ["Admin", "User"]
            }
        },
        canActivate: [core_2.AuthGuard]
    }
];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: AuthenticationRoutingModule });
    AuthenticationRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AuthenticationRoutingModule_Factory(t) { return new (t || AuthenticationRoutingModule)(); }, imports: [[router_1.RouterModule.forChild(routes)], router_1.RouterModule] });
    return AuthenticationRoutingModule;
}());
exports.AuthenticationRoutingModule = AuthenticationRoutingModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AuthenticationRoutingModule, { imports: [i1.RouterModule], exports: [router_1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthenticationRoutingModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            }]
    }], null, null); })();


/***/ }),

/***/ "jI5v":
/*!*****************************************************!*\
  !*** ./src/app/core/services/api-config.service.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiConfigService = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var ApiConfigService = /** @class */ (function () {
    function ApiConfigService() {
        this.config = null;
    }
    ApiConfigService.prototype.loadApiConfig = function () {
        this.config = {
            loginPath: "asrar/dashboard/login",
            adminRoleName: "admin",
            accessTokenObjectKey: "accessToken",
            refreshTokenObjectKey: "refreshToken",
        };
        return this.config;
        // const http = this.injector.get<HttpClient>(HttpClient);
        // const url = `${this.appConfig.apiEndpoint}/${this.appConfig.apiSettingsPath}`;
        // return http.get<IApiConfig>(url)
        //   .toPromise()
        //   .then(config => {
        //     this.config = config;
        //     console.log("ApiConfig", this.config);
        //   })
        //   .catch(err => {
        //     console.error(`Failed to loadApiConfig(). Make sure ${url} is accessible.`, this.config);
        //     return Promise.reject(err);
        //   });
    };
    Object.defineProperty(ApiConfigService.prototype, "configuration", {
        get: function () {
            if (!this.config) {
                throw new Error("Attempted to access configuration property before configuration data was loaded.");
            }
            return this.config;
        },
        enumerable: false,
        configurable: true
    });
    ApiConfigService.ɵfac = function ApiConfigService_Factory(t) { return new (t || ApiConfigService)(); };
    ApiConfigService.ɵprov = i0.ɵɵdefineInjectable({ token: ApiConfigService, factory: ApiConfigService.ɵfac, providedIn: 'root' });
    return ApiConfigService;
}());
exports.ApiConfigService = ApiConfigService;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ApiConfigService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kuBs":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var core_2 = __webpack_require__(/*! @app/core */ "ey9i");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @app/core */ "ey9i");
var i2 = __webpack_require__(/*! @angular/router */ "tyNb");
var i3 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.model = { username: "", password: "", rememberMe: false };
        this.error = "";
        this.returnUrl = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset the login status
        this.authService.logout(false);
        // get the return url from route parameters
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"];
    };
    LoginComponent.prototype.submitForm = function (form) {
        var _this = this;
        console.log(form);
        this.error = "";
        this.authService.login(this.model)
            .subscribe(function (isLoggedIn) {
            if (isLoggedIn) {
                if (_this.returnUrl) {
                    _this.router.navigate([_this.returnUrl]);
                }
                else {
                    _this.router.navigate(["/protectedPage"]);
                }
            }
        }, function (error) {
            console.error("Login error", error);
            if (error.status === 401) {
                _this.error = "Invalid User name or Password. Please try again.";
            }
            else {
                _this.error = error.statusText + ": " + error.message;
            }
        });
    };
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); };
    LoginComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], decls: 24, vars: 2, consts: [[1, "hero"], [1, "hero-body"], [1, "container"], [1, "columns", "is-centered"], [1, "column", "is-5-tablet", "is-4-desktop", "is-3-widescreen"], [1, "box", 3, "submit"], ["form", "ngForm"], [1, "field"], ["for", "", 1, "label"], [1, "control", "has-icons-left"], ["type", "email", "placeholder", "Put something", "required", "", "name", "username", 1, "input", 3, "ngModel", "ngModelChange"], [1, "icon", "is-small", "is-left"], [1, "fa", "fa-envelope"], ["type", "password", "placeholder", "*******", "required", "", "name", "password", 1, "input", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-lock"], ["type", "submit", 1, "button", "is-success"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            var _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵelementStart(5, "form", 5, 6);
            i0.ɵɵlistener("submit", function LoginComponent_Template_form_submit_5_listener() { i0.ɵɵrestoreView(_r1); var _r0 = i0.ɵɵreference(6); return ctx.submitForm(_r0); });
            i0.ɵɵelementStart(7, "div", 7);
            i0.ɵɵelementStart(8, "label", 8);
            i0.ɵɵtext(9, "Username");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 9);
            i0.ɵɵelementStart(11, "input", 10);
            i0.ɵɵlistener("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.model.username = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "span", 11);
            i0.ɵɵelement(13, "i", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 7);
            i0.ɵɵelementStart(15, "label", 8);
            i0.ɵɵtext(16, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 9);
            i0.ɵɵelementStart(18, "input", 13);
            i0.ɵɵlistener("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) { return ctx.model.password = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "span", 11);
            i0.ɵɵelement(20, "i", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 7);
            i0.ɵɵelementStart(22, "button", 15);
            i0.ɵɵtext(23, "Login");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngModel", ctx.model.username);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngModel", ctx.model.password);
        } }, directives: [i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LoginComponent, [{
        type: core_1.Component,
        args: [{
                selector: "app-login",
                templateUrl: "./login.component.html",
                styleUrls: ["./login.component.css"]
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.Router }, { type: i2.ActivatedRoute }]; }, null); })();


/***/ }),

/***/ "oJeO":
/*!****************************************************!*\
  !*** ./src/app/core/services/dashboard.service.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
var app_config_1 = __webpack_require__(/*! ./app.config */ "4iQD");
var http_1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
var DashboardService = /** @class */ (function () {
    function DashboardService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    DashboardService.prototype.loadDashboard = function () {
        var url = this.appConfig.apiEndpoint + "/" + this.appConfig.dashboardEndPoint;
        return this.http.get(url);
    };
    DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(app_config_1.APP_CONFIG)); };
    DashboardService.ɵprov = i0.ɵɵdefineInjectable({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });
    return DashboardService;
}());
exports.DashboardService = DashboardService;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DashboardService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                type: core_1.Inject,
                args: [app_config_1.APP_CONFIG]
            }] }]; }, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreModule = void 0;
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var http_1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var header_component_1 = __webpack_require__(/*! ./component/header/header.component */ "INwz");
var api_config_service_1 = __webpack_require__(/*! ./services/api-config.service */ "jI5v");
var app_config_1 = __webpack_require__(/*! ./services/app.config */ "4iQD");
var auth_interceptor_1 = __webpack_require__(/*! ./services/auth.interceptor */ "dMvD");
var xsrf_interceptor_1 = __webpack_require__(/*! ./services/xsrf.interceptor */ "L4pY");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var CoreModule = /** @class */ (function () {
    function CoreModule(core) {
        if (core) {
            throw new Error("CoreModule should be imported ONLY in AppModule.");
        }
    }
    CoreModule.ɵmod = i0.ɵɵdefineNgModule({ type: CoreModule });
    CoreModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(i0.ɵɵinject(CoreModule, 12)); }, providers: [
            /* ``No`` global singleton services of the whole app should be listed here anymore!
               Since they'll be already provided in AppModule using the `tree-shakable providers` of Angular 6.x+ (providedIn: 'root').
               This new feature allows cleaning up the providers section from the CoreModule.
               But if you want to provide something with an InjectionToken other that its class, you still have to use this section.
            */
            {
                provide: app_config_1.APP_CONFIG,
                useValue: app_config_1.AppConfig
            },
            {
                provide: http_1.HTTP_INTERCEPTORS,
                useClass: xsrf_interceptor_1.XsrfInterceptor,
                multi: true
            },
            {
                provide: http_1.HTTP_INTERCEPTORS,
                useClass: auth_interceptor_1.AuthInterceptor,
                multi: true
            },
            {
                provide: core_1.APP_INITIALIZER,
                useFactory: function (config) { return function () { return config.loadApiConfig(); }; },
                deps: [api_config_service_1.ApiConfigService],
                multi: true
            }
        ], imports: [[common_1.CommonModule, router_1.RouterModule]] });
    return CoreModule;
}());
exports.CoreModule = CoreModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoreModule, { declarations: [
        // components that are used in app.component.ts will be listed here.
        header_component_1.HeaderComponent], imports: [common_1.CommonModule, router_1.RouterModule], exports: [
        // components that are used in app.component.ts will be listed here.
        header_component_1.HeaderComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CoreModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [common_1.CommonModule, router_1.RouterModule],
                exports: [
                    // components that are used in app.component.ts will be listed here.
                    header_component_1.HeaderComponent
                ],
                declarations: [
                    // components that are used in app.component.ts will be listed here.
                    header_component_1.HeaderComponent
                ],
                providers: [
                    /* ``No`` global singleton services of the whole app should be listed here anymore!
                       Since they'll be already provided in AppModule using the `tree-shakable providers` of Angular 6.x+ (providedIn: 'root').
                       This new feature allows cleaning up the providers section from the CoreModule.
                       But if you want to provide something with an InjectionToken other that its class, you still have to use this section.
                    */
                    {
                        provide: app_config_1.APP_CONFIG,
                        useValue: app_config_1.AppConfig
                    },
                    {
                        provide: http_1.HTTP_INTERCEPTORS,
                        useClass: xsrf_interceptor_1.XsrfInterceptor,
                        multi: true
                    },
                    {
                        provide: http_1.HTTP_INTERCEPTORS,
                        useClass: auth_interceptor_1.AuthInterceptor,
                        multi: true
                    },
                    {
                        provide: core_1.APP_INITIALIZER,
                        useFactory: function (config) { return function () { return config.loadApiConfig(); }; },
                        deps: [api_config_service_1.ApiConfigService],
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: core_1.Optional
            }, {
                type: core_1.SkipSelf
            }] }]; }, null); })();


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PageNotFoundComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
    PageNotFoundComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "\u0633\u06CC \u06A9\u0627\u0631\u0645\u0648\u0646\u060C \u0631\u0627\u062D\u062A\u0648 \u06AF\u0645 \u06A9\u0631\u062F\u06CC.");
            i0.ɵɵelementEnd();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PageNotFoundComponent, [{
        type: core_1.Component,
        args: [{
                selector: "app-page-not-found",
                templateUrl: "./page-not-found.component.html",
                styleUrls: ["./page-not-found.component.css"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tQTw":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/protected-page/protected-page.component.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtectedPageComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var rxjs_1 = __webpack_require__(/*! rxjs */ "qCKp");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "kU1M");
var core_2 = __webpack_require__(/*! @app/core */ "ey9i");
var dashboard_service_1 = __webpack_require__(/*! @app/core/services/dashboard.service */ "oJeO");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @app/core */ "ey9i");
var i2 = __webpack_require__(/*! @app/core/services/dashboard.service */ "oJeO");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
function ProtectedPageComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 25);
    i0.ɵɵtext(1, "\u0648\u0627\u06CC\u0633\u0627 ...");
    i0.ɵɵelementEnd();
} }
function ProtectedPageComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵelementStart(2, "button", 27);
    i0.ɵɵlistener("click", function ProtectedPageComponent_div_9_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r5); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.refreshData(); });
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "button", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" \u0646\u0645\u06CC \u062A\u0648\u0646\u0645 ", i0.ɵɵpipeBind1(4, 1, ctx_r1.autoRefreshcounter), " \u062B\u0627\u0646\u06CC\u0647 \u062F\u06CC\u06AF\u0647 \u0627\u0645\u0648\u0646 \u0628\u062F\u0645. \u062F\u0648\u0628\u0627\u0631\u0647 \u0631\u0641\u0631\u0634 \u06A9\u0646. ");
} }
function ProtectedPageComponent_tr_71_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵelementStart(4, "span", 29);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵelementStart(7, "span", 29);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵelementStart(10, "span", 30);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵelementStart(13, "span", 30);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r6 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r6.mobileNumber, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r6.lastActiveDateString, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r6.signUpDateString);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r6.transactionsCount, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r6.donakCount, " ");
} }
function ProtectedPageComponent_tr_89_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵelementStart(4, "span", 29);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵelementStart(7, "span", 30);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r7 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r7.amountTooman, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r7.creationDateString, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r7.gainedDonakCount, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r7.username, " ");
} }
var ProtectedPageComponent = /** @class */ (function () {
    function ProtectedPageComponent(tokenStoreService, dashboardService) {
        this.tokenStoreService = tokenStoreService;
        this.dashboardService = dashboardService;
        this.decodedAccessToken = {};
        this.accessTokenExpirationDate = null;
        this.count = 60;
        this.dashboardModel = {};
        this.isLoading = false;
        this.updatedDateTime = null;
        this.autoRefreshcounter = null;
        this.jsonViewerData = {};
        this.dadJoke = '';
    }
    ProtectedPageComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.decodedAccessToken = this.tokenStoreService.getDecodedAccessToken();
                this.accessTokenExpirationDate = this.tokenStoreService.getAccessTokenExpirationDateUtc();
                this.refreshData();
                setInterval(function () {
                    _this.refreshData();
                }, 1 * 60 * 1000);
                return [2 /*return*/];
            });
        });
    };
    ProtectedPageComponent.prototype.startTimer = function () {
        var _this = this;
        this.count = 60;
        this.autoRefreshcounter = rxjs_1.timer(0, 1000).pipe(operators_1.take(this.count), operators_1.map(function () { return --_this.count; }));
    };
    ProtectedPageComponent.prototype.refreshData = function () {
        var _this = this;
        this.isLoading = true;
        this.dashboardService.loadDashboard().subscribe(function (result) {
            _this.dashboardModel = result;
            _this.isLoading = false;
            _this.updatedDateTime = new Date();
            _this.startTimer();
        });
        // this.queueManagerApiService.dadJoke().subscribe(result => {
        //   this.dadJoke = result.joke;
        // });
    };
    ProtectedPageComponent.ɵfac = function ProtectedPageComponent_Factory(t) { return new (t || ProtectedPageComponent)(i0.ɵɵdirectiveInject(i1.TokenStoreService), i0.ɵɵdirectiveInject(i2.DashboardService)); };
    ProtectedPageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProtectedPageComponent, selectors: [["app-protected-page"]], decls: 90, vars: 11, consts: [[1, "message", "is-info"], [1, "message-header"], [1, "message-body"], [1, "columns"], [1, "column"], ["class", "button is-success is-loading", 4, "ngIf"], [4, "ngIf"], [1, "tile", "is-ancestor"], [1, "tile", "is-parent"], [1, "tile", "is-child", "notification", "is-info"], [1, "title"], [1, "subtitle"], [1, "tile", "is-child", "notification"], [1, "tile", "is-child", "notification", "is-primary"], [1, "tile", "is-child", "notification", "is-warning"], [1, "tile", "is-child", "notification", "is-success"], [1, "tile", "is-child", "box"], [1, "title", "has-text-info"], [1, "subtitle", "has-text-info"], [1, "panel", "is-primary", "column"], [1, "panel-heading"], [1, "panel-block"], [1, "table", "is-fullwidth"], [4, "ngFor", "ngForOf"], [1, "panel", "is-info", "column"], [1, "button", "is-success", "is-loading"], [1, "buttons"], [1, "button", "is-info", 3, "click"], [1, "button", "is-text"], [1, "tag", "is-info", "is-light"], [1, "tag", "is-success", "is-light"]], template: function ProtectedPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "p");
            i0.ɵɵtext(3, "\u0633\u0644\u0627\u0645 \u0628\u0648\u0631\u06A9.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵelementStart(5, "div", 3);
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵtemplate(7, ProtectedPageComponent_a_7_Template, 2, 0, "a", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 4);
            i0.ɵɵtemplate(9, ProtectedPageComponent_div_9_Template, 6, 3, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 3);
            i0.ɵɵelementStart(11, "div", 4);
            i0.ɵɵelementStart(12, "span");
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 7);
            i0.ɵɵelementStart(15, "div", 8);
            i0.ɵɵelementStart(16, "article", 9);
            i0.ɵɵelementStart(17, "p", 10);
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "p", 11);
            i0.ɵɵtext(20, "\u062A\u0639\u062F\u0627\u062F \u06A9\u0627\u0631\u0628\u0631");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 8);
            i0.ɵɵelementStart(22, "article", 12);
            i0.ɵɵelementStart(23, "p", 10);
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "p", 11);
            i0.ɵɵtext(26, "\u062C\u0645\u0639 \u06A9\u0644 \u062F\u0646\u06A9\u0627");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 8);
            i0.ɵɵelementStart(28, "article", 13);
            i0.ɵɵelementStart(29, "p", 10);
            i0.ɵɵtext(30);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "p", 11);
            i0.ɵɵtext(32, "\u06A9\u0627\u0631\u0628\u0631\u0627\u06CC \u0641\u0639\u0627\u0644 \u0627\u0645\u0631\u0648\u0632");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "div", 8);
            i0.ɵɵelementStart(34, "article", 14);
            i0.ɵɵelementStart(35, "p", 10);
            i0.ɵɵtext(36);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "p", 11);
            i0.ɵɵtext(38, "\u062C\u0645\u0639 \u062F\u0646\u06A9\u0627\u06CC \u0627\u0645\u0631\u0648\u0632");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "div", 8);
            i0.ɵɵelementStart(40, "article", 15);
            i0.ɵɵelementStart(41, "p", 10);
            i0.ɵɵtext(42);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "p", 11);
            i0.ɵɵtext(44, "\u062E\u0631\u06CC\u062F \u0645\u0648\u0641\u0642 \u0627\u0645\u0631\u0648\u0632");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "div", 8);
            i0.ɵɵelementStart(46, "article", 16);
            i0.ɵɵelementStart(47, "p", 17);
            i0.ɵɵtext(48);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "p", 18);
            i0.ɵɵtext(50, "\u062A\u0639\u062F\u0627\u062F \u062B\u0628\u062A \u0646\u0627\u0645\u06CC\u0627\u06CC \u0627\u0645\u0631\u0648\u0632");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "div", 3);
            i0.ɵɵelementStart(52, "article", 19);
            i0.ɵɵelementStart(53, "p", 20);
            i0.ɵɵtext(54, "\u06A9\u0627\u0631\u0628\u0631\u0627");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "div", 21);
            i0.ɵɵelementStart(56, "table", 22);
            i0.ɵɵelementStart(57, "thead");
            i0.ɵɵelementStart(58, "tr");
            i0.ɵɵelementStart(59, "th");
            i0.ɵɵtext(60, "\u0646\u0645\u0631\u0647");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "th");
            i0.ɵɵtext(62, "\u0622\u062E\u0631\u06CC\u0646 \u0648\u0631\u0648\u062F");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "th");
            i0.ɵɵtext(64, "\u062F\u062E\u0648\u0644 \u0628\u0647 \u0633\u06CC\u0633\u062A\u0645");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "th");
            i0.ɵɵtext(66, "\u062A\u0639\u062F\u0627\u062F \u062A\u0631\u0627\u06A9\u0646\u0634\u0627");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "th");
            i0.ɵɵtext(68, "\u062C\u0645\u0639 \u062F\u0646\u06A9\u0627");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(69, "tfoot");
            i0.ɵɵelementStart(70, "tbody");
            i0.ɵɵtemplate(71, ProtectedPageComponent_tr_71_Template, 15, 5, "tr", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(72, "article", 24);
            i0.ɵɵelementStart(73, "p", 20);
            i0.ɵɵtext(74, "\u062E\u0631\u06CC\u062F\u0627");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(75, "div", 21);
            i0.ɵɵelementStart(76, "table", 22);
            i0.ɵɵelementStart(77, "thead");
            i0.ɵɵelementStart(78, "tr");
            i0.ɵɵelementStart(79, "th");
            i0.ɵɵtext(80, "\u0642\u06CC\u0645\u062A \u0628\u0647 \u062A\u0648\u0645\u0646");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "th");
            i0.ɵɵtext(82, "\u062A\u0627\u0631\u06CC\u062E");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(83, "th");
            i0.ɵɵtext(84, "\u062A\u0639\u062F\u0627\u062F \u062F\u0646\u06A9");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "th");
            i0.ɵɵtext(86, "\u062A\u0648\u0633\u0637");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(87, "tfoot");
            i0.ɵɵelementStart(88, "tbody");
            i0.ɵɵtemplate(89, ProtectedPageComponent_tr_89_Template, 11, 4, "tr", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.isLoading);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.isLoading);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.dadJoke);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.dashboardModel.totalUsersCount);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.dashboardModel.totalDonakCount, " ");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.dashboardModel.todayActiveUsersCount, " ");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.dashboardModel.todayEarnedDonakCounts, " ");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.dashboardModel.todaySuccessfulTransactionsCount, " ");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.dashboardModel.todayNewUsersCount, " ");
            i0.ɵɵadvance(23);
            i0.ɵɵproperty("ngForOf", ctx.dashboardModel.users);
            i0.ɵɵadvance(18);
            i0.ɵɵproperty("ngForOf", ctx.dashboardModel.transactions);
        } }, directives: [i3.NgIf, i3.NgForOf], pipes: [i3.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm90ZWN0ZWQtcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
    return ProtectedPageComponent;
}());
exports.ProtectedPageComponent = ProtectedPageComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProtectedPageComponent, [{
        type: core_1.Component,
        args: [{
                selector: "app-protected-page",
                templateUrl: "./protected-page.component.html",
                styleUrls: ["./protected-page.component.css"]
            }]
    }], function () { return [{ type: i1.TokenStoreService }, { type: i2.DashboardService }]; }, null); })();


/***/ }),

/***/ "tUjc":
/*!******************************************!*\
  !*** ./src/app/core/models/auth-user.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var page_not_found_component_1 = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
var welcome_component_1 = __webpack_require__(/*! ./welcome/welcome.component */ "J7Q4");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/router */ "tyNb");
var routes = [
    { path: "welcome", component: welcome_component_1.WelcomeComponent },
    { path: "", redirectTo: "welcome", pathMatch: "full" },
    { path: "**", component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[router_1.RouterModule.forRoot(routes)], router_1.RouterModule] });
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, { imports: [i1.RouterModule], exports: [router_1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppRoutingModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [router_1.RouterModule.forRoot(routes)],
                exports: [router_1.RouterModule]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "AytR");
var __NgCli_bootstrap_1 = __webpack_require__(/*! ./app/app.module */ "ZAI4");
var __NgCli_bootstrap_2 = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
__NgCli_bootstrap_2.platformBrowser().bootstrapModule(__NgCli_bootstrap_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map