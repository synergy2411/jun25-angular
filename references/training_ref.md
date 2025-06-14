# Tea Break : 15 minutes (11:30AM)

# What is JavaScript?

- Client as well as server side
- Dynamic
- Embed with HTML
- Scripting language
- Asynchronous / Non-blocking
- Single threaded
- light-weight
- OOPS Support
- Imperative / Declarative / Reactive programming
- First class function support
- Prototypical inheritance
- Event Driven
- Compiled (Abstract Syntax Tree) and interpreted both

- ECMA Community - ECMA Specifications
- caniuse.com
- polyfills : to support the older browser
- modernizr : to detect the features

- MEAN : Mongo, Express, Angular, Node
- MERN : Mongo, Express, React, Node
- JavaScript

# JavaScript DataTypes -

- Primitive (stack) : Number, String, Boolean, Symbol
- Reference (Heap) : Object, Array, Function, Date

Node Runtime Environment - libvu library - C++ Thread pool

# Async Operations

- Callbacks
- Promises
- Timers : 1250
- XHR : 1200
- Sockets
- I/O Files

# Async Operations Execution

- Sync
- Async
  > Promises / queueMicrotask()
  > Other Async Code

# JavaScript Engine

- Creational : memory is allocated
- Executional : assignments / return / logs

# ES6 Features

- Arrow Function
- Rest / Spread
- Destructuring
- Sync / Async Code

- Promises
  > Life Cycle State -> Pending -> Settled : Fulfilled, Rejected
  > then().catch()
  > Async...await
  > Promise API - all, allSettled, any, race, resolve, reject

# TypeScript : JavaScript with type Syntax

# DataTypes :

- all JS datatypes
- any
- unknown
- tuple
- never
- union

# Creating vite project

> npm create vite@latest > vanilla > typeScript
> cd 02-ts-demo
> npm install
> npm run dev

# TypeScript Advantages

- Early errors
- Better Intellisense
- Future JS features support
- Safety
- Readability
- Better with tools

---

# Day 03

- TypeScript
- Angular

# Decorators

- Class : @Component({}), @Directive(), @Pipe(), @Injectable(), @NgModule()
- Method : @HostListener()
- Property : @Input(), @Output(), @HostBinding()
- Parameter : @Inject, @Skip, @Optional

@Component()
class Test{

@Input()
title: string;

@HostListener()
fetch(@Optional param : string){}
}

# Module System - AMD, UMD, ESNext

- NodeJS : CommonJS (module.exports / require())
- Browsers : ESM (ECMA Script Module) import statement / export keyword

# Client side JavaScript Libraries / Framework

- Angular : 2014, State Management, DOM Manipulation, Component Based, Form Validation, XHR Calls, Animation, SPA Apps, Data Binding, Shadow DOM, Signals; heavy in size; enterprise level apps.
- AngularJS : v1.x - 2011
- React : light-weight, speed, flexibility, backed by FB, 2013, quickly render rhe UI, Virtual DOM, State, Props, Diffing Algo; 35kb; Redux, formik, react-router, fetch API, axios
- Preact : based upon React; 5kb
- Vue : component based, combi of React + Angular; Progressive framework; "Evan You", Vuex
- jQuery : DOM Manipulation, Animation, AJAX
- Ember : Framework; 2010; frequent change in API
- Backbone : Client side MVC
- Knockout : MVVM Pattern; 2 way data-binding
- Electron : desktop apps using JS
- Svelte :
- D3 : Charts
- Ionic : Framework; React/Angular/Vue to create Native Apps
- Bootstrap : predefined CSS classes; Responsiveness;
- Tensol Flow : ML
- Express / Koa / Hapi / SailsJS / KrakenJS : Server side Framework
- NextJS : Server / client side ; React - SSR
- NodeJS : Server-side Platform

- WebPack

- Micro-frontends / Monorepos

# Angular CLI Tool - ng

> npm install -g @angular/cli@17
> ng version
> ng new frontend --no-standalone
> cd frontend
> npm start || ng serve

# Angular Essentials -

- Angular Language Service Plugin
- Angular DevTools from Chrome web store

# Angular Building blocks -

- Component
- Directive
- Pipe
- Service
- Module

# Generating Components

> ng generate help
> ng generate component components/users
> ng g c components/users
> ng g c components/users/user-img
> ng g c components/users/user-info

# Install Bootstrap Library

> npm install bootstrap
> angular.json > styles > "./node_modules/bootstrap/dist/css/bootstrap.min.css"
> restart the server after changing angular.json everytime

# Components -

- Resuable
- Template
- Encapsulation / Shadow DOM
- Data Binding - [Property] / (Event) Binding / 2 way data-binding [(ngModel)]
- Nested Comp Communication - @Input() / @Output() + EventEmitter
- Content Projection
- LifeCyle Method:
  > onChanges
  > onInit
  > doCheck
  > afterContentInit
  > afterContentChecked
  > afterViewInit
  > afterViewChecked
  > onDestroy

---

# Directive -

- Attribute Directive : ngClass, ngStyle
- Structural Directive : *ngIf, *ngFor, \*ngSwitch

- Custom Directive

  > ng g d directives/highlight

- @HostBinding() : binds the host element property with class variables
- @HostListener() : binds the host element event with class method

# Pipe : format the UI

- uppercase, lowercase, titlecase
- json
- async
- percent
- number
- currency
- date

