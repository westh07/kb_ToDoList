const addBtn = document.querySelector('.fa-plus'); //추가 버튼
const input = document.querySelector('.footer_input'); //input 요소
const items = document.querySelector('.items'); //ul 빈 ul
const $dateInput = document.querySelector('.date_input');
const $calenderIcon = document.querySelector('.fa-calendar-days');
const $deleteIcon = document.querySelector('.fa-circle-minus');
const $deleteOption = document.querySelector('.delete_option');
const $deleteAll = document.querySelector('.delete_all');
const $deleteChecked = document.querySelector('.delete_check');
$calenderIcon.addEventListener('click', (e) => {
  $dateInput.classList.toggle('active');
});
$deleteIcon.addEventListener('click', () => {
  $deleteOption.classList.toggle('active');
});
$deleteAll.addEventListener('click', () => {
  $deleteOption.classList.remove('active');
  const allItems = document.querySelectorAll('.item');
  // console.log(allItems);
  allItems.forEach((item) => item.remove());
});
$deleteChecked.addEventListener('click', () => {
  $deleteOption.classList.remove('active');
  const allItems = document.querySelectorAll('.item');
  // console.log(allItems);
  allItems.forEach((item) => {
    if (item.classList[1] == 'item_done') {
      item.remove();
    }
  });
});
function dDay() {
  //.active가 되어 있는지?
  const dateInput = document.querySelector('.date');
  const activeElement = document.querySelector('.date_input.active');
  //입력된 데이트가 있는지?
  let date = dateInput ? dateInput.value : null;
  // // 둘다 있으면 d-day를 return 하기!

  if (date && activeElement) {
    let today = new Date();
    date = new Date(date);
    const diffTime = date - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 0) {
      let text = `D-${diffDays}`;
      return text;
    } else if (diffDays == 0) {
      text = `D-day`;
      return text;
    } else {
      text = `D+${-diffDays}`;
      return text;
    }
  }
  return;
}
function createItem(text) {
  // li를 ``로 작성하면 event 적용이 어려움
  console.log(text);

  const itemRow = document.createElement('li');
  itemRow.className = 'item';
  // 디데이 앞에 넣어주기 dDay()
  let D_day = dDay();
  if (D_day) {
    console.log(D_day);
    itemRow.innerHTML = `<span><span class="text_dDay">${D_day}</span> ${text}</span>
          <i class="fa-solid fa-check"></i>
          <i class="fa-solid fa-trash-can"></i>`;
  } else {
    itemRow.innerHTML = `<span>${text}</span>
    <i class="fa-solid fa-check"></i>
    <i class="fa-solid fa-trash-can"></i>`;
  }
  $deleteOption.classList.remove('active');
  $dateInput.classList.remove('active');
  // 체크버튼 클릭시 클래스 추가 이벤트
  itemRow.querySelector('.fa-check').addEventListener('click', () => {
    itemRow.classList.toggle('item_done'); //class에 item_done을 넣었다 제거했다가 해줌
  });
  // 삭제 버튼 클릭시 itemRow 제거 이벤트
  itemRow
    .querySelector('.fa-trash-can')
    .addEventListener('click', () => itemRow.remove());
  //원하는 대상의 시점으로 focus
  //   setTimeout(() => itemRow.scrollIntoView({ block: 'center' }), 0); //settimeout을 만나면 동기 비동기???? 0초라도 내용 실행??
  requestAnimationFrame(() => itemRow.scrollIntoView({ block: 'center' }));
  return itemRow;
}

function onAdd() {
  const text = input.value.trim();
  if (!text) {
    input.value = '';
    input.focus(); //???이게 뭐야?
    return;
  }
  //li 생성하는 함수 - createItem()
  //ul에 생성값을 추가함
  items.appendChild(createItem(text)); //items 즉 li 안에 넣어줌
  input.value = '';
  input.focus();
}
//이벤트 등록
addBtn.addEventListener('click', onAdd); //버튼이 클릭되었을때
input.addEventListener('keyup', (el) => el.key === 'Enter' && onAdd());
/*input.addEventListener('keypress', (el) => {
  if (el.key === 'Enter') {
    onAdd(); //enter가 눌러졌을때
  }
});*/
