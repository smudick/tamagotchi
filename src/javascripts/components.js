import data from './data';

const quadBuilder = () => {
  data.getData().forEach((item) => {
    $(`${item.id}`).html(`
    <div class="${item.title}"> 
        <div class="title">
            <h2>${item.title}</h2> 
        </div>
        <div class="buttons-group">
            <button id=${item.button1}>
                <div class="button-1-${item.title}">${item.button1}</div>
            </button>
            <button id=${item.button2}>
                <div class="button-2-${item.title}">${item.button2}</div>
            </button>
        </div>
        <div class="score">
            <h3>${item.statusIndicator}</h3>
            <div>${item.initialScore}</div>
        </div>
    </div>`);
  });
};

export default { quadBuilder };
