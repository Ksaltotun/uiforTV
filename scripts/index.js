
(function main() {
    const docs = {
        '2020': {
            'январь': [
                {
                    'name': 'Рынок труда в Республике Беларусь,  занятость населения (материалы для информационно-пропагандистских групп)',
                    'link': '../docs/january/Materialy-IPG-janvar-2020.pdf'
                },
                {
                    'name': 'Профилактика алкоголизма, наркомании и токсикомании в молодежной среде',
                    'link': '../docs/january/OBLASTNYE-MATERIALY-podrostkovyj-alkogolizm-i-narkomanija.pdf'
                },
                {
                    'name': 'Рынок труда в Республике Беларусь, занятость и заработная плата населения',
                    'link': '../docs/january/OBLASTNYE-MATERIALY-rynok-truda.pdf'
                },
            ],
            'февраль': [
                {
                    'name': 'Транспортный комплекс республики Беларусь, перспективы развития  (материалы для информационно-пропагандистских групп)',
                    'link': '../docs/february/RESPUBLIKANSKIE-Materialy-IPG-fevral-2020.pdf'
                },
                {
                    'name': 'Транспортный комплекс республики Беларусь, состояния и перспективы его развития',
                    'link': '../docs/february/RESPUBLIKANSKIE-Materialy-IPG-fevral-2020.pdf'
                }
            ],
            'март': [
                {
                    'name': 'Социально-экономическое состояние регионов и перспективы их развития (для информационно-пропагандистских групп)',
                    'link': '../docs/march/IPG-mart-2020-Gomelskaja-obl..pdf'
                },
                {
                    'name': 'Социально-экономическое развитие Гомельской области и перспективы ее развития',
                    'link': '../docs/march/OBLASTNYE-MATERIALY-Sotsialno-ekonomicheskoe-razvitie-1.pdf'
                },
                {
                    'name': 'Предупреждение совершения преступлений несовершеннолетними  (материалы для информационно-пропагандистских групп)',
                    'link': '../docs/march/OBLASTNYE-MATERIALY-Preduprezhdenie-sovershenija-prestuplenij-v-sfere-vysokix-texnologij.pdf'
                },
                {
                    'name': 'Здоровое сердце - залог долгой и продуктивной жизни. Профилактика сердечно сосудистых заболеваний в Гомельской области',
                    'link': '../docs/march/OBLASTNYE-MATERIALY-zdorovoe-serdtse.pdf'
                }
            ],
            'апрель': [
                {
                    'name': 'О ходе реализации в 2019 году Государственной программы по преодолению последствий катастрофы на Чернобыльской АЭС',
                    'link': '../docs/april/ChAES-ko-dnju-informirovanija (3).pdf'
                },
                {
                    'name': 'Итоги Великой Отечественной войныи вклад белорусского народа в общую Победу',
                    'link': '../docs/april/Respublikanskaja-tema-IPG-aprel-2020-ITOG (1).pdf'
                }
            ],
            'май': [
                {
                    'name': 'Информация об итогах социально-экономического развития Гомельской области',
                    'link': '../docs/may/GOMELSchINA-IPG (2).pdf'
                },
                {
                    'name': 'Предупреждение распространения пожаров и ЧС в ГОмельской области',
                    'link': '../docs/may/Informatsija-profilakticheskaja (1).pdf'
                }
            ],
            'июнь': [
                {
                    'name': 'О безопасности жизни и здоровья детей в период летних каникул',
                    'link': '../docs/june/EDINYJ-DEN-INFORMIROVANIJa-Bezopasnost-zhizni-i-zdorovjja-detej.pdf'
                },
                {
                    'name': 'Республика Беларусь - уверенным шагом по пути независимости',
                    'link': '../docs/june/Июнь 2020 Информация по единому дню информирования.pdf'
                }
            ],
            'июль': [
                {
                    'name': 'О безопасности жизни и здоровья детей в период летних каникул',
                    'link': '../docs/julie/Июль 2020 Информация по Единому Дню Информирования.pdf'
                }
            ]
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

    const normActsData = [
        {
            'name': 'Декрет президента Республики Беларусь №5 "Об усилении требований к руководящим кадрам и сотрудникам организаций"',
            'link': '../normActs/Декрет 5.pdf'
        },
        {
            'name': 'Декрет президента Республики Беларусь №18 "Об дополнительных мерах по государственной защите детей в неблагополучных семьях"',
            'link': '../normActs/Декрет № 18.pdf'
        },
        {
            'name': 'Директива №1 "О мерах по укреплению общественной безопасности и дисциплины"',
            'link': '../normActs/Директива № 1.pdf'
        },
        {
            'name': 'Директива №2 "О мерах о дебюрократизации государственного аппарата и повышении качества обеспечения жизнедеятельности населения"',
            'link': '../normActs/Директива Д 2.pdf'
        },
        {
            'name': 'Директива №3 "О приоритетных направлениях экономической безопасности государства"',
            'link': '../normActs/Директива Д 3.pdf'
        },
        {
            'name': 'Директива №4 "О развитии предпринимательской инициативы и стимулировании деловой активности в Республике Беларусь"',
            'link': '../normActs/Директива Д 4.pdf'
        },
        {
            'name': 'Указ президента Республики Беларусь №254 "О деятельности информационно-пропагандистских групп и об участии руководителей республиканских и местных государственных органов и иных государственных организаций в идеологической работе"',
            'link': '../normActs/Ukaz-Prezidenta-Respubliki-Belarus-254-ot16-iyunya-2003g..pdf'
        },
    ];

    const orders = [
        {
            'name': 'Приказ №284 от 06.04.2020',
            'link': '../orders/Приказ № 284 от 06.04.2020.pdf'
        },
        {
            'name': 'Приказ №513 от 02.11.2018 "О идеологической работе"',
            'link': '../orders/Приказ № 513 от 02.11.2018 О идеологической работе.pdf'
        },
        {
            'name': 'Приказ № 559 от 22.11.2018',
            'link': '../orders/Приказ № 559 от 22.11.2018.pdf'
        },
        {
            'name': 'Приказ №506 от 08.08.2019 ИПГ',
            'link': '../orders/Приказ №506 от 08.08.2019 ИПГ.pdf'
        }

    ];

    let state = 0;
    let stateYear = 0;
    let year = '';
    let month = '';
    // const month = ['январь', 'фефраль', 'март', 'апрель', 'май', 'июнь', 'июль'];
    const pages = [document.querySelector('.boxForInfo'),
    document.querySelector('.boxForNormAct'),
    document.querySelector('.boxForOrder')
    ];
    const yearPage = document.querySelector('.boxforYear');
    const monthPage = document.querySelector('.boxforMonth');
    const boxForDocView = document.querySelector('.boxforDocView');
    const boxForDocList = document.querySelector('.boxForDocList');
    const normAct = document.querySelector('.boxForNormAct');
    const orderBox = document.querySelector('.boxForOrder');

    function showYearPage(year) {
        yearPage.childNodes.forEach = [].forEach;
        yearPage.childNodes.forEach(node => {
            if (node.className === 'yearBlock') {
                node.remove();
            }
        });
        let yearBlock = document.createElement('div');
        yearBlock.className = 'yearBlock';
        for (let i in docs[year]) {
            let yearRow = document.createElement('div');
            yearRow.className = 'monthButton';
            yearRow.innerText = i;
            yearBlock.appendChild(yearRow);
        }
        yearPage.appendChild(yearBlock);
        yearPage.style.display = 'flex';
    }

    function fullingNormAct(dataSet, element) {
        boxForDocList.innerHTML = '';
        dataSet.forEach(act => {
            let docRow = document.createElement('div');
            let imageBox = document.createElement('div');
            let textBox = document.createElement('div');
            imageBox.className = 'imageBoxNorm';
            docRow.className = 'docRowNorm';
            textBox.className = 'textBoxNorm';
            textBox.innerText = act.name;
            docRow.appendChild(imageBox);
            docRow.appendChild(textBox);
            boxForDocList.appendChild(docRow);
        });
        element.appendChild(boxForDocList);
    }

    function fullingOrders(dataSet, element) {
        boxForDocList.innerHTML = '';
        dataSet.forEach(act => {
            let docRow = document.createElement('div');
            let imageBox = document.createElement('div');
            let textBox = document.createElement('div');
            imageBox.className = 'imageBoxOrder';
            docRow.className = 'docRowOrder';
            textBox.className = 'textBoxOrder';
            textBox.innerText = act.name;
            docRow.appendChild(imageBox);
            docRow.appendChild(textBox);
            boxForDocList.appendChild(docRow);
        });
        element.appendChild(boxForDocList);
    }

    function loadDocOrder(docName) {
        boxForDocView.childNodes.forEach = [].forEach;
        boxForDocView.childNodes.forEach(node => {
            if (node.className === 'docViewFrame') {
                node.remove();
            }
        });
        let windowDoc = document.createElement('iframe');
        windowDoc.className = 'docViewFrame';
        let src = '';

        for (let i in orders) {
            console.dir(orders[i]);
            if (orders[i].name === docName) {
                src = orders[i].link;
            }
        }
        windowDoc.src = src;
        windowDoc.embedded = 'true';
        boxForDocView.appendChild(windowDoc);
    }

    function showDocsPage(month) {
        //monthPage.innerHTML = '';
        boxForDocList.innerHTML = '';
        for (let i in docs[year][month]) {

            let docRow = document.createElement('div');
            let imageBox = document.createElement('div');
            let textBox = document.createElement('div');
            imageBox.className = 'imageBoxDoc';
            docRow.className = 'docRow';
            textBox.className = 'textBoxDoc';
            textBox.innerText = docs[year][month][i].name;
            docRow.appendChild(imageBox);
            docRow.appendChild(textBox);
            boxForDocList.appendChild(docRow);
        }
        monthPage.appendChild(boxForDocList);
        monthPage.style.display = 'flex';
    }

    function loadDocInfo(docName) {
        boxForDocView.childNodes.forEach = [].forEach;
        boxForDocView.childNodes.forEach(node => {
            if (node.className === 'docViewFrame') {
                node.remove();
            }
        });
        let windowDoc = document.createElement('iframe');
        windowDoc.className = 'docViewFrame';
        let src = '';

        for (let i in docs[year][month]) {
            console.dir(docs[year][month][i]);
            if (docs[year][month][i].name === docName) {
                src = docs[year][month][i].link;

            }
        }
        windowDoc.src = src;
        windowDoc.embedded = 'true';
        boxForDocView.appendChild(windowDoc);
    }

    function loadDocNorm(docName) {
        boxForDocView.childNodes.forEach = [].forEach;
        boxForDocView.childNodes.forEach(node => {
            if (node.className === 'docViewFrame') {
                node.remove();
            }
        });
        let windowDoc = document.createElement('iframe');
        windowDoc.className = 'docViewFrame';
        let src = '';

        for (let i in normActsData) {
            console.dir(normActsData[i]);
            if (normActsData[i].name === docName) {
                src = normActsData[i].link;
            }
        }
        windowDoc.src = src;
        windowDoc.embedded = 'true';
        boxForDocView.appendChild(windowDoc);
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

            state = 1;
            compareState(state, pages);

        } else if (target.id == 'normact') {
            state = 2;
            compareState(state, pages);
            fullingNormAct(normActsData, normAct);
        } else if (target.id == 'order') {
            state = 3;
            compareState(state, pages);
            fullingOrders(orders, orderBox);
        } else if (target.className === 'backButton' || target.parentNode.className === 'backButton') {
            state = 0;
            compareState(state, pages);
        } else if (target.className === 'yearButton' || target.parentNode.className === 'yearButton') {
            stateYear = 1;
            compareState(0, pages);
            showYearPage(target.innerText);
            year = target.innerText;
        } else if (target.className === 'backButtonYear' || target.parentNode.className === 'backButtonYear') {
            state = 1;
            compareState(state, pages);
            yearPage.style.display = 'none';
        } else if (target.className === 'monthButton' || target.parentNode.className === 'monthButton') {
            yearPage.style.display = 'none';
            month = target.innerText;
            showDocsPage(target.innerText);
        } else if (target.className === 'backButtonMonth' || target.parentNode.className === 'backButtonMonth') {
            stateYear = 1;
            compareState(0, pages);
            showYearPage(year);
            monthPage.style.display = 'none';
        } else if (target.className === 'docRow' || target.parentNode.className === 'docRow') {
            boxForDocView.style.display = 'flex';
            monthPage.style.display = 'none';
            loadDocInfo(target.innerText  || target.parentNode.innerText);
        } else if (target.className === 'backButtonDocView' || target.parentNode.className === 'backButtonDocView') {
            console.log(state)
            if (state === 1) {
                boxForDocView.style.display = 'none';
                monthPage.style.display = 'flex';
            } else if (state === 2) {
                boxForDocView.style.display = 'none';
                normAct.style.display = 'flex';
            }
            else if (state === 3) {
                boxForDocView.style.display = 'none';
                orderBox.style.display = 'flex';
            }
        }
        else if (target.className === 'docRowNorm' || target.parentNode.className === 'docRowNorm') {
            normAct.style.display = 'none';
            boxForDocView.style.display = 'flex';
            loadDocNorm(target.innerText || target.parentNode.innerText);
        }
        else if (target.className === 'docRowOrder' || target.parentNode.className === 'docRowOrder') {
            normAct.style.display = 'none';
            boxForDocView.style.display = 'flex';
            loadDocOrder(target.innerText || target.parentNode.innerText);
        }
    }


    document.addEventListener('click', clickHandler);

})();


