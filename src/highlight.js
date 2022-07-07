import { styleTags, tags as t } from "@lezer/highlight";

export const rHighlight = styleTags({
  "function repeat while for if else return break next in": t.controlKeyword,
  "True False": t.bool,
  Null: t.null,
  "FunctionCall/VariableName": t.function(t.variableName),
  "FunctionDeclaration/VariableName": t.function(t.definition(t.variableName)),
  Comment: t.lineComment,
  "Numeric Integer Complex Inf": t.number,
  "Na Null NaN": t.literal,
  String: t.string,
  ArithOp: t.arithmeticOperator,
  BitOp: t.bitwiseOperator,
  CompareOp: t.compareOperator,
  MatrixOp: t.ArithOp,
  AssignmentOperator: t.definitionOperator,
  "...": t.punctuation,
  "( )": t.paren,
  "[ ]": t.squareBracket,
  "{ }": t.brace,
  $: t.derefOperator,
  ", ;": t.separator,
});
