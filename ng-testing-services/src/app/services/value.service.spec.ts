import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(ValueService);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
//ayuda crear un servicio una sola vez que se aplicara a todas las pruebas
  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [ValueService]
    })
    service = TestBed.inject(ValueService);
  })

  it('should be created', ()=> {
    expect(service).toBeTruthy();
  })

  describe('test para getValue',()=>{
    it('should return "my value" ',()=>{
      expect(service.getValue()).toBe('my value');
    })

  describe('test para setValue',()=>{
      it('should return "my value" ',()=>{
        expect(service.getValue()).toBe('my value');
        service.setValue('change');
        expect(service.getValue()).toBe('change');
      })

  })

  describe('test para getPromiseValue',()=>{
    it('should return "promise value" from promise ',(done: DoneFn)=>{

      service.getPromiseValue().then((value) =>{
        expect(value).toBe('promise value');
        done();
      });

    })

})
  it('should return "promise value" from promise using async' , async() => {
    const rta = await service.getPromiseValue();
    expect(rta).toBe('promise value');
  })

  it('should return "getObservableValue" ' , (done: DoneFn) => {
    service.getObservableValue().subscribe((value)=>{
      expect(value).toBe('observable value');
      done();
    })


});
});
});
