var request = require('request')
var Q = require('q')

var textCase = require('./textcase')

var phrases = [
  {
    pattern: /как дела/i,
    response: function() { 
      var ph = ['Заебись','Чётенько','Охуенно','Норм'];
      var resp = ph[Math.floor(Math.random() * ph.length)];
      return resp;
    }
  },
  {
    pattern: /^(кот|кот.|кс-кс-кс)(.*)$/i,
    response: function() {
      var ph = [
        'Чё?',
        'Не твой',
        'Meooow!',
        'Мяю, блядь',
        'Ты зоофил чтоли?',
        'Это я, поешь говна' 
      ];
      var resp = ph[Math.floor(Math.random() * ph.length)];
      return resp;
    }
  },  
  {
    pattern: /^(Кот, тест|Котяра|Котик|Кот БР|Стройся, БР!|БР, стройся!)$/i,
    response: function() { 
      var ph = [
        'Жив! Цел! Кот!',
        'Сейчас я твой анал протестирую',
        'Когда доделаем и оттестируем',
        'Нахуй иди...',
        'Я кот, ебал всех в рот',
        'Я томат, вас пырнуть я буду рад ))00',
        ''
      ];
      var resp = ph[Math.floor(Math.random() * ph.length)];
      return resp;
    }
  },
  {
    pattern: /(нет|нет.)/i,
    response: function() {
      var ph = [
        'Пидора ответ',
        'Шипилова ответ',
        'Маме привет',
        'Как нет, когда да?'
      ];
      var resp = ph[Math.floor(Math.random() * ph.length)];
      return resp;
    }
  },
  {
    pattern: /очко/i,
    response: function() {
      var ph = [
        'Очко как у Кличко!',
        'Очко',
        'Горячее. Зимнее. Твоё.'
      ];
      var resp = ph[Math.floor(Math.random() * ph.length)];
      return resp;
    }  
  },
  {
    pattern: /(подошел|сюда иди|подойди|к ноге)/i,
    response: function() {
      var ph = [
        'Чё подошел? Нахуй пошёл',
        'Кеды нашёл? Нахуй пошёл',
        'Ты чё ахуел? Сам подойди',
        'А то чё?'
      ];
      var resp = ph[Math.floor(Math.random() * ph.length)];
      return resp;
    }
  },

  {
    pattern: /(привет|здаров|хайль|приветик|здравствуй|хай|hi|hello)/ig,
    response: function() { 
      var ph = [
        'Привет', 
        'Зиг Хайль!', 
        'Здарова!', 
        'Привет ты чё ахуел',
        'Привет, братан',
        'С пидорами не здороваюсь'
      ];
      var resp = ph[Math.floor(Math.random() * ph.length)];
      return resp;
    }
  },
  {
    pattern: /(нет ты|ебало завали)/i,
    response: function() {
      var ph = ['Нет ты!', 'Нет, ёпта, ты', 'Ты', 'Нет ты', 'Чо ахуел'];
      var resp = ph[Math.floor(Math.random() * ph.length)];
      return resp;
    }
  },
  {
    pattern: /(рот|ебало|пидор|яйца|яйцами)/i,
    response: function() {
      var ph = [
        'Ты чё охуел мразь?',
        'Готовь мазь для очка',
        'Тебе что, лицо разбить, чёрт?',
        'Твоя мамаша так не считает',
        'Я тебе мышей в жопу навтыкал ночью, проверь',
        'Пизда твоей анальной девственности, ублюдок. Хотя, о какой девственности я говорю?',
        'Твоя мама была очень довольна, облизывая мой член, после нашего совокупления'
      ];
      var resp = ph[Math.floor(Math.random() * ph.length)];
    }
  },
  {
    pattern: /^(ты кто|ты кто?)$/i,
    response: function() {
      var ph = [
        'Тот, кто ебёт твою мамашу!',
        'Я кот, а ты -- пидор',
        'Тот, кто срёт под твою дверь и ебёт твою мать'
      ];
      var resp = ph[Math.floor(Math.random() * ph.length)];
      return resp;
    }
  },
  {
    pattern: /^(.*)(побью|разобью|сломаю|уебну|сосать|соси|уебу|ебну|рак)(.*)$/i,
    response: function() {
      var ph = [
        'А я тебе ебало раскурочу',
        'Рак!', 
        'А я твою мать выебу',
        'Петух-форточник))00',
        'Я тебя обоссу))',
        'Один прогиб и ты погиб',
        'Ну и мразь же ты'
      ];
      var resp = ph[Math.floor(Math.random() * ph.length)];
      
      return resp;
    }
  },
  {
    pattern: /^(.*)(ты чё|ты че|ты чо)(.*)$/i,
    response: function() {
      var ph = [
        'Хуй через плечо',
        'Хуй тебе в очко', 
        'А ты чё', 
        'Чё ты, ёпта', 
        'В тапки твои сру, вот чё...',
        'Ничё, а чё?'
      ];
      var resp = ph[Math.floor(Math.random() * ph.length)];
      return resp;
    }
  },
  {
    pattern: /(ок,ok,окей)/i,
    response: function() {
      var ph = [
        'Хуйок', 
        'Соси выблядок', 
        'Вот и хорошо. Теперь я ебал твою мать',
        'ОК'
      ];
      var resp = ph[Math.floor(Math.random() * ph.length)];
      return resp;
    }
  },
  {
    pattern: /кек/i,
    response: function() {
      var ph = [
        'Хуек',
        'Кекалка ебаная', 
        'За кек качки в жопу ебут, вообще-то',
        'За кек и лол стреляю в упор',
        'Кек',
        'За кек бью еблет',
        'А ну дайте пистолет, прострелю ему еблет, за его кек'
      ];
      var resp = ph[Math.floor(Math.random() * ph.length)];
      return resp;
    }
  },
  {
    pattern: /^(.*)(иди нахуй|нахуй иди|съебни|съеби|ушел в анал|ушол в анал|иди в анал|в анал иди|в жопу иди)(.*)$/i,
    response: function() {
      var ph = [
        'Я твою мать ебал',
        'Сам уебывай, пидорас', 
        'Да-да-да-да, попизди ещё, пидорок',
        'Нет, ты',
        'Я тебя найду'
      ];
      var resp = ph[Math.floor(Math.random() * ph.length)];
      return resp;
    }
  },
  {
    pattern: /(шипилов|шип|гриваченко|зефир|зф|зоеф|zf|grivachenko|борисов|калуцкий)/i,
    response: function() {
      var ph = [
        'Мне кажется, или кто-то назвал по имени очередного рака?',
        'Ну давайте хоть сегодня не будем про пидоров',
        'Звучат имена успешных)00',
        'Кек',
        'Шипилов, Борисов и Zf Гриваченко (и Калуцкий тоже) -- хуесосы',
        'Я его рот ебал'
      ];
      var resp = ph[Math.floor(Math.random() * ph.length)];
      return resp;
    }
  },
  {
    pattern: /(спокойной ночи|споки|спать|сладких снов|отбой)/i,
    response: function() {
      var ph = [
        'Да-да, уёбывай спать',
        'Чтоб ты не проснулось',
        'Спокойной ночи, ёпта', 
        'Когда ты уснешь, я присуну твоей маме',
        'Спи, а я пока с твоей мамой поиграю',
        'Чому спать? Го поебемся!' 
      ];
      var resp = ph[Math.floor(Math.random() * ph.length)];
      return resp;
    }
  },
  {
    pattern: /(Слава БР!|Слава Украине!)/i,
    response: function() {
      var ph = [
        'Героям Слава! o/',
        'Слава Нации! o/',
        'Кто не снами тот папайя',
        'Кто не с нами, тот ахуел'
      ];
      var resp = ph[Math.floor(Math.random() * ph.length)];
      return resp;
    }
  },
  {
    pattern: /^(.*)(хуль|чому|почему)(.*)$/,
    response: function() {
      var ph = [
        'так надо!',
        'потому',
        'хз',
        'ну вот так',
        'так повелось'
      ];
      var resp = ph[Math.floor(Math.random() * ph.length)];
      return resp;
    }
  }
]


module.exports = phrases