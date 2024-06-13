import { assertEquals } from "std/assert/mod.ts";
import { add } from "./main.ts";

Deno.test("sayHello function", () => {
  assertEquals(5, add(2, 3));
});
