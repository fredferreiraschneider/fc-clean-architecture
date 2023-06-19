import { CreateProductUseCase } from "./create.product.usecase";

const input ={
    type: "a",
    name: "prodoto 1",
    price: 100    
}

const input_b ={
    type: "b",
    name: "prodoto 1",
    price: 100    
}

const MockRepository = ()=>{
    return {
        find: jest.fn(),
        findAll: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
    }
};

describe("Unit test create product use casa", ()=>{
    
    it("should create a product", async () =>{
        const productRepository = MockRepository();
        const productCreateUseCase = new CreateProductUseCase(productRepository);

        const output = await productCreateUseCase.execute(input);

        expect(output).toEqual({
            id: expect.any(String),
            name: input.name,
            price: input.price,
        })
    })

    it("should create a product-b", async () =>{
        const productRepository = MockRepository();
        const productCreateUseCase = new CreateProductUseCase(productRepository);

        const output = await productCreateUseCase.execute(input_b);

        expect(output).toEqual({
            id: expect.any(String),
            name: input.name,
            price: (input.price*2),
        })
    })
})