import data from './data';

const quadBuilder = () => {
  data.getData().forEach((item) => {
    $(`${item.id}`).html(`
    <div class="${item.title}"> 
        <div class="title">
            <h2>${item.title}</h2> 
        </div>
        <div class="buttons-group">
            <button type="button" id=${item.button1} class="button-1-${item.title} button1">
                <div>${item.button1Icon}</div>
                <div>${item.button1}</div>
            </button>
            <button type="button"  class="button-2-${item.title} button2" id=${item.button2}>
                <div class="icon">${item.button2Icon}</div>
                <div class="btn-name">${item.button2}</div>
            </button>
        </div>
        <div class="score">
            <h3>${item.statusIndicator}</h3>
            <div class="scoreVal" id="${item.title}-score">${item.score}</div>
        </div>
    </div>`);
  });
};

export default { quadBuilder };
