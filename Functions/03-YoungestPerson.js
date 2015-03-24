(function(people){
    var people = [
            { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
            { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
            { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
            { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }];
    var youngest= { firstname : 'name', lastname: 'lastName', age: 100, hasSmartphone: false };
    function findYoungestPerson() {
        for (var i = 0; i < people.length; i++) {
            if(people[i].age<=youngest.age && people[i].hasSmartphone===true){
                youngest=people[i];
            }
        }
        console.log("The youngest person is "+youngest.firstname+' '+youngest.lastname);
    }
    findYoungestPerson(people);
})();
