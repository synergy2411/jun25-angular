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

  > ng g c components/auth/login [email, password]

- Reactive Form / Model Driven
  > FormControl : individual form element eg. one input element
  > FormGroup : represents complete form
  > FormBuilder: way of quickly creating form group
  > FormArray: dynamically generate/add form elements
  > ng g c components/auth/register [username, password, confirmPassword, hobbies]

# Service
