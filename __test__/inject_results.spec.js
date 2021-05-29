import { injectResults } from '../src/client/js/inject_results';

describe("Results", () => {
    
    test("Inject Results", () => {
        expect(injectResults).toBeDefined();
    });
});