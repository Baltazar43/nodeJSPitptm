const fs = require('fs');

fs.writeFileSync('hello.txt', 'HI MARK!\n');
fs.appendFile('hello.txt', '������ ���!', function (error) {
    if (error) throw error; // ���� �������� ������

    console.log(
        '������ ����� ���������. ���������� �����:'
    );
    let data = fs.readFileSync('hello.txt', 'utf8');
    console.log(data); // ������� ��������� ������
});
