export function getLanguageFolder(rtl: boolean) {
  return rtl ? "arabic" : "english";
}

export function getPdfName(chapter: number, section: number) {
  return `${chapter + 1}_${section === 0 ? "cover" : section}.pdf`;
}

export function atLeastOneIsSelected(chapters = [[]]) {
  let result = false;
  if (chapters.length > 0 && chapters[0]?.length > 0)
    for (let i = 0; i < chapters.length; i++) {
      for (let j = 0; j < chapters[i].length; j++)
        result = result || chapters[i][j];
    }

  return result;
}
