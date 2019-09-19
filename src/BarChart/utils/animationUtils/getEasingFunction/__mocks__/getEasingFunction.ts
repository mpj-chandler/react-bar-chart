const mockEasingFunction = (name: string) => 10;

export default jest.fn().mockImplementation(() => mockEasingFunction);


