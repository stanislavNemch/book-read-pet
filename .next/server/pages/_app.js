/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query-devtools */ \"@tanstack/react-query-devtools\");\n/* harmony import */ var _src_components_context_AuthProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/context/AuthProvider */ \"./src/components/context/AuthProvider.tsx\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/index.css */ \"./pages/styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_6__, _src_components_context_AuthProvider__WEBPACK_IMPORTED_MODULE_7__]);\n([framer_motion__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_6__, _src_components_context_AuthProvider__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient({\n    defaultOptions: {\n        queries: {\n            refetchOnWindowFocus: false,\n            retry: 1\n        }\n    }\n});\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {\n        client: queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_context_AuthProvider__WEBPACK_IMPORTED_MODULE_7__.AuthProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                    mode: \"wait\",\n                    initial: false,\n                    children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, {\n                        ...pageProps,\n                        key: router.route,\n                        __source: {\n                            fileName: \"H:\\\\Programming\\\\GoIT\\\\Full-Stack-Web-Development\\\\React-TypeScript\\\\book-read-pet\\\\pages\\\\_app.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        },\n                        __self: this\n                    })\n                }, void 0, false, {\n                    fileName: \"H:\\\\Programming\\\\GoIT\\\\Full-Stack-Web-Development\\\\React-TypeScript\\\\book-read-pet\\\\pages\\\\_app.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {\n                    position: \"top-right\",\n                    reverseOrder: false\n                }, void 0, false, {\n                    fileName: \"H:\\\\Programming\\\\GoIT\\\\Full-Stack-Web-Development\\\\React-TypeScript\\\\book-read-pet\\\\pages\\\\_app.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_6__.ReactQueryDevtools, {\n                    initialIsOpen: false\n                }, void 0, false, {\n                    fileName: \"H:\\\\Programming\\\\GoIT\\\\Full-Stack-Web-Development\\\\React-TypeScript\\\\book-read-pet\\\\pages\\\\_app.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"H:\\\\Programming\\\\GoIT\\\\Full-Stack-Web-Development\\\\React-TypeScript\\\\book-read-pet\\\\pages\\\\_app.tsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"H:\\\\Programming\\\\GoIT\\\\Full-Stack-Web-Development\\\\React-TypeScript\\\\book-read-pet\\\\pages\\\\_app.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ1E7QUFDTjtBQUMrQjtBQUNMO0FBQ0U7QUFDMUM7QUFFNUIsTUFBTU8sY0FBYyxJQUFJSiw4REFBV0EsQ0FBQztJQUNoQ0ssZ0JBQWdCO1FBQ1pDLFNBQVM7WUFDTEMsc0JBQXNCO1lBQ3RCQyxPQUFPO1FBQ1g7SUFDSjtBQUNKO0FBRUEsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM3QyxNQUFNQyxTQUFTZixzREFBU0E7SUFFeEIscUJBQ0ksOERBQUNJLHNFQUFtQkE7UUFBQ1ksUUFBUVQ7a0JBQ3pCLDRFQUFDRCw4RUFBWUE7OzhCQUNULDhEQUFDTCwwREFBZUE7b0JBQUNnQixNQUFLO29CQUFPQyxTQUFTOzhCQUNsQyxtRUFBQ0w7d0JBQVcsR0FBR0MsU0FBUzt3QkFBRUssS0FBS0osT0FBT0ssS0FBSzs7Ozs7Ozs7Ozs7Ozs4QkFFL0MsOERBQUNsQixvREFBT0E7b0JBQUNtQixVQUFTO29CQUFZQyxjQUFjOzs7Ozs7OEJBQzVDLDhEQUFDakIsOEVBQWtCQTtvQkFBQ2tCLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5EO0FBRUEsaUVBQWVYLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib29rLXJlYWQtcGV0Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBSZWFjdFF1ZXJ5RGV2dG9vbHMgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5LWRldnRvb2xzXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvY29udGV4dC9BdXRoUHJvdmlkZXJcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCh7XG4gICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgcXVlcmllczoge1xuICAgICAgICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgcmV0cnk6IDEsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgICAgICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPVwid2FpdFwiIGluaXRpYWw9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBrZXk9e3JvdXRlci5yb3V0ZX0gLz5cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICA8VG9hc3RlciBwb3NpdGlvbj1cInRvcC1yaWdodFwiIHJldmVyc2VPcmRlcj17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgPFJlYWN0UXVlcnlEZXZ0b29scyBpbml0aWFsSXNPcGVuPXtmYWxzZX0gLz5cbiAgICAgICAgICAgIDwvQXV0aFByb3ZpZGVyPlxuICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiQW5pbWF0ZVByZXNlbmNlIiwiVG9hc3RlciIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIlJlYWN0UXVlcnlEZXZ0b29scyIsIkF1dGhQcm92aWRlciIsInF1ZXJ5Q2xpZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJyZXRyeSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiY2xpZW50IiwibW9kZSIsImluaXRpYWwiLCJrZXkiLCJyb3V0ZSIsInBvc2l0aW9uIiwicmV2ZXJzZU9yZGVyIiwiaW5pdGlhbElzT3BlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/components/api/api.ts":
/*!***********************************!*\
  !*** ./src/components/api/api.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api),\n/* harmony export */   setAuthHeader: () => (/* binding */ setAuthHeader)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, react_hot_toast__WEBPACK_IMPORTED_MODULE_1__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, react_hot_toast__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst BASE_URL = \"https://bookread-backend.goit.global\";\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: BASE_URL\n});\n// --- Динамическая установка токена ---\nconst setAuthHeader = (token)=>{\n    if (token) {\n        api.defaults.headers.common.Authorization = `Bearer ${token}`;\n    } else {\n        delete api.defaults.headers.common.Authorization;\n    }\n};\n// --- Перехватчик ответов для обновления токенов ---\nlet isRefreshing = false;\nlet failedQueue = [];\nconst processQueue = (error, token = null)=>{\n    failedQueue.forEach((prom)=>{\n        if (error) {\n            prom.reject(error);\n        } else {\n            prom.resolve(token);\n        }\n    });\n    failedQueue = [];\n};\napi.interceptors.response.use((response)=>response, async (error)=>{\n    const originalRequest = error.config;\n    // Обработка ошибки соединения с сервером\n    if (!error.response) {\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(\"Ошибка соединения с сервером. Пожалуйста, проверьте ваше интернет-соединение.\");\n        return Promise.reject(error);\n    }\n    if (error.response?.status === 401 && !originalRequest._retry) {\n        if (isRefreshing) {\n            return new Promise(function(resolve, reject) {\n                failedQueue.push({\n                    resolve,\n                    reject\n                });\n            }).then((token)=>{\n                originalRequest.headers.Authorization = `Bearer ${token}`;\n                return api(originalRequest);\n            }).catch((err)=>{\n                return Promise.reject(err);\n            });\n        }\n        originalRequest._retry = true;\n        isRefreshing = true;\n        const refreshToken = localStorage.getItem(\"refreshToken\");\n        const sid = localStorage.getItem(\"sid\");\n        if (!refreshToken || !sid) {\n            // Если нет токенов, ничего не делаем\n            return Promise.reject(error);\n        }\n        try {\n            setAuthHeader(refreshToken); // Временно ставим refreshToken для запроса обновления\n            const { data } = await api.post(\"/auth/refresh\", {\n                sid\n            });\n            localStorage.setItem(\"accessToken\", data.newAccessToken);\n            localStorage.setItem(\"refreshToken\", data.newRefreshToken);\n            localStorage.setItem(\"sid\", data.newSid);\n            setAuthHeader(data.newAccessToken); // Устанавливаем новый accessToken\n            processQueue(null, data.newAccessToken);\n            originalRequest.headers.Authorization = `Bearer ${data.newAccessToken}`;\n            return api(originalRequest);\n        } catch (refreshError) {\n            processQueue(refreshError, null);\n            localStorage.clear();\n            window.location.reload(); // Перезагрузка для выхода из системы\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(\"Сессия истекла. Пожалуйста, войдите снова.\");\n            return Promise.reject(refreshError);\n        } finally{\n            isRefreshing = false;\n        }\n    }\n    return Promise.reject(error);\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0MsTUFBTSxJQUFJLHFDQUFxQztZQUMvRDdDLDZEQUFXLENBQUM7WUFDWixPQUFPd0IsUUFBUVAsTUFBTSxDQUFDd0I7UUFDMUIsU0FBVTtZQUNOOUIsZUFBZTtRQUNuQjtJQUNKO0lBRUEsT0FBT2EsUUFBUVAsTUFBTSxDQUFDSDtBQUMxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2stcmVhZC1wZXQvLi9zcmMvY29tcG9uZW50cy9hcGkvYXBpLnRzPzM2ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgdHlwZSB7IFJlZnJlc2hSZXNwb25zZSB9IGZyb20gXCIuLi90eXBlcy9hdXRoXCI7XHJcblxyXG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9ib29rcmVhZC1iYWNrZW5kLmdvaXQuZ2xvYmFsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IEJBU0VfVVJMLFxyXG59KTtcclxuXHJcbi8vIC0tLSDQlNC40L3QsNC80LjRh9C10YHQutCw0Y8g0YPRgdGC0LDQvdC+0LLQutCwINGC0L7QutC10L3QsCAtLS1cclxuZXhwb3J0IGNvbnN0IHNldEF1dGhIZWFkZXIgPSAodG9rZW46IHN0cmluZyB8IG51bGwpID0+IHtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbi5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbGV0ZSBhcGkuZGVmYXVsdHMuaGVhZGVycy5jb21tb24uQXV0aG9yaXphdGlvbjtcclxuICAgIH1cclxufTtcclxuXHJcbi8vIC0tLSDQn9C10YDQtdGF0LLQsNGC0YfQuNC6INC+0YLQstC10YLQvtCyINC00LvRjyDQvtCx0L3QvtCy0LvQtdC90LjRjyDRgtC+0LrQtdC90L7QsiAtLS1cclxubGV0IGlzUmVmcmVzaGluZyA9IGZhbHNlO1xyXG5sZXQgZmFpbGVkUXVldWU6IGFueVtdID0gW107XHJcblxyXG5jb25zdCBwcm9jZXNzUXVldWUgPSAoZXJyb3I6IGFueSwgdG9rZW46IHN0cmluZyB8IG51bGwgPSBudWxsKSA9PiB7XHJcbiAgICBmYWlsZWRRdWV1ZS5mb3JFYWNoKChwcm9tKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHByb20ucmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwcm9tLnJlc29sdmUodG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZmFpbGVkUXVldWUgPSBbXTtcclxufTtcclxuXHJcbmFwaS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gICAgKHJlc3BvbnNlKSA9PiByZXNwb25zZSxcclxuICAgIGFzeW5jIChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUmVxdWVzdCA9IGVycm9yLmNvbmZpZztcclxuXHJcbiAgICAgICAgLy8g0J7QsdGA0LDQsdC+0YLQutCwINC+0YjQuNCx0LrQuCDRgdC+0LXQtNC40L3QtdC90LjRjyDRgSDRgdC10YDQstC10YDQvtC8XHJcbiAgICAgICAgaWYgKCFlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihcclxuICAgICAgICAgICAgICAgIFwi0J7RiNC40LHQutCwINGB0L7QtdC00LjQvdC10L3QuNGPINGBINGB0LXRgNCy0LXRgNC+0LwuINCf0L7QttCw0LvRg9C50YHRgtCwLCDQv9GA0L7QstC10YDRjNGC0LUg0LLQsNGI0LUg0LjQvdGC0LXRgNC90LXRgi3RgdC+0LXQtNC40L3QtdC90LjQtS5cIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMSAmJiAhb3JpZ2luYWxSZXF1ZXN0Ll9yZXRyeSkge1xyXG4gICAgICAgICAgICBpZiAoaXNSZWZyZXNoaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZhaWxlZFF1ZXVlLnB1c2goeyByZXNvbHZlLCByZWplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh0b2tlbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFJlcXVlc3QuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcGkob3JpZ2luYWxSZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvcmlnaW5hbFJlcXVlc3QuX3JldHJ5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaXNSZWZyZXNoaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVmcmVzaFRva2VuXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBzaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcmVmcmVzaFRva2VuIHx8ICFzaWQpIHtcclxuICAgICAgICAgICAgICAgIC8vINCV0YHQu9C4INC90LXRgiDRgtC+0LrQtdC90L7Qsiwg0L3QuNGH0LXQs9C+INC90LUg0LTQtdC70LDQtdC8XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc2V0QXV0aEhlYWRlcihyZWZyZXNoVG9rZW4pOyAvLyDQktGA0LXQvNC10L3QvdC+INGB0YLQsNCy0LjQvCByZWZyZXNoVG9rZW4g0LTQu9GPINC30LDQv9GA0L7RgdCwINC+0LHQvdC+0LLQu9C10L3QuNGPXHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5wb3N0PFJlZnJlc2hSZXNwb25zZT4oXHJcbiAgICAgICAgICAgICAgICAgICAgXCIvYXV0aC9yZWZyZXNoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzaWQgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY2Vzc1Rva2VuXCIsIGRhdGEubmV3QWNjZXNzVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZWZyZXNoVG9rZW5cIiwgZGF0YS5uZXdSZWZyZXNoVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaWRcIiwgZGF0YS5uZXdTaWQpO1xyXG4gICAgICAgICAgICAgICAgc2V0QXV0aEhlYWRlcihkYXRhLm5ld0FjY2Vzc1Rva2VuKTsgLy8g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0L3QvtCy0YvQuSBhY2Nlc3NUb2tlblxyXG5cclxuICAgICAgICAgICAgICAgIHByb2Nlc3NRdWV1ZShudWxsLCBkYXRhLm5ld0FjY2Vzc1Rva2VuKTtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsUmVxdWVzdC5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7ZGF0YS5uZXdBY2Nlc3NUb2tlbn1gO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBhcGkob3JpZ2luYWxSZXF1ZXN0KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAocmVmcmVzaEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzUXVldWUocmVmcmVzaEVycm9yLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyAvLyDQn9C10YDQtdC30LDQs9GA0YPQt9C60LAg0LTQu9GPINCy0YvRhdC+0LTQsCDQuNC3INGB0LjRgdGC0LXQvNGLXHJcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihcItCh0LXRgdGB0LjRjyDQuNGB0YLQtdC60LvQsC4g0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0L7QudC00LjRgtC1INGB0L3QvtCy0LAuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlZnJlc2hFcnJvcik7XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICBpc1JlZnJlc2hpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuKTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidG9hc3QiLCJCQVNFX1VSTCIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJzZXRBdXRoSGVhZGVyIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJBdXRob3JpemF0aW9uIiwiaXNSZWZyZXNoaW5nIiwiZmFpbGVkUXVldWUiLCJwcm9jZXNzUXVldWUiLCJlcnJvciIsImZvckVhY2giLCJwcm9tIiwicmVqZWN0IiwicmVzb2x2ZSIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwib3JpZ2luYWxSZXF1ZXN0IiwiY29uZmlnIiwiUHJvbWlzZSIsInN0YXR1cyIsIl9yZXRyeSIsInB1c2giLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJyZWZyZXNoVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2lkIiwiZGF0YSIsInBvc3QiLCJzZXRJdGVtIiwibmV3QWNjZXNzVG9rZW4iLCJuZXdSZWZyZXNoVG9rZW4iLCJuZXdTaWQiLCJyZWZyZXNoRXJyb3IiLCJjbGVhciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/api/api.ts\n");

