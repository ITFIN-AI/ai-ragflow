(self.webpackChunk = self.webpackChunk || []).push([
  [8323],
  {
    96330: function (e, n, t) {
      'use strict';
      t.d(n, {
        K1: function () {
          return m;
        },
        Rx: function () {
          return i;
        },
        S8: function () {
          return l;
        },
        Vr: function () {
          return c;
        },
        cG: function () {
          return o;
        },
        ld: function () {
          return u;
        },
        n_: function () {
          return d;
        },
        oQ: function () {
          return s;
        },
      });
      var a = t(9783),
        r = t.n(a),
        i = (function (e) {
          return (
            (e.Dataset = 'dataset'),
            (e.Testing = 'testing'),
            (e.Configuration = 'configuration'),
            (e.KnowledgeGraph = 'knowledgeGraph'),
            e
          );
        })({}),
        o = (function (e) {
          return (
            (e.UNSTART = '0'),
            (e.RUNNING = '1'),
            (e.CANCEL = '2'),
            (e.DONE = '3'),
            (e.FAIL = '4'),
            e
          );
        })({}),
        s = (function (e) {
          return (
            (e.Improvise = 'Improvise'),
            (e.Precise = 'Precise'),
            (e.Balance = 'Balance'),
            e
          );
        })({}),
        l = r()(
          r()(
            r()({}, s.Improvise, {
              temperature: 0.8,
              top_p: 0.9,
              frequency_penalty: 0.1,
              presence_penalty: 0.1,
              max_tokens: 4096,
            }),
            s.Precise,
            {
              temperature: 0.2,
              top_p: 0.75,
              frequency_penalty: 0.5,
              presence_penalty: 0.5,
              max_tokens: 4096,
            },
          ),
          s.Balance,
          {
            temperature: 0.5,
            top_p: 0.85,
            frequency_penalty: 0.3,
            presence_penalty: 0.2,
            max_tokens: 4096,
          },
        ),
        c = (function (e) {
          return (
            (e.Embedding = 'embedding'),
            (e.Chat = 'chat'),
            (e.Image2text = 'image2text'),
            (e.Speech2text = 'speech2text'),
            (e.Rerank = 'rerank'),
            (e.TTS = 'tts'),
            e
          );
        })({}),
        u = (function (e) {
          return (e.DocumentId = 'doc_id'), (e.KnowledgeId = 'id'), e;
        })({}),
        d = (function (e) {
          return (e.Virtual = 'virtual'), (e.Visual = 'visual'), e;
        })({}),
        m = (function (e) {
          return (
            (e.Naive = 'naive'),
            (e.Qa = 'qa'),
            (e.Resume = 'resume'),
            (e.Manual = 'manual'),
            (e.Table = 'table'),
            (e.Paper = 'paper'),
            (e.Book = 'book'),
            (e.Laws = 'laws'),
            (e.Presentation = 'presentation'),
            (e.Picture = 'picture'),
            (e.One = 'one'),
            (e.Audio = 'audio'),
            (e.Email = 'email'),
            (e.Tag = 'tag'),
            (e.KnowledgeGraph = 'knowledge_graph'),
            e
          );
        })({});
    },
    9450: function (e, n, t) {
      'use strict';
      t.d(n, {
        A4: function () {
          return o;
        },
        H7: function () {
          return a;
        },
        WS: function () {
          return i;
        },
        qh: function () {
          return r;
        },
        rQ: function () {
          return s;
        },
      });
      var a = 'user-setting',
        r = (function (e) {
          return (
            (e.Profile = 'profile'),
            (e.Password = 'password'),
            (e.Model = 'model'),
            (e.System = 'system'),
            (e.Api = 'api'),
            (e.Team = 'team'),
            (e.Logout = 'logout'),
            e
          );
        })({}),
        i = 'profile-setting',
        o = (function (e) {
          return (
            (e.Profile = 'profile'),
            (e.Plan = 'plan'),
            (e.Model = 'model'),
            (e.System = 'system'),
            (e.Api = 'api'),
            (e.Team = 'team'),
            (e.Prompt = 'prompt'),
            (e.Chunk = 'chunk'),
            (e.Logout = 'logout'),
            e
          );
        })({}),
        s = [
          'UTC-11\tPacific/Midway',
          'UTC-11\tPacific/Niue',
          'UTC-11\tPacific/Pago_Pago',
          'UTC-10\tAmerica/Adak',
          'UTC-10\tPacific/Honolulu',
          'UTC-10\tPacific/Rarotonga',
          'UTC-10\tPacific/Tahiti',
          'UTC-9:30\tPacific/Marquesas',
          'UTC-9\tAmerica/Anchorage',
          'UTC-9\tAmerica/Juneau',
          'UTC-9\tAmerica/Metlakatla',
          'UTC-9\tAmerica/Nome',
          'UTC-9\tAmerica/Sitka',
          'UTC-9\tAmerica/Yakutat',
          'UTC-9\tPacific/Gambier',
          'UTC-8\tAmerica/Los_Angeles',
          'UTC-8\tAmerica/Tijuana',
          'UTC-8\tAmerica/Vancouver',
          'UTC-8\tPacific/Pitcairn',
          'UTC-7\tAmerica/Boise',
          'UTC-7\tAmerica/Cambridge_Bay',
          'UTC-7\tAmerica/Ciudad_Juarez',
          'UTC-7\tAmerica/Creston',
          'UTC-7\tAmerica/Dawson',
          'UTC-7\tAmerica/Dawson_Creek',
          'UTC-7\tAmerica/Denver',
          'UTC-7\tAmerica/Edmonton',
          'UTC-7\tAmerica/Fort_Nelson',
          'UTC-7\tAmerica/Hermosillo',
          'UTC-7\tAmerica/Inuvik',
          'UTC-7\tAmerica/Mazatlan',
          'UTC-7\tAmerica/Phoenix',
          'UTC-7\tAmerica/Whitehorse',
          'UTC-7\tAmerica/Yellowknife',
          'UTC-6\tAmerica/Bahia_Banderas',
          'UTC-6\tAmerica/Belize',
          'UTC-6\tAmerica/Chicago',
          'UTC-6\tAmerica/Chihuahua',
          'UTC-6\tAmerica/Costa_Rica',
          'UTC-6\tAmerica/El_Salvador',
          'UTC-6\tAmerica/Guatemala',
          'UTC-6\tAmerica/Indiana/Knox',
          'UTC-6\tAmerica/Indiana/Tell_City',
          'UTC-6\tAmerica/Managua',
          'UTC-6\tAmerica/Matamoros',
          'UTC-6\tAmerica/Menominee',
          'UTC-6\tAmerica/Merida',
          'UTC-6\tAmerica/Mexico_City',
          'UTC-6\tAmerica/Monterrey',
          'UTC-6\tAmerica/North_Dakota/Beulah',
          'UTC-6\tAmerica/North_Dakota/Center',
          'UTC-6\tAmerica/North_Dakota/New_Salem',
          'UTC-6\tAmerica/Ojinaga',
          'UTC-6\tAmerica/Rankin_Inlet',
          'UTC-6\tAmerica/Regina',
          'UTC-6\tAmerica/Resolute',
          'UTC-6\tAmerica/Swift_Current',
          'UTC-6\tAmerica/Tegucigalpa',
          'UTC-6\tAmerica/Winnipeg',
          'UTC-6\tPacific/Easter',
          'UTC-6\tPacific/Galapagos',
          'UTC-5\tAmerica/Atikokan',
          'UTC-5\tAmerica/Bogota',
          'UTC-5\tAmerica/Cancun',
          'UTC-5\tAmerica/Cayman',
          'UTC-5\tAmerica/Detroit',
          'UTC-5\tAmerica/Eirunepe',
          'UTC-5\tAmerica/Grand_Turk',
          'UTC-5\tAmerica/Guayaquil',
          'UTC-5\tAmerica/Havana',
          'UTC-5\tAmerica/Indiana/Indianapolis',
          'UTC-5\tAmerica/Indiana/Marengo',
          'UTC-5\tAmerica/Indiana/Petersburg',
          'UTC-5\tAmerica/Indiana/Vevay',
          'UTC-5\tAmerica/Indiana/Vincennes',
          'UTC-5\tAmerica/Indiana/Winamac',
          'UTC-5\tAmerica/Iqaluit',
          'UTC-5\tAmerica/Jamaica',
          'UTC-5\tAmerica/Kentucky/Louisville',
          'UTC-5\tAmerica/Kentucky/Monticello',
          'UTC-5\tAmerica/Lima',
          'UTC-5\tAmerica/Nassau',
          'UTC-5\tAmerica/New_York',
          'UTC-5\tAmerica/Panama',
          'UTC-5\tAmerica/Port-au-Prince',
          'UTC-5\tAmerica/Rio_Branco',
          'UTC-5\tAmerica/Toronto',
          'UTC-4\tAmerica/Anguilla',
          'UTC-4\tAmerica/Antigua',
          'UTC-4\tAmerica/Aruba',
          'UTC-4\tAmerica/Asuncion',
          'UTC-4\tAmerica/Barbados',
          'UTC-4\tAmerica/Blanc-Sablon',
          'UTC-4\tAmerica/Boa_Vista',
          'UTC-4\tAmerica/Campo_Grande',
          'UTC-4\tAmerica/Caracas',
          'UTC-4\tAmerica/Cuiaba',
          'UTC-4\tAmerica/Curacao',
          'UTC-4\tAmerica/Dominica',
          'UTC-4\tAmerica/Glace_Bay',
          'UTC-4\tAmerica/Goose_Bay',
          'UTC-4\tAmerica/Grenada',
          'UTC-4\tAmerica/Guadeloupe',
          'UTC-4\tAmerica/Guyana',
          'UTC-4\tAmerica/Halifax',
          'UTC-4\tAmerica/Kralendijk',
          'UTC-4\tAmerica/La_Paz',
          'UTC-4\tAmerica/Lower_Princes',
          'UTC-4\tAmerica/Manaus',
          'UTC-4\tAmerica/Marigot',
          'UTC-4\tAmerica/Martinique',
          'UTC-4\tAmerica/Moncton',
          'UTC-4\tAmerica/Montserrat',
          'UTC-4\tAmerica/Porto_Velho',
          'UTC-4\tAmerica/Port_of_Spain',
          'UTC-4\tAmerica/Puerto_Rico',
          'UTC-4\tAmerica/Santiago',
          'UTC-4\tAmerica/Santo_Domingo',
          'UTC-4\tAmerica/St_Barthelemy',
          'UTC-4\tAmerica/St_Kitts',
          'UTC-4\tAmerica/St_Lucia',
          'UTC-4\tAmerica/St_Thomas',
          'UTC-4\tAmerica/St_Vincent',
          'UTC-4\tAmerica/Thule',
          'UTC-4\tAmerica/Tortola',
          'UTC-4\tAtlantic/Bermuda',
          'UTC-3:30\tAmerica/St_Johns',
          'UTC-3\tAmerica/Araguaina',
          'UTC-3\tAmerica/Argentina/Buenos_Aires',
          'UTC-3\tAmerica/Argentina/Catamarca',
          'UTC-3\tAmerica/Argentina/Cordoba',
          'UTC-3\tAmerica/Argentina/Jujuy',
          'UTC-3\tAmerica/Argentina/La_Rioja',
          'UTC-3\tAmerica/Argentina/Mendoza',
          'UTC-3\tAmerica/Argentina/Rio_Gallegos',
          'UTC-3\tAmerica/Argentina/Salta',
          'UTC-3\tAmerica/Argentina/San_Juan',
          'UTC-3\tAmerica/Argentina/San_Luis',
          'UTC-3\tAmerica/Argentina/Tucuman',
          'UTC-3\tAmerica/Argentina/Ushuaia',
          'UTC-3\tAmerica/Bahia',
          'UTC-3\tAmerica/Belem',
          'UTC-3\tAmerica/Cayenne',
          'UTC-3\tAmerica/Fortaleza',
          'UTC-3\tAmerica/Maceio',
          'UTC-3\tAmerica/Miquelon',
          'UTC-3\tAmerica/Montevideo',
          'UTC-3\tAmerica/Paramaribo',
          'UTC-3\tAmerica/Punta_Arenas',
          'UTC-3\tAmerica/Recife',
          'UTC-3\tAmerica/Santarem',
          'UTC-3\tAmerica/Sao_Paulo',
          'UTC-3\tAntarctica/Palmer',
          'UTC-3\tAntarctica/Rothera',
          'UTC-3\tAtlantic/Stanley',
          'UTC-2\tAmerica/Noronha',
          'UTC-2\tAmerica/Nuuk',
          'UTC-2\tAtlantic/South_Georgia',
          'UTC-1\tAmerica/Scoresbysund',
          'UTC-1\tAtlantic/Azores',
          'UTC-1\tAtlantic/Cape_Verde',
          'UTC+0\tAfrica/Abidjan',
          'UTC+0\tAfrica/Accra',
          'UTC+0\tAfrica/Bamako',
          'UTC+0\tAfrica/Banjul',
          'UTC+0\tAfrica/Bissau',
          'UTC+0\tAfrica/Casablanca',
          'UTC+0\tAfrica/Conakry',
          'UTC+0\tAfrica/Dakar',
          'UTC+0\tAfrica/El_Aaiun',
          'UTC+0\tAfrica/Freetown',
          'UTC+0\tAfrica/Lome',
          'UTC+0\tAfrica/Monrovia',
          'UTC+0\tAfrica/Nouakchott',
          'UTC+0\tAfrica/Ouagadougou',
          'UTC+0\tAfrica/Sao_Tome',
          'UTC+0\tAmerica/Danmarkshavn',
          'UTC+0\tAntarctica/Troll',
          'UTC+0\tAtlantic/Canary',
          'UTC+0\tAtlantic/Faroe',
          'UTC+0\tAtlantic/Madeira',
          'UTC+0\tAtlantic/Reykjavik',
          'UTC+0\tAtlantic/St_Helena',
          'UTC+0\tEurope/Dublin',
          'UTC+0\tEurope/Guernsey',
          'UTC+0\tEurope/Isle_of_Man',
          'UTC+0\tEurope/Jersey',
          'UTC+0\tEurope/Lisbon',
          'UTC+0\tEurope/London',
          'UTC+1\tAfrica/Algiers',
          'UTC+1\tAfrica/Bangui',
          'UTC+1\tAfrica/Brazzaville',
          'UTC+1\tAfrica/Ceuta',
          'UTC+1\tAfrica/Douala',
          'UTC+1\tAfrica/Kinshasa',
          'UTC+1\tAfrica/Lagos',
          'UTC+1\tAfrica/Libreville',
          'UTC+1\tAfrica/Luanda',
          'UTC+1\tAfrica/Malabo',
          'UTC+1\tAfrica/Ndjamena',
          'UTC+1\tAfrica/Niamey',
          'UTC+1\tAfrica/Porto-Novo',
          'UTC+1\tAfrica/Tunis',
          'UTC+1\tAfrica/Windhoek',
          'UTC+1\tArctic/Longyearbyen',
          'UTC+1\tEurope/Amsterdam',
          'UTC+1\tEurope/Andorra',
          'UTC+1\tEurope/Belgrade',
          'UTC+1\tEurope/Berlin',
          'UTC+1\tEurope/Bratislava',
          'UTC+1\tEurope/Brussels',
          'UTC+1\tEurope/Budapest',
          'UTC+1\tEurope/Copenhagen',
          'UTC+1\tEurope/Gibraltar',
          'UTC+1\tEurope/Ljubljana',
          'UTC+1\tEurope/Luxembourg',
          'UTC+1\tEurope/Madrid',
          'UTC+1\tEurope/Malta',
          'UTC+1\tEurope/Monaco',
          'UTC+1\tEurope/Oslo',
          'UTC+1\tEurope/Paris',
          'UTC+1\tEurope/Podgorica',
          'UTC+1\tEurope/Prague',
          'UTC+1\tEurope/Rome',
          'UTC+1\tEurope/San_Marino',
          'UTC+1\tEurope/Sarajevo',
          'UTC+1\tEurope/Skopje',
          'UTC+1\tEurope/Stockholm',
          'UTC+1\tEurope/Tirane',
          'UTC+1\tEurope/Vaduz',
          'UTC+1\tEurope/Vatican',
          'UTC+1\tEurope/Vienna',
          'UTC+1\tEurope/Warsaw',
          'UTC+1\tEurope/Zagreb',
          'UTC+1\tEurope/Zurich',
          'UTC+2\tAfrica/Blantyre',
          'UTC+2\tAfrica/Bujumbura',
          'UTC+2\tAfrica/Cairo',
          'UTC+2\tAfrica/Gaborone',
          'UTC+2\tAfrica/Harare',
          'UTC+2\tAfrica/Johannesburg',
          'UTC+2\tAfrica/Juba',
          'UTC+2\tAfrica/Khartoum',
          'UTC+2\tAfrica/Kigali',
          'UTC+2\tAfrica/Lubumbashi',
          'UTC+2\tAfrica/Lusaka',
          'UTC+2\tAfrica/Maputo',
          'UTC+2\tAfrica/Maseru',
          'UTC+2\tAfrica/Mbabane',
          'UTC+2\tAfrica/Tripoli',
          'UTC+2\tAsia/Beirut',
          'UTC+2\tAsia/Famagusta',
          'UTC+2\tAsia/Gaza',
          'UTC+2\tAsia/Hebron',
          'UTC+2\tAsia/Jerusalem',
          'UTC+2\tAsia/Nicosia',
          'UTC+2\tEurope/Athens',
          'UTC+2\tEurope/Bucharest',
          'UTC+2\tEurope/Chisinau',
          'UTC+2\tEurope/Helsinki',
          'UTC+2\tEurope/Kaliningrad',
          'UTC+2\tEurope/Kyiv',
          'UTC+2\tEurope/Mariehamn',
          'UTC+2\tEurope/Riga',
          'UTC+2\tEurope/Sofia',
          'UTC+2\tEurope/Tallinn',
          'UTC+2\tEurope/Vilnius',
          'UTC+3\tAfrica/Addis_Ababa',
          'UTC+3\tAfrica/Asmara',
          'UTC+3\tAfrica/Dar_es_Salaam',
          'UTC+3\tAfrica/Djibouti',
          'UTC+3\tAfrica/Kampala',
          'UTC+3\tAfrica/Mogadishu',
          'UTC+3\tAfrica/Nairobi',
          'UTC+3\tAntarctica/Syowa',
          'UTC+3\tAsia/Aden',
          'UTC+3\tAsia/Amman',
          'UTC+3\tAsia/Baghdad',
          'UTC+3\tAsia/Bahrain',
          'UTC+3\tAsia/Damascus',
          'UTC+3\tAsia/Kuwait',
          'UTC+3\tAsia/Qatar',
          'UTC+3\tAsia/Riyadh',
          'UTC+3\tEurope/Istanbul',
          'UTC+3\tEurope/Kirov',
          'UTC+3\tEurope/Minsk',
          'UTC+3\tEurope/Moscow',
          'UTC+3\tEurope/Simferopol',
          'UTC+3\tEurope/Volgograd',
          'UTC+3\tIndian/Antananarivo',
          'UTC+3\tIndian/Comoro',
          'UTC+3\tIndian/Mayotte',
          'UTC+3:30\tAsia/Tehran',
          'UTC+4\tAsia/Baku',
          'UTC+4\tAsia/Dubai',
          'UTC+4\tAsia/Muscat',
          'UTC+4\tAsia/Tbilisi',
          'UTC+4\tAsia/Yerevan',
          'UTC+4\tEurope/Astrakhan',
          'UTC+4\tEurope/Samara',
          'UTC+4\tEurope/Saratov',
          'UTC+4\tEurope/Ulyanovsk',
          'UTC+4\tIndian/Mahe',
          'UTC+4\tIndian/Mauritius',
          'UTC+4\tIndian/Reunion',
          'UTC+4:30\tAsia/Kabul',
          'UTC+5\tAntarctica/Mawson',
          'UTC+5\tAsia/Aqtau',
          'UTC+5\tAsia/Aqtobe',
          'UTC+5\tAsia/Ashgabat',
          'UTC+5\tAsia/Atyrau',
          'UTC+5\tAsia/Dushanbe',
          'UTC+5\tAsia/Karachi',
          'UTC+5\tAsia/Oral',
          'UTC+5\tAsia/Qyzylorda',
          'UTC+5\tAsia/Samarkand',
          'UTC+5\tAsia/Tashkent',
          'UTC+5\tAsia/Yekaterinburg',
          'UTC+5\tIndian/Kerguelen',
          'UTC+5\tIndian/Maldives',
          'UTC+5:30\tAsia/Colombo',
          'UTC+5:30\tAsia/Kolkata',
          'UTC+5:45\tAsia/Kathmandu',
          'UTC+6\tAntarctica/Vostok',
          'UTC+6\tAsia/Almaty',
          'UTC+6\tAsia/Bishkek',
          'UTC+6\tAsia/Dhaka',
          'UTC+6\tAsia/Omsk',
          'UTC+6\tAsia/Qostanay',
          'UTC+6\tAsia/Thimphu',
          'UTC+6\tAsia/Urumqi',
          'UTC+6\tIndian/Chagos',
          'UTC+6:30\tAsia/Yangon',
          'UTC+6:30\tIndian/Cocos',
          'UTC+7\tAntarctica/Davis',
          'UTC+7\tAsia/Bangkok',
          'UTC+7\tAsia/Barnaul',
          'UTC+7\tAsia/Hovd',
          'UTC+7\tAsia/Ho_Chi_Minh',
          'UTC+7\tAsia/Jakarta',
          'UTC+7\tAsia/Krasnoyarsk',
          'UTC+7\tAsia/Novokuznetsk',
          'UTC+7\tAsia/Novosibirsk',
          'UTC+7\tAsia/Phnom_Penh',
          'UTC+7\tAsia/Pontianak',
          'UTC+7\tAsia/Tomsk',
          'UTC+7\tAsia/Vientiane',
          'UTC+7\tIndian/Christmas',
          'UTC+8\tAsia/Brunei',
          'UTC+8\tAsia/Choibalsan',
          'UTC+8\tAsia/Hong_Kong',
          'UTC+8\tAsia/Irkutsk',
          'UTC+8\tAsia/Kuala_Lumpur',
          'UTC+8\tAsia/Kuching',
          'UTC+8\tAsia/Macau',
          'UTC+8\tAsia/Makassar',
          'UTC+8\tAsia/Manila',
          'UTC+8\tAsia/Shanghai',
          'UTC+8\tAsia/Singapore',
          'UTC+8\tAsia/Taipei',
          'UTC+8\tAsia/Ulaanbaatar',
          'UTC+8\tAustralia/Perth',
          'UTC+8:45\tAustralia/Eucla',
          'UTC+9\tAsia/Chita',
          'UTC+9\tAsia/Dili',
          'UTC+9\tAsia/Jayapura',
          'UTC+9\tAsia/Khandyga',
          'UTC+9\tAsia/Pyongyang',
          'UTC+9\tAsia/Seoul',
          'UTC+9\tAsia/Tokyo',
          'UTC+9\tAsia/Yakutsk',
          'UTC+9\tPacific/Palau',
          'UTC+9:30\tAustralia/Adelaide',
          'UTC+9:30\tAustralia/Broken_Hill',
          'UTC+9:30\tAustralia/Darwin',
          'UTC+10\tAntarctica/DumontDUrville',
          'UTC+10\tAntarctica/Macquarie',
          'UTC+10\tAsia/Ust-Nera',
          'UTC+10\tAsia/Vladivostok',
          'UTC+10\tAustralia/Brisbane',
          'UTC+10\tAustralia/Hobart',
          'UTC+10\tAustralia/Lindeman',
          'UTC+10\tAustralia/Melbourne',
          'UTC+10\tAustralia/Sydney',
          'UTC+10\tPacific/Chuuk',
          'UTC+10\tPacific/Guam',
          'UTC+10\tPacific/Port_Moresby',
          'UTC+10\tPacific/Saipan',
          'UTC+10:30\tAustralia/Lord_Howe',
          'UTC+11\tAntarctica/Casey',
          'UTC+11\tAsia/Magadan',
          'UTC+11\tAsia/Sakhalin',
          'UTC+11\tAsia/Srednekolymsk',
          'UTC+11\tPacific/Bougainville',
          'UTC+11\tPacific/Efate',
          'UTC+11\tPacific/Guadalcanal',
          'UTC+11\tPacific/Kosrae',
          'UTC+11\tPacific/Norfolk',
          'UTC+11\tPacific/Noumea',
          'UTC+11\tPacific/Pohnpei',
          'UTC+12\tAntarctica/McMurdo',
          'UTC+12\tAsia/Anadyr',
          'UTC+12\tAsia/Kamchatka',
          'UTC+12\tPacific/Auckland',
          'UTC+12\tPacific/Fiji',
          'UTC+12\tPacific/Funafuti',
          'UTC+12\tPacific/Kwajalein',
          'UTC+12\tPacific/Majuro',
          'UTC+12\tPacific/Nauru',
          'UTC+12\tPacific/Tarawa',
          'UTC+12\tPacific/Wake',
          'UTC+12\tPacific/Wallis',
          'UTC+12:45\tPacific/Chatham',
          'UTC+13\tPacific/Apia',
          'UTC+13\tPacific/Fakaofo',
          'UTC+13\tPacific/Kanton',
          'UTC+13\tPacific/Tongatapu',
          'UTC+14\tPacific/Kiritimati',
        ];
    },
    86968: function (e, n, t) {
      'use strict';
      t.d(n, {
        I3: function () {
          return h;
        },
        pG: function () {
          return g;
        },
        qM: function () {
          return f;
        },
      });
      var a = t(15009),
        r = t.n(a),
        i = t(99289),
        o = t.n(i),
        s = t(5574),
        l = t.n(s),
        c = t(21640),
        u = t(3321),
        d = (t(18446), t(62435)),
        m = t(67421),
        p = t(86074),
        g = function () {
          var e = (0, d.useState)(!1),
            n = l()(e, 2),
            t = n[0],
            a = n[1],
            r = (0, d.useCallback)(function () {
              a(!0);
            }, []),
            i = (0, d.useCallback)(function () {
              a(!1);
            }, []),
            o = (0, d.useCallback)(
              function () {
                a(!t);
              },
              [t],
            );
          return { visible: t, showModal: r, hideModal: i, switchVisible: o };
        };
      var h = function () {
          var e = u.Z.useApp().modal,
            n = (0, m.$G)().t;
          return (0, d.useCallback)(
            function (t) {
              var a = t.title,
                i = t.content,
                s = t.onOk,
                l = t.onCancel;
              return new Promise(function (t, u) {
                e.confirm({
                  title: null != a ? a : n('common.deleteModalTitle'),
                  icon: (0, p.jsx)(c.Z, {}),
                  content: i,
                  okText: n('common.ok'),
                  okType: 'danger',
                  cancelText: n('common.cancel'),
                  onOk: function () {
                    return o()(
                      r()().mark(function e() {
                        var n;
                        return r()().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    null == s ? void 0 : s()
                                  );
                                case 3:
                                  (n = e.sent),
                                    t(n),
                                    console.info(n),
                                    (e.next = 11);
                                  break;
                                case 8:
                                  (e.prev = 8), (e.t0 = e.catch(0)), u(e.t0);
                                case 11:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 8]],
                        );
                      }),
                    )();
                  },
                  onCancel: function () {
                    null == l || l();
                  },
                });
              });
            },
            [n, e],
          );
        },
        f = function (e) {
          return (0, m.$G)('translation', { keyPrefix: e });
        };
    },
    39259: function (e, n, t) {
      'use strict';
      t.d(n, {
        CV: function () {
          return L;
        },
        F1: function () {
          return w;
        },
        Jf: function () {
          return Z;
        },
        Jv: function () {
          return E;
        },
        PI: function () {
          return P;
        },
        WH: function () {
          return b;
        },
        XH: function () {
          return U;
        },
        d1: function () {
          return K;
        },
        ef: function () {
          return S;
        },
        er: function () {
          return O;
        },
        fS: function () {
          return _;
        },
        hZ: function () {
          return I;
        },
        jd: function () {
          return x;
        },
        m_: function () {
          return F;
        },
        nv: function () {
          return M;
        },
        oH: function () {
          return q;
        },
        v: function () {
          return j;
        },
        x_: function () {
          return D;
        },
      });
      var a = t(5574),
        r = t.n(a),
        i = t(15009),
        o = t.n(i),
        s = t(99289),
        l = t.n(s),
        c = t(40169),
        u = t(72668),
        d = t(78551),
        m = t(30202),
        p = t(4527),
        g = t(85576),
        h = t(45360),
        f = t(27856),
        T = t.n(f),
        v = t(96486),
        C = t(62435),
        A = t(67421),
        k = t(42028),
        y = t(86074),
        x = function () {
          var e,
            n = (0, A.$G)().i18n,
            t = (0, d.a)({
              queryKey: ['userInfo'],
              initialData: {},
              gcTime: 0,
              queryFn:
                ((e = l()(
                  o()().mark(function e() {
                    var t, a, r;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), u.ZP.user_info();
                          case 2:
                            return (
                              (a = e.sent),
                              0 === (r = a.data).code &&
                                n.changeLanguage(c.Kj[r.data.language]),
                              e.abrupt(
                                'return',
                                null !== (t = null == r ? void 0 : r.data) &&
                                  void 0 !== t
                                  ? t
                                  : {},
                              )
                            );
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            });
          return { data: t.data, loading: t.isFetching };
        },
        _ = function () {
          var e,
            n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = (0, A.$G)().t,
            a = (0, d.a)({
              queryKey: ['tenantInfo'],
              initialData: {},
              gcTime: 0,
              queryFn:
                ((e = l()(
                  o()().mark(function e() {
                    var a, r, i;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), u.ZP.get_tenant_info();
                          case 2:
                            if (((a = e.sent), 0 !== (r = a.data).code)) {
                              e.next = 10;
                              break;
                            }
                            return (
                              (i = r.data),
                              n &&
                                ((0, v.isEmpty)(i.embd_id) ||
                                  (0, v.isEmpty)(i.llm_id)) &&
                                g.Z.warning({
                                  title: t('common.warn'),
                                  content: (0, y.jsx)('div', {
                                    dangerouslySetInnerHTML: {
                                      __html: T().sanitize(
                                        t('setting.modelProvidersWarn'),
                                      ),
                                    },
                                  }),
                                  onOk: function () {
                                    k.m8.push('/user-setting/model');
                                  },
                                }),
                              (i.chat_id = i.llm_id),
                              (i.speech2text_id = i.asr_id),
                              e.abrupt('return', i)
                            );
                          case 10:
                            return e.abrupt('return', r);
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            });
          return { data: a.data, loading: a.isFetching };
        },
        U = function () {
          var e = _(!0).data;
          return (0, C.useMemo)(
            function () {
              var n, t;
              return (
                null !==
                  (n =
                    null == e || null === (t = e.parser_ids) || void 0 === t
                      ? void 0
                      : t.split(',')) && void 0 !== n
                  ? n
                  : []
              ).map(function (e) {
                var n = e.split(':');
                return { value: n[0], label: n[1] };
              });
            },
            [e],
          );
        },
        b = function () {
          var e,
            n = (0, m.NL)(),
            t = (0, A.$G)().t,
            a = (0, p.D)({
              mutationKey: ['saveSetting'],
              mutationFn:
                ((e = l()(
                  o()().mark(function e(a) {
                    var r, i;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), u.ZP.setting(a);
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (i = r.data).code &&
                                (h.ZP.success(t('message.modified')),
                                n.invalidateQueries({
                                  queryKey: ['userInfo'],
                                })),
                              e.abrupt('return', null == i ? void 0 : i.code)
                            );
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (n) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: a.data,
            loading: a.isPending,
            saveSetting: a.mutateAsync,
          };
        },
        M = function () {
          var e = (0, C.useState)(''),
            n = r()(e, 2),
            t = n[0],
            a = n[1],
            i = (0, C.useState)(!1),
            s = r()(i, 2),
            c = s[0],
            d = s[1];
          return {
            fetchSystemVersion: (0, C.useCallback)(
              l()(
                o()().mark(function e() {
                  var n, t;
                  return o()().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              d(!0),
                              (e.next = 4),
                              u.ZP.getSystemVersion()
                            );
                          case 4:
                            (n = e.sent),
                              0 === (t = n.data).code && (a(t.data), d(!1)),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9), (e.t0 = e.catch(0)), d(!1);
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]],
                  );
                }),
              ),
              [],
            ),
            version: t,
            loading: c,
          };
        },
        Z = function () {
          var e = (0, C.useState)({}),
            n = r()(e, 2),
            t = n[0],
            a = n[1],
            i = (0, C.useState)(!1),
            s = r()(i, 2),
            c = s[0],
            d = s[1];
          return {
            systemStatus: t,
            fetchSystemStatus: (0, C.useCallback)(
              l()(
                o()().mark(function e() {
                  var n, t;
                  return o()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return d(!0), (e.next = 3), u.ZP.getSystemStatus();
                        case 3:
                          (n = e.sent),
                            0 === (t = n.data).code && (a(t.data), d(!1));
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
              [],
            ),
            loading: c,
          };
        },
        j = function () {
          var e,
            n = (0, p.D)({
              mutationKey: ['fetchManualSystemTokenList'],
              mutationFn:
                ((e = l()(
                  o()().mark(function e() {
                    var n, t, a;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), u.ZP.listToken();
                          case 2:
                            return (
                              (t = e.sent),
                              (a = t.data),
                              e.abrupt(
                                'return',
                                null !== (n = null == a ? void 0 : a.data) &&
                                  void 0 !== n
                                  ? n
                                  : [],
                              )
                            );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: n.data,
            loading: n.isPending,
            fetchSystemTokenList: n.mutateAsync,
          };
        },
        w = function () {
          var e,
            n = (0, d.a)({
              queryKey: ['fetchSystemTokenList'],
              initialData: [],
              gcTime: 0,
              queryFn:
                ((e = l()(
                  o()().mark(function e() {
                    var n, t, a;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), u.ZP.listToken();
                          case 2:
                            return (
                              (t = e.sent),
                              (a = t.data),
                              e.abrupt(
                                'return',
                                null !== (n = null == a ? void 0 : a.data) &&
                                  void 0 !== n
                                  ? n
                                  : [],
                              )
                            );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            });
          return { data: n.data, loading: n.isFetching, refetch: n.refetch };
        },
        S = function () {
          var e,
            n = (0, m.NL)(),
            t = (0, A.$G)().t,
            a = (0, p.D)({
              mutationKey: ['removeSystemToken'],
              mutationFn:
                ((e = l()(
                  o()().mark(function e(a) {
                    var r, i, s;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), u.ZP.removeToken({}, a);
                          case 2:
                            return (
                              (i = e.sent),
                              0 === (s = i.data).code &&
                                (h.ZP.success(t('message.deleted')),
                                n.invalidateQueries({
                                  queryKey: ['fetchSystemTokenList'],
                                })),
                              e.abrupt(
                                'return',
                                null !== (r = null == s ? void 0 : s.data) &&
                                  void 0 !== r
                                  ? r
                                  : [],
                              )
                            );
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (n) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: a.data,
            loading: a.isPending,
            removeToken: a.mutateAsync,
          };
        },
        P = function () {
          var e,
            n = (0, m.NL)(),
            t = (0, p.D)({
              mutationKey: ['createSystemToken'],
              mutationFn:
                ((e = l()(
                  o()().mark(function e(t) {
                    var a, r, i;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), u.ZP.createToken(t);
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (i = r.data).code &&
                                n.invalidateQueries({
                                  queryKey: ['fetchSystemTokenList'],
                                }),
                              e.abrupt(
                                'return',
                                null !== (a = null == i ? void 0 : i.data) &&
                                  void 0 !== a
                                  ? a
                                  : [],
                              )
                            );
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (n) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: t.data,
            loading: t.isPending,
            createToken: t.mutateAsync,
          };
        },
        I = function () {
          var e,
            n = _().data.tenant_id,
            t = (0, d.a)({
              queryKey: ['listTenantUser', n],
              initialData: [],
              gcTime: 0,
              enabled: !!n,
              queryFn:
                ((e = l()(
                  o()().mark(function e() {
                    var t, a, r;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), (0, u.WX)(n);
                          case 2:
                            return (
                              (a = e.sent),
                              (r = a.data),
                              e.abrupt(
                                'return',
                                null !== (t = null == r ? void 0 : r.data) &&
                                  void 0 !== t
                                  ? t
                                  : [],
                              )
                            );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            });
          return { data: t.data, loading: t.isFetching, refetch: t.refetch };
        },
        F = function () {
          var e,
            n = _().data,
            t = (0, m.NL)(),
            a = (0, p.D)({
              mutationKey: ['addTenantUser'],
              mutationFn:
                ((e = l()(
                  o()().mark(function e(a) {
                    var r, i;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), (0, u.AH)(n.tenant_id, a);
                          case 2:
                            return (
                              (r = e.sent),
                              0 === (i = r.data).code &&
                                t.invalidateQueries({
                                  queryKey: ['listTenantUser'],
                                }),
                              e.abrupt('return', null == i ? void 0 : i.code)
                            );
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (n) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: a.data,
            loading: a.isPending,
            addTenantUser: a.mutateAsync,
          };
        },
        L = function () {
          var e,
            n = _().data,
            t = (0, m.NL)(),
            a = (0, A.$G)().t,
            r = (0, p.D)({
              mutationKey: ['deleteTenantUser'],
              mutationFn:
                ((e = l()(
                  o()().mark(function e(r) {
                    var i, s, l, c, d;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (s = r.userId),
                              (l = r.tenantId),
                              (e.next = 3),
                              (0, u.EE)({
                                tenantId: null != l ? l : n.tenant_id,
                                userId: s,
                              })
                            );
                          case 3:
                            return (
                              (c = e.sent),
                              0 === (d = c.data).code &&
                                (h.ZP.success(a('message.deleted')),
                                t.invalidateQueries({
                                  queryKey: ['listTenantUser'],
                                }),
                                t.invalidateQueries({
                                  queryKey: ['listTenant'],
                                })),
                              e.abrupt(
                                'return',
                                null !== (i = null == d ? void 0 : d.data) &&
                                  void 0 !== i
                                  ? i
                                  : [],
                              )
                            );
                          case 7:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (n) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: r.data,
            loading: r.isPending,
            deleteTenantUser: r.mutateAsync,
          };
        },
        K = function () {
          var e,
            n = _().data.tenant_id,
            t = (0, d.a)({
              queryKey: ['listTenant', n],
              initialData: [],
              gcTime: 0,
              enabled: !!n,
              queryFn:
                ((e = l()(
                  o()().mark(function e() {
                    var n, t, a;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), (0, u.vh)();
                          case 2:
                            return (
                              (t = e.sent),
                              (a = t.data),
                              e.abrupt(
                                'return',
                                null !== (n = null == a ? void 0 : a.data) &&
                                  void 0 !== n
                                  ? n
                                  : [],
                              )
                            );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            });
          return { data: t.data, loading: t.isFetching, refetch: t.refetch };
        },
        q = function () {
          var e,
            n = (0, m.NL)(),
            t = (0, A.$G)().t,
            a = (0, p.D)({
              mutationKey: ['agreeTenant'],
              mutationFn:
                ((e = l()(
                  o()().mark(function e(a) {
                    var r, i, s;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), (0, u.FG)(a);
                          case 2:
                            return (
                              (i = e.sent),
                              0 === (s = i.data).code &&
                                (h.ZP.success(t('message.operated')),
                                n.invalidateQueries({
                                  queryKey: ['listTenant'],
                                })),
                              e.abrupt(
                                'return',
                                null !== (r = null == s ? void 0 : s.data) &&
                                  void 0 !== r
                                  ? r
                                  : [],
                              )
                            );
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (n) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: a.data,
            loading: a.isPending,
            agreeTenant: a.mutateAsync,
          };
        },
        E = function () {
          var e,
            n = (0, A.$G)().t,
            t = (0, p.D)({
              mutationKey: ['setLangfuseConfig'],
              mutationFn:
                ((e = l()(
                  o()().mark(function e(t) {
                    var a, r;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), u.ZP.setLangfuseConfig(t);
                          case 2:
                            return (
                              (a = e.sent),
                              0 === (r = a.data).code &&
                                h.ZP.success(n('message.operated')),
                              e.abrupt('return', null == r ? void 0 : r.code)
                            );
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function (n) {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: t.data,
            loading: t.isPending,
            setLangfuseConfig: t.mutateAsync,
          };
        },
        D = function () {
          var e,
            n = (0, A.$G)().t,
            t = (0, p.D)({
              mutationKey: ['deleteLangfuseConfig'],
              mutationFn:
                ((e = l()(
                  o()().mark(function e() {
                    var t, a;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), u.ZP.deleteLangfuseConfig();
                          case 2:
                            return (
                              (t = e.sent),
                              0 === (a = t.data).code &&
                                h.ZP.success(n('message.deleted')),
                              e.abrupt('return', null == a ? void 0 : a.code)
                            );
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            });
          return {
            data: t.data,
            loading: t.isPending,
            deleteLangfuseConfig: t.mutateAsync,
          };
        },
        O = function () {
          var e,
            n = (0, d.a)({
              queryKey: ['fetchLangfuseConfig'],
              gcTime: 0,
              queryFn:
                ((e = l()(
                  o()().mark(function e() {
                    var n, t;
                    return o()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), u.ZP.getLangfuseConfig();
                          case 2:
                            return (
                              (n = e.sent),
                              (t = n.data),
                              e.abrupt('return', null == t ? void 0 : t.data)
                            );
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            });
          return { data: n.data, loading: n.isFetching };
        };
    },
    15112: function (e, n, t) {
      'use strict';
      var a = t(86968),
        r = t(42952),
        i = t(22850),
        o = t(86250),
        s = t(15867),
        l = t(86074),
        c = i.Z.Title,
        u = i.Z.Paragraph;
      n.Z = function (e) {
        var n = e.title,
          t = e.description,
          i = e.clickButton,
          d = e.showRightButton,
          m = void 0 !== d && d,
          p = (0, a.qM)('setting').t;
        return (0, l.jsxs)(o.Z, {
          align: 'center',
          justify: 'space-between',
          children: [
            (0, l.jsxs)('div', {
              children: [
                (0, l.jsx)(c, { level: 5, children: n }),
                (0, l.jsx)(u, { children: t }),
              ],
            }),
            m &&
              (0, l.jsx)(s.ZP, {
                type: 'primary',
                onClick: i,
                children: (0, l.jsxs)(o.Z, {
                  align: 'center',
                  gap: 4,
                  children: [(0, l.jsx)(r.Z, {}), p('systemModelSettings')],
                }),
              }),
          ],
        });
      };
    },
    73828: function (e, n, t) {
      'use strict';
      t.d(n, {
        Dr: function () {
          return u;
        },
        H7: function () {
          return s.H7;
        },
        at: function () {
          return d;
        },
        qh: function () {
          return s.qh;
        },
        rQ: function () {
          return s.rQ;
        },
        z7: function () {
          return m;
        },
      });
      var a = t(9783),
        r = t.n(a),
        i = t(38520),
        o = t(39386),
        s = t(9450),
        l = t(70101),
        c = t(86074),
        u = r()(
          r()(
            r()(
              r()(
                r()(
                  r()(
                    r()({}, s.qh.Profile, (0, c.jsx)(i.m2, {})),
                    s.qh.Password,
                    (0, c.jsx)(i.CW, {}),
                  ),
                  s.qh.Model,
                  (0, c.jsx)(i.eS, {}),
                ),
                s.qh.System,
                (0, c.jsx)(l.Z, { style: { fontSize: 24 } }),
              ),
              s.qh.Team,
              (0, c.jsx)(i.Ww, {}),
            ),
            s.qh.Logout,
            (0, c.jsx)(i.Hl, {}),
          ),
          s.qh.Api,
          (0, c.jsx)(i.Fg, {}),
        ),
        d = [
          o.Q.Ollama,
          o.Q.Xinference,
          o.Q.LocalAI,
          o.Q.LMStudio,
          o.Q.OpenAiAPICompatible,
          o.Q.TogetherAI,
          o.Q.Replicate,
          o.Q.OpenRouter,
          o.Q.HuggingFace,
          o.Q.GPUStack,
          o.Q.ModelScope,
          o.Q.VLLM,
        ],
        m = (function (e) {
          return (
            (e.Owner = 'owner'), (e.Invite = 'invite'), (e.Normal = 'normal'), e
          );
        })({});
    },
    596: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          default: function () {
            return Ge;
          },
        });
      var a = t(9783),
        r = t.n(a),
        i = t(62435),
        o = Object.defineProperty,
        s = Object.getOwnPropertySymbols,
        l = Object.prototype.hasOwnProperty,
        c = Object.prototype.propertyIsEnumerable,
        u = (e, n, t) =>
          n in e
            ? o(e, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (e[n] = t);
      const d = (e) =>
        i.createElement(
          'svg',
          ((e, n) => {
            for (var t in n || (n = {})) l.call(n, t) && u(e, t, n[t]);
            if (s) for (var t of s(n)) c.call(n, t) && u(e, t, n[t]);
            return e;
          })(
            {
              width: 20,
              height: 20,
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            e,
          ),
          i.createElement('path', {
            d: 'M17.667 18.334c.233 0 .35 0 .439-.046a.416.416 0 0 0 .182-.182c.045-.089.045-.206.045-.439V9c0-.233 0-.35-.045-.439a.416.416 0 0 0-.182-.182c-.09-.045-.206-.045-.44-.045h-2c-.233 0-.35 0-.439.045a.417.417 0 0 0-.182.182c-.045.09-.045.206-.045.44v2c0 .233 0 .35-.045.439a.417.417 0 0 1-.182.182c-.09.045-.206.045-.44.045h-2c-.233 0-.35 0-.439.045a.417.417 0 0 0-.182.183c-.045.089-.045.205-.045.439v2c0 .233 0 .35-.046.439a.417.417 0 0 1-.182.182C11.35 15 11.233 15 11 15H9c-.233 0-.35 0-.44.046a.417.417 0 0 0-.181.182c-.046.089-.046.206-.046.439v2c0 .233 0 .35.046.44.04.078.103.141.182.181.089.046.206.046.439.046h8.667ZM8.333 5.667c0-.233 0-.35.046-.44a.417.417 0 0 1 .182-.181C8.65 5 8.767 5 9 5h2c.233 0 .35 0 .44.046.078.04.141.103.181.182.046.089.046.206.046.439v2c0 .233 0 .35-.046.44a.417.417 0 0 1-.182.181c-.089.046-.206.046-.439.046H9c-.233 0-.35 0-.44-.046a.417.417 0 0 1-.181-.182c-.046-.089-.046-.206-.046-.439v-2ZM2.5 10.667c0-.233 0-.35.045-.44a.417.417 0 0 1 .183-.181C2.817 10 2.933 10 3.167 10h2c.233 0 .35 0 .439.046.078.04.142.103.182.182.045.089.045.206.045.439v2c0 .233 0 .35-.045.44a.416.416 0 0 1-.182.181c-.09.046-.206.046-.44.046h-2c-.233 0-.35 0-.438-.046a.416.416 0 0 1-.183-.182c-.045-.089-.045-.206-.045-.439v-2ZM1.667 2.334c0-.234 0-.35.045-.44a.417.417 0 0 1 .182-.182c.09-.045.206-.045.44-.045h2c.233 0 .35 0 .439.045.078.04.142.104.182.183C5 1.984 5 2.1 5 2.333v2c0 .233 0 .35-.045.439a.417.417 0 0 1-.182.182C4.683 5 4.567 5 4.333 5h-2c-.233 0-.35 0-.439-.045a.417.417 0 0 1-.182-.182c-.045-.09-.045-.206-.045-.44v-2Z',
            stroke: '#98A2B3',
            strokeWidth: 1.2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }),
        );
      var m,
        p = t(46693),
        g = t(98236),
        h = t(39386),
        f = t(86968),
        T = t(38392),
        v = t(33092),
        C = t(42952),
        A = t(18429),
        k = t(22850),
        y = t(2487),
        x = t(4393),
        _ = t(71230),
        U = t(15746),
        b = t(86250),
        M = t(42075),
        Z = t(15867),
        j = t(66309),
        w = t(83062),
        S = t(96074),
        P = t(75081),
        I = t(47221),
        F = t(1211),
        L = t(15112),
        K = t(73828),
        q = function (e) {
          return K.at.some(function (n) {
            return n === e;
          });
        },
        E = t(15009),
        D = t.n(E),
        O = t(97857),
        V = t.n(O),
        B = t(99289),
        G = t.n(B),
        N = t(5574),
        Q = t.n(N),
        H = t(34041),
        z = t(22150),
        R = t(85576),
        W = t(79531),
        Y = t(57557),
        J = t.n(Y),
        X = t(86074),
        $ = H.Z.Option,
        ee = function (e) {
          var n = e.visible,
            t = e.hideModal,
            a = e.onOk,
            r = e.loading,
            i = e.llmFactory,
            o = z.Z.useForm(),
            s = Q()(o, 1)[0],
            l = (0, f.qM)('setting').t,
            c = (function () {
              var e = G()(
                D()().mark(function e() {
                  var n, t, r;
                  return D()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), s.validateFields();
                        case 2:
                          (n = e.sent),
                            (t = n.model_type),
                            (r = V()(
                              V()({}, J()(n)),
                              {},
                              {
                                model_type: t,
                                llm_factory: i,
                                max_tokens: 16e3,
                              },
                            )),
                            console.info(r),
                            null == a || a(r);
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            u = (function () {
              var e = G()(
                D()().mark(function e(n) {
                  return D()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ('Enter' !== n.key) {
                            e.next = 3;
                            break;
                          }
                          return (e.next = 3), c();
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return (0, X.jsx)(R.Z, {
            title: l('addLlmTitle', { name: i }),
            open: n,
            onOk: c,
            onCancel: t,
            okButtonProps: { loading: r },
            footer: function (e) {
              return (0, X.jsxs)(b.Z, {
                justify: 'space-between',
                children: [
                  (0, X.jsx)('a', {
                    href: 'https://cloud.tencent.com/document/api/1093/37823',
                    target: '_blank',
                    rel: 'noreferrer',
                    children: l('TencentCloudLink'),
                  }),
                  (0, X.jsx)(M.Z, { children: e }),
                ],
              });
            },
            confirmLoading: r,
            children: (0, X.jsxs)(z.Z, {
              children: [
                (0, X.jsx)(z.Z.Item, {
                  label: l('modelType'),
                  name: 'model_type',
                  initialValue: 'speech2text',
                  rules: [{ required: !0, message: l('modelTypeMessage') }],
                  children: (0, X.jsx)(H.Z, {
                    placeholder: l('modelTypeMessage'),
                    children: (0, X.jsx)($, {
                      value: 'speech2text',
                      children: 'speech2text',
                    }),
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('modelName'),
                  name: 'llm_name',
                  initialValue: '16k_zh',
                  rules: [
                    { required: !0, message: l('SparkModelNameMessage') },
                  ],
                  children: (0, X.jsxs)(H.Z, {
                    placeholder: l('modelTypeMessage'),
                    children: [
                      (0, X.jsx)($, { value: '16k_zh', children: '16k_zh' }),
                      (0, X.jsx)($, {
                        value: '16k_zh_large',
                        children: '16k_zh_large',
                      }),
                      (0, X.jsx)($, {
                        value: '16k_multi_lang',
                        children: '16k_multi_lang',
                      }),
                      (0, X.jsx)($, {
                        value: '16k_zh_dialect',
                        children: '16k_zh_dialect',
                      }),
                      (0, X.jsx)($, { value: '16k_en', children: '16k_en' }),
                      (0, X.jsx)($, { value: '16k_yue', children: '16k_yue' }),
                      (0, X.jsx)($, {
                        value: '16k_zh-PY',
                        children: '16k_zh-PY',
                      }),
                      (0, X.jsx)($, { value: '16k_ja', children: '16k_ja' }),
                      (0, X.jsx)($, { value: '16k_ko', children: '16k_ko' }),
                      (0, X.jsx)($, { value: '16k_vi', children: '16k_vi' }),
                      (0, X.jsx)($, { value: '16k_ms', children: '16k_ms' }),
                      (0, X.jsx)($, { value: '16k_id', children: '16k_id' }),
                      (0, X.jsx)($, { value: '16k_fil', children: '16k_fil' }),
                      (0, X.jsx)($, { value: '16k_th', children: '16k_th' }),
                      (0, X.jsx)($, { value: '16k_pt', children: '16k_pt' }),
                      (0, X.jsx)($, { value: '16k_tr', children: '16k_tr' }),
                      (0, X.jsx)($, { value: '16k_ar', children: '16k_ar' }),
                      (0, X.jsx)($, { value: '16k_es', children: '16k_es' }),
                      (0, X.jsx)($, { value: '16k_hi', children: '16k_hi' }),
                      (0, X.jsx)($, { value: '16k_fr', children: '16k_fr' }),
                      (0, X.jsx)($, {
                        value: '16k_zh_medical',
                        children: '16k_zh_medical',
                      }),
                      (0, X.jsx)($, { value: '16k_de', children: '16k_de' }),
                    ],
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('addTencentCloudSID'),
                  name: 'TencentCloud_sid',
                  rules: [
                    { required: !0, message: l('TencentCloudSIDMessage') },
                  ],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('TencentCloudSIDMessage'),
                    onKeyDown: u,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('addTencentCloudSK'),
                  name: 'TencentCloud_sk',
                  rules: [
                    { required: !0, message: l('TencentCloudSKMessage') },
                  ],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('TencentCloudSKMessage'),
                    onKeyDown: u,
                  }),
                }),
              ],
            }),
          });
        },
        ne = [h.Q.OpenAI, h.Q.AzureOpenAI],
        te = function (e) {
          var n = e.visible,
            t = e.hideModal,
            a = e.llmFactory,
            r = e.loading,
            o = e.initialValue,
            s = e.onOk,
            l = z.Z.useForm(),
            c = Q()(l, 1)[0],
            u = (0, f.qM)('setting').t,
            d = (function () {
              var e = G()(
                D()().mark(function e() {
                  var n;
                  return D()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), c.validateFields();
                        case 2:
                          return (n = e.sent), e.abrupt('return', s(n));
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            m = (function () {
              var e = G()(
                D()().mark(function e(n) {
                  return D()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ('Enter' !== n.key) {
                            e.next = 3;
                            break;
                          }
                          return (e.next = 3), d();
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return (
            (0, i.useEffect)(
              function () {
                n && c.setFieldValue('api_key', o);
              },
              [o, c, n],
            ),
            (0, X.jsx)(R.Z, {
              title: u('modify'),
              open: n,
              onOk: d,
              onCancel: t,
              okButtonProps: { loading: r },
              confirmLoading: r,
              children: (0, X.jsxs)(z.Z, {
                name: 'basic',
                labelCol: { span: 6 },
                wrapperCol: { span: 18 },
                style: { maxWidth: 600 },
                autoComplete: 'off',
                form: c,
                children: [
                  (0, X.jsx)(z.Z.Item, {
                    label: u('apiKey'),
                    name: 'api_key',
                    tooltip: u('apiKeyTip'),
                    rules: [{ required: !0, message: u('apiKeyMessage') }],
                    children: (0, X.jsx)(W.Z, { onKeyDown: m }),
                  }),
                  ne.some(function (e) {
                    return e === a;
                  }) &&
                    (0, X.jsx)(z.Z.Item, {
                      label: u('baseUrl'),
                      name: 'base_url',
                      tooltip: u('baseUrlTip'),
                      children: (0, X.jsx)(W.Z, {
                        placeholder: 'https://api.openai.com/v1',
                        onKeyDown: m,
                      }),
                    }),
                  (null == a ? void 0 : a.toLowerCase()) ===
                    'Minimax'.toLowerCase() &&
                    (0, X.jsx)(z.Z.Item, {
                      label: 'Group ID',
                      name: 'group_id',
                      children: (0, X.jsx)(W.Z, {}),
                    }),
                ],
              }),
            })
          );
        },
        ae = t(48928),
        re = t(72269),
        ie = H.Z.Option,
        oe = function (e) {
          var n = e.visible,
            t = e.hideModal,
            a = e.onOk,
            r = e.loading,
            i = e.llmFactory,
            o = z.Z.useForm(),
            s = Q()(o, 1)[0],
            l = (0, f.qM)('setting').t,
            c = (function () {
              var e = G()(
                D()().mark(function e() {
                  var n, t, r;
                  return D()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), s.validateFields();
                        case 2:
                          (n = e.sent),
                            (t =
                              'chat' === n.model_type && n.vision
                                ? 'image2text'
                                : n.model_type),
                            (r = V()(
                              V()({}, J()(n, ['vision'])),
                              {},
                              {
                                model_type: t,
                                llm_factory: i,
                                max_tokens: n.max_tokens,
                              },
                            )),
                            console.info(r),
                            null == a || a(r);
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            u = [
              { value: 'chat', label: 'chat' },
              { value: 'embedding', label: 'embedding' },
              { value: 'image2text', label: 'image2text' },
            ],
            d = (function () {
              var e = G()(
                D()().mark(function e(n) {
                  return D()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ('Enter' !== n.key) {
                            e.next = 3;
                            break;
                          }
                          return (e.next = 3), c();
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return (0, X.jsx)(R.Z, {
            title: l('addLlmTitle', { name: i }),
            open: n,
            onOk: c,
            onCancel: t,
            okButtonProps: { loading: r },
            children: (0, X.jsxs)(z.Z, {
              name: 'basic',
              style: { maxWidth: 600 },
              autoComplete: 'off',
              layout: 'vertical',
              form: s,
              children: [
                (0, X.jsx)(z.Z.Item, {
                  label: l('modelType'),
                  name: 'model_type',
                  initialValue: 'embedding',
                  rules: [{ required: !0, message: l('modelTypeMessage') }],
                  children: (0, X.jsx)(H.Z, {
                    placeholder: l('modelTypeMessage'),
                    children: u.map(function (e) {
                      return (0, X.jsx)(
                        ie,
                        { value: e.value, children: e.label },
                        e.value,
                      );
                    }),
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('addLlmBaseUrl'),
                  name: 'api_base',
                  rules: [{ required: !0, message: l('baseUrlNameMessage') }],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('baseUrlNameMessage'),
                    onKeyDown: d,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('apiKey'),
                  name: 'api_key',
                  rules: [{ required: !1, message: l('apiKeyMessage') }],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('apiKeyMessage'),
                    onKeyDown: d,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('modelName'),
                  name: 'llm_name',
                  initialValue: 'gpt-3.5-turbo',
                  rules: [{ required: !0, message: l('modelNameMessage') }],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('modelNameMessage'),
                    onKeyDown: d,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('apiVersion'),
                  name: 'api_version',
                  initialValue: '2024-02-01',
                  rules: [{ required: !1, message: l('apiVersionMessage') }],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('apiVersionMessage'),
                    onKeyDown: d,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('maxTokens'),
                  name: 'max_tokens',
                  rules: [
                    { required: !0, message: l('maxTokensMessage') },
                    { type: 'number', message: l('maxTokensInvalidMessage') },
                    function (e) {
                      e.getFieldValue;
                      return {
                        validator: function (e, n) {
                          return n < 0
                            ? Promise.reject(
                                new Error(l('maxTokensMinMessage')),
                              )
                            : Promise.resolve();
                        },
                      };
                    },
                  ],
                  children: (0, X.jsx)(ae.Z, {
                    placeholder: l('maxTokensTip'),
                    style: { width: '100%' },
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  noStyle: !0,
                  dependencies: ['model_type'],
                  children: function (e) {
                    return (
                      'chat' === (0, e.getFieldValue)('model_type') &&
                      (0, X.jsx)(z.Z.Item, {
                        label: l('vision'),
                        valuePropName: 'checked',
                        name: 'vision',
                        children: (0, X.jsx)(re.Z, {}),
                      })
                    );
                  },
                }),
              ],
            }),
          });
        },
        se = [
          'us-east-1',
          'us-west-2',
          'ap-southeast-1',
          'ap-northeast-1',
          'eu-central-1',
          'us-gov-west-1',
          'ap-southeast-2',
        ],
        le = H.Z.Option,
        ce = function (e) {
          var n = e.visible,
            t = e.hideModal,
            a = e.onOk,
            r = e.loading,
            o = e.llmFactory,
            s = z.Z.useForm(),
            l = Q()(s, 1)[0],
            c = (0, f.qM)('setting').t,
            u = (0, i.useMemo)(
              function () {
                return se.map(function (e) {
                  return { value: e, label: c(e) };
                });
              },
              [c],
            ),
            d = (function () {
              var e = G()(
                D()().mark(function e() {
                  var n, t;
                  return D()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), l.validateFields();
                        case 2:
                          (n = e.sent),
                            (t = V()(
                              V()({}, n),
                              {},
                              { llm_factory: o, max_tokens: n.max_tokens },
                            )),
                            null == a || a(t);
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (0, X.jsx)(R.Z, {
            title: c('addLlmTitle', { name: o }),
            open: n,
            onOk: d,
            onCancel: t,
            okButtonProps: { loading: r },
            footer: function (e) {
              return (0, X.jsxs)(b.Z, {
                justify: 'space-between',
                children: [
                  (0, X.jsx)('a', {
                    href: 'https://console.aws.amazon.com/',
                    target: '_blank',
                    rel: 'noreferrer',
                    children: c('ollamaLink', { name: o }),
                  }),
                  (0, X.jsx)(M.Z, { children: e }),
                ],
              });
            },
            children: (0, X.jsxs)(z.Z, {
              name: 'basic',
              style: { maxWidth: 600 },
              autoComplete: 'off',
              layout: 'vertical',
              form: l,
              children: [
                (0, X.jsx)(z.Z.Item, {
                  label: c('modelType'),
                  name: 'model_type',
                  initialValue: 'chat',
                  rules: [{ required: !0, message: c('modelTypeMessage') }],
                  children: (0, X.jsxs)(H.Z, {
                    placeholder: c('modelTypeMessage'),
                    children: [
                      (0, X.jsx)(le, { value: 'chat', children: 'chat' }),
                      (0, X.jsx)(le, {
                        value: 'embedding',
                        children: 'embedding',
                      }),
                    ],
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: c('modelName'),
                  name: 'llm_name',
                  rules: [
                    { required: !0, message: c('bedrockModelNameMessage') },
                  ],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: c('bedrockModelNameMessage'),
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: c('addBedrockEngineAK'),
                  name: 'bedrock_ak',
                  rules: [{ required: !0, message: c('bedrockAKMessage') }],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: c('bedrockAKMessage'),
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: c('addBedrockSK'),
                  name: 'bedrock_sk',
                  rules: [{ required: !0, message: c('bedrockSKMessage') }],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: c('bedrockSKMessage'),
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: c('bedrockRegion'),
                  name: 'bedrock_region',
                  rules: [{ required: !0, message: c('bedrockRegionMessage') }],
                  children: (0, X.jsx)(H.Z, {
                    placeholder: c('bedrockRegionMessage'),
                    options: u,
                    allowClear: !0,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: c('maxTokens'),
                  name: 'max_tokens',
                  rules: [
                    { required: !0, message: c('maxTokensMessage') },
                    { type: 'number', message: c('maxTokensInvalidMessage') },
                    function (e) {
                      e.getFieldValue;
                      return {
                        validator: function (e, n) {
                          return n < 0
                            ? Promise.reject(
                                new Error(c('maxTokensMinMessage')),
                              )
                            : Promise.resolve();
                        },
                      };
                    },
                  ],
                  children: (0, X.jsx)(ae.Z, {
                    placeholder: c('maxTokensTip'),
                    style: { width: '100%' },
                  }),
                }),
              ],
            }),
          });
        },
        ue = H.Z.Option,
        de = function (e) {
          var n = e.visible,
            t = e.hideModal,
            a = e.onOk,
            r = e.loading,
            i = e.llmFactory,
            o = z.Z.useForm(),
            s = Q()(o, 1)[0],
            l = (0, f.qM)('setting').t,
            c = (function () {
              var e = G()(
                D()().mark(function e() {
                  var n, t, r;
                  return D()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), s.validateFields();
                        case 2:
                          (n = e.sent),
                            (t = n.model_type),
                            (r = V()(
                              V()({}, J()(n)),
                              {},
                              {
                                model_type: t,
                                llm_factory: i,
                                max_tokens: n.max_tokens,
                              },
                            )),
                            console.info(r),
                            null == a || a(r);
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (0, X.jsx)(R.Z, {
            title: l('addLlmTitle', { name: i }),
            open: n,
            onOk: c,
            onCancel: t,
            okButtonProps: { loading: r },
            footer: function (e) {
              return (0, X.jsxs)(b.Z, {
                justify: 'space-between',
                children: [
                  (0, X.jsx)('a', {
                    href: 'https://fish.audio',
                    target: '_blank',
                    rel: 'noreferrer',
                    children: l('FishAudioLink'),
                  }),
                  (0, X.jsx)(M.Z, { children: e }),
                ],
              });
            },
            confirmLoading: r,
            children: (0, X.jsxs)(z.Z, {
              name: 'basic',
              style: { maxWidth: 600 },
              autoComplete: 'off',
              layout: 'vertical',
              form: s,
              children: [
                (0, X.jsx)(z.Z.Item, {
                  label: l('modelType'),
                  name: 'model_type',
                  initialValue: 'tts',
                  rules: [{ required: !0, message: l('modelTypeMessage') }],
                  children: (0, X.jsx)(H.Z, {
                    placeholder: l('modelTypeMessage'),
                    children: (0, X.jsx)(ue, { value: 'tts', children: 'tts' }),
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('modelName'),
                  name: 'llm_name',
                  rules: [
                    { required: !0, message: l('FishAudioModelNameMessage') },
                  ],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('FishAudioModelNameMessage'),
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('addFishAudioAK'),
                  name: 'fish_audio_ak',
                  rules: [{ required: !0, message: l('FishAudioAKMessage') }],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('FishAudioAKMessage'),
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('addFishAudioRefID'),
                  name: 'fish_audio_refid',
                  rules: [
                    { required: !0, message: l('FishAudioRefIDMessage') },
                  ],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('FishAudioRefIDMessage'),
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('maxTokens'),
                  name: 'max_tokens',
                  rules: [
                    { required: !0, message: l('maxTokensMessage') },
                    { type: 'number', message: l('maxTokensInvalidMessage') },
                    function (e) {
                      e.getFieldValue;
                      return {
                        validator: function (e, n) {
                          return n < 0
                            ? Promise.reject(
                                new Error(l('maxTokensMinMessage')),
                              )
                            : Promise.resolve();
                        },
                      };
                    },
                  ],
                  children: (0, X.jsx)(ae.Z, {
                    placeholder: l('maxTokensTip'),
                    style: { width: '100%' },
                  }),
                }),
              ],
            }),
          });
        },
        me = H.Z.Option,
        pe = function (e) {
          var n = e.visible,
            t = e.hideModal,
            a = e.onOk,
            r = e.loading,
            i = e.llmFactory,
            o = z.Z.useForm(),
            s = Q()(o, 1)[0],
            l = (0, f.qM)('setting').t,
            c = (function () {
              var e = G()(
                D()().mark(function e() {
                  var n, t;
                  return D()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), s.validateFields();
                        case 2:
                          (n = e.sent),
                            (t = V()(
                              V()({}, n),
                              {},
                              { llm_factory: i, max_tokens: n.max_tokens },
                            )),
                            null == a || a(t);
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            u = (function () {
              var e = G()(
                D()().mark(function e(n) {
                  return D()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ('Enter' !== n.key) {
                            e.next = 3;
                            break;
                          }
                          return (e.next = 3), c();
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return (0, X.jsx)(R.Z, {
            title: l('addLlmTitle', { name: i }),
            open: n,
            onOk: c,
            onCancel: t,
            okButtonProps: { loading: r },
            children: (0, X.jsxs)(z.Z, {
              children: [
                (0, X.jsx)(z.Z.Item, {
                  label: l('modelType'),
                  name: 'model_type',
                  initialValue: 'chat',
                  rules: [{ required: !0, message: l('modelTypeMessage') }],
                  children: (0, X.jsx)(H.Z, {
                    placeholder: l('modelTypeMessage'),
                    children: (0, X.jsx)(me, {
                      value: 'chat',
                      children: 'chat',
                    }),
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('modelID'),
                  name: 'llm_name',
                  rules: [{ required: !0, message: l('GoogleModelIDMessage') }],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('GoogleModelIDMessage'),
                    onKeyDown: u,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('addGoogleProjectID'),
                  name: 'google_project_id',
                  rules: [
                    { required: !0, message: l('GoogleProjectIDMessage') },
                  ],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('GoogleProjectIDMessage'),
                    onKeyDown: u,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('addGoogleRegion'),
                  name: 'google_region',
                  rules: [{ required: !0, message: l('GoogleRegionMessage') }],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('GoogleRegionMessage'),
                    onKeyDown: u,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('addGoogleServiceAccountKey'),
                  name: 'google_service_account_key',
                  rules: [
                    {
                      required: !0,
                      message: l('GoogleServiceAccountKeyMessage'),
                    },
                  ],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('GoogleServiceAccountKeyMessage'),
                    onKeyDown: u,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('maxTokens'),
                  name: 'max_tokens',
                  rules: [
                    { required: !0, message: l('maxTokensMessage') },
                    { type: 'number', message: l('maxTokensInvalidMessage') },
                    function (e) {
                      e.getFieldValue;
                      return {
                        validator: function (e, n) {
                          return n < 0
                            ? Promise.reject(
                                new Error(l('maxTokensMinMessage')),
                              )
                            : Promise.resolve();
                        },
                      };
                    },
                  ],
                  children: (0, X.jsx)(ae.Z, {
                    placeholder: l('maxTokensTip'),
                    style: { width: '100%' },
                  }),
                }),
              ],
            }),
          });
        },
        ge = t(39259),
        he =
          (H.Z.Option,
          function (e) {
            var n = e.visible,
              t = e.hideModal,
              a = e.onOk,
              r = e.loading,
              i = e.llmFactory,
              o = z.Z.useForm(),
              s = Q()(o, 1)[0],
              l = (0, f.qM)('setting').t,
              c = (function () {
                var e = G()(
                  D()().mark(function e() {
                    var n, t, r;
                    return D()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), s.validateFields();
                          case 2:
                            (n = e.sent),
                              (t =
                                'chat' === n.model_type && n.vision
                                  ? 'image2text'
                                  : n.model_type),
                              (r = V()(
                                V()({}, J()(n, ['vision'])),
                                {},
                                { model_type: t, llm_factory: i },
                              )),
                              console.info(r),
                              null == a || a(r);
                          case 7:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              u = (function () {
                var e = G()(
                  D()().mark(function e(n) {
                    return D()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ('Enter' !== n.key) {
                              e.next = 3;
                              break;
                            }
                            return (e.next = 3), c();
                          case 3:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })();
            return (0, X.jsx)(R.Z, {
              title: l('addLlmTitle', { name: i }),
              open: n,
              onOk: c,
              onCancel: t,
              okButtonProps: { loading: r },
              confirmLoading: r,
              children: (0, X.jsxs)(z.Z, {
                name: 'basic',
                style: { maxWidth: 600 },
                autoComplete: 'off',
                layout: 'vertical',
                form: s,
                children: [
                  (0, X.jsx)(z.Z.Item, {
                    label: l('addHunyuanSID'),
                    name: 'hunyuan_sid',
                    rules: [{ required: !0, message: l('HunyuanSIDMessage') }],
                    children: (0, X.jsx)(W.Z, {
                      placeholder: l('HunyuanSIDMessage'),
                      onKeyDown: u,
                    }),
                  }),
                  (0, X.jsx)(z.Z.Item, {
                    label: l('addHunyuanSK'),
                    name: 'hunyuan_sk',
                    rules: [{ required: !0, message: l('HunyuanSKMessage') }],
                    children: (0, X.jsx)(W.Z, {
                      placeholder: l('HunyuanSKMessage'),
                      onKeyDown: u,
                    }),
                  }),
                ],
              }),
            });
          }),
        fe = 'modelContainer___4mtpv',
        Te = 'factoryOperationWrapper___a81tC',
        ve = 'llmList___HikAV',
        Ce = 'toBeAddedCard___GDSNv',
        Ae = 'addButton___svc17',
        ke = 'toBeAddedCardDark___jzF6r',
        ye = 'addedCard___Rpr3p',
        xe = 'addedCardDark___v7dR4',
        _e = 'modelDivider___tQvoh',
        Ue = 'modelTags___jMkaX',
        be = t(49677),
        Me = t.n(be),
        Ze = H.Z.Option,
        je =
          ((m = {}),
          r()(
            r()(
              r()(
                r()(
                  r()(
                    r()(
                      r()(
                        r()(
                          r()(
                            r()(
                              m,
                              h.Q.Ollama,
                              'https://github.com/infiniflow/ragflow/blob/main/docs/guides/models/deploy_local_llm.mdx',
                            ),
                            h.Q.Xinference,
                            'https://inference.readthedocs.io/en/latest/user_guide',
                          ),
                          h.Q.ModelScope,
                          'https://www.modelscope.cn/docs/model-service/API-Inference/intro',
                        ),
                        h.Q.LocalAI,
                        'https://localai.io/docs/getting-started/models/',
                      ),
                      h.Q.LMStudio,
                      'https://lmstudio.ai/docs/basics',
                    ),
                    h.Q.OpenAiAPICompatible,
                    'https://platform.openai.com/docs/models/gpt-4',
                  ),
                  h.Q.TogetherAI,
                  'https://docs.together.ai/docs/deployment-options',
                ),
                h.Q.Replicate,
                'https://replicate.com/docs/topics/deployments',
              ),
              h.Q.OpenRouter,
              'https://openrouter.ai/docs',
            ),
            h.Q.HuggingFace,
            'https://huggingface.co/docs/text-embeddings-inference/quick_tour',
          ),
          r()(
            r()(m, h.Q.GPUStack, 'https://docs.gpustack.ai/latest/quickstart'),
            h.Q.VLLM,
            'https://docs.vllm.ai/en/latest/',
          )),
        we = function (e) {
          var n,
            t = e.visible,
            a = e.hideModal,
            i = e.onOk,
            o = e.loading,
            s = e.llmFactory,
            l = z.Z.useForm(),
            c = Q()(l, 1)[0],
            u = (0, f.qM)('setting').t,
            d = (function () {
              var e = G()(
                D()().mark(function e(n) {
                  return D()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ('Enter' !== n.key) {
                            e.next = 3;
                            break;
                          }
                          return (e.next = 3), m();
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            m = (function () {
              var e = G()(
                D()().mark(function e() {
                  var n, t, a;
                  return D()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), c.validateFields();
                        case 2:
                          (n = e.sent),
                            (t =
                              'chat' === n.model_type && n.vision
                                ? 'image2text'
                                : n.model_type),
                            (a = V()(
                              V()({}, J()(n, ['vision'])),
                              {},
                              {
                                model_type: t,
                                llm_factory: s,
                                max_tokens: n.max_tokens,
                              },
                            )),
                            console.info(a),
                            null == i || i(a);
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            p =
              je[s] ||
              'https://github.com/infiniflow/ragflow/blob/main/docs/guides/models/deploy_local_llm.mdx',
            g = r()(
              r()(
                r()(
                  r()(
                    r()({}, h.Q.HuggingFace, [
                      { value: 'embedding', label: 'embedding' },
                      { value: 'chat', label: 'chat' },
                      { value: 'rerank', label: 'rerank' },
                    ]),
                    h.Q.Xinference,
                    [
                      { value: 'chat', label: 'chat' },
                      { value: 'embedding', label: 'embedding' },
                      { value: 'rerank', label: 'rerank' },
                      { value: 'image2text', label: 'image2text' },
                      { value: 'speech2text', label: 'sequence2text' },
                      { value: 'tts', label: 'tts' },
                    ],
                  ),
                  h.Q.ModelScope,
                  [{ value: 'chat', label: 'chat' }],
                ),
                h.Q.GPUStack,
                [
                  { value: 'chat', label: 'chat' },
                  { value: 'embedding', label: 'embedding' },
                  { value: 'rerank', label: 'rerank' },
                  { value: 'speech2text', label: 'sequence2text' },
                  { value: 'tts', label: 'tts' },
                ],
              ),
              'Default',
              [
                { value: 'chat', label: 'chat' },
                { value: 'embedding', label: 'embedding' },
                { value: 'rerank', label: 'rerank' },
                { value: 'image2text', label: 'image2text' },
              ],
            );
          return (0, X.jsx)(R.Z, {
            title: u('addLlmTitle', { name: s }),
            open: t,
            onOk: m,
            onCancel: a,
            okButtonProps: { loading: o },
            footer: function (e) {
              return (0, X.jsxs)(b.Z, {
                justify: 'space-between',
                children: [
                  (0, X.jsx)('a', {
                    href: p,
                    target: '_blank',
                    rel: 'noreferrer',
                    children: u('ollamaLink', { name: s }),
                  }),
                  (0, X.jsx)(M.Z, { children: e }),
                ],
              });
            },
            children: (0, X.jsxs)(z.Z, {
              name: 'basic',
              style: { maxWidth: 600 },
              autoComplete: 'off',
              layout: 'vertical',
              form: c,
              children: [
                (0, X.jsx)(z.Z.Item, {
                  label: u('modelType'),
                  name: 'model_type',
                  initialValue: 'embedding',
                  rules: [{ required: !0, message: u('modelTypeMessage') }],
                  children: (0, X.jsx)(H.Z, {
                    placeholder: u('modelTypeMessage'),
                    children: ((n = s), g[n] || g.Default).map(function (e) {
                      return (0, X.jsx)(
                        Ze,
                        { value: e.value, children: e.label },
                        e.value,
                      );
                    }),
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: u('Xinference' === s ? 'modelUid' : 'modelName'),
                  name: 'llm_name',
                  rules: [{ required: !0, message: u('modelNameMessage') }],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: u('modelNameMessage'),
                    onKeyDown: d,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: u('addLlmBaseUrl'),
                  name: 'api_base',
                  rules: [{ required: !0, message: u('baseUrlNameMessage') }],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: u('baseUrlNameMessage'),
                    onKeyDown: d,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: u('apiKey'),
                  name: 'api_key',
                  rules: [{ required: !1, message: u('apiKeyMessage') }],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: u('apiKeyMessage'),
                    onKeyDown: d,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: u('maxTokens'),
                  name: 'max_tokens',
                  rules: [
                    { required: !0, message: u('maxTokensMessage') },
                    { type: 'number', message: u('maxTokensInvalidMessage') },
                    function (e) {
                      return (
                        Me()(e),
                        {
                          validator: function (e, n) {
                            return n < 0
                              ? Promise.reject(
                                  new Error(u('maxTokensMinMessage')),
                                )
                              : Promise.resolve();
                          },
                        }
                      );
                    },
                  ],
                  children: (0, X.jsx)(ae.Z, {
                    placeholder: u('maxTokensTip'),
                    style: { width: '100%' },
                    onKeyDown: d,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  noStyle: !0,
                  dependencies: ['model_type'],
                  children: function (e) {
                    return (
                      'chat' === (0, e.getFieldValue)('model_type') &&
                      (0, X.jsx)(z.Z.Item, {
                        label: u('vision'),
                        valuePropName: 'checked',
                        name: 'vision',
                        children: (0, X.jsx)(re.Z, {}),
                      })
                    );
                  },
                }),
              ],
            }),
          });
        },
        Se = H.Z.Option,
        Pe = function (e) {
          var n = e.visible,
            t = e.hideModal,
            a = e.onOk,
            r = e.loading,
            i = e.llmFactory,
            o = z.Z.useForm(),
            s = Q()(o, 1)[0],
            l = (0, f.qM)('setting').t,
            c = (function () {
              var e = G()(
                D()().mark(function e() {
                  var n, t, r;
                  return D()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), s.validateFields();
                        case 2:
                          (n = e.sent),
                            (t =
                              'chat' === n.model_type && n.vision
                                ? 'image2text'
                                : n.model_type),
                            (r = V()(
                              V()({}, J()(n, ['vision'])),
                              {},
                              {
                                model_type: t,
                                llm_factory: i,
                                max_tokens: n.max_tokens,
                              },
                            )),
                            console.info(r),
                            null == a || a(r);
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            u = (function () {
              var e = G()(
                D()().mark(function e(n) {
                  return D()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ('Enter' !== n.key) {
                            e.next = 3;
                            break;
                          }
                          return (e.next = 3), c();
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return (0, X.jsx)(R.Z, {
            title: l('addLlmTitle', { name: i }),
            open: n,
            onOk: c,
            onCancel: t,
            okButtonProps: { loading: r },
            confirmLoading: r,
            children: (0, X.jsxs)(z.Z, {
              children: [
                (0, X.jsx)(z.Z.Item, {
                  label: l('modelType'),
                  name: 'model_type',
                  initialValue: 'chat',
                  rules: [{ required: !0, message: l('modelTypeMessage') }],
                  children: (0, X.jsxs)(H.Z, {
                    placeholder: l('modelTypeMessage'),
                    children: [
                      (0, X.jsx)(Se, { value: 'chat', children: 'chat' }),
                      (0, X.jsx)(Se, { value: 'tts', children: 'tts' }),
                    ],
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('modelName'),
                  name: 'llm_name',
                  rules: [
                    { required: !0, message: l('SparkModelNameMessage') },
                  ],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('modelNameMessage'),
                    onKeyDown: u,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('addSparkAPIPassword'),
                  name: 'spark_api_password',
                  rules: [
                    { required: !0, message: l('SparkAPIPasswordMessage') },
                  ],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('SparkAPIPasswordMessage'),
                    onKeyDown: u,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  noStyle: !0,
                  dependencies: ['model_type'],
                  children: function (e) {
                    return (
                      'tts' === (0, e.getFieldValue)('model_type') &&
                      (0, X.jsx)(z.Z.Item, {
                        label: l('addSparkAPPID'),
                        name: 'spark_app_id',
                        rules: [
                          { required: !0, message: l('SparkAPPIDMessage') },
                        ],
                        children: (0, X.jsx)(W.Z, {
                          placeholder: l('SparkAPPIDMessage'),
                        }),
                      })
                    );
                  },
                }),
                (0, X.jsx)(z.Z.Item, {
                  noStyle: !0,
                  dependencies: ['model_type'],
                  children: function (e) {
                    return (
                      'tts' === (0, e.getFieldValue)('model_type') &&
                      (0, X.jsx)(z.Z.Item, {
                        label: l('addSparkAPISecret'),
                        name: 'spark_api_secret',
                        rules: [
                          { required: !0, message: l('SparkAPISecretMessage') },
                        ],
                        children: (0, X.jsx)(W.Z, {
                          placeholder: l('SparkAPISecretMessage'),
                        }),
                      })
                    );
                  },
                }),
                (0, X.jsx)(z.Z.Item, {
                  noStyle: !0,
                  dependencies: ['model_type'],
                  children: function (e) {
                    return (
                      'tts' === (0, e.getFieldValue)('model_type') &&
                      (0, X.jsx)(z.Z.Item, {
                        label: l('addSparkAPIKey'),
                        name: 'spark_api_key',
                        rules: [
                          { required: !0, message: l('SparkAPIKeyMessage') },
                        ],
                        children: (0, X.jsx)(W.Z, {
                          placeholder: l('SparkAPIKeyMessage'),
                        }),
                      })
                    );
                  },
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('maxTokens'),
                  name: 'max_tokens',
                  rules: [
                    { required: !0, message: l('maxTokensMessage') },
                    { type: 'number', message: l('maxTokensInvalidMessage') },
                    function (e) {
                      e.getFieldValue;
                      return {
                        validator: function (e, n) {
                          return n < 0
                            ? Promise.reject(
                                new Error(l('maxTokensMinMessage')),
                              )
                            : Promise.resolve();
                        },
                      };
                    },
                  ],
                  children: (0, X.jsx)(ae.Z, {
                    placeholder: l('maxTokensTip'),
                    style: { width: '100%' },
                  }),
                }),
              ],
            }),
          });
        },
        Ie = t(19632),
        Fe = t.n(Ie),
        Le = t(96330),
        Ke = function (e) {
          var n = e.visible,
            t = e.hideModal,
            a = e.onOk,
            r = e.loading,
            o = z.Z.useForm(),
            s = Q()(o, 1)[0],
            l = { systemSetting: (0, ge.fS)().data, allOptions: (0, T.hl)() },
            c = l.systemSetting,
            u = l.allOptions,
            d = (0, f.qM)('setting').t,
            m = (function () {
              var e = G()(
                D()().mark(function e() {
                  var n, t, r, i, o;
                  return D()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), s.validateFields();
                        case 2:
                          (o = e.sent),
                            a(
                              V()(
                                V()({}, o),
                                {},
                                {
                                  asr_id:
                                    null !== (n = o.asr_id) && void 0 !== n
                                      ? n
                                      : '',
                                  embd_id:
                                    null !== (t = o.embd_id) && void 0 !== t
                                      ? t
                                      : '',
                                  img2txt_id:
                                    null !== (r = o.img2txt_id) && void 0 !== r
                                      ? r
                                      : '',
                                  llm_id:
                                    null !== (i = o.llm_id) && void 0 !== i
                                      ? i
                                      : '',
                                },
                              ),
                            );
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          (0, i.useEffect)(
            function () {
              n && s.setFieldsValue(c);
            },
            [s, c, n],
          );
          return (0, X.jsx)(R.Z, {
            title: d('systemModelSettings'),
            open: n,
            onOk: m,
            onCancel: t,
            okButtonProps: { loading: r },
            confirmLoading: r,
            children: (0, X.jsxs)(z.Z, {
              form: s,
              onValuesChange: function () {},
              layout: 'vertical',
              children: [
                (0, X.jsx)(z.Z.Item, {
                  label: d('chatModel'),
                  name: 'llm_id',
                  tooltip: d('chatModelTip'),
                  children: (0, X.jsx)(H.Z, {
                    options: [].concat(
                      Fe()(u[Le.Vr.Chat]),
                      Fe()(u[Le.Vr.Image2text]),
                    ),
                    allowClear: !0,
                    showSearch: !0,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: d('embeddingModel'),
                  name: 'embd_id',
                  tooltip: d('embeddingModelTip'),
                  children: (0, X.jsx)(H.Z, {
                    options: u[Le.Vr.Embedding],
                    allowClear: !0,
                    showSearch: !0,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: d('img2txtModel'),
                  name: 'img2txt_id',
                  tooltip: d('img2txtModelTip'),
                  children: (0, X.jsx)(H.Z, {
                    options: u[Le.Vr.Image2text],
                    allowClear: !0,
                    showSearch: !0,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: d('sequence2txtModel'),
                  name: 'asr_id',
                  tooltip: d('sequence2txtModelTip'),
                  children: (0, X.jsx)(H.Z, {
                    options: u[Le.Vr.Speech2text],
                    allowClear: !0,
                    showSearch: !0,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: d('rerankModel'),
                  name: 'rerank_id',
                  tooltip: d('rerankModelTip'),
                  children: (0, X.jsx)(H.Z, {
                    options: u[Le.Vr.Rerank],
                    allowClear: !0,
                    showSearch: !0,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: d('ttsModel'),
                  name: 'tts_id',
                  tooltip: d('ttsModelTip'),
                  children: (0, X.jsx)(H.Z, {
                    options: u[Le.Vr.TTS],
                    allowClear: !0,
                    showSearch: !0,
                  }),
                }),
              ],
            }),
          });
        },
        qe = H.Z.Option,
        Ee = function (e) {
          var n = e.visible,
            t = e.hideModal,
            a = e.onOk,
            r = e.loading,
            i = e.llmFactory,
            o = z.Z.useForm(),
            s = Q()(o, 1)[0],
            l = (0, f.qM)('setting').t,
            c = (function () {
              var e = G()(
                D()().mark(function e() {
                  var n, t, r;
                  return D()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), s.validateFields();
                        case 2:
                          (n = e.sent),
                            (t =
                              'chat' === n.model_type && n.vision
                                ? 'image2text'
                                : n.model_type),
                            (r = V()(
                              V()({}, J()(n, ['vision'])),
                              {},
                              {
                                model_type: t,
                                llm_factory: i,
                                max_tokens: n.max_tokens,
                              },
                            )),
                            console.info(r),
                            null == a || a(r);
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (0, X.jsx)(R.Z, {
            title: l('addLlmTitle', { name: i }),
            open: n,
            onOk: c,
            onCancel: t,
            okButtonProps: { loading: r },
            footer: function (e) {
              return (0, X.jsxs)(b.Z, {
                justify: 'space-between',
                children: [
                  (0, X.jsx)('a', {
                    href: 'https://www.volcengine.com/docs/82379/1302008',
                    target: '_blank',
                    rel: 'noreferrer',
                    children: l('ollamaLink', { name: i }),
                  }),
                  (0, X.jsx)(M.Z, { children: e }),
                ],
              });
            },
            children: (0, X.jsxs)(z.Z, {
              name: 'basic',
              style: { maxWidth: 600 },
              autoComplete: 'off',
              layout: 'vertical',
              form: s,
              children: [
                (0, X.jsx)(z.Z.Item, {
                  label: l('modelType'),
                  name: 'model_type',
                  initialValue: 'chat',
                  rules: [{ required: !0, message: l('modelTypeMessage') }],
                  children: (0, X.jsxs)(H.Z, {
                    placeholder: l('modelTypeMessage'),
                    children: [
                      (0, X.jsx)(qe, { value: 'chat', children: 'chat' }),
                      (0, X.jsx)(qe, {
                        value: 'embedding',
                        children: 'embedding',
                      }),
                    ],
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('modelName'),
                  name: 'llm_name',
                  rules: [{ required: !0, message: l('volcModelNameMessage') }],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('volcModelNameMessage'),
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('addEndpointID'),
                  name: 'endpoint_id',
                  rules: [{ required: !0, message: l('endpointIDMessage') }],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('endpointIDMessage'),
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('addArkApiKey'),
                  name: 'ark_api_key',
                  rules: [{ required: !0, message: l('ArkApiKeyMessage') }],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('ArkApiKeyMessage'),
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('maxTokens'),
                  name: 'max_tokens',
                  rules: [
                    { required: !0, message: l('maxTokensMessage') },
                    { type: 'number', message: l('maxTokensInvalidMessage') },
                    function (e) {
                      e.getFieldValue;
                      return {
                        validator: function (e, n) {
                          return n < 0
                            ? Promise.reject(
                                new Error(l('maxTokensMinMessage')),
                              )
                            : Promise.resolve();
                        },
                      };
                    },
                  ],
                  children: (0, X.jsx)(ae.Z, {
                    placeholder: l('maxTokensTip'),
                    style: { width: '100%' },
                  }),
                }),
              ],
            }),
          });
        },
        De = H.Z.Option,
        Oe = function (e) {
          var n = e.visible,
            t = e.hideModal,
            a = e.onOk,
            r = e.loading,
            i = e.llmFactory,
            o = z.Z.useForm(),
            s = Q()(o, 1)[0],
            l = (0, f.qM)('setting').t,
            c = (function () {
              var e = G()(
                D()().mark(function e() {
                  var n, t, r;
                  return D()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), s.validateFields();
                        case 2:
                          (n = e.sent),
                            (t =
                              'chat' === n.model_type && n.vision
                                ? 'image2text'
                                : n.model_type),
                            (r = V()(
                              V()({}, J()(n, ['vision'])),
                              {},
                              {
                                model_type: t,
                                llm_factory: i,
                                max_tokens: n.max_tokens,
                              },
                            )),
                            console.info(r),
                            null == a || a(r);
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            u = (function () {
              var e = G()(
                D()().mark(function e(n) {
                  return D()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ('Enter' !== n.key) {
                            e.next = 3;
                            break;
                          }
                          return (e.next = 3), c();
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return (0, X.jsx)(R.Z, {
            title: l('addLlmTitle', { name: i }),
            open: n,
            onOk: c,
            onCancel: t,
            okButtonProps: { loading: r },
            confirmLoading: r,
            children: (0, X.jsxs)(z.Z, {
              name: 'basic',
              style: { maxWidth: 600 },
              autoComplete: 'off',
              layout: 'vertical',
              form: s,
              children: [
                (0, X.jsx)(z.Z.Item, {
                  label: l('modelType'),
                  name: 'model_type',
                  initialValue: 'chat',
                  rules: [{ required: !0, message: l('modelTypeMessage') }],
                  children: (0, X.jsxs)(H.Z, {
                    placeholder: l('modelTypeMessage'),
                    children: [
                      (0, X.jsx)(De, { value: 'chat', children: 'chat' }),
                      (0, X.jsx)(De, {
                        value: 'embedding',
                        children: 'embedding',
                      }),
                      (0, X.jsx)(De, { value: 'rerank', children: 'rerank' }),
                    ],
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('modelName'),
                  name: 'llm_name',
                  rules: [
                    { required: !0, message: l('yiyanModelNameMessage') },
                  ],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('yiyanModelNameMessage'),
                    onKeyDown: u,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('addyiyanAK'),
                  name: 'yiyan_ak',
                  rules: [{ required: !0, message: l('yiyanAKMessage') }],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('yiyanAKMessage'),
                    onKeyDown: u,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('addyiyanSK'),
                  name: 'yiyan_sk',
                  rules: [{ required: !0, message: l('yiyanSKMessage') }],
                  children: (0, X.jsx)(W.Z, {
                    placeholder: l('yiyanSKMessage'),
                    onKeyDown: u,
                  }),
                }),
                (0, X.jsx)(z.Z.Item, {
                  label: l('maxTokens'),
                  name: 'max_tokens',
                  rules: [
                    { required: !0, message: l('maxTokensMessage') },
                    { type: 'number', message: l('maxTokensInvalidMessage') },
                    function (e) {
                      e.getFieldValue;
                      return {
                        validator: function (e, n) {
                          return n < 0
                            ? Promise.reject(
                                new Error(l('maxTokensMinMessage')),
                              )
                            : Promise.resolve();
                        },
                      };
                    },
                  ],
                  children: (0, X.jsx)(ae.Z, {
                    placeholder: l('maxTokensTip'),
                    style: { width: '100%' },
                  }),
                }),
              ],
            }),
          });
        },
        Ve = k.Z.Text,
        Be = function (e) {
          var n,
            t,
            a,
            r = e.item,
            i = e.clickApiKey,
            o = (0, f.pG)(),
            s = o.visible,
            l = o.switchVisible,
            c = (0, f.qM)('setting').t,
            u = (0, g.Fg)().theme,
            m =
              ((n = r.name),
              (t = (0, T.Ju)().deleteLlm),
              (a = (0, f.I3)()),
              {
                handleDeleteLlm: function (e) {
                  return function () {
                    var r;
                    a({
                      onOk:
                        ((r = G()(
                          D()().mark(function a() {
                            return D()().wrap(function (a) {
                              for (;;)
                                switch ((a.prev = a.next)) {
                                  case 0:
                                    t({ llm_factory: n, llm_name: e });
                                  case 1:
                                  case 'end':
                                    return a.stop();
                                }
                            }, a);
                          }),
                        )),
                        function () {
                          return r.apply(this, arguments);
                        }),
                    });
                  };
                },
              }),
            k = m.handleDeleteLlm,
            S = (function (e) {
              var n = (0, T.X7)().deleteFactory,
                t = (0, f.I3)();
              return {
                handleDeleteFactory: function () {
                  var a;
                  t({
                    onOk:
                      ((a = G()(
                        D()().mark(function t() {
                          return D()().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  n({ llm_factory: e });
                                case 1:
                                case 'end':
                                  return t.stop();
                              }
                          }, t);
                        }),
                      )),
                      function () {
                        return a.apply(this, arguments);
                      }),
                  });
                },
              };
            })(r.name),
            P = S.handleDeleteFactory;
          return (0, X.jsx)(y.Z.Item, {
            children: (0, X.jsxs)(x.Z, {
              className: 'dark' === u ? xe : ye,
              children: [
                (0, X.jsxs)(_.Z, {
                  align: 'middle',
                  children: [
                    (0, X.jsx)(U.Z, {
                      span: 12,
                      children: (0, X.jsxs)(b.Z, {
                        gap: 'middle',
                        align: 'center',
                        children: [
                          (0, X.jsx)(p.$, { name: r.name }),
                          (0, X.jsxs)(b.Z, {
                            vertical: !0,
                            gap: 'small',
                            children: [
                              (0, X.jsx)('b', { children: r.name }),
                              (0, X.jsx)(Ve, { children: r.tags }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, X.jsx)(U.Z, {
                      span: 12,
                      className: Te,
                      children: (0, X.jsxs)(M.Z, {
                        size: 'middle',
                        children: [
                          (0, X.jsx)(Z.ZP, {
                            onClick: function () {
                              i(r.name);
                            },
                            children: (0, X.jsxs)(b.Z, {
                              align: 'center',
                              gap: 4,
                              children: [
                                q(r.name) ||
                                r.name === h.Q.VolcEngine ||
                                r.name === h.Q.TencentHunYuan ||
                                r.name === h.Q.XunFeiSpark ||
                                r.name === h.Q.BaiduYiYan ||
                                r.name === h.Q.FishAudio ||
                                r.name === h.Q.TencentCloud ||
                                r.name === h.Q.GoogleCloud ||
                                r.name === h.Q.AzureOpenAI
                                  ? c('addTheModel')
                                  : 'API-Key',
                                (0, X.jsx)(C.Z, {}),
                              ],
                            }),
                          }),
                          (0, X.jsx)(Z.ZP, {
                            onClick: function () {
                              l();
                            },
                            children: (0, X.jsxs)(b.Z, {
                              align: 'center',
                              gap: 4,
                              children: [
                                c('showMoreModels'),
                                (0, X.jsx)(d, {}),
                              ],
                            }),
                          }),
                          (0, X.jsx)(Z.ZP, {
                            type: 'text',
                            onClick: P,
                            children: (0, X.jsx)(b.Z, {
                              align: 'center',
                              children: (0, X.jsx)(A.Z, {
                                style: { color: '#D92D20' },
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                s &&
                  (0, X.jsx)(y.Z, {
                    size: 'small',
                    dataSource: r.llm,
                    className: ve,
                    renderItem: function (e) {
                      return (0, X.jsx)(y.Z.Item, {
                        children: (0, X.jsxs)(M.Z, {
                          children: [
                            (0, v.KE)(e.name),
                            (0, X.jsx)(j.Z, {
                              color: '#b8b8b8',
                              children: e.type,
                            }),
                            (0, X.jsx)(w.Z, {
                              title: c('delete', { keyPrefix: 'common' }),
                              children: (0, X.jsx)(Z.ZP, {
                                type: 'text',
                                onClick: k(e.name),
                                children: (0, X.jsx)(A.Z, {
                                  style: { color: '#D92D20' },
                                }),
                              }),
                            }),
                          ],
                        }),
                      });
                    },
                  }),
              ],
            }),
          });
        },
        Ge = function () {
          var e = (0, T.DC)(),
            n = e.factoryList,
            t = e.myLlmList,
            a = e.loading,
            o = (0, g.Fg)().theme,
            s = (function () {
              var e = (0, i.useState)({}),
                n = Q()(e, 2),
                t = n[0],
                a = n[1],
                r = (0, T.ux)(),
                o = r.saveApiKey,
                s = r.loading,
                l = (0, f.pG)(),
                c = l.visible,
                u = l.hideModal,
                d = l.showModal,
                m = (0, i.useCallback)(
                  (function () {
                    var e = G()(
                      D()().mark(function e(n) {
                        return D()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), o(V()(V()({}, t), n));
                              case 2:
                                0 === e.sent && u();
                              case 4:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    return function (n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  [u, o, t],
                ),
                p = (0, i.useCallback)(
                  function (e) {
                    a(e), d();
                  },
                  [d, a],
                );
              return {
                saveApiKeyLoading: s,
                initialApiKey: '',
                llmFactory: t.llm_factory,
                onApiKeySavingOk: m,
                apiKeyVisible: c,
                hideApiKeyModal: u,
                showApiKeyModal: p,
              };
            })(),
            l = s.saveApiKeyLoading,
            c = s.initialApiKey,
            u = s.llmFactory,
            d = s.onApiKeySavingOk,
            m = s.apiKeyVisible,
            v = s.hideApiKeyModal,
            C = s.showApiKeyModal,
            A = (function () {
              var e = (0, ge.fS)().data,
                n = (0, T.OR)(),
                t = n.saveTenantInfo,
                a = n.loading,
                r = (0, f.pG)(),
                o = r.visible,
                s = r.hideModal,
                l = r.showModal,
                c = (0, i.useCallback)(
                  (function () {
                    var n = G()(
                      D()().mark(function n(a) {
                        return D()().wrap(function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (n.next = 2),
                                  t(
                                    V()(
                                      { tenant_id: e.tenant_id, name: e.name },
                                      a,
                                    ),
                                  )
                                );
                              case 2:
                                0 === n.sent && s();
                              case 4:
                              case 'end':
                                return n.stop();
                            }
                        }, n);
                      }),
                    );
                    return function (e) {
                      return n.apply(this, arguments);
                    };
                  })(),
                  [s, t, e],
                );
              return {
                saveSystemModelSettingLoading: a,
                onSystemSettingSavingOk: c,
                systemSettingVisible: o,
                hideSystemSettingModal: s,
                showSystemSettingModal: l,
              };
            })(),
            k = A.saveSystemModelSettingLoading,
            _ = A.onSystemSettingSavingOk,
            U = A.systemSettingVisible,
            M = A.hideSystemSettingModal,
            j = A.showSystemSettingModal,
            K = (0, f.qM)('setting').t,
            E = (function () {
              var e = (0, i.useState)(''),
                n = Q()(e, 2),
                t = n[0],
                a = n[1],
                r = (0, T.uZ)(),
                o = r.addLlm,
                s = r.loading,
                l = (0, f.pG)(),
                c = l.visible,
                u = l.hideModal,
                d = l.showModal,
                m = (0, i.useCallback)(
                  (function () {
                    var e = G()(
                      D()().mark(function e(n) {
                        return D()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), o(n);
                              case 2:
                                0 === e.sent && u();
                              case 4:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    return function (n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  [u, o],
                );
              return {
                llmAddingLoading: s,
                onLlmAddingOk: m,
                llmAddingVisible: c,
                hideLlmAddingModal: u,
                showLlmAddingModal: function (e) {
                  a(e), d();
                },
                selectedLlmFactory: t,
              };
            })(),
            O = E.llmAddingVisible,
            B = E.hideLlmAddingModal,
            N = E.showLlmAddingModal,
            H = E.onLlmAddingOk,
            z = E.llmAddingLoading,
            R = E.selectedLlmFactory,
            W = (function () {
              var e = (0, T.uZ)(),
                n = e.addLlm,
                t = e.loading,
                a = (0, f.pG)(),
                r = a.visible,
                o = a.hideModal,
                s = a.showModal,
                l = (0, i.useCallback)(
                  (function () {
                    var e = G()(
                      D()().mark(function e(t) {
                        return D()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), n(t);
                              case 2:
                                0 === e.sent && o();
                              case 4:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    return function (n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  [o, n],
                );
              return {
                volcAddingLoading: t,
                onVolcAddingOk: l,
                volcAddingVisible: r,
                hideVolcAddingModal: o,
                showVolcAddingModal: s,
              };
            })(),
            Y = W.volcAddingVisible,
            J = W.hideVolcAddingModal,
            $ = W.showVolcAddingModal,
            ne = W.onVolcAddingOk,
            ae = W.volcAddingLoading,
            re = (function () {
              var e = (0, T.uZ)(),
                n = e.addLlm,
                t = e.loading,
                a = (0, f.pG)(),
                r = a.visible,
                o = a.hideModal,
                s = a.showModal,
                l = (0, i.useCallback)(
                  (function () {
                    var e = G()(
                      D()().mark(function e(t) {
                        return D()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), n(t);
                              case 2:
                                0 === e.sent && o();
                              case 4:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    return function (n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  [o, n],
                );
              return {
                HunyuanAddingLoading: t,
                onHunyuanAddingOk: l,
                HunyuanAddingVisible: r,
                hideHunyuanAddingModal: o,
                showHunyuanAddingModal: s,
              };
            })(),
            ie = re.HunyuanAddingVisible,
            se = re.hideHunyuanAddingModal,
            le = re.showHunyuanAddingModal,
            ue = re.onHunyuanAddingOk,
            me = re.HunyuanAddingLoading,
            Te = (function () {
              var e = (0, T.uZ)(),
                n = e.addLlm,
                t = e.loading,
                a = (0, f.pG)(),
                r = a.visible,
                o = a.hideModal,
                s = a.showModal,
                l = (0, i.useCallback)(
                  (function () {
                    var e = G()(
                      D()().mark(function e(t) {
                        return D()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), n(t);
                              case 2:
                                0 === e.sent && o();
                              case 4:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    return function (n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  [o, n],
                );
              return {
                GoogleAddingLoading: t,
                onGoogleAddingOk: l,
                GoogleAddingVisible: r,
                hideGoogleAddingModal: o,
                showGoogleAddingModal: s,
              };
            })(),
            ve = Te.GoogleAddingVisible,
            ye = Te.hideGoogleAddingModal,
            xe = Te.showGoogleAddingModal,
            be = Te.onGoogleAddingOk,
            Me = Te.GoogleAddingLoading,
            Ze = (function () {
              var e = (0, T.uZ)(),
                n = e.addLlm,
                t = e.loading,
                a = (0, f.pG)(),
                r = a.visible,
                o = a.hideModal,
                s = a.showModal,
                l = (0, i.useCallback)(
                  (function () {
                    var e = G()(
                      D()().mark(function e(t) {
                        return D()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), n(t);
                              case 2:
                                0 === e.sent && o();
                              case 4:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    return function (n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  [o, n],
                );
              return {
                TencentCloudAddingLoading: t,
                onTencentCloudAddingOk: l,
                TencentCloudAddingVisible: r,
                hideTencentCloudAddingModal: o,
                showTencentCloudAddingModal: s,
              };
            })(),
            je = Ze.TencentCloudAddingVisible,
            Se = Ze.hideTencentCloudAddingModal,
            Ie = Ze.showTencentCloudAddingModal,
            Fe = Ze.onTencentCloudAddingOk,
            Le = Ze.TencentCloudAddingLoading,
            qe = (function () {
              var e = (0, T.uZ)(),
                n = e.addLlm,
                t = e.loading,
                a = (0, f.pG)(),
                r = a.visible,
                o = a.hideModal,
                s = a.showModal,
                l = (0, i.useCallback)(
                  (function () {
                    var e = G()(
                      D()().mark(function e(t) {
                        return D()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), n(t);
                              case 2:
                                0 === e.sent && o();
                              case 4:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    return function (n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  [o, n],
                );
              return {
                SparkAddingLoading: t,
                onSparkAddingOk: l,
                SparkAddingVisible: r,
                hideSparkAddingModal: o,
                showSparkAddingModal: s,
              };
            })(),
            De = qe.SparkAddingVisible,
            Ge = qe.hideSparkAddingModal,
            Ne = qe.showSparkAddingModal,
            Qe = qe.onSparkAddingOk,
            He = qe.SparkAddingLoading,
            ze = (function () {
              var e = (0, T.uZ)(),
                n = e.addLlm,
                t = e.loading,
                a = (0, f.pG)(),
                r = a.visible,
                o = a.hideModal,
                s = a.showModal,
                l = (0, i.useCallback)(
                  (function () {
                    var e = G()(
                      D()().mark(function e(t) {
                        return D()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), n(t);
                              case 2:
                                0 === e.sent && o();
                              case 4:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    return function (n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  [o, n],
                );
              return {
                yiyanAddingLoading: t,
                onyiyanAddingOk: l,
                yiyanAddingVisible: r,
                hideyiyanAddingModal: o,
                showyiyanAddingModal: s,
              };
            })(),
            Re = ze.yiyanAddingVisible,
            We = ze.hideyiyanAddingModal,
            Ye = ze.showyiyanAddingModal,
            Je = ze.onyiyanAddingOk,
            Xe = ze.yiyanAddingLoading,
            $e = (function () {
              var e = (0, T.uZ)(),
                n = e.addLlm,
                t = e.loading,
                a = (0, f.pG)(),
                r = a.visible,
                o = a.hideModal,
                s = a.showModal,
                l = (0, i.useCallback)(
                  (function () {
                    var e = G()(
                      D()().mark(function e(t) {
                        return D()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), n(t);
                              case 2:
                                0 === e.sent && o();
                              case 4:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    return function (n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  [o, n],
                );
              return {
                FishAudioAddingLoading: t,
                onFishAudioAddingOk: l,
                FishAudioAddingVisible: r,
                hideFishAudioAddingModal: o,
                showFishAudioAddingModal: s,
              };
            })(),
            en = $e.FishAudioAddingVisible,
            nn = $e.hideFishAudioAddingModal,
            tn = $e.showFishAudioAddingModal,
            an = $e.onFishAudioAddingOk,
            rn = $e.FishAudioAddingLoading,
            on = (function () {
              var e = (0, T.uZ)(),
                n = e.addLlm,
                t = e.loading,
                a = (0, f.pG)(),
                r = a.visible,
                o = a.hideModal,
                s = a.showModal,
                l = (0, i.useCallback)(
                  (function () {
                    var e = G()(
                      D()().mark(function e(t) {
                        return D()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), n(t);
                              case 2:
                                0 === e.sent && o();
                              case 4:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    return function (n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  [o, n],
                );
              return {
                bedrockAddingLoading: t,
                onBedrockAddingOk: l,
                bedrockAddingVisible: r,
                hideBedrockAddingModal: o,
                showBedrockAddingModal: s,
              };
            })(),
            sn = on.bedrockAddingLoading,
            ln = on.onBedrockAddingOk,
            cn = on.bedrockAddingVisible,
            un = on.hideBedrockAddingModal,
            dn = on.showBedrockAddingModal,
            mn = (function () {
              var e = (0, T.uZ)(),
                n = e.addLlm,
                t = e.loading,
                a = (0, f.pG)(),
                r = a.visible,
                o = a.hideModal,
                s = a.showModal,
                l = (0, i.useCallback)(
                  (function () {
                    var e = G()(
                      D()().mark(function e(t) {
                        return D()().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), n(t);
                              case 2:
                                0 === e.sent && o();
                              case 4:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    return function (n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  [o, n],
                );
              return {
                AzureAddingLoading: t,
                onAzureAddingOk: l,
                AzureAddingVisible: r,
                hideAzureAddingModal: o,
                showAzureAddingModal: s,
              };
            })(),
            pn = mn.AzureAddingVisible,
            gn = mn.hideAzureAddingModal,
            hn = mn.showAzureAddingModal,
            fn = mn.onAzureAddingOk,
            Tn = mn.AzureAddingLoading,
            vn = (0, i.useMemo)(
              function () {
                return r()(
                  r()(
                    r()(
                      r()(
                        r()(
                          r()(
                            r()(
                              r()(r()({}, h.Q.Bedrock, dn), h.Q.VolcEngine, $),
                              h.Q.TencentHunYuan,
                              le,
                            ),
                            h.Q.XunFeiSpark,
                            Ne,
                          ),
                          h.Q.BaiduYiYan,
                          Ye,
                        ),
                        h.Q.FishAudio,
                        tn,
                      ),
                      h.Q.TencentCloud,
                      Ie,
                    ),
                    h.Q.GoogleCloud,
                    xe,
                  ),
                  h.Q.AzureOpenAI,
                  hn,
                );
              },
              [dn, $, le, Ie, Ne, Ye, tn, xe, hn],
            ),
            Cn = (0, i.useCallback)(
              function (e) {
                q(e) ? N(e) : e in vn ? vn[e]() : C({ llm_factory: e });
              },
              [C, N, vn],
            ),
            An = [
              {
                key: '1',
                label: K('addedModels'),
                children: (0, X.jsx)(y.Z, {
                  grid: { gutter: 16, column: 1 },
                  dataSource: t,
                  renderItem: function (e) {
                    return (0, X.jsx)(Be, { item: e, clickApiKey: Cn });
                  },
                }),
              },
              {
                key: '2',
                label: (0, X.jsxs)('div', {
                  className: 'flex items-center gap-2',
                  children: [
                    K('modelsToBeAdded'),
                    (0, X.jsx)(w.Z, {
                      title: K('modelsToBeAddedTooltip'),
                      children: (0, X.jsx)(F.Z, { className: 'size-4' }),
                    }),
                  ],
                }),
                children: (0, X.jsx)(y.Z, {
                  grid: {
                    gutter: { xs: 8, sm: 10, md: 12, lg: 16, xl: 20, xxl: 24 },
                    xs: 1,
                    sm: 1,
                    md: 2,
                    lg: 3,
                    xl: 4,
                    xxl: 8,
                  },
                  dataSource: n,
                  renderItem: function (e) {
                    return (0, X.jsx)(y.Z.Item, {
                      children: (0, X.jsxs)(x.Z, {
                        className: 'dark' === o ? ke : Ce,
                        children: [
                          (0, X.jsxs)(b.Z, {
                            vertical: !0,
                            gap: 'middle',
                            children: [
                              (0, X.jsx)(p.$, {
                                name: e.name,
                                imgClass: 'h-12 w-auto',
                              }),
                              (0, X.jsxs)(b.Z, {
                                vertical: !0,
                                gap: 'middle',
                                children: [
                                  (0, X.jsx)('b', {
                                    children: (0, X.jsx)(Ve, {
                                      ellipsis: { tooltip: e.name },
                                      children: e.name,
                                    }),
                                  }),
                                  (0, X.jsx)(Ve, {
                                    className: Ue,
                                    children: e.tags,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, X.jsx)(S.Z, { className: _e }),
                          (0, X.jsx)(Z.ZP, {
                            type: 'link',
                            onClick: function () {
                              return Cn(e.name);
                            },
                            className: Ae,
                            children: K('addTheModel'),
                          }),
                        ],
                      }),
                    });
                  },
                }),
              },
            ];
          return (0, X.jsxs)('section', {
            id: 'xx',
            className: 'w-full space-y-6',
            children: [
              (0, X.jsx)(P.Z, {
                spinning: a,
                children: (0, X.jsxs)('section', {
                  className: fe,
                  children: [
                    (0, X.jsx)(L.Z, {
                      title: K('model'),
                      description: K('modelDescription'),
                      showRightButton: !0,
                      clickButton: j,
                    }),
                    (0, X.jsx)(S.Z, {}),
                    (0, X.jsx)(I.Z, {
                      defaultActiveKey: ['1', '2'],
                      ghost: !0,
                      items: An,
                    }),
                  ],
                }),
              }),
              (0, X.jsx)(te, {
                visible: m,
                hideModal: v,
                loading: l,
                initialValue: c,
                onOk: d,
                llmFactory: u,
              }),
              U &&
                (0, X.jsx)(Ke, {
                  visible: U,
                  onOk: _,
                  hideModal: M,
                  loading: k,
                }),
              (0, X.jsx)(we, {
                visible: O,
                hideModal: B,
                onOk: H,
                loading: z,
                llmFactory: R,
              }),
              (0, X.jsx)(Ee, {
                visible: Y,
                hideModal: J,
                onOk: ne,
                loading: ae,
                llmFactory: h.Q.VolcEngine,
              }),
              (0, X.jsx)(he, {
                visible: ie,
                hideModal: se,
                onOk: ue,
                loading: me,
                llmFactory: h.Q.TencentHunYuan,
              }),
              (0, X.jsx)(pe, {
                visible: ve,
                hideModal: ye,
                onOk: be,
                loading: Me,
                llmFactory: h.Q.GoogleCloud,
              }),
              (0, X.jsx)(ee, {
                visible: je,
                hideModal: Se,
                onOk: Fe,
                loading: Le,
                llmFactory: h.Q.TencentCloud,
              }),
              (0, X.jsx)(Pe, {
                visible: De,
                hideModal: Ge,
                onOk: Qe,
                loading: He,
                llmFactory: h.Q.XunFeiSpark,
              }),
              (0, X.jsx)(Oe, {
                visible: Re,
                hideModal: We,
                onOk: Je,
                loading: Xe,
                llmFactory: h.Q.BaiduYiYan,
              }),
              (0, X.jsx)(de, {
                visible: en,
                hideModal: nn,
                onOk: an,
                loading: rn,
                llmFactory: h.Q.FishAudio,
              }),
              (0, X.jsx)(ce, {
                visible: cn,
                hideModal: un,
                onOk: ln,
                loading: sn,
                llmFactory: h.Q.Bedrock,
              }),
              (0, X.jsx)(oe, {
                visible: pn,
                hideModal: gn,
                onOk: fn,
                loading: Tn,
                llmFactory: h.Q.AzureOpenAI,
              }),
            ],
          });
        };
    },
    72668: function (e, n, t) {
      'use strict';
      t.d(n, {
        AH: function () {
          return P;
        },
        EE: function () {
          return I;
        },
        FG: function () {
          return L;
        },
        WX: function () {
          return S;
        },
        nO: function () {
          return w;
        },
        vh: function () {
          return F;
        },
        vi: function () {
          return j;
        },
      });
      var a = t(60806),
        r = t(66582),
        i = t(78158),
        o = a.Z.login,
        s = a.Z.logout,
        l = a.Z.register,
        c = a.Z.setting,
        u = a.Z.user_info,
        d = a.Z.tenant_info,
        m = a.Z.factories_list,
        p = a.Z.llm_list,
        g = a.Z.my_llm,
        h = a.Z.set_api_key,
        f = a.Z.set_tenant_info,
        T = a.Z.add_llm,
        v = a.Z.delete_llm,
        C = a.Z.deleteFactory,
        A = a.Z.getSystemStatus,
        k = a.Z.getSystemVersion,
        y = a.Z.getSystemTokenList,
        x = a.Z.removeSystemToken,
        _ = a.Z.createSystemToken,
        U = a.Z.getSystemConfig,
        b = a.Z.setLangfuseConfig,
        M = {
          login: { url: o, method: 'post' },
          logout: { url: s, method: 'get' },
          register: { url: l, method: 'post' },
          setting: { url: c, method: 'post' },
          user_info: { url: u, method: 'get' },
          get_tenant_info: { url: d, method: 'get' },
          set_tenant_info: { url: f, method: 'post' },
          factories_list: { url: m, method: 'get' },
          llm_list: { url: p, method: 'get' },
          my_llm: { url: g, method: 'get' },
          set_api_key: { url: h, method: 'post' },
          add_llm: { url: T, method: 'post' },
          delete_llm: { url: v, method: 'post' },
          getSystemStatus: { url: A, method: 'get' },
          getSystemVersion: { url: k, method: 'get' },
          deleteFactory: { url: C, method: 'post' },
          listToken: { url: y, method: 'get' },
          createToken: { url: _, method: 'post' },
          removeToken: { url: x, method: 'delete' },
          getSystemConfig: { url: U, method: 'get' },
          setLangfuseConfig: { url: b, method: 'put' },
          getLangfuseConfig: { url: b, method: 'get' },
          deleteLangfuseConfig: { url: b, method: 'delete' },
        },
        Z = (0, r.Z)(M, i.ZP),
        j = function () {
          return i.ZP.get(a.Z.login_channels);
        },
        w = function (e) {
          return (window.location.href = a.Z.login_channel(e));
        },
        S = function (e) {
          return i.ZP.get(a.Z.listTenantUser(e));
        },
        P = function (e, n) {
          return (0, i.v_)(a.Z.addTenantUser(e), { email: n });
        },
        I = function (e) {
          var n = e.tenantId,
            t = e.userId;
          return i.ZP.delete(a.Z.deleteTenantUser(n, t));
        },
        F = function () {
          return i.ZP.get(a.Z.listTenant);
        },
        L = function (e) {
          return i.ZP.put(a.Z.agreeTenant(e));
        };
      n.ZP = Z;
    },
    60806: function (e, n, t) {
      'use strict';
      t.d(n, {
        N: function () {
          return a;
        },
      });
      var a = '/v1';
      n.Z = {
        login: ''.concat(a, '/user/login'),
        logout: ''.concat(a, '/user/logout'),
        register: ''.concat(a, '/user/register'),
        setting: ''.concat(a, '/user/setting'),
        user_info: ''.concat(a, '/user/info'),
        tenant_info: ''.concat(a, '/user/tenant_info'),
        set_tenant_info: ''.concat(a, '/user/set_tenant_info'),
        login_channels: ''.concat(a, '/user/login/channels'),
        login_channel: function (e) {
          return ''.concat(a, '/user/login/').concat(e);
        },
        addTenantUser: function (e) {
          return ''.concat(a, '/tenant/').concat(e, '/user');
        },
        listTenantUser: function (e) {
          return ''.concat(a, '/tenant/').concat(e, '/user/list');
        },
        deleteTenantUser: function (e, n) {
          return ''.concat(a, '/tenant/').concat(e, '/user/').concat(n);
        },
        listTenant: ''.concat(a, '/tenant/list'),
        agreeTenant: function (e) {
          return ''.concat(a, '/tenant/agree/').concat(e);
        },
        factories_list: ''.concat(a, '/llm/factories'),
        llm_list: ''.concat(a, '/llm/list'),
        my_llm: ''.concat(a, '/llm/my_llms'),
        set_api_key: ''.concat(a, '/llm/set_api_key'),
        add_llm: ''.concat(a, '/llm/add_llm'),
        delete_llm: ''.concat(a, '/llm/delete_llm'),
        deleteFactory: ''.concat(a, '/llm/delete_factory'),
        llm_tools: ''.concat(a, '/plugin/llm_tools'),
        kb_list: ''.concat(a, '/kb/list'),
        create_kb: ''.concat(a, '/kb/create'),
        update_kb: ''.concat(a, '/kb/update'),
        rm_kb: ''.concat(a, '/kb/rm'),
        get_kb_detail: ''.concat(a, '/kb/detail'),
        getKnowledgeGraph: function (e) {
          return ''.concat(a, '/kb/').concat(e, '/knowledge_graph');
        },
        listTag: function (e) {
          return ''.concat(a, '/kb/').concat(e, '/tags');
        },
        listTagByKnowledgeIds: ''.concat(a, '/kb/tags'),
        removeTag: function (e) {
          return ''.concat(a, '/kb/').concat(e, '/rm_tags');
        },
        renameTag: function (e) {
          return ''.concat(a, '/kb/').concat(e, '/rename_tag');
        },
        chunk_list: ''.concat(a, '/chunk/list'),
        create_chunk: ''.concat(a, '/chunk/create'),
        set_chunk: ''.concat(a, '/chunk/set'),
        get_chunk: ''.concat(a, '/chunk/get'),
        switch_chunk: ''.concat(a, '/chunk/switch'),
        rm_chunk: ''.concat(a, '/chunk/rm'),
        retrieval_test: ''.concat(a, '/chunk/retrieval_test'),
        knowledge_graph: ''.concat(a, '/chunk/knowledge_graph'),
        get_document_list: ''.concat(a, '/document/list'),
        document_change_status: ''.concat(a, '/document/change_status'),
        document_rm: ''.concat(a, '/document/rm'),
        document_delete: ''.concat(a, '/api/document'),
        document_rename: ''.concat(a, '/document/rename'),
        document_create: ''.concat(a, '/document/create'),
        document_run: ''.concat(a, '/document/run'),
        document_change_parser: ''.concat(a, '/document/change_parser'),
        document_thumbnails: ''.concat(a, '/document/thumbnails'),
        get_document_file: ''.concat(a, '/document/get'),
        document_upload: ''.concat(a, '/document/upload'),
        web_crawl: ''.concat(a, '/document/web_crawl'),
        document_infos: ''.concat(a, '/document/infos'),
        upload_and_parse: ''.concat(a, '/document/upload_and_parse'),
        parse: ''.concat(a, '/document/parse'),
        setMeta: ''.concat(a, '/document/set_meta'),
        setDialog: ''.concat(a, '/dialog/set'),
        getDialog: ''.concat(a, '/dialog/get'),
        removeDialog: ''.concat(a, '/dialog/rm'),
        listDialog: ''.concat(a, '/dialog/list'),
        setConversation: ''.concat(a, '/conversation/set'),
        getConversation: ''.concat(a, '/conversation/get'),
        getConversationSSE: ''.concat(a, '/conversation/getsse'),
        listConversation: ''.concat(a, '/conversation/list'),
        removeConversation: ''.concat(a, '/conversation/rm'),
        completeConversation: ''.concat(a, '/conversation/completion'),
        deleteMessage: ''.concat(a, '/conversation/delete_msg'),
        thumbup: ''.concat(a, '/conversation/thumbup'),
        tts: ''.concat(a, '/conversation/tts'),
        ask: ''.concat(a, '/conversation/ask'),
        mindmap: ''.concat(a, '/conversation/mindmap'),
        getRelatedQuestions: ''.concat(a, '/conversation/related_questions'),
        createToken: ''.concat(a, '/api/new_token'),
        listToken: ''.concat(a, '/api/token_list'),
        removeToken: ''.concat(a, '/api/rm'),
        getStats: ''.concat(a, '/api/stats'),
        createExternalConversation: ''.concat(a, '/api/new_conversation'),
        getExternalConversation: ''.concat(a, '/api/conversation'),
        completeExternalConversation: ''.concat(a, '/api/completion'),
        uploadAndParseExternal: ''.concat(a, '/api/document/upload_and_parse'),
        listFile: ''.concat(a, '/file/list'),
        uploadFile: ''.concat(a, '/file/upload'),
        removeFile: ''.concat(a, '/file/rm'),
        renameFile: ''.concat(a, '/file/rename'),
        getAllParentFolder: ''.concat(a, '/file/all_parent_folder'),
        createFolder: ''.concat(a, '/file/create'),
        connectFileToKnowledge: ''.concat(a, '/file2document/convert'),
        getFile: ''.concat(a, '/file/get'),
        moveFile: ''.concat(a, '/file/mv'),
        getSystemVersion: ''.concat(a, '/system/version'),
        getSystemStatus: ''.concat(a, '/system/status'),
        getSystemTokenList: ''.concat(a, '/system/token_list'),
        createSystemToken: ''.concat(a, '/system/new_token'),
        listSystemToken: ''.concat(a, '/system/token_list'),
        removeSystemToken: ''.concat(a, '/system/token'),
        getSystemConfig: ''.concat(a, '/system/config'),
        setLangfuseConfig: ''.concat(a, '/langfuse/api_key'),
        listTemplates: ''.concat(a, '/canvas/templates'),
        listCanvas: ''.concat(a, '/canvas/list'),
        listCanvasTeam: ''.concat(a, '/canvas/listteam'),
        getCanvas: ''.concat(a, '/canvas/get'),
        getCanvasSSE: ''.concat(a, '/canvas/getsse'),
        removeCanvas: ''.concat(a, '/canvas/rm'),
        setCanvas: ''.concat(a, '/canvas/set'),
        settingCanvas: ''.concat(a, '/canvas/setting'),
        getListVersion: ''.concat(a, '/canvas/getlistversion'),
        getVersion: ''.concat(a, '/canvas/getversion'),
        resetCanvas: ''.concat(a, '/canvas/reset'),
        runCanvas: ''.concat(a, '/canvas/completion'),
        testDbConnect: ''.concat(a, '/canvas/test_db_connect'),
        getInputElements: ''.concat(a, '/canvas/input_elements'),
        debug: ''.concat(a, '/canvas/debug'),
        getMcpServerList: ''.concat(a, '/mcp_server/list'),
        getMultipleMcpServers: ''.concat(a, '/mcp_server/get_multiple'),
        getMcpServer: function (e) {
          return ''.concat(a, '/mcp_server/get/').concat(e);
        },
        createMcpServer: ''.concat(a, '/mcp_server/create'),
        updateMcpServer: ''.concat(a, '/mcp_server/update'),
        deleteMcpServer: ''.concat(a, '/mcp_server/rm'),
      };
    },
    66582: function (e, n, t) {
      'use strict';
      var a = t(97857),
        r = t.n(a),
        i = t(57557),
        o = t.n(i),
        s = ['post', 'delete', 'put'];
      n.Z = function (e, n) {
        var t = {},
          a = function (a) {
            t[a] = function (t, i) {
              var l = e[a].url,
                c = e[a];
              return (
                i && (l = l + '/' + i),
                s.some(function (n) {
                  return n === e[a].method.toLowerCase();
                })
                  ? n(l, { method: e[a].method, data: t })
                  : 'get' === e[a].method || 'GET' === e[a].method
                    ? n.get(
                        l,
                        r()(
                          r()({}, o()(c, ['method', 'url'])),
                          {},
                          { params: t },
                        ),
                      )
                    : void 0
              );
            };
          };
        for (var i in e) a(i);
        return t;
      };
    },
    78158: function (e, n, t) {
      'use strict';
      t.d(n, {
        v_: function () {
          return A;
        },
      });
      var a = t(15009),
        r = t.n(a),
        i = t(99289),
        o = t.n(i),
        s = t(9783),
        l = t.n(s),
        c = t(97857),
        u = t.n(c),
        d = t(39918),
        m = t(54707),
        p = t(61921),
        g = t(26855),
        h = t(45360),
        f = t(11238),
        T = t(31098),
        v = {
          200: m.Z.t('message.200'),
          201: m.Z.t('message.201'),
          202: m.Z.t('message.202'),
          204: m.Z.t('message.204'),
          400: m.Z.t('message.400'),
          401: m.Z.t('message.401'),
          403: m.Z.t('message.403'),
          404: m.Z.t('message.404'),
          406: m.Z.t('message.406'),
          410: m.Z.t('message.410'),
          413: m.Z.t('message.413'),
          422: m.Z.t('message.422'),
          500: m.Z.t('message.500'),
          502: m.Z.t('message.502'),
          503: m.Z.t('message.503'),
          504: m.Z.t('message.504'),
        },
        C = (0, f.l7)({
          errorHandler: function (e) {
            var n = e.response;
            if ('Failed to fetch' === e.message)
              g.Z.error({
                description: m.Z.t('message.networkAnomalyDescription'),
                message: m.Z.t('message.networkAnomaly'),
              });
            else if (n && n.status) {
              var t = v[n.status] || n.statusText,
                a = n.status,
                r = n.url;
              g.Z.error({
                message: ''
                  .concat(m.Z.t('message.requestError'), ' ')
                  .concat(a, ': ')
                  .concat(r),
                description: t,
              });
            }
            return null != n ? n : { data: { code: 1999 } };
          },
          timeout: 3e5,
          getResponse: !0,
        });
      C.interceptors.request.use(function (e, n) {
        var t = (0, T._y)(n.data),
          a = (0, T._y)(n.params);
        return {
          url: e,
          options: u()(
            u()({}, n),
            {},
            {
              data: t,
              params: a,
              headers: u()(
                u()({}, n.skipToken ? void 0 : l()({}, d._n, (0, p.cD)())),
                n.headers,
              ),
              interceptors: !0,
            },
          ),
        };
      }),
        C.interceptors.response.use(
          (function () {
            var e = o()(
              r()().mark(function e(n, t) {
                var a, i;
                return r()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((413 !== (null == n ? void 0 : n.status) &&
                            504 !== (null == n ? void 0 : n.status)) ||
                            h.ZP.error(v[null == n ? void 0 : n.status]),
                          'blob' !== t.responseType)
                        ) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt('return', n);
                      case 3:
                        return (
                          (e.next = 5),
                          null == n || null === (a = n.clone()) || void 0 === a
                            ? void 0
                            : a.json()
                        );
                      case 5:
                        return (
                          100 === (null == (i = e.sent) ? void 0 : i.code)
                            ? h.ZP.error(null == i ? void 0 : i.message)
                            : 401 === (null == i ? void 0 : i.code)
                              ? (g.Z.error({
                                  message: null == i ? void 0 : i.message,
                                  description: null == i ? void 0 : i.message,
                                  duration: 3,
                                }),
                                p.ZP.removeAll(),
                                (0, p.rf)())
                              : 0 !== (null == i ? void 0 : i.code) &&
                                g.Z.error({
                                  message: ''
                                    .concat(m.Z.t('message.hint'), ' : ')
                                    .concat(null == i ? void 0 : i.code),
                                  description: null == i ? void 0 : i.message,
                                  duration: 3,
                                }),
                          e.abrupt('return', n)
                        );
                      case 8:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (n, t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        (n.ZP = C);
      var A = function (e, n) {
        return C.post(e, { data: n });
      };
    },
    86635: function (e) {
      function n(e) {
        return Promise.resolve().then(function () {
          var n = new Error("Cannot find module '" + e + "'");
          throw ((n.code = 'MODULE_NOT_FOUND'), n);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (n.id = 86635),
        (e.exports = n);
    },
    24654: function () {},
  },
]);
//# sourceMappingURL=p__user-setting__setting-model__index.2eead590.async.js.map
