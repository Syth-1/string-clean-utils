import { expect, test } from "bun:test";
import { StringCleanUtils } from "../";

test('Replaces diacritics & accents with original', () => {
    const normalized = StringCleanUtils.normalize('𝒉𝒂𝒓𝒍𝒆𝒚𝒔 𝒊𝒏 𝒉𝒂𝒘𝒂𝒊𝒊 - 𝒌𝒂𝒕𝒚 𝒑𝒆𝒓𝒓𝒚');
    const expected = 'harleys in hawaii - katy perry';

    expect(normalized).toBe(expected);
});

test('Replaces diacritics & accents with original 2', () => {
    const normalized = StringCleanUtils.normalize('𝑻𝒉𝒆 ℚ𝕦𝕚𝕔𝕜 Ｂｒｏｗｎ Fox 𝔍𝔲𝔪𝔭𝔢𝔡 ⓞⓥⓔⓡ ʇɥǝ 𝗟𝗮𝘇𝘆 𝙳𝚘𝚐');
    const expected = 'The Quick Brown Fox Jumped over the Lazy Dog';

    expect(normalized).toBe(expected);
});

test('Remove symbols from text', () => {
    const normalized = StringCleanUtils.removeSymbols('The [Quick }Brown Fox %Jumped over ^the Lazy @Dog');
    const expected = 'The Quick Brown Fox Jumped over the Lazy Dog';

    expect(normalized).toBe(expected);
});

test('Remove symbols & whitespaces from text', () => {
    const normalized = StringCleanUtils.removeSymbolsAndWhitespaces('The [Quick }Brown Fox %Jumped over ^the Lazy @Dog');
    const expected = 'TheQuickBrownFoxJumpedovertheLazyDog';

    expect(normalized).toBe(expected);
});

test('Ensure main letters are not changed', () => {
    const lower = 'qwertyuiopasdfghjklzxcvbnm';
    const upper = 'QWERTYUIOPASDFGHJKLZXCVBNM';

    expect(StringCleanUtils.normalize(lower)).toBe(lower);
    expect(StringCleanUtils.normalize(upper)).toBe(upper);
});