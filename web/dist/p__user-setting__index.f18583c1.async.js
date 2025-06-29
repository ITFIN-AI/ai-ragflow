/*! For license information please see p__user-setting__index.f18583c1.async.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
  [5410],
  {
    16165: function (t, e, a) {
      'use strict';
      var n = a(87462),
        r = a(1413),
        i = a(4942),
        o = a(45987),
        c = a(62435),
        s = a(93967),
        u = a.n(s),
        l = a(42550),
        m = a(63017),
        d = a(41755),
        f = [
          'className',
          'component',
          'viewBox',
          'spin',
          'rotate',
          'tabIndex',
          'onClick',
          'children',
        ],
        C = c.forwardRef(function (t, e) {
          var a = t.className,
            s = t.component,
            C = t.viewBox,
            T = t.spin,
            p = t.rotate,
            g = t.tabIndex,
            U = t.onClick,
            A = t.children,
            v = (0, o.Z)(t, f),
            h = c.useRef(),
            y = (0, l.x1)(h, e);
          (0, d.Kp)(
            Boolean(s || A),
            'Should have `component` prop or `children`.',
          ),
            (0, d.C3)(h);
          var _ = c.useContext(m.Z),
            k = _.prefixCls,
            b = void 0 === k ? 'anticon' : k,
            P = _.rootClassName,
            w = u()(P, b, a),
            x = u()((0, i.Z)({}, ''.concat(b, '-spin'), !!T)),
            S = p
              ? {
                  msTransform: 'rotate('.concat(p, 'deg)'),
                  transform: 'rotate('.concat(p, 'deg)'),
                }
              : void 0,
            Z = (0, r.Z)(
              (0, r.Z)({}, d.vD),
              {},
              { className: x, style: S, viewBox: C },
            );
          C || delete Z.viewBox;
          var E = g;
          return (
            void 0 === E && U && (E = -1),
            c.createElement(
              'span',
              (0, n.Z)({ role: 'img' }, v, {
                ref: y,
                tabIndex: E,
                onClick: U,
                className: w,
              }),
              s
                ? c.createElement(s, Z, A)
                : A
                  ? ((0, d.Kp)(
                      Boolean(C) ||
                        (1 === c.Children.count(A) &&
                          c.isValidElement(A) &&
                          'use' === c.Children.only(A).type),
                      'Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon.',
                    ),
                    c.createElement('svg', (0, n.Z)({}, Z, { viewBox: C }), A))
                  : null,
            )
          );
        });
      (C.displayName = 'AntdIcon'), (e.Z = C);
    },
    70101: function (t, e, a) {
      'use strict';
      a.d(e, {
        Z: function () {
          return s;
        },
      });
      var n = a(87462),
        r = a(62435),
        i = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M692.8 412.7l.2-.2-34.6-44.3a7.97 7.97 0 00-11.2-1.4l-50.4 39.3-70.5-90.1a7.97 7.97 0 00-11.2-1.4l-37.9 29.7a7.97 7.97 0 00-1.4 11.2l70.5 90.2-.2.1 34.6 44.3c2.7 3.5 7.7 4.1 11.2 1.4l50.4-39.3 64.1 82c2.7 3.5 7.7 4.1 11.2 1.4l37.9-29.6c3.5-2.7 4.1-7.7 1.4-11.2l-64.1-82.1zM608 112c-167.9 0-304 136.1-304 304 0 70.3 23.9 135 63.9 186.5L114.3 856.1a8.03 8.03 0 000 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6C473 696.1 537.7 720 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644s-118.2-23.7-161.2-66.8C403.7 534.2 380 476.9 380 416s23.7-118.2 66.8-161.2c43-43.1 100.3-66.8 161.2-66.8s118.2 23.7 161.2 66.8c43.1 43 66.8 100.3 66.8 161.2s-23.7 118.2-66.8 161.2z',
                },
              },
            ],
          },
          name: 'monitor',
          theme: 'outlined',
        },
        o = a(84089),
        c = function (t, e) {
          return r.createElement(o.Z, (0, n.Z)({}, t, { ref: e, icon: i }));
        };
      var s = r.forwardRef(c);
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
          return o;
        },
        ld: function () {
          return l;
        },
        n_: function () {
          return m;
        },
        oQ: function () {
          return c;
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
        o = (function (t) {
          return (
            (t.UNSTART = '0'),
            (t.RUNNING = '1'),
            (t.CANCEL = '2'),
            (t.DONE = '3'),
            (t.FAIL = '4'),
            t
          );
        })({}),
        c = (function (t) {
          return (
            (t.Improvise = 'Improvise'),
            (t.Precise = 'Precise'),
            (t.Balance = 'Balance'),
            t
          );
        })({}),
        s = r()(
          r()(
            r()({}, c.Improvise, {
              temperature: 0.8,
              top_p: 0.9,
              frequency_penalty: 0.1,
              presence_penalty: 0.1,
              max_tokens: 4096,
            }),
            c.Precise,
            {
              temperature: 0.2,
              top_p: 0.75,
              frequency_penalty: 0.5,
              presence_penalty: 0.5,
              max_tokens: 4096,
            },
          ),
          c.Balance,
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
          return o;
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
          return c;
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
        o = (function (t) {
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
        c = [
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
    86968: function (t, e, a) {
      'use strict';
      a.d(e, {
        I3: function () {
          return T;
        },
        pG: function () {
          return C;
        },
        qM: function () {
          return p;
        },
      });
      var n = a(15009),
        r = a.n(n),
        i = a(99289),
        o = a.n(i),
        c = a(5574),
        s = a.n(c),
        u = a(21640),
        l = a(3321),
        m = (a(18446), a(62435)),
        d = a(67421),
        f = a(86074),
        C = function () {
          var t = (0, m.useState)(!1),
            e = s()(t, 2),
            a = e[0],
            n = e[1],
            r = (0, m.useCallback)(function () {
              n(!0);
            }, []),
            i = (0, m.useCallback)(function () {
              n(!1);
            }, []),
            o = (0, m.useCallback)(
              function () {
                n(!a);
              },
              [a],
            );
          return { visible: a, showModal: r, hideModal: i, switchVisible: o };
        };
      var T = function () {
          var t = l.Z.useApp().modal,
            e = (0, d.$G)().t;
          return (0, m.useCallback)(
            function (a) {
              var n = a.title,
                i = a.content,
                c = a.onOk,
                s = a.onCancel;
              return new Promise(function (a, l) {
                t.confirm({
                  title: null != n ? n : e('common.deleteModalTitle'),
                  icon: (0, f.jsx)(u.Z, {}),
                  content: i,
                  okText: e('common.ok'),
                  okType: 'danger',
                  cancelText: e('common.cancel'),
                  onOk: function () {
                    return o()(
                      r()().mark(function t() {
                        var e;
                        return r()().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    (t.next = 3),
                                    null == c ? void 0 : c()
                                  );
                                case 3:
                                  (e = t.sent),
                                    a(e),
                                    console.info(e),
                                    (t.next = 11);
                                  break;
                                case 8:
                                  (t.prev = 8), (t.t0 = t.catch(0)), l(t.t0);
                                case 11:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 8]],
                        );
                      }),
                    )();
                  },
                  onCancel: function () {
                    null == s || s();
                  },
                });
              });
            },
            [e, t],
          );
        },
        p = function (t) {
          return (0, d.$G)('translation', { keyPrefix: t });
        };
    },
    51509: function (t, e, a) {
      'use strict';
      a.d(e, {
        Ay: function () {
          return U;
        },
        PV: function () {
          return A;
        },
        UK: function () {
          return _;
        },
        aU: function () {
          return y;
        },
        f0: function () {
          return v;
        },
        mr: function () {
          return h;
        },
      });
      var n = a(5574),
        r = a.n(n),
        i = a(15009),
        o = a.n(i),
        c = a(99289),
        s = a.n(c),
        u = a(39918),
        l = a(72668),
        m = a(61921),
        d = a(78551),
        f = a(4527),
        C = a(45360),
        T = a(22150),
        p = a(62435),
        g = a(67421),
        U = function () {
          var t,
            e = (0, d.a)({
              queryKey: ['loginChannels'],
              queryFn:
                ((t = s()(
                  o()().mark(function t() {
                    var e, a, n;
                    return o()().wrap(function (t) {
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
            e = (0, f.D)({
              mutationKey: ['loginWithChannel'],
              mutationFn:
                ((t = s()(
                  o()().mark(function t(e) {
                    return o()().wrap(function (t) {
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
        v = function () {
          var t,
            e = (0, g.$G)().t,
            a = (0, f.D)({
              mutationKey: ['login'],
              mutationFn:
                ((t = s()(
                  o()().mark(function t(a) {
                    var n, r, i, c, s, d, f, T;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.login(a);
                          case 2:
                            return (
                              (n = t.sent),
                              (r = n.data),
                              (i = void 0 === r ? {} : r),
                              (c = n.response),
                              0 === i.code &&
                                ((s = i.data),
                                C.ZP.success(e('message.logged')),
                                (d = c.headers.get(u._n)),
                                (f = s.access_token),
                                (T = {
                                  avatar: s.avatar,
                                  name: s.nickname,
                                  email: s.email,
                                }),
                                m.ZP.setItems({
                                  Authorization: d,
                                  userInfo: JSON.stringify(T),
                                  Token: f,
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
        h = function () {
          var t,
            e = (0, g.$G)().t,
            a = (0, f.D)({
              mutationKey: ['register'],
              mutationFn:
                ((t = s()(
                  o()().mark(function t(a) {
                    var n, r, i;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.register(a);
                          case 2:
                            return (
                              (n = t.sent),
                              (r = n.data),
                              0 === (i = void 0 === r ? {} : r).code
                                ? C.ZP.success(e('message.registered'))
                                : i.message &&
                                  i.message.includes(
                                    'registration is disabled',
                                  ) &&
                                  C.ZP.error(
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
        y = function () {
          var t,
            e = (0, g.$G)().t,
            a = (0, f.D)({
              mutationKey: ['logout'],
              mutationFn:
                ((t = s()(
                  o()().mark(function t() {
                    var a, n, r;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.logout();
                          case 2:
                            return (
                              (a = t.sent),
                              (n = a.data),
                              0 === (r = void 0 === n ? {} : n).code &&
                                (C.ZP.success(e('message.logout')),
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
          var e = (0, p.useState)(!1),
            a = r()(e, 2),
            n = a[0],
            i = a[1],
            o = T.Z.useWatch([], t);
          return (
            (0, p.useEffect)(
              function () {
                t.validateFields({ validateOnly: !0 })
                  .then(function () {
                    return i(!0);
                  })
                  .catch(function () {
                    return i(!1);
                  });
              },
              [t, o],
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
          return T;
        },
        nT: function () {
          return C;
        },
        pE: function () {
          return d;
        },
        wy: function () {
          return f;
        },
      });
      var n = a(5574),
        r = a.n(n),
        i = a(96330),
        o = a(62435),
        c = a(42028),
        s = (function (t) {
          return (t.Second = '2'), (t.Third = '3'), t;
        })({}),
        u = function (t) {
          return (0, c.TH)().pathname.split('/')[t] || '';
        },
        l = function () {
          return u(s.Second);
        },
        m = function () {
          return u(s.Third);
        },
        d = function () {
          var t = (0, c.lr)(),
            e = r()(t, 1)[0];
          return {
            documentId: e.get(i.ld.DocumentId) || '',
            knowledgeId: e.get(i.ld.KnowledgeId) || '',
          };
        },
        f = function () {
          var t = (0, c.s0)();
          return (0, o.useCallback)(
            function (e) {
              t(e, { state: { from: e } });
            },
            [t],
          );
        },
        C = function () {
          var t = (0, c.s0)(),
            e = d().knowledgeId;
          return (0, o.useCallback)(
            function () {
              t('/knowledge/'.concat(i.Rx.Dataset, '?id=').concat(e));
            },
            [e, t],
          );
        },
        T = function () {
          var t = (0, c.lr)(),
            e = r()(t, 2),
            a = e[0],
            n = e[1],
            i = (0, o.useCallback)(
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
    39259: function (t, e, a) {
      'use strict';
      a.d(e, {
        CV: function () {
          return I;
        },
        F1: function () {
          return Z;
        },
        Jf: function () {
          return x;
        },
        Jv: function () {
          return j;
        },
        PI: function () {
          return M;
        },
        WH: function () {
          return P;
        },
        XH: function () {
          return b;
        },
        d1: function () {
          return D;
        },
        ef: function () {
          return E;
        },
        er: function () {
          return F;
        },
        fS: function () {
          return k;
        },
        hZ: function () {
          return L;
        },
        jd: function () {
          return _;
        },
        m_: function () {
          return K;
        },
        nv: function () {
          return w;
        },
        oH: function () {
          return N;
        },
        v: function () {
          return S;
        },
        x_: function () {
          return B;
        },
      });
      var n = a(5574),
        r = a.n(n),
        i = a(15009),
        o = a.n(i),
        c = a(99289),
        s = a.n(c),
        u = a(40169),
        l = a(72668),
        m = a(78551),
        d = a(30202),
        f = a(4527),
        C = a(85576),
        T = a(45360),
        p = a(27856),
        g = a.n(p),
        U = a(96486),
        A = a(62435),
        v = a(67421),
        h = a(42028),
        y = a(86074),
        _ = function () {
          var t,
            e = (0, v.$G)().i18n,
            a = (0, m.a)({
              queryKey: ['userInfo'],
              initialData: {},
              gcTime: 0,
              queryFn:
                ((t = s()(
                  o()().mark(function t() {
                    var a, n, r;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.user_info();
                          case 2:
                            return (
                              (n = t.sent),
                              0 === (r = n.data).code &&
                                e.changeLanguage(u.Kj[r.data.language]),
                              t.abrupt(
                                'return',
                                null !== (a = null == r ? void 0 : r.data) &&
                                  void 0 !== a
                                  ? a
                                  : {},
                              )
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
          return { data: a.data, loading: a.isFetching };
        },
        k = function () {
          var t,
            e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            a = (0, v.$G)().t,
            n = (0, m.a)({
              queryKey: ['tenantInfo'],
              initialData: {},
              gcTime: 0,
              queryFn:
                ((t = s()(
                  o()().mark(function t() {
                    var n, r, i;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.get_tenant_info();
                          case 2:
                            if (((n = t.sent), 0 !== (r = n.data).code)) {
                              t.next = 10;
                              break;
                            }
                            return (
                              (i = r.data),
                              e &&
                                ((0, U.isEmpty)(i.embd_id) ||
                                  (0, U.isEmpty)(i.llm_id)) &&
                                C.Z.warning({
                                  title: a('common.warn'),
                                  content: (0, y.jsx)('div', {
                                    dangerouslySetInnerHTML: {
                                      __html: g().sanitize(
                                        a('setting.modelProvidersWarn'),
                                      ),
                                    },
                                  }),
                                  onOk: function () {
                                    h.m8.push('/user-setting/model');
                                  },
                                }),
                              (i.chat_id = i.llm_id),
                              (i.speech2text_id = i.asr_id),
                              t.abrupt('return', i)
                            );
                          case 10:
                            return t.abrupt('return', r);
                          case 11:
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
          return { data: n.data, loading: n.isFetching };
        },
        b = function () {
          var t = k(!0).data;
          return (0, A.useMemo)(
            function () {
              var e, a;
              return (
                null !==
                  (e =
                    null == t || null === (a = t.parser_ids) || void 0 === a
                      ? void 0
                      : a.split(',')) && void 0 !== e
                  ? e
                  : []
              ).map(function (t) {
                var e = t.split(':');
                return { value: e[0], label: e[1] };
              });
            },
            [t],
          );
        },
        P = function () {
          var t,
            e = (0, d.NL)(),
            a = (0, v.$G)().t,
            n = (0, f.D)({
              mutationKey: ['saveSetting'],
              mutationFn:
                ((t = s()(
                  o()().mark(function t(n) {
                    var r, i;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.setting(n);
                          case 2:
                            return (
                              (r = t.sent),
                              0 === (i = r.data).code &&
                                (T.ZP.success(a('message.modified')),
                                e.invalidateQueries({
                                  queryKey: ['userInfo'],
                                })),
                              t.abrupt('return', null == i ? void 0 : i.code)
                            );
                          case 6:
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
            data: n.data,
            loading: n.isPending,
            saveSetting: n.mutateAsync,
          };
        },
        w = function () {
          var t = (0, A.useState)(''),
            e = r()(t, 2),
            a = e[0],
            n = e[1],
            i = (0, A.useState)(!1),
            c = r()(i, 2),
            u = c[0],
            m = c[1];
          return {
            fetchSystemVersion: (0, A.useCallback)(
              s()(
                o()().mark(function t() {
                  var e, a;
                  return o()().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              m(!0),
                              (t.next = 4),
                              l.ZP.getSystemVersion()
                            );
                          case 4:
                            (e = t.sent),
                              0 === (a = e.data).code && (n(a.data), m(!1)),
                              (t.next = 12);
                            break;
                          case 9:
                            (t.prev = 9), (t.t0 = t.catch(0)), m(!1);
                          case 12:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 9]],
                  );
                }),
              ),
              [],
            ),
            version: a,
            loading: u,
          };
        },
        x = function () {
          var t = (0, A.useState)({}),
            e = r()(t, 2),
            a = e[0],
            n = e[1],
            i = (0, A.useState)(!1),
            c = r()(i, 2),
            u = c[0],
            m = c[1];
          return {
            systemStatus: a,
            fetchSystemStatus: (0, A.useCallback)(
              s()(
                o()().mark(function t() {
                  var e, a;
                  return o()().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return m(!0), (t.next = 3), l.ZP.getSystemStatus();
                        case 3:
                          (e = t.sent),
                            0 === (a = e.data).code && (n(a.data), m(!1));
                        case 6:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              ),
              [],
            ),
            loading: u,
          };
        },
        S = function () {
          var t,
            e = (0, f.D)({
              mutationKey: ['fetchManualSystemTokenList'],
              mutationFn:
                ((t = s()(
                  o()().mark(function t() {
                    var e, a, n;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.listToken();
                          case 2:
                            return (
                              (a = t.sent),
                              (n = a.data),
                              t.abrupt(
                                'return',
                                null !== (e = null == n ? void 0 : n.data) &&
                                  void 0 !== e
                                  ? e
                                  : [],
                              )
                            );
                          case 5:
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
          return {
            data: e.data,
            loading: e.isPending,
            fetchSystemTokenList: e.mutateAsync,
          };
        },
        Z = function () {
          var t,
            e = (0, m.a)({
              queryKey: ['fetchSystemTokenList'],
              initialData: [],
              gcTime: 0,
              queryFn:
                ((t = s()(
                  o()().mark(function t() {
                    var e, a, n;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.listToken();
                          case 2:
                            return (
                              (a = t.sent),
                              (n = a.data),
                              t.abrupt(
                                'return',
                                null !== (e = null == n ? void 0 : n.data) &&
                                  void 0 !== e
                                  ? e
                                  : [],
                              )
                            );
                          case 5:
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
          return { data: e.data, loading: e.isFetching, refetch: e.refetch };
        },
        E = function () {
          var t,
            e = (0, d.NL)(),
            a = (0, v.$G)().t,
            n = (0, f.D)({
              mutationKey: ['removeSystemToken'],
              mutationFn:
                ((t = s()(
                  o()().mark(function t(n) {
                    var r, i, c;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.removeToken({}, n);
                          case 2:
                            return (
                              (i = t.sent),
                              0 === (c = i.data).code &&
                                (T.ZP.success(a('message.deleted')),
                                e.invalidateQueries({
                                  queryKey: ['fetchSystemTokenList'],
                                })),
                              t.abrupt(
                                'return',
                                null !== (r = null == c ? void 0 : c.data) &&
                                  void 0 !== r
                                  ? r
                                  : [],
                              )
                            );
                          case 6:
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
            data: n.data,
            loading: n.isPending,
            removeToken: n.mutateAsync,
          };
        },
        M = function () {
          var t,
            e = (0, d.NL)(),
            a = (0, f.D)({
              mutationKey: ['createSystemToken'],
              mutationFn:
                ((t = s()(
                  o()().mark(function t(a) {
                    var n, r, i;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.createToken(a);
                          case 2:
                            return (
                              (r = t.sent),
                              0 === (i = r.data).code &&
                                e.invalidateQueries({
                                  queryKey: ['fetchSystemTokenList'],
                                }),
                              t.abrupt(
                                'return',
                                null !== (n = null == i ? void 0 : i.data) &&
                                  void 0 !== n
                                  ? n
                                  : [],
                              )
                            );
                          case 6:
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
            createToken: a.mutateAsync,
          };
        },
        L = function () {
          var t,
            e = k().data.tenant_id,
            a = (0, m.a)({
              queryKey: ['listTenantUser', e],
              initialData: [],
              gcTime: 0,
              enabled: !!e,
              queryFn:
                ((t = s()(
                  o()().mark(function t() {
                    var a, n, r;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), (0, l.WX)(e);
                          case 2:
                            return (
                              (n = t.sent),
                              (r = n.data),
                              t.abrupt(
                                'return',
                                null !== (a = null == r ? void 0 : r.data) &&
                                  void 0 !== a
                                  ? a
                                  : [],
                              )
                            );
                          case 5:
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
          return { data: a.data, loading: a.isFetching, refetch: a.refetch };
        },
        K = function () {
          var t,
            e = k().data,
            a = (0, d.NL)(),
            n = (0, f.D)({
              mutationKey: ['addTenantUser'],
              mutationFn:
                ((t = s()(
                  o()().mark(function t(n) {
                    var r, i;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), (0, l.AH)(e.tenant_id, n);
                          case 2:
                            return (
                              (r = t.sent),
                              0 === (i = r.data).code &&
                                a.invalidateQueries({
                                  queryKey: ['listTenantUser'],
                                }),
                              t.abrupt('return', null == i ? void 0 : i.code)
                            );
                          case 6:
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
            data: n.data,
            loading: n.isPending,
            addTenantUser: n.mutateAsync,
          };
        },
        I = function () {
          var t,
            e = k().data,
            a = (0, d.NL)(),
            n = (0, v.$G)().t,
            r = (0, f.D)({
              mutationKey: ['deleteTenantUser'],
              mutationFn:
                ((t = s()(
                  o()().mark(function t(r) {
                    var i, c, s, u, m;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (c = r.userId),
                              (s = r.tenantId),
                              (t.next = 3),
                              (0, l.EE)({
                                tenantId: null != s ? s : e.tenant_id,
                                userId: c,
                              })
                            );
                          case 3:
                            return (
                              (u = t.sent),
                              0 === (m = u.data).code &&
                                (T.ZP.success(n('message.deleted')),
                                a.invalidateQueries({
                                  queryKey: ['listTenantUser'],
                                }),
                                a.invalidateQueries({
                                  queryKey: ['listTenant'],
                                })),
                              t.abrupt(
                                'return',
                                null !== (i = null == m ? void 0 : m.data) &&
                                  void 0 !== i
                                  ? i
                                  : [],
                              )
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
            data: r.data,
            loading: r.isPending,
            deleteTenantUser: r.mutateAsync,
          };
        },
        D = function () {
          var t,
            e = k().data.tenant_id,
            a = (0, m.a)({
              queryKey: ['listTenant', e],
              initialData: [],
              gcTime: 0,
              enabled: !!e,
              queryFn:
                ((t = s()(
                  o()().mark(function t() {
                    var e, a, n;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), (0, l.vh)();
                          case 2:
                            return (
                              (a = t.sent),
                              (n = a.data),
                              t.abrupt(
                                'return',
                                null !== (e = null == n ? void 0 : n.data) &&
                                  void 0 !== e
                                  ? e
                                  : [],
                              )
                            );
                          case 5:
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
          return { data: a.data, loading: a.isFetching, refetch: a.refetch };
        },
        N = function () {
          var t,
            e = (0, d.NL)(),
            a = (0, v.$G)().t,
            n = (0, f.D)({
              mutationKey: ['agreeTenant'],
              mutationFn:
                ((t = s()(
                  o()().mark(function t(n) {
                    var r, i, c;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), (0, l.FG)(n);
                          case 2:
                            return (
                              (i = t.sent),
                              0 === (c = i.data).code &&
                                (T.ZP.success(a('message.operated')),
                                e.invalidateQueries({
                                  queryKey: ['listTenant'],
                                })),
                              t.abrupt(
                                'return',
                                null !== (r = null == c ? void 0 : c.data) &&
                                  void 0 !== r
                                  ? r
                                  : [],
                              )
                            );
                          case 6:
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
            data: n.data,
            loading: n.isPending,
            agreeTenant: n.mutateAsync,
          };
        },
        j = function () {
          var t,
            e = (0, v.$G)().t,
            a = (0, f.D)({
              mutationKey: ['setLangfuseConfig'],
              mutationFn:
                ((t = s()(
                  o()().mark(function t(a) {
                    var n, r;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.setLangfuseConfig(a);
                          case 2:
                            return (
                              (n = t.sent),
                              0 === (r = n.data).code &&
                                T.ZP.success(e('message.operated')),
                              t.abrupt('return', null == r ? void 0 : r.code)
                            );
                          case 6:
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
            setLangfuseConfig: a.mutateAsync,
          };
        },
        B = function () {
          var t,
            e = (0, v.$G)().t,
            a = (0, f.D)({
              mutationKey: ['deleteLangfuseConfig'],
              mutationFn:
                ((t = s()(
                  o()().mark(function t() {
                    var a, n;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.deleteLangfuseConfig();
                          case 2:
                            return (
                              (a = t.sent),
                              0 === (n = a.data).code &&
                                T.ZP.success(e('message.deleted')),
                              t.abrupt('return', null == n ? void 0 : n.code)
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
          return {
            data: a.data,
            loading: a.isPending,
            deleteLangfuseConfig: a.mutateAsync,
          };
        },
        F = function () {
          var t,
            e = (0, m.a)({
              queryKey: ['fetchLangfuseConfig'],
              gcTime: 0,
              queryFn:
                ((t = s()(
                  o()().mark(function t() {
                    var e, a;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), l.ZP.getLangfuseConfig();
                          case 2:
                            return (
                              (e = t.sent),
                              (a = e.data),
                              t.abrupt('return', null == a ? void 0 : a.data)
                            );
                          case 5:
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
          return { data: e.data, loading: e.isFetching };
        };
    },
    73828: function (t, e, a) {
      'use strict';
      a.d(e, {
        Dr: function () {
          return l;
        },
        H7: function () {
          return c.H7;
        },
        at: function () {
          return m;
        },
        qh: function () {
          return c.qh;
        },
        rQ: function () {
          return c.rQ;
        },
        z7: function () {
          return d;
        },
      });
      var n = a(9783),
        r = a.n(n),
        i = a(38520),
        o = a(39386),
        c = a(9450),
        s = a(70101),
        u = a(86074),
        l = r()(
          r()(
            r()(
              r()(
                r()(
                  r()(
                    r()({}, c.qh.Profile, (0, u.jsx)(i.m2, {})),
                    c.qh.Password,
                    (0, u.jsx)(i.CW, {}),
                  ),
                  c.qh.Model,
                  (0, u.jsx)(i.eS, {}),
                ),
                c.qh.System,
                (0, u.jsx)(s.Z, { style: { fontSize: 24 } }),
              ),
              c.qh.Team,
              (0, u.jsx)(i.Ww, {}),
            ),
            c.qh.Logout,
            (0, u.jsx)(i.Hl, {}),
          ),
          c.qh.Api,
          (0, u.jsx)(i.Fg, {}),
        ),
        m = [
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
        d = (function (t) {
          return (
            (t.Owner = 'owner'), (t.Invite = 'invite'), (t.Normal = 'normal'), t
          );
        })({});
    },
    33041: function (t, e, a) {
      'use strict';
      a.r(e),
        a.d(e, {
          default: function () {
            return U;
          },
        });
      var n = a(86250),
        r = a(42028),
        i = a(40169),
        o = a(86968),
        c = a(51509),
        s = a(96100),
        u = a(39259),
        l = a(68508),
        m = a(62435),
        d = a(73828),
        f = 'sideBarWrapper___pApYb',
        C = 'version___uhL2R',
        T = a(86074),
        p = function () {
          var t = (0, r.s0)(),
            e = (0, s.Uu)(),
            a = (0, c.aU)().logout,
            p = (0, o.qM)('setting').t,
            g = (0, u.nv)(),
            U = g.version,
            A = g.fetchSystemVersion;
          (0, m.useEffect)(
            function () {
              location.host !== i.qp && A();
            },
            [A],
          );
          var v = Object.values(d.qh).map(function (t) {
              return (
                (e = t),
                (a = t),
                (r = d.Dr[t]),
                {
                  key: a,
                  icon: r,
                  children: i,
                  label: (0, T.jsxs)(n.Z, {
                    justify: 'space-between',
                    children: [
                      p(e),
                      (0, T.jsx)('span', {
                        className: C,
                        children: 'system' === e && U,
                      }),
                    ],
                  }),
                  type: o,
                }
              );
              var e, a, r, i, o;
            }),
            h = (0, m.useMemo)(
              function () {
                return [e];
              },
              [e],
            );
          return (0, T.jsx)('section', {
            className: f,
            children: (0, T.jsx)(l.Z, {
              selectedKeys: h,
              mode: 'inline',
              items: v,
              onClick: function (e) {
                var n = e.key;
                n === d.qh.Logout ? a() : t('/'.concat(d.H7, '/').concat(n));
              },
              style: { width: 312 },
            }),
          });
        },
        g = a(75041),
        U = function () {
          return (0, T.jsxs)(n.Z, {
            className: g.Z.settingWrapper,
            children: [
              (0, T.jsx)(p, {}),
              (0, T.jsx)(n.Z, {
                flex: 1,
                className: g.Z.outletWrapper,
                children: (0, T.jsx)(r.j3, {}),
              }),
            ],
          });
        };
    },
    72668: function (t, e, a) {
      'use strict';
      a.d(e, {
        AH: function () {
          return M;
        },
        EE: function () {
          return L;
        },
        FG: function () {
          return I;
        },
        WX: function () {
          return E;
        },
        nO: function () {
          return Z;
        },
        vh: function () {
          return K;
        },
        vi: function () {
          return S;
        },
      });
      var n = a(60806),
        r = a(66582),
        i = a(78158),
        o = n.Z.login,
        c = n.Z.logout,
        s = n.Z.register,
        u = n.Z.setting,
        l = n.Z.user_info,
        m = n.Z.tenant_info,
        d = n.Z.factories_list,
        f = n.Z.llm_list,
        C = n.Z.my_llm,
        T = n.Z.set_api_key,
        p = n.Z.set_tenant_info,
        g = n.Z.add_llm,
        U = n.Z.delete_llm,
        A = n.Z.deleteFactory,
        v = n.Z.getSystemStatus,
        h = n.Z.getSystemVersion,
        y = n.Z.getSystemTokenList,
        _ = n.Z.removeSystemToken,
        k = n.Z.createSystemToken,
        b = n.Z.getSystemConfig,
        P = n.Z.setLangfuseConfig,
        w = {
          login: { url: o, method: 'post' },
          logout: { url: c, method: 'get' },
          register: { url: s, method: 'post' },
          setting: { url: u, method: 'post' },
          user_info: { url: l, method: 'get' },
          get_tenant_info: { url: m, method: 'get' },
          set_tenant_info: { url: p, method: 'post' },
          factories_list: { url: d, method: 'get' },
          llm_list: { url: f, method: 'get' },
          my_llm: { url: C, method: 'get' },
          set_api_key: { url: T, method: 'post' },
          add_llm: { url: g, method: 'post' },
          delete_llm: { url: U, method: 'post' },
          getSystemStatus: { url: v, method: 'get' },
          getSystemVersion: { url: h, method: 'get' },
          deleteFactory: { url: A, method: 'post' },
          listToken: { url: y, method: 'get' },
          createToken: { url: k, method: 'post' },
          removeToken: { url: _, method: 'delete' },
          getSystemConfig: { url: b, method: 'get' },
          setLangfuseConfig: { url: P, method: 'put' },
          getLangfuseConfig: { url: P, method: 'get' },
          deleteLangfuseConfig: { url: P, method: 'delete' },
        },
        x = (0, r.Z)(w, i.ZP),
        S = function () {
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
        L = function (t) {
          var e = t.tenantId,
            a = t.userId;
          return i.ZP.delete(n.Z.deleteTenantUser(e, a));
        },
        K = function () {
          return i.ZP.get(n.Z.listTenant);
        },
        I = function (t) {
          return i.ZP.put(n.Z.agreeTenant(t));
        };
      e.ZP = x;
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
        o = a.n(i),
        c = ['post', 'delete', 'put'];
      e.Z = function (t, e) {
        var a = {},
          n = function (n) {
            a[n] = function (a, i) {
              var s = t[n].url,
                u = t[n];
              return (
                i && (s = s + '/' + i),
                c.some(function (e) {
                  return e === t[n].method.toLowerCase();
                })
                  ? e(s, { method: t[n].method, data: a })
                  : 'get' === t[n].method || 'GET' === t[n].method
                    ? e.get(
                        s,
                        r()(
                          r()({}, o()(u, ['method', 'url'])),
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
          return v;
        },
      });
      var n = a(15009),
        r = a.n(n),
        i = a(99289),
        o = a.n(i),
        c = a(9783),
        s = a.n(c),
        u = a(97857),
        l = a.n(u),
        m = a(39918),
        d = a(54707),
        f = a(61921),
        C = a(26855),
        T = a(45360),
        p = a(11238),
        g = a(31098),
        U = {
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
        A = (0, p.l7)({
          errorHandler: function (t) {
            var e = t.response;
            if ('Failed to fetch' === t.message)
              C.Z.error({
                description: d.Z.t('message.networkAnomalyDescription'),
                message: d.Z.t('message.networkAnomaly'),
              });
            else if (e && e.status) {
              var a = U[e.status] || e.statusText,
                n = e.status,
                r = e.url;
              C.Z.error({
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
        var a = (0, g._y)(e.data),
          n = (0, g._y)(e.params);
        return {
          url: t,
          options: l()(
            l()({}, e),
            {},
            {
              data: a,
              params: n,
              headers: l()(
                l()({}, e.skipToken ? void 0 : s()({}, m._n, (0, f.cD)())),
                e.headers,
              ),
              interceptors: !0,
            },
          ),
        };
      }),
        A.interceptors.response.use(
          (function () {
            var t = o()(
              r()().mark(function t(e, a) {
                var n, i;
                return r()().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((413 !== (null == e ? void 0 : e.status) &&
                            504 !== (null == e ? void 0 : e.status)) ||
                            T.ZP.error(U[null == e ? void 0 : e.status]),
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
                            ? T.ZP.error(null == i ? void 0 : i.message)
                            : 401 === (null == i ? void 0 : i.code)
                              ? (C.Z.error({
                                  message: null == i ? void 0 : i.message,
                                  description: null == i ? void 0 : i.message,
                                  duration: 3,
                                }),
                                f.ZP.removeAll(),
                                (0, f.rf)())
                              : 0 !== (null == i ? void 0 : i.code) &&
                                C.Z.error({
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
      var v = function (t, e) {
        return A.post(t, { data: e });
      };
    },
    75041: function (t, e) {
      'use strict';
      e.Z = {
        settingWrapper: 'settingWrapper___zesBR',
        outletWrapper: 'outletWrapper___Zl2jj',
        itemDescription: 'itemDescription___WJ1sc',
      };
    },
    86250: function (t, e, a) {
      'use strict';
      a.d(e, {
        Z: function () {
          return _;
        },
      });
      var n = a(62435),
        r = a(93967),
        i = a.n(r),
        o = a(98423),
        c = a(98065),
        s = a(53124),
        u = a(91945),
        l = a(45503);
      const m = ['wrap', 'nowrap', 'wrap-reverse'],
        d = [
          'flex-start',
          'flex-end',
          'start',
          'end',
          'center',
          'space-between',
          'space-around',
          'space-evenly',
          'stretch',
          'normal',
          'left',
          'right',
        ],
        f = [
          'center',
          'start',
          'end',
          'flex-start',
          'flex-end',
          'self-start',
          'self-end',
          'baseline',
          'normal',
          'stretch',
        ];
      var C = function (t, e) {
        return i()(
          Object.assign(
            Object.assign(
              Object.assign(
                {},
                ((t, e) => {
                  const a = {};
                  return (
                    m.forEach((n) => {
                      a[`${t}-wrap-${n}`] = e.wrap === n;
                    }),
                    a
                  );
                })(t, e),
              ),
              ((t, e) => {
                const a = {};
                return (
                  f.forEach((n) => {
                    a[`${t}-align-${n}`] = e.align === n;
                  }),
                  (a[`${t}-align-stretch`] = !e.align && !!e.vertical),
                  a
                );
              })(t, e),
            ),
            ((t, e) => {
              const a = {};
              return (
                d.forEach((n) => {
                  a[`${t}-justify-${n}`] = e.justify === n;
                }),
                a
              );
            })(t, e),
          ),
        );
      };
      const T = (t) => {
          const { componentCls: e } = t;
          return {
            [e]: {
              display: 'flex',
              '&-vertical': { flexDirection: 'column' },
              '&-rtl': { direction: 'rtl' },
              '&:empty': { display: 'none' },
            },
          };
        },
        p = (t) => {
          const { componentCls: e } = t;
          return {
            [e]: {
              '&-gap-small': { gap: t.flexGapSM },
              '&-gap-middle': { gap: t.flexGap },
              '&-gap-large': { gap: t.flexGapLG },
            },
          };
        },
        g = (t) => {
          const { componentCls: e } = t,
            a = {};
          return (
            m.forEach((t) => {
              a[`${e}-wrap-${t}`] = { flexWrap: t };
            }),
            a
          );
        },
        U = (t) => {
          const { componentCls: e } = t,
            a = {};
          return (
            f.forEach((t) => {
              a[`${e}-align-${t}`] = { alignItems: t };
            }),
            a
          );
        },
        A = (t) => {
          const { componentCls: e } = t,
            a = {};
          return (
            d.forEach((t) => {
              a[`${e}-justify-${t}`] = { justifyContent: t };
            }),
            a
          );
        };
      var v = (0, u.I$)(
          'Flex',
          (t) => {
            const { paddingXS: e, padding: a, paddingLG: n } = t,
              r = (0, l.TS)(t, { flexGapSM: e, flexGap: a, flexGapLG: n });
            return [T(r), p(r), g(r), U(r), A(r)];
          },
          () => ({}),
          { resetStyle: !1 },
        ),
        h = function (t, e) {
          var a = {};
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
              e.indexOf(n) < 0 &&
              (a[n] = t[n]);
          if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(t); r < n.length; r++)
              e.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, n[r]) &&
                (a[n[r]] = t[n[r]]);
          }
          return a;
        };
      const y = n.forwardRef((t, e) => {
        const {
            prefixCls: a,
            rootClassName: r,
            className: u,
            style: l,
            flex: m,
            gap: d,
            children: f,
            vertical: T = !1,
            component: p = 'div',
          } = t,
          g = h(t, [
            'prefixCls',
            'rootClassName',
            'className',
            'style',
            'flex',
            'gap',
            'children',
            'vertical',
            'component',
          ]),
          { flex: U, direction: A, getPrefixCls: y } = n.useContext(s.E_),
          _ = y('flex', a),
          [k, b, P] = v(_),
          w = null != T ? T : null == U ? void 0 : U.vertical,
          x = i()(u, r, null == U ? void 0 : U.className, _, b, P, C(_, t), {
            [`${_}-rtl`]: 'rtl' === A,
            [`${_}-gap-${d}`]: (0, c.n)(d),
            [`${_}-vertical`]: w,
          }),
          S = Object.assign(Object.assign({}, null == U ? void 0 : U.style), l);
        return (
          m && (S.flex = m),
          d && !(0, c.n)(d) && (S.gap = d),
          k(
            n.createElement(
              p,
              Object.assign(
                { ref: e, className: x, style: S },
                (0, o.Z)(g, ['justify', 'wrap', 'align']),
              ),
              f,
            ),
          )
        );
      });
      var _ = y;
    },
    8971: function (t, e, a) {
      'use strict';
      a.d(e, {
        Z: function () {
          return n;
        },
      });
      const n = (0, a(91373).Z)('chevron-down', [
        ['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }],
      ]);
    },
    86635: function (t) {
      function e(t) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        });
      }
      (e.keys = function () {
        return [];
      }),
        (e.resolve = e),
        (e.id = 86635),
        (t.exports = e);
    },
    24654: function () {},
  },
]);
//# sourceMappingURL=p__user-setting__index.f18583c1.async.js.map
