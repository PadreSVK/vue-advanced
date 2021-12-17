/* eslint-disable no-unused-vars */

import {  Catch } from "./catchDecorator";
import {  CatchAll } from "./catchDecorator";
import logger from "./logger";

function myDecorator() {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("first(): called");
        console.log({ target });
        console.log({ propertyKey });
        console.log({ descriptor });
    };
}

function catchError(target: any, propertyName: any, descriptor: any) {
    const method = descriptor.value;

    descriptor.value = function (...args: any) {
        try {
            return method.apply(target, args);
        } catch (error) {
            //todo add logic for proper end-user error handlig 
            throw new Error(`Special error message: ${error.message}`);
        }
    };
}

// my own error

class MyError extends Error {
    constructor(msg: string) {
        super(msg);

        // Set the prototype explicitly.
        //https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, MyError.prototype);
    }

    sayHello() {
        return "hello " + this.message;
    }
}

// @CatchAll(error => logger.logError(error.message))
@Catch(MyError, error => logger.logError(error.message))
// or add custom error types and use @Catch
export class MyAwesomeClient {

    // @catchError
    safeCall() {
        return "awesome"
    }
    // @myDecorator()
    // @catchError
    exceptionCall() {
        throw new MyError("Something went wrong")
    }

}

