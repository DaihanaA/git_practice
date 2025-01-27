 import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { ValueService } from './value.service';
import { FakeValueService } from './value-fake.service';

describe('MasterService', () => {
  let service: MasterService;
  let value : ValueService;
  let valueServiceSpy : jasmine.SpyObj<ValueService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ValueService', ['getValue']);
    TestBed.configureTestingModule({
      providers:[MasterService ,{
        provide: ValueService, useValue: spy
      }]
    });
    service = TestBed.inject(MasterService);
    valueServiceSpy =TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;
    // value = new ValueService();
    // service = new MasterService(value);

  });

  it('should be created', ()=>{
    expect(service).toBeTruthy();
  })

  // it('should return "my value" from the real service', () =>  {
  //   expect(service.getValue()).toBe('my value');
  // });

  it('should return "other value" from the fake service', () =>  {
    let fakeValue = new FakeValueService();
    let fakeService = new MasterService(fakeValue as unknown as ValueService);

    expect(fakeService.getValue()).toBe('fake value');
  });

  it('should return "other value" from the fake service', () =>  {

    const valueService = jasmine.createSpyObj('ValueService', ['getValue']);
    valueService.getValue.and.returnValue('fake value');
    let fakeService = new MasterService(valueService);

    expect(fakeService.getValue()).toBe('fake value');
    expect(valueService.getValue).toHaveBeenCalled();
    expect(valueService.getValue).toHaveBeenCalledTimes(1);
  });
});
