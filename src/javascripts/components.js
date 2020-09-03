const quadBuilder = (id, quadObj) => {
  $(`#${id}`).html(`
    <div> 
        <h2>${quadObj.title}</h2> 
        <div class="buttons-group">
            <button id=${quadObj.button1}
                <div>${quadObj.button1}</div>
            </button>
            <button id=${quadObj.button2}>
                <div>${quadObj.button2}</div>
            </button>
        </div>
        <h3>${quadObj.statusIndicator}</h3>
        <div>${quadObj.initialScore}</div>
    </div>`);
};

export default { quadBuilder };
