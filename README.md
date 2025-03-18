![function1](https://github.com/user-attachments/assets/221fd943-b606-47cd-9b67-b18a90fed31f)kb_IT's your Life HTML CSS JS 과제
# ToDoList 커스텀 과제

## 1. 추가하고 싶은 기능 2가지 정의
#### 1)  D-Day 추가 하기
todolist 앞에 d-day가 필요한 일정은 다른 색으로 d-day를 표시   
#### 2) 삭제
- 전체 지우기 버튼을 누르면 지금까지 작성했던 todolist를 모두 삭제
- 체크 지우기 버튼을 누르면 check된 완료된 todolist만 모두 삭제
## 2. 기능 2가지에 대한 플로우 차트
#### 1) D-Day 표시 기능
```plaintext
시작
 ├── 1. 캘린더 버튼 클릭
 ├── 2. 날짜 선택 창 표시
 ├── 3. 사용자가 날짜 선택
 ├── 4. 추가 버튼 클릭 → 3가지 확인
 │    ├── (1) To-Do List에 입력된 텍스트가 있는가?
 │    │    ├── 예 → 다음 단계 진행
 │    │    ├── 아니오 → 대기
 │    │
 │    ├── (2) 날짜 선택 창이 표시되어 있는가?
 │    │    ├── 예 → 다음 단계 진행
 │    │    ├── 아니오 → D-Day 기능 없이 실행
 │    │
 │    ├── (3) 날짜가 선택되었는가?
 │         ├── 예 → 다음 단계 진행
 │         ├── 아니오 → D-Day 기능 없이 실행
 │
 ├── 5. 오늘 날짜와 선택된 날짜의 차이 계산
 ├── 6. 차이에 따라 D-Day 형식 적용
 │    ├── 선택 날짜 > 오늘 → D-숫자 (미래)
 │    ├── 선택 날짜 = 오늘 → D-Day (당일)
 │    ├── 선택 날짜 < 오늘 → D+숫자 (지난 날짜)
 │
 ├── 7. D-Day 텍스트를 빨간색으로 표시하여 To-Do 항목 앞에 추가
 └── 종료
```
![function1](https://github.com/user-attachments/assets/66ab8171-9906-4826-aa99-ae745d5088ca)


#### 2) 삭제 기능
```plaintext
시작
 ├── 1. 삭제 버튼 클릭
 ├── 2. 확인 창 표시 (check된 것 삭제 / 전체 삭제)
 │
 ├────├── 3-1. check된 것 삭제 선택
 │    │    ├── 4. `querySelectorAll`로 모든 리스트 아이템(li) 선택
 │    │    ├── 5. `forEach`로 반복 실행하여 개별 항목 확인
 │    │    ├── 6. `classList.contains('item_done')` 확인
 │    │    ├── 7. `item_done`이 포함된 항목만 삭제
 │    │    ├── 8. 삭제 완료
 │    │    └── 종료
 │    │
 │    ├── 3-2. 전체 삭제 선택
 │         ├── 4. `querySelectorAll`로 모든 리스트 아이템(li) 선택
 │         ├── 5. `forEach`로 모든 리스트 아이템 제거
 │         ├── 6. 삭제 완료
 │         └── 종료
 │
 └── 종료
``` 
![function2](https://github.com/user-attachments/assets/e2e2b91e-9805-4089-97d6-a3b7114f1466)


