import { TestBed } from "@angular/core/testing";
import { ProductsService } from "./product.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Product } from "../models/product.model";
import { environment } from "src/environments/environment";
import { generateManyProducts } from "../models/product.mock";


fdescribe('ProductService', ()=>{
  let productService: ProductsService;
  let httpcontroller: HttpTestingController;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[
        ProductsService
      ]
    });
    productService = TestBed.inject(ProductsService);
    httpcontroller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verificar que no queden solicitudes pendientes después de cada prueba
    httpcontroller.verify();
  });

  it('should be create', ()=> {
    expect(productService).toBeTruthy();
  });

  describe('tests for getAllSimple', ()=>{
    it('should return a product list', (done: DoneFn)=>{
      //arrange
      const mockData: Product[] = generateManyProducts(3);
     // [
      //   {
      //     id:'123',
      //     title: 'title',
      //     price: 12,
      //     description:'blabla',
      //     category: {
      //       id: 112,
      //       name: 'as'
      //     },
      //     images:['img','img2']
      //   }
      // ];
      //act
      productService.getAllSimple().subscribe((data)=>{
        expect(data.length).toEqual(mockData.length);
        expect(data).toEqual(mockData)
        done();

      })
      //htpp config
      const url = `${environment.API_URL}/api/v1/products`;
      const req = httpcontroller.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(mockData);
      // httpcontroller.verify();
    })
  })
})
