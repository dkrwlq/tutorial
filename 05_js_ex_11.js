/**
 * Created by Administrator on 2017-06-29.
 */

// 주석종류

/**
 *
 *
 * */

/*

 */

// 매개변수를 사용하는 함수 연습

/*

  매개 변수 함수를 사용하는 경우

  1. 전역변소, 지역변수의 적용 범위를 개선하기 위한 사용

  2. 함수의 재사용성을 높이기 위해 사용

 */

// 두 수의 합을 계산하는 코딩

// 1) 매개변수를 사용하지 않는 경우
(function(){

  // 변수 선언
  var a = 10;
  var b = 20;
  var c = 40;
  var d = 50;

  // 함수 선언
  function sum1(){
    console.log( a + b );
  }

  function sum2(){
    console.log( b + c );
  }

  function sum3(){
    console.log( (a + b) + d );
  }

  // 함수 실행
  sum1();
  sum2();
  sum3();

})();

// 2) 매개변수를 사용하는 경우
(function(){

  // 매개변수는 var 을 사용해서 변수 선언을 할 필요가 없음
  // 함수 선언
  function sumArg(arg1, arg2){
    console.log( arg1 + arg2 );
  }

  // 함수 실행
  sumArg( 10, 20 );
  sumArg( 20, 40 );
  sumArg( 30, 50 );

})();


// Ex1)

(function(){

  function sumArg(arg1, arg2, arg3){
    console.log( arg1 + arg2 + arg3 );
  }

  sumArg( '안녕하세요~',' 영희','님!' );
  sumArg( '안녕하세요~',' 철수','님!' );
  sumArg( '안녕하세요~',' 미나','님!' );
  sumArg( '안녕하세요~',' 수영','님!' );
  sumArg( '안녕하세요~',' 진주','님!' );

})();


// Ex2)

(function(){

  function sumArg(arg1, arg2){
    console.log( arg1 + arg2 );
  }

  sumArg( '이름 : ', '한영수' );
  sumArg( '나이 : ', '30' );
  sumArg( '성별 : ', '남' );
  sumArg( '신장 : ', '180cm' );
  sumArg( '지역 : ', '서울' );

  sumArg( '이름 : ', '한채영' );
  sumArg( '나이 : ', '28' );
  sumArg( '성별 : ', '여' );
  sumArg( '신장 : ', '168cm' );
  sumArg( '지역 : ', '서울' );

  sumArg( '이름 : ', '김수민' );
  sumArg( '나이 : ', '32' );
  sumArg( '성별 : ', '여' );
  sumArg( '신장 : ', '158cm' );
  sumArg( '지역 : ', '인천' );
})();

























