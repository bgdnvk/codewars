//https://leetcode.com/problems/call-function-with-custom-context/description/?utm_campaign=PostD26&utm_medium=Post&utm_source=Post&gio_link_id=39lbqjpP
declare global { 
    interface Function {
      callPolyfill(context: Record<any, any>, ...args: any[]): any;
	}
}

Function.prototype.callPolyfill = function(context, ...args): any {
    return this.bind(context)(...args)
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */