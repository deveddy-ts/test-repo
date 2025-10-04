// Intentional use of dynamic eval to trigger ai-secure-eval
export function runUserCode(code) {
  // BAD: dynamic evaluation
  return eval(code); // AI should flag this and recommend sandboxing or restricted parser
}