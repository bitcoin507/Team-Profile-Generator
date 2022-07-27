const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
describe('Initializtion',() => {
 it('test the constructor', () => {
    
    const name='Sally'; 
    const id=1;
    const email='test2@gmail.com';
    const role= 'Engineer';
    const github='github.com/Sally';

    const obj = new Engineer(name, id, email, role,github);

    expect(obj.getName()).toEqual(name);
    expect(obj.getId()).toEqual(id);
    expect(obj.getEmail()).toEqual(email);
    expect(obj.getRole()).toEqual(role);
        
    
    
 });
});
});