# ViewEncapsulation

- Emulated (default) : local CSS will override global CSS rule
- ShadowDOM : only local CSS will take effect. Global CSS will not be applied
- None : local CSS will affect other component's template as well

## Case 01 -

- Comp A (AppComponent)> Emulated (h1 {color : green})
- Comp B (DirectiveExample)> None (h1 {color: blue} )

## Conclusion : Emulated override the None property for same CSS rule

## Case 02-

- Comp A (AppComponent) > ShadowDOM (h1 {color : grey })
- Comp B (DirectiveExample) > None (h1 {color : blue})

- Global CSS > h1 { color : goldenrod}

## Conclusion : None will apply over ShadowDOM

# Custom Pipes

- Pure (default): runs for mutable change only
- Impure : runs for both pure and impure changes

let user = { name : "John" }

user.name = "Jenny"; // Immutable Change / Impure

user = { // Mutable Change / Pure
name : "Mary"
}

let friends = ["Monica", "Joey", "Ross"]
friends.push("Rachel"); // Impure
friends = ["Monica", "Joey", "Ross", "Rachel"] // Pure Change

---

# Forms

- Template Driven

  > "ngForm" Object (NgForm)
  > Validation on template
  > ngModel

  > ng g c components/auth/login [email, password]

- Reactive Form / Model Driven

  > Programmatically creation of Form using FormArray
  > FormControl : individual form element eg. one input element
  > FormGroup : represents complete form
  > FormBuilder: way of quickly creating form group
  > FormArray: dynamically generate/add form elements
  > ng g c components/auth/register [username, password, confirmPassword, hobbies]

- Form / Form Elements - State / Classes
  > ngTouched / ngUntouched
  > ngDirty / ngPristine
  > ngValid / ngInvalid

---

# Service - client-side businees logic

> ng g s services/counter
> DI
> Behaviour
> Injection
> DI Token : supplied with
> Hierarchy : Element Hierarchy / Module Hierarchy
> DI Modifiers
> : @Self() : only look into the self component
> : @SkipSelf() : Donot look up into the self component for Service registration / Skips self component
> : @Host() : look up inside the self component and parent component (in case of projected content) only.
> : @Optional() : avoids NullInjector Error at runtime; mentioning the injected service as Optional
> Consuming Service -> Inject(), Constructor Injection

> XHR Calls (Observables)
> Interceptors

> Self registration {providedIn Property in @Injectable()}(Tree-shaking)
> : heavy used in angular library
> : Service code will not become part of final build, if it is not utilized by the app.

# RxJS : Reactive Extension for JavaScript

> Observables : pipe, subscribe
> Observer : next, error, complete
> Subjects : are both observer as well observable; multi-casting; pipe, subscribe, next, error, complete

> Supported Operators : take, map, filter, of, from, interval etc

- BehaviourSubject : initial value (seed value) for subscription
- ReplaySubject : replays last emitted values for subscription
- AsyncSubject : last emitted value once the subject is completed

- Dependency Provider : providers[]
- Dependency Consumer

# Promises vs Observables

- Promise

  > are asynchronous only
  > one shot (Fullfilled / Rejected)
  > eagerly executed
  > non-cancellable
  > no operator support

- Observables
  > are both async and sync
  > series of events, not one shot
  > lazily executed; until it is subscribed
  > are cancellable/ unsubscribe
  > power operators support

---

- HttpClientModule
- XHR Calls (HttpClient)
- JSON SERVER : Fake REST API server
- Interceptors : intercepting the outgoing request and incoming responses
- Global Error Handler
- Firebase Cloud - JWT Token

# JSON SERVER CONFIG STEPS

- npm install json-server@0.17.4 -g
- json-server --version
- Create json file (db.json file)
- json-server --watch <filename>

# Expenses App

- ExpenseService : GET, POST, PATCH, DELETE
- ExpensesComponent : Display all expenses, Delete Operation / Edit Operation
- ExpenseFormComponent : Add New Expense / Edit

---

# Routing and Navigation - @angular/router

- Navigate
- Child routing / nested routing
- dynamic page content change
- Guards
- Query / Route Params

# Single Page App

- No page reload / refresh
- Less network bandwidth
- Better user experience
- Lazy loading

- Search Engine Optimization (SSR - Angular Universal)
- Heavy initial build
- increased loading time

- Nested Routing

: http://localhost:4200/products ---> loads the products components
: http://localhost:4200/products/overview ---> overview comp on the products component
: http://localhost:4200/products/specification ---> loads spec comp on the products component

- Programmatic Navigation
- Auth Guard
- Lazy Loading

# Routing Terminologies

- RouterOutlet : provides space on UI to load component template
- Routes: Route Configuration
- RouterLink: creates link, does not reload the page
- RouterModule: router functionalities
- Router: programmtic navigation
- ActivatedRoute: access of current URL, route and query parameter access
- Guard : CanActivate

# Firebase App

- npm install firebase

---

# Modules

> ng g m modules/eager
> ng g m modules/lazy

# Lazily load the module

# Standalone component

- with modules based project
- with no modules project
- ng g c components/i-am-standalone --standalone

# Testing

> ng test
> ng test --code-coverage

# Tips/tricks for debugging and app deployment

> ng build | npm run build

# Signals : reactive programming

const [stateVar, stateFn] = useState()
