const Manager = require('../lib/Manager');

describe('Manager', () => {
describe('Initializtion',() => {
 it('test the constructor', () => {
    const id=4;
    const name='Abendigo'; 
    const email='test4@gmail.com';
    const role= 'Manager';
    const officeNumber= '123456789101112';

    const obj = new Manager(name, id, email, role);

    expect(obj.getName()).toEqual(name);
    expect(obj.getId()).toEqual(id);
    expect(obj.getEmail()).toEqual(email);
    expect(obj.getRole()).toEqual(role);
    expect(obj.getOfficeNumber()).toEqual(officeNumber);
        
    
    
 });
});
});