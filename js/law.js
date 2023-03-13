(function(){
    fetch('/fe/api/law.json').then(res => res.json()).then(({code, data}) => {
        // console.log(data);

        const container = document.querySelector('.law');

        const allInnerHTML = data.map((page, id) => {
            let pageStr = '<article>'
            page.forEach(p => pageStr += `<p>${p}</p>`)
            pageStr += '</article>'
            return pageStr;
        });

        container.innerHTML = allInnerHTML.join('');
    })
})()