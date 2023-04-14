const form = document.querySelector('form');
const submitButton = form.querySelector('button');
// inputs
const age = form.querySelector('input[name=age]');
const ifKnow = form.querySelector('input[name=ifKnow]');
const topic = form.querySelector('textarea[name=topic]');
const images = form.querySelector('textarea[name=images]');
const topicWithoutText = form.querySelector('textarea[name=topicWithoutText]');
const aim = form.querySelector('textarea[name=aim]');
const impression = form.querySelector('textarea[name=impression]');
const ifLikeWithoutContext = form.querySelector('input[name=ifLikeWithoutContext]');
const ifLikeWithContext = form.querySelector('input[name=ifLikeWithContext]');
const whatLike = form.querySelector('textarea[name=whatLike]');
const whatDislike = form.querySelector('textarea[name=whatDislike]');
const feelings = form.querySelector('input[name=feelings]');

let message;

function parseIfKnow(value) {
  switch (value) {
    case 3:
      return 'Я активная часть сообщества';
    case 2:
      return 'Хорошо знаю, но не интересно';
    case 1:
      return 'Слышал, но мало знаю';
    case 0:
      return 'Вообще ничего не знаю';
    default:
      return 'Без ответа';
  }
}

function parseIfLike(value) {
  switch (value) {
    case 1:
      return 'Да';
    case 0:
      return 'Частично';
    case -1:
      return 'Нет';
    default:
      return 'Без ответа';
  }
}

function parseForm(event) {
  console.log(event);
  event.preventDefault();
  const result = {
    age: age.value  ?? 'Без ответа',
    ifKnow: parseIfKnow(ifKnow.value),
    topic: topic.value,
    images: images.value,
    topicWithoutText: topicWithoutText.value,
    aim: aim.value,
    impression: impression.value,
    ifLikeWithoutContext: parseIfLike(ifLikeWithoutContext.value),
    ifLikeWithContext: parseIfLike(ifLikeWithContext.value),
    whatLike: whatLike.value,
    whatDislike: whatDislike.value,
    feelings: feelings.value  ?? 'Без ответа',
  }
  console.log(result);
  message = JSON.stringify(result, '', 2);
  console.log(message);
}

submitButton.addEventListener('click', parseForm);

export default message;
