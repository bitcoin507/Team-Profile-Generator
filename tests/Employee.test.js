const Employee = require('../lib/Employee');

describe('Employee', () => {
describe('Initializtion',() => {
 it('test the constructor', () => {
    
    const name='Billy'; 
    const id= 11;
    const email='test@gmail.com';
    const role= 'Employee';

    const obj = new Employee(name, id, email, role);

    expect(obj.getName()).toEqual(name);
    expect(obj.getId()).toEqual(id);
    expect(obj.getEmail()).toEqual(email);
    expect(obj.getRole()).toEqual(role);
        
    
    
 });
});
});

