module.exports = function make() {
    let r = Array.from(arguments);
  
    const func = function ret(...args) {
      if (typeof(args[0]) !== "function") {
        r.push(...args);
        return ret;
      } else {
        return r.reduce((prev, current) => args[0](prev, current));
      }
    };
  
    return func; 
  }
  