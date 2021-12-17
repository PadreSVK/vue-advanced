
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

export class MyAwesomeClient {

    @catchError
    safeCall() {
        return "awesome"
    }
    @myDecorator()
    @catchError
    exceptionCall() {
        throw new Error("Something went wrong")
    }

}

