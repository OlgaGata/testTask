/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/***/ (() => {

eval("let entryField = document.querySelector('.filter__entry_field');\r\n\r\nentryField.onkeyup = function ()\r\n{\r\n        let requestURL = 'https://603e38c548171b0017b2ecf7.mockapi.io/homes';\r\n        let xhr = new XMLHttpRequest();\r\n        xhr.open('GET',requestURL,true);\r\n        xhr.onload = function ()\r\n        {\r\n            const result = JSON.parse(xhr.response);\r\n            showContent(result);\r\n        };\r\n        xhr.send();\r\n\r\n        function showContent(content)\r\n        {\r\n\r\n            let resultNode = document.querySelector('.j-result');\r\n            let cards = '';\r\n            let label = '';\r\n            content.forEach(item => {\r\n                if (item.type === 'IndependentLiving')\r\n                {\r\n                    label = 'Independent living';\r\n                }\r\n                else if (item.type === 'SupportAvailable')\r\n                {\r\n                    label = 'Restaurant & Support available'\r\n                }\r\n                if (entryField.value.length >= 3)\r\n                {\r\n                    let filterValue = entryField.value;\r\n                    if (item.title.includes(filterValue)) {\r\n                        const cardBlock = `\r\n                            <a href=\\\"./details/${item.id}\\\" aria-label=\\\"You can find more information about ${item.title}\\\">\r\n                <div class=\\\"content__card\\\">\r\n                    <div class=\\\"content__card_img\\\">\r\n                        <img src=\\\"./imagas/img1.svg\\\" alt=\"${item.title}\">\r\n                        <span class=\\\"content__card_img_tag ${item.type}\\\">${label}</span>\r\n                    </div>\r\n                    <div class=\\\"content__card_description\\\">\r\n                        <h2 class=\\\"content__card_description_title\\\">${item.title}</h2>\r\n                        <p class=\\\"content__card_description_address\\\">${item.address}</p>\r\n                        <p class=\\\"content__card_description_sale\\\">New Properties for Sale from\r\n                            <b>${item.price}</b>\r\n                        </p>\r\n                        <p class=\\\"content__card_description_add\\\">Shared Ownership Available</p>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n                        `;\r\n                        cards = cards + cardBlock;\r\n                    }\r\n                }\r\n                else\r\n                {\r\n                    const cardBlock = `\r\n                            <a href=\\\"./details/${item.id}\\\" aria-label=\\\"You can find more information about ${item.title}\\\">\r\n                <div class=\\\"content__card\\\">\r\n                    <div class=\\\"content__card_img\\\">\r\n                        <img src=\\\"./imagas/img1.svg\\\" alt=\"${item.title}\">\r\n                        <span class=\\\"content__card_img_tag ${item.type}\\\">${label}</span>\r\n                    </div>\r\n                    <div class=\\\"content__card_description\\\">\r\n                        <h2 class=\\\"content__card_description_title\\\">${item.title}</h2>\r\n                        <p class=\\\"content__card_description_address\\\">${item.address}</p>\r\n                        <p class=\\\"content__card_description_sale\\\">New Properties for Sale from\r\n                            <b>${item.price}</b>\r\n                        </p>\r\n                        <p class=\\\"content__card_description_add\\\">Shared Ownership Available</p>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n                        `;\r\n                    cards = cards + cardBlock;\r\n                }\r\n            });\r\n\r\n            resultNode.innerHTML = cards;\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack://test/./src/filter.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\nlet requestURL = 'https://603e38c548171b0017b2ecf7.mockapi.io/homes';\r\nlet xhr = new XMLHttpRequest();\r\nxhr.open('GET',requestURL,true);\r\nxhr.onload = function ()\r\n {\r\n    const result = JSON.parse(xhr.response);\r\n    showContent(result);\r\n };\r\nxhr.send();\r\n\r\nfunction showContent(content)\r\n{\r\n\r\n    let resultNode = document.querySelector('.j-result');\r\n    let cards = '';\r\n    let label = '';\r\n    content.forEach(item => {\r\n        if (item.type === 'IndependentLiving')\r\n        {\r\n            label = 'Independent living';\r\n        }\r\n        else if (item.type === 'SupportAvailable')\r\n        {\r\n            label = 'Restaurant & Support available'\r\n        }\r\n        const cardBlock = `\r\n        <a href=\\\"./details/${item.id}\\\" aria-label=\\\"You can find more information about ${item.title}\\\">\r\n                <div class=\\\"content__card\\\">\r\n                    <div class=\\\"content__card_img\\\">\r\n                        <img src=\\\"./imagas/img1.svg\\\" alt=\"${item.title}\">\r\n                        <span class=\\\"content__card_img_tag ${item.type}\\\">${label}</span>\r\n                    </div>\r\n                    <div class=\\\"content__card_description\\\">\r\n                        <h2 class=\\\"content__card_description_title\\\">${item.title}</h2>\r\n                        <p class=\\\"content__card_description_address\\\">${item.address}</p>\r\n                        <p class=\\\"content__card_description_sale\\\">New Properties for Sale from\r\n                            <b>${item.price}</b>\r\n                        </p>\r\n                        <p class=\\\"content__card_description_add\\\">Shared Ownership Available</p>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n        `;\r\n        cards = cards + cardBlock;\r\n    });\r\n\r\n    resultNode.innerHTML = cards;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/filter.js"]();
/******/ 	
/******/ })()
;