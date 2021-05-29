import { checkURL } from '../src/client/js/get_analysis';

describe("Check URL", () => {
    
    test("Valid URL", () => {
        expect(checkURL).toBeDefined();
    });
});