const Intern = require('../lib/Intern');

describe('Intern', () => {
describe('Initializtion',() => {
 it('test the constructor', () => {
    const id=3;
    const name='Ishmael'; 
    const email='test3@gmail.com';
    const role= 'Intern';
    const school= 'UCLA';

    const obj = new Intern(name, id, email, role,school);

    expect(obj.getName()).toEqual(name);
    expect(obj.getId()).toEqual(id);
    expect(obj.getEmail()).toEqual(email);
    expect(obj.getRole()).toEqual(role);
    expect(obj.getSchool()).toEqual(school);
        
    
    
 });
});
});