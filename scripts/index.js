
(function main() {
    const docs = {
        '2020': {
            'январь': [
                {
                    'name': 'Итоги Великой Отечественной войны и вклад белорусского народа в общую Победу',
                    'link': '../docs/Respublikanskaja-tema-IPG-aprel-2020-ITOG.pdf'
                }
            ],
            'февраль': [],
            'март': [],
            'апрель': [],
            'май': [],
            'июнь': [],
            'июль': []
        }
        ,
        '2019': {
            'январь': [],
            'февраль': [],
            'март': [],
            'апрель': [],
            'май': [],
            'июнь': [],
            'июль': []
        }
    };

    let state = 0;
    let stateYear = 0;
    let year = '';
    // const month = ['январь', 'фефраль', 'март', 'апрель', 'май', 'июнь', 'июль'];
    const pages = [document.querySelector('.boxForInfo'),
    document.querySelector('.boxForNormAct'),
    document.querySelector('.boxForOrder')
    ];
    const yearPage = document.querySelector('.boxforYear');
    const monthPage = document.querySelector('.boxforMonth');
    
    function showYearPage (year) {
        yearPage.childNodes.forEach = [].forEach;
        yearPage.childNodes.forEach(node=>{
            if(node.className === 'yearBlock') {
                node.remove();
            }
        });
        let yearBlock =  document.createElement('div');
        yearBlock.className = 'yearBlock';
        for (let i in docs[year]){
            let yearRow = document.createElement('div');
            yearRow.className = 'monthButton';
            yearRow.innerText = i;
            yearBlock.appendChild(yearRow);
        }
        yearPage.appendChild(yearBlock);
        yearPage.style.display = 'flex';
    }  
    
    function showDocsPage (month) {
        /*yearPage.childNodes.forEach = [].forEach;
        yearPage.childNodes.forEach(node=>{
            if(node.className === 'yearBlock') {
                node.remove();
            }
        });*/
        let monthBlock =  document.createElement('div');
        monthBlock.className = 'yearBlock';
        for (let i in docs[year][month]){
            console.log(i);
            let docRow = document.createElement('div');
            docRow.className = 'docRow';
            docRow.innerText = docs[year][month][i].name;
            monthBlock.appendChild(docRow);
        }
        console.dir(monthPage);
        monthPage.appendChild(monthBlock);
        monthPage.style.display = 'flex';
    }

    function compareState(state, arr) {
        arr.forEach((page, index) => {
            if (index + 1 !== state) {
                page.style.display = 'none';
            } else {
                page.style.display = 'flex';
            }
        })
    }

    function clickHandler({ target }) {
        if (target.id == 'info') {
            console.dir(pages[0]);
            state = 1;
            compareState(state, pages);

        } else if (target.id == 'normact') {
            state = 2;
            compareState(state, pages);
        } else if (target.id == 'order') {
            state = 3;
            compareState(state, pages);
        } else if (target.className === 'backButton' || target.parentNode.className === 'backButton') {
            state = 0;
            compareState(state, pages);
        } else if (target.className === 'yearButton' || target.parentNode.className === 'yearButton') {
            stateYear = 1;
            compareState(0, pages);
            showYearPage(target.innerText);
            year = target.innerText;
        }  else if (target.className === 'backButtonYear' || target.parentNode.className === 'backButtonYear') {
            state = 1;
            compareState(state, pages);
            yearPage.style.display = 'none';
        } else if (target.className === 'monthButton' || target.parentNode.className === 'monthButton') {
            console.dir(docs[year]);
            showDocsPage(target.innerText);
        }
    }

    function fillDocs() {

    }
    fillDocs();
    document.addEventListener('click', clickHandler);

})();


//.indexOf(target.innerText) !== -1