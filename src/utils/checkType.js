export function checkType(object) {
  var stringConstructor = "test".constructor;
  var arrayConstructor = [].constructor;
  var objectConstructor = {}.constructor;

  if (object === null) {
    //console.log("checked object =" + object);
    return "null";
  }
  if (object === undefined) {
    return "undefined";
  }
  if (object.constructor === stringConstructor) {
    return "String";
  }
  if (object.constructor === arrayConstructor) {
    return "Array";
  }
  if (object.constructor === objectConstructor) {
    return "Object";
  }
  {
    return "don't know";
  }
}
