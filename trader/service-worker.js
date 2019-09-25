/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/trader/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/trader/css/1.css","7ceb42172807b6de45b5e0f323907d9e"],["/trader/css/AccountSignupModal.css","77d39d3afdf766bedc163d5786273c4a"],["/trader/css/account.css","e1b51eb6d0ce8c4eebc0bd50214a998f"],["/trader/css/app.css","98606d9e89cbc1f79a386c327e335827"],["/trader/css/modals.css","e3ef2da170cc973aae275d757ad42688"],["/trader/css/mt5.css","28d548b49db1fdd4627313d4fcefe93d"],["/trader/css/notification-messages.css","1cf180aeaba0b301fa4beae7bb4175cc"],["/trader/css/reports.css","aad9a72dba759598e6ddcadf4927fed7"],["/trader/css/screen-small.css","48349e492b14246d49fe01c7d0edcd66"],["/trader/css/settings-chart.css","8dc3c2e4a5b9dea544bfa92417331506"],["/trader/css/smartcharts.css","3eafc9fcdd7360aa51ff947a90ca2da4"],["/trader/css/work-in-progress.css","2ef239dd9b16ce9761c7c8827c2479bd"],["/trader/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/trader/index.html","8551399f464916b6e528cbaf77b202f9"],["/trader/js/0.8732f203f900a3dfa18e.js","d8b9079dcad29812a4e0b65db3a8c89b"],["/trader/js/1.8732f203f900a3dfa18e.js","8185bc36f0ef78c36dfb6201c7f2436e"],["/trader/js/10.8732f203f900a3dfa18e.js","1db6378a552a848983b707acbeb15c3e"],["/trader/js/11.8732f203f900a3dfa18e.js","34b8ecc85e72903b356316a0135448e3"],["/trader/js/12.8732f203f900a3dfa18e.js","e14b2940b09f518286356db69143a5fd"],["/trader/js/13.8732f203f900a3dfa18e.js","ee11319729e7345ccfe74f8d6abd1ffb"],["/trader/js/14.8732f203f900a3dfa18e.js","e37ed2f4f01c18136bd7bef185951a31"],["/trader/js/15.8732f203f900a3dfa18e.js","7aeb89ae1a7c645ce4ce0eeb297c8c0b"],["/trader/js/16.8732f203f900a3dfa18e.js","7df81347ab10bb77e057cd2db6b2e8d4"],["/trader/js/17.8732f203f900a3dfa18e.js","2a3fd98d13c11ca30874844bd48c3e77"],["/trader/js/18.8732f203f900a3dfa18e.js","1bc3a19d1c2717e6f7404dfa6ee0c526"],["/trader/js/19.8732f203f900a3dfa18e.js","a913ca591c258e40308e051af96d55fa"],["/trader/js/2.8732f203f900a3dfa18e.js","72df220eb9ee0c4c20a4b4a8dce8c4cb"],["/trader/js/20.8732f203f900a3dfa18e.js","f47e69fc070e93b79dfaabdc66df12c2"],["/trader/js/21.8732f203f900a3dfa18e.js","d79729359ea422162af0d979a047effd"],["/trader/js/22.8732f203f900a3dfa18e.js","de0a90adfeddfe8707b52258877af7c5"],["/trader/js/23.8732f203f900a3dfa18e.js","067284fce2b22b8bcdf59f25523453de"],["/trader/js/24.8732f203f900a3dfa18e.js","44705dfcda1a825a2e44377f03ea9569"],["/trader/js/25.8732f203f900a3dfa18e.js","44b93d0b0c68e00157b1ea54ab5ffc11"],["/trader/js/26.8732f203f900a3dfa18e.js","ac5d76c849593c98fb6a2b912bb3e14a"],["/trader/js/27.8732f203f900a3dfa18e.js","8ac50a24759ea4b794df36ad0f117b7a"],["/trader/js/28.8732f203f900a3dfa18e.js","e91a0a255e7f516c1812182a8de09afb"],["/trader/js/29.8732f203f900a3dfa18e.js","199eb2b3fc8b518860e5e3c1755081db"],["/trader/js/3.8732f203f900a3dfa18e.js","41cf2fd52b31876027e20ee6fa612d1c"],["/trader/js/30.8732f203f900a3dfa18e.js","e3bae2551d95a1721e236904a358b082"],["/trader/js/31.8732f203f900a3dfa18e.js","642cf8d278025eab3ce168d18071b0cf"],["/trader/js/32.8732f203f900a3dfa18e.js","18fdb22c7597d89d138efb36e2d116b7"],["/trader/js/33.8732f203f900a3dfa18e.js","4e963fdce3b68ee8711b34fe5f2c0a83"],["/trader/js/34.8732f203f900a3dfa18e.js","861df5115fcd8ef9e7e8825261f3aa20"],["/trader/js/35.8732f203f900a3dfa18e.js","5f307da4a1d5144a7a5042ba62e7cd12"],["/trader/js/36.8732f203f900a3dfa18e.js","73bab6da3f814fbf812b848103fa6e59"],["/trader/js/37.8732f203f900a3dfa18e.js","86b9c6eab19d5eea2054483636dbc32c"],["/trader/js/38.8732f203f900a3dfa18e.js","3ba6a2860850e65fd2e9075fa828fd01"],["/trader/js/39.8732f203f900a3dfa18e.js","d9d4744e66500eb2e9870567a72622a4"],["/trader/js/4.8732f203f900a3dfa18e.js","2ad26dd3c9c76b5d1c14ea41f434cf93"],["/trader/js/40.8732f203f900a3dfa18e.js","f46479785470f086658e90059e5db9cd"],["/trader/js/404.8732f203f900a3dfa18e.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/trader/js/41.8732f203f900a3dfa18e.js","bbb787cc3eb7c42ecea826eddee6e5b1"],["/trader/js/42.8732f203f900a3dfa18e.js","995071a2f86d66a764cee3b13b03dfef"],["/trader/js/43.8732f203f900a3dfa18e.js","93e2b225b33298d99e94d7ecaf2de2df"],["/trader/js/44.8732f203f900a3dfa18e.js","b08ed60a8e3b4f8fe7520cd5fa36903b"],["/trader/js/45.8732f203f900a3dfa18e.js","24c2227bf6ecf7a6179c266ced3477ae"],["/trader/js/46.8732f203f900a3dfa18e.js","36fbfe6815e53aec1b5bbf2985b49a12"],["/trader/js/47.8732f203f900a3dfa18e.js","001f8b71fb6a277afec7b450e5f0fe89"],["/trader/js/48.8732f203f900a3dfa18e.js","c21d33f811b7bed86585a5a57c718369"],["/trader/js/49.8732f203f900a3dfa18e.js","f90de404a64b140e79f5257c58dad37f"],["/trader/js/5.8732f203f900a3dfa18e.js","9d5fa6014d84aec8dfb7a67eedbec0b9"],["/trader/js/50.8732f203f900a3dfa18e.js","e09261183ab46f1f5e06d1f69d73ac08"],["/trader/js/51.8732f203f900a3dfa18e.js","97fa0c79b0827c7342fc2c82be608b11"],["/trader/js/52.8732f203f900a3dfa18e.js","28ad2a9269b9a026d779b79dd6877be6"],["/trader/js/53.8732f203f900a3dfa18e.js","748669a1206fd0e5fc5cf230993d9c0b"],["/trader/js/54.8732f203f900a3dfa18e.js","d79e93982738849bcca907ceeabc3aad"],["/trader/js/55.8732f203f900a3dfa18e.js","0c9bfd42cca6c1b99323b12fa8ec1e46"],["/trader/js/56.8732f203f900a3dfa18e.js","ffaad3b3683f6e7d593616a6789df3f0"],["/trader/js/57.8732f203f900a3dfa18e.js","f8ab9a811345f606a41bbc461bfe6ada"],["/trader/js/58.8732f203f900a3dfa18e.js","eed00e9741f0ae50696d0a15682c755a"],["/trader/js/59.8732f203f900a3dfa18e.js","0dbbd61484481e2a3ae78e95230b40d9"],["/trader/js/6.8732f203f900a3dfa18e.js","26d31aeb9fd216e329976319a7aad745"],["/trader/js/60.8732f203f900a3dfa18e.js","35a6f389cefb9a6f7e71fc10a96746ee"],["/trader/js/61.8732f203f900a3dfa18e.js","a8effbb824ed1658eebac92453a7e42a"],["/trader/js/62.8732f203f900a3dfa18e.js","ea86ee863e9b4a5d842a3e870fc39e9e"],["/trader/js/63.8732f203f900a3dfa18e.js","53fab78c029f903b0eb211d87f2f58c3"],["/trader/js/64.8732f203f900a3dfa18e.js","5d3fda5a6697432afa96585bcac8ed76"],["/trader/js/65.8732f203f900a3dfa18e.js","4c0908abae46e6f021daef5f5d622e8a"],["/trader/js/66.8732f203f900a3dfa18e.js","69e5281e51c0da9363e1ace3260cc4a9"],["/trader/js/67.8732f203f900a3dfa18e.js","61b3a42237551dff51e40150bbfd173c"],["/trader/js/68.8732f203f900a3dfa18e.js","6bd2543617e68ffcff330c621bd9d143"],["/trader/js/69.8732f203f900a3dfa18e.js","6fafb2b4ad5d247f6499bb25f1f6557c"],["/trader/js/7.8732f203f900a3dfa18e.js","4b06e169829b0e103c1ea9c194c40388"],["/trader/js/70.8732f203f900a3dfa18e.js","ccc9f022a01715925f5b7087514f63df"],["/trader/js/71.8732f203f900a3dfa18e.js","ebae86f5a73cfa602cace47bafb81f51"],["/trader/js/72.8732f203f900a3dfa18e.js","b9260e43ad2902ad53322f0542fcaabb"],["/trader/js/73.8732f203f900a3dfa18e.js","78a1d3e2a7e785b89841b3384f7c7c3a"],["/trader/js/74.8732f203f900a3dfa18e.js","b89031c9fc4a3f5c34cdd5537eb563c3"],["/trader/js/75.8732f203f900a3dfa18e.js","31e9c1ef38edf7d009bd6a306a5ed634"],["/trader/js/76.8732f203f900a3dfa18e.js","055262e734408a8c24372be75f4f9391"],["/trader/js/77.8732f203f900a3dfa18e.js","ba796fda1855d61fc7dd218088e91bbb"],["/trader/js/78.8732f203f900a3dfa18e.js","33f4ad8775bc80d6c5fcca65a60df483"],["/trader/js/79.8732f203f900a3dfa18e.js","70585de76ab5c4da67aa264e286d501c"],["/trader/js/8.8732f203f900a3dfa18e.js","f6629aa5aee4c6e6653a4216d7269888"],["/trader/js/80.8732f203f900a3dfa18e.js","dc0fbb45fbf07df19c1bfdc073547761"],["/trader/js/81.8732f203f900a3dfa18e.js","5e9750547b98fb68e52c6223460182d1"],["/trader/js/82.8732f203f900a3dfa18e.js","b4beb2316056e655784d83e0a50c0df4"],["/trader/js/83.8732f203f900a3dfa18e.js","bf285872371c565882ae9f4cee47b217"],["/trader/js/84.8732f203f900a3dfa18e.js","64492f4d3b0e7cbf76985441ccc2dc46"],["/trader/js/85.8732f203f900a3dfa18e.js","cb0025b3e8d6ba2ca8829eefc508b757"],["/trader/js/86.8732f203f900a3dfa18e.js","98e91ea6c0674a452955cacd84a6eaf8"],["/trader/js/87.8732f203f900a3dfa18e.js","a79bd94d22bc7eeb339ef092754d5666"],["/trader/js/88.8732f203f900a3dfa18e.js","b033a7729314ea2cfa83648cf43e79ce"],["/trader/js/89.8732f203f900a3dfa18e.js","4c3ac5463da3739906c686e84d052892"],["/trader/js/9.8732f203f900a3dfa18e.js","f10b4b659dc06cd0621b404f277946f0"],["/trader/js/90.8732f203f900a3dfa18e.js","495cbf6fd15cb56829ecb4d581131d92"],["/trader/js/91.8732f203f900a3dfa18e.js","30aa98cf83a1cf6a022a3ad875c1f799"],["/trader/js/AccountSignupModal.8732f203f900a3dfa18e.js","3f9cdeed6b78255df05f0841062a0b39"],["/trader/js/account-info.8732f203f900a3dfa18e.js","b98cfb563949d25f5eac61ebca5b6078"],["/trader/js/account.8732f203f900a3dfa18e.js","23b0939dea4fe8d0364f6899eecf98a4"],["/trader/js/contract.8732f203f900a3dfa18e.js","5678dda6d04cb12e9415ab73281b8fe2"],["/trader/js/modals.8732f203f900a3dfa18e.js","72e3c64b2c13d4e2a79baf59537f27c3"],["/trader/js/mt5.8732f203f900a3dfa18e.js","9250d3c8f96e26d4d88c426f8117f04c"],["/trader/js/notification-messages.8732f203f900a3dfa18e.js","27594c506ac828f2ab8f3b0641fd343d"],["/trader/js/push-notification.8732f203f900a3dfa18e.js","0b12df6e5ba12101d9d791943e5994ca"],["/trader/js/reports.8732f203f900a3dfa18e.js","3ce2ac1c893b7ec0f9c99c4424375b6e"],["/trader/js/screen-small.8732f203f900a3dfa18e.js","2a5e918f77b02d51f1ca71af6f442c58"],["/trader/js/settings-chart.8732f203f900a3dfa18e.js","527620c1a012a793f9ff146a91fd4869"],["/trader/js/settings-language.8732f203f900a3dfa18e.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/trader/js/settings-theme.8732f203f900a3dfa18e.js","420614688fb778ae8320fe9d295b21cf"],["/trader/js/smartcharts/chartiq-1bc597.smartcharts.js","5b8745e14e4ba2dbf9dce796b69f27b2"],["/trader/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/trader/js/smartcharts/de-po-0c1385.smartcharts.js","5a1e3cfccfb638c33c2f5d66faca3eeb"],["/trader/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/trader/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/trader/js/smartcharts/es-po-9f965b.smartcharts.js","cad3ec523aa2676ff28d5fd9562293a1"],["/trader/js/smartcharts/fr-po-32dce3.smartcharts.js","23e4180e68f49df1797131801cee12bc"],["/trader/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/trader/js/smartcharts/html2canvas-a979bf.smartcharts.js","b4a971996facd8b3fb56255d9db5968f"],["/trader/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/trader/js/smartcharts/id-po-684adf.smartcharts.js","f93136258ba3abe61664cafb7e109193"],["/trader/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/trader/js/smartcharts/it-po-6fb521.smartcharts.js","7bcd6576fdba2d63bf7ce1f387c71797"],["/trader/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/trader/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/trader/js/smartcharts/nl-po-dbc059.smartcharts.js","5f0bbcbda9c2655ecb1033afbc324cd6"],["/trader/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/trader/js/smartcharts/pl-po-ddb25d.smartcharts.js","9c1ec02f795276ab3c106a52e99af8cc"],["/trader/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/trader/js/smartcharts/pt-po-94d77b.smartcharts.js","a5c20ad9ea460a09a0f5615d3c1b162f"],["/trader/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/trader/js/smartcharts/ru-po-afea21.smartcharts.js","29869f8a0d1329b458944e3fcc6cd54a"],["/trader/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/trader/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/trader/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/trader/js/smartcharts/th-po-f9221a.smartcharts.js","8a546ad5e35758d391a1b394c959a8d7"],["/trader/js/smartcharts/vendors~resize-observer-polyfill-358f59.smartcharts.js","7cc03f6cea9d826c6829915288d857c5"],["/trader/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/trader/js/smartcharts/vi-po-47a1c7.smartcharts.js","7c2e37e4dbded9406787b7702a469871"],["/trader/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/trader/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/trader/js/smartcharts/zh_cn-po-e6a513.smartcharts.js","962ee83946ae9e5ec1069aa9baa56dfd"],["/trader/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/trader/js/smartcharts/zh_tw-po-48b237.smartcharts.js","2c4a29f445e75eb7892e1fbcf592e915"],["/trader/js/toggle-menu-drawer.8732f203f900a3dfa18e.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/trader/js/two-month-picker.8732f203f900a3dfa18e.js","7ffcebff91118e847097df8afcb893b7"],["/trader/js/work-in-progress.8732f203f900a3dfa18e.js","694c057ec7838bb4b68034d289016484"],["/trader/manifest.json","88f3d9a57f42f1dc5cb5e9c1ec02c8f3"],["/trader/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/trader/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/trader/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/trader/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/trader/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/trader/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/trader/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/trader/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/trader/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/trader/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/trader/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/trader/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/trader/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/trader/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/trader/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/trader/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/trader/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/trader/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/trader/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/trader/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/trader/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/trader/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/trader/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/trader/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/trader/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/trader/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/trader/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/trader/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/trader/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/trader/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/trader/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/trader/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/trader/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/trader/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/trader/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/trader/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/trader/robots.txt","6978a616c585d03cb5b542a891995efb"],["/trader/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/trader/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







