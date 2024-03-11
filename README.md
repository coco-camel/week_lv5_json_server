# jwt / json server를 이용한 페이지 구성

JWT / json server를 이용한 페이지 구성

---

## 배포 주소

- [login jwt https .......](https://week-lv5-login-todolist.vercel.app/Todomain)

---

### Axios Api

- [axios apis](https://github.com/coco-camel/week_lv5_login_todolist/tree/main/src/apis)

### hoc 접근 인증

- [HOC Auth 인증 체크](https://github.com/coco-camel/week_lv5_login_todolist/blob/main/src/hoc/auth.js)

### thunk
- [thunk](https://github.com/coco-camel/week_lv5_login_todolist/blob/main/src/redux/modules/todosSlice.js)


### API 명세 

#### json-server 배포 version 0.17.4

|기능|URL|Method|request|resopnse|
|---|---|---|---|---|
|글 추가|/todos|post|{id, title, contents, done}|{id, title, contents, done}|
|리스트 조회|/todos|get||[{id, title, contents, done},{id, title, contents, done},...]|
|글 수정|/todos/id|put|{id, title, contents, done}|{id, title, contents, done}|
|완료 / 취소|/todos/id|put|{...todos, done: !todos.done}|{id, title, contents, done}|
|글 삭제|/todos/id|delete|id|[] 배포 버전의 경우 값이 빈 배열로 옴|
