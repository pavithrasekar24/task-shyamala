let handleGenerate = () => {
  let userValue = document['task']['userValue'];
  console.log(userValue);
  let input = checkDuplicateJson();

  let output = document['task']['displayOutput'];
  let final = document.createElement('div');

  input.forEach((item, i) => {
    let div = document.createElement('div');
    div.className = 'root';
    div.setAttribute('data-id', i + 1);

    for (let k of Object.keys(item)) {
      let span = document.createElement('span');
      span.className = k;
      span.innerText = item[k];
      div.append(span);
    }
    final.append(div);
  });
  output.value = final.innerHTML;
};

let checkDuplicateJson = () => {
  let data =
  return JSON.parse(userValue.value);
};
