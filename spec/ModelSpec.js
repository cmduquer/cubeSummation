describe("cubeSummation test", function () {

  const input = '2\n' +
  '4 5\n' +
  'UPDATE 2 2 2 4\n' +
  'QUERY 1 1 1 3 3 3\n' +
  'UPDATE 1 1 1 23\n' +
  'QUERY 2 2 2 4 4 4\n' +
  'QUERY 1 1 1 3 3 3\n' +
  '2 4\n' +
  'UPDATE 2 2 2 1\n' +
  'QUERY 1 1 1 1 1 1\n' +
  'QUERY 1 1 1 2 2 2\n' +
  'QUERY 2 2 2 2 2 2';
  const resultado = '4\n' +
  '4\n' +
  '27\n' +
  '0\n' +
  '1\n' +
  '1';

console.log(cubeSummation(input));
  it("must return 4,4,27,0,1,1", function () {
        expect(cubeSummation(input)).toEqual(resultado);

    });

});