/***/ }),

/***/ "./src/components/context/AuthContext.tsx":
/*!************************************************!*\
  !*** ./src/components/context/AuthContext.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n// Создаем и экспортируем сам контекст\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250ZXh0L0F1dGhDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFZdEMsc0NBQXNDO0FBQy9CLE1BQU1DLDRCQUFjRCxvREFBYUEsQ0FDcENFLFdBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib29rLXJlYWQtcGV0Ly4vc3JjL2NvbXBvbmVudHMvY29udGV4dC9BdXRoQ29udGV4dC50c3g/ZTkxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0eXBlIHsgVXNlckRhdGEsIExvZ2luUmVzcG9uc2UgfSBmcm9tIFwiLi4vdHlwZXMvYXV0aFwiO1xyXG5cclxuLy8g0J7Qv9C40YHRi9Cy0LDQtdC8INGC0L7Rh9C90YPRjiDRgdGC0YDRg9C60YLRg9GA0YMg0LrQvtC90YLQtdC60YHRgtCwXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aENvbnRleHRUeXBlIHtcclxuICAgIGlzTG9nZ2VkSW46IGJvb2xlYW47XHJcbiAgICB1c2VyOiBVc2VyRGF0YSB8IG51bGw7XHJcbiAgICB0b2tlbjogc3RyaW5nIHwgbnVsbDtcclxuICAgIGxvZ2luOiAoZGF0YTogTG9naW5SZXNwb25zZSkgPT4gdm9pZDtcclxuICAgIGxvZ291dDogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuLy8g0KHQvtC30LTQsNC10Lwg0Lgg0Y3QutGB0L/QvtGA0YLQuNGA0YPQtdC8INGB0LDQvCDQutC+0L3RgtC10LrRgdGCXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHRUeXBlIHwgdW5kZWZpbmVkPihcclxuICAgIHVuZGVmaW5lZFxyXG4pO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/context/AuthContext.tsx\n");

/***/ }),

