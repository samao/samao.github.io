(function(){
    fetch('/fe/api/law.json').then(res => res.json()).then(({code, data}) => {
        // console.log(data);

        const container = document.querySelector('.law');

        const allInnerHTML = data.map((page, id) => {
            let pageStr = `<h1>第${id + 1}章</h1>`
            page.forEach(p => pageStr += `<p>${p}</p>`)
            return pageStr;
        });

        container.innerHTML = allInnerHTML;
    })
})()