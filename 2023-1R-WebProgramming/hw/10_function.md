# 일반적인 함수와 화살표 함수의 차이점

1. 일반적인 함수에서 `this`는 함수가 호출되는 방식에 따라 결정됩니다. 반면에 화살표 함수에서 `this`는 항상 상위 스코프의 `this` 값을 가리킨다.
- 함수가 객체의 메소드로 호출되면 `this`는 해당 객체를 가리키고, 함수가 전역 스코프에서 호출되면 `this`는 전역 객체를 가리킨다. 반면에 화살표 함수에서 `this`는 항상 상위 스코프의 `this` 값을 가리킨다. 이를 렉시컬 `this`라고 한다.

- 예시 코드

  ```javascript

  const obj = {
    value: 0,
    increment: function() {
      // 일반적인 함수에서 this는 호출되는 객체를 가리킴
      this.value++;
      console.log(this.value);
   },
   decrement: () => {
      // 화살표 함수에서 this는 상위 스코프의 this 값을 가리킴
     this.value--;
     console.log(this.value);
   }
  };

  // 전역 객체에 value 속성 설정
  this.value = 5;


  obj.increment(); // 1
  obj.decrement(); // 4

  ```


2. 일반적인 함수는 `new` 키워드를 사용하여 생성자로 호출할 수 있다. 반면에 화살표 함수는 생성자로 사용할 수 없다.
- 예시코드
  ```javascript

  // 일반적인 함수
  function Person(name) {
    this.name = name;
  }

  const person = new Person('John');
  console.log(person.name); // John

  // 화살표 함수
  const Animal = (name) => {
    this.name = name;
  }

  const animal = new Animal('Cat'); // TypeError: Animal is not a constructor


  ```


3. 일반적인 함수에서 `arguments` 객체를 사용하여 전달된 인수에 접근할 수 있다. 반면에 화살표 함수에서는 `arguments` 객체를 사용할 수 없다.
- `arguments` 객체는 유사 배열 객체로, 전달된 인수들이 배열 형태로 저장되어 있다. 따라서 `arguments` 객체를 사용하면 전달된 인수의 개수가 정해지지 않은 가변 인수 함수를 구현할 수 있다.
- 예시코드
  ```javascript

  // 일반적인 함수
  function add() {
    console.log(arguments);
    return Array.from(arguments).reduce((acc, cur) => acc + cur, 0);
  }

  console.log(add(1, 2, 3)); // 6
  // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  // Arguments(3) -> 3개의 인수 전달됨
  // [1, 2, 3 -> 전달된 인수들 
  // arguments.callee 현재 실행 중인 함수 참조
  // callee: f -> arguments.callee 속성의 값이 함수임을 나타냄
  // arguments[Symbol.iterator] -> arguments 객체의 기본 이터레이터를 반환하는 함수를 참조, 이터레이터를 사용하면 argument 객체 반복 가능
  // Symbol(Symbol.iterator): f -> arguments[Symbol.iterator] 속성값이 함수임


  // 화살표 함수
  const multiply = () => {
    console.log(arguments);
    return Array.from(arguments).reduce((acc, cur) => acc * cur, 1);
  }

  console.log(multiply(2, 3, 4)); // ReferenceError: arguments is not defined

  ```

