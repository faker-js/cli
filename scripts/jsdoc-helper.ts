import { JSDoc, JSDocTag, SyntaxKind } from 'ts-morph';

/**
 * Returns whether a signature is deprecated.
 */
export function isDeprecated(docs: JSDoc): boolean {
  return docs.getTags().some((tag) => tag.isKind(SyntaxKind.JSDocDeprecatedTag));
}

/**
 * Returns the JSDoc tag matching the `since` directive.
 */
export function getSince(docs: JSDoc): JSDocTag | undefined {
  return docs.getTags().find((tag) => tag.getTagName() === 'since');
}
