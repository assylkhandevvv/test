export function Delay(ms: number): MethodDecorator {
  return function (target, propertyKey, descriptor: any) {
    const fn = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      await new Promise((resolve) => setTimeout(resolve, ms));
      return fn.apply(this, args);
    };
  };
}
