// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        nav: {
          catalog: "Каталог",
          company: "О компании",
          projects: "Реализованные проекты",
        },
        contact: {
          phone: "Телефон",
          email: "E-mail",
        },
        main: {
          title:
            "ПРОМЫШЛЕННОЕ И ТЕХНОЛОГИЧЕСКОЕ ОБОРУДОВАНИЕ ДЛЯ НЕФТЕГАЗОВОЙ, ХИМИЧЕСКОЙ И ДРУГИХ ОТРАСЛЕЙ, КРУПНОТОННАЖНЫЕ МЕТАЛЛОКОНСТРУКЦИИ",
          point1: "Собственное производство",
          point2: "Контроль качества на всех этапах",
          point3: "Производство под заказ нестандартного оборудования",
          down: "Вниз",
        },
        katalog: {
          title: "Каталог продукции",
          items: {
            item1: "Теплообменники кожухотрубчатые",
            item2: "Трубные пучки и трубчатки",
            item3: "Секции аппаратов воздушного охлаждения",
            item4: "Емкостное оборудование",
            item5: "Сепарационное оборудование",
            item6: "Колонное оборудование",
            item7: "Металлоконструкции",
            item8: "Нестандартное оборудование",
          },
          open: "Открыть",
        },
        appform: {
          left: {
            smallTitle: "Консультация",
            bigTitle: "Получить консультацию",
            desc: "Наши специалисты ответят на ваши вопросы, помогут выбрать оборудование и предоставят подробную информацию о продукции",
            namePlaceholder: "Ваше имя",
            phonePlaceholder: "Ваш номер телефона",
            button: "Отправить заявку",
          },
          right: {
            smallTitle: "Контакты",
            bigTitle: "Контакты для связи",
            addressLabel: "Производственный адрес:",
            address:
              "Республика Узбекистан, Ташкентская область, город Чирчик, улица Кангли, 16A",
            phone: "+998 90 186-30-93",
            telegram: "Telegram",
          },
        },
        footer: {
          company: "OOO TOPMETALPRO",
          catalogTitle: "Каталог продукции",
          catalog: {
            heat: "Теплообменное оборудование",
            tank: "Емкостное оборудование",
            separation: "Сепарационное оборудование",
            column: "Колонное оборудование",
            metal: "Металлоконструкции",
            nonStandard: "Нестандартное оборудование",
          },
          contact: {
            phone: "+998 90 186 30 93",
            telegram: "Telegram",
            email: "E-mail: topmetpro@gmail.com",
          },
          bottom: "2025 “OOO TOPMETALPRO”",
        },
        okompani: {
          back: "Вернуться на главную страницу",
          title: "Информация o компании",
          companyName: "OOO TOPMETALPRO",
          about:
            "Многопрофильное производственное предприятие - основано в 2020 году, как предприятие, специализирующееся на производстве теплообменного, ёмкостного, колонного и нестандартного оборудования",
          points: {
            own: "Собственное производство - Полный комплект оборудования и наличие высококвалифицированных специалистов",
            control:
              "Технический контроль - Полный цикл, диагностика неразрушаемыми методами лабораторного контроля",
            complex:
              "Комплексный подход - Полный спектр услуг - от проектирования и производства до доставки и монтажа",
          },
          partners: {
            subtitle: "Нам доверяют",
            title: "Компании-партнёры",
          },
        },
        testimonials: {
          subtitle: "Отзывы наших клиентов",
          title: "Мы — надёжный партнёр",
          items: [
            {
              name: "ФЕДОТОВ Д.П.",
              title: `Руководитель отдела развития предприятия OAO "Селенгинский ПКК"`,
              text: `Руководство OAO "Селенгинский ПКК" выражает благодарность
OOO "TOPMETALPRO" за профессионализм, пунктуальность и
внимание к потребностям при поставке теплообменного
оборудования. Отмечаем конкурентоспособные цены, отличное
качество продукции и разумную стоимость. Сотрудничество
c OOO "TOPMETALPRO" оцениваем положительно и рекомендуем
компанию как надежного и профессионального
поставщика технологического оборудования`,
            },
            {
              name: "АЛФИСОВ P.Б.",
              title: `Директор ТФ OOO «Амангельдинский ГПЗ»`,
              text: `Наше предприятие выражает удовлетворённость сотрудничеством
c OOO "TOPMETALPRO", в дальнейшем при возникновении
потребности в технологическом оборудовании будем
рассматривать эту организацию как одного из предпочти-
тельных поставщиков, изготавливающих продукцию c
высоким уровнем качества`,
            },
            {
              name: "ЛОСЕВ B.H.",
              title: `Заместитель директора по развитию ЗАО «Чистый Берег»`,
              text: `ЗАО "Чистый берег" выражает признательность ООО "TOPMETAL-
PRO" за своевременную поставку качественного оборудования.
Заказанное оборудование было выполнено в соответствии с
действующими нормативными документами, согласно
техническому заданию и условиям контракта. За время
сотрудничества организация проявила себя как высоко-
профессиональная компания с наличием квалифицированных
кадров`,
            },
          ],
        },
        certificates: {
          subtitle: "Сертификаты",
          title: "Гарантия качества и надежности нашей продукции",
        },
        realproyekti: {
          back: "Вернуться на главную страницу",
          companyInfo: "Информация o компании",
          title: "РЕАЛИЗОВАННЫЕ ПРОЕКТЫ",
        },
        emkostnoy: {
          sectionTitle: "Емкостное оборудование",
          items: [
            {
              title: `Резервуары стальные вертикальные объемом 25 м³ для АО "Узбекнефтегаз"`,
              text: `ООО "O'ZNEFTEGAZ BURG'ULASH ISHLARI", Карши, Республика Узбекистан`,
            },
            {
              title: `Металлоконструкции блока силосов, состоящие из двух силосов 30 тн, комплекта лестниц и площадок обслуживания.`,
              text: `АО "Джизакский аккумуляторный завод", Джизак, Республика Узбекистан`,
            },
          ],
        },
        common: {
          customer: "Заказчик",
          projectDate: "Дата проекта:",
        },
        universal: {
          customer: "Заказчик",
          date: "Дата проекта",
          metallokons: {
            title: "Металлоконструкции",
            items: [
              {
                id: 1,
                date: "10.2020",
                title: `Дымоотводная башня, высота - 50 м, масса - 200 тн, для проекта строительства завода по производству минеральной базальтовой ваты "Knauf Insulation" (предприятие со 100% немецким капиталом) на территории "Технопарка" в г. Ташкент, Республика Узбекистан.`,
                text: `ООО "ТЕХНОПАРК", Ташкент, Республика Узбекистан`,
              },
              {
                id: 2,
                date: "05.2024",
                title: `Антенная опора в виде - 4-х угольной усеченной пирамиды высотой 40м и весом 13,52тн для монтажа технологического оборудования сотовой связи.`,
                text: `ООО "UMS", Ташкент, Республика Узбекистан`,
              },
              {
                id: 3,
                date: "08.2024",
                title: `Трехгранные призматические опоры высотой 30 м из металлических труб для установки Мобильной Базовой станции...`,
                text: `АО "Узбектелеком", Ташкент, Республика Узбекистан`,
              },
              {
                id: 4,
                date: "05.2025",
                title: `Опоры линии электропередач (ЛЭП) - для сооружений линий электропередач и являются одним из главных конструктивных элементов ЛЭП`,
                text: `АО "УзНЭС", Ташкент, Республика Узбекистан`,
              },
            ],
          },
          emkostnoy: {
            title: "Емкостное оборудование",
            items: [
              {
                id: 1,
                date: "04.2024",
                title: `Резервуары стальные вертикальные объемом 25 м³ для АО "Узбекнефтегаз"`,
                text: `ООО "O'ZNEFTEGAZ BURG'ULASH ISHLARI", Карши, Республика Узбекистан`,
              },
              {
                id: 2,
                date: "15.2024",
                title: `Металлоконструкции блока силосов, состоящие из двух силосов 30 тн, комплекта лестниц и площадок обслуживания.`,
                text: `АО "Джизакский аккумуляторный завод", Джизак, Республика Узбекистан`,
              },
            ],
          },
          nestandartnoe: {
            title: "Нестандартное оборудование",
            items: [
              {
                id: 1,
                date: "03.2025",
                title:
                  "Барабан (корпус) котла-утилизатора Г-420 БПЭ - это один из основных элементов котла-утилизатора, основное назначение барабана (корпуса) состоит в разделении пароводяной смеси на пар и воду с раздельным их выводом по трубам к пароперегревателю или в опускные трубы контуров циркуляции.",
                text: 'АО "НАВОИАЗОТ", Навои, Республика Узбекистан',
              },
            ],
          },
          seksIavo: {
            title: "Секции АВО",
            items: [
              {
                id: 1,
                date: "05.2024",
                title:
                  "Секции аппаратов воздушного охлаждения с материальным исполнением основных труб и боковых стенок из нержавеющей стали 12Х18Н0Т, трубные решетки материальным исполнением 09Г2С.",
                text: 'ООО "Бухарский нефтеперерабатывающий завод", Бухара, Республика Узбекистан',
              },
              {
                id: 2,
                date: "07.2024",
                title:
                  'Секция теплообменная АВГ-20-0,6-Б3/8-4-8 У1.ВО с материальным исполнением основных труб и трубных решеток из нержавеющей стали 2Х18Н10Т (AISI 321) для Газлийского нефтегазодобывающего управления АО "Узбекнефтегаз".',
                text: 'ООО "EAG", Ташкент, Республика Узбекистан',
              },
            ],
          },
          separatsionnoe: {
            title: "Сепарационное оборудование",
            items: [
              {
                id: 1,
                date: "05.2024",
                title: "Факельный сепаратор НД для ДКС «Южный Кемачи».",
                text: 'ООО "MANOKIP ZAVODI", Ташкент, Республика Узбекистан',
              },
            ],
          },
          kojuxotruvennoe: {
            title: "Кожухотрубные теплообменники",
            items: [
              {
                id: 1,
                date: "02.2022",
                title:
                  "Кожухотрубные теплообменники с конденсатором поверхностного типа для выпарной ТЭС, модели F = 25,7м²; 75,5м²; 329м²; 636м². Материал исполнения - нержавеющая сталь, 12Х18Н10Т.",
                text: 'ОАО "Селенгинский целлюлозно-картонный комбинат", Республика Бурятия, Россия',
              },
            ],
          },
          trubnie: {
            title: "Трубные пучки",
            items: [
              {
                id: 1,
                date: "04.2024",
                title:
                  "Трубные пучки теплообменника с U-образными трубами, материальным исполнением из нержавеющей стали 12Х18Н10Т",
                text: 'ООО "Бухарский нефтеперерабатывающий завод, Бухара, Республика Узбекистан',
              },
              {
                id: 2,
                date: "06.2024",
                title:
                  'Трубные пучки различного типа с прямыми и U-образными трубами, секции АВГ ХК-602, Х-602 для ООО "Ферганский нефтеперерабатывающий завод".',
                text: 'ООО "SANEG", Ташкент, Республика Узбекистан',
              },
              {
                id: 3,
                date: "12.2024",
                title:
                  "Трубные пучки маслоохладителя МП-65, габаритные размеры пучка с камерами, DxL: Ø720х2857мм, рабочая среда: масло, вода; число теплообменных элементов 468 шт. Материал теплообменных трубок М3 медь, материал трубных досок, водяных камер и боковых щитков Сталь 3, не литая. Масса 2100 кг.",
                text: 'АО "Навоийский горно-металлургический комбинат", Навои, Республика Узбекистан',
              },
              {
                id: 4,
                date: "03.2025",
                title:
                  "Корпус холодильника (охладителя) - это один из основных элементов запасных частей холодильника, осуществляющий охлаждение проходящего воздуха или другой рабочей среды, а также предназначен для поддержания требуемой температуры во время режима работы. Материал исполнения - нержавеющая сталь 12Х18Н10Т.",
                text: 'АО "НАВОИАЗОТ", Навои, Республика Узбекистан',
              },
              {
                id: 5,
                date: "03.2025",
                title:
                  "Трубчатка испарителя - составной элемент испарителя, который предназначен для передачи теплоты к поверхности нагрева. Материал исполнения - нержавеющая сталь 12Х18Н10Т.",
                text: 'АО "НАВОИАЗОТ", Навои, Республика Узбекистан',
              },
              {
                id: 6,
                date: "04.2025",
                title:
                  "Трубный пучок для теплообменных аппаратов, материальное исполнение сталь 3, количество труб - 3000 шт.",
                text: 'ООО "Шуртанский ГХК", Кашкадарьинская обл., Республика Узбекистан',
              },
            ],
          },
        },
        info: {
          sidebar: {
            telloobmenniki: "Теплообменники кожухотрубчатые",
            trubnie: "Трубные пучки и трубчатки",
            seksiaparat: "Секции аппаратов воздушного охлаждения",
            emkostnoe: "Емкостное оборудование",
            separatori: "Сепарационное оборудование",
            metallokons: "Металлоконструкции",
            nestandartnoe: "Нестандартное оборудование",
            kolonniy: "Колонное оборудование",
          },
          back: "Вернуться на главную страницу",
          telloobmenniki: {
            title: "Теплообменники кожухотрубчатые",
            alt1: "Теплообменник 1",
            alt2: "Теплообменник 2",
            description:
              "Кожухотрубчатые теплообменники предназначены для нагрева, охлаждения, конденсации жидких и газообразных сред в технологических процессах нефтегазовой, химической, нефтехимической и других отраслях промышленности.",
            types: {
              title: "Типы конструкций",
              items: [
                "С неподвижными трубными решетками",
                "С плавающей головкой",
                "С температурным компенсатором на кожухе",
                "С U-образными трубами",
              ],
            },
            tech: {
              title: "Технические характеристики",
              items: [
                { label: "Диаметр кожуха", value: "400-3200 мм" },
                { label: "Рабочее давление", value: "до 63 МПа" },
                { label: "Рабочая температура", value: "до 600°С" },
                {
                  label: "Материалы исполнения",
                  value:
                    "углеродистая, низколегированная, нержавеющая сталь, титан",
                },
              ],
            },
          },
          trubnie: {
            title:
              "Трубные пучки и трубчатки для кожухотрубчатых теплообменников",
            alt1: "Трубный пучок 1",
            alt2: "Трубный пучок 2",
            description:
              "Основной компонент кожухотрубчатых теплообменников, обеспечивающий максимальный эффект теплопередачи.",
            features: {
              title: "Особенности",
              items: [
                "Оптимизированная геометрия для максимальной теплопередачи",
                "Различные схемы компоновки труб",
                "Антивибрационные перегородки в кожухе",
                "Возможность ремонта и замены отдельных труб",
              ],
            },
            tech: {
              title: "Технические характеристики",
              items: [
                { label: "Диаметр труб", value: "16-60 мм" },
                { label: "Длина труб", value: "до 12 метров" },
                { label: "Количество труб", value: "до 3000 шт в пучке" },
                { label: "Типы труб", value: "Прямые и U-образные" },
                {
                  label: "Материалы труб",
                  value:
                    "углеродистая, низколегированная, нержавеющая сталь, титан, медно-никелевые сплавы",
                },
              ],
            },
          },
          seksiaparat: {
            title: "Секции аппаратов воздушного охлаждения",
            alt1: "Аппарат воздушного охлаждения 1",
            alt2: "Аппарат воздушного охлаждения 2",
            description:
              "Секции к аппаратам воздушного охлаждения — конденсаторы и холодильники горизонтального или зигзагообразного типа, предназначенные для охлаждения технологических жидкостей и газов, конденсации паровых и парожидкостных сред с использованием атмосферного воздуха. Используются в технологических процессах нефтегазовой, химической, нефтехимической и других отраслях промышленности.",
            types: {
              title: "Типы конструкций",
              items: [
                "АВГ — горизонтальные аппараты воздушного охлаждения",
                "АВЗ — зигзагообразные аппараты воздушного охлаждения",
                "АВМ — малопоточные аппараты воздушного охлаждения",
              ],
            },
            tech: {
              title: "Технические характеристики",
              items: [
                { label: "Тепловая мощность", value: "50-5000 кВт" },
                { label: "Рабочая температура", value: "от -60°С до +400°С" },
                {
                  label: "Коэффицент оребрения труб",
                  value: "9; 14,6; 18,4; 20",
                },
                {
                  label: "Материал основных труб",
                  value:
                    "углеродистая, низколегированная, нержавеющая сталь, латунь",
                },
                {
                  label: "Материал оребрения",
                  value: "алюминий АД1",
                },
              ],
            },
          },
          yomkostnoe: {
            title: "Емкостное оборудование",
            alt1: "Емкостное оборудование 1",
            alt2: "Емкостное оборудование 2",
            description:
              "Емкостное оборудование предназначено для временного хранения жидкостей и газов, а также выполняет различную роль при проведении технологических процессов в нефтепереработке, нефтехимии, электро- и теплоэнергетике, нефтегазовых промыслах, других химических производствах.",
            types: {
              title: "Типы конструкций",
              items: [
                "Емкости для хранения воды, водных растворов реагентов, нефтепродуктов, газов. Прочие емкости специального назначения",
              ],
            },
            tech: {
              title: "Технические характеристики",
              items: [
                { label: "Номинальный объем", value: "до 250 м³" },
                { label: "Рабочее давление", value: "до 63 МПа" },
                { label: "Рабочая температура", value: "до 400°С" },
                {
                  label: "Исполнение аппарата",
                  value: "горизонтальное или вертикальное",
                },
              ],
            },
            features: {
              title: "Особенности",
              items: [
                "Изготовление по техническим требованиям Заказчика",
                "Широкий диапазон рабочего давления",
                "Различные варианты материального исполнения в зависимости от технических требований",
              ],
            },
          },
          separatori: {
            title: "Сепарационное оборудование",
            alt1: "Сепаратор 1",
            alt2: "Сепаратор 2",
            description:
              "Сепарационное оборудование используется для разделения газожидкостных потоков, отделение углеводородного конденсата, очистка природного газа от жидких примесей",
            types: {
              title: "Типы конструкций",
              items: [
                "Горизонтальные двухфазные",
                "Трехфазные (газ-нефть-вода)",
                "Вертикальные двухфазные",
                "Циклонные",
              ],
            },
            tech: {
              title: "Технические характеристики",
              items: [
                {
                  label: "Производительность по газу",
                  value: "до 50 млн м³/сут",
                },
                { label: "Рабочая температура", value: "от -60°С до +200°С" },
                { label: "Рабочее давление", value: "до 63 МПа" },
                {
                  label: "Материалы исполнения",
                  value:
                    "углеродистая, низколегированная, нержавеющая сталь, титан",
                },
              ],
            },
          },
          metallokons: {
            title: "Металлоконструкции",
            alt1: "Металлоконструкция 1",
            alt2: "Металлоконструкция 2",
            description:
              "Изготовление крупнотоннажных металлоконструкций различного назначения для телекоммуникационной, энергетической, горнодобывающей и других отраслей промышленности.",
            production: {
              title: "Производственные возможности",
              items: [
                { label: "Обработка металла", value: "до 100 мм" },
                { label: "Масса единичных конструкций", value: "до 50 тн" },
              ],
              extra: [
                "Сварные соединения всех типов",
                "Механическая обработка высокой точности",
              ],
            },
            tech: {
              title: "Технологические процессы",
              items: [
                "Лазерная резка металла (точность ±0,1 мм)",
                "Плазменная резка (толщина до 100 мм)",
                "Гибка на современном оборудовании",
                "Сварка в среде защитных газов",
                "Механическая обработка на станках с ЧПУ",
              ],
            },
          },
          nestandartnoe: {
            title: "Нестандартное оборудование",
            alt1: "Нестандартное оборудование 1",
            alt2: "Нестандартное оборудование 2",
            description:
              "Изготовление нестандартного оборудования по отдельным техническим заданиям, чертежам Заказчика.",
          },
          kolonniy: {
            title: "Колонное оборудование",
            alt1: "Колонное оборудование 1",
            alt2: "Колонное оборудование 2",
            description:
              "Колонное оборудование используется при проведении технологических процессов в нефтегазопереработке, нефтехимии, других химических производств.",
            types: {
              title: "Типы конструкций",
              items: [
                "Абсорбционная колонна (Абсорбер)",
                "Колонна регенерации (Десорбер)",
                "Колонна ректификационная",
                "Адсорбер",
              ],
            },
            tech: {
              title: "Технические характеристики",
              items: [
                { label: "Диаметр", value: "до 3600 мм" },
                { label: "Высота (длина)", value: "до 25 метров" },
                { label: "Рабочее давление", value: "до 8 МПа" },
                {
                  label: "Материалы исполнения",
                  value:
                    "углеродистая, низколегированная, нержавеющая сталь, титан",
                },
              ],
            },
          },
        },
      },
    },
    en: {
      translation: {
        nav: {
          catalog: "Catalog",
          company: "About Company",
          projects: "Completed Projects",
        },
        contact: {
          phone: "Phone",
          email: "E-mail",
        },
        main: {
          title:
            "INDUSTRIAL AND TECHNOLOGICAL EQUIPMENT FOR OIL AND GAS, CHEMICAL AND OTHER INDUSTRIES, LARGE-SCALE METAL STRUCTURES",
          point1: "Own production",
          point2: "Quality control at all stages",
          point3: "Custom production of non-standard equipment",
          down: "Down",
        },
        katalog: {
          title: "Product Catalog",
          items: {
            item1: "Heat exchangers",
            item2: "Tube bundles",
            item3: "Air cooling aparatus section",
            item4: "Storage equipment",
            item5: "Separation equipment",
            item6: "Column equipment",
            item7: "Metal structures",
            item8: "Non-standard equipment",
          },
          open: "Open",
        },
        appform: {
          left: {
            smallTitle: "Consultation",
            bigTitle: "Get a consultation",
            desc: "Our specialists will answer your questions, help you choose equipment, and provide detailed product information",
            namePlaceholder: "Your name",
            phonePlaceholder: "Your phone number",
            button: "Send request",
          },
          right: {
            smallTitle: "Contacts",
            bigTitle: "Contact information",
            addressLabel: "Production address:",
            address:
              "Republic of Uzbekistan, Tashkent region, Chirchik city, Kangli street, 16A",
            phone: "+998 90 186-30-93",
            telegram: "Telegram",
          },
        },
        footer: {
          company: "LLC TOPMETALPRO",
          catalogTitle: "Product catalog",
          catalog: {
            heat: "Heat exchange equipment",
            tank: "Tank equipment",
            separation: "Separation equipment",
            column: "Column equipment",
            metal: "Metal structures",
            nonStandard: "Non-standard equipment",
          },
          contact: {
            phone: "+998 90 186 30 93",
            telegram: "Telegram",
            email: "E-mail: topmetpro@gmail.com",
          },
          bottom: "2025 “LLC TOPMETALPRO”",
        },
        okompani: {
          back: "Back to homepage",
          title: "Company information",
          companyName: "LLC TOPMETALPRO",
          about:
            "A multi-profile manufacturing company founded in 2020 specializing in the production of heat exchange, tank, column, and non-standard equipment.",
          points: {
            own: "Own production - Full set of equipment and highly qualified specialists",
            control:
              "Technical control - Full cycle, diagnostics using non-destructive laboratory methods",
            complex:
              "Comprehensive approach - Full range of services from design and production to delivery and installation",
          },
          partners: {
            subtitle: "Trusted by",
            title: "Partner companies",
          },
        },
        testimonials: {
          subtitle: "Our clients' feedback",
          title: "We are a reliable partner",
          items: [
            {
              name: "FEDOTOV D.P.",
              title: `Head of Development Department OAO "Selenginsky PKK"`,
              text: `The management of OAO "Selenginsky PKK" expresses gratitude to
LLC "TOPMETALPRO" for professionalism, punctuality and
attention to needs when supplying heat exchange equipment.
We note competitive prices, excellent product quality and reasonable cost.
We evaluate cooperation with LLC "TOPMETALPRO" positively
and recommend the company as a reliable and professional supplier
of technological equipment.`,
            },
            {
              name: "ALFISOV R.B.",
              title: `Director of TF LLC "Amangeldinsky GPZ"`,
              text: `Our company is satisfied with the cooperation
with LLC "TOPMETALPRO". In the future, if the need
for technological equipment arises, we will consider
this organization as one of the preferred suppliers producing
products of high quality.`,
            },
            {
              name: "LOSEV V.N.",
              title: `Deputy Director for Development of CJSC "Chisty Bereg"`,
              text: `CJSC "Chisty Bereg" expresses gratitude to LLC "TOPMETALPRO"
for the timely supply of high-quality equipment.
The ordered equipment was manufactured in accordance with
current regulatory documents, the technical assignment,
and contract conditions. During the cooperation, the organization
has proven itself as a highly professional company
with qualified personnel.`,
            },
          ],
        },
        certificates: {
          subtitle: "Certificates",
          title: "Guarantee of quality and reliability of our products",
        },
        realproyekti: {
          back: "Back to main page",
          companyInfo: "Company information",
          title: "COMPLETED PROJECTS",
        },
        common: {
          customer: "Customer",
          projectDate: "Project Date:",
        },
        universal: {
          customer: "Customer",
          date: "Project date",
          metallokons: {
            title: "Metal structures",
            items: [
              {
                id: 1,
                date: "02.10.2020",
                title: `Smoke exhaust tower, height - 50 m, weight - 200 tons, for the project of a mineral basalt wool factory "Knauf Insulation" (100% German capital) in the "Technopark" area in Tashkent, Uzbekistan.`,
                text: `LLC "TECHNOPARK", Tashkent, Uzbekistan`,
              },
              {
                id: 2,
                date: "31.05.2024",
                title: `Antenna mast in the form of a truncated quadrangular pyramid, 40 m high and weighing 13.52 tons for mobile communication equipment installation.`,
                text: `LLC "UMS", Tashkent, Uzbekistan`,
              },
              {
                id: 3,
                date: "28.08.2024",
                title: `Triangular prismatic supports, 30 m high, made of steel pipes for installation of a Mobile Base Station, complete with lightning rods, fasteners and accessories.`,
                text: `JSC "Uzbektelecom", Tashkent, Uzbekistan`,
              },
              {
                id: 4,
                date: "13.05.2025",
                title: `Power line poles (transmission towers) – structural elements of power transmission lines.`,
                text: `JSC "UzNES", Tashkent, Uzbekistan`,
              },
            ],
          },
          emkostnoy: {
            title: "Tank equipment",
            items: [
              {
                id: 1,
                date: "09.04.2024",
                title: `Steel vertical tanks with a capacity of 25 m³ for JSC "Uzbekneftegaz"`,
                text: `LLC "O'ZNEFTEGAZ BURG'ULASH ISHLARI", Karshi, Uzbekistan`,
              },
              {
                id: 2,
                date: "07.15.2024",
                title: `Metal structures of a silo block consisting of two silos of 30 tons, staircases, and service platforms.`,
                text: `JSC "Jizzakh Battery Plant", Jizzakh, Uzbekistan`,
              },
            ],
          },
          nestandartnoe: {
            title: "Non-standard equipment",
            items: [
              {
                id: 1,
                date: "05.03.2025",
                title:
                  "The drum (casing) of the G-420 BPE waste-heat boiler is one of the main elements of the waste-heat boiler. The main function of the drum (casing) is to separate the steam-water mixture into steam and water, with their separate discharge through pipes to the superheater or to the downcomer tubes of the circulation circuits.",
                text: 'JSC "NAVOIAZOT", Navoi, Uzbekistan',
              },
            ],
          },
          seksIavo: {
            title: "AVO sections",
            items: [
              {
                id: 1,
                date: "03.05.2024",
                title:
                  "Sections of air cooling units with material execution of main pipes and side walls made of stainless steel 12Х18Н0Т, tube sheets made of 09G2S steel.",
                text: 'LLC "Bukhara Oil Refinery", Bukhara, Uzbekistan',
              },
              {
                id: 2,
                date: "19.07.2024",
                title:
                  'Heat exchange section AVG-20-0.6-B3/8-4-8 U1.VO with main pipes and tube sheets made of stainless steel 2Х18Н10Т (AISI 321) for Gazli Oil and Gas Production Department of JSC "Uzbekneftegaz".',
                text: 'LLC "EAG", Tashkent, Uzbekistan',
              },
            ],
          },
          separatsionnoe: {
            title: "Separation equipment",
            items: [
              {
                id: 1,
                date: "20.05.2024",
                title:
                  'Flare separator ND for the "Yuzhny Kemachi" compressor station.',
                text: 'LLC "MANOKIP ZAVODI", Tashkent, Uzbekistan',
              },
            ],
          },
          kojuxotruvennoe: {
            title: "Shell-and-tube heat exchangers",
            items: [
              {
                id: 1,
                date: "01.02.2022",
                title:
                  "Shell-and-tube heat exchangers with a surface-type condenser for an evaporative thermal power plant, models F = 25.7m²; 75.5m²; 329m²; 636m². Material – stainless steel, 12X18H10T.",
                text: 'OJSC "Selenginsky Pulp and Cardboard Mill", Republic of Buryatia, Russia',
              },
            ],
          },
          trubnie: {
            title: "Tube bundles",
            items: [
              {
                id: 1,
                date: "09.04.2024",
                title:
                  "Heat exchanger tube bundles with U-shaped tubes, made of stainless steel 12X18H10T",
                text: 'LLC "Bukhara Oil Refinery", Bukhara, Uzbekistan',
              },
              {
                id: 2,
                date: "07.06.2024",
                title:
                  'Various types of tube bundles with straight and U-shaped tubes, AVG HK-602, X-602 sections for LLC "Fergana Oil Refinery".',
                text: 'LLC "SANEG", Tashkent, Uzbekistan',
              },
              {
                id: 3,
                date: "14.12.2024",
                title:
                  "Oil cooler tube bundles MP-65, bundle overall dimensions with chambers, DxL: Ø720x2857mm, working medium: oil, water; number of heat exchange elements: 468 pcs. Heat exchange tubes material: M3 copper, tube plates, water chambers and side shields material: Steel 3, non-cast. Weight: 2100 kg.",
                text: 'JSC "Navoi Mining and Metallurgical Combinat", Navoi, Uzbekistan',
              },
              {
                id: 4,
                date: "05.03.2025",
                title:
                  "Cooler body - one of the main spare parts of the cooler, providing cooling of the passing air or other working medium, and maintaining the required temperature during operation. Material – stainless steel 12X18H10T.",
                text: 'JSC "Navoiazot", Navoi, Uzbekistan',
              },
              {
                id: 5,
                date: "05.03.2025",
                title:
                  "Evaporator tube bundle - a component of the evaporator designed to transfer heat to the heating surface. Material – stainless steel 12X18H10T.",
                text: 'JSC "Navoiazot", Navoi, Uzbekistan',
              },
              {
                id: 6,
                date: "18.04.2025",
                title:
                  "Tube bundle for heat exchangers, material – Steel 3, number of tubes – 3000 pcs.",
                text: 'LLC "Shurtan Gas Chemical Complex", Kashkadarya region, Uzbekistan',
              },
            ],
          },
        },
        info: {
          sidebar: {
            telloobmenniki: "Shell-and-tube heat exchangers",
            trubnie: "Tube bundles and tube sheets",
            seksiaparat: "Air cooler sections",
            emkostnoe: "Tank equipment",
            separatori: "Separation equipment",
            metallokons: "Metal structures",
            nestandartnoe: "Non-standard equipment",
            kolonniy: "Column equipment",
          },
          back: "Back to the main page",
          telloobmenniki: {
            title: "Shell-and-tube heat exchangers",
            alt1: "Heat exchanger 1",
            alt2: "Heat exchanger 2",
            description:
              "Shell-and-tube heat exchangers are designed for heating, cooling, and condensing liquid and gaseous media in technological processes of the oil and gas, chemical, petrochemical, and other industries.",
            types: {
              title: "Types of designs",
              items: [
                "With fixed tube sheets",
                "With floating head",
                "With shell-side expansion joint",
                "With U-tubes",
              ],
            },
            tech: {
              title: "Technical specifications",
              items: [
                { label: "Shell diameter", value: "400-3200 mm" },
                { label: "Working pressure", value: "up to 63 MPa" },
                { label: "Working temperature", value: "up to 600°C" },
                {
                  label: "Materials",
                  value:
                    "carbon steel, low-alloy steel, stainless steel, titanium",
                },
              ],
            },
          },
          trubnie: {
            title:
              "Tube bundles and tube sheets for shell-and-tube heat exchangers",
            alt1: "Tube bundle 1",
            alt2: "Tube bundle 2",
            description:
              "The main component of shell-and-tube heat exchangers, ensuring maximum heat transfer efficiency.",
            features: {
              title: "Features",
              items: [
                "Optimized geometry for maximum heat transfer",
                "Various tube arrangement schemes",
                "Anti-vibration baffles in the shell",
                "Possibility of repairing and replacing individual tubes",
              ],
            },
            tech: {
              title: "Technical specifications",
              items: [
                { label: "Tube diameter", value: "16-60 mm" },
                { label: "Tube length", value: "up to 12 meters" },
                { label: "Number of tubes", value: "up to 3000 per bundle" },
                { label: "Tube types", value: "Straight and U-shaped" },
                {
                  label: "Tube materials",
                  value:
                    "carbon steel, low-alloy steel, stainless steel, titanium, copper-nickel alloys",
                },
              ],
            },
          },
          seksiaparat: {
            title: "Air cooler sections",
            alt1: "Air cooler unit 1",
            alt2: "Air cooler unit 2",
            description:
              "Air cooler sections — condensers and coolers of horizontal or zigzag type, designed for cooling process liquids and gases, condensation of vapor and vapor-liquid media using atmospheric air. They are used in technological processes of the oil and gas, chemical, petrochemical, and other industries.",
            types: {
              title: "Types of designs",
              items: [
                "AVG — horizontal air cooling units",
                "AVZ — zigzag air cooling units",
                "AVM — low-flow air cooling units",
              ],
            },
            tech: {
              title: "Technical specifications",
              items: [
                { label: "Thermal capacity", value: "50-5000 kW" },
                {
                  label: "Operating temperature",
                  value: "from -60°C to +400°C",
                },
                { label: "Tube finning ratio", value: "9; 14.6; 18.4; 20" },
                {
                  label: "Main tube material",
                  value:
                    "carbon steel, low-alloy steel, stainless steel, brass",
                },
                {
                  label: "Finning material",
                  value: "aluminum AD1",
                },
              ],
            },
          },
          yomkostnoe: {
            title: "Tank equipment",
            alt1: "Tank equipment 1",
            alt2: "Tank equipment 2",
            description:
              "Tank equipment is designed for temporary storage of liquids and gases, as well as performing various roles in technological processes in oil refining, petrochemicals, power and heat energy, oil and gas production, and other chemical industries.",
            types: {
              title: "Types of designs",
              items: [
                "Tanks for storing water, aqueous solutions of reagents, petroleum products, gases. Other tanks for special purposes",
              ],
            },
            tech: {
              title: "Technical specifications",
              items: [
                { label: "Nominal volume", value: "up to 250 m³" },
                { label: "Working pressure", value: "up to 63 MPa" },
                { label: "Working temperature", value: "up to 400°C" },
                { label: "Design options", value: "horizontal or vertical" },
              ],
            },
            features: {
              title: "Features",
              items: [
                "Manufactured according to customer’s technical requirements",
                "Wide range of working pressure",
                "Various material options depending on technical requirements",
              ],
            },
          },
          separatori: {
            title: "Separation equipment",
            alt1: "Separator 1",
            alt2: "Separator 2",
            description:
              "Separation equipment is used to separate gas-liquid flows, remove hydrocarbon condensate, and clean natural gas from liquid impurities.",
            types: {
              title: "Types of designs",
              items: [
                "Horizontal two-phase",
                "Three-phase (gas-oil-water)",
                "Vertical two-phase",
                "Cyclone",
              ],
            },
            tech: {
              title: "Technical specifications",
              items: [
                { label: "Gas capacity", value: "up to 50 million m³/day" },
                { label: "Working temperature", value: "from -60°C to +200°C" },
                { label: "Working pressure", value: "up to 63 MPa" },
                {
                  label: "Materials",
                  value:
                    "carbon steel, low-alloy steel, stainless steel, titanium",
                },
              ],
            },
          },
          metallokons: {
            title: "Metal structures",
            alt1: "Metal structure 1",
            alt2: "Metal structure 2",
            description:
              "Manufacturing of large-scale metal structures for various purposes in telecommunications, energy, mining, and other industries.",
            production: {
              title: "Production capabilities",
              items: [
                { label: "Metal processing", value: "up to 100 mm" },
                { label: "Single structure weight", value: "up to 50 t" },
              ],
              extra: [
                "Welded joints of all types",
                "High-precision mechanical processing",
              ],
            },
            tech: {
              title: "Technological processes",
              items: [
                "Laser metal cutting (accuracy ±0.1 mm)",
                "Plasma cutting (thickness up to 100 mm)",
                "Bending on modern equipment",
                "Welding in protective gas environment",
                "Mechanical processing on CNC machines",
              ],
            },
          },
          nestandartnoe: {
            title: "Non-standard equipment",
            alt1: "Non-standard equipment 1",
            alt2: "Non-standard equipment 2",
            description:
              "Manufacturing of non-standard equipment according to individual technical specifications and customer drawings.",
          },
          kolonniy: {
            title: "Column equipment",
            alt1: "Column equipment 1",
            alt2: "Column equipment 2",
            description:
              "Column equipment is used in technological processes in oil and gas processing, petrochemistry, and other chemical industries.",
            types: {
              title: "Types of designs",
              items: [
                "Absorption column (Absorber)",
                "Regeneration column (Desorber)",
                "Rectification column",
                "Adsorber",
              ],
            },
            tech: {
              title: "Technical specifications",
              items: [
                { label: "Diameter", value: "up to 3600 mm" },
                { label: "Height (length)", value: "up to 25 meters" },
                { label: "Working pressure", value: "up to 8 MPa" },
                {
                  label: "Materials",
                  value:
                    "carbon steel, low-alloy steel, stainless steel, titanium",
                },
              ],
            },
          },
        },
      },
    },
  },
  lng: "ru",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