/***/ "./src/components/context/AuthProvider.tsx":
/*!*************************************************!*\
  !*** ./src/components/context/AuthProvider.tsx ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authService */ \"./src/components/services/authService.ts\");\n/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthContext */ \"./src/components/context/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__, _services_authService__WEBPACK_IMPORTED_MODULE_3__]);\n([js_cookie__WEBPACK_IMPORTED_MODULE_2__, _services_authService__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst AuthProvider = ({ children })=>{\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedAccessToken = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"accessToken\");\n        const storedUser = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"user\");\n        if (storedAccessToken && storedUser) {\n            _services_authService__WEBPACK_IMPORTED_MODULE_3__.authService.setToken(storedAccessToken);\n            setIsLoggedIn(true);\n            try {\n                setUser(JSON.parse(storedUser));\n            } catch (error) {\n                console.error(\"Failed to parse user from cookie\", error);\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"accessToken\");\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"refreshToken\");\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"sid\");\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"user\");\n            }\n            setToken(storedAccessToken);\n        }\n    }, []);\n    const handleLogin = (loginData)=>{\n        // Устанавливаем cookies с опциями для правильной работы\n        const cookieOptions = {\n            expires: 7,\n            path: \"/\",\n            sameSite: \"lax\"\n        };\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"accessToken\", loginData.accessToken, cookieOptions);\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"refreshToken\", loginData.refreshToken, cookieOptions);\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"sid\", loginData.sid, cookieOptions);\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"user\", JSON.stringify(loginData.userData), cookieOptions);\n        _services_authService__WEBPACK_IMPORTED_MODULE_3__.authService.setToken(loginData.accessToken);\n        setIsLoggedIn(true);\n        setUser(loginData.userData);\n        setToken(loginData.accessToken);\n    };\n    const handleLogout = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"accessToken\", {\n            path: \"/\"\n        });\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"refreshToken\", {\n            path: \"/\"\n        });\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"sid\", {\n            path: \"/\"\n        });\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"user\", {\n            path: \"/\"\n        });\n        _services_authService__WEBPACK_IMPORTED_MODULE_3__.authService.setToken(null);\n        setIsLoggedIn(false);\n        setUser(null);\n        setToken(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthContext__WEBPACK_IMPORTED_MODULE_4__.AuthContext.Provider, {\n        value: {\n            isLoggedIn,\n            user,\n            token,\n            login: handleLogin,\n            logout: handleLogout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"H:\\\\Programming\\\\GoIT\\\\Full-Stack-Web-Development\\\\React-TypeScript\\\\book-read-pet\\\\src\\\\components\\\\context\\\\AuthProvider.tsx\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250ZXh0L0F1dGhQcm92aWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1FO0FBQ25DO0FBQ3NCO0FBRVY7QUFFckMsTUFBTU0sZUFBa0QsQ0FBQyxFQUM1REMsUUFBUSxFQUNYO0lBQ0csTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBa0I7SUFDbEQsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFnQjtJQUVsREMsZ0RBQVNBLENBQUM7UUFDTixNQUFNWSxvQkFBb0JYLHFEQUFXLENBQUM7UUFDdEMsTUFBTWEsYUFBYWIscURBQVcsQ0FBQztRQUMvQixJQUFJVyxxQkFBcUJFLFlBQVk7WUFDakNaLDhEQUFXQSxDQUFDUyxRQUFRLENBQUNDO1lBQ3JCTCxjQUFjO1lBQ2QsSUFBSTtnQkFDQUUsUUFBUU0sS0FBS0MsS0FBSyxDQUFDRjtZQUN2QixFQUFFLE9BQU9HLE9BQU87Z0JBQ1pDLFFBQVFELEtBQUssQ0FBQyxvQ0FBb0NBO2dCQUNsRGhCLHdEQUFjLENBQUM7Z0JBQ2ZBLHdEQUFjLENBQUM7Z0JBQ2ZBLHdEQUFjLENBQUM7Z0JBQ2ZBLHdEQUFjLENBQUM7WUFDbkI7WUFDQVUsU0FBU0M7UUFDYjtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1RLGNBQWMsQ0FBQ0M7UUFDakIsd0RBQXdEO1FBQ3hELE1BQU1DLGdCQUFnQjtZQUNsQkMsU0FBUztZQUNUQyxNQUFNO1lBQ05DLFVBQVU7UUFDZDtRQUVBeEIscURBQVcsQ0FBQyxlQUFlb0IsVUFBVU0sV0FBVyxFQUFFTDtRQUNsRHJCLHFEQUFXLENBQUMsZ0JBQWdCb0IsVUFBVU8sWUFBWSxFQUFFTjtRQUNwRHJCLHFEQUFXLENBQUMsT0FBT29CLFVBQVVRLEdBQUcsRUFBRVA7UUFDbENyQixxREFBVyxDQUFDLFFBQVFjLEtBQUtlLFNBQVMsQ0FBQ1QsVUFBVVUsUUFBUSxHQUFHVDtRQUV4RHBCLDhEQUFXQSxDQUFDUyxRQUFRLENBQUNVLFVBQVVNLFdBQVc7UUFDMUNwQixjQUFjO1FBQ2RFLFFBQVFZLFVBQVVVLFFBQVE7UUFDMUJwQixTQUFTVSxVQUFVTSxXQUFXO0lBQ2xDO0lBRUEsTUFBTUssZUFBZTtRQUNqQi9CLHdEQUFjLENBQUMsZUFBZTtZQUFFdUIsTUFBTTtRQUFJO1FBQzFDdkIsd0RBQWMsQ0FBQyxnQkFBZ0I7WUFBRXVCLE1BQU07UUFBSTtRQUMzQ3ZCLHdEQUFjLENBQUMsT0FBTztZQUFFdUIsTUFBTTtRQUFJO1FBQ2xDdkIsd0RBQWMsQ0FBQyxRQUFRO1lBQUV1QixNQUFNO1FBQUk7UUFDbkN0Qiw4REFBV0EsQ0FBQ1MsUUFBUSxDQUFDO1FBQ3JCSixjQUFjO1FBQ2RFLFFBQVE7UUFDUkUsU0FBUztJQUNiO0lBRUEscUJBQ0ksOERBQUNSLHFEQUFXQSxDQUFDOEIsUUFBUTtRQUNqQkMsT0FBTztZQUNINUI7WUFDQUU7WUFDQUU7WUFDQXlCLE9BQU9mO1lBQ1BnQixRQUFRSjtRQUNaO2tCQUVDM0I7Ozs7OztBQUdiLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib29rLXJlYWQtcGV0Ly4vc3JjL2NvbXBvbmVudHMvY29udGV4dC9BdXRoUHJvdmlkZXIudHN4PzgwNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB0eXBlIFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgYXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aFNlcnZpY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBVc2VyRGF0YSwgTG9naW5SZXNwb25zZSB9IGZyb20gXCIuLi90eXBlcy9hdXRoXCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4vQXV0aENvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXI6IFJlYWN0LkZDPHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9PiA9ICh7XHJcbiAgICBjaGlsZHJlbixcclxufSkgPT4ge1xyXG4gICAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlckRhdGEgfCBudWxsPihudWxsKTtcclxuICAgIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzdG9yZWRBY2Nlc3NUb2tlbiA9IENvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVkVXNlciA9IENvb2tpZXMuZ2V0KFwidXNlclwiKTtcclxuICAgICAgICBpZiAoc3RvcmVkQWNjZXNzVG9rZW4gJiYgc3RvcmVkVXNlcikge1xyXG4gICAgICAgICAgICBhdXRoU2VydmljZS5zZXRUb2tlbihzdG9yZWRBY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyKEpTT04ucGFyc2Uoc3RvcmVkVXNlcikpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBwYXJzZSB1c2VyIGZyb20gY29va2llXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICBDb29raWVzLnJlbW92ZShcInJlZnJlc2hUb2tlblwiKTtcclxuICAgICAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwic2lkXCIpO1xyXG4gICAgICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJ1c2VyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRva2VuKHN0b3JlZEFjY2Vzc1Rva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9naW4gPSAobG9naW5EYXRhOiBMb2dpblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgLy8g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10LwgY29va2llcyDRgSDQvtC/0YbQuNGP0LzQuCDQtNC70Y8g0L/RgNCw0LLQuNC70YzQvdC+0Lkg0YDQsNCx0L7RgtGLXHJcbiAgICAgICAgY29uc3QgY29va2llT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgZXhwaXJlczogNywgLy8gNyDQtNC90LXQuVxyXG4gICAgICAgICAgICBwYXRoOiBcIi9cIixcclxuICAgICAgICAgICAgc2FtZVNpdGU6IFwibGF4XCIgYXMgY29uc3QsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgQ29va2llcy5zZXQoXCJhY2Nlc3NUb2tlblwiLCBsb2dpbkRhdGEuYWNjZXNzVG9rZW4sIGNvb2tpZU9wdGlvbnMpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KFwicmVmcmVzaFRva2VuXCIsIGxvZ2luRGF0YS5yZWZyZXNoVG9rZW4sIGNvb2tpZU9wdGlvbnMpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KFwic2lkXCIsIGxvZ2luRGF0YS5zaWQsIGNvb2tpZU9wdGlvbnMpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShsb2dpbkRhdGEudXNlckRhdGEpLCBjb29raWVPcHRpb25zKTtcclxuXHJcbiAgICAgICAgYXV0aFNlcnZpY2Uuc2V0VG9rZW4obG9naW5EYXRhLmFjY2Vzc1Rva2VuKTtcclxuICAgICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xyXG4gICAgICAgIHNldFVzZXIobG9naW5EYXRhLnVzZXJEYXRhKTtcclxuICAgICAgICBzZXRUb2tlbihsb2dpbkRhdGEuYWNjZXNzVG9rZW4pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgQ29va2llcy5yZW1vdmUoXCJhY2Nlc3NUb2tlblwiLCB7IHBhdGg6IFwiL1wiIH0pO1xyXG4gICAgICAgIENvb2tpZXMucmVtb3ZlKFwicmVmcmVzaFRva2VuXCIsIHsgcGF0aDogXCIvXCIgfSk7XHJcbiAgICAgICAgQ29va2llcy5yZW1vdmUoXCJzaWRcIiwgeyBwYXRoOiBcIi9cIiB9KTtcclxuICAgICAgICBDb29raWVzLnJlbW92ZShcInVzZXJcIiwgeyBwYXRoOiBcIi9cIiB9KTtcclxuICAgICAgICBhdXRoU2VydmljZS5zZXRUb2tlbihudWxsKTtcclxuICAgICAgICBzZXRJc0xvZ2dlZEluKGZhbHNlKTtcclxuICAgICAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgICAgIHNldFRva2VuKG51bGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbixcclxuICAgICAgICAgICAgICAgIHVzZXIsXHJcbiAgICAgICAgICAgICAgICB0b2tlbixcclxuICAgICAgICAgICAgICAgIGxvZ2luOiBoYW5kbGVMb2dpbixcclxuICAgICAgICAgICAgICAgIGxvZ291dDogaGFuZGxlTG9nb3V0LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvb2tpZXMiLCJhdXRoU2VydmljZSIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsInVzZXIiLCJzZXRVc2VyIiwidG9rZW4iLCJzZXRUb2tlbiIsInN0b3JlZEFjY2Vzc1Rva2VuIiwiZ2V0Iiwic3RvcmVkVXNlciIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwiY29uc29sZSIsInJlbW92ZSIsImhhbmRsZUxvZ2luIiwibG9naW5EYXRhIiwiY29va2llT3B0aW9ucyIsImV4cGlyZXMiLCJwYXRoIiwic2FtZVNpdGUiLCJzZXQiLCJhY2Nlc3NUb2tlbiIsInJlZnJlc2hUb2tlbiIsInNpZCIsInN0cmluZ2lmeSIsInVzZXJEYXRhIiwiaGFuZGxlTG9nb3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImxvZ2luIiwibG9nb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/context/AuthProvider.tsx\n");

