import { RuneWordsModelFunc } from "./RuneWordsModel";
import { AllRuneWords } from "./data/AllRuneWords";

test("renders learn react link", () => {
  console.time("Test");
  const runes = RuneWordsModelFunc.filterByRunesOp(AllRuneWords, [
    "Eth",
    "Eld",
  ]);
  console.info(runes.length, AllRuneWords.length);
  console.timeEnd("Test");
});
