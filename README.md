# JWT를 사용하는 서버에 API를 보내는 리액트 예제입니다.
1. `login` 시 `access_token`과 `refresh_token`을 발급받음 (쿠키에 자동저장됨)
2. 예시로 `get`을 함 (`token` 인증 없이는 `get` 불가한 API에 요청)
3. `access_token`이 유효하다면 `get` 성공
4. `access_token`이 유효하지 않다면, `refresh_token`을 이용한 새 `access_token`을 발급받는 API를 요청.
   (쿠키는 유효기간 지날 시 자동으로 사라짐)
5. `refresh_token`이 유효하다면, 서버로부터 `access_token`을 발급받음 (쿠키에 자동저장됨)
6. `refresh_token`이 유효하지 않다면, `login` 화면으로 되돌아감.

### 프런트 화이팅 🤩🪄