import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  const mockProductService = {
    createSingleProduct: jest.fn().mockImplementation((quantity: number) => {

      const time = Date.now() + ''
      return {
        id: time,
        transactions: [{
          id: time,
          time: time,
          status: 'created',
          quantity
        }]
      }
    }),

    deleteProductById: jest.fn().mockImplementation((id: string) => {

      return {
        id,
        deleted: true
      }
    }),

    getProduct: jest.fn().mockImplementation((id: String) => {
      return {
        id,
        transactions: [
          {
            id,
            time: id,
            status: 'created',
            quantity: 44
          },
          {
            id: id + '5',
            time: Date.now(),
            status: 'sold',
            quantity: 2
          }
        ]
      }
    }),

    getAllProducts: jest.fn().mockImplementation(() => {
      let id = Date.now() + ''
      return [
        {
          id,
          transactions: [
            {
              id,
              time: id,
              status: 'created',
              quantity: 44
            },
            {
              id: id + '5',
              time: Date.now(),
              status: 'sold',
              quantity: 2
            }
          ]
        },
        {
          id,
          transactions: [
            {
              id,
              time: id,
              status: 'created',
              quantity: 44
            },
            {
              id: id + '5',
              time: Date.now(),
              status: 'sold',
              quantity: 2
            }
          ]
        }
      ]
    })
  }

  const mockTransactionRepository = {}
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).overrideProvider(ProductsService).useValue(mockProductService).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a product & it\'s transactions & return those', () => {
    let quantity = 130
    const product = service.createSingleProduct(quantity)
    const expectedOutput = {
      id: expect.any(String),
      transactions: [{
        id: expect.any(String),
        status: 'created',
        time: expect.any(String),
        quantity
      }]
    }

    expect(product).toEqual(expectedOutput)
  })

  it('should delete a specific product & it\'s transactions with provided product `id` & return a `deleteResponse`', async () => {
    let id = Date.now() + ''
    let deleteResponse = service.deleteProductById(id)
    let expectedOutput = {
      id,
      deleted: expect.any(Boolean)
    }

    expect(deleteResponse).toEqual(expectedOutput)
  })

  it('should return a specifig product & it\s transactions by it\'s id', () => {
    let id = Date.now() + ''
    let product = service.getProduct(id)
    let expectedOutput = {
      id,
      transactions: expect.arrayContaining([{ id: expect.any(String), quantity: expect.any(Number), status: expect.any(String), time: expect.any(String) }])
    }

    expect(product).toEqual(expectedOutput)
  })

  it('should return all products & it\'s transactions from `product DB`', () => {
    let products = service.getAllProducts()
    let expectedOutput = expect.arrayContaining([
      {
        id: expect.any(String),
        transactions: expect.arrayContaining([
          {
            id: expect.any(String),
            time: expect.any(String),
            status: expect.any(String),
            quantity: expect.any(Number)
          }
        ])
      }
    ])

    expect(products).toEqual(expectedOutput)
  })
});
