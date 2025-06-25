/*! For license information please see 5232.8506b506.async.js.LICENSE.txt */
'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [5232],
  {
    58363: function (i, a) {
      a.Z = function (i, a) {
        if (i && a) {
          var t = Array.isArray(a) ? a : a.split(',');
          if (0 === t.length) return !0;
          var e = i.name || '',
            n = (i.type || '').toLowerCase(),
            o = n.replace(/\/.*$/, '');
          return t.some(function (i) {
            var a = i.trim().toLowerCase();
            return '.' === a.charAt(0)
              ? e.toLowerCase().endsWith(a)
              : a.endsWith('/*')
                ? o === a.replace(/\/.*$/, '')
                : n === a;
          });
        }
        return !0;
      };
    },
    61108: function (i, a, t) {
      t.d(a, {
        Z: function () {
          return e;
        },
      });
      const e = (0, t(91373).Z)('circle-x', [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        ['path', { d: 'm15 9-6 6', key: '1uzhvr' }],
        ['path', { d: 'm9 9 6 6', key: 'z0biqf' }],
      ]);
    },
    13766: function (i, a, t) {
      t.d(a, {
        Z: function () {
          return e;
        },
      });
      const e = (0, t(91373).Z)('file-text', [
        [
          'path',
          {
            d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z',
            key: '1rqfz7',
          },
        ],
        ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
        ['path', { d: 'M10 9H8', key: 'b1mrlr' }],
        ['path', { d: 'M16 13H8', key: 't4e002' }],
        ['path', { d: 'M16 17H8', key: 'z1uh3a' }],
      ]);
    },
    28142: function (i, a, t) {
      t.d(a, {
        Z: function () {
          return e;
        },
      });
      const e = (0, t(91373).Z)('upload', [
        [
          'path',
          { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' },
        ],
        ['polyline', { points: '17 8 12 3 7 8', key: 't8dd8p' }],
        ['line', { x1: '12', x2: '12', y1: '3', y2: '15', key: 'widbto' }],
      ]);
    },
    44524: function (i, a, t) {
      t.d(a, {
        ZP: function () {
          return oi;
        },
      });
      var e = t(62435),
        n = t(45697),
        o = t.n(n),
        p = t(97582);
      const l = new Map([
        ['1km', 'application/vnd.1000minds.decision-model+xml'],
        ['3dml', 'text/vnd.in3d.3dml'],
        ['3ds', 'image/x-3ds'],
        ['3g2', 'video/3gpp2'],
        ['3gp', 'video/3gp'],
        ['3gpp', 'video/3gpp'],
        ['3mf', 'model/3mf'],
        ['7z', 'application/x-7z-compressed'],
        ['7zip', 'application/x-7z-compressed'],
        ['123', 'application/vnd.lotus-1-2-3'],
        ['aab', 'application/x-authorware-bin'],
        ['aac', 'audio/x-acc'],
        ['aam', 'application/x-authorware-map'],
        ['aas', 'application/x-authorware-seg'],
        ['abw', 'application/x-abiword'],
        ['ac', 'application/vnd.nokia.n-gage.ac+xml'],
        ['ac3', 'audio/ac3'],
        ['acc', 'application/vnd.americandynamics.acc'],
        ['ace', 'application/x-ace-compressed'],
        ['acu', 'application/vnd.acucobol'],
        ['acutc', 'application/vnd.acucorp'],
        ['adp', 'audio/adpcm'],
        ['aep', 'application/vnd.audiograph'],
        ['afm', 'application/x-font-type1'],
        ['afp', 'application/vnd.ibm.modcap'],
        ['ahead', 'application/vnd.ahead.space'],
        ['ai', 'application/pdf'],
        ['aif', 'audio/x-aiff'],
        ['aifc', 'audio/x-aiff'],
        ['aiff', 'audio/x-aiff'],
        ['air', 'application/vnd.adobe.air-application-installer-package+zip'],
        ['ait', 'application/vnd.dvb.ait'],
        ['ami', 'application/vnd.amiga.ami'],
        ['amr', 'audio/amr'],
        ['apk', 'application/vnd.android.package-archive'],
        ['apng', 'image/apng'],
        ['appcache', 'text/cache-manifest'],
        ['application', 'application/x-ms-application'],
        ['apr', 'application/vnd.lotus-approach'],
        ['arc', 'application/x-freearc'],
        ['arj', 'application/x-arj'],
        ['asc', 'application/pgp-signature'],
        ['asf', 'video/x-ms-asf'],
        ['asm', 'text/x-asm'],
        ['aso', 'application/vnd.accpac.simply.aso'],
        ['asx', 'video/x-ms-asf'],
        ['atc', 'application/vnd.acucorp'],
        ['atom', 'application/atom+xml'],
        ['atomcat', 'application/atomcat+xml'],
        ['atomdeleted', 'application/atomdeleted+xml'],
        ['atomsvc', 'application/atomsvc+xml'],
        ['atx', 'application/vnd.antix.game-component'],
        ['au', 'audio/x-au'],
        ['avi', 'video/x-msvideo'],
        ['avif', 'image/avif'],
        ['aw', 'application/applixware'],
        ['azf', 'application/vnd.airzip.filesecure.azf'],
        ['azs', 'application/vnd.airzip.filesecure.azs'],
        ['azv', 'image/vnd.airzip.accelerator.azv'],
        ['azw', 'application/vnd.amazon.ebook'],
        ['b16', 'image/vnd.pco.b16'],
        ['bat', 'application/x-msdownload'],
        ['bcpio', 'application/x-bcpio'],
        ['bdf', 'application/x-font-bdf'],
        ['bdm', 'application/vnd.syncml.dm+wbxml'],
        ['bdoc', 'application/x-bdoc'],
        ['bed', 'application/vnd.realvnc.bed'],
        ['bh2', 'application/vnd.fujitsu.oasysprs'],
        ['bin', 'application/octet-stream'],
        ['blb', 'application/x-blorb'],
        ['blorb', 'application/x-blorb'],
        ['bmi', 'application/vnd.bmi'],
        ['bmml', 'application/vnd.balsamiq.bmml+xml'],
        ['bmp', 'image/bmp'],
        ['book', 'application/vnd.framemaker'],
        ['box', 'application/vnd.previewsystems.box'],
        ['boz', 'application/x-bzip2'],
        ['bpk', 'application/octet-stream'],
        ['bpmn', 'application/octet-stream'],
        ['bsp', 'model/vnd.valve.source.compiled-map'],
        ['btif', 'image/prs.btif'],
        ['buffer', 'application/octet-stream'],
        ['bz', 'application/x-bzip'],
        ['bz2', 'application/x-bzip2'],
        ['c', 'text/x-c'],
        ['c4d', 'application/vnd.clonk.c4group'],
        ['c4f', 'application/vnd.clonk.c4group'],
        ['c4g', 'application/vnd.clonk.c4group'],
        ['c4p', 'application/vnd.clonk.c4group'],
        ['c4u', 'application/vnd.clonk.c4group'],
        ['c11amc', 'application/vnd.cluetrust.cartomobile-config'],
        ['c11amz', 'application/vnd.cluetrust.cartomobile-config-pkg'],
        ['cab', 'application/vnd.ms-cab-compressed'],
        ['caf', 'audio/x-caf'],
        ['cap', 'application/vnd.tcpdump.pcap'],
        ['car', 'application/vnd.curl.car'],
        ['cat', 'application/vnd.ms-pki.seccat'],
        ['cb7', 'application/x-cbr'],
        ['cba', 'application/x-cbr'],
        ['cbr', 'application/x-cbr'],
        ['cbt', 'application/x-cbr'],
        ['cbz', 'application/x-cbr'],
        ['cc', 'text/x-c'],
        ['cco', 'application/x-cocoa'],
        ['cct', 'application/x-director'],
        ['ccxml', 'application/ccxml+xml'],
        ['cdbcmsg', 'application/vnd.contact.cmsg'],
        ['cda', 'application/x-cdf'],
        ['cdf', 'application/x-netcdf'],
        ['cdfx', 'application/cdfx+xml'],
        ['cdkey', 'application/vnd.mediastation.cdkey'],
        ['cdmia', 'application/cdmi-capability'],
        ['cdmic', 'application/cdmi-container'],
        ['cdmid', 'application/cdmi-domain'],
        ['cdmio', 'application/cdmi-object'],
        ['cdmiq', 'application/cdmi-queue'],
        ['cdr', 'application/cdr'],
        ['cdx', 'chemical/x-cdx'],
        ['cdxml', 'application/vnd.chemdraw+xml'],
        ['cdy', 'application/vnd.cinderella'],
        ['cer', 'application/pkix-cert'],
        ['cfs', 'application/x-cfs-compressed'],
        ['cgm', 'image/cgm'],
        ['chat', 'application/x-chat'],
        ['chm', 'application/vnd.ms-htmlhelp'],
        ['chrt', 'application/vnd.kde.kchart'],
        ['cif', 'chemical/x-cif'],
        ['cii', 'application/vnd.anser-web-certificate-issue-initiation'],
        ['cil', 'application/vnd.ms-artgalry'],
        ['cjs', 'application/node'],
        ['cla', 'application/vnd.claymore'],
        ['class', 'application/octet-stream'],
        ['clkk', 'application/vnd.crick.clicker.keyboard'],
        ['clkp', 'application/vnd.crick.clicker.palette'],
        ['clkt', 'application/vnd.crick.clicker.template'],
        ['clkw', 'application/vnd.crick.clicker.wordbank'],
        ['clkx', 'application/vnd.crick.clicker'],
        ['clp', 'application/x-msclip'],
        ['cmc', 'application/vnd.cosmocaller'],
        ['cmdf', 'chemical/x-cmdf'],
        ['cml', 'chemical/x-cml'],
        ['cmp', 'application/vnd.yellowriver-custom-menu'],
        ['cmx', 'image/x-cmx'],
        ['cod', 'application/vnd.rim.cod'],
        ['coffee', 'text/coffeescript'],
        ['com', 'application/x-msdownload'],
        ['conf', 'text/plain'],
        ['cpio', 'application/x-cpio'],
        ['cpp', 'text/x-c'],
        ['cpt', 'application/mac-compactpro'],
        ['crd', 'application/x-mscardfile'],
        ['crl', 'application/pkix-crl'],
        ['crt', 'application/x-x509-ca-cert'],
        ['crx', 'application/x-chrome-extension'],
        ['cryptonote', 'application/vnd.rig.cryptonote'],
        ['csh', 'application/x-csh'],
        ['csl', 'application/vnd.citationstyles.style+xml'],
        ['csml', 'chemical/x-csml'],
        ['csp', 'application/vnd.commonspace'],
        ['csr', 'application/octet-stream'],
        ['css', 'text/css'],
        ['cst', 'application/x-director'],
        ['csv', 'text/csv'],
        ['cu', 'application/cu-seeme'],
        ['curl', 'text/vnd.curl'],
        ['cww', 'application/prs.cww'],
        ['cxt', 'application/x-director'],
        ['cxx', 'text/x-c'],
        ['dae', 'model/vnd.collada+xml'],
        ['daf', 'application/vnd.mobius.daf'],
        ['dart', 'application/vnd.dart'],
        ['dataless', 'application/vnd.fdsn.seed'],
        ['davmount', 'application/davmount+xml'],
        ['dbf', 'application/vnd.dbf'],
        ['dbk', 'application/docbook+xml'],
        ['dcr', 'application/x-director'],
        ['dcurl', 'text/vnd.curl.dcurl'],
        ['dd2', 'application/vnd.oma.dd2+xml'],
        ['ddd', 'application/vnd.fujixerox.ddd'],
        ['ddf', 'application/vnd.syncml.dmddf+xml'],
        ['dds', 'image/vnd.ms-dds'],
        ['deb', 'application/x-debian-package'],
        ['def', 'text/plain'],
        ['deploy', 'application/octet-stream'],
        ['der', 'application/x-x509-ca-cert'],
        ['dfac', 'application/vnd.dreamfactory'],
        ['dgc', 'application/x-dgc-compressed'],
        ['dic', 'text/x-c'],
        ['dir', 'application/x-director'],
        ['dis', 'application/vnd.mobius.dis'],
        ['disposition-notification', 'message/disposition-notification'],
        ['dist', 'application/octet-stream'],
        ['distz', 'application/octet-stream'],
        ['djv', 'image/vnd.djvu'],
        ['djvu', 'image/vnd.djvu'],
        ['dll', 'application/octet-stream'],
        ['dmg', 'application/x-apple-diskimage'],
        ['dmn', 'application/octet-stream'],
        ['dmp', 'application/vnd.tcpdump.pcap'],
        ['dms', 'application/octet-stream'],
        ['dna', 'application/vnd.dna'],
        ['doc', 'application/msword'],
        ['docm', 'application/vnd.ms-word.template.macroEnabled.12'],
        [
          'docx',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ],
        ['dot', 'application/msword'],
        ['dotm', 'application/vnd.ms-word.template.macroEnabled.12'],
        [
          'dotx',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
        ],
        ['dp', 'application/vnd.osgi.dp'],
        ['dpg', 'application/vnd.dpgraph'],
        ['dra', 'audio/vnd.dra'],
        ['drle', 'image/dicom-rle'],
        ['dsc', 'text/prs.lines.tag'],
        ['dssc', 'application/dssc+der'],
        ['dtb', 'application/x-dtbook+xml'],
        ['dtd', 'application/xml-dtd'],
        ['dts', 'audio/vnd.dts'],
        ['dtshd', 'audio/vnd.dts.hd'],
        ['dump', 'application/octet-stream'],
        ['dvb', 'video/vnd.dvb.file'],
        ['dvi', 'application/x-dvi'],
        ['dwd', 'application/atsc-dwd+xml'],
        ['dwf', 'model/vnd.dwf'],
        ['dwg', 'image/vnd.dwg'],
        ['dxf', 'image/vnd.dxf'],
        ['dxp', 'application/vnd.spotfire.dxp'],
        ['dxr', 'application/x-director'],
        ['ear', 'application/java-archive'],
        ['ecelp4800', 'audio/vnd.nuera.ecelp4800'],
        ['ecelp7470', 'audio/vnd.nuera.ecelp7470'],
        ['ecelp9600', 'audio/vnd.nuera.ecelp9600'],
        ['ecma', 'application/ecmascript'],
        ['edm', 'application/vnd.novadigm.edm'],
        ['edx', 'application/vnd.novadigm.edx'],
        ['efif', 'application/vnd.picsel'],
        ['ei6', 'application/vnd.pg.osasli'],
        ['elc', 'application/octet-stream'],
        ['emf', 'image/emf'],
        ['eml', 'message/rfc822'],
        ['emma', 'application/emma+xml'],
        ['emotionml', 'application/emotionml+xml'],
        ['emz', 'application/x-msmetafile'],
        ['eol', 'audio/vnd.digital-winds'],
        ['eot', 'application/vnd.ms-fontobject'],
        ['eps', 'application/postscript'],
        ['epub', 'application/epub+zip'],
        ['es', 'application/ecmascript'],
        ['es3', 'application/vnd.eszigno3+xml'],
        ['esa', 'application/vnd.osgi.subsystem'],
        ['esf', 'application/vnd.epson.esf'],
        ['et3', 'application/vnd.eszigno3+xml'],
        ['etx', 'text/x-setext'],
        ['eva', 'application/x-eva'],
        ['evy', 'application/x-envoy'],
        ['exe', 'application/octet-stream'],
        ['exi', 'application/exi'],
        ['exp', 'application/express'],
        ['exr', 'image/aces'],
        ['ext', 'application/vnd.novadigm.ext'],
        ['ez', 'application/andrew-inset'],
        ['ez2', 'application/vnd.ezpix-album'],
        ['ez3', 'application/vnd.ezpix-package'],
        ['f', 'text/x-fortran'],
        ['f4v', 'video/mp4'],
        ['f77', 'text/x-fortran'],
        ['f90', 'text/x-fortran'],
        ['fbs', 'image/vnd.fastbidsheet'],
        ['fcdt', 'application/vnd.adobe.formscentral.fcdt'],
        ['fcs', 'application/vnd.isac.fcs'],
        ['fdf', 'application/vnd.fdf'],
        ['fdt', 'application/fdt+xml'],
        ['fe_launch', 'application/vnd.denovo.fcselayout-link'],
        ['fg5', 'application/vnd.fujitsu.oasysgp'],
        ['fgd', 'application/x-director'],
        ['fh', 'image/x-freehand'],
        ['fh4', 'image/x-freehand'],
        ['fh5', 'image/x-freehand'],
        ['fh7', 'image/x-freehand'],
        ['fhc', 'image/x-freehand'],
        ['fig', 'application/x-xfig'],
        ['fits', 'image/fits'],
        ['flac', 'audio/x-flac'],
        ['fli', 'video/x-fli'],
        ['flo', 'application/vnd.micrografx.flo'],
        ['flv', 'video/x-flv'],
        ['flw', 'application/vnd.kde.kivio'],
        ['flx', 'text/vnd.fmi.flexstor'],
        ['fly', 'text/vnd.fly'],
        ['fm', 'application/vnd.framemaker'],
        ['fnc', 'application/vnd.frogans.fnc'],
        ['fo', 'application/vnd.software602.filler.form+xml'],
        ['for', 'text/x-fortran'],
        ['fpx', 'image/vnd.fpx'],
        ['frame', 'application/vnd.framemaker'],
        ['fsc', 'application/vnd.fsc.weblaunch'],
        ['fst', 'image/vnd.fst'],
        ['ftc', 'application/vnd.fluxtime.clip'],
        ['fti', 'application/vnd.anser-web-funds-transfer-initiation'],
        ['fvt', 'video/vnd.fvt'],
        ['fxp', 'application/vnd.adobe.fxp'],
        ['fxpl', 'application/vnd.adobe.fxp'],
        ['fzs', 'application/vnd.fuzzysheet'],
        ['g2w', 'application/vnd.geoplan'],
        ['g3', 'image/g3fax'],
        ['g3w', 'application/vnd.geospace'],
        ['gac', 'application/vnd.groove-account'],
        ['gam', 'application/x-tads'],
        ['gbr', 'application/rpki-ghostbusters'],
        ['gca', 'application/x-gca-compressed'],
        ['gdl', 'model/vnd.gdl'],
        ['gdoc', 'application/vnd.google-apps.document'],
        ['geo', 'application/vnd.dynageo'],
        ['geojson', 'application/geo+json'],
        ['gex', 'application/vnd.geometry-explorer'],
        ['ggb', 'application/vnd.geogebra.file'],
        ['ggt', 'application/vnd.geogebra.tool'],
        ['ghf', 'application/vnd.groove-help'],
        ['gif', 'image/gif'],
        ['gim', 'application/vnd.groove-identity-message'],
        ['glb', 'model/gltf-binary'],
        ['gltf', 'model/gltf+json'],
        ['gml', 'application/gml+xml'],
        ['gmx', 'application/vnd.gmx'],
        ['gnumeric', 'application/x-gnumeric'],
        ['gpg', 'application/gpg-keys'],
        ['gph', 'application/vnd.flographit'],
        ['gpx', 'application/gpx+xml'],
        ['gqf', 'application/vnd.grafeq'],
        ['gqs', 'application/vnd.grafeq'],
        ['gram', 'application/srgs'],
        ['gramps', 'application/x-gramps-xml'],
        ['gre', 'application/vnd.geometry-explorer'],
        ['grv', 'application/vnd.groove-injector'],
        ['grxml', 'application/srgs+xml'],
        ['gsf', 'application/x-font-ghostscript'],
        ['gsheet', 'application/vnd.google-apps.spreadsheet'],
        ['gslides', 'application/vnd.google-apps.presentation'],
        ['gtar', 'application/x-gtar'],
        ['gtm', 'application/vnd.groove-tool-message'],
        ['gtw', 'model/vnd.gtw'],
        ['gv', 'text/vnd.graphviz'],
        ['gxf', 'application/gxf'],
        ['gxt', 'application/vnd.geonext'],
        ['gz', 'application/gzip'],
        ['gzip', 'application/gzip'],
        ['h', 'text/x-c'],
        ['h261', 'video/h261'],
        ['h263', 'video/h263'],
        ['h264', 'video/h264'],
        ['hal', 'application/vnd.hal+xml'],
        ['hbci', 'application/vnd.hbci'],
        ['hbs', 'text/x-handlebars-template'],
        ['hdd', 'application/x-virtualbox-hdd'],
        ['hdf', 'application/x-hdf'],
        ['heic', 'image/heic'],
        ['heics', 'image/heic-sequence'],
        ['heif', 'image/heif'],
        ['heifs', 'image/heif-sequence'],
        ['hej2', 'image/hej2k'],
        ['held', 'application/atsc-held+xml'],
        ['hh', 'text/x-c'],
        ['hjson', 'application/hjson'],
        ['hlp', 'application/winhlp'],
        ['hpgl', 'application/vnd.hp-hpgl'],
        ['hpid', 'application/vnd.hp-hpid'],
        ['hps', 'application/vnd.hp-hps'],
        ['hqx', 'application/mac-binhex40'],
        ['hsj2', 'image/hsj2'],
        ['htc', 'text/x-component'],
        ['htke', 'application/vnd.kenameaapp'],
        ['htm', 'text/html'],
        ['html', 'text/html'],
        ['hvd', 'application/vnd.yamaha.hv-dic'],
        ['hvp', 'application/vnd.yamaha.hv-voice'],
        ['hvs', 'application/vnd.yamaha.hv-script'],
        ['i2g', 'application/vnd.intergeo'],
        ['icc', 'application/vnd.iccprofile'],
        ['ice', 'x-conference/x-cooltalk'],
        ['icm', 'application/vnd.iccprofile'],
        ['ico', 'image/x-icon'],
        ['ics', 'text/calendar'],
        ['ief', 'image/ief'],
        ['ifb', 'text/calendar'],
        ['ifm', 'application/vnd.shana.informed.formdata'],
        ['iges', 'model/iges'],
        ['igl', 'application/vnd.igloader'],
        ['igm', 'application/vnd.insors.igm'],
        ['igs', 'model/iges'],
        ['igx', 'application/vnd.micrografx.igx'],
        ['iif', 'application/vnd.shana.informed.interchange'],
        ['img', 'application/octet-stream'],
        ['imp', 'application/vnd.accpac.simply.imp'],
        ['ims', 'application/vnd.ms-ims'],
        ['in', 'text/plain'],
        ['ini', 'text/plain'],
        ['ink', 'application/inkml+xml'],
        ['inkml', 'application/inkml+xml'],
        ['install', 'application/x-install-instructions'],
        ['iota', 'application/vnd.astraea-software.iota'],
        ['ipfix', 'application/ipfix'],
        ['ipk', 'application/vnd.shana.informed.package'],
        ['irm', 'application/vnd.ibm.rights-management'],
        ['irp', 'application/vnd.irepository.package+xml'],
        ['iso', 'application/x-iso9660-image'],
        ['itp', 'application/vnd.shana.informed.formtemplate'],
        ['its', 'application/its+xml'],
        ['ivp', 'application/vnd.immervision-ivp'],
        ['ivu', 'application/vnd.immervision-ivu'],
        ['jad', 'text/vnd.sun.j2me.app-descriptor'],
        ['jade', 'text/jade'],
        ['jam', 'application/vnd.jam'],
        ['jar', 'application/java-archive'],
        ['jardiff', 'application/x-java-archive-diff'],
        ['java', 'text/x-java-source'],
        ['jhc', 'image/jphc'],
        ['jisp', 'application/vnd.jisp'],
        ['jls', 'image/jls'],
        ['jlt', 'application/vnd.hp-jlyt'],
        ['jng', 'image/x-jng'],
        ['jnlp', 'application/x-java-jnlp-file'],
        ['joda', 'application/vnd.joost.joda-archive'],
        ['jp2', 'image/jp2'],
        ['jpe', 'image/jpeg'],
        ['jpeg', 'image/jpeg'],
        ['jpf', 'image/jpx'],
        ['jpg', 'image/jpeg'],
        ['jpg2', 'image/jp2'],
        ['jpgm', 'video/jpm'],
        ['jpgv', 'video/jpeg'],
        ['jph', 'image/jph'],
        ['jpm', 'video/jpm'],
        ['jpx', 'image/jpx'],
        ['js', 'application/javascript'],
        ['json', 'application/json'],
        ['json5', 'application/json5'],
        ['jsonld', 'application/ld+json'],
        ['jsonl', 'application/jsonl'],
        ['jsonml', 'application/jsonml+json'],
        ['jsx', 'text/jsx'],
        ['jxr', 'image/jxr'],
        ['jxra', 'image/jxra'],
        ['jxrs', 'image/jxrs'],
        ['jxs', 'image/jxs'],
        ['jxsc', 'image/jxsc'],
        ['jxsi', 'image/jxsi'],
        ['jxss', 'image/jxss'],
        ['kar', 'audio/midi'],
        ['karbon', 'application/vnd.kde.karbon'],
        ['kdb', 'application/octet-stream'],
        ['kdbx', 'application/x-keepass2'],
        ['key', 'application/x-iwork-keynote-sffkey'],
        ['kfo', 'application/vnd.kde.kformula'],
        ['kia', 'application/vnd.kidspiration'],
        ['kml', 'application/vnd.google-earth.kml+xml'],
        ['kmz', 'application/vnd.google-earth.kmz'],
        ['kne', 'application/vnd.kinar'],
        ['knp', 'application/vnd.kinar'],
        ['kon', 'application/vnd.kde.kontour'],
        ['kpr', 'application/vnd.kde.kpresenter'],
        ['kpt', 'application/vnd.kde.kpresenter'],
        ['kpxx', 'application/vnd.ds-keypoint'],
        ['ksp', 'application/vnd.kde.kspread'],
        ['ktr', 'application/vnd.kahootz'],
        ['ktx', 'image/ktx'],
        ['ktx2', 'image/ktx2'],
        ['ktz', 'application/vnd.kahootz'],
        ['kwd', 'application/vnd.kde.kword'],
        ['kwt', 'application/vnd.kde.kword'],
        ['lasxml', 'application/vnd.las.las+xml'],
        ['latex', 'application/x-latex'],
        ['lbd', 'application/vnd.llamagraphics.life-balance.desktop'],
        ['lbe', 'application/vnd.llamagraphics.life-balance.exchange+xml'],
        ['les', 'application/vnd.hhe.lesson-player'],
        ['less', 'text/less'],
        ['lgr', 'application/lgr+xml'],
        ['lha', 'application/octet-stream'],
        ['link66', 'application/vnd.route66.link66+xml'],
        ['list', 'text/plain'],
        ['list3820', 'application/vnd.ibm.modcap'],
        ['listafp', 'application/vnd.ibm.modcap'],
        ['litcoffee', 'text/coffeescript'],
        ['lnk', 'application/x-ms-shortcut'],
        ['log', 'text/plain'],
        ['lostxml', 'application/lost+xml'],
        ['lrf', 'application/octet-stream'],
        ['lrm', 'application/vnd.ms-lrm'],
        ['ltf', 'application/vnd.frogans.ltf'],
        ['lua', 'text/x-lua'],
        ['luac', 'application/x-lua-bytecode'],
        ['lvp', 'audio/vnd.lucent.voice'],
        ['lwp', 'application/vnd.lotus-wordpro'],
        ['lzh', 'application/octet-stream'],
        ['m1v', 'video/mpeg'],
        ['m2a', 'audio/mpeg'],
        ['m2v', 'video/mpeg'],
        ['m3a', 'audio/mpeg'],
        ['m3u', 'text/plain'],
        ['m3u8', 'application/vnd.apple.mpegurl'],
        ['m4a', 'audio/x-m4a'],
        ['m4p', 'application/mp4'],
        ['m4s', 'video/iso.segment'],
        ['m4u', 'application/vnd.mpegurl'],
        ['m4v', 'video/x-m4v'],
        ['m13', 'application/x-msmediaview'],
        ['m14', 'application/x-msmediaview'],
        ['m21', 'application/mp21'],
        ['ma', 'application/mathematica'],
        ['mads', 'application/mads+xml'],
        ['maei', 'application/mmt-aei+xml'],
        ['mag', 'application/vnd.ecowin.chart'],
        ['maker', 'application/vnd.framemaker'],
        ['man', 'text/troff'],
        ['manifest', 'text/cache-manifest'],
        ['map', 'application/json'],
        ['mar', 'application/octet-stream'],
        ['markdown', 'text/markdown'],
        ['mathml', 'application/mathml+xml'],
        ['mb', 'application/mathematica'],
        ['mbk', 'application/vnd.mobius.mbk'],
        ['mbox', 'application/mbox'],
        ['mc1', 'application/vnd.medcalcdata'],
        ['mcd', 'application/vnd.mcd'],
        ['mcurl', 'text/vnd.curl.mcurl'],
        ['md', 'text/markdown'],
        ['mdb', 'application/x-msaccess'],
        ['mdi', 'image/vnd.ms-modi'],
        ['mdx', 'text/mdx'],
        ['me', 'text/troff'],
        ['mesh', 'model/mesh'],
        ['meta4', 'application/metalink4+xml'],
        ['metalink', 'application/metalink+xml'],
        ['mets', 'application/mets+xml'],
        ['mfm', 'application/vnd.mfmp'],
        ['mft', 'application/rpki-manifest'],
        ['mgp', 'application/vnd.osgeo.mapguide.package'],
        ['mgz', 'application/vnd.proteus.magazine'],
        ['mid', 'audio/midi'],
        ['midi', 'audio/midi'],
        ['mie', 'application/x-mie'],
        ['mif', 'application/vnd.mif'],
        ['mime', 'message/rfc822'],
        ['mj2', 'video/mj2'],
        ['mjp2', 'video/mj2'],
        ['mjs', 'application/javascript'],
        ['mk3d', 'video/x-matroska'],
        ['mka', 'audio/x-matroska'],
        ['mkd', 'text/x-markdown'],
        ['mks', 'video/x-matroska'],
        ['mkv', 'video/x-matroska'],
        ['mlp', 'application/vnd.dolby.mlp'],
        ['mmd', 'application/vnd.chipnuts.karaoke-mmd'],
        ['mmf', 'application/vnd.smaf'],
        ['mml', 'text/mathml'],
        ['mmr', 'image/vnd.fujixerox.edmics-mmr'],
        ['mng', 'video/x-mng'],
        ['mny', 'application/x-msmoney'],
        ['mobi', 'application/x-mobipocket-ebook'],
        ['mods', 'application/mods+xml'],
        ['mov', 'video/quicktime'],
        ['movie', 'video/x-sgi-movie'],
        ['mp2', 'audio/mpeg'],
        ['mp2a', 'audio/mpeg'],
        ['mp3', 'audio/mpeg'],
        ['mp4', 'video/mp4'],
        ['mp4a', 'audio/mp4'],
        ['mp4s', 'application/mp4'],
        ['mp4v', 'video/mp4'],
        ['mp21', 'application/mp21'],
        ['mpc', 'application/vnd.mophun.certificate'],
        ['mpd', 'application/dash+xml'],
        ['mpe', 'video/mpeg'],
        ['mpeg', 'video/mpeg'],
        ['mpg', 'video/mpeg'],
        ['mpg4', 'video/mp4'],
        ['mpga', 'audio/mpeg'],
        ['mpkg', 'application/vnd.apple.installer+xml'],
        ['mpm', 'application/vnd.blueice.multipass'],
        ['mpn', 'application/vnd.mophun.application'],
        ['mpp', 'application/vnd.ms-project'],
        ['mpt', 'application/vnd.ms-project'],
        ['mpy', 'application/vnd.ibm.minipay'],
        ['mqy', 'application/vnd.mobius.mqy'],
        ['mrc', 'application/marc'],
        ['mrcx', 'application/marcxml+xml'],
        ['ms', 'text/troff'],
        ['mscml', 'application/mediaservercontrol+xml'],
        ['mseed', 'application/vnd.fdsn.mseed'],
        ['mseq', 'application/vnd.mseq'],
        ['msf', 'application/vnd.epson.msf'],
        ['msg', 'application/vnd.ms-outlook'],
        ['msh', 'model/mesh'],
        ['msi', 'application/x-msdownload'],
        ['msl', 'application/vnd.mobius.msl'],
        ['msm', 'application/octet-stream'],
        ['msp', 'application/octet-stream'],
        ['msty', 'application/vnd.muvee.style'],
        ['mtl', 'model/mtl'],
        ['mts', 'model/vnd.mts'],
        ['mus', 'application/vnd.musician'],
        ['musd', 'application/mmt-usd+xml'],
        ['musicxml', 'application/vnd.recordare.musicxml+xml'],
        ['mvb', 'application/x-msmediaview'],
        ['mvt', 'application/vnd.mapbox-vector-tile'],
        ['mwf', 'application/vnd.mfer'],
        ['mxf', 'application/mxf'],
        ['mxl', 'application/vnd.recordare.musicxml'],
        ['mxmf', 'audio/mobile-xmf'],
        ['mxml', 'application/xv+xml'],
        ['mxs', 'application/vnd.triscape.mxs'],
        ['mxu', 'video/vnd.mpegurl'],
        ['n-gage', 'application/vnd.nokia.n-gage.symbian.install'],
        ['n3', 'text/n3'],
        ['nb', 'application/mathematica'],
        ['nbp', 'application/vnd.wolfram.player'],
        ['nc', 'application/x-netcdf'],
        ['ncx', 'application/x-dtbncx+xml'],
        ['nfo', 'text/x-nfo'],
        ['ngdat', 'application/vnd.nokia.n-gage.data'],
        ['nitf', 'application/vnd.nitf'],
        ['nlu', 'application/vnd.neurolanguage.nlu'],
        ['nml', 'application/vnd.enliven'],
        ['nnd', 'application/vnd.noblenet-directory'],
        ['nns', 'application/vnd.noblenet-sealer'],
        ['nnw', 'application/vnd.noblenet-web'],
        ['npx', 'image/vnd.net-fpx'],
        ['nq', 'application/n-quads'],
        ['nsc', 'application/x-conference'],
        ['nsf', 'application/vnd.lotus-notes'],
        ['nt', 'application/n-triples'],
        ['ntf', 'application/vnd.nitf'],
        ['numbers', 'application/x-iwork-numbers-sffnumbers'],
        ['nzb', 'application/x-nzb'],
        ['oa2', 'application/vnd.fujitsu.oasys2'],
        ['oa3', 'application/vnd.fujitsu.oasys3'],
        ['oas', 'application/vnd.fujitsu.oasys'],
        ['obd', 'application/x-msbinder'],
        ['obgx', 'application/vnd.openblox.game+xml'],
        ['obj', 'model/obj'],
        ['oda', 'application/oda'],
        ['odb', 'application/vnd.oasis.opendocument.database'],
        ['odc', 'application/vnd.oasis.opendocument.chart'],
        ['odf', 'application/vnd.oasis.opendocument.formula'],
        ['odft', 'application/vnd.oasis.opendocument.formula-template'],
        ['odg', 'application/vnd.oasis.opendocument.graphics'],
        ['odi', 'application/vnd.oasis.opendocument.image'],
        ['odm', 'application/vnd.oasis.opendocument.text-master'],
        ['odp', 'application/vnd.oasis.opendocument.presentation'],
        ['ods', 'application/vnd.oasis.opendocument.spreadsheet'],
        ['odt', 'application/vnd.oasis.opendocument.text'],
        ['oga', 'audio/ogg'],
        ['ogex', 'model/vnd.opengex'],
        ['ogg', 'audio/ogg'],
        ['ogv', 'video/ogg'],
        ['ogx', 'application/ogg'],
        ['omdoc', 'application/omdoc+xml'],
        ['onepkg', 'application/onenote'],
        ['onetmp', 'application/onenote'],
        ['onetoc', 'application/onenote'],
        ['onetoc2', 'application/onenote'],
        ['opf', 'application/oebps-package+xml'],
        ['opml', 'text/x-opml'],
        ['oprc', 'application/vnd.palm'],
        ['opus', 'audio/ogg'],
        ['org', 'text/x-org'],
        ['osf', 'application/vnd.yamaha.openscoreformat'],
        ['osfpvg', 'application/vnd.yamaha.openscoreformat.osfpvg+xml'],
        ['osm', 'application/vnd.openstreetmap.data+xml'],
        ['otc', 'application/vnd.oasis.opendocument.chart-template'],
        ['otf', 'font/otf'],
        ['otg', 'application/vnd.oasis.opendocument.graphics-template'],
        ['oth', 'application/vnd.oasis.opendocument.text-web'],
        ['oti', 'application/vnd.oasis.opendocument.image-template'],
        ['otp', 'application/vnd.oasis.opendocument.presentation-template'],
        ['ots', 'application/vnd.oasis.opendocument.spreadsheet-template'],
        ['ott', 'application/vnd.oasis.opendocument.text-template'],
        ['ova', 'application/x-virtualbox-ova'],
        ['ovf', 'application/x-virtualbox-ovf'],
        ['owl', 'application/rdf+xml'],
        ['oxps', 'application/oxps'],
        ['oxt', 'application/vnd.openofficeorg.extension'],
        ['p', 'text/x-pascal'],
        ['p7a', 'application/x-pkcs7-signature'],
        ['p7b', 'application/x-pkcs7-certificates'],
        ['p7c', 'application/pkcs7-mime'],
        ['p7m', 'application/pkcs7-mime'],
        ['p7r', 'application/x-pkcs7-certreqresp'],
        ['p7s', 'application/pkcs7-signature'],
        ['p8', 'application/pkcs8'],
        ['p10', 'application/x-pkcs10'],
        ['p12', 'application/x-pkcs12'],
        ['pac', 'application/x-ns-proxy-autoconfig'],
        ['pages', 'application/x-iwork-pages-sffpages'],
        ['pas', 'text/x-pascal'],
        ['paw', 'application/vnd.pawaafile'],
        ['pbd', 'application/vnd.powerbuilder6'],
        ['pbm', 'image/x-portable-bitmap'],
        ['pcap', 'application/vnd.tcpdump.pcap'],
        ['pcf', 'application/x-font-pcf'],
        ['pcl', 'application/vnd.hp-pcl'],
        ['pclxl', 'application/vnd.hp-pclxl'],
        ['pct', 'image/x-pict'],
        ['pcurl', 'application/vnd.curl.pcurl'],
        ['pcx', 'image/x-pcx'],
        ['pdb', 'application/x-pilot'],
        ['pde', 'text/x-processing'],
        ['pdf', 'application/pdf'],
        ['pem', 'application/x-x509-user-cert'],
        ['pfa', 'application/x-font-type1'],
        ['pfb', 'application/x-font-type1'],
        ['pfm', 'application/x-font-type1'],
        ['pfr', 'application/font-tdpfr'],
        ['pfx', 'application/x-pkcs12'],
        ['pgm', 'image/x-portable-graymap'],
        ['pgn', 'application/x-chess-pgn'],
        ['pgp', 'application/pgp'],
        ['php', 'application/x-httpd-php'],
        ['php3', 'application/x-httpd-php'],
        ['php4', 'application/x-httpd-php'],
        ['phps', 'application/x-httpd-php-source'],
        ['phtml', 'application/x-httpd-php'],
        ['pic', 'image/x-pict'],
        ['pkg', 'application/octet-stream'],
        ['pki', 'application/pkixcmp'],
        ['pkipath', 'application/pkix-pkipath'],
        ['pkpass', 'application/vnd.apple.pkpass'],
        ['pl', 'application/x-perl'],
        ['plb', 'application/vnd.3gpp.pic-bw-large'],
        ['plc', 'application/vnd.mobius.plc'],
        ['plf', 'application/vnd.pocketlearn'],
        ['pls', 'application/pls+xml'],
        ['pm', 'application/x-perl'],
        ['pml', 'application/vnd.ctc-posml'],
        ['png', 'image/png'],
        ['pnm', 'image/x-portable-anymap'],
        ['portpkg', 'application/vnd.macports.portpkg'],
        ['pot', 'application/vnd.ms-powerpoint'],
        ['potm', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12'],
        [
          'potx',
          'application/vnd.openxmlformats-officedocument.presentationml.template',
        ],
        ['ppa', 'application/vnd.ms-powerpoint'],
        ['ppam', 'application/vnd.ms-powerpoint.addin.macroEnabled.12'],
        ['ppd', 'application/vnd.cups-ppd'],
        ['ppm', 'image/x-portable-pixmap'],
        ['pps', 'application/vnd.ms-powerpoint'],
        ['ppsm', 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'],
        [
          'ppsx',
          'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
        ],
        ['ppt', 'application/powerpoint'],
        ['pptm', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12'],
        [
          'pptx',
          'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        ],
        ['pqa', 'application/vnd.palm'],
        ['prc', 'application/x-pilot'],
        ['pre', 'application/vnd.lotus-freelance'],
        ['prf', 'application/pics-rules'],
        ['provx', 'application/provenance+xml'],
        ['ps', 'application/postscript'],
        ['psb', 'application/vnd.3gpp.pic-bw-small'],
        ['psd', 'application/x-photoshop'],
        ['psf', 'application/x-font-linux-psf'],
        ['pskcxml', 'application/pskc+xml'],
        ['pti', 'image/prs.pti'],
        ['ptid', 'application/vnd.pvi.ptid1'],
        ['pub', 'application/x-mspublisher'],
        ['pvb', 'application/vnd.3gpp.pic-bw-var'],
        ['pwn', 'application/vnd.3m.post-it-notes'],
        ['pya', 'audio/vnd.ms-playready.media.pya'],
        ['pyv', 'video/vnd.ms-playready.media.pyv'],
        ['qam', 'application/vnd.epson.quickanime'],
        ['qbo', 'application/vnd.intu.qbo'],
        ['qfx', 'application/vnd.intu.qfx'],
        ['qps', 'application/vnd.publishare-delta-tree'],
        ['qt', 'video/quicktime'],
        ['qwd', 'application/vnd.quark.quarkxpress'],
        ['qwt', 'application/vnd.quark.quarkxpress'],
        ['qxb', 'application/vnd.quark.quarkxpress'],
        ['qxd', 'application/vnd.quark.quarkxpress'],
        ['qxl', 'application/vnd.quark.quarkxpress'],
        ['qxt', 'application/vnd.quark.quarkxpress'],
        ['ra', 'audio/x-realaudio'],
        ['ram', 'audio/x-pn-realaudio'],
        ['raml', 'application/raml+yaml'],
        ['rapd', 'application/route-apd+xml'],
        ['rar', 'application/x-rar'],
        ['ras', 'image/x-cmu-raster'],
        ['rcprofile', 'application/vnd.ipunplugged.rcprofile'],
        ['rdf', 'application/rdf+xml'],
        ['rdz', 'application/vnd.data-vision.rdz'],
        ['relo', 'application/p2p-overlay+xml'],
        ['rep', 'application/vnd.businessobjects'],
        ['res', 'application/x-dtbresource+xml'],
        ['rgb', 'image/x-rgb'],
        ['rif', 'application/reginfo+xml'],
        ['rip', 'audio/vnd.rip'],
        ['ris', 'application/x-research-info-systems'],
        ['rl', 'application/resource-lists+xml'],
        ['rlc', 'image/vnd.fujixerox.edmics-rlc'],
        ['rld', 'application/resource-lists-diff+xml'],
        ['rm', 'audio/x-pn-realaudio'],
        ['rmi', 'audio/midi'],
        ['rmp', 'audio/x-pn-realaudio-plugin'],
        ['rms', 'application/vnd.jcp.javame.midlet-rms'],
        ['rmvb', 'application/vnd.rn-realmedia-vbr'],
        ['rnc', 'application/relax-ng-compact-syntax'],
        ['rng', 'application/xml'],
        ['roa', 'application/rpki-roa'],
        ['roff', 'text/troff'],
        ['rp9', 'application/vnd.cloanto.rp9'],
        ['rpm', 'audio/x-pn-realaudio-plugin'],
        ['rpss', 'application/vnd.nokia.radio-presets'],
        ['rpst', 'application/vnd.nokia.radio-preset'],
        ['rq', 'application/sparql-query'],
        ['rs', 'application/rls-services+xml'],
        ['rsa', 'application/x-pkcs7'],
        ['rsat', 'application/atsc-rsat+xml'],
        ['rsd', 'application/rsd+xml'],
        ['rsheet', 'application/urc-ressheet+xml'],
        ['rss', 'application/rss+xml'],
        ['rtf', 'text/rtf'],
        ['rtx', 'text/richtext'],
        ['run', 'application/x-makeself'],
        ['rusd', 'application/route-usd+xml'],
        ['rv', 'video/vnd.rn-realvideo'],
        ['s', 'text/x-asm'],
        ['s3m', 'audio/s3m'],
        ['saf', 'application/vnd.yamaha.smaf-audio'],
        ['sass', 'text/x-sass'],
        ['sbml', 'application/sbml+xml'],
        ['sc', 'application/vnd.ibm.secure-container'],
        ['scd', 'application/x-msschedule'],
        ['scm', 'application/vnd.lotus-screencam'],
        ['scq', 'application/scvp-cv-request'],
        ['scs', 'application/scvp-cv-response'],
        ['scss', 'text/x-scss'],
        ['scurl', 'text/vnd.curl.scurl'],
        ['sda', 'application/vnd.stardivision.draw'],
        ['sdc', 'application/vnd.stardivision.calc'],
        ['sdd', 'application/vnd.stardivision.impress'],
        ['sdkd', 'application/vnd.solent.sdkm+xml'],
        ['sdkm', 'application/vnd.solent.sdkm+xml'],
        ['sdp', 'application/sdp'],
        ['sdw', 'application/vnd.stardivision.writer'],
        ['sea', 'application/octet-stream'],
        ['see', 'application/vnd.seemail'],
        ['seed', 'application/vnd.fdsn.seed'],
        ['sema', 'application/vnd.sema'],
        ['semd', 'application/vnd.semd'],
        ['semf', 'application/vnd.semf'],
        ['senmlx', 'application/senml+xml'],
        ['sensmlx', 'application/sensml+xml'],
        ['ser', 'application/java-serialized-object'],
        ['setpay', 'application/set-payment-initiation'],
        ['setreg', 'application/set-registration-initiation'],
        ['sfd-hdstx', 'application/vnd.hydrostatix.sof-data'],
        ['sfs', 'application/vnd.spotfire.sfs'],
        ['sfv', 'text/x-sfv'],
        ['sgi', 'image/sgi'],
        ['sgl', 'application/vnd.stardivision.writer-global'],
        ['sgm', 'text/sgml'],
        ['sgml', 'text/sgml'],
        ['sh', 'application/x-sh'],
        ['shar', 'application/x-shar'],
        ['shex', 'text/shex'],
        ['shf', 'application/shf+xml'],
        ['shtml', 'text/html'],
        ['sid', 'image/x-mrsid-image'],
        ['sieve', 'application/sieve'],
        ['sig', 'application/pgp-signature'],
        ['sil', 'audio/silk'],
        ['silo', 'model/mesh'],
        ['sis', 'application/vnd.symbian.install'],
        ['sisx', 'application/vnd.symbian.install'],
        ['sit', 'application/x-stuffit'],
        ['sitx', 'application/x-stuffitx'],
        ['siv', 'application/sieve'],
        ['skd', 'application/vnd.koan'],
        ['skm', 'application/vnd.koan'],
        ['skp', 'application/vnd.koan'],
        ['skt', 'application/vnd.koan'],
        ['sldm', 'application/vnd.ms-powerpoint.slide.macroenabled.12'],
        [
          'sldx',
          'application/vnd.openxmlformats-officedocument.presentationml.slide',
        ],
        ['slim', 'text/slim'],
        ['slm', 'text/slim'],
        ['sls', 'application/route-s-tsid+xml'],
        ['slt', 'application/vnd.epson.salt'],
        ['sm', 'application/vnd.stepmania.stepchart'],
        ['smf', 'application/vnd.stardivision.math'],
        ['smi', 'application/smil'],
        ['smil', 'application/smil'],
        ['smv', 'video/x-smv'],
        ['smzip', 'application/vnd.stepmania.package'],
        ['snd', 'audio/basic'],
        ['snf', 'application/x-font-snf'],
        ['so', 'application/octet-stream'],
        ['spc', 'application/x-pkcs7-certificates'],
        ['spdx', 'text/spdx'],
        ['spf', 'application/vnd.yamaha.smaf-phrase'],
        ['spl', 'application/x-futuresplash'],
        ['spot', 'text/vnd.in3d.spot'],
        ['spp', 'application/scvp-vp-response'],
        ['spq', 'application/scvp-vp-request'],
        ['spx', 'audio/ogg'],
        ['sql', 'application/x-sql'],
        ['src', 'application/x-wais-source'],
        ['srt', 'application/x-subrip'],
        ['sru', 'application/sru+xml'],
        ['srx', 'application/sparql-results+xml'],
        ['ssdl', 'application/ssdl+xml'],
        ['sse', 'application/vnd.kodak-descriptor'],
        ['ssf', 'application/vnd.epson.ssf'],
        ['ssml', 'application/ssml+xml'],
        ['sst', 'application/octet-stream'],
        ['st', 'application/vnd.sailingtracker.track'],
        ['stc', 'application/vnd.sun.xml.calc.template'],
        ['std', 'application/vnd.sun.xml.draw.template'],
        ['stf', 'application/vnd.wt.stf'],
        ['sti', 'application/vnd.sun.xml.impress.template'],
        ['stk', 'application/hyperstudio'],
        ['stl', 'model/stl'],
        ['stpx', 'model/step+xml'],
        ['stpxz', 'model/step-xml+zip'],
        ['stpz', 'model/step+zip'],
        ['str', 'application/vnd.pg.format'],
        ['stw', 'application/vnd.sun.xml.writer.template'],
        ['styl', 'text/stylus'],
        ['stylus', 'text/stylus'],
        ['sub', 'text/vnd.dvb.subtitle'],
        ['sus', 'application/vnd.sus-calendar'],
        ['susp', 'application/vnd.sus-calendar'],
        ['sv4cpio', 'application/x-sv4cpio'],
        ['sv4crc', 'application/x-sv4crc'],
        ['svc', 'application/vnd.dvb.service'],
        ['svd', 'application/vnd.svd'],
        ['svg', 'image/svg+xml'],
        ['svgz', 'image/svg+xml'],
        ['swa', 'application/x-director'],
        ['swf', 'application/x-shockwave-flash'],
        ['swi', 'application/vnd.aristanetworks.swi'],
        ['swidtag', 'application/swid+xml'],
        ['sxc', 'application/vnd.sun.xml.calc'],
        ['sxd', 'application/vnd.sun.xml.draw'],
        ['sxg', 'application/vnd.sun.xml.writer.global'],
        ['sxi', 'application/vnd.sun.xml.impress'],
        ['sxm', 'application/vnd.sun.xml.math'],
        ['sxw', 'application/vnd.sun.xml.writer'],
        ['t', 'text/troff'],
        ['t3', 'application/x-t3vm-image'],
        ['t38', 'image/t38'],
        ['taglet', 'application/vnd.mynfc'],
        ['tao', 'application/vnd.tao.intent-module-archive'],
        ['tap', 'image/vnd.tencent.tap'],
        ['tar', 'application/x-tar'],
        ['tcap', 'application/vnd.3gpp2.tcap'],
        ['tcl', 'application/x-tcl'],
        ['td', 'application/urc-targetdesc+xml'],
        ['teacher', 'application/vnd.smart.teacher'],
        ['tei', 'application/tei+xml'],
        ['teicorpus', 'application/tei+xml'],
        ['tex', 'application/x-tex'],
        ['texi', 'application/x-texinfo'],
        ['texinfo', 'application/x-texinfo'],
        ['text', 'text/plain'],
        ['tfi', 'application/thraud+xml'],
        ['tfm', 'application/x-tex-tfm'],
        ['tfx', 'image/tiff-fx'],
        ['tga', 'image/x-tga'],
        ['tgz', 'application/x-tar'],
        ['thmx', 'application/vnd.ms-officetheme'],
        ['tif', 'image/tiff'],
        ['tiff', 'image/tiff'],
        ['tk', 'application/x-tcl'],
        ['tmo', 'application/vnd.tmobile-livetv'],
        ['toml', 'application/toml'],
        ['torrent', 'application/x-bittorrent'],
        ['tpl', 'application/vnd.groove-tool-template'],
        ['tpt', 'application/vnd.trid.tpt'],
        ['tr', 'text/troff'],
        ['tra', 'application/vnd.trueapp'],
        ['trig', 'application/trig'],
        ['trm', 'application/x-msterminal'],
        ['ts', 'video/mp2t'],
        ['tsd', 'application/timestamped-data'],
        ['tsv', 'text/tab-separated-values'],
        ['ttc', 'font/collection'],
        ['ttf', 'font/ttf'],
        ['ttl', 'text/turtle'],
        ['ttml', 'application/ttml+xml'],
        ['twd', 'application/vnd.simtech-mindmapper'],
        ['twds', 'application/vnd.simtech-mindmapper'],
        ['txd', 'application/vnd.genomatix.tuxedo'],
        ['txf', 'application/vnd.mobius.txf'],
        ['txt', 'text/plain'],
        ['u8dsn', 'message/global-delivery-status'],
        ['u8hdr', 'message/global-headers'],
        ['u8mdn', 'message/global-disposition-notification'],
        ['u8msg', 'message/global'],
        ['u32', 'application/x-authorware-bin'],
        ['ubj', 'application/ubjson'],
        ['udeb', 'application/x-debian-package'],
        ['ufd', 'application/vnd.ufdl'],
        ['ufdl', 'application/vnd.ufdl'],
        ['ulx', 'application/x-glulx'],
        ['umj', 'application/vnd.umajin'],
        ['unityweb', 'application/vnd.unity'],
        ['uoml', 'application/vnd.uoml+xml'],
        ['uri', 'text/uri-list'],
        ['uris', 'text/uri-list'],
        ['urls', 'text/uri-list'],
        ['usdz', 'model/vnd.usdz+zip'],
        ['ustar', 'application/x-ustar'],
        ['utz', 'application/vnd.uiq.theme'],
        ['uu', 'text/x-uuencode'],
        ['uva', 'audio/vnd.dece.audio'],
        ['uvd', 'application/vnd.dece.data'],
        ['uvf', 'application/vnd.dece.data'],
        ['uvg', 'image/vnd.dece.graphic'],
        ['uvh', 'video/vnd.dece.hd'],
        ['uvi', 'image/vnd.dece.graphic'],
        ['uvm', 'video/vnd.dece.mobile'],
        ['uvp', 'video/vnd.dece.pd'],
        ['uvs', 'video/vnd.dece.sd'],
        ['uvt', 'application/vnd.dece.ttml+xml'],
        ['uvu', 'video/vnd.uvvu.mp4'],
        ['uvv', 'video/vnd.dece.video'],
        ['uvva', 'audio/vnd.dece.audio'],
        ['uvvd', 'application/vnd.dece.data'],
        ['uvvf', 'application/vnd.dece.data'],
        ['uvvg', 'image/vnd.dece.graphic'],
        ['uvvh', 'video/vnd.dece.hd'],
        ['uvvi', 'image/vnd.dece.graphic'],
        ['uvvm', 'video/vnd.dece.mobile'],
        ['uvvp', 'video/vnd.dece.pd'],
        ['uvvs', 'video/vnd.dece.sd'],
        ['uvvt', 'application/vnd.dece.ttml+xml'],
        ['uvvu', 'video/vnd.uvvu.mp4'],
        ['uvvv', 'video/vnd.dece.video'],
        ['uvvx', 'application/vnd.dece.unspecified'],
        ['uvvz', 'application/vnd.dece.zip'],
        ['uvx', 'application/vnd.dece.unspecified'],
        ['uvz', 'application/vnd.dece.zip'],
        ['vbox', 'application/x-virtualbox-vbox'],
        ['vbox-extpack', 'application/x-virtualbox-vbox-extpack'],
        ['vcard', 'text/vcard'],
        ['vcd', 'application/x-cdlink'],
        ['vcf', 'text/x-vcard'],
        ['vcg', 'application/vnd.groove-vcard'],
        ['vcs', 'text/x-vcalendar'],
        ['vcx', 'application/vnd.vcx'],
        ['vdi', 'application/x-virtualbox-vdi'],
        ['vds', 'model/vnd.sap.vds'],
        ['vhd', 'application/x-virtualbox-vhd'],
        ['vis', 'application/vnd.visionary'],
        ['viv', 'video/vnd.vivo'],
        ['vlc', 'application/videolan'],
        ['vmdk', 'application/x-virtualbox-vmdk'],
        ['vob', 'video/x-ms-vob'],
        ['vor', 'application/vnd.stardivision.writer'],
        ['vox', 'application/x-authorware-bin'],
        ['vrml', 'model/vrml'],
        ['vsd', 'application/vnd.visio'],
        ['vsf', 'application/vnd.vsf'],
        ['vss', 'application/vnd.visio'],
        ['vst', 'application/vnd.visio'],
        ['vsw', 'application/vnd.visio'],
        ['vtf', 'image/vnd.valve.source.texture'],
        ['vtt', 'text/vtt'],
        ['vtu', 'model/vnd.vtu'],
        ['vxml', 'application/voicexml+xml'],
        ['w3d', 'application/x-director'],
        ['wad', 'application/x-doom'],
        ['wadl', 'application/vnd.sun.wadl+xml'],
        ['war', 'application/java-archive'],
        ['wasm', 'application/wasm'],
        ['wav', 'audio/x-wav'],
        ['wax', 'audio/x-ms-wax'],
        ['wbmp', 'image/vnd.wap.wbmp'],
        ['wbs', 'application/vnd.criticaltools.wbs+xml'],
        ['wbxml', 'application/wbxml'],
        ['wcm', 'application/vnd.ms-works'],
        ['wdb', 'application/vnd.ms-works'],
        ['wdp', 'image/vnd.ms-photo'],
        ['weba', 'audio/webm'],
        ['webapp', 'application/x-web-app-manifest+json'],
        ['webm', 'video/webm'],
        ['webmanifest', 'application/manifest+json'],
        ['webp', 'image/webp'],
        ['wg', 'application/vnd.pmi.widget'],
        ['wgt', 'application/widget'],
        ['wks', 'application/vnd.ms-works'],
        ['wm', 'video/x-ms-wm'],
        ['wma', 'audio/x-ms-wma'],
        ['wmd', 'application/x-ms-wmd'],
        ['wmf', 'image/wmf'],
        ['wml', 'text/vnd.wap.wml'],
        ['wmlc', 'application/wmlc'],
        ['wmls', 'text/vnd.wap.wmlscript'],
        ['wmlsc', 'application/vnd.wap.wmlscriptc'],
        ['wmv', 'video/x-ms-wmv'],
        ['wmx', 'video/x-ms-wmx'],
        ['wmz', 'application/x-msmetafile'],
        ['woff', 'font/woff'],
        ['woff2', 'font/woff2'],
        ['word', 'application/msword'],
        ['wpd', 'application/vnd.wordperfect'],
        ['wpl', 'application/vnd.ms-wpl'],
        ['wps', 'application/vnd.ms-works'],
        ['wqd', 'application/vnd.wqd'],
        ['wri', 'application/x-mswrite'],
        ['wrl', 'model/vrml'],
        ['wsc', 'message/vnd.wfa.wsc'],
        ['wsdl', 'application/wsdl+xml'],
        ['wspolicy', 'application/wspolicy+xml'],
        ['wtb', 'application/vnd.webturbo'],
        ['wvx', 'video/x-ms-wvx'],
        ['x3d', 'model/x3d+xml'],
        ['x3db', 'model/x3d+fastinfoset'],
        ['x3dbz', 'model/x3d+binary'],
        ['x3dv', 'model/x3d-vrml'],
        ['x3dvz', 'model/x3d+vrml'],
        ['x3dz', 'model/x3d+xml'],
        ['x32', 'application/x-authorware-bin'],
        ['x_b', 'model/vnd.parasolid.transmit.binary'],
        ['x_t', 'model/vnd.parasolid.transmit.text'],
        ['xaml', 'application/xaml+xml'],
        ['xap', 'application/x-silverlight-app'],
        ['xar', 'application/vnd.xara'],
        ['xav', 'application/xcap-att+xml'],
        ['xbap', 'application/x-ms-xbap'],
        ['xbd', 'application/vnd.fujixerox.docuworks.binder'],
        ['xbm', 'image/x-xbitmap'],
        ['xca', 'application/xcap-caps+xml'],
        ['xcs', 'application/calendar+xml'],
        ['xdf', 'application/xcap-diff+xml'],
        ['xdm', 'application/vnd.syncml.dm+xml'],
        ['xdp', 'application/vnd.adobe.xdp+xml'],
        ['xdssc', 'application/dssc+xml'],
        ['xdw', 'application/vnd.fujixerox.docuworks'],
        ['xel', 'application/xcap-el+xml'],
        ['xenc', 'application/xenc+xml'],
        ['xer', 'application/patch-ops-error+xml'],
        ['xfdf', 'application/vnd.adobe.xfdf'],
        ['xfdl', 'application/vnd.xfdl'],
        ['xht', 'application/xhtml+xml'],
        ['xhtml', 'application/xhtml+xml'],
        ['xhvml', 'application/xv+xml'],
        ['xif', 'image/vnd.xiff'],
        ['xl', 'application/excel'],
        ['xla', 'application/vnd.ms-excel'],
        ['xlam', 'application/vnd.ms-excel.addin.macroEnabled.12'],
        ['xlc', 'application/vnd.ms-excel'],
        ['xlf', 'application/xliff+xml'],
        ['xlm', 'application/vnd.ms-excel'],
        ['xls', 'application/vnd.ms-excel'],
        ['xlsb', 'application/vnd.ms-excel.sheet.binary.macroEnabled.12'],
        ['xlsm', 'application/vnd.ms-excel.sheet.macroEnabled.12'],
        [
          'xlsx',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ],
        ['xlt', 'application/vnd.ms-excel'],
        ['xltm', 'application/vnd.ms-excel.template.macroEnabled.12'],
        [
          'xltx',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
        ],
        ['xlw', 'application/vnd.ms-excel'],
        ['xm', 'audio/xm'],
        ['xml', 'application/xml'],
        ['xns', 'application/xcap-ns+xml'],
        ['xo', 'application/vnd.olpc-sugar'],
        ['xop', 'application/xop+xml'],
        ['xpi', 'application/x-xpinstall'],
        ['xpl', 'application/xproc+xml'],
        ['xpm', 'image/x-xpixmap'],
        ['xpr', 'application/vnd.is-xpr'],
        ['xps', 'application/vnd.ms-xpsdocument'],
        ['xpw', 'application/vnd.intercon.formnet'],
        ['xpx', 'application/vnd.intercon.formnet'],
        ['xsd', 'application/xml'],
        ['xsl', 'application/xml'],
        ['xslt', 'application/xslt+xml'],
        ['xsm', 'application/vnd.syncml+xml'],
        ['xspf', 'application/xspf+xml'],
        ['xul', 'application/vnd.mozilla.xul+xml'],
        ['xvm', 'application/xv+xml'],
        ['xvml', 'application/xv+xml'],
        ['xwd', 'image/x-xwindowdump'],
        ['xyz', 'chemical/x-xyz'],
        ['xz', 'application/x-xz'],
        ['yaml', 'text/yaml'],
        ['yang', 'application/yang'],
        ['yin', 'application/yin+xml'],
        ['yml', 'text/yaml'],
        ['ymp', 'text/x-suse-ymp'],
        ['z', 'application/x-compress'],
        ['z1', 'application/x-zmachine'],
        ['z2', 'application/x-zmachine'],
        ['z3', 'application/x-zmachine'],
        ['z4', 'application/x-zmachine'],
        ['z5', 'application/x-zmachine'],
        ['z6', 'application/x-zmachine'],
        ['z7', 'application/x-zmachine'],
        ['z8', 'application/x-zmachine'],
        ['zaz', 'application/vnd.zzazz.deck+xml'],
        ['zip', 'application/zip'],
        ['zir', 'application/vnd.zul'],
        ['zirz', 'application/vnd.zul'],
        ['zmm', 'application/vnd.handheld-entertainment+xml'],
        ['zsh', 'text/x-scriptzsh'],
      ]);
      function r(i, a, t) {
        const e = (function (i) {
            const { name: a } = i;
            if (a && -1 !== a.lastIndexOf('.') && !i.type) {
              const t = a.split('.').pop().toLowerCase(),
                e = l.get(t);
              e &&
                Object.defineProperty(i, 'type', {
                  value: e,
                  writable: !1,
                  configurable: !1,
                  enumerable: !0,
                });
            }
            return i;
          })(i),
          { webkitRelativePath: n } = i,
          o =
            'string' == typeof a
              ? a
              : 'string' == typeof n && n.length > 0
                ? n
                : `./${i.name}`;
        return (
          'string' != typeof e.path && c(e, 'path', o),
          void 0 !== t &&
            Object.defineProperty(e, 'handle', {
              value: t,
              writable: !1,
              configurable: !1,
              enumerable: !0,
            }),
          c(e, 'relativePath', o),
          e
        );
      }
      function c(i, a, t) {
        Object.defineProperty(i, a, {
          value: t,
          writable: !1,
          configurable: !1,
          enumerable: !0,
        });
      }
      const s = ['.DS_Store', 'Thumbs.db'];
      function d(i) {
        return 'object' == typeof i && null !== i;
      }
      function m(i) {
        return i.filter((i) => -1 === s.indexOf(i.name));
      }
      function u(i) {
        if (null === i) return [];
        const a = [];
        for (let t = 0; t < i.length; t++) {
          const e = i[t];
          a.push(e);
        }
        return a;
      }
      function v(i) {
        if ('function' != typeof i.webkitGetAsEntry) return x(i);
        const a = i.webkitGetAsEntry();
        return a && a.isDirectory ? h(a) : x(i, a);
      }
      function f(i) {
        return i.reduce(
          (i, a) => [...i, ...(Array.isArray(a) ? f(a) : [a])],
          [],
        );
      }
      function x(i, a) {
        return (0, p.mG)(this, void 0, void 0, function* () {
          var t;
          if (
            globalThis.isSecureContext &&
            'function' == typeof i.getAsFileSystemHandle
          ) {
            const a = yield i.getAsFileSystemHandle();
            if (null === a) throw new Error(`${i} is not a File`);
            if (void 0 !== a) {
              const i = yield a.getFile();
              return (i.handle = a), r(i);
            }
          }
          const e = i.getAsFile();
          if (!e) throw new Error(`${i} is not a File`);
          return r(
            e,
            null !== (t = null == a ? void 0 : a.fullPath) && void 0 !== t
              ? t
              : void 0,
          );
        });
      }
      function g(i) {
        return (0, p.mG)(this, void 0, void 0, function* () {
          return i.isDirectory
            ? h(i)
            : (function (i) {
                return (0, p.mG)(this, void 0, void 0, function* () {
                  return new Promise((a, t) => {
                    i.file(
                      (t) => {
                        const e = r(t, i.fullPath);
                        a(e);
                      },
                      (i) => {
                        t(i);
                      },
                    );
                  });
                });
              })(i);
        });
      }
      function h(i) {
        const a = i.createReader();
        return new Promise((i, t) => {
          const e = [];
          !(function n() {
            a.readEntries(
              (a) =>
                (0, p.mG)(this, void 0, void 0, function* () {
                  if (a.length) {
                    const i = Promise.all(a.map(g));
                    e.push(i), n();
                  } else
                    try {
                      const a = yield Promise.all(e);
                      i(a);
                    } catch (i) {
                      t(i);
                    }
                }),
              (i) => {
                t(i);
              },
            );
          })();
        });
      }
      var b = t(58363);
      function w(i) {
        return (
          (function (i) {
            if (Array.isArray(i)) return D(i);
          })(i) ||
          (function (i) {
            if (
              ('undefined' != typeof Symbol && null != i[Symbol.iterator]) ||
              null != i['@@iterator']
            )
              return Array.from(i);
          })(i) ||
          E(i) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function y(i, a) {
        var t = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(i);
          a &&
            (e = e.filter(function (a) {
              return Object.getOwnPropertyDescriptor(i, a).enumerable;
            })),
            t.push.apply(t, e);
        }
        return t;
      }
      function k(i) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? y(Object(t), !0).forEach(function (a) {
                j(i, a, t[a]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t))
              : y(Object(t)).forEach(function (a) {
                  Object.defineProperty(
                    i,
                    a,
                    Object.getOwnPropertyDescriptor(t, a),
                  );
                });
        }
        return i;
      }
      function j(i, a, t) {
        return (
          a in i
            ? Object.defineProperty(i, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (i[a] = t),
          i
        );
      }
      function z(i, a) {
        return (
          (function (i) {
            if (Array.isArray(i)) return i;
          })(i) ||
          (function (i, a) {
            var t =
              null == i
                ? null
                : ('undefined' != typeof Symbol && i[Symbol.iterator]) ||
                  i['@@iterator'];
            if (null == t) return;
            var e,
              n,
              o = [],
              p = !0,
              l = !1;
            try {
              for (
                t = t.call(i);
                !(p = (e = t.next()).done) &&
                (o.push(e.value), !a || o.length !== a);
                p = !0
              );
            } catch (i) {
              (l = !0), (n = i);
            } finally {
              try {
                p || null == t.return || t.return();
              } finally {
                if (l) throw n;
              }
            }
            return o;
          })(i, a) ||
          E(i, a) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function E(i, a) {
        if (i) {
          if ('string' == typeof i) return D(i, a);
          var t = Object.prototype.toString.call(i).slice(8, -1);
          return (
            'Object' === t && i.constructor && (t = i.constructor.name),
            'Map' === t || 'Set' === t
              ? Array.from(i)
              : 'Arguments' === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                ? D(i, a)
                : void 0
          );
        }
      }
      function D(i, a) {
        (null == a || a > i.length) && (a = i.length);
        for (var t = 0, e = new Array(a); t < a; t++) e[t] = i[t];
        return e;
      }
      var S = 'function' == typeof b.Z ? b.Z : b.Z.default,
        O = 'file-invalid-type',
        C = 'file-too-large',
        P = 'file-too-small',
        A = 'too-many-files',
        R = function () {
          var i = (
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ''
            ).split(','),
            a = i.length > 1 ? 'one of '.concat(i.join(', ')) : i[0];
          return { code: O, message: 'File type must be '.concat(a) };
        },
        T = function (i) {
          return {
            code: C,
            message: 'File is larger than '
              .concat(i, ' ')
              .concat(1 === i ? 'byte' : 'bytes'),
          };
        },
        F = function (i) {
          return {
            code: P,
            message: 'File is smaller than '
              .concat(i, ' ')
              .concat(1 === i ? 'byte' : 'bytes'),
          };
        },
        q = { code: A, message: 'Too many files' };
      function _(i, a) {
        var t = 'application/x-moz-file' === i.type || S(i, a);
        return [t, t ? null : R(a)];
      }
      function N(i, a, t) {
        if (L(i.size))
          if (L(a) && L(t)) {
            if (i.size > t) return [!1, T(t)];
            if (i.size < a) return [!1, F(a)];
          } else {
            if (L(a) && i.size < a) return [!1, F(a)];
            if (L(t) && i.size > t) return [!1, T(t)];
          }
        return [!0, null];
      }
      function L(i) {
        return null != i;
      }
      function M(i) {
        return 'function' == typeof i.isPropagationStopped
          ? i.isPropagationStopped()
          : void 0 !== i.cancelBubble && i.cancelBubble;
      }
      function I(i) {
        return i.dataTransfer
          ? Array.prototype.some.call(i.dataTransfer.types, function (i) {
              return 'Files' === i || 'application/x-moz-file' === i;
            })
          : !!i.target && !!i.target.files;
      }
      function W(i) {
        i.preventDefault();
      }
      function H() {
        for (var i = arguments.length, a = new Array(i), t = 0; t < i; t++)
          a[t] = arguments[t];
        return function (i) {
          for (
            var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            e[n - 1] = arguments[n];
          return a.some(function (a) {
            return !M(i) && a && a.apply(void 0, [i].concat(e)), M(i);
          });
        };
      }
      function U(i) {
        return (
          'audio/*' === i ||
          'video/*' === i ||
          'image/*' === i ||
          'text/*' === i ||
          'application/*' === i ||
          /\w+\/[-+.\w]+/g.test(i)
        );
      }
      function B(i) {
        return /^.*\.[\w]+$/.test(i);
      }
      var $ = ['children'],
        V = ['open'],
        Y = [
          'refKey',
          'role',
          'onKeyDown',
          'onFocus',
          'onBlur',
          'onClick',
          'onDragEnter',
          'onDragOver',
          'onDragLeave',
          'onDrop',
        ],
        X = ['refKey', 'onChange', 'onClick'];
      function Z(i) {
        return (
          (function (i) {
            if (Array.isArray(i)) return J(i);
          })(i) ||
          (function (i) {
            if (
              ('undefined' != typeof Symbol && null != i[Symbol.iterator]) ||
              null != i['@@iterator']
            )
              return Array.from(i);
          })(i) ||
          G(i) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function K(i, a) {
        return (
          (function (i) {
            if (Array.isArray(i)) return i;
          })(i) ||
          (function (i, a) {
            var t =
              null == i
                ? null
                : ('undefined' != typeof Symbol && i[Symbol.iterator]) ||
                  i['@@iterator'];
            if (null == t) return;
            var e,
              n,
              o = [],
              p = !0,
              l = !1;
            try {
              for (
                t = t.call(i);
                !(p = (e = t.next()).done) &&
                (o.push(e.value), !a || o.length !== a);
                p = !0
              );
            } catch (i) {
              (l = !0), (n = i);
            } finally {
              try {
                p || null == t.return || t.return();
              } finally {
                if (l) throw n;
              }
            }
            return o;
          })(i, a) ||
          G(i, a) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function G(i, a) {
        if (i) {
          if ('string' == typeof i) return J(i, a);
          var t = Object.prototype.toString.call(i).slice(8, -1);
          return (
            'Object' === t && i.constructor && (t = i.constructor.name),
            'Map' === t || 'Set' === t
              ? Array.from(i)
              : 'Arguments' === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                ? J(i, a)
                : void 0
          );
        }
      }
      function J(i, a) {
        (null == a || a > i.length) && (a = i.length);
        for (var t = 0, e = new Array(a); t < a; t++) e[t] = i[t];
        return e;
      }
      function Q(i, a) {
        var t = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(i);
          a &&
            (e = e.filter(function (a) {
              return Object.getOwnPropertyDescriptor(i, a).enumerable;
            })),
            t.push.apply(t, e);
        }
        return t;
      }
      function ii(i) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? Q(Object(t), !0).forEach(function (a) {
                ai(i, a, t[a]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t))
              : Q(Object(t)).forEach(function (a) {
                  Object.defineProperty(
                    i,
                    a,
                    Object.getOwnPropertyDescriptor(t, a),
                  );
                });
        }
        return i;
      }
      function ai(i, a, t) {
        return (
          a in i
            ? Object.defineProperty(i, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (i[a] = t),
          i
        );
      }
      function ti(i, a) {
        if (null == i) return {};
        var t,
          e,
          n = (function (i, a) {
            if (null == i) return {};
            var t,
              e,
              n = {},
              o = Object.keys(i);
            for (e = 0; e < o.length; e++)
              (t = o[e]), a.indexOf(t) >= 0 || (n[t] = i[t]);
            return n;
          })(i, a);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(i);
          for (e = 0; e < o.length; e++)
            (t = o[e]),
              a.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(i, t) &&
                  (n[t] = i[t]));
        }
        return n;
      }
      var ei = (0, e.forwardRef)(function (i, a) {
        var t = i.children,
          n = (function () {
            var i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              a = ii(ii({}, ni), i),
              t = a.accept,
              n = a.disabled,
              o = a.getFilesFromEvent,
              p = a.maxSize,
              l = a.minSize,
              r = a.multiple,
              c = a.maxFiles,
              s = a.onDragEnter,
              d = a.onDragLeave,
              m = a.onDragOver,
              u = a.onDrop,
              v = a.onDropAccepted,
              f = a.onDropRejected,
              x = a.onFileDialogCancel,
              g = a.onFileDialogOpen,
              h = a.useFsAccessApi,
              b = a.autoFocus,
              y = a.preventDropOnDocument,
              E = a.noClick,
              D = a.noKeyboard,
              S = a.noDrag,
              O = a.noDragEventsBubbling,
              C = a.onError,
              P = a.validator,
              A = (0, e.useMemo)(
                function () {
                  return (function (i) {
                    if (L(i))
                      return Object.entries(i)
                        .reduce(function (i, a) {
                          var t = z(a, 2),
                            e = t[0],
                            n = t[1];
                          return [].concat(w(i), [e], w(n));
                        }, [])
                        .filter(function (i) {
                          return U(i) || B(i);
                        })
                        .join(',');
                  })(t);
                },
                [t],
              ),
              R = (0, e.useMemo)(
                function () {
                  return (function (i) {
                    return L(i)
                      ? [
                          {
                            description: 'Files',
                            accept: Object.entries(i)
                              .filter(function (i) {
                                var a = z(i, 2),
                                  t = a[0],
                                  e = a[1],
                                  n = !0;
                                return (
                                  U(t) ||
                                    (console.warn(
                                      'Skipped "'.concat(
                                        t,
                                        '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.',
                                      ),
                                    ),
                                    (n = !1)),
                                  (Array.isArray(e) && e.every(B)) ||
                                    (console.warn(
                                      'Skipped "'.concat(
                                        t,
                                        '" because an invalid file extension was provided.',
                                      ),
                                    ),
                                    (n = !1)),
                                  n
                                );
                              })
                              .reduce(function (i, a) {
                                var t = z(a, 2),
                                  e = t[0],
                                  n = t[1];
                                return k(k({}, i), {}, j({}, e, n));
                              }, {}),
                          },
                        ]
                      : i;
                  })(t);
                },
                [t],
              ),
              T = (0, e.useMemo)(
                function () {
                  return 'function' == typeof g ? g : ri;
                },
                [g],
              ),
              F = (0, e.useMemo)(
                function () {
                  return 'function' == typeof x ? x : ri;
                },
                [x],
              ),
              $ = (0, e.useRef)(null),
              V = (0, e.useRef)(null),
              G = K((0, e.useReducer)(li, pi), 2),
              J = G[0],
              Q = G[1],
              ei = J.isFocused,
              oi = J.isFileDialogActive,
              ci = (0, e.useRef)(
                'undefined' != typeof window &&
                  window.isSecureContext &&
                  h &&
                  'showOpenFilePicker' in window,
              ),
              si = function () {
                !ci.current &&
                  oi &&
                  setTimeout(function () {
                    V.current &&
                      (V.current.files.length ||
                        (Q({ type: 'closeDialog' }), F()));
                  }, 300);
              };
            (0, e.useEffect)(
              function () {
                return (
                  window.addEventListener('focus', si, !1),
                  function () {
                    window.removeEventListener('focus', si, !1);
                  }
                );
              },
              [V, oi, F, ci],
            );
            var di = (0, e.useRef)([]),
              mi = function (i) {
                ($.current && $.current.contains(i.target)) ||
                  (i.preventDefault(), (di.current = []));
              };
            (0, e.useEffect)(
              function () {
                return (
                  y &&
                    (document.addEventListener('dragover', W, !1),
                    document.addEventListener('drop', mi, !1)),
                  function () {
                    y &&
                      (document.removeEventListener('dragover', W),
                      document.removeEventListener('drop', mi));
                  }
                );
              },
              [$, y],
            ),
              (0, e.useEffect)(
                function () {
                  return (
                    !n && b && $.current && $.current.focus(), function () {}
                  );
                },
                [$, b, n],
              );
            var ui = (0, e.useCallback)(
                function (i) {
                  C ? C(i) : console.error(i);
                },
                [C],
              ),
              vi = (0, e.useCallback)(
                function (i) {
                  i.preventDefault(),
                    i.persist(),
                    Si(i),
                    (di.current = [].concat(Z(di.current), [i.target])),
                    I(i) &&
                      Promise.resolve(o(i))
                        .then(function (a) {
                          if (!M(i) || O) {
                            var t = a.length,
                              e =
                                t > 0 &&
                                (function (i) {
                                  var a = i.files,
                                    t = i.accept,
                                    e = i.minSize,
                                    n = i.maxSize,
                                    o = i.multiple,
                                    p = i.maxFiles,
                                    l = i.validator;
                                  return (
                                    !(
                                      (!o && a.length > 1) ||
                                      (o && p >= 1 && a.length > p)
                                    ) &&
                                    a.every(function (i) {
                                      var a = z(_(i, t), 1)[0],
                                        o = z(N(i, e, n), 1)[0],
                                        p = l ? l(i) : null;
                                      return a && o && !p;
                                    })
                                  );
                                })({
                                  files: a,
                                  accept: A,
                                  minSize: l,
                                  maxSize: p,
                                  multiple: r,
                                  maxFiles: c,
                                  validator: P,
                                });
                            Q({
                              isDragAccept: e,
                              isDragReject: t > 0 && !e,
                              isDragActive: !0,
                              type: 'setDraggedFiles',
                            }),
                              s && s(i);
                          }
                        })
                        .catch(function (i) {
                          return ui(i);
                        });
                },
                [o, s, ui, O, A, l, p, r, c, P],
              ),
              fi = (0, e.useCallback)(
                function (i) {
                  i.preventDefault(), i.persist(), Si(i);
                  var a = I(i);
                  if (a && i.dataTransfer)
                    try {
                      i.dataTransfer.dropEffect = 'copy';
                    } catch (i) {}
                  return a && m && m(i), !1;
                },
                [m, O],
              ),
              xi = (0, e.useCallback)(
                function (i) {
                  i.preventDefault(), i.persist(), Si(i);
                  var a = di.current.filter(function (i) {
                      return $.current && $.current.contains(i);
                    }),
                    t = a.indexOf(i.target);
                  -1 !== t && a.splice(t, 1),
                    (di.current = a),
                    a.length > 0 ||
                      (Q({
                        type: 'setDraggedFiles',
                        isDragActive: !1,
                        isDragAccept: !1,
                        isDragReject: !1,
                      }),
                      I(i) && d && d(i));
                },
                [$, d, O],
              ),
              gi = (0, e.useCallback)(
                function (i, a) {
                  var t = [],
                    e = [];
                  i.forEach(function (i) {
                    var a = K(_(i, A), 2),
                      n = a[0],
                      o = a[1],
                      r = K(N(i, l, p), 2),
                      c = r[0],
                      s = r[1],
                      d = P ? P(i) : null;
                    if (n && c && !d) t.push(i);
                    else {
                      var m = [o, s];
                      d && (m = m.concat(d)),
                        e.push({
                          file: i,
                          errors: m.filter(function (i) {
                            return i;
                          }),
                        });
                    }
                  }),
                    ((!r && t.length > 1) || (r && c >= 1 && t.length > c)) &&
                      (t.forEach(function (i) {
                        e.push({ file: i, errors: [q] });
                      }),
                      t.splice(0)),
                    Q({
                      acceptedFiles: t,
                      fileRejections: e,
                      isDragReject: e.length > 0,
                      type: 'setFiles',
                    }),
                    u && u(t, e, a),
                    e.length > 0 && f && f(e, a),
                    t.length > 0 && v && v(t, a);
                },
                [Q, r, A, l, p, c, u, v, f, P],
              ),
              hi = (0, e.useCallback)(
                function (i) {
                  i.preventDefault(),
                    i.persist(),
                    Si(i),
                    (di.current = []),
                    I(i) &&
                      Promise.resolve(o(i))
                        .then(function (a) {
                          (M(i) && !O) || gi(a, i);
                        })
                        .catch(function (i) {
                          return ui(i);
                        }),
                    Q({ type: 'reset' });
                },
                [o, gi, ui, O],
              ),
              bi = (0, e.useCallback)(
                function () {
                  if (ci.current) {
                    Q({ type: 'openDialog' }), T();
                    var i = { multiple: r, types: R };
                    window
                      .showOpenFilePicker(i)
                      .then(function (i) {
                        return o(i);
                      })
                      .then(function (i) {
                        gi(i, null), Q({ type: 'closeDialog' });
                      })
                      .catch(function (i) {
                        var a;
                        (a = i) instanceof DOMException &&
                        ('AbortError' === a.name || a.code === a.ABORT_ERR)
                          ? (F(i), Q({ type: 'closeDialog' }))
                          : !(function (i) {
                                return (
                                  i instanceof DOMException &&
                                  ('SecurityError' === i.name ||
                                    i.code === i.SECURITY_ERR)
                                );
                              })(i)
                            ? ui(i)
                            : ((ci.current = !1),
                              V.current
                                ? ((V.current.value = null), V.current.click())
                                : ui(
                                    new Error(
                                      'Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.',
                                    ),
                                  ));
                      });
                  } else
                    V.current &&
                      (Q({ type: 'openDialog' }),
                      T(),
                      (V.current.value = null),
                      V.current.click());
                },
                [Q, T, F, h, gi, ui, R, r],
              ),
              wi = (0, e.useCallback)(
                function (i) {
                  $.current &&
                    $.current.isEqualNode(i.target) &&
                    ((' ' !== i.key &&
                      'Enter' !== i.key &&
                      32 !== i.keyCode &&
                      13 !== i.keyCode) ||
                      (i.preventDefault(), bi()));
                },
                [$, bi],
              ),
              yi = (0, e.useCallback)(function () {
                Q({ type: 'focus' });
              }, []),
              ki = (0, e.useCallback)(function () {
                Q({ type: 'blur' });
              }, []),
              ji = (0, e.useCallback)(
                function () {
                  E ||
                    (!(function () {
                      var i =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : window.navigator.userAgent;
                      return (
                        (function (i) {
                          return (
                            -1 !== i.indexOf('MSIE') ||
                            -1 !== i.indexOf('Trident/')
                          );
                        })(i) ||
                        (function (i) {
                          return -1 !== i.indexOf('Edge/');
                        })(i)
                      );
                    })()
                      ? bi()
                      : setTimeout(bi, 0));
                },
                [E, bi],
              ),
              zi = function (i) {
                return n ? null : i;
              },
              Ei = function (i) {
                return D ? null : zi(i);
              },
              Di = function (i) {
                return S ? null : zi(i);
              },
              Si = function (i) {
                O && i.stopPropagation();
              },
              Oi = (0, e.useMemo)(
                function () {
                  return function () {
                    var i =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      a = i.refKey,
                      t = void 0 === a ? 'ref' : a,
                      e = i.role,
                      o = i.onKeyDown,
                      p = i.onFocus,
                      l = i.onBlur,
                      r = i.onClick,
                      c = i.onDragEnter,
                      s = i.onDragOver,
                      d = i.onDragLeave,
                      m = i.onDrop,
                      u = ti(i, Y);
                    return ii(
                      ii(
                        ai(
                          {
                            onKeyDown: Ei(H(o, wi)),
                            onFocus: Ei(H(p, yi)),
                            onBlur: Ei(H(l, ki)),
                            onClick: zi(H(r, ji)),
                            onDragEnter: Di(H(c, vi)),
                            onDragOver: Di(H(s, fi)),
                            onDragLeave: Di(H(d, xi)),
                            onDrop: Di(H(m, hi)),
                            role:
                              'string' == typeof e && '' !== e
                                ? e
                                : 'presentation',
                          },
                          t,
                          $,
                        ),
                        n || D ? {} : { tabIndex: 0 },
                      ),
                      u,
                    );
                  };
                },
                [$, wi, yi, ki, ji, vi, fi, xi, hi, D, S, n],
              ),
              Ci = (0, e.useCallback)(function (i) {
                i.stopPropagation();
              }, []),
              Pi = (0, e.useMemo)(
                function () {
                  return function () {
                    var i =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      a = i.refKey,
                      t = void 0 === a ? 'ref' : a,
                      e = i.onChange,
                      n = i.onClick,
                      o = ti(i, X);
                    return ii(
                      ii(
                        {},
                        ai(
                          {
                            accept: A,
                            multiple: r,
                            type: 'file',
                            style: {
                              border: 0,
                              clip: 'rect(0, 0, 0, 0)',
                              clipPath: 'inset(50%)',
                              height: '1px',
                              margin: '0 -1px -1px 0',
                              overflow: 'hidden',
                              padding: 0,
                              position: 'absolute',
                              width: '1px',
                              whiteSpace: 'nowrap',
                            },
                            onChange: zi(H(e, hi)),
                            onClick: zi(H(n, Ci)),
                            tabIndex: -1,
                          },
                          t,
                          V,
                        ),
                      ),
                      o,
                    );
                  };
                },
                [V, t, r, hi, n],
              );
            return ii(
              ii({}, J),
              {},
              {
                isFocused: ei && !n,
                getRootProps: Oi,
                getInputProps: Pi,
                rootRef: $,
                inputRef: V,
                open: zi(bi),
              },
            );
          })(ti(i, $)),
          o = n.open,
          p = ti(n, V);
        return (
          (0, e.useImperativeHandle)(
            a,
            function () {
              return { open: o };
            },
            [o],
          ),
          e.createElement(e.Fragment, null, t(ii(ii({}, p), {}, { open: o })))
        );
      });
      ei.displayName = 'Dropzone';
      var ni = {
        disabled: !1,
        getFilesFromEvent: function (i) {
          return (0, p.mG)(this, void 0, void 0, function* () {
            return d(i) && d(i.dataTransfer)
              ? (function (i, a) {
                  return (0, p.mG)(this, void 0, void 0, function* () {
                    if (i.items) {
                      const t = u(i.items).filter((i) => 'file' === i.kind);
                      if ('drop' !== a) return t;
                      return m(f(yield Promise.all(t.map(v))));
                    }
                    return m(u(i.files).map((i) => r(i)));
                  });
                })(i.dataTransfer, i.type)
              : (function (i) {
                    return d(i) && d(i.target);
                  })(i)
                ? (function (i) {
                    return u(i.target.files).map((i) => r(i));
                  })(i)
                : Array.isArray(i) &&
                    i.every(
                      (i) => 'getFile' in i && 'function' == typeof i.getFile,
                    )
                  ? (function (i) {
                      return (0, p.mG)(this, void 0, void 0, function* () {
                        return (yield Promise.all(
                          i.map((i) => i.getFile()),
                        )).map((i) => r(i));
                      });
                    })(i)
                  : [];
          });
        },
        maxSize: 1 / 0,
        minSize: 0,
        multiple: !0,
        maxFiles: 0,
        preventDropOnDocument: !0,
        noClick: !1,
        noKeyboard: !1,
        noDrag: !1,
        noDragEventsBubbling: !1,
        validator: null,
        useFsAccessApi: !1,
        autoFocus: !1,
      };
      (ei.defaultProps = ni),
        (ei.propTypes = {
          children: o().func,
          accept: o().objectOf(o().arrayOf(o().string)),
          multiple: o().bool,
          preventDropOnDocument: o().bool,
          noClick: o().bool,
          noKeyboard: o().bool,
          noDrag: o().bool,
          noDragEventsBubbling: o().bool,
          minSize: o().number,
          maxSize: o().number,
          maxFiles: o().number,
          disabled: o().bool,
          getFilesFromEvent: o().func,
          onFileDialogCancel: o().func,
          onFileDialogOpen: o().func,
          useFsAccessApi: o().bool,
          autoFocus: o().bool,
          onDragEnter: o().func,
          onDragLeave: o().func,
          onDragOver: o().func,
          onDrop: o().func,
          onDropAccepted: o().func,
          onDropRejected: o().func,
          onError: o().func,
          validator: o().func,
        });
      var oi = ei,
        pi = {
          isFocused: !1,
          isFileDialogActive: !1,
          isDragActive: !1,
          isDragAccept: !1,
          isDragReject: !1,
          acceptedFiles: [],
          fileRejections: [],
        };
      function li(i, a) {
        switch (a.type) {
          case 'focus':
            return ii(ii({}, i), {}, { isFocused: !0 });
          case 'blur':
            return ii(ii({}, i), {}, { isFocused: !1 });
          case 'openDialog':
            return ii(ii({}, pi), {}, { isFileDialogActive: !0 });
          case 'closeDialog':
            return ii(ii({}, i), {}, { isFileDialogActive: !1 });
          case 'setDraggedFiles':
            return ii(
              ii({}, i),
              {},
              {
                isDragActive: a.isDragActive,
                isDragAccept: a.isDragAccept,
                isDragReject: a.isDragReject,
              },
            );
          case 'setFiles':
            return ii(
              ii({}, i),
              {},
              {
                acceptedFiles: a.acceptedFiles,
                fileRejections: a.fileRejections,
                isDragReject: a.isDragReject,
              },
            );
          case 'reset':
            return ii({}, pi);
          default:
            return i;
        }
      }
      function ri() {}
    },
    44920: function (i, a, t) {
      t.d(a, {
        z$: function () {
          return C;
        },
        fC: function () {
          return O;
        },
      });
      var e = t(62435),
        n = t(25360);
      t(61254);
      function o(i, a) {
        if ('function' == typeof i) return i(a);
        null != i && (i.current = a);
      }
      function p(...i) {
        return (a) => {
          let t = !1;
          const e = i.map((i) => {
            const e = o(i, a);
            return t || 'function' != typeof e || (t = !0), e;
          });
          if (t)
            return () => {
              for (let a = 0; a < e.length; a++) {
                const t = e[a];
                'function' == typeof t ? t() : o(i[a], null);
              }
            };
        };
      }
      var l = t(86074),
        r = e.forwardRef((i, a) => {
          const { children: t, ...n } = i,
            o = e.Children.toArray(t),
            p = o.find(d);
          if (p) {
            const i = p.props.children,
              t = o.map((a) =>
                a === p
                  ? e.Children.count(i) > 1
                    ? e.Children.only(null)
                    : e.isValidElement(i)
                      ? i.props.children
                      : null
                  : a,
              );
            return (0, l.jsx)(c, {
              ...n,
              ref: a,
              children: e.isValidElement(i)
                ? e.cloneElement(i, void 0, t)
                : null,
            });
          }
          return (0, l.jsx)(c, { ...n, ref: a, children: t });
        });
      r.displayName = 'Slot';
      var c = e.forwardRef((i, a) => {
        const { children: t, ...n } = i;
        if (e.isValidElement(t)) {
          const i = (function (i) {
            let a = Object.getOwnPropertyDescriptor(i.props, 'ref')?.get,
              t = a && 'isReactWarning' in a && a.isReactWarning;
            if (t) return i.ref;
            if (
              ((a = Object.getOwnPropertyDescriptor(i, 'ref')?.get),
              (t = a && 'isReactWarning' in a && a.isReactWarning),
              t)
            )
              return i.props.ref;
            return i.props.ref || i.ref;
          })(t);
          return e.cloneElement(t, { ...m(n, t.props), ref: a ? p(a, i) : i });
        }
        return e.Children.count(t) > 1 ? e.Children.only(null) : null;
      });
      c.displayName = 'SlotClone';
      var s = ({ children: i }) => (0, l.jsx)(l.Fragment, { children: i });
      function d(i) {
        return e.isValidElement(i) && i.type === s;
      }
      function m(i, a) {
        const t = { ...a };
        for (const e in a) {
          const n = i[e],
            o = a[e];
          /^on[A-Z]/.test(e)
            ? n && o
              ? (t[e] = (...i) => {
                  o(...i), n(...i);
                })
              : n && (t[e] = n)
            : 'style' === e
              ? (t[e] = { ...n, ...o })
              : 'className' === e && (t[e] = [n, o].filter(Boolean).join(' '));
        }
        return { ...i, ...t };
      }
      var u = [
        'a',
        'button',
        'div',
        'form',
        'h2',
        'h3',
        'img',
        'input',
        'label',
        'li',
        'nav',
        'ol',
        'p',
        'span',
        'svg',
        'ul',
      ].reduce((i, a) => {
        const t = e.forwardRef((i, t) => {
          const { asChild: e, ...n } = i,
            o = e ? r : a;
          return (
            'undefined' != typeof window &&
              (window[Symbol.for('radix-ui')] = !0),
            (0, l.jsx)(o, { ...n, ref: t })
          );
        });
        return (t.displayName = `Primitive.${a}`), { ...i, [a]: t };
      }, {});
      var v = 'Progress',
        f = 100,
        [x, g] = (0, n.b)(v),
        [h, b] = x(v),
        w = e.forwardRef((i, a) => {
          const {
            __scopeProgress: t,
            value: e = null,
            max: n,
            getValueLabel: o = j,
            ...p
          } = i;
          (!n && 0 !== n) ||
            D(n) ||
            console.error(
              `Invalid prop \`max\` of value \`${`${n}`}\` supplied to \`${'Progress'}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`,
            );
          const r = D(n) ? n : f;
          null === e ||
            S(e, r) ||
            console.error(
              (function (i, a) {
                return `Invalid prop \`value\` of value \`${i}\` supplied to \`${a}\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`;
              })(`${e}`, 'Progress'),
            );
          const c = S(e, r) ? e : null,
            s = E(c) ? o(c, r) : void 0;
          return (0, l.jsx)(h, {
            scope: t,
            value: c,
            max: r,
            children: (0, l.jsx)(u.div, {
              'aria-valuemax': r,
              'aria-valuemin': 0,
              'aria-valuenow': E(c) ? c : void 0,
              'aria-valuetext': s,
              role: 'progressbar',
              'data-state': z(c, r),
              'data-value': c ?? void 0,
              'data-max': r,
              ...p,
              ref: a,
            }),
          });
        });
      w.displayName = v;
      var y = 'ProgressIndicator',
        k = e.forwardRef((i, a) => {
          const { __scopeProgress: t, ...e } = i,
            n = b(y, t);
          return (0, l.jsx)(u.div, {
            'data-state': z(n.value, n.max),
            'data-value': n.value ?? void 0,
            'data-max': n.max,
            ...e,
            ref: a,
          });
        });
      function j(i, a) {
        return `${Math.round((i / a) * 100)}%`;
      }
      function z(i, a) {
        return null == i ? 'indeterminate' : i === a ? 'complete' : 'loading';
      }
      function E(i) {
        return 'number' == typeof i;
      }
      function D(i) {
        return E(i) && !isNaN(i) && i > 0;
      }
      function S(i, a) {
        return E(i) && !isNaN(i) && i <= a && i >= 0;
      }
      k.displayName = y;
      var O = w,
        C = k;
    },
    68635: function (i, a, t) {
      t.d(a, {
        Ns: function () {
          return ni;
        },
        fC: function () {
          return ti;
        },
        gb: function () {
          return A;
        },
        q4: function () {
          return H;
        },
        l_: function () {
          return ei;
        },
      });
      var e = t(62435);
      t(61254);
      function n(i, a) {
        if ('function' == typeof i) return i(a);
        null != i && (i.current = a);
      }
      function o(...i) {
        return (a) => {
          let t = !1;
          const e = i.map((i) => {
            const e = n(i, a);
            return t || 'function' != typeof e || (t = !0), e;
          });
          if (t)
            return () => {
              for (let a = 0; a < e.length; a++) {
                const t = e[a];
                'function' == typeof t ? t() : n(i[a], null);
              }
            };
        };
      }
      function p(...i) {
        return e.useCallback(o(...i), i);
      }
      var l = t(86074),
        r = e.forwardRef((i, a) => {
          const { children: t, ...n } = i,
            o = e.Children.toArray(t),
            p = o.find(d);
          if (p) {
            const i = p.props.children,
              t = o.map((a) =>
                a === p
                  ? e.Children.count(i) > 1
                    ? e.Children.only(null)
                    : e.isValidElement(i)
                      ? i.props.children
                      : null
                  : a,
              );
            return (0, l.jsx)(c, {
              ...n,
              ref: a,
              children: e.isValidElement(i)
                ? e.cloneElement(i, void 0, t)
                : null,
            });
          }
          return (0, l.jsx)(c, { ...n, ref: a, children: t });
        });
      r.displayName = 'Slot';
      var c = e.forwardRef((i, a) => {
        const { children: t, ...n } = i;
        if (e.isValidElement(t)) {
          const i = (function (i) {
            let a = Object.getOwnPropertyDescriptor(i.props, 'ref')?.get,
              t = a && 'isReactWarning' in a && a.isReactWarning;
            if (t) return i.ref;
            if (
              ((a = Object.getOwnPropertyDescriptor(i, 'ref')?.get),
              (t = a && 'isReactWarning' in a && a.isReactWarning),
              t)
            )
              return i.props.ref;
            return i.props.ref || i.ref;
          })(t);
          return e.cloneElement(t, { ...m(n, t.props), ref: a ? o(a, i) : i });
        }
        return e.Children.count(t) > 1 ? e.Children.only(null) : null;
      });
      c.displayName = 'SlotClone';
      var s = ({ children: i }) => (0, l.jsx)(l.Fragment, { children: i });
      function d(i) {
        return e.isValidElement(i) && i.type === s;
      }
      function m(i, a) {
        const t = { ...a };
        for (const e in a) {
          const n = i[e],
            o = a[e];
          /^on[A-Z]/.test(e)
            ? n && o
              ? (t[e] = (...i) => {
                  o(...i), n(...i);
                })
              : n && (t[e] = n)
            : 'style' === e
              ? (t[e] = { ...n, ...o })
              : 'className' === e && (t[e] = [n, o].filter(Boolean).join(' '));
        }
        return { ...i, ...t };
      }
      var u = [
        'a',
        'button',
        'div',
        'form',
        'h2',
        'h3',
        'img',
        'input',
        'label',
        'li',
        'nav',
        'ol',
        'p',
        'span',
        'svg',
        'ul',
      ].reduce((i, a) => {
        const t = e.forwardRef((i, t) => {
          const { asChild: e, ...n } = i,
            o = e ? r : a;
          return (
            'undefined' != typeof window &&
              (window[Symbol.for('radix-ui')] = !0),
            (0, l.jsx)(o, { ...n, ref: t })
          );
        });
        return (t.displayName = `Primitive.${a}`), { ...i, [a]: t };
      }, {});
      var v = t(9981);
      var f = (i) => {
        const { present: a, children: t } = i,
          n = (function (i) {
            const [a, t] = e.useState(),
              n = e.useRef({}),
              o = e.useRef(i),
              p = e.useRef('none'),
              l = i ? 'mounted' : 'unmounted',
              [r, c] = (function (i, a) {
                return e.useReducer((i, t) => a[i][t] ?? i, i);
              })(l, {
                mounted: {
                  UNMOUNT: 'unmounted',
                  ANIMATION_OUT: 'unmountSuspended',
                },
                unmountSuspended: {
                  MOUNT: 'mounted',
                  ANIMATION_END: 'unmounted',
                },
                unmounted: { MOUNT: 'mounted' },
              });
            return (
              e.useEffect(() => {
                const i = x(n.current);
                p.current = 'mounted' === r ? i : 'none';
              }, [r]),
              (0, v.b)(() => {
                const a = n.current,
                  t = o.current;
                if (t !== i) {
                  const e = p.current,
                    n = x(a);
                  if (i) c('MOUNT');
                  else if ('none' === n || 'none' === a?.display) c('UNMOUNT');
                  else {
                    c(t && e !== n ? 'ANIMATION_OUT' : 'UNMOUNT');
                  }
                  o.current = i;
                }
              }, [i, c]),
              (0, v.b)(() => {
                if (a) {
                  let i;
                  const t = a.ownerDocument.defaultView ?? window,
                    e = (e) => {
                      const p = x(n.current).includes(e.animationName);
                      if (
                        e.target === a &&
                        p &&
                        (c('ANIMATION_END'), !o.current)
                      ) {
                        const e = a.style.animationFillMode;
                        (a.style.animationFillMode = 'forwards'),
                          (i = t.setTimeout(() => {
                            'forwards' === a.style.animationFillMode &&
                              (a.style.animationFillMode = e);
                          }));
                      }
                    },
                    l = (i) => {
                      i.target === a && (p.current = x(n.current));
                    };
                  return (
                    a.addEventListener('animationstart', l),
                    a.addEventListener('animationcancel', e),
                    a.addEventListener('animationend', e),
                    () => {
                      t.clearTimeout(i),
                        a.removeEventListener('animationstart', l),
                        a.removeEventListener('animationcancel', e),
                        a.removeEventListener('animationend', e);
                    }
                  );
                }
                c('ANIMATION_END');
              }, [a, c]),
              {
                isPresent: ['mounted', 'unmountSuspended'].includes(r),
                ref: e.useCallback((i) => {
                  i && (n.current = getComputedStyle(i)), t(i);
                }, []),
              }
            );
          })(a),
          o =
            'function' == typeof t
              ? t({ present: n.isPresent })
              : e.Children.only(t),
          l = p(
            n.ref,
            (function (i) {
              let a = Object.getOwnPropertyDescriptor(i.props, 'ref')?.get,
                t = a && 'isReactWarning' in a && a.isReactWarning;
              if (t) return i.ref;
              if (
                ((a = Object.getOwnPropertyDescriptor(i, 'ref')?.get),
                (t = a && 'isReactWarning' in a && a.isReactWarning),
                t)
              )
                return i.props.ref;
              return i.props.ref || i.ref;
            })(o),
          );
        return 'function' == typeof t || n.isPresent
          ? e.cloneElement(o, { ref: l })
          : null;
      };
      function x(i) {
        return i?.animationName || 'none';
      }
      f.displayName = 'Presence';
      var g = t(25360),
        h = t(79698),
        b = t(78990),
        w = t(42614);
      function y(i, a, { checkForDefaultPrevented: t = !0 } = {}) {
        return function (e) {
          if ((i?.(e), !1 === t || !e.defaultPrevented)) return a?.(e);
        };
      }
      var k = 'ScrollArea',
        [j, z] = (0, g.b)(k),
        [E, D] = j(k),
        S = e.forwardRef((i, a) => {
          const {
              __scopeScrollArea: t,
              type: n = 'hover',
              dir: o,
              scrollHideDelay: r = 600,
              ...c
            } = i,
            [s, d] = e.useState(null),
            [m, v] = e.useState(null),
            [f, x] = e.useState(null),
            [g, h] = e.useState(null),
            [w, y] = e.useState(null),
            [k, j] = e.useState(0),
            [z, D] = e.useState(0),
            [S, O] = e.useState(!1),
            [C, P] = e.useState(!1),
            A = p(a, (i) => d(i)),
            R = (0, b.gm)(o);
          return (0, l.jsx)(E, {
            scope: t,
            type: n,
            dir: R,
            scrollHideDelay: r,
            scrollArea: s,
            viewport: m,
            onViewportChange: v,
            content: f,
            onContentChange: x,
            scrollbarX: g,
            onScrollbarXChange: h,
            scrollbarXEnabled: S,
            onScrollbarXEnabledChange: O,
            scrollbarY: w,
            onScrollbarYChange: y,
            scrollbarYEnabled: C,
            onScrollbarYEnabledChange: P,
            onCornerWidthChange: j,
            onCornerHeightChange: D,
            children: (0, l.jsx)(u.div, {
              dir: R,
              ...c,
              ref: A,
              style: {
                position: 'relative',
                '--radix-scroll-area-corner-width': k + 'px',
                '--radix-scroll-area-corner-height': z + 'px',
                ...i.style,
              },
            }),
          });
        });
      S.displayName = k;
      var O = 'ScrollAreaViewport',
        C = e.forwardRef((i, a) => {
          const { __scopeScrollArea: t, children: n, nonce: o, ...r } = i,
            c = D(O, t),
            s = p(a, e.useRef(null), c.onViewportChange);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)('style', {
                dangerouslySetInnerHTML: {
                  __html:
                    '[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}',
                },
                nonce: o,
              }),
              (0, l.jsx)(u.div, {
                'data-radix-scroll-area-viewport': '',
                ...r,
                ref: s,
                style: {
                  overflowX: c.scrollbarXEnabled ? 'scroll' : 'hidden',
                  overflowY: c.scrollbarYEnabled ? 'scroll' : 'hidden',
                  ...i.style,
                },
                children: (0, l.jsx)('div', {
                  ref: c.onContentChange,
                  style: { minWidth: '100%', display: 'table' },
                  children: n,
                }),
              }),
            ],
          });
        });
      C.displayName = O;
      var P = 'ScrollAreaScrollbar',
        A = e.forwardRef((i, a) => {
          const { forceMount: t, ...n } = i,
            o = D(P, i.__scopeScrollArea),
            { onScrollbarXEnabledChange: p, onScrollbarYEnabledChange: r } = o,
            c = 'horizontal' === i.orientation;
          return (
            e.useEffect(
              () => (
                c ? p(!0) : r(!0),
                () => {
                  c ? p(!1) : r(!1);
                }
              ),
              [c, p, r],
            ),
            'hover' === o.type
              ? (0, l.jsx)(R, { ...n, ref: a, forceMount: t })
              : 'scroll' === o.type
                ? (0, l.jsx)(T, { ...n, ref: a, forceMount: t })
                : 'auto' === o.type
                  ? (0, l.jsx)(F, { ...n, ref: a, forceMount: t })
                  : 'always' === o.type
                    ? (0, l.jsx)(q, { ...n, ref: a })
                    : null
          );
        });
      A.displayName = P;
      var R = e.forwardRef((i, a) => {
          const { forceMount: t, ...n } = i,
            o = D(P, i.__scopeScrollArea),
            [p, r] = e.useState(!1);
          return (
            e.useEffect(() => {
              const i = o.scrollArea;
              let a = 0;
              if (i) {
                const t = () => {
                    window.clearTimeout(a), r(!0);
                  },
                  e = () => {
                    a = window.setTimeout(() => r(!1), o.scrollHideDelay);
                  };
                return (
                  i.addEventListener('pointerenter', t),
                  i.addEventListener('pointerleave', e),
                  () => {
                    window.clearTimeout(a),
                      i.removeEventListener('pointerenter', t),
                      i.removeEventListener('pointerleave', e);
                  }
                );
              }
            }, [o.scrollArea, o.scrollHideDelay]),
            (0, l.jsx)(f, {
              present: t || p,
              children: (0, l.jsx)(F, {
                'data-state': p ? 'visible' : 'hidden',
                ...n,
                ref: a,
              }),
            })
          );
        }),
        T = e.forwardRef((i, a) => {
          const { forceMount: t, ...n } = i,
            o = D(P, i.__scopeScrollArea),
            p = 'horizontal' === i.orientation,
            r = ii(() => s('SCROLL_END'), 100),
            [c, s] =
              ((d = 'hidden'),
              (m = {
                hidden: { SCROLL: 'scrolling' },
                scrolling: { SCROLL_END: 'idle', POINTER_ENTER: 'interacting' },
                interacting: { SCROLL: 'interacting', POINTER_LEAVE: 'idle' },
                idle: {
                  HIDE: 'hidden',
                  SCROLL: 'scrolling',
                  POINTER_ENTER: 'interacting',
                },
              }),
              e.useReducer((i, a) => m[i][a] ?? i, d));
          var d, m;
          return (
            e.useEffect(() => {
              if ('idle' === c) {
                const i = window.setTimeout(() => s('HIDE'), o.scrollHideDelay);
                return () => window.clearTimeout(i);
              }
            }, [c, o.scrollHideDelay, s]),
            e.useEffect(() => {
              const i = o.viewport,
                a = p ? 'scrollLeft' : 'scrollTop';
              if (i) {
                let t = i[a];
                const e = () => {
                  const e = i[a];
                  t !== e && (s('SCROLL'), r()), (t = e);
                };
                return (
                  i.addEventListener('scroll', e),
                  () => i.removeEventListener('scroll', e)
                );
              }
            }, [o.viewport, p, s, r]),
            (0, l.jsx)(f, {
              present: t || 'hidden' !== c,
              children: (0, l.jsx)(q, {
                'data-state': 'hidden' === c ? 'hidden' : 'visible',
                ...n,
                ref: a,
                onPointerEnter: y(i.onPointerEnter, () => s('POINTER_ENTER')),
                onPointerLeave: y(i.onPointerLeave, () => s('POINTER_LEAVE')),
              }),
            })
          );
        }),
        F = e.forwardRef((i, a) => {
          const t = D(P, i.__scopeScrollArea),
            { forceMount: n, ...o } = i,
            [p, r] = e.useState(!1),
            c = 'horizontal' === i.orientation,
            s = ii(() => {
              if (t.viewport) {
                const i = t.viewport.offsetWidth < t.viewport.scrollWidth,
                  a = t.viewport.offsetHeight < t.viewport.scrollHeight;
                r(c ? i : a);
              }
            }, 10);
          return (
            ai(t.viewport, s),
            ai(t.content, s),
            (0, l.jsx)(f, {
              present: n || p,
              children: (0, l.jsx)(q, {
                'data-state': p ? 'visible' : 'hidden',
                ...o,
                ref: a,
              }),
            })
          );
        }),
        q = e.forwardRef((i, a) => {
          const { orientation: t = 'vertical', ...n } = i,
            o = D(P, i.__scopeScrollArea),
            p = e.useRef(null),
            r = e.useRef(0),
            [c, s] = e.useState({
              content: 0,
              viewport: 0,
              scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
            }),
            d = X(c.viewport, c.content),
            m = {
              ...n,
              sizes: c,
              onSizesChange: s,
              hasThumb: Boolean(d > 0 && d < 1),
              onThumbChange: (i) => (p.current = i),
              onThumbPointerUp: () => (r.current = 0),
              onThumbPointerDown: (i) => (r.current = i),
            };
          function u(i, a) {
            return (function (i, a, t, e = 'ltr') {
              const n = Z(t),
                o = n / 2,
                p = a || o,
                l = n - p,
                r = t.scrollbar.paddingStart + p,
                c = t.scrollbar.size - t.scrollbar.paddingEnd - l,
                s = t.content - t.viewport,
                d = 'ltr' === e ? [0, s] : [-1 * s, 0];
              return G([r, c], d)(i);
            })(i, r.current, c, a);
          }
          return 'horizontal' === t
            ? (0, l.jsx)(_, {
                ...m,
                ref: a,
                onThumbPositionChange: () => {
                  if (o.viewport && p.current) {
                    const i = K(o.viewport.scrollLeft, c, o.dir);
                    p.current.style.transform = `translate3d(${i}px, 0, 0)`;
                  }
                },
                onWheelScroll: (i) => {
                  o.viewport && (o.viewport.scrollLeft = i);
                },
                onDragScroll: (i) => {
                  o.viewport && (o.viewport.scrollLeft = u(i, o.dir));
                },
              })
            : 'vertical' === t
              ? (0, l.jsx)(N, {
                  ...m,
                  ref: a,
                  onThumbPositionChange: () => {
                    if (o.viewport && p.current) {
                      const i = K(o.viewport.scrollTop, c);
                      p.current.style.transform = `translate3d(0, ${i}px, 0)`;
                    }
                  },
                  onWheelScroll: (i) => {
                    o.viewport && (o.viewport.scrollTop = i);
                  },
                  onDragScroll: (i) => {
                    o.viewport && (o.viewport.scrollTop = u(i));
                  },
                })
              : null;
        }),
        _ = e.forwardRef((i, a) => {
          const { sizes: t, onSizesChange: n, ...o } = i,
            r = D(P, i.__scopeScrollArea),
            [c, s] = e.useState(),
            d = e.useRef(null),
            m = p(a, d, r.onScrollbarXChange);
          return (
            e.useEffect(() => {
              d.current && s(getComputedStyle(d.current));
            }, [d]),
            (0, l.jsx)(I, {
              'data-orientation': 'horizontal',
              ...o,
              ref: m,
              sizes: t,
              style: {
                bottom: 0,
                left:
                  'rtl' === r.dir ? 'var(--radix-scroll-area-corner-width)' : 0,
                right:
                  'ltr' === r.dir ? 'var(--radix-scroll-area-corner-width)' : 0,
                '--radix-scroll-area-thumb-width': Z(t) + 'px',
                ...i.style,
              },
              onThumbPointerDown: (a) => i.onThumbPointerDown(a.x),
              onDragScroll: (a) => i.onDragScroll(a.x),
              onWheelScroll: (a, t) => {
                if (r.viewport) {
                  const e = r.viewport.scrollLeft + a.deltaX;
                  i.onWheelScroll(e), J(e, t) && a.preventDefault();
                }
              },
              onResize: () => {
                d.current &&
                  r.viewport &&
                  c &&
                  n({
                    content: r.viewport.scrollWidth,
                    viewport: r.viewport.offsetWidth,
                    scrollbar: {
                      size: d.current.clientWidth,
                      paddingStart: Y(c.paddingLeft),
                      paddingEnd: Y(c.paddingRight),
                    },
                  });
              },
            })
          );
        }),
        N = e.forwardRef((i, a) => {
          const { sizes: t, onSizesChange: n, ...o } = i,
            r = D(P, i.__scopeScrollArea),
            [c, s] = e.useState(),
            d = e.useRef(null),
            m = p(a, d, r.onScrollbarYChange);
          return (
            e.useEffect(() => {
              d.current && s(getComputedStyle(d.current));
            }, [d]),
            (0, l.jsx)(I, {
              'data-orientation': 'vertical',
              ...o,
              ref: m,
              sizes: t,
              style: {
                top: 0,
                right: 'ltr' === r.dir ? 0 : void 0,
                left: 'rtl' === r.dir ? 0 : void 0,
                bottom: 'var(--radix-scroll-area-corner-height)',
                '--radix-scroll-area-thumb-height': Z(t) + 'px',
                ...i.style,
              },
              onThumbPointerDown: (a) => i.onThumbPointerDown(a.y),
              onDragScroll: (a) => i.onDragScroll(a.y),
              onWheelScroll: (a, t) => {
                if (r.viewport) {
                  const e = r.viewport.scrollTop + a.deltaY;
                  i.onWheelScroll(e), J(e, t) && a.preventDefault();
                }
              },
              onResize: () => {
                d.current &&
                  r.viewport &&
                  c &&
                  n({
                    content: r.viewport.scrollHeight,
                    viewport: r.viewport.offsetHeight,
                    scrollbar: {
                      size: d.current.clientHeight,
                      paddingStart: Y(c.paddingTop),
                      paddingEnd: Y(c.paddingBottom),
                    },
                  });
              },
            })
          );
        }),
        [L, M] = j(P),
        I = e.forwardRef((i, a) => {
          const {
              __scopeScrollArea: t,
              sizes: n,
              hasThumb: o,
              onThumbChange: r,
              onThumbPointerUp: c,
              onThumbPointerDown: s,
              onThumbPositionChange: d,
              onDragScroll: m,
              onWheelScroll: v,
              onResize: f,
              ...x
            } = i,
            g = D(P, t),
            [b, w] = e.useState(null),
            k = p(a, (i) => w(i)),
            j = e.useRef(null),
            z = e.useRef(''),
            E = g.viewport,
            S = n.content - n.viewport,
            O = (0, h.W)(v),
            C = (0, h.W)(d),
            A = ii(f, 10);
          function R(i) {
            if (j.current) {
              const a = i.clientX - j.current.left,
                t = i.clientY - j.current.top;
              m({ x: a, y: t });
            }
          }
          return (
            e.useEffect(() => {
              const i = (i) => {
                const a = i.target,
                  t = b?.contains(a);
                t && O(i, S);
              };
              return (
                document.addEventListener('wheel', i, { passive: !1 }),
                () => document.removeEventListener('wheel', i, { passive: !1 })
              );
            }, [E, b, S, O]),
            e.useEffect(C, [n, C]),
            ai(b, A),
            ai(g.content, A),
            (0, l.jsx)(L, {
              scope: t,
              scrollbar: b,
              hasThumb: o,
              onThumbChange: (0, h.W)(r),
              onThumbPointerUp: (0, h.W)(c),
              onThumbPositionChange: C,
              onThumbPointerDown: (0, h.W)(s),
              children: (0, l.jsx)(u.div, {
                ...x,
                ref: k,
                style: { position: 'absolute', ...x.style },
                onPointerDown: y(i.onPointerDown, (i) => {
                  if (0 === i.button) {
                    i.target.setPointerCapture(i.pointerId),
                      (j.current = b.getBoundingClientRect()),
                      (z.current = document.body.style.webkitUserSelect),
                      (document.body.style.webkitUserSelect = 'none'),
                      g.viewport && (g.viewport.style.scrollBehavior = 'auto'),
                      R(i);
                  }
                }),
                onPointerMove: y(i.onPointerMove, R),
                onPointerUp: y(i.onPointerUp, (i) => {
                  const a = i.target;
                  a.hasPointerCapture(i.pointerId) &&
                    a.releasePointerCapture(i.pointerId),
                    (document.body.style.webkitUserSelect = z.current),
                    g.viewport && (g.viewport.style.scrollBehavior = ''),
                    (j.current = null);
                }),
              }),
            })
          );
        }),
        W = 'ScrollAreaThumb',
        H = e.forwardRef((i, a) => {
          const { forceMount: t, ...e } = i,
            n = M(W, i.__scopeScrollArea);
          return (0, l.jsx)(f, {
            present: t || n.hasThumb,
            children: (0, l.jsx)(U, { ref: a, ...e }),
          });
        }),
        U = e.forwardRef((i, a) => {
          const { __scopeScrollArea: t, style: n, ...o } = i,
            r = D(W, t),
            c = M(W, t),
            { onThumbPositionChange: s } = c,
            d = p(a, (i) => c.onThumbChange(i)),
            m = e.useRef(void 0),
            v = ii(() => {
              m.current && (m.current(), (m.current = void 0));
            }, 100);
          return (
            e.useEffect(() => {
              const i = r.viewport;
              if (i) {
                const a = () => {
                  if ((v(), !m.current)) {
                    const a = Q(i, s);
                    (m.current = a), s();
                  }
                };
                return (
                  s(),
                  i.addEventListener('scroll', a),
                  () => i.removeEventListener('scroll', a)
                );
              }
            }, [r.viewport, v, s]),
            (0, l.jsx)(u.div, {
              'data-state': c.hasThumb ? 'visible' : 'hidden',
              ...o,
              ref: d,
              style: {
                width: 'var(--radix-scroll-area-thumb-width)',
                height: 'var(--radix-scroll-area-thumb-height)',
                ...n,
              },
              onPointerDownCapture: y(i.onPointerDownCapture, (i) => {
                const a = i.target.getBoundingClientRect(),
                  t = i.clientX - a.left,
                  e = i.clientY - a.top;
                c.onThumbPointerDown({ x: t, y: e });
              }),
              onPointerUp: y(i.onPointerUp, c.onThumbPointerUp),
            })
          );
        });
      H.displayName = W;
      var B = 'ScrollAreaCorner',
        $ = e.forwardRef((i, a) => {
          const t = D(B, i.__scopeScrollArea),
            e = Boolean(t.scrollbarX && t.scrollbarY);
          return 'scroll' !== t.type && e
            ? (0, l.jsx)(V, { ...i, ref: a })
            : null;
        });
      $.displayName = B;
      var V = e.forwardRef((i, a) => {
        const { __scopeScrollArea: t, ...n } = i,
          o = D(B, t),
          [p, r] = e.useState(0),
          [c, s] = e.useState(0),
          d = Boolean(p && c);
        return (
          ai(o.scrollbarX, () => {
            const i = o.scrollbarX?.offsetHeight || 0;
            o.onCornerHeightChange(i), s(i);
          }),
          ai(o.scrollbarY, () => {
            const i = o.scrollbarY?.offsetWidth || 0;
            o.onCornerWidthChange(i), r(i);
          }),
          d
            ? (0, l.jsx)(u.div, {
                ...n,
                ref: a,
                style: {
                  width: p,
                  height: c,
                  position: 'absolute',
                  right: 'ltr' === o.dir ? 0 : void 0,
                  left: 'rtl' === o.dir ? 0 : void 0,
                  bottom: 0,
                  ...i.style,
                },
              })
            : null
        );
      });
      function Y(i) {
        return i ? parseInt(i, 10) : 0;
      }
      function X(i, a) {
        const t = i / a;
        return isNaN(t) ? 0 : t;
      }
      function Z(i) {
        const a = X(i.viewport, i.content),
          t = i.scrollbar.paddingStart + i.scrollbar.paddingEnd,
          e = (i.scrollbar.size - t) * a;
        return Math.max(e, 18);
      }
      function K(i, a, t = 'ltr') {
        const e = Z(a),
          n = a.scrollbar.paddingStart + a.scrollbar.paddingEnd,
          o = a.scrollbar.size - n,
          p = a.content - a.viewport,
          l = o - e,
          r = 'ltr' === t ? [0, p] : [-1 * p, 0],
          c = (0, w.u)(i, r);
        return G([0, p], [0, l])(c);
      }
      function G(i, a) {
        return (t) => {
          if (i[0] === i[1] || a[0] === a[1]) return a[0];
          const e = (a[1] - a[0]) / (i[1] - i[0]);
          return a[0] + e * (t - i[0]);
        };
      }
      function J(i, a) {
        return i > 0 && i < a;
      }
      var Q = (i, a = () => {}) => {
        let t = { left: i.scrollLeft, top: i.scrollTop },
          e = 0;
        return (
          (function n() {
            const o = { left: i.scrollLeft, top: i.scrollTop },
              p = t.left !== o.left,
              l = t.top !== o.top;
            (p || l) && a(), (t = o), (e = window.requestAnimationFrame(n));
          })(),
          () => window.cancelAnimationFrame(e)
        );
      };
      function ii(i, a) {
        const t = (0, h.W)(i),
          n = e.useRef(0);
        return (
          e.useEffect(() => () => window.clearTimeout(n.current), []),
          e.useCallback(() => {
            window.clearTimeout(n.current),
              (n.current = window.setTimeout(t, a));
          }, [t, a])
        );
      }
      function ai(i, a) {
        const t = (0, h.W)(a);
        (0, v.b)(() => {
          let a = 0;
          if (i) {
            const e = new ResizeObserver(() => {
              cancelAnimationFrame(a), (a = window.requestAnimationFrame(t));
            });
            return (
              e.observe(i),
              () => {
                window.cancelAnimationFrame(a), e.unobserve(i);
              }
            );
          }
        }, [i, t]);
      }
      var ti = S,
        ei = C,
        ni = $;
    },
  },
]);
//# sourceMappingURL=5232.8506b506.async.js.map
