const EventEmitter = require('events');

let eventName = 'greet';

class User extends EventEmitter {
    sayHi(data) {
        this.emit(eventName, data);
    }
}

let user = new User();
// ��������� � ������� user ��������� ������� "greet"
user.on(eventName, function (data) {
    console.log(data);
});

user.sayHi('��� ����� ���� ������...');