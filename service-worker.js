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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","5e1d908c30a3f828d6794a3dc7e9dc7b"],["/css/deriv-components.css","7e7e0c92ef9e6d5ea08b4cb675a97ac3"],["/css/digits.css","1419ea07bf9c9264cb142ce95d47171a"],["/css/modals.css","a3ada3ef9ab9912f1f3b17ded2c4fdb2"],["/css/notification-messages.css","30c5f2d725b0ba1d8d70246ac9d6f545"],["/css/reports.css","113d3dd3e7a75253136cd029a46beea9"],["/css/screen-small.css","bf00b73794f7526c5c4ac49b7472ae83"],["/css/smartcharts.css","74dd999d70b54329e3e3bd426b940638"],["/css/work-in-progress.css","124f574d47a7d3d3f72c38068dc644ff"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","542508ba55c9030c64e2e5fa6e58a158"],["/js/0.526233f20e430b524368.js","d8b9079dcad29812a4e0b65db3a8c89b"],["/js/1.526233f20e430b524368.js","d5b227514040f9243fd1bd65d8f4d25e"],["/js/10.526233f20e430b524368.js","751de4c79083a2ec085f5657e7a3be84"],["/js/11.526233f20e430b524368.js","b9f3f7bd369081d485c5a505f295c43c"],["/js/12.526233f20e430b524368.js","4240972ecd2a9c60f7a861349bda3abc"],["/js/13.526233f20e430b524368.js","27c08e553da23f76336673f969868de6"],["/js/14.526233f20e430b524368.js","cc88ae1128218b4d7ffb73a9a5edc5af"],["/js/15.526233f20e430b524368.js","98f03eb56745ceaf0bd1a093f33e98c2"],["/js/16.526233f20e430b524368.js","dfeaa69a837d4f00802b07fcd9cc0abd"],["/js/17.526233f20e430b524368.js","9289b22ae19e0d3a0f7046c462a601bd"],["/js/18.526233f20e430b524368.js","0a45feb945f313a0e1fa016842c030bb"],["/js/19.526233f20e430b524368.js","f8c91b6f5020685476adfcb81387882d"],["/js/2.526233f20e430b524368.js","d6729726c1d4fbfdfd85b12620e52515"],["/js/20.526233f20e430b524368.js","4264b25b2877ac70f0d5a0e024eb09de"],["/js/21.526233f20e430b524368.js","8928e4241bdaadc6d199fb47e10c66f5"],["/js/22.526233f20e430b524368.js","ef5bdfa6d80889af34286ce2171bd3e1"],["/js/23.526233f20e430b524368.js","16a0788f9067ca749b18c5c364faeff8"],["/js/24.526233f20e430b524368.js","2e326919939a7c1f6baf7fce4f937a51"],["/js/25.526233f20e430b524368.js","b67f3e192d6414c8a0daa7f5e8bdf439"],["/js/26.526233f20e430b524368.js","96046d2e1d1747741274b983a190f9e9"],["/js/27.526233f20e430b524368.js","f84499093749802ded54d4f2ec41f046"],["/js/28.526233f20e430b524368.js","319878cda9e494ab160662c8f50cecdc"],["/js/29.526233f20e430b524368.js","78f53983e05c2a95a33577c05176f7d7"],["/js/3.526233f20e430b524368.js","98b3557e58820d8ac01a036b28ad9f46"],["/js/30.526233f20e430b524368.js","83c2dcbafc186b664a6d01d8dd43b029"],["/js/31.526233f20e430b524368.js","2f4ef155d47e4581151f1e684d1f171f"],["/js/32.526233f20e430b524368.js","03da3fe7fdcadde6e01102bcb1c613c5"],["/js/33.526233f20e430b524368.js","998c1ffa642a90b8641b6f55772040e0"],["/js/34.526233f20e430b524368.js","c70e0c81cc95f1abb098ab39e711dc34"],["/js/35.526233f20e430b524368.js","9fc599df25c8e85f807c1bc24a1b2bc5"],["/js/36.526233f20e430b524368.js","102db0aede7c7df83f17907141f50e93"],["/js/37.526233f20e430b524368.js","0daa79c8a88d1a8e42d0e989b585f84f"],["/js/38.526233f20e430b524368.js","271f10f907394e9a3b42218e279d891f"],["/js/39.526233f20e430b524368.js","cc3291623f9565fa3edf2cd29b7584a2"],["/js/4.526233f20e430b524368.js","0b3bc2d1d6bad7e4f35e2045032ff355"],["/js/40.526233f20e430b524368.js","443d39d07665f7b19e006fffe326d7cd"],["/js/404.526233f20e430b524368.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/js/41.526233f20e430b524368.js","2c47e3542c94d08cb5a95577599035ea"],["/js/42.526233f20e430b524368.js","5f81fa9f1dd6c9f777654777c6defc95"],["/js/43.526233f20e430b524368.js","6e5c226e729aa712995c1c22bf49b9f9"],["/js/44.526233f20e430b524368.js","5af50d6a09dd5e77a5c202629713727e"],["/js/45.526233f20e430b524368.js","0a01cfded9c36b4f72da7664014ce09a"],["/js/46.526233f20e430b524368.js","9d9f6fb1066c48e91a5d9ea8ad31f9d7"],["/js/47.526233f20e430b524368.js","741ecc0487db5eb989fc062787d6a458"],["/js/48.526233f20e430b524368.js","bd966d5920c6ce68bdd0677f5b854ee9"],["/js/49.526233f20e430b524368.js","1ca88e80bcef38d15f6e3dd1d2d3103b"],["/js/5.526233f20e430b524368.js","488e6b8594547e2b3e733cb70dbc0a99"],["/js/50.526233f20e430b524368.js","263d5fcbfc6d17e77110e4e7461ac78a"],["/js/51.526233f20e430b524368.js","fc550d6c5479f8ed1d51aa86670cf4fe"],["/js/52.526233f20e430b524368.js","3e5188f11a89583fb257c7856d929f13"],["/js/53.526233f20e430b524368.js","1c899f944c48bb110b292171b8067e69"],["/js/54.526233f20e430b524368.js","cbdfcd85efbb776d69bfa2467787713b"],["/js/55.526233f20e430b524368.js","a1bf690cfefc9168f2134a2a7b88d5d9"],["/js/56.526233f20e430b524368.js","2a9ffb15b29c95b9bac0640bb758ceac"],["/js/57.526233f20e430b524368.js","9094752bbb36fe5ced75864e1f42125e"],["/js/58.526233f20e430b524368.js","ffe8f70bb0bef59dfac08f2db58b8884"],["/js/59.526233f20e430b524368.js","8638dd305948462e9770ec205d3bc7bf"],["/js/6.526233f20e430b524368.js","8bcdab92cb6767f385f2aecbfe67596f"],["/js/60.526233f20e430b524368.js","2f4d38417a80f1ab3300e8047fc6ae1f"],["/js/61.526233f20e430b524368.js","217fea5ad8cc4471ab832e8e5879f44a"],["/js/62.526233f20e430b524368.js","f071efe7b8ca7779fef9b1ab2d328274"],["/js/63.526233f20e430b524368.js","d89423206da7b7dbbc4b5809ed63a58d"],["/js/64.526233f20e430b524368.js","309e7361b118f6f0d2d518c9ba513836"],["/js/65.526233f20e430b524368.js","424489aa42a35c592ddd79710c761dfe"],["/js/66.526233f20e430b524368.js","6c22563c660803881edd01a8259e8697"],["/js/67.526233f20e430b524368.js","c43ef927a028de4555136ffafd0ea983"],["/js/68.526233f20e430b524368.js","5581c3fe47165dda8b428413b861f041"],["/js/69.526233f20e430b524368.js","43529713a13db3a49e0e051b83de61c6"],["/js/7.526233f20e430b524368.js","ee4646876d58a5d754e25c67a0a830c2"],["/js/70.526233f20e430b524368.js","1c807f99a2d51ff454b1aec8a5bb03e2"],["/js/8.526233f20e430b524368.js","10670c38175d043949136ed9e0a01222"],["/js/9.526233f20e430b524368.js","9a1d4afddfe336fe59dbeb13c706e606"],["/js/account-info.526233f20e430b524368.js","c73ad94793de10d64fc1328a615b0f98"],["/js/contract.526233f20e430b524368.js","352795aade55fc64547e501afc320af5"],["/js/default~open_position~1833eefb.526233f20e430b524368.js","f68d43de978299d5d6d63ad1bcf49bd1"],["/js/digits.526233f20e430b524368.js","59cde3c4f5ebb6037af4b31459e11f8c"],["/js/info-box.526233f20e430b524368.js","d875b810eca8d18514f47976f1f3cb25"],["/js/modals.526233f20e430b524368.js","e4a7b220e15952a2d5fc1376785ae59f"],["/js/notification-messages.526233f20e430b524368.js","f9fa1e1fd9591e927fe0d5dcc9e6b9ad"],["/js/open_positions.526233f20e430b524368.js","1fc1b7b908937b9cd37fa021895fed7b"],["/js/profit_table.526233f20e430b524368.js","d1779b49afa57da1a153b7f2e23d3175"],["/js/push-notification.526233f20e430b524368.js","0b12df6e5ba12101d9d791943e5994ca"],["/js/reports.526233f20e430b524368.js","2a389a85ed4c3cd67303ecbb0a6c4061"],["/js/screen-small.526233f20e430b524368.js","192ebe3c28077f8af194da612b0714b9"],["/js/settings-chart.526233f20e430b524368.js","affa35d00136723a3026be5b30c0c299"],["/js/settings-language.526233f20e430b524368.js","0c731935668f644467cefdc4e9b95754"],["/js/settings-theme.526233f20e430b524368.js","d4f189f61a0ee6a651bcc9d7e314f25d"],["/js/smart_chart.526233f20e430b524368.js","0bd151447fb09ea7ea7570c5835f6351"],["/js/smartcharts/chartiq-5871ca.smartcharts.js","5972d27f59f2e8942c3e0217f7fac2c7"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-0c1385.smartcharts.js","5a1e3cfccfb638c33c2f5d66faca3eeb"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-11debc.smartcharts.js","eb8f2698b9a18a06d6abc4ab54217f1f"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/es-po-9f965b.smartcharts.js","cad3ec523aa2676ff28d5fd9562293a1"],["/js/smartcharts/fr-po-32dce3.smartcharts.js","23e4180e68f49df1797131801cee12bc"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/html2canvas-902b35.smartcharts.js","a19b6c5e539cc49478f14e215555adeb"],["/js/smartcharts/id-po-684adf.smartcharts.js","f93136258ba3abe61664cafb7e109193"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-6fb521.smartcharts.js","7bcd6576fdba2d63bf7ce1f387c71797"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/nl-po-dbc059.smartcharts.js","5f0bbcbda9c2655ecb1033afbc324cd6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pl-po-ddb25d.smartcharts.js","9c1ec02f795276ab3c106a52e99af8cc"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/pt-po-94d77b.smartcharts.js","a5c20ad9ea460a09a0f5615d3c1b162f"],["/js/smartcharts/ru-po-afea21.smartcharts.js","29869f8a0d1329b458944e3fcc6cd54a"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/th-po-f9221a.smartcharts.js","8a546ad5e35758d391a1b394c959a8d7"],["/js/smartcharts/vendors~resize-observer-polyfill-358f59.smartcharts.js","7cc03f6cea9d826c6829915288d857c5"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-47e08b.smartcharts.js","4a11b3ed941616c11b7cd43256de11c9"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_cn-po-e6a513.smartcharts.js","962ee83946ae9e5ec1069aa9baa56dfd"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/smartcharts/zh_tw-po-48b237.smartcharts.js","2c4a29f445e75eb7892e1fbcf592e915"],["/js/statement.526233f20e430b524368.js","0faf79fb5a2f9352d1e6f4a112892fdd"],["/js/toggle-menu-drawer.526233f20e430b524368.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/js/two-month-picker.526233f20e430b524368.js","7ffcebff91118e847097df8afcb893b7"],["/js/vendors~open_position~7c650be5.526233f20e430b524368.js","96370a09a14169069e4993fc9b50456a"],["/js/work-in-progress.526233f20e430b524368.js","15d5d8cb32b88ce19746e2ab41348e01"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/';
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







