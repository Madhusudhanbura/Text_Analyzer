
export const calculateTextMetrics = (inputText: string) => {
  if (inputText.trim() === "") {
    return { characterCount: 0, wordCount: 0 };
  }

  const characterCount = inputText.length;
  const wordCount = inputText.trim().split(/\s+/).length;

  return { characterCount, wordCount };
};

export const analyzeTextMetrics = (inputText: string) => {
  const { characterCount, wordCount } = calculateTextMetrics(inputText);

  // Sentences are ended with ., !, or ?
  const sentenceCount = inputText.split(/[.?!]/g).filter(Boolean).length;
  const spaceCount = inputText.split(" ").length - 1;
  const punctuationCount = countPunctuationCharacters(inputText);
  const paragraphCount = countParagraphOccurrences(inputText);

  return {
    sentenceCount,
    characterCount,
    wordCount,
    spaceCount,
    punctuationCount,
    paragraphCount,
  };
};

export function countPunctuationCharacters(inputText: string) {
  // Regular expression to match punctuation characters
  const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

  const matches = inputText.match(punctuationRegex);

  // Check if matches exist, return the count, or 0 if there are no matches
  return matches ? matches.length : 0;
}


export function countParagraphOccurrences(inputText: string) {
  // Split the text into paragraphs based on newline characters
  const paragraphs = inputText.split("\n");

  // Filter out empty paragraphs (resulting from consecutive newline characters)
  const nonEmptyParagraphs = paragraphs.filter(
    (paragraph) => paragraph.trim() !== ""
  );

  // Return the count of non-empty paragraphs
  return nonEmptyParagraphs.length;
}

