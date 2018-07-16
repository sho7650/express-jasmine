const users = require('../controllers/users');
const model = require('../models');
// const proxyquire = require('proxyquire');

describe ('#add', () => {
  it ('1 + 2 = 3', () => {
    expect(users.add(1, 2)).toBe(3);
  })  
})

describe ('#find', () => {
  describe ('コールされたIDのユーザを取得', () => {

    stubUser = {
      findAll(parms) { return parms; }
    };
  
    modelStub = {
      user: {
        findAll(parms) { return parms; }
      }
    };
//    const foo = proxyquire('../controllers/users', {'../models': modelStub});

      //    const models = proxyquire('../controllers/users', {'../models': {user: stubUser}});

//    console.log(models.findAll(100));

    beforeEach(()=> {

    });

//    console.log('test: ' + users.find(500));

//    users.find(100);
  it("Spyオブジェクトを作成する", function () {
  var spyObject = spyOn(model.user, "findAll");

  expect(spyObject).toBe(model.user.findAll);
  expect(model.user.findAll(5, "Sho")).toEqual(undefined);
});


  it ('findAll が呼び出されたかどうか', () => {
      spyOn(model.user, "findAll").and.returnValue('Test');
      expect(users.find(500)).toBe('Test');
  });

  it ('users.find をコールして、実際に model.user.findAllが呼び出されたか', () => {

      //      spyOn(models.user, 'findAll');
    var modelSpy = spyOn(model.user, "findAll");
    users.find(50);
    expect(modelSpy).toHaveBeenCalled();
//      expect(users.find(50)).toBe(50);
    });
  })
});