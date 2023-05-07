import { expect, test } from "bun:test";
import { Parse } from "../src";

test("urlToId", () => {
    expect(Parse.urlToId("https://open.spotify.com/track/7MXVkk9YMctZqd1Srtv4MB"))
        .toBe("7MXVkk9YMctZqd1Srtv4MB");
});

test("uriToId", () => {
    expect(Parse.uriToId("spotify:track:7MXVkk9YMctZqd1Srtv4MB"))
        .toBe("7MXVkk9YMctZqd1Srtv4MB");
});