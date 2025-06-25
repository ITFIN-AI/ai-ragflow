/*! For license information please see p__profile-setting__index.ae751380.async.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
  [3762],
  {
    36646: function (t, e, a) {
      'use strict';
      a.d(e, {
        m: function () {
          return c;
        },
      });
      var n = a(53219),
        r = a(57636),
        i = a(86074);
      function c(t) {
        var e = t.back,
          a = t.title,
          c = t.children;
        return (0, i.jsxs)('header', {
          className: 'flex justify-between items-center border-b pr-9',
          children: [
            (0, i.jsxs)('div', {
              className: 'flex items-center ',
              children: [
                (0, i.jsx)('div', {
                  className: 'flex items-center border-r p-1.5',
                  children: (0, i.jsx)(r.zx, {
                    variant: 'ghost',
                    size: 'icon',
                    onClick: e,
                    children: (0, i.jsx)(n.Z, { className: 'w-5 h-5' }),
                  }),
                }),
                (0, i.jsx)('div', {
                  className: 'p-4',
                  children: (0, i.jsx)('h1', {
                    className: 'text-2xl font-semibold tracking-tight',
                    children: a,
                  }),
                }),
              ],
            }),
            c,
          ],
        });
      }
    },
    65038: function (t, e, a) {
      'use strict';
      a.d(e, {
        _: function () {
          return T;
        },
      });
      var n = a(97857),
        r = a.n(n),
        i = a(13769),
        c = a.n(i),
        o = a(49102),
        s = a(45139),
        u = a(62435),
        l = a(27080),
        m = a(86074),
        d = ['className'],
        C = (0, s.j)(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        ),
        T = u.forwardRef(function (t, e) {
          var a = t.className,
            n = c()(t, d);
          return (0, m.jsx)(
            o.f,
            r()({ ref: e, className: (0, l.cn)(C(), a) }, n),
          );
        });
      T.displayName = o.f.displayName;
    },
    2834: function (t, e, a) {
      'use strict';
      a.d(e, {
        r: function () {
          return d;
        },
      });
      var n = a(97857),
        r = a.n(n),
        i = a(13769),
        c = a.n(i),
        o = a(60761),
        s = a(62435),
        u = a(27080),
        l = a(86074),
        m = ['className'],
        d = s.forwardRef(function (t, e) {
          var a = t.className,
            n = c()(t, m);
          return (0, l.jsx)(
            o.fC,
            r()(
              r()(
                {
                  className: (0, u.cn)(
                    'peer inline-flex h-3.5 w-6 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-background-checked data-[state=unchecked]:bg-text-sub-title',
                    a,
                  ),
                },
                n,
              ),
              {},
              {
                ref: e,
                children: (0, l.jsx)(o.bU, {
                  className: (0, u.cn)(
                    'pointer-events-none block size-3 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-2 data-[state=unchecked]:translate-x-0',
                  ),
                }),
              },
            ),
          );
        });
      d.displayName = o.fC.displayName;
    },
    96330: function (t, e, a) {
      'use strict';
      a.d(e, {
        K1: function () {
          return d;
        },
        Rx: function () {
          return i;
        },
        S8: function () {
          return s;
        },
        Vr: function () {
          return u;
        },
        cG: function () {
          return c;
        },
        ld: function () {
          return l;
        },
        n_: function () {
          return m;
        },
        oQ: function () {
          return o;
        },
      });
      var n = a(9783),
        r = a.n(n),
        i = (function (t) {
          return (
            (t.Dataset = 'dataset'),
            (t.Testing = 'testing'),
            (t.Configuration = 'configuration'),
            (t.KnowledgeGraph = 'knowledgeGraph'),
            t
          );
        })({}),
        c = (function (t) {
          return (
            (t.UNSTART = '0'),
            (t.RUNNING = '1'),
            (t.CANCEL = '2'),
            (t.DONE = '3'),
            (t.FAIL = '4'),
            t
          );
        })({}),
        o = (function (t) {
          return (
            (t.Improvise = 'Improvise'),
            (t.Precise = 'Precise'),
            (t.Balance = 'Balance'),
            t
          );
        })({}),
        s = r()(
          r()(
            r()({}, o.Improvise, {
              temperature: 0.8,
              top_p: 0.9,
              frequency_penalty: 0.1,
              presence_penalty: 0.1,
              max_tokens: 4096,
            }),
            o.Precise,
            {
              temperature: 0.2,
              top_p: 0.75,
              frequency_penalty: 0.5,
              presence_penalty: 0.5,
              max_tokens: 4096,
            },
          ),
          o.Balance,
          {
            temperature: 0.5,
            top_p: 0.85,
            frequency_penalty: 0.3,
            presence_penalty: 0.2,
            max_tokens: 4096,
          },
        ),
        u = (function (t) {
          return (
            (t.Embedding = 'embedding'),
            (t.Chat = 'chat'),
            (t.Image2text = 'image2text'),
            (t.Speech2text = 'speech2text'),
            (t.Rerank = 'rerank'),
            (t.TTS = 'tts'),
            t
          );
        })({}),
        l = (function (t) {
          return (t.DocumentId = 'doc_id'), (t.KnowledgeId = 'id'), t;
        })({}),
        m = (function (t) {
          return (t.Virtual = 'virtual'), (t.Visual = 'visual'), t;
        })({}),
        d = (function (t) {
          return (
            (t.Naive = 'naive'),
            (t.Qa = 'qa'),
            (t.Resume = 'resume'),
            (t.Manual = 'manual'),
            (t.Table = 'table'),
            (t.Paper = 'paper'),
            (t.Book = 'book'),
            (t.Laws = 'laws'),
            (t.Presentation = 'presentation'),
            (t.Picture = 'picture'),
            (t.One = 'one'),
            (t.Audio = 'audio'),
            (t.Email = 'email'),
            (t.Tag = 'tag'),
            (t.KnowledgeGraph = 'knowledge_graph'),
            t
          );
        })({});
    },
    9450: function (t, e, a) {
      'use strict';
      a.d(e, {
        A4: function () {
          return c;
        },
        H7: function () {
          return n;
        },
        WS: function () {
          return i;
        },
        qh: function () {
          return r;
        },
        rQ: function () {
          return o;
        },
      });
      var n = 'user-setting',
        r = (function (t) {
          return (
            (t.Profile = 'profile'),
            (t.Password = 'password'),
            (t.Model = 'model'),
            (t.System = 'system'),
            (t.Api = 'api'),
            (t.Team = 'team'),
            (t.Logout = 'logout'),
            t
          );
        })({}),
        i = 'profile-setting',
        c = (function (t) {
          return (
            (t.Profile = 'profile'),
            (t.Plan = 'plan'),
            (t.Model = 'model'),
            (t.System = 'system'),
            (t.Api = 'api'),
            (t.Team = 'team'),
            (t.Prompt = 'prompt'),
            (t.Chunk = 'chunk'),
            (t.Logout = 'logout'),
            t
          );
        })({}),
        o = [
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
    704: function (t, e, a) {
      'use strict';
      a.d(e, {
        $: function () {
          return m;
        },
        t: function () {
          return l;
        },
      });
      var n = a(9783),
        r = a.n(n),
        i = a(5574),
        c = a.n(i),
        o = a(23454),
        s = a(62435),
        u = a(42028),
        l = (function (t) {
          return (t.KnowledgeId = 'knowledgeId'), t;
        })({}),
        m = function () {
          var t = (0, u.s0)(),
            e = (0, u.lr)(),
            a = c()(e, 1)[0],
            n = (0, u.UO)().id,
            i = (0, s.useCallback)(
              function () {
                t(o.Z.Datasets);
              },
              [t],
            ),
            m = (0, s.useCallback)(
              function (e) {
                return function () {
                  t(''.concat(o.Z.Dataset, '/').concat(e));
                };
              },
              [t],
            ),
            d = (0, s.useCallback)(
              function () {
                t(o.Z.Home);
              },
              [t],
            ),
            C = (0, s.useCallback)(
              function () {
                t(o.Z.ProfileSetting);
              },
              [t],
            ),
            T = (0, s.useCallback)(
              function () {
                t(o.Z.Chats);
              },
              [t],
            ),
            g = (0, s.useCallback)(
              function () {
                t(o.Z.Chat);
              },
              [t],
            ),
            f = (0, s.useCallback)(
              function () {
                t(o.Z.Agents);
              },
              [t],
            ),
            U = (0, s.useCallback)(
              function (e) {
                return function () {
                  t(''.concat(o.Z.Agent, '/').concat(e));
                };
              },
              [t],
            ),
            p = (0, s.useCallback)(
              function () {
                t(o.Z.AgentTemplates);
              },
              [t],
            ),
            A = (0, s.useCallback)(
              function () {
                t(o.Z.Searches);
              },
              [t],
            ),
            h = (0, s.useCallback)(
              function () {
                t(o.Z.Search);
              },
              [t],
            ),
            k = (0, s.useCallback)(
              function (e, a) {
                return function () {
                  t(
                    ''
                      .concat(o.Z.ParsedResult, '/chunks?id=')
                      .concat(a, '&doc_id=')
                      .concat(e),
                  );
                };
              },
              [t],
            ),
            v = (0, s.useCallback)(
              function (t) {
                var e = r()({}, l.KnowledgeId, a.get(l.KnowledgeId));
                return t ? e[t] : e;
              },
              [a],
            ),
            _ = (0, s.useCallback)(
              function (e) {
                t(
                  ''
                    .concat(e, '/')
                    .concat(n, '?')
                    .concat(l.KnowledgeId, '=')
                    .concat(v(l.KnowledgeId)),
                );
              },
              [v, n, t],
            ),
            y = (0, s.useCallback)(
              function (e) {
                t(''.concat(o.Z.Files, '?folderId=').concat(e));
              },
              [t],
            );
          return {
            navigateToDatasetList: i,
            navigateToDataset: m,
            navigateToHome: d,
            navigateToProfile: C,
            navigateToChatList: T,
            navigateToChat: g,
            navigateToChunkParsedResult: k,
            getQueryString: v,
            navigateToChunk: _,
            navigateToAgentList: f,
            navigateToAgent: U,
            navigateToAgentTemplates: p,
            navigateToSearchList: A,
            navigateToSearch: h,
            navigateToFiles: y,
          };
        };
    },
    51509: function (t, e, a) {
      'use strict';
      a.d(e, {
        Ay: function () {
          return p;
        },
        PV: function () {
          return A;
        },
        UK: function () {
          return _;
        },
        aU: function () {
          return v;
        },
        f0: function () {
          return h;
        },
        mr: function () {
          return k;
        },
      });
      var n = a(5574),
        r = a.n(n),
        i = a(15009),
        c = a.n(i),
        o = a(99289),
        s = a.n(o),
        u = a(39918),
        l = a(72668),
        m = a(61921),
        d = a(78551),
        C = a(4527),
        T = a(45360),
        g = a(22150),
        f = a(62435),
        U = a(67421),
        p = function () {
          var t,
            e = (0, d.a)({
              queryKey: ['loginChannels'],
              queryFn:
                ((t = s()(
                  c()().mark(function t() {
                    var e, a, n;
                    return c()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), (0, l.vi)();
                          case 2:
                            return (
                              (e = t.sent),
                              (a = e.data),
                              (n = void 0 === a ? {} : a),
                              t.abrupt('return', n.data || [])
                            );
                          case 6:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function () {
                  return t.apply(this, arguments);
                }),
            });
          return { channels: e.data, loading: e.isLoading };
        },
        A = function () {
          var t,
            e = (0, C.D)({
              mutationKey: ['loginWithChannel'],
              mutationFn:
                ((t = s()(
                  c()().mark(function t(e) {
                    return c()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (0, l.nO)(e),
                              t.abrupt('return', Promise.resolve())
                            );
                          case 2:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function (e) {
                  return t.apply(this, arguments);
                }),
            });
          return { loading: e.isPending, login: e.mutateAsync };
        },
        h = function () {
          var t,
            e = (0, U.$G)().t,
            a = (0, C.D)({
              mutationKey: ['login'],
              mutationFn:
                ((t = s()(
                  c()().mark(function t(a) {
                    var n, r, i, o, s, d, C, g;
                    return c()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.login(a);
                          case 2:
                            return (
                              (n = t.sent),
                              (r = n.data),
                              (i = void 0 === r ? {} : r),
                              (o = n.response),
                              0 === i.code &&
                                ((s = i.data),
                                T.ZP.success(e('message.logged')),
                                (d = o.headers.get(u._n)),
                                (C = s.access_token),
                                (g = {
                                  avatar: s.avatar,
                                  name: s.nickname,
                                  email: s.email,
                                }),
                                m.ZP.setItems({
                                  Authorization: d,
                                  userInfo: JSON.stringify(g),
                                  Token: C,
                                })),
                              t.abrupt('return', i.code)
                            );
                          case 8:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function (e) {
                  return t.apply(this, arguments);
                }),
            });
          return { data: a.data, loading: a.isPending, login: a.mutateAsync };
        },
        k = function () {
          var t,
            e = (0, U.$G)().t,
            a = (0, C.D)({
              mutationKey: ['register'],
              mutationFn:
                ((t = s()(
                  c()().mark(function t(a) {
                    var n, r, i;
                    return c()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.register(a);
                          case 2:
                            return (
                              (n = t.sent),
                              (r = n.data),
                              0 === (i = void 0 === r ? {} : r).code
                                ? T.ZP.success(e('message.registered'))
                                : i.message &&
                                  i.message.includes(
                                    'registration is disabled',
                                  ) &&
                                  T.ZP.error(
                                    e('message.registerDisabled') ||
                                      'User registration is disabled',
                                  ),
                              t.abrupt('return', i.code)
                            );
                          case 7:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function (e) {
                  return t.apply(this, arguments);
                }),
            });
          return {
            data: a.data,
            loading: a.isPending,
            register: a.mutateAsync,
          };
        },
        v = function () {
          var t,
            e = (0, U.$G)().t,
            a = (0, C.D)({
              mutationKey: ['logout'],
              mutationFn:
                ((t = s()(
                  c()().mark(function t() {
                    var a, n, r;
                    return c()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.logout();
                          case 2:
                            return (
                              (a = t.sent),
                              (n = a.data),
                              0 === (r = void 0 === n ? {} : n).code &&
                                (T.ZP.success(e('message.logout')),
                                m.ZP.removeAll(),
                                (0, m.rf)()),
                              t.abrupt('return', r.code)
                            );
                          case 7:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                function () {
                  return t.apply(this, arguments);
                }),
            });
          return { data: a.data, loading: a.isPending, logout: a.mutateAsync };
        },
        _ = function (t) {
          var e = (0, f.useState)(!1),
            a = r()(e, 2),
            n = a[0],
            i = a[1],
            c = g.Z.useWatch([], t);
          return (
            (0, f.useEffect)(
              function () {
                t.validateFields({ validateOnly: !0 })
                  .then(function () {
                    return i(!0);
                  })
                  .catch(function () {
                    return i(!1);
                  });
              },
              [t, c],
            ),
            { submittable: n }
          );
        };
    },
    96100: function (t, e, a) {
      'use strict';
      a.d(e, {
        HK: function () {
          return m;
        },
        Uu: function () {
          return l;
        },
        fz: function () {
          return g;
        },
        nT: function () {
          return T;
        },
        pE: function () {
          return d;
        },
        wy: function () {
          return C;
        },
      });
      var n = a(5574),
        r = a.n(n),
        i = a(96330),
        c = a(62435),
        o = a(42028),
        s = (function (t) {
          return (t.Second = '2'), (t.Third = '3'), t;
        })({}),
        u = function (t) {
          return (0, o.TH)().pathname.split('/')[t] || '';
        },
        l = function () {
          return u(s.Second);
        },
        m = function () {
          return u(s.Third);
        },
        d = function () {
          var t = (0, o.lr)(),
            e = r()(t, 1)[0];
          return {
            documentId: e.get(i.ld.DocumentId) || '',
            knowledgeId: e.get(i.ld.KnowledgeId) || '',
          };
        },
        C = function () {
          var t = (0, o.s0)();
          return (0, c.useCallback)(
            function (e) {
              t(e, { state: { from: e } });
            },
            [t],
          );
        },
        T = function () {
          var t = (0, o.s0)(),
            e = d().knowledgeId;
          return (0, c.useCallback)(
            function () {
              t('/knowledge/'.concat(i.Rx.Dataset, '?id=').concat(e));
            },
            [e, t],
          );
        },
        g = function () {
          var t = (0, o.lr)(),
            e = r()(t, 2),
            a = e[0],
            n = e[1],
            i = (0, c.useCallback)(
              function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1,
                  e = arguments.length > 1 ? arguments[1] : void 0;
                a.set('page', t.toString()),
                  e && a.set('size', e.toString()),
                  n(a);
              },
              [n, a],
            );
          return {
            setPaginationParams: i,
            page: Number(a.get('page')) || 1,
            size: Number(a.get('size')) || 10,
          };
        };
    },
    48397: function (t, e, a) {
      'use strict';
      a.r(e),
        a.d(e, {
          default: function () {
            return x;
          },
        });
      var n = a(36646),
        r = a(704),
        i = a(42028),
        c = a(98236),
        o = a(57636),
        s = a(65038),
        u = a(2834),
        l = a(9450),
        m = a(51509),
        d = a(96100),
        C = a(27080),
        T = a(91373);
      const g = (0, T.Z)('user', [
          [
            'path',
            { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' },
          ],
          ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }],
        ]),
        f = (0, T.Z)('layout-grid', [
          [
            'rect',
            { width: '7', height: '7', x: '3', y: '3', rx: '1', key: '1g98yp' },
          ],
          [
            'rect',
            {
              width: '7',
              height: '7',
              x: '14',
              y: '3',
              rx: '1',
              key: '6d4xhi',
            },
          ],
          [
            'rect',
            {
              width: '7',
              height: '7',
              x: '14',
              y: '14',
              rx: '1',
              key: 'nxv5o0',
            },
          ],
          [
            'rect',
            {
              width: '7',
              height: '7',
              x: '3',
              y: '14',
              rx: '1',
              key: '1bb6yr',
            },
          ],
        ]);
      var U = a(64154);
      const p = (0, T.Z)('box', [
          [
            'path',
            {
              d: 'M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z',
              key: 'hh9hay',
            },
          ],
          ['path', { d: 'm3.3 7 8.7 5 8.7-5', key: 'g66t2b' }],
          ['path', { d: 'M12 22V12', key: 'd0xqtd' }],
        ]),
        A = (0, T.Z)('file-cog', [
          ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
          ['path', { d: 'm2.305 15.53.923-.382', key: 'yfp9st' }],
          ['path', { d: 'm3.228 12.852-.924-.383', key: 'bckynb' }],
          [
            'path',
            {
              d: 'M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5',
              key: '1yo3oz',
            },
          ],
          ['path', { d: 'm4.852 11.228-.383-.923', key: '1j88i9' }],
          ['path', { d: 'm4.852 16.772-.383.924', key: 'sag1dv' }],
          ['path', { d: 'm7.148 11.228.383-.923', key: 'rj39hk' }],
          ['path', { d: 'm7.53 17.696-.382-.924', key: '1uu5cs' }],
          ['path', { d: 'm8.772 12.852.923-.383', key: '13811l' }],
          ['path', { d: 'm8.772 15.148.923.383', key: 'z1a5l0' }],
          ['circle', { cx: '6', cy: '14', r: '3', key: 'a1xfv6' }],
        ]),
        h = (0, T.Z)('align-end-vertical', [
          [
            'rect',
            {
              width: '16',
              height: '6',
              x: '2',
              y: '4',
              rx: '2',
              key: '10wcwx',
            },
          ],
          [
            'rect',
            {
              width: '9',
              height: '6',
              x: '9',
              y: '14',
              rx: '2',
              key: '4p5bwg',
            },
          ],
          ['path', { d: 'M22 22V2', key: '12ipfv' }],
        ]);
      var k = a(78051),
        v = a(62435),
        _ = function () {
          var t = (0, i.s0)(),
            e = (0, m.aU)().logout;
          return {
            handleMenuClick: (0, v.useCallback)(
              function (a) {
                return function () {
                  a === l.A4.Logout ? e() : t('/'.concat(l.WS, '/').concat(a));
                };
              },
              [e, t],
            ),
          };
        },
        y = a(86074),
        b = [
          {
            section: 'Account & collaboration',
            items: [
              { icon: g, label: 'Profile', key: l.A4.Profile },
              { icon: f, label: 'Team', key: l.A4.Team },
              { icon: U.Z, label: 'Plan', key: l.A4.Plan },
            ],
          },
          {
            section: 'System configurations',
            items: [
              { icon: p, label: 'Model management', key: l.A4.Model },
              { icon: A, label: 'Prompt management', key: l.A4.Prompt },
              { icon: h, label: 'Chunking method', key: l.A4.Chunk },
            ],
          },
        ];
      function P() {
        var t = (0, d.Uu)(),
          e = _().handleMenuClick,
          a = (0, c.Fg)().setTheme,
          n = (0, c.e5)(),
          r = (0, m.aU)().logout,
          i = (0, v.useCallback)(
            function (t) {
              a(t ? 'dark' : 'light');
            },
            [a],
          );
        return (0, y.jsxs)('aside', {
          className: 'w-[303px] bg-background border-r flex flex-col',
          children: [
            (0, y.jsx)('div', {
              className: 'flex-1 overflow-auto',
              children: b.map(function (a, n) {
                return (0, y.jsxs)(
                  'div',
                  {
                    children: [
                      (0, y.jsx)('h2', {
                        className: 'p-6 text-sm font-semibold',
                        children: a.section,
                      }),
                      a.items.map(function (a, n) {
                        var r = t === a.key;
                        return (0, y.jsxs)(
                          o.zx,
                          {
                            variant: r ? 'secondary' : 'ghost',
                            className: (0, C.cn)(
                              'w-full justify-start gap-2.5 p-6 relative',
                            ),
                            onClick: e(a.key),
                            children: [
                              (0, y.jsx)(a.icon, { className: 'w-6 h-6' }),
                              (0, y.jsx)('span', { children: a.label }),
                              r &&
                                (0, y.jsx)('div', {
                                  className:
                                    'absolute right-0 w-[5px] h-[66px] bg-primary rounded-l-xl shadow-[0_0_5.94px_#7561ff,0_0_11.88px_#7561ff,0_0_41.58px_#7561ff,0_0_83.16px_#7561ff,0_0_142.56px_#7561ff,0_0_249.48px_#7561ff]',
                                }),
                            ],
                          },
                          n,
                        );
                      }),
                    ],
                  },
                  n,
                );
              }),
            }),
            (0, y.jsxs)('div', {
              className: 'p-6 mt-auto border-t',
              children: [
                (0, y.jsxs)('div', {
                  className: 'flex items-center gap-2 mb-6',
                  children: [
                    (0, y.jsx)(u.r, {
                      id: 'dark-mode',
                      onCheckedChange: i,
                      checked: n,
                    }),
                    (0, y.jsx)(s._, {
                      htmlFor: 'dark-mode',
                      className: 'text-sm',
                      children: 'Dark',
                    }),
                  ],
                }),
                (0, y.jsxs)(o.zx, {
                  variant: 'outline',
                  className: 'w-full gap-3',
                  onClick: function () {
                    r();
                  },
                  children: [
                    (0, y.jsx)(k.Z, { className: 'w-6 h-6' }),
                    'Logout',
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function x() {
        var t = (0, r.$)().navigateToHome;
        return (0, y.jsxs)('div', {
          className:
            'flex flex-col w-full h-screen bg-background text-foreground',
          children: [
            (0, y.jsx)(n.m, { title: 'Profile & settings', back: t }),
            (0, y.jsxs)('div', {
              className: 'flex flex-1 bg-muted/50',
              children: [
                (0, y.jsx)(P, {}),
                (0, y.jsx)('main', {
                  className: 'flex-1 ',
                  children: (0, y.jsx)(i.j3, {}),
                }),
              ],
            }),
          ],
        });
      }
    },
    23454: function (t, e, a) {
      'use strict';
      a.d(e, {
        Z: function () {
          return n;
        },
      });
      var n = (function (t) {
        return (
          (t.Login = '/login'),
          (t.Home = '/home'),
          (t.Datasets = '/datasets'),
          (t.DatasetBase = '/dataset'),
          (t[(t.Dataset = ''.concat(t.DatasetBase).concat(t.DatasetBase))] =
            'Dataset'),
          (t.Agent = '/agent'),
          (t.AgentTemplates = '/agent-templates'),
          (t.Agents = '/agents'),
          (t.Searches = '/next-searches'),
          (t.Search = '/next-search'),
          (t.Chats = '/next-chats'),
          (t.Chat = '/next-chat'),
          (t.Files = '/files'),
          (t.ProfileSetting = '/profile-setting'),
          (t.DatasetTesting = '/testing'),
          (t.DatasetSetting = '/setting'),
          (t.Chunk = '/chunk'),
          (t.ChunkResult = '/chunk/chunk'),
          (t.Parsed = '/parsed'),
          (t.ParsedResult = '/chunk/parsed'),
          (t.Result = '/result'),
          (t.ResultView = '/chunk/result'),
          t
        );
      })({});
      n.Home,
        n.Home,
        '@/pages'.concat(n.Home),
        n.Datasets,
        n.Datasets,
        '@/pages'.concat(n.Datasets),
        n.Chats,
        n.Chats,
        '@/pages'.concat(n.Chats),
        n.Chat,
        '@/pages'.concat(n.Chats, '/chat'),
        n.Searches,
        n.Searches,
        '@/pages'.concat(n.Searches),
        n.Search,
        '@/pages'.concat(n.Search),
        n.Agents,
        n.Agents,
        '@/pages'.concat(n.Agents),
        ''.concat(n.Agent, '/:id'),
        '@/pages'.concat(n.Agent),
        n.AgentTemplates,
        '@/pages'.concat(n.Agents).concat(n.AgentTemplates),
        n.Files,
        n.Files,
        '@/pages'.concat(n.Files),
        n.DatasetBase,
        n.DatasetBase,
        n.Dataset,
        n.DatasetBase,
        '@/pages'.concat(n.DatasetBase),
        ''.concat(n.Dataset, '/:id'),
        '@/pages'.concat(n.Dataset),
        ''.concat(n.DatasetBase).concat(n.DatasetSetting, '/:id'),
        '@/pages'.concat(n.DatasetBase).concat(n.DatasetSetting),
        ''.concat(n.DatasetBase).concat(n.DatasetTesting, '/:id'),
        '@/pages'.concat(n.DatasetBase).concat(n.DatasetTesting),
        ''.concat(n.ParsedResult, '/chunks'),
        '@/pages'.concat(
          n.Chunk,
          '/parsed-result/add-knowledge/components/knowledge-chunk',
        ),
        n.Chunk,
        n.Chunk,
        '@/pages'.concat(n.Chunk),
        ''.concat(n.ChunkResult, '/:id'),
        '@/pages'.concat(n.Chunk, '/chunk-result'),
        ''.concat(n.ResultView, '/:id'),
        '@/pages'.concat(n.Chunk, '/result-view'),
        n.Chunk,
        '@/pages'.concat(n.Chunk),
        n.ProfileSetting,
        '@/pages'.concat(n.ProfileSetting),
        n.ProfileSetting,
        ''.concat(n.ProfileSetting, '/profile'),
        ''.concat(n.ProfileSetting, '/profile'),
        '@/pages'.concat(n.ProfileSetting, '/profile'),
        ''.concat(n.ProfileSetting, '/team'),
        '@/pages'.concat(n.ProfileSetting, '/team'),
        ''.concat(n.ProfileSetting, '/plan'),
        '@/pages'.concat(n.ProfileSetting, '/plan'),
        ''.concat(n.ProfileSetting, '/model'),
        '@/pages'.concat(n.ProfileSetting, '/model'),
        ''.concat(n.ProfileSetting, '/prompt'),
        '@/pages'.concat(n.ProfileSetting, '/prompt');
    },
    72668: function (t, e, a) {
      'use strict';
      a.d(e, {
        AH: function () {
          return M;
        },
        EE: function () {
          return D;
        },
        FG: function () {
          return j;
        },
        WX: function () {
          return E;
        },
        nO: function () {
          return Z;
        },
        vh: function () {
          return N;
        },
        vi: function () {
          return w;
        },
      });
      var n = a(60806),
        r = a(66582),
        i = a(78158),
        c = n.Z.login,
        o = n.Z.logout,
        s = n.Z.register,
        u = n.Z.setting,
        l = n.Z.user_info,
        m = n.Z.tenant_info,
        d = n.Z.factories_list,
        C = n.Z.llm_list,
        T = n.Z.my_llm,
        g = n.Z.set_api_key,
        f = n.Z.set_tenant_info,
        U = n.Z.add_llm,
        p = n.Z.delete_llm,
        A = n.Z.deleteFactory,
        h = n.Z.getSystemStatus,
        k = n.Z.getSystemVersion,
        v = n.Z.getSystemTokenList,
        _ = n.Z.removeSystemToken,
        y = n.Z.createSystemToken,
        b = n.Z.getSystemConfig,
        P = n.Z.setLangfuseConfig,
        x = {
          login: { url: c, method: 'post' },
          logout: { url: o, method: 'get' },
          register: { url: s, method: 'post' },
          setting: { url: u, method: 'post' },
          user_info: { url: l, method: 'get' },
          get_tenant_info: { url: m, method: 'get' },
          set_tenant_info: { url: f, method: 'post' },
          factories_list: { url: d, method: 'get' },
          llm_list: { url: C, method: 'get' },
          my_llm: { url: T, method: 'get' },
          set_api_key: { url: g, method: 'post' },
          add_llm: { url: U, method: 'post' },
          delete_llm: { url: p, method: 'post' },
          getSystemStatus: { url: h, method: 'get' },
          getSystemVersion: { url: k, method: 'get' },
          deleteFactory: { url: A, method: 'post' },
          listToken: { url: v, method: 'get' },
          createToken: { url: y, method: 'post' },
          removeToken: { url: _, method: 'delete' },
          getSystemConfig: { url: b, method: 'get' },
          setLangfuseConfig: { url: P, method: 'put' },
          getLangfuseConfig: { url: P, method: 'get' },
          deleteLangfuseConfig: { url: P, method: 'delete' },
        },
        S = (0, r.Z)(x, i.ZP),
        w = function () {
          return i.ZP.get(n.Z.login_channels);
        },
        Z = function (t) {
          return (window.location.href = n.Z.login_channel(t));
        },
        E = function (t) {
          return i.ZP.get(n.Z.listTenantUser(t));
        },
        M = function (t, e) {
          return (0, i.v_)(n.Z.addTenantUser(t), { email: e });
        },
        D = function (t) {
          var e = t.tenantId,
            a = t.userId;
          return i.ZP.delete(n.Z.deleteTenantUser(e, a));
        },
        N = function () {
          return i.ZP.get(n.Z.listTenant);
        },
        j = function (t) {
          return i.ZP.put(n.Z.agreeTenant(t));
        };
      e.ZP = S;
    },
    60806: function (t, e, a) {
      'use strict';
      a.d(e, {
        N: function () {
          return n;
        },
      });
      var n = '/v1';
      e.Z = {
        login: ''.concat(n, '/user/login'),
        logout: ''.concat(n, '/user/logout'),
        register: ''.concat(n, '/user/register'),
        setting: ''.concat(n, '/user/setting'),
        user_info: ''.concat(n, '/user/info'),
        tenant_info: ''.concat(n, '/user/tenant_info'),
        set_tenant_info: ''.concat(n, '/user/set_tenant_info'),
        login_channels: ''.concat(n, '/user/login/channels'),
        login_channel: function (t) {
          return ''.concat(n, '/user/login/').concat(t);
        },
        addTenantUser: function (t) {
          return ''.concat(n, '/tenant/').concat(t, '/user');
        },
        listTenantUser: function (t) {
          return ''.concat(n, '/tenant/').concat(t, '/user/list');
        },
        deleteTenantUser: function (t, e) {
          return ''.concat(n, '/tenant/').concat(t, '/user/').concat(e);
        },
        listTenant: ''.concat(n, '/tenant/list'),
        agreeTenant: function (t) {
          return ''.concat(n, '/tenant/agree/').concat(t);
        },
        factories_list: ''.concat(n, '/llm/factories'),
        llm_list: ''.concat(n, '/llm/list'),
        my_llm: ''.concat(n, '/llm/my_llms'),
        set_api_key: ''.concat(n, '/llm/set_api_key'),
        add_llm: ''.concat(n, '/llm/add_llm'),
        delete_llm: ''.concat(n, '/llm/delete_llm'),
        deleteFactory: ''.concat(n, '/llm/delete_factory'),
        llm_tools: ''.concat(n, '/plugin/llm_tools'),
        kb_list: ''.concat(n, '/kb/list'),
        create_kb: ''.concat(n, '/kb/create'),
        update_kb: ''.concat(n, '/kb/update'),
        rm_kb: ''.concat(n, '/kb/rm'),
        get_kb_detail: ''.concat(n, '/kb/detail'),
        getKnowledgeGraph: function (t) {
          return ''.concat(n, '/kb/').concat(t, '/knowledge_graph');
        },
        listTag: function (t) {
          return ''.concat(n, '/kb/').concat(t, '/tags');
        },
        listTagByKnowledgeIds: ''.concat(n, '/kb/tags'),
        removeTag: function (t) {
          return ''.concat(n, '/kb/').concat(t, '/rm_tags');
        },
        renameTag: function (t) {
          return ''.concat(n, '/kb/').concat(t, '/rename_tag');
        },
        chunk_list: ''.concat(n, '/chunk/list'),
        create_chunk: ''.concat(n, '/chunk/create'),
        set_chunk: ''.concat(n, '/chunk/set'),
        get_chunk: ''.concat(n, '/chunk/get'),
        switch_chunk: ''.concat(n, '/chunk/switch'),
        rm_chunk: ''.concat(n, '/chunk/rm'),
        retrieval_test: ''.concat(n, '/chunk/retrieval_test'),
        knowledge_graph: ''.concat(n, '/chunk/knowledge_graph'),
        get_document_list: ''.concat(n, '/document/list'),
        document_change_status: ''.concat(n, '/document/change_status'),
        document_rm: ''.concat(n, '/document/rm'),
        document_delete: ''.concat(n, '/api/document'),
        document_rename: ''.concat(n, '/document/rename'),
        document_create: ''.concat(n, '/document/create'),
        document_run: ''.concat(n, '/document/run'),
        document_change_parser: ''.concat(n, '/document/change_parser'),
        document_thumbnails: ''.concat(n, '/document/thumbnails'),
        get_document_file: ''.concat(n, '/document/get'),
        document_upload: ''.concat(n, '/document/upload'),
        web_crawl: ''.concat(n, '/document/web_crawl'),
        document_infos: ''.concat(n, '/document/infos'),
        upload_and_parse: ''.concat(n, '/document/upload_and_parse'),
        parse: ''.concat(n, '/document/parse'),
        setMeta: ''.concat(n, '/document/set_meta'),
        setDialog: ''.concat(n, '/dialog/set'),
        getDialog: ''.concat(n, '/dialog/get'),
        removeDialog: ''.concat(n, '/dialog/rm'),
        listDialog: ''.concat(n, '/dialog/list'),
        setConversation: ''.concat(n, '/conversation/set'),
        getConversation: ''.concat(n, '/conversation/get'),
        getConversationSSE: ''.concat(n, '/conversation/getsse'),
        listConversation: ''.concat(n, '/conversation/list'),
        removeConversation: ''.concat(n, '/conversation/rm'),
        completeConversation: ''.concat(n, '/conversation/completion'),
        deleteMessage: ''.concat(n, '/conversation/delete_msg'),
        thumbup: ''.concat(n, '/conversation/thumbup'),
        tts: ''.concat(n, '/conversation/tts'),
        ask: ''.concat(n, '/conversation/ask'),
        mindmap: ''.concat(n, '/conversation/mindmap'),
        getRelatedQuestions: ''.concat(n, '/conversation/related_questions'),
        createToken: ''.concat(n, '/api/new_token'),
        listToken: ''.concat(n, '/api/token_list'),
        removeToken: ''.concat(n, '/api/rm'),
        getStats: ''.concat(n, '/api/stats'),
        createExternalConversation: ''.concat(n, '/api/new_conversation'),
        getExternalConversation: ''.concat(n, '/api/conversation'),
        completeExternalConversation: ''.concat(n, '/api/completion'),
        uploadAndParseExternal: ''.concat(n, '/api/document/upload_and_parse'),
        listFile: ''.concat(n, '/file/list'),
        uploadFile: ''.concat(n, '/file/upload'),
        removeFile: ''.concat(n, '/file/rm'),
        renameFile: ''.concat(n, '/file/rename'),
        getAllParentFolder: ''.concat(n, '/file/all_parent_folder'),
        createFolder: ''.concat(n, '/file/create'),
        connectFileToKnowledge: ''.concat(n, '/file2document/convert'),
        getFile: ''.concat(n, '/file/get'),
        moveFile: ''.concat(n, '/file/mv'),
        getSystemVersion: ''.concat(n, '/system/version'),
        getSystemStatus: ''.concat(n, '/system/status'),
        getSystemTokenList: ''.concat(n, '/system/token_list'),
        createSystemToken: ''.concat(n, '/system/new_token'),
        listSystemToken: ''.concat(n, '/system/token_list'),
        removeSystemToken: ''.concat(n, '/system/token'),
        getSystemConfig: ''.concat(n, '/system/config'),
        setLangfuseConfig: ''.concat(n, '/langfuse/api_key'),
        listTemplates: ''.concat(n, '/canvas/templates'),
        listCanvas: ''.concat(n, '/canvas/list'),
        listCanvasTeam: ''.concat(n, '/canvas/listteam'),
        getCanvas: ''.concat(n, '/canvas/get'),
        getCanvasSSE: ''.concat(n, '/canvas/getsse'),
        removeCanvas: ''.concat(n, '/canvas/rm'),
        setCanvas: ''.concat(n, '/canvas/set'),
        settingCanvas: ''.concat(n, '/canvas/setting'),
        getListVersion: ''.concat(n, '/canvas/getlistversion'),
        getVersion: ''.concat(n, '/canvas/getversion'),
        resetCanvas: ''.concat(n, '/canvas/reset'),
        runCanvas: ''.concat(n, '/canvas/completion'),
        testDbConnect: ''.concat(n, '/canvas/test_db_connect'),
        getInputElements: ''.concat(n, '/canvas/input_elements'),
        debug: ''.concat(n, '/canvas/debug'),
        getMcpServerList: ''.concat(n, '/mcp_server/list'),
        getMultipleMcpServers: ''.concat(n, '/mcp_server/get_multiple'),
        getMcpServer: function (t) {
          return ''.concat(n, '/mcp_server/get/').concat(t);
        },
        createMcpServer: ''.concat(n, '/mcp_server/create'),
        updateMcpServer: ''.concat(n, '/mcp_server/update'),
        deleteMcpServer: ''.concat(n, '/mcp_server/rm'),
      };
    },
    66582: function (t, e, a) {
      'use strict';
      var n = a(97857),
        r = a.n(n),
        i = a(57557),
        c = a.n(i),
        o = ['post', 'delete', 'put'];
      e.Z = function (t, e) {
        var a = {},
          n = function (n) {
            a[n] = function (a, i) {
              var s = t[n].url,
                u = t[n];
              return (
                i && (s = s + '/' + i),
                o.some(function (e) {
                  return e === t[n].method.toLowerCase();
                })
                  ? e(s, { method: t[n].method, data: a })
                  : 'get' === t[n].method || 'GET' === t[n].method
                    ? e.get(
                        s,
                        r()(
                          r()({}, c()(u, ['method', 'url'])),
                          {},
                          { params: a },
                        ),
                      )
                    : void 0
              );
            };
          };
        for (var i in t) n(i);
        return a;
      };
    },
    78158: function (t, e, a) {
      'use strict';
      a.d(e, {
        v_: function () {
          return h;
        },
      });
      var n = a(15009),
        r = a.n(n),
        i = a(99289),
        c = a.n(i),
        o = a(9783),
        s = a.n(o),
        u = a(97857),
        l = a.n(u),
        m = a(39918),
        d = a(54707),
        C = a(61921),
        T = a(26855),
        g = a(45360),
        f = a(11238),
        U = a(31098),
        p = {
          200: d.Z.t('message.200'),
          201: d.Z.t('message.201'),
          202: d.Z.t('message.202'),
          204: d.Z.t('message.204'),
          400: d.Z.t('message.400'),
          401: d.Z.t('message.401'),
          403: d.Z.t('message.403'),
          404: d.Z.t('message.404'),
          406: d.Z.t('message.406'),
          410: d.Z.t('message.410'),
          413: d.Z.t('message.413'),
          422: d.Z.t('message.422'),
          500: d.Z.t('message.500'),
          502: d.Z.t('message.502'),
          503: d.Z.t('message.503'),
          504: d.Z.t('message.504'),
        },
        A = (0, f.l7)({
          errorHandler: function (t) {
            var e = t.response;
            if ('Failed to fetch' === t.message)
              T.Z.error({
                description: d.Z.t('message.networkAnomalyDescription'),
                message: d.Z.t('message.networkAnomaly'),
              });
            else if (e && e.status) {
              var a = p[e.status] || e.statusText,
                n = e.status,
                r = e.url;
              T.Z.error({
                message: ''
                  .concat(d.Z.t('message.requestError'), ' ')
                  .concat(n, ': ')
                  .concat(r),
                description: a,
              });
            }
            return null != e ? e : { data: { code: 1999 } };
          },
          timeout: 3e5,
          getResponse: !0,
        });
      A.interceptors.request.use(function (t, e) {
        var a = (0, U._y)(e.data),
          n = (0, U._y)(e.params);
        return {
          url: t,
          options: l()(
            l()({}, e),
            {},
            {
              data: a,
              params: n,
              headers: l()(
                l()({}, e.skipToken ? void 0 : s()({}, m._n, (0, C.cD)())),
                e.headers,
              ),
              interceptors: !0,
            },
          ),
        };
      }),
        A.interceptors.response.use(
          (function () {
            var t = c()(
              r()().mark(function t(e, a) {
                var n, i;
                return r()().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((413 !== (null == e ? void 0 : e.status) &&
                            504 !== (null == e ? void 0 : e.status)) ||
                            g.ZP.error(p[null == e ? void 0 : e.status]),
                          'blob' !== a.responseType)
                        ) {
                          t.next = 3;
                          break;
                        }
                        return t.abrupt('return', e);
                      case 3:
                        return (
                          (t.next = 5),
                          null == e || null === (n = e.clone()) || void 0 === n
                            ? void 0
                            : n.json()
                        );
                      case 5:
                        return (
                          100 === (null == (i = t.sent) ? void 0 : i.code)
                            ? g.ZP.error(null == i ? void 0 : i.message)
                            : 401 === (null == i ? void 0 : i.code)
                              ? (T.Z.error({
                                  message: null == i ? void 0 : i.message,
                                  description: null == i ? void 0 : i.message,
                                  duration: 3,
                                }),
                                C.ZP.removeAll(),
                                (0, C.rf)())
                              : 0 !== (null == i ? void 0 : i.code) &&
                                T.Z.error({
                                  message: ''
                                    .concat(d.Z.t('message.hint'), ' : ')
                                    .concat(null == i ? void 0 : i.code),
                                  description: null == i ? void 0 : i.message,
                                  duration: 3,
                                }),
                          t.abrupt('return', e)
                        );
                      case 8:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            );
            return function (e, a) {
              return t.apply(this, arguments);
            };
          })(),
        ),
        (e.ZP = A);
      var h = function (t, e) {
        return A.post(t, { data: e });
      };
    },
    53219: function (t, e, a) {
      'use strict';
      a.d(e, {
        Z: function () {
          return n;
        },
      });
      const n = (0, a(91373).Z)('arrow-left', [
        ['path', { d: 'm12 19-7-7 7-7', key: '1l729n' }],
        ['path', { d: 'M19 12H5', key: 'x3x0zl' }],
      ]);
    },
    64154: function (t, e, a) {
      'use strict';
      a.d(e, {
        Z: function () {
          return n;
        },
      });
      const n = (0, a(91373).Z)('banknote', [
        [
          'rect',
          { width: '20', height: '12', x: '2', y: '6', rx: '2', key: '9lu3g6' },
        ],
        ['circle', { cx: '12', cy: '12', r: '2', key: '1c9p78' }],
        ['path', { d: 'M6 12h.01M18 12h.01', key: '113zkx' }],
      ]);
    },
    78051: function (t, e, a) {
      'use strict';
      a.d(e, {
        Z: function () {
          return n;
        },
      });
      const n = (0, a(91373).Z)('log-out', [
        [
          'path',
          { d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4', key: '1uf3rs' },
        ],
        ['polyline', { points: '16 17 21 12 16 7', key: '1gabdz' }],
        ['line', { x1: '21', x2: '9', y1: '12', y2: '12', key: '1uyos4' }],
      ]);
    },
    24654: function () {},
    49102: function (t, e, a) {
      'use strict';
      a.d(e, {
        f: function () {
          return o;
        },
      });
      var n = a(62435),
        r = a(75320),
        i = a(86074),
        c = n.forwardRef((t, e) =>
          (0, i.jsx)(r.WV.label, {
            ...t,
            ref: e,
            onMouseDown: (e) => {
              e.target.closest('button, input, select, textarea') ||
                (t.onMouseDown?.(e),
                !e.defaultPrevented && e.detail > 1 && e.preventDefault());
            },
          }),
        );
      c.displayName = 'Label';
      var o = c;
    },
    60761: function (t, e, a) {
      'use strict';
      a.d(e, {
        bU: function () {
          return _;
        },
        fC: function () {
          return v;
        },
      });
      var n = a(62435),
        r = a(36206),
        i = a(28771),
        c = a(25360),
        o = a(77342),
        s = a(57898),
        u = a(7546),
        l = a(75320),
        m = a(86074),
        d = 'Switch',
        [C, T] = (0, c.b)(d),
        [g, f] = C(d),
        U = n.forwardRef((t, e) => {
          const {
              __scopeSwitch: a,
              name: c,
              checked: s,
              defaultChecked: u,
              required: d,
              disabled: C,
              value: T = 'on',
              onCheckedChange: f,
              form: U,
              ...p
            } = t,
            [A, v] = n.useState(null),
            _ = (0, i.e)(e, (t) => v(t)),
            y = n.useRef(!1),
            b = !A || U || !!A.closest('form'),
            [P = !1, x] = (0, o.T)({ prop: s, defaultProp: u, onChange: f });
          return (0, m.jsxs)(g, {
            scope: a,
            checked: P,
            disabled: C,
            children: [
              (0, m.jsx)(l.WV.button, {
                type: 'button',
                role: 'switch',
                'aria-checked': P,
                'aria-required': d,
                'data-state': k(P),
                'data-disabled': C ? '' : void 0,
                disabled: C,
                value: T,
                ...p,
                ref: _,
                onClick: (0, r.M)(t.onClick, (t) => {
                  x((t) => !t),
                    b &&
                      ((y.current = t.isPropagationStopped()),
                      y.current || t.stopPropagation());
                }),
              }),
              b &&
                (0, m.jsx)(h, {
                  control: A,
                  bubbles: !y.current,
                  name: c,
                  value: T,
                  checked: P,
                  required: d,
                  disabled: C,
                  form: U,
                  style: { transform: 'translateX(-100%)' },
                }),
            ],
          });
        });
      U.displayName = d;
      var p = 'SwitchThumb',
        A = n.forwardRef((t, e) => {
          const { __scopeSwitch: a, ...n } = t,
            r = f(p, a);
          return (0, m.jsx)(l.WV.span, {
            'data-state': k(r.checked),
            'data-disabled': r.disabled ? '' : void 0,
            ...n,
            ref: e,
          });
        });
      A.displayName = p;
      var h = (t) => {
        const { control: e, checked: a, bubbles: r = !0, ...i } = t,
          c = n.useRef(null),
          o = (0, s.D)(a),
          l = (0, u.t)(e);
        return (
          n.useEffect(() => {
            const t = c.current,
              e = window.HTMLInputElement.prototype,
              n = Object.getOwnPropertyDescriptor(e, 'checked').set;
            if (o !== a && n) {
              const e = new Event('click', { bubbles: r });
              n.call(t, a), t.dispatchEvent(e);
            }
          }, [o, a, r]),
          (0, m.jsx)('input', {
            type: 'checkbox',
            'aria-hidden': !0,
            defaultChecked: a,
            ...i,
            tabIndex: -1,
            ref: c,
            style: {
              ...t.style,
              ...l,
              position: 'absolute',
              pointerEvents: 'none',
              opacity: 0,
              margin: 0,
            },
          })
        );
      };
      function k(t) {
        return t ? 'checked' : 'unchecked';
      }
      var v = U,
        _ = A;
    },
    57898: function (t, e, a) {
      'use strict';
      a.d(e, {
        D: function () {
          return r;
        },
      });
      var n = a(62435);
      function r(t) {
        const e = n.useRef({ value: t, previous: t });
        return n.useMemo(
          () => (
            e.current.value !== t &&
              ((e.current.previous = e.current.value), (e.current.value = t)),
            e.current.previous
          ),
          [t],
        );
      }
    },
  },
]);
//# sourceMappingURL=p__profile-setting__index.ae751380.async.js.map
