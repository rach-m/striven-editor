!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.striveneditor=e():t.striveneditor=e()}(window,(function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){var n,i,l;i=[e],void 0===(l="function"==typeof(n=function(t){"use strict";function e(t){return function(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=[".doc",".docx",".xls",".xlsx",".ppt",".pptx",".pdf",".tif",".jpeg",".jpg",".gif",".bmp",".txt",".csv",".png",".msg",".wav",".mp3",".mp4",".zip",".rtf",".eps",".ai",".psd",".avi",".mov",".wmv",".cfg",".wss",".vsd",".vsdx",".tsd",".lic"],l="fas",r={textDecoration:{menu:{viewBox:"0 0 1792 1792",d:"M789 559l-170 450q33 0 136.5 2t160.5 2q19 0 57-2-87-253-184-452zm-725 1105l2-79q23-7 56-12.5t57-10.5 49.5-14.5 44.5-29 31-50.5l237-616 280-724h128q8 14 11 21l205 480q33 78 106 257.5t114 274.5q15 34 58 144.5t72 168.5q20 45 35 57 19 15 88 29.5t84 20.5q6 38 6 57 0 5-.5 13.5t-.5 12.5q-63 0-190-8t-191-8q-76 0-215 7t-178 8q0-43 4-78l131-28q1 0 12.5-2.5t15.5-3.5 14.5-4.5 15-6.5 11-8 9-11 2.5-14q0-16-31-96.5t-72-177.5-42-100l-450-2q-26 58-76.5 195.5t-50.5 162.5q0 22 14 37.5t43.5 24.5 48.5 13.5 57 8.5 41 4q1 19 1 58 0 9-2 27-58 0-174.5-10t-174.5-10q-8 0-26.5 4t-21.5 4q-80 14-188 14z"},group:[{bold:{viewBox:"0 0 1792 1792",d:"M747 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-.5 159t-.5 158q0 8-1 67.5t-.5 96.5 4.5 83.5 12 66.5zm-14-746q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-.5 80t-.5 79q0 46 1 69zm-541 889l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5.5-34v-65.5q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68 .5t68 .5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z"}},{italic:{viewBox:"0 0 1792 1792",d:"M384 1662l17-85q22-7 61.5-16.5t72-19 59.5-23.5q28-35 41-101 1-7 62-289t114-543.5 52-296.5v-25q-24-13-54.5-18.5t-69.5-8-58-5.5l19-103q33 2 120 6.5t149.5 7 120.5 2.5q48 0 98.5-2.5t121-7 98.5-6.5q-5 39-19 89-30 10-101.5 28.5t-108.5 33.5q-8 19-14 42.5t-9 40-7.5 45.5-6.5 42q-27 148-87.5 419.5t-77.5 355.5q-2 9-13 58t-20 90-16 83.5-6 57.5l1 18q17 4 185 31-3 44-16 99-11 0-32.5 1.5t-32.5 1.5q-29 0-87-10t-86-10q-138-2-206-2-51 0-143 9t-121 11z"}},{underline:{viewBox:"0 0 1792 1792",d:"M176 223q-37-2-45-4l-3-88q13-1 40-1 60 0 112 4 132 7 166 7 86 0 168-3 116-4 146-5 56 0 86-2l-1 14 2 64v9q-60 9-124 9-60 0-79 25-13 14-13 132 0 13 .5 32.5t.5 25.5l1 229 14 280q6 124 51 202 35 59 96 92 88 47 177 47 104 0 191-28 56-18 99-51 48-36 65-64 36-56 53-114 21-73 21-229 0-79-3.5-128t-11-122.5-13.5-159.5l-4-59q-5-67-24-88-34-35-77-34l-100 2-14-3 2-86h84l205 10q76 3 196-10l18 2q6 38 6 51 0 7-4 31-45 12-84 13-73 11-79 17-15 15-15 41 0 7 1.5 27t1.5 31q8 19 22 396 6 195-15 304-15 76-41 122-38 65-112 123-75 57-182 89-109 33-255 33-167 0-284-46-119-47-179-122-61-76-83-195-16-80-16-237v-333q0-188-17-213-25-36-147-39zm1488 1409v-64q0-14-9-23t-23-9h-1472q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23z"}},{strikethrough:{viewBox:"0 0 1792 1792",d:"M1760 896q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1728zm-1277-64q-28-35-51-80-48-98-48-188 0-181 134-309 133-127 393-127 50 0 167 19 66 12 177 48 10 38 21 118 14 123 14 183 0 18-5 45l-12 3-84-6-14-2q-50-149-103-205-88-91-210-91-114 0-182 59-67 58-67 146 0 73 66 140t279 129q69 20 173 66 58 28 95 52h-743zm507 256h411q7 39 7 92 0 111-41 212-23 56-71 104-37 35-109 81-80 48-153 66-80 21-203 21-114 0-195-23l-140-40q-57-16-72-28-8-8-8-22v-13q0-108-2-156-1-30 0-68l2-37v-44l102-2q15 34 30 71t22.5 56 12.5 27q35 57 80 94 43 36 105 57 59 22 132 22 64 0 139-27 77-26 122-86 47-61 47-129 0-84-81-157-34-29-137-71z"}},{removeFormat:{viewBox:"0 0 640 512",d:"M336 416h-11.17l9.26-27.77L267 336.4 240.49 416H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm297.82 42.1L377 259.59 426.17 112H544v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16H176a16 16 0 0 0-16 16v43.9L45.46 3.38A16 16 0 0 0 23 6.19L3.37 31.46a16 16 0 0 0 2.81 22.45l588.36 454.72a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zM309.91 207.76L224 141.36V112h117.83z"}}]},listOptions:{menu:{viewBox:"0 0 1792 1792",d:"M256 1312v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm1536 768v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zm-1536-1152v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm1536 768v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5z"},group:[{insertOrderedList:{viewBox:"0 0 1792 1792",d:"M381 1620q0 80-54.5 126t-135.5 46q-106 0-172-66l57-88q49 45 106 45 29 0 50.5-14.5t21.5-42.5q0-64-105-56l-26-56q8-10 32.5-43.5t42.5-54 37-38.5v-1q-16 0-48.5 1t-48.5 1v53h-106v-152h333v88l-95 115q51 12 81 49t30 88zm2-627v159h-362q-6-36-6-54 0-51 23.5-93t56.5-68 66-47.5 56.5-43.5 23.5-45q0-25-14.5-38.5t-39.5-13.5q-46 0-81 58l-85-59q24-51 71.5-79.5t105.5-28.5q73 0 123 41.5t50 112.5q0 50-34 91.5t-75 64.5-75.5 50.5-35.5 52.5h127v-60h105zm1409 319v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm-1408-899v99h-335v-99h107q0-41 .5-121.5t.5-121.5v-12h-2q-8 17-50 54l-71-76 136-127h106v404h108zm1408 387v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"}},{insertUnorderedList:{viewBox:"0 0 1792 1792",d:"M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5"}}]},textAlign:{menu:{viewBox:"0 0 1792 1792",d:"M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45z"},group:[{indent:{viewBox:"0 0 1792 1792",d:"M352 832q0 14-9 23l-288 288q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-576q0-13 9.5-22.5t22.5-9.5q14 0 23 9l288 288q9 9 9 23zm1440 480v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"}},{justifyLeft:{viewBox:"0 0 1792 1792",d:"M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"}},{justifyCenter:{viewBox:"0 0 1792 1792",d:"M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z"}},{justifyRight:{viewBox:"0 0 1792 1792",d:"M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"}}]},attachments:{menu:{viewBox:"0 0 1792 1792",d:"M1596 1385q0 117-79 196t-196 79q-135 0-235-100l-777-776q-113-115-113-271 0-159 110-270t269-111q158 0 273 113l605 606q10 10 10 22 0 16-30.5 46.5t-46.5 30.5q-13 0-23-10l-606-607q-79-77-181-77-106 0-179 75t-73 181q0 105 76 181l776 777q63 63 145 63 64 0 106-42t42-106q0-82-63-145l-581-581q-26-24-60-24-29 0-48 19t-19 48q0 32 25 59l410 410q10 10 10 22 0 16-31 47t-47 31q-12 0-22-10l-410-410q-63-61-63-149 0-82 57-139t139-57q88 0 149 63l581 581q100 98 100 235z"},group:[{attachment:{viewBox:"0 0 1792 1792",d:"M1596 1385q0 117-79 196t-196 79q-135 0-235-100l-777-776q-113-115-113-271 0-159 110-270t269-111q158 0 273 113l605 606q10 10 10 22 0 16-30.5 46.5t-46.5 30.5q-13 0-23-10l-606-607q-79-77-181-77-106 0-179 75t-73 181q0 105 76 181l776 777q63 63 145 63 64 0 106-42t42-106q0-82-63-145l-581-581q-26-24-60-24-29 0-48 19t-19 48q0 32 25 59l410 410q10 10 10 22 0 16-31 47t-47 31q-12 0-22-10l-410-410q-63-61-63-149 0-82 57-139t139-57q88 0 149 63l581 581q100 98 100 235z"}},{link:{viewBox:"0 0 1792 1792",d:"M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"}},{image:{viewBox:"0 0 2048 1792",d:"M704 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448h-1408v-192l320-320 160 160 512-512zm96-704h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zm160 32v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z"}}]}},a=["bold","italic","underline","strikethrough","removeFormat","insertOrderedList","insertUnorderedList","indent","justifyLeft","justifyCenter","justifyRight","attachment","link","image"],s=function(){function t(e,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.range=new Range,this.files=[],this.optionGroups=r,o?(this.options=o,o.fontPack||(this.options.fontPack=l),o.extensions||(this.options.extensions=i),o.toolbarOptions||(this.options.toolbarOptions=a)):this.options={fontPack:l,extensions:i,toolbarOptions:a},this.initEditor(e),this.initResponsive(),this.initOverflow()}var s,c,d;return s=t,(c=[{key:"initEditor",value:function(t){var e=this;if(this.editor=t,this.toolbar=this.initToolbar(),this.body=this.initBody(),this.linkMenu=this.initLinkMenu(),this.imageMenu=this.initImageMenu(),this.metaDataSection=this.initMetaDataSection(),this.filesSection=this.initFilesSection(),this.editor.style.border="2px solid #ddd",this.editor.style.display="flex",this.editor.style.position="relative",this.editor.style.flexDirection="column",this.editor.style.fontFamily="Arial",this.editor.style.minHeight="auto",this.editor.style.maxHeight="auto",this.editor.style.maxWidth="100%",this.options.toolbarHide){this.toolbarSend.style.display="none",this.toolbarOptionsGroup.style.display="none";var o=this.body.onfocus;this.body.onfocus=function(){o&&o(),e.overflow(),e.toolbarSlideUp()};var n=this.body.onblur;this.body.onblur=function(){n&&n(),e.overflow(),setTimeout((function(){document.activeElement!==e.body&&document.activeElement!==e.linkMenu.querySelector("input")&&document.activeElement!==e.imageMenu.querySelectorAll("input")[0]&&document.activeElement!==e.imageMenu.querySelectorAll("input")[1]&&document.activeElement!==e.imageMenu.querySelectorAll("input")[2]&&e.toolbarSlideDown()}),2e3)}}this.toolbarOptions.forEach((function(t){t.style.cursor="pointer",t.style.userSelect="none";var o=t.onclick;t.onclick=function(n){e.body.focus();var i=t.id.split("-")[1];switch(i){case"insertOrderedList":case"insertUnorderedList":document.execCommand("indent",!0),document.execCommand(i,!0);break;case"attachment":var l=document.createElement("input");l.style.display="none",l.type="file",l.click(),l.onchange=function(t){return e.attachFile(l.files[0])};break;case"link":"true"===e.linkMenu.dataset.active?e.closeLinkMenu():(e.openLinkMenu(),e.range=e.getRange(),e.linkMenu.querySelector("input").focus());break;case"image":"true"===e.imageMenu.dataset.active?e.closeImageMenu():(e.openImageMenu(),e.range=e.getRange(),e.imageMenu.querySelector("input").focus());break;default:document.execCommand(i,!0)}o&&o()}})),this.editor.getcontent=function(){return e.getContent()},this.editor.getrange=function(){return e.getRange()},this.editor.appendChild(this.toolbar),this.editor.appendChild(this.body),this.editor.appendChild(this.linkMenu),this.editor.appendChild(this.imageMenu),this.editor.appendChild(this.metaDataSection),this.editor.appendChild(this.filesSection),this.options.toolbarBottom&&(this.editor.removeChild(this.toolbar),this.editor.append(this.toolbar))}},{key:"toolbarSlideUp",value:function(){var t=this,e=this.toolbar.offsetHeight,o=setInterval((function(){e>=40?(t.options.onToolbarSend&&(t.toolbarSend.style.display="flex"),t.toolbarOptionsGroup.style.display="flex",clearInterval(o)):(e++,t.toolbar.style.minHeight="".concat(e,"px"))}),5)}},{key:"toolbarSlideDown",value:function(){var t=this;this.options.onToolbarSend&&(this.toolbarSend.style.display="none"),this.toolbarOptionsGroup.style.display="none";var e=40,o=setInterval((function(){0===e?clearInterval(o):(e--,t.toolbar.style.minHeight="".concat(e,"px"))}),5)}},{key:"initToolbar",value:function(){var t=this,n=document.createElement("div");this.toolbarOptionsGroup=document.createElement("div");var i=Object.keys(this.optionGroups);n.classList.add("toolbar"),n.style.display="flex",n.style.justifyContent="space-between",n.style.alignItems="center",n.style.flexWrap="wrap",n.style.minHeight=this.options.toolbarHide?"0":"40px",n.style.position="relative",this.toolbarOptionsGroup.classList.add("toolbar-options"),this.toolbarOptionsGroup.style.margin="0 10px",this.toolbarOptionsGroup.style.display=this.options.toolbarHide?"none":"flex",i.forEach((function(e){var o=document.createElement("div");o.classList.add("toolbar-menu"),o.id="menu-".concat(e),o.appendChild(t.constructSVG(t.optionGroups[e].menu)),t.toolbarOptionsGroup.appendChild(o);var n=document.createElement("div");n.classList.add("toolbar-group"),n.id="group-".concat(e),t.options.toolbarOptions.forEach((function(o){var i=t.optionGroups[e].group.filter((function(t){return t[o]}))[0];if(i){var l=i[o],r=t.constructSVG(l);r.id="toolbar-".concat(o),r.style.margin="0 10px",n.appendChild(r)}})),t.toolbarOptionsGroup.appendChild(n)}));var l=this.options.toolbarOptions.filter((function(t){return"object"===o(t)}));l.length>0&&(this.customToolbarMenu=document.createElement("div"),this.customToolbarMenu.classList.add("toolbar-menu"),this.customToolbarMenu.id="menu-custom",this.customToolbarMenu.appendChild(this.constructSVG({viewBox:"0 0 1792 1792",d:"M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z"})),this.toolbarOptionsGroup.appendChild(this.customToolbarMenu),this.customToolbarGroup=document.createElement("div"),this.customToolbarGroup.classList.add("toolbar-group"),this.customToolbarGroup.id="group-custom",l.forEach((function(e){var o=e.icon,n=e.handler,i=t.constructSVG(o);i.id="toolbar-customOption",i.style.margin="0 10px",i.onclick=function(){return n()},t.customToolbarGroup.appendChild(i)})),this.toolbarOptionsGroup.appendChild(this.customToolbarGroup)),n.appendChild(this.toolbarOptionsGroup);var r=document.createElement("div");r.id="toolbar-send",r.style.display="none",r.style.color="#fff",r.style.backgroundColor="#5cb85c",r.style.minHeight=this.options.toolbarHide?"40px":this.toolbar.style.minHeight,r.style.width="50px",r.style.textAlign="center",r.style.justifyContent="center",r.style.alignContent="center",r.style.alignItems="center",r.style.cursor="pointer",r.style.border="1px solid #4cae4c",r.style.alignSelf="flex-end",this.options.onToolbarSend&&(r.onclick=function(){return t.options.onToolbarSend()}),this.options.onToolbarSend&&!this.options.toolbarHide&&(r.style.display="flex"),r.onmouseenter=function(){return r.style.backgroundColor="#4cae4c"},r.onmouseleave=function(){return r.style.backgroundColor="#5cb85c"};var a=this.constructSVG({viewBox:"0 0 1792 1792",d:"M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z"});return a.querySelector("path").setAttribute("fill","#fff"),r.appendChild(a),n.appendChild(r),this.toolbarOptions=n.querySelectorAll("span"),this.toolbarGroups=e(n.getElementsByClassName("toolbar-group")),this.toolbarMenus=e(n.getElementsByClassName("toolbar-menu")),this.toolbarSend=n.querySelector("#toolbar-send"),this.toolbarMenus.push(this.customToolbarMenu),this.toolbarGroups.push(this.customToolbarGroup),this.toolbarGroups.forEach((function(e){if(e&&e.children.length<1){var o=e.id.split("-")[1];t.toolbarMenus.filter((function(t){return t.id.split("-")[1]===o}))[0].remove()}})),n}},{key:"initBody",value:function(){var t=this,e=document.createElement("div");if(e.classList.add("body"),e.contentEditable="true",e.style.outline="none",e.style.padding="10px 20px",e.style.height=this.editor.style.height,e.style.minHeight=this.editor.style.minHeight,e.style.maxHeight=this.editor.style.maxHeight,this.options.placeholder){var o=document.createElement("p");o.id="placeholder-node",o.style.color="#5f6368",o.textContent=this.options.placeholder,e.append(o);var n=e.onfocus;e.onfocus=function(){n&&n(),e.querySelector("#placeholder-node")===o&&t.clearContent()};var i=e.onblur;e.onblur=function(){i&&i(),""===t.getTextContent()&&e.append(o)}}return e.onpaste=function(e){var o;if(e.clipboardData.files.length>0&&e.clipboardData.files[0].type.includes("image")&&(o=e.clipboardData.files[0],new Promise((function(t,e){var n=new FileReader;n.readAsDataURL(o),n.onload=function(){return t(n.result)},n.onerror=function(t){return e(t)}}))).then((function(e){document.execCommand("insertImage",!0,e),t.options.uploadOnPaste&&t.attachFile(function(t,e){for(var o=t.split(","),n=o[0].match(/:(.*?);/)[1],i=atob(o[1]),l=i.length,r=new Uint8Array(l);l--;)r[l]=i.charCodeAt(l);var a=new File([r],e,{type:n});return new File([r],"".concat(a.name,".").concat(a.type.split("/").pop()),{type:a.type})}(e,"pastedimage")),t.overflow()})),t.options.sanitizePaste&&e.clipboardData.types.includes("text/html")){var n;e.preventDefault();for(var i=0;i<e.clipboardData.items.length;i++){var l=e.clipboardData.items[i];"text/html"===l.type&&(n=l)}n&&n.getAsString((function(e){var o=t.getRange();o.insertNode(t.scrubHTML(e)),o.collapse()}))}e.clipboardData.items.length>0&&"text/plain"===e.clipboardData.items[0].type&&e.clipboardData.items[0].getAsString((function(e){t.options.metaUrl&&t.validURL(e)&&t.getMeta(e).then((function(e){var o=e.url,n=e.title,i=e.image,l=e.description;o&&n&&i&&t.createMetaDataElement(o,i,n,l)}))})),t.overflow()},e}},{key:"initLinkMenu",value:function(){var t=this,e=document.createElement("div"),o=document.createElement("div"),n=document.createElement("button"),i=document.createElement("p"),l=document.createElement("input");return e.id="link-menu",n.textContent="Insert Link",i.textContent="Web Address",l.type="text",i.style.margin="8px 10px 8px 0",i.style.fontSize="14px",n.style.cursor="pointer",e.dataset.active="false",e.style.display="none",e.style.position="absolute",e.style.right="10px",e.style.bottom="10px",e.style.backgroundColor="#fff",e.style.border="2px solid #ddd",e.style.padding="10px 20px",e.style.zIndex="1000",i.style.width="100%",i.style.textAlign="right",i.style.marginRight="10px",l.style.outline="none",l.style.padding="0 5px",l.placeholder="Insert a Link",o.style.display="flex",o.style.justifyContent="space-between",o.style.margin="5px 0",n.style.float="right",n.style.padding="6px 12px",n.style.border="1px solid #4cae4c",n.style.backgroundColor="#5cb85c",n.style.fontSize="14px",n.style.color="#fff",n.style.outline="none",n.onmouseenter=function(){return n.style.backgroundColor="#4cae4c"},n.onmouseleave=function(){return n.style.backgroundColor="#5cb85c"},n.onclick=function(e){var o=l.value;if(o){window.getSelection().removeAllRanges(),window.getSelection().addRange(t.range),document.execCommand("createLink",!0,o),t.options.metaUrl&&t.validURL(o)&&t.getMeta(o).then((function(e){var o=e.url,n=e.image,i=e.title,l=e.description;o&&n&&i&&t.createMetaDataElement(o,n,i,l)}));var n=t.body.querySelectorAll("a");n[n.length-1].contentEditable="false",l.value="",t.toolbar.querySelector("#toolbar-link").onclick()}else t.body.focus(),t.closeLinkMenu()},o.appendChild(i),o.appendChild(l),e.appendChild(o),e.appendChild(n),e}},{key:"initImageMenu",value:function(){var t=this,e=document.createElement("div"),o=document.createElement("div"),n=document.createElement("button"),i=document.createElement("p"),l=document.createElement("input");e.id="image-menu",n.textContent="Insert Image",i.textContent="Image URL",l.type="text",i.style.margin="8px 10px 8px 0",i.style.fontSize="14px",n.style.cursor="pointer",e.dataset.active="false",e.style.display="none",e.style.position="absolute",e.style.right="10px",e.style.bottom="10px",e.style.backgroundColor="#fff",e.style.border="2px solid #ddd",e.style.padding="10px 20px",e.style.zIndex="1000",i.style.width="100%",i.style.textAlign="right",i.style.marginRight="10px",l.style.outline="none",l.style.padding="0 5px",l.placeholder="Insert a Link",o.style.display="flex",o.style.justifyContent="space-between",o.style.margin="5px 0",n.style.float="right",n.style.padding="6px 12px",n.style.border="1px solid #4cae4c",n.style.backgroundColor="#5cb85c",n.style.fontSize="14px",n.style.color="#fff",n.style.outline="none",n.onmouseenter=function(){return n.style.backgroundColor="#4cae4c"},n.onmouseleave=function(){return n.style.backgroundColor="#5cb85c"},o.appendChild(i),o.appendChild(l);var r=o.cloneNode(!0),a=r.querySelector("input"),s=r.querySelector("p");a.placeholder="Image Height",s.textContent="Height";var c=o.cloneNode(!0),d=c.querySelector("input"),u=c.querySelector("p");return d.placeholder="Image Height",u.textContent="Width",n.onclick=function(e){var o=l.value,n=a.value,i=d.value;if(o){window.getSelection().removeAllRanges(),window.getSelection().addRange(t.range),document.execCommand("insertImage",!0,o);var r=t.body.querySelectorAll("img");r[r.length-1].style.height="".concat(n,"px"),r[r.length-1].style.width="".concat(i,"px"),a.value="",d.value="",l.value="",t.toolbar.querySelector("#toolbar-image").onclick()}else t.body.focus(),t.closeImageMenu()},e.appendChild(r),e.appendChild(c),e.appendChild(o),e.appendChild(n),e}},{key:"initMetaDataSection",value:function(){var t=document.createElement("div");return t.classList.add("metadata-section"),t.style.display="flex",t.style.flexWrap="wrap",t.style.zIndex="500",t}},{key:"initFilesSection",value:function(){var t=this,e=document.createElement("div");return e.classList.add("files-section"),e.style.display="flex",e.style.flexWrap="wrap",e.style.zIndex="500",this.body.ondragenter=function(e){t.body.style.backgroundColor="#ddd"},this.body.ondragleave=function(e){t.body.style.backgroundColor="inherit"},this.body.ondrop=function(e){t.body.style.backgroundColor="inherit",e.preventDefault();var o=e.dataTransfer.files&&e.dataTransfer.files[0];t.attachFile(o)},this.editor.getfiles=function(){return t.getFiles()},e}},{key:"createFileElement",value:function(t,e){var o=this,n=document.createElement("div"),i=document.createElement("h4"),l=document.createElement("p"),r=document.createElement("p");i.textContent=t,l.textContent=e,r.textContent="X",n.dataset.fileindex=this.files.length-1,n.style.width="100%",n.style.display="flex",n.style.flexDirection="column",n.style.margin="10px",n.style.position="relative",i.style.fontWeight="bold",i.style.margin="0",l.style.fontSize="12px",l.style.margin="2px 0",r.style.margin="0",r.style.userSelect="none",r.style.color="black",r.style.position="absolute",r.style.right="5px",r.style.top="-5px",r.style.cursor="pointer",r.style.backgroundColor="#fff",r.onmouseenter=function(){return r.style.color="#ddd"},r.onmouseleave=function(){return r.style.color="black"},r.onclick=function(t){o.files.splice(t.target.parentElement.dataset.fileindex,1),t.target.parentElement.remove()},n.appendChild(i),n.appendChild(l),n.appendChild(r),this.filesSection.appendChild(n),this.editor.getfiles=function(){return o.getFiles()}}},{key:"createMetaDataElement",value:function(t,e,o,n){var i=document.createElement("div"),l=document.createElement("a"),r=document.createElement("img"),a=document.createElement("div"),s=document.createElement("h4"),c=document.createElement("p"),d=document.createElement("span");l.href=t,r.src=e,s.textContent=o,c.textContent=n,d.textContent="X",l.target="blank",i.style.width="100%",i.style.display="flex",i.style.margin="10px",i.style.position="relative",r.style.marginRight="10px",r.style.height="50px",r.style.width="75px",s.style.fontWeight="bold",s.style.margin="0",c.style.margin="0",d.style.userSelect="none",d.style.color="black",d.style.position="absolute",d.style.right="5px",d.style.top="-5px",d.style.cursor="pointer",d.style.backgroundColor="#fff",d.onmouseenter=function(){return d.style.color="#ddd"},d.onmouseleave=function(){return d.style.color="black"},d.onclick=function(t){return t.target.parentElement.remove()},l.appendChild(r),a.appendChild(s),a.appendChild(c),i.appendChild(l),i.appendChild(a),i.appendChild(d),this.metaDataSection.appendChild(i)}},{key:"constructSVG",value:function(t){var e=t.viewBox,o=t.d,n=this.options.toolbarOptionFillColor?this.options.toolbarOptionFillColor:"#333",i=document.createElement("span"),l='<svg width="'.concat("16",'" height="').concat("16",'" viewBox="').concat(e,'" xmlns="').concat("http://www.w3.org/2000/svg",'">'),r='<path fill="'.concat(n,'" d="').concat(o,'"/>');return i.innerHTML="".concat(l).concat(r,"</svg>"),i}},{key:"initResponsive",value:function(){var t=this,e=this;if(this.options.minimal)this.toolbarMenus.forEach((function(t){return t&&(t.style.display="none")})),this.toolbar.querySelector("#toolbar-strikethrough").style.display="none",this.toolbar.querySelector("#toolbar-image").style.display="none",this.toolbar.querySelector("#toolbar-insertOrderedList").style.display="none",this.toolbar.querySelector("#group-textAlign").style.display="none";else{var o=function(t){e.toolbarGroups.forEach((function(e){e&&(e.dataset.open="false",e.style.display=t?"none":"block",e.style.position=t?"absolute":"relative",e.style.bottom=t?"5px":"inherit",e.style.right=t?"5px":"inherit",e.style.backgroundColor=t?"#fff":"inherit",e.style.border=t?"2px solid #ddd":"none")})),e.toolbarMenus.forEach((function(o){o&&(o.style.padding="0 10px",o.style.cursor="pointer",o.style.userSelect="none",o.style.display=t?"block":"none",o.onclick=function(t){var n;"false"===(n=e.toolbar.querySelector("#group-".concat(o.id.split("-")[1]))).dataset.open?(e.toolbarGroups.forEach((function(t){t&&"true"===t.dataset.open&&(t.style.display="none",t.dataset.open="false")})),n.style.display="block",n.style.padding="5px",n.dataset.open="true"):(n.style.display="none",n.dataset.open="false"),e.body.focus()})}))},n=function(){i=window.matchMedia("(max-width: 700px)").matches,o(i)},i=window.matchMedia("(max-width: 700px)").matches;n(),window.onresize=function(){t.toolbarGroups.forEach((function(t){return t&&(t.style.padding="0")})),t.closeLinkMenu(),t.closeImageMenu(),n()}}}},{key:"initOverflow",value:function(){var t=this,e=this.body.onfocus;this.body.onfocus=function(){e&&e(),t.overflow()};var o=this.body.onblur;this.body.onblur=function(){o&&o(),t.overflow()},this.body.onkeypress=function(){return t.overflow()}}},{key:"getFiles",value:function(){return this.files}},{key:"getContent",value:function(){return this.body.querySelector("#placeholder-node")?"":this.body.innerHTML}},{key:"getRange",value:function(){return window.getSelection().getRangeAt(0)}},{key:"getMeta",value:function(t){return fetch(this.options.metaUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({targetUrl:t})}).then((function(t){return t.json()}))}},{key:"validURL",value:function(t){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)}},{key:"overflow",value:function(){var t=this.body;t.scrollHeight>t.clientHeight?t.style.overflowY="scroll":t.style.overflowY="hidden",t.scrollWidth>t.clientWidth?t.style.overflowX="scroll":t.style.overflowX="hidden"}},{key:"formatBytes",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===t)return"0 Bytes";var o=1024,n=e<0?0:e,i=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],l=Math.floor(Math.log(t)/Math.log(o));return parseFloat((t/Math.pow(o,l)).toFixed(n))+" "+i[l]}},{key:"validateFile",value:function(t){var e=t.type.split("/").pop();return this.options.extensions.includes(".".concat(e))}},{key:"attachFile",value:function(t){this.validateFile(t)?(this.files.push(t),this.createFileElement(t.name,this.formatBytes(t.size))):this.fileInvalid()}},{key:"fileInvalid",value:function(){var t=this;this.body.style.transition="background-color .5s",this.body.style.backgroundColor="#d9534f",setTimeout((function(){t.body.style.backgroundColor="inherit",setTimeout((function(){return t.body.style.transition="none"}),500)}),500)}},{key:"openLinkMenu",value:function(){this.closeImageMenu(),this.linkMenu.dataset.active="true",this.linkMenu.style.display="block"}},{key:"openImageMenu",value:function(){this.closeLinkMenu(),this.imageMenu.dataset.active="true",this.imageMenu.style.display="block"}},{key:"closeLinkMenu",value:function(){this.linkMenu.dataset.active="false",this.linkMenu.style.display="none"}},{key:"closeImageMenu",value:function(){this.imageMenu.dataset.active="false",this.imageMenu.style.display="none"}},{key:"setContent",value:function(t){this.clearContent(),this.body.innerHTML=t}},{key:"clearContent",value:function(){this.body.innerHTML=""}},{key:"getTextContent",value:function(){return this.body.querySelector("#placeholder-node")?"":this.body.textContent}},{key:"scrubHTML",value:function(t){var e=document.createElement("div"),o=document.createElement("div");return e.innerHTML=t,o.append(document.createTextNode(e.textContent)),o}}])&&n(s.prototype,c),d&&n(s,d),t}();t.default=s})?n.apply(e,i):n)||(t.exports=l)}])}));