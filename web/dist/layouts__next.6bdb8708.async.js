'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [7335],
  {
    86709: function (a, t, e) {
      e.d(t, {
        t: function () {
          return U;
        },
      });
      var i = e(97857),
        n = e.n(i),
        r = e(13769),
        c = e.n(r),
        s = e(27080),
        o = e(96486),
        l = e(62435),
        u = e(5715),
        C = e(86074),
        T = ['name', 'avatar', 'isPerson', 'className'],
        m = [
          { from: '#4F6DEE', to: '#67BDF9' },
          { from: '#38A04D', to: '#93DCA2' },
          { from: '#EDB395', to: '#C35F2B' },
          { from: '#633897', to: '#CBA1FF' },
        ],
        U = (0, l.forwardRef)(function (a, t) {
          var e = a.name,
            i = a.avatar,
            r = a.isPerson,
            l = void 0 !== r && r,
            U = a.className,
            d = c()(a, T),
            A = (0, o.random)(0, 3);
          console.log('🚀 ~ index:', A);
          var f = m[A];
          return (0, C.jsxs)(
            u.qE,
            n()(
              n()({ ref: t }, d),
              {},
              {
                className: (0, s.cn)(U, { 'rounded-md': !l }),
                children: [
                  (0, C.jsx)(u.F$, { src: i }),
                  (0, C.jsx)(u.Q5, {
                    className: (0, s.cn)(
                      'bg-gradient-to-b from-['
                        .concat(f.from, '] to-[')
                        .concat(f.to, ']'),
                      { 'rounded-md': !l },
                    ),
                    children: null == e ? void 0 : e.slice(0, 1),
                  }),
                ],
              },
            ),
          );
        });
      U.displayName = 'RAGFlowAvatar';
    },
    5715: function (a, t, e) {
      e.d(t, {
        F$: function () {
          return d;
        },
        Q5: function () {
          return A;
        },
        qE: function () {
          return U;
        },
      });
      var i = e(97857),
        n = e.n(i),
        r = e(13769),
        c = e.n(r),
        s = e(10952),
        o = e(62435),
        l = e(27080),
        u = e(86074),
        C = ['className'],
        T = ['className'],
        m = ['className'],
        U = o.forwardRef(function (a, t) {
          var e = a.className,
            i = c()(a, C);
          return (0, u.jsx)(
            s.fC,
            n()(
              {
                ref: t,
                className: (0, l.cn)(
                  'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
                  e,
                ),
              },
              i,
            ),
          );
        });
      U.displayName = s.fC.displayName;
      var d = o.forwardRef(function (a, t) {
        var e = a.className,
          i = c()(a, T);
        return (0, u.jsx)(
          s.Ee,
          n()(
            { ref: t, className: (0, l.cn)('aspect-square h-full w-full', e) },
            i,
          ),
        );
      });
      d.displayName = s.Ee.displayName;
      var A = o.forwardRef(function (a, t) {
        var e = a.className,
          i = c()(a, m);
        return (0, u.jsx)(
          s.NY,
          n()(
            {
              ref: t,
              className: (0, l.cn)(
                'flex h-full w-full items-center justify-center rounded-full bg-muted',
                e,
              ),
            },
            i,
          ),
        );
      });
      A.displayName = s.NY.displayName;
    },
    19252: function (a, t, e) {
      e.d(t, {
        C: function () {
          return T;
        },
      });
      var i = e(97857),
        n = e.n(i),
        r = e(13769),
        c = e.n(r),
        s = e(45139),
        o = (e(62435), e(27080)),
        l = e(86074),
        u = ['className', 'variant'],
        C = (0, s.j)(
          'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          {
            variants: {
              variant: {
                default:
                  'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
                secondary:
                  'border-transparent bg-background-card text-text-sub-title-invert hover:bg-secondary/80 rounded-md',
                destructive:
                  'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
                outline: 'text-foreground',
                tertiary:
                  'border-transparent bg-colors-background-core-strong text-colors-text-persist-light hover:bg-colors-background-core-strong/80',
              },
            },
            defaultVariants: { variant: 'default' },
          },
        );
      function T(a) {
        var t = a.className,
          e = a.variant,
          i = c()(a, u);
        return (0, l.jsx)(
          'div',
          n()({ className: (0, o.cn)(C({ variant: e }), t) }, i),
        );
      }
    },
    25910: function (a, t, e) {
      e.d(t, {
        $F: function () {
          return x;
        },
        AW: function () {
          return b;
        },
        Ju: function () {
          return N;
        },
        VD: function () {
          return P;
        },
        Xi: function () {
          return y;
        },
        h_: function () {
          return k;
        },
      });
      var i = e(97857),
        n = e.n(i),
        r = e(13769),
        c = e.n(r),
        s = e(38100),
        o = e(64998),
        l = e(13742),
        u = e(50316),
        C = e(62435),
        T = e(27080),
        m = e(86074),
        U = ['className', 'inset', 'children'],
        d = ['className'],
        A = ['className', 'sideOffset'],
        f = ['className', 'inset', 'justifyBetween'],
        g = ['className', 'children', 'checked'],
        p = ['className', 'children'],
        h = ['className', 'inset'],
        v = ['className'],
        k = s.fC,
        x = s.xz;
      s.ZA, s.Uv, s.Tr, s.Ee;
      (C.forwardRef(function (a, t) {
        var e = a.className,
          i = a.inset,
          r = a.children,
          l = c()(a, U);
        return (0, m.jsxs)(
          s.fF,
          n()(
            n()(
              {
                ref: t,
                className: (0, T.cn)(
                  'flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
                  i && 'pl-8',
                  e,
                ),
              },
              l,
            ),
            {},
            { children: [r, (0, m.jsx)(o.Z, { className: 'ml-auto' })] },
          ),
        );
      }).displayName = s.fF.displayName),
        (C.forwardRef(function (a, t) {
          var e = a.className,
            i = c()(a, d);
          return (0, m.jsx)(
            s.tu,
            n()(
              {
                ref: t,
                className: (0, T.cn)(
                  'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                  e,
                ),
              },
              i,
            ),
          );
        }).displayName = s.tu.displayName);
      var b = C.forwardRef(function (a, t) {
        var e = a.className,
          i = a.sideOffset,
          r = void 0 === i ? 4 : i,
          o = c()(a, A);
        return (0, m.jsx)(s.Uv, {
          children: (0, m.jsx)(
            s.VY,
            n()(
              {
                ref: t,
                sideOffset: r,
                className: (0, T.cn)(
                  'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                  e,
                ),
              },
              o,
            ),
          ),
        });
      });
      b.displayName = s.VY.displayName;
      var y = C.forwardRef(function (a, t) {
        var e = a.className,
          i = a.inset,
          r = a.justifyBetween,
          o = void 0 === r || r,
          l = c()(a, f);
        return (0, m.jsx)(
          s.ck,
          n()(
            {
              ref: t,
              className: (0, T.cn)(
                'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
                i && 'pl-8',
                o && 'flex justify-between',
                e,
              ),
            },
            l,
          ),
        );
      });
      (y.displayName = s.ck.displayName),
        (C.forwardRef(function (a, t) {
          var e = a.className,
            i = a.children,
            r = a.checked,
            o = c()(a, g);
          return (0, m.jsxs)(
            s.oC,
            n()(
              n()(
                {
                  ref: t,
                  className: (0, T.cn)(
                    'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                    e,
                  ),
                  checked: r,
                },
                o,
              ),
              {},
              {
                children: [
                  (0, m.jsx)('span', {
                    className:
                      'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                    children: (0, m.jsx)(s.wU, {
                      children: (0, m.jsx)(l.Z, { className: 'h-4 w-4' }),
                    }),
                  }),
                  i,
                ],
              },
            ),
          );
        }).displayName = s.oC.displayName),
        (C.forwardRef(function (a, t) {
          var e = a.className,
            i = a.children,
            r = c()(a, p);
          return (0, m.jsxs)(
            s.Rk,
            n()(
              n()(
                {
                  ref: t,
                  className: (0, T.cn)(
                    'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                    e,
                  ),
                },
                r,
              ),
              {},
              {
                children: [
                  (0, m.jsx)('span', {
                    className:
                      'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
                    children: (0, m.jsx)(s.wU, {
                      children: (0, m.jsx)(u.Z, {
                        className: 'h-2 w-2 fill-current',
                      }),
                    }),
                  }),
                  i,
                ],
              },
            ),
          );
        }).displayName = s.Rk.displayName);
      var N = C.forwardRef(function (a, t) {
        var e = a.className,
          i = a.inset,
          r = c()(a, h);
        return (0, m.jsx)(
          s.__,
          n()(
            {
              ref: t,
              className: (0, T.cn)(
                'px-2 py-1.5 text-sm font-semibold',
                i && 'pl-8',
                e,
              ),
            },
            r,
          ),
        );
      });
      N.displayName = s.__.displayName;
      var P = C.forwardRef(function (a, t) {
        var e = a.className,
          i = c()(a, v);
        return (0, m.jsx)(
          s.Z0,
          n()(
            { ref: t, className: (0, T.cn)('-mx-1 my-1 h-px bg-muted', e) },
            i,
          ),
        );
      });
      P.displayName = s.Z0.displayName;
    },
    41225: function (a, t, e) {
      e.d(t, {
        r: function () {
          return s;
        },
      });
      var i = e(52677),
        n = e.n(i),
        r = e(27080),
        c = (e(62435), e(86074));
      function s(a) {
        var t = a.options,
          e = a.value,
          i = a.onChange,
          s = a.className;
        return (0, c.jsx)('div', {
          className: (0, r.cn)(
            'flex items-center rounded-3xl p-1 gap-2 bg-background-header-bar px-5 py-2.5',
            s,
          ),
          children: t.map(function (a) {
            var t = 'object' === n()(a),
              s = t ? a.value : a;
            return (0, c.jsx)(
              'div',
              {
                className: (0, r.cn)(
                  'inline-flex items-center px-6 py-2 text-base font-normal rounded-3xl cursor-pointer text-text-badge',
                  {
                    'bg-text-title': e === s,
                    'text-text-title-invert': e === s,
                  },
                ),
                onClick: function () {
                  return null == i ? void 0 : i(s);
                },
                children: t ? a.label : a,
              },
              s,
            );
          }),
        });
      }
    },
    9450: function (a, t, e) {
      e.d(t, {
        A4: function () {
          return c;
        },
        H7: function () {
          return i;
        },
        WS: function () {
          return r;
        },
        qh: function () {
          return n;
        },
        rQ: function () {
          return s;
        },
      });
      var i = 'user-setting',
        n = (function (a) {
          return (
            (a.Profile = 'profile'),
            (a.Password = 'password'),
            (a.Model = 'model'),
            (a.System = 'system'),
            (a.Api = 'api'),
            (a.Team = 'team'),
            (a.Logout = 'logout'),
            a
          );
        })({}),
        r = 'profile-setting',
        c = (function (a) {
          return (
            (a.Profile = 'profile'),
            (a.Plan = 'plan'),
            (a.Model = 'model'),
            (a.System = 'system'),
            (a.Api = 'api'),
            (a.Team = 'team'),
            (a.Prompt = 'prompt'),
            (a.Chunk = 'chunk'),
            (a.Logout = 'logout'),
            a
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
    704: function (a, t, e) {
      e.d(t, {
        $: function () {
          return C;
        },
        t: function () {
          return u;
        },
      });
      var i = e(9783),
        n = e.n(i),
        r = e(5574),
        c = e.n(r),
        s = e(23454),
        o = e(62435),
        l = e(42028),
        u = (function (a) {
          return (a.KnowledgeId = 'knowledgeId'), a;
        })({}),
        C = function () {
          var a = (0, l.s0)(),
            t = (0, l.lr)(),
            e = c()(t, 1)[0],
            i = (0, l.UO)().id,
            r = (0, o.useCallback)(
              function () {
                a(s.Z.Datasets);
              },
              [a],
            ),
            C = (0, o.useCallback)(
              function (t) {
                return function () {
                  a(''.concat(s.Z.Dataset, '/').concat(t));
                };
              },
              [a],
            ),
            T = (0, o.useCallback)(
              function () {
                a(s.Z.Home);
              },
              [a],
            ),
            m = (0, o.useCallback)(
              function () {
                a(s.Z.ProfileSetting);
              },
              [a],
            ),
            U = (0, o.useCallback)(
              function () {
                a(s.Z.Chats);
              },
              [a],
            ),
            d = (0, o.useCallback)(
              function () {
                a(s.Z.Chat);
              },
              [a],
            ),
            A = (0, o.useCallback)(
              function () {
                a(s.Z.Agents);
              },
              [a],
            ),
            f = (0, o.useCallback)(
              function (t) {
                return function () {
                  a(''.concat(s.Z.Agent, '/').concat(t));
                };
              },
              [a],
            ),
            g = (0, o.useCallback)(
              function () {
                a(s.Z.AgentTemplates);
              },
              [a],
            ),
            p = (0, o.useCallback)(
              function () {
                a(s.Z.Searches);
              },
              [a],
            ),
            h = (0, o.useCallback)(
              function () {
                a(s.Z.Search);
              },
              [a],
            ),
            v = (0, o.useCallback)(
              function (t, e) {
                return function () {
                  a(
                    ''
                      .concat(s.Z.ParsedResult, '/chunks?id=')
                      .concat(e, '&doc_id=')
                      .concat(t),
                  );
                };
              },
              [a],
            ),
            k = (0, o.useCallback)(
              function (a) {
                var t = n()({}, u.KnowledgeId, e.get(u.KnowledgeId));
                return a ? t[a] : t;
              },
              [e],
            ),
            x = (0, o.useCallback)(
              function (t) {
                a(
                  ''
                    .concat(t, '/')
                    .concat(i, '?')
                    .concat(u.KnowledgeId, '=')
                    .concat(k(u.KnowledgeId)),
                );
              },
              [k, i, a],
            ),
            b = (0, o.useCallback)(
              function (t) {
                a(''.concat(s.Z.Files, '?folderId=').concat(t));
              },
              [a],
            );
          return {
            navigateToDatasetList: r,
            navigateToDataset: C,
            navigateToHome: T,
            navigateToProfile: m,
            navigateToChatList: U,
            navigateToChat: d,
            navigateToChunkParsedResult: v,
            getQueryString: k,
            navigateToChunk: x,
            navigateToAgentList: A,
            navigateToAgent: f,
            navigateToAgentTemplates: g,
            navigateToSearchList: p,
            navigateToSearch: h,
            navigateToFiles: b,
          };
        };
    },
    12927: function (a, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return D;
          },
        });
      var i = e(42028),
        n = e(86709),
        r = e(98236),
        c = e(19252),
        s = e(57636),
        o = e(25910),
        l = e(41225),
        u = e(40169),
        C = e(2938),
        T = e(704),
        m = e(96100),
        U = e(39259),
        d = e(73828),
        A = e(23454),
        f = e(96486),
        g = e(26330),
        p = e(77336),
        h = e(85052),
        v = e(87764),
        k = e(63494),
        x = e(9194),
        b = e(19162),
        y = e(8971),
        N = e(1211),
        P = e(58532),
        j = e(90250),
        S = e(62435),
        w = e(67421),
        _ = e(86074),
        E = function () {
          window.open('https://ragflow.io/docs/dev/category/guides', 'target');
        };
      function M() {
        var a = (0, w.$G)().t,
          t = (0, i.TH)().pathname,
          e = (0, m.wy)(),
          M = (0, T.$)().navigateToProfile,
          D = (0, C.UL)(),
          B = (0, r.Fg)(),
          Z = B.setTheme,
          R = B.theme,
          I = (0, U.jd)().data,
          L = I.language,
          K = void 0 === L ? 'English' : L,
          z = I.avatar,
          F = I.nickname,
          H = (0, U.d1)().data,
          q =
            ((0, S.useMemo)(
              function () {
                return H.some(function (a) {
                  return a.role === d.z7.Invite;
                });
              },
              [H],
            ),
            u.qg.map(function (a) {
              return {
                key: a,
                label: (0, _.jsx)('span', { children: u.Wy[a] }),
              };
            })),
          G = S.useCallback(
            function () {
              Z('dark' === R ? 'light' : 'dark');
            },
            [Z, R],
          ),
          V =
            ((0, S.useCallback)(
              function () {
                e('/user-setting/team');
              },
              [e],
            ),
            (0, S.useMemo)(
              function () {
                return [
                  { path: A.Z.Home, name: a('header.home'), icon: g.Z },
                  {
                    path: A.Z.Datasets,
                    name: a('header.knowledgeBase'),
                    icon: p.Z,
                  },
                  { path: A.Z.Chats, name: a('header.chat'), icon: h.Z },
                  { path: A.Z.Searches, name: a('header.search'), icon: v.Z },
                  { path: A.Z.Agents, name: a('header.flow'), icon: k.Z },
                  { path: A.Z.Files, name: a('header.fileManager'), icon: x.Z },
                ];
              },
              [a],
            )),
          Q = (0, S.useMemo)(
            function () {
              return V.map(function (a) {
                var t = a.icon;
                return {
                  label:
                    a.path === A.Z.Home
                      ? (0, _.jsx)(t, { className: 'size-6' })
                      : (0, _.jsx)('span', { children: a.name }),
                  value: a.path,
                };
              });
            },
            [V],
          ),
          W = (0, S.useMemo)(
            function () {
              var a;
              return (
                (null ===
                  (a = V.find(function (a) {
                    return t.startsWith(a.path);
                  })) || void 0 === a
                  ? void 0
                  : a.path) || A.Z.Home
              );
            },
            [t, V],
          ),
          J = (0, S.useCallback)(
            function () {
              e(A.Z.Home);
            },
            [e],
          );
        return (0, _.jsxs)('section', {
          className: 'p-5 pr-14 flex justify-between items-center ',
          children: [
            (0, _.jsxs)('div', {
              className: 'flex items-center gap-4',
              children: [
                (0, _.jsx)('img', {
                  src: '/logo.svg',
                  alt: 'logo',
                  className: 'size-10 mr-[12]',
                  onClick: J,
                }),
                (0, _.jsxs)('div', {
                  className: 'flex items-center gap-1.5 text-text-sub-title',
                  children: [
                    (0, _.jsx)(b.Z, { className: 'size-3.5' }),
                    (0, _.jsx)('span', {
                      className: ' text-base',
                      children: '21.5k stars',
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsx)(l.r, {
              options: Q,
              value: W,
              onChange: function (a) {
                e(a);
              },
            }),
            (0, _.jsxs)('div', {
              className: 'flex items-center gap-5 text-text-badge',
              children: [
                (0, _.jsxs)(o.h_, {
                  children: [
                    (0, _.jsx)(o.$F, {
                      children: (0, _.jsxs)('div', {
                        className: 'flex items-center gap-1',
                        children: [
                          a('common.'.concat((0, f.camelCase)(K))),
                          (0, _.jsx)(y.Z, { className: 'size-4' }),
                        ],
                      }),
                    }),
                    (0, _.jsx)(o.AW, {
                      children: q.map(function (a) {
                        return (0, _.jsx)(
                          o.Xi,
                          {
                            onClick:
                              ((t = a.key),
                              function () {
                                D(t);
                              }),
                            children: a.label,
                          },
                          a.key,
                        );
                        var t;
                      }),
                    }),
                  ],
                }),
                (0, _.jsx)(s.zx, {
                  variant: 'ghost',
                  onClick: E,
                  children: (0, _.jsx)(N.Z, {}),
                }),
                (0, _.jsx)(s.zx, {
                  variant: 'ghost',
                  onClick: G,
                  children:
                    'light' === R ? (0, _.jsx)(P.Z, {}) : (0, _.jsx)(j.Z, {}),
                }),
                (0, _.jsxs)('div', {
                  className: 'relative',
                  children: [
                    (0, _.jsx)(n.t, {
                      name: F,
                      avatar: z,
                      className: 'size-8 cursor-pointer',
                      onClick: M,
                    }),
                    (0, _.jsx)(c.C, {
                      className:
                        'h-5 w-8 absolute font-normal p-0 justify-center -right-8 -top-2 text-text-title-invert bg-gradient-to-l from-[#42D7E7] to-[#478AF5]',
                      children: 'Pro',
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function D() {
        return (0, _.jsxs)('section', {
          className: 'h-full flex flex-col text-colors-text-neutral-strong',
          children: [(0, _.jsx)(M, {}), (0, _.jsx)(i.j3, {})],
        });
      }
    },
    73828: function (a, t, e) {
      e.d(t, {
        Dr: function () {
          return u;
        },
        H7: function () {
          return s.H7;
        },
        at: function () {
          return C;
        },
        qh: function () {
          return s.qh;
        },
        rQ: function () {
          return s.rQ;
        },
        z7: function () {
          return T;
        },
      });
      var i = e(9783),
        n = e.n(i),
        r = e(38520),
        c = e(39386),
        s = e(9450),
        o = e(70101),
        l = e(86074),
        u = n()(
          n()(
            n()(
              n()(
                n()(
                  n()(
                    n()({}, s.qh.Profile, (0, l.jsx)(r.m2, {})),
                    s.qh.Password,
                    (0, l.jsx)(r.CW, {}),
                  ),
                  s.qh.Model,
                  (0, l.jsx)(r.eS, {}),
                ),
                s.qh.System,
                (0, l.jsx)(o.Z, { style: { fontSize: 24 } }),
              ),
              s.qh.Team,
              (0, l.jsx)(r.Ww, {}),
            ),
            s.qh.Logout,
            (0, l.jsx)(r.Hl, {}),
          ),
          s.qh.Api,
          (0, l.jsx)(r.Fg, {}),
        ),
        C = [
          c.Q.Ollama,
          c.Q.Xinference,
          c.Q.LocalAI,
          c.Q.LMStudio,
          c.Q.OpenAiAPICompatible,
          c.Q.TogetherAI,
          c.Q.Replicate,
          c.Q.OpenRouter,
          c.Q.HuggingFace,
          c.Q.GPUStack,
          c.Q.ModelScope,
          c.Q.VLLM,
        ],
        T = (function (a) {
          return (
            (a.Owner = 'owner'), (a.Invite = 'invite'), (a.Normal = 'normal'), a
          );
        })({});
    },
    23454: function (a, t, e) {
      e.d(t, {
        Z: function () {
          return i;
        },
      });
      var i = (function (a) {
        return (
          (a.Login = '/login'),
          (a.Home = '/home'),
          (a.Datasets = '/datasets'),
          (a.DatasetBase = '/dataset'),
          (a[(a.Dataset = ''.concat(a.DatasetBase).concat(a.DatasetBase))] =
            'Dataset'),
          (a.Agent = '/agent'),
          (a.AgentTemplates = '/agent-templates'),
          (a.Agents = '/agents'),
          (a.Searches = '/next-searches'),
          (a.Search = '/next-search'),
          (a.Chats = '/next-chats'),
          (a.Chat = '/next-chat'),
          (a.Files = '/files'),
          (a.ProfileSetting = '/profile-setting'),
          (a.DatasetTesting = '/testing'),
          (a.DatasetSetting = '/setting'),
          (a.Chunk = '/chunk'),
          (a.ChunkResult = '/chunk/chunk'),
          (a.Parsed = '/parsed'),
          (a.ParsedResult = '/chunk/parsed'),
          (a.Result = '/result'),
          (a.ResultView = '/chunk/result'),
          a
        );
      })({});
      i.Home,
        i.Home,
        '@/pages'.concat(i.Home),
        i.Datasets,
        i.Datasets,
        '@/pages'.concat(i.Datasets),
        i.Chats,
        i.Chats,
        '@/pages'.concat(i.Chats),
        i.Chat,
        '@/pages'.concat(i.Chats, '/chat'),
        i.Searches,
        i.Searches,
        '@/pages'.concat(i.Searches),
        i.Search,
        '@/pages'.concat(i.Search),
        i.Agents,
        i.Agents,
        '@/pages'.concat(i.Agents),
        ''.concat(i.Agent, '/:id'),
        '@/pages'.concat(i.Agent),
        i.AgentTemplates,
        '@/pages'.concat(i.Agents).concat(i.AgentTemplates),
        i.Files,
        i.Files,
        '@/pages'.concat(i.Files),
        i.DatasetBase,
        i.DatasetBase,
        i.Dataset,
        i.DatasetBase,
        '@/pages'.concat(i.DatasetBase),
        ''.concat(i.Dataset, '/:id'),
        '@/pages'.concat(i.Dataset),
        ''.concat(i.DatasetBase).concat(i.DatasetSetting, '/:id'),
        '@/pages'.concat(i.DatasetBase).concat(i.DatasetSetting),
        ''.concat(i.DatasetBase).concat(i.DatasetTesting, '/:id'),
        '@/pages'.concat(i.DatasetBase).concat(i.DatasetTesting),
        ''.concat(i.ParsedResult, '/chunks'),
        '@/pages'.concat(
          i.Chunk,
          '/parsed-result/add-knowledge/components/knowledge-chunk',
        ),
        i.Chunk,
        i.Chunk,
        '@/pages'.concat(i.Chunk),
        ''.concat(i.ChunkResult, '/:id'),
        '@/pages'.concat(i.Chunk, '/chunk-result'),
        ''.concat(i.ResultView, '/:id'),
        '@/pages'.concat(i.Chunk, '/result-view'),
        i.Chunk,
        '@/pages'.concat(i.Chunk),
        i.ProfileSetting,
        '@/pages'.concat(i.ProfileSetting),
        i.ProfileSetting,
        ''.concat(i.ProfileSetting, '/profile'),
        ''.concat(i.ProfileSetting, '/profile'),
        '@/pages'.concat(i.ProfileSetting, '/profile'),
        ''.concat(i.ProfileSetting, '/team'),
        '@/pages'.concat(i.ProfileSetting, '/team'),
        ''.concat(i.ProfileSetting, '/plan'),
        '@/pages'.concat(i.ProfileSetting, '/plan'),
        ''.concat(i.ProfileSetting, '/model'),
        '@/pages'.concat(i.ProfileSetting, '/model'),
        ''.concat(i.ProfileSetting, '/prompt'),
        '@/pages'.concat(i.ProfileSetting, '/prompt');
    },
  },
]);
//# sourceMappingURL=layouts__next.6bdb8708.async.js.map
