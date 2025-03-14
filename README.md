# admin tool kit for next.js

* 어드민 제작용 테마
* 모듈을 export 하기 위해서 alias (tsconfig.json) 적극 사용하기 -> tsc-alias 가 상대경로로 만들어 주므로 반드시 사용해야 한다.
* ts, tsx 등은 모두 src 디렉토리에 있어야 한다.
* $ROOT/asset 의 경우 컴파일 할 코드(ts, tsx)가 아닌 대상만 저장한다.
* tag 업데이트시 package.json 의 version 과 동기화 되므로 주의 하기. 커밋 전에 수정해야 한다.

# 사용시 주의사항

* root.layout 에서 스타일 추가해 주어야 한다.

~~~javascript
    import "nextjs-admin-toolkit/asset/scsss/index.scss";
~~~

# 해야 할 것

* tsc-alias 에서 ts, tsx 이외의 import 된 파일은 자동으로 변경해주지 않는다. 해결책 찾아보기

# tag 명명법

### major.minor.patch

1. major: 하위호환을 보장 하지 않음
2. minor: 하위호환을 최대한 보장하나 몇몇 기능의 인터페이스가 변경 될 가능성이 있음
3. patch: 인터페이스의 변화 없이 내부적 기능 개선 