/***/ }),

/***/ "./src/components/services/authService.ts":
/*!************************************************!*\
  !*** ./src/components/services/authService.ts ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authService: () => (/* binding */ authService)\n/* harmony export */ });\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ \"./src/components/api/api.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_api__WEBPACK_IMPORTED_MODULE_0__]);\n_api_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst authService = {\n    setToken: _api_api__WEBPACK_IMPORTED_MODULE_0__.setAuthHeader,\n    register: (data)=>_api_api__WEBPACK_IMPORTED_MODULE_0__.api.post(\"/auth/register\", data),\n    login: (data)=>_api_api__WEBPACK_IMPORTED_MODULE_0__.api.post(\"/auth/login\", data),\n    refresh: (sid)=>_api_api__WEBPACK_IMPORTED_MODULE_0__.api.post(\"/auth/refresh\", {\n            sid\n        }),\n    logout: ()=>_api_api__WEBPACK_IMPORTED_MODULE_0__.api.post(\"/auth/logout\")\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZXJ2aWNlcy9hdXRoU2VydmljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnRDtBQVN6QyxNQUFNRSxjQUFjO0lBQ3ZCQyxVQUFVRixtREFBYUE7SUFFdkJHLFVBQVUsQ0FBQ0MsT0FDUEwseUNBQUdBLENBQUNNLElBQUksQ0FBdUIsa0JBQWtCRDtJQUVyREUsT0FBTyxDQUFDRixPQUF1QkwseUNBQUdBLENBQUNNLElBQUksQ0FBZ0IsZUFBZUQ7SUFFdEVHLFNBQVMsQ0FBQ0MsTUFDTlQseUNBQUdBLENBQUNNLElBQUksQ0FBa0IsaUJBQWlCO1lBQUVHO1FBQUk7SUFFckRDLFFBQVEsSUFBTVYseUNBQUdBLENBQUNNLElBQUksQ0FBQztBQUMzQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9vay1yZWFkLXBldC8uL3NyYy9jb21wb25lbnRzL3NlcnZpY2VzL2F1dGhTZXJ2aWNlLnRzPzhiNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBpLCBzZXRBdXRoSGVhZGVyIH0gZnJvbSBcIi4uL2FwaS9hcGlcIjtcclxuaW1wb3J0IHR5cGUge1xyXG4gICAgUmVnaXN0cmF0aW9uUmVxdWVzdCxcclxuICAgIFJlZ2lzdHJhdGlvblJlc3BvbnNlLFxyXG4gICAgTG9naW5SZXF1ZXN0LFxyXG4gICAgTG9naW5SZXNwb25zZSxcclxuICAgIFJlZnJlc2hSZXNwb25zZSxcclxufSBmcm9tIFwiLi4vdHlwZXMvYXV0aFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhTZXJ2aWNlID0ge1xyXG4gICAgc2V0VG9rZW46IHNldEF1dGhIZWFkZXIsIC8vINCY0YHQv9C+0LvRjNC30YPQtdC8INC+0LHRidGD0Y4g0YTRg9C90LrRhtC40Y5cclxuXHJcbiAgICByZWdpc3RlcjogKGRhdGE6IFJlZ2lzdHJhdGlvblJlcXVlc3QpID0+XHJcbiAgICAgICAgYXBpLnBvc3Q8UmVnaXN0cmF0aW9uUmVzcG9uc2U+KFwiL2F1dGgvcmVnaXN0ZXJcIiwgZGF0YSksXHJcblxyXG4gICAgbG9naW46IChkYXRhOiBMb2dpblJlcXVlc3QpID0+IGFwaS5wb3N0PExvZ2luUmVzcG9uc2U+KFwiL2F1dGgvbG9naW5cIiwgZGF0YSksXHJcblxyXG4gICAgcmVmcmVzaDogKHNpZDogc3RyaW5nKSA9PlxyXG4gICAgICAgIGFwaS5wb3N0PFJlZnJlc2hSZXNwb25zZT4oXCIvYXV0aC9yZWZyZXNoXCIsIHsgc2lkIH0pLFxyXG5cclxuICAgIGxvZ291dDogKCkgPT4gYXBpLnBvc3QoXCIvYXV0aC9sb2dvdXRcIiksXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJhcGkiLCJzZXRBdXRoSGVhZGVyIiwiYXV0aFNlcnZpY2UiLCJzZXRUb2tlbiIsInJlZ2lzdGVyIiwiZGF0YSIsInBvc3QiLCJsb2dpbiIsInJlZnJlc2giLCJzaWQiLCJsb2dvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/services/authService.ts\n");

/***/ }),

/***/ "./pages/styles/index.css":
/*!********************************!*\
  !*** ./pages/styles/index.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "@tanstack/react-query-devtools":
/*!*************************************************!*\
  !*** external "@tanstack/react-query-devtools" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query-devtools");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();