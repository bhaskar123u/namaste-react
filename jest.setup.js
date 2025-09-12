// jest.setup.js
const originalWarn = console.warn;
const originalError = console.error;

const SUPPRESS = [
    /React Router Future Flag Warning/i,
    /v7_startTransition/i,              // extra guard in case message text changes
];

function filter(orig) {
    return (...args) => {
        const msg = args[0];
        if (typeof msg === "string" && SUPPRESS.some(r => r.test(msg))) {
            return;
        }
        orig(...args);
    };
}

beforeAll(() => {
    console.warn = filter(originalWarn);
    console.error = filter(originalError);
});

afterAll(() => {
    console.warn = originalWarn;
    console.error = originalError;
});
