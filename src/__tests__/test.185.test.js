
let grostruc = Buffer.alloc(100 * 1024 * 1024);

beforeAll(() => {
  grostruc.write(Math.random().toString())
});

beforeEach(async () => {
});

afterAll(async () => {
});

it("tests", async () => {
  expect(1).toBe(1)
});
