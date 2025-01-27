import { Calculator } from "./calculator";

describe('Test for calculator', ()=>{
  it('#multiply should return nine', ()=>{
    //arrrange
    const calculator = new Calculator();
    //act
    const rta = calculator.multiply(3,3);
    //assert
    expect(rta).toEqual(9);
  });
  it('#multiply should return four', ()=>{
    //arrrange
    const calculator = new Calculator();
    //act
    const rta = calculator.multiply(1,4);
    //assert
    expect(rta).toEqual(4);
  })
})


describe('Test for calculator', ()=>{
  it('#divide should return two', ()=>{
    //arrrange
    const calculator = new Calculator();
    //act
    expect(calculator.divide(4,2)).toEqual(2);
    //assert

  });
  it('#divide for 0 should return null', ()=>{
    //arrrange
    const calculator = new Calculator();
    //act
    expect(calculator.divide(4,0)).toBeNull();
    expect(calculator.divide(78,0)).toBeNull();
    expect(calculator.divide(1548963217,0)).toBeNull();
    //assert

  })

})


describe('Test  matchers', ()=>{
  it('#testing things', ()=>{
    //arrrange
    const name = 'nicolas';
    let name2;
    //act
    expect(name).toBeDefined();
    expect(name2).toBeUndefined();

    expect(1+3 === 4).toBeTruthy();
    expect(1+1 === 3).toBeFalsy();

    expect(5).toBeLessThan(10);
    expect(10).toBeGreaterThan(5);


    expect('123456').toMatch(/123/);
    expect(['apples','oranges','pears']).toContain('oranges')



  })
})
