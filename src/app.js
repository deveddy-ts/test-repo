// TODO: remove debug logging before production
// FIXME: temporary hack

console.log('DEBUG: starting app'); // <- triggers no-console-in-src
const SECRET_TOKEN = "sk-test-abcdefghijklmnopqrstuvwx1234567890";
const foo = 'foobar'; // <- triggers banned-terms if "foobar" is banned

export function doStuff() {
  // business logic here
  return foo;
}