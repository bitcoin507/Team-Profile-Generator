const Manager = require('../lib/Manager');

describe('Manager', () => {
describe('Initializtion',() => {
 it('test the constructor', () => {
    
    const name='Abendigo'; 
    const id= 4;
    const email='test4@gmail.com';
    const role= 'Manager';
    const officeNumber= 1-234-567-8900;

    const obj = new Manager(name, id, email, role,officeNumber);

    expect(obj.getName()).toEqual(name);
    expect(obj.getId()).toEqual(id);
    expect(obj.getEmail()).toEqual(email);
    expect(obj.getRole()).toEqual(role);
    expect(obj.getOfficeNumber()).toEqual(officeNumber);
        
    
    
 });
});
});