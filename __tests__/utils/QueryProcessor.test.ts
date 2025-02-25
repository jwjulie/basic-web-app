import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id ', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "juliewu"
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "julie"
          ));
    })

    test('should return 78', () => {
        const query = "Which of the following numbers is the largest: 25, 78, 22?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "78"
          ));
    })

    test('should return 22', () => {
        const query = "Which of the following numbers is the largest: 22, 2, 18?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "22"
          ));
    })

    test('should return 5', () => {
        const query = "plus 2 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "5"
          ));
    })

    test('should return 10', () => {
        const query = "multiplied 2 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "6"
          ));
    })

    
});