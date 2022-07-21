(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["my-library"] = factory();
	else
		root["my-library"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ VanillaCalendar)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
;// CONCATENATED MODULE: ./src/js/modules/vanilla-calendar.js



var VanillaCalendar = /*#__PURE__*/function () {
  function VanillaCalendar(option) {
    var _option$type, _option$date$min, _option$date, _option$date$max, _option$date2, _option$date$today, _option$date3, _option$settings$lang, _option$settings, _option$settings$iso, _option$settings2, _option$settings$rang, _option$settings3, _option$settings3$ran, _option$settings$rang2, _option$settings4, _option$settings4$ran, _option$settings$rang3, _option$settings5, _option$settings5$ran, _option$settings$sele, _option$settings6, _option$settings6$sel, _option$settings$sele2, _option$settings7, _option$settings7$sel, _option$settings$sele3, _option$settings8, _option$settings8$sel, _option$settings$sele4, _option$settings9, _option$settings9$sel, _option$settings$sele5, _option$settings10, _option$settings10$se, _option$settings$sele6, _option$settings11, _option$settings11$se, _option$settings$sele7, _option$settings12, _option$settings12$se, _option$settings$visi, _option$settings13, _option$settings13$vi, _option$settings$visi2, _option$settings14, _option$settings14$vi, _option$settings$visi3, _option$settings15, _option$settings15$vi, _option$actions$click, _option$actions, _option$actions$click2, _option$actions2, _option$actions$click3, _option$actions3;

    _classCallCheck(this, VanillaCalendar);

    this.HTMLElement = option.HTMLElement;
    this.type = (_option$type = option.type) !== null && _option$type !== void 0 ? _option$type : 'default';
    this.date = {
      min: (_option$date$min = (_option$date = option.date) === null || _option$date === void 0 ? void 0 : _option$date.min) !== null && _option$date$min !== void 0 ? _option$date$min : '1970-01-01',
      max: (_option$date$max = (_option$date2 = option.date) === null || _option$date2 === void 0 ? void 0 : _option$date2.max) !== null && _option$date$max !== void 0 ? _option$date$max : '2470-12-31',
      today: (_option$date$today = (_option$date3 = option.date) === null || _option$date3 === void 0 ? void 0 : _option$date3.today) !== null && _option$date$today !== void 0 ? _option$date$today : new Date()
    };
    this.settings = {
      lang: (_option$settings$lang = (_option$settings = option.settings) === null || _option$settings === void 0 ? void 0 : _option$settings.lang) !== null && _option$settings$lang !== void 0 ? _option$settings$lang : 'en',
      iso8601: (_option$settings$iso = (_option$settings2 = option.settings) === null || _option$settings2 === void 0 ? void 0 : _option$settings2.iso8601) !== null && _option$settings$iso !== void 0 ? _option$settings$iso : true,
      range: {
        min: (_option$settings$rang = (_option$settings3 = option.settings) === null || _option$settings3 === void 0 ? void 0 : (_option$settings3$ran = _option$settings3.range) === null || _option$settings3$ran === void 0 ? void 0 : _option$settings3$ran.min) !== null && _option$settings$rang !== void 0 ? _option$settings$rang : this.date.min,
        max: (_option$settings$rang2 = (_option$settings4 = option.settings) === null || _option$settings4 === void 0 ? void 0 : (_option$settings4$ran = _option$settings4.range) === null || _option$settings4$ran === void 0 ? void 0 : _option$settings4$ran.max) !== null && _option$settings$rang2 !== void 0 ? _option$settings$rang2 : this.date.max,
        disabled: (_option$settings$rang3 = (_option$settings5 = option.settings) === null || _option$settings5 === void 0 ? void 0 : (_option$settings5$ran = _option$settings5.range) === null || _option$settings5$ran === void 0 ? void 0 : _option$settings5$ran.disabled) !== null && _option$settings$rang3 !== void 0 ? _option$settings$rang3 : null
      },
      selection: {
        day: (_option$settings$sele = (_option$settings6 = option.settings) === null || _option$settings6 === void 0 ? void 0 : (_option$settings6$sel = _option$settings6.selection) === null || _option$settings6$sel === void 0 ? void 0 : _option$settings6$sel.day) !== null && _option$settings$sele !== void 0 ? _option$settings$sele : 'single',
        month: (_option$settings$sele2 = (_option$settings7 = option.settings) === null || _option$settings7 === void 0 ? void 0 : (_option$settings7$sel = _option$settings7.selection) === null || _option$settings7$sel === void 0 ? void 0 : _option$settings7$sel.month) !== null && _option$settings$sele2 !== void 0 ? _option$settings$sele2 : true,
        year: (_option$settings$sele3 = (_option$settings8 = option.settings) === null || _option$settings8 === void 0 ? void 0 : (_option$settings8$sel = _option$settings8.selection) === null || _option$settings8$sel === void 0 ? void 0 : _option$settings8$sel.year) !== null && _option$settings$sele3 !== void 0 ? _option$settings$sele3 : true
      },
      selected: {
        dates: (_option$settings$sele4 = (_option$settings9 = option.settings) === null || _option$settings9 === void 0 ? void 0 : (_option$settings9$sel = _option$settings9.selected) === null || _option$settings9$sel === void 0 ? void 0 : _option$settings9$sel.dates) !== null && _option$settings$sele4 !== void 0 ? _option$settings$sele4 : null,
        month: (_option$settings$sele5 = (_option$settings10 = option.settings) === null || _option$settings10 === void 0 ? void 0 : (_option$settings10$se = _option$settings10.selected) === null || _option$settings10$se === void 0 ? void 0 : _option$settings10$se.month) !== null && _option$settings$sele5 !== void 0 ? _option$settings$sele5 : null,
        year: (_option$settings$sele6 = (_option$settings11 = option.settings) === null || _option$settings11 === void 0 ? void 0 : (_option$settings11$se = _option$settings11.selected) === null || _option$settings11$se === void 0 ? void 0 : _option$settings11$se.year) !== null && _option$settings$sele6 !== void 0 ? _option$settings$sele6 : null,
        holidays: (_option$settings$sele7 = (_option$settings12 = option.settings) === null || _option$settings12 === void 0 ? void 0 : (_option$settings12$se = _option$settings12.selected) === null || _option$settings12$se === void 0 ? void 0 : _option$settings12$se.holidays) !== null && _option$settings$sele7 !== void 0 ? _option$settings$sele7 : null
      },
      visibility: {
        weekend: (_option$settings$visi = (_option$settings13 = option.settings) === null || _option$settings13 === void 0 ? void 0 : (_option$settings13$vi = _option$settings13.visibility) === null || _option$settings13$vi === void 0 ? void 0 : _option$settings13$vi.weekend) !== null && _option$settings$visi !== void 0 ? _option$settings$visi : true,
        today: (_option$settings$visi2 = (_option$settings14 = option.settings) === null || _option$settings14 === void 0 ? void 0 : (_option$settings14$vi = _option$settings14.visibility) === null || _option$settings14$vi === void 0 ? void 0 : _option$settings14$vi.today) !== null && _option$settings$visi2 !== void 0 ? _option$settings$visi2 : true,
        disabled: (_option$settings$visi3 = (_option$settings15 = option.settings) === null || _option$settings15 === void 0 ? void 0 : (_option$settings15$vi = _option$settings15.visibility) === null || _option$settings15$vi === void 0 ? void 0 : _option$settings15$vi.disabled) !== null && _option$settings$visi3 !== void 0 ? _option$settings$visi3 : false
      }
    };
    this.actions = {
      clickDay: (_option$actions$click = (_option$actions = option.actions) === null || _option$actions === void 0 ? void 0 : _option$actions.clickDay) !== null && _option$actions$click !== void 0 ? _option$actions$click : null,
      clickMonth: (_option$actions$click2 = (_option$actions2 = option.actions) === null || _option$actions2 === void 0 ? void 0 : _option$actions2.clickMonth) !== null && _option$actions$click2 !== void 0 ? _option$actions$click2 : null,
      clickYear: (_option$actions$click3 = (_option$actions3 = option.actions) === null || _option$actions3 === void 0 ? void 0 : _option$actions3.clickYear) !== null && _option$actions$click3 !== void 0 ? _option$actions$click3 : null
    };
    this.name = {
      months: {
        full: {
          en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
        },
        reduction: {
          en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          ru: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
        }
      },
      week: {
        en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
      },
      arrow: {
        prev: {
          en: '',
          ru: ''
        },
        next: {
          en: '',
          ru: ''
        }
      }
    };
    this.currentType = this.type;
  }

  _createClass(VanillaCalendar, [{
    key: "setVariablesDates",
    value: function setVariablesDates() {
      this.selectedDates = [];
      this.selectedMonth = this.date.today.getMonth();
      this.selectedYear = this.date.today.getFullYear();

      if (this.settings.selected.dates !== null) {
        this.selectedDates = this.settings.selected.dates;
      }

      if (this.settings.selected.month !== null && this.settings.selected.month >= 0 && this.settings.selected.month < 12) {
        this.selectedMonth = this.settings.selected.month;
      }

      if (this.settings.selected.year !== null && this.settings.selected.year >= 0 && this.settings.selected.year <= 9999) {
        this.selectedYear = this.settings.selected.year;
      }

      this.viewYear = this.selectedYear;
      this.dateMin = this.settings.visibility.disabled ? new Date(this.date.min) : new Date(this.settings.range.min);
      this.dateMax = this.settings.visibility.disabled ? new Date(this.date.max) : new Date(this.settings.range.max);
    }
  }, {
    key: "createDOM",
    value: function createDOM() {
      if (this.currentType === 'default') {
        var _this$name$arrow$prev, _this$name$arrow$next;

        this.HTMLElement.classList.add('vanilla-calendar_default');
        this.HTMLElement.classList.remove('vanilla-calendar_month');
        this.HTMLElement.classList.remove('vanilla-calendar_year');
        this.HTMLElement.innerHTML = "\n\t\t\t<div class=\"vanilla-calendar-header\">\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\tclass=\"fa fa-arrow-circle-o-right vanilla-calendar-arrow_prev\">\n\t\t\t\t\t".concat((_this$name$arrow$prev = this.name.arrow.prev[this.settings.lang]) !== null && _this$name$arrow$prev !== void 0 ? _this$name$arrow$prev : this.name.arrow.prev.en, "\n\t\t\t\t</button>\n\t\t\t\t<div class=\"vanilla-calendar-header__content\">\n\t\t\t\t\t<b class=\"vanilla-calendar-month").concat(this.settings.selection.month ? '' : ' vanilla-calendar-month_disabled', "\"></b>\n\t\t\t\t\t<b class=\"vanilla-calendar-year").concat(this.settings.selection.year ? '' : ' vanilla-calendar-year_disabled', "\"></b>\n\t\t\t\t</div>\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\tclass=\"fa fa-arrow-circle-o-right vanilla-calendar-arrow_next\">\n\t\t\t\t\t").concat((_this$name$arrow$next = this.name.arrow.next[this.settings.lang]) !== null && _this$name$arrow$next !== void 0 ? _this$name$arrow$next : this.name.arrow.next.en, "\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"vanilla-calendar-content\">\n\t\t\t\t<div class=\"vanilla-calendar-week\"></div>\n\t\t\t\t<div class=\"vanilla-calendar-days\"></div>\n\t\t\t</div>\n\t\t");
      } else if (this.currentType === 'month') {
        var _this$name$arrow$prev2, _this$name$arrow$next2;

        this.HTMLElement.classList.remove('vanilla-calendar_default');
        this.HTMLElement.classList.add('vanilla-calendar_month');
        this.HTMLElement.classList.remove('vanilla-calendar_year');
        this.HTMLElement.innerHTML = "\n\t\t\t<div class=\"vanilla-calendar-header\">\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\tclass=\"vanilla-calendar-arrow vanilla-calendar-arrow_prev\"\n\t\t\t\t\tstyle=\"visibility: hidden\">\n\t\t\t\t\t".concat((_this$name$arrow$prev2 = this.name.arrow.prev[this.settings.lang]) !== null && _this$name$arrow$prev2 !== void 0 ? _this$name$arrow$prev2 : this.name.arrow.prev.en, "\n\t\t\t\t</button>\n\t\t\t\t<div class=\"vanilla-calendar-header__content\">\n\t\t\t\t\t<b class=\"vanilla-calendar-month\"></b>\n\t\t\t\t\t<b class=\"vanilla-calendar-year vanilla-calendar-year_not-active").concat(this.settings.selection.year ? '' : ' vanilla-calendar-year_disabled', "\"></b>\n\t\t\t\t</div>\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\tclass=\"vanilla-calendar-arrow vanilla-calendar-arrow_next\"\n\t\t\t\t\tstyle=\"visibility: hidden\">\n\t\t\t\t\t").concat((_this$name$arrow$next2 = this.name.arrow.next[this.settings.lang]) !== null && _this$name$arrow$next2 !== void 0 ? _this$name$arrow$next2 : this.name.arrow.next.en, "\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"vanilla-calendar-content\">\n\t\t\t\t<div class=\"vanilla-calendar-months\"></div>\n\t\t\t</div>");
      } else if (this.currentType === 'year') {
        var _this$name$arrow$prev3, _this$name$arrow$next3;

        this.HTMLElement.classList.remove('vanilla-calendar_default');
        this.HTMLElement.classList.remove('vanilla-calendar_month');
        this.HTMLElement.classList.add('vanilla-calendar_year');
        this.HTMLElement.innerHTML = "\n\t\t\t<div class=\"vanilla-calendar-header\">\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\tclass=\"vanilla-calendar-arrow vanilla-calendar-arrow_prev\">\n\t\t\t\t\t".concat((_this$name$arrow$prev3 = this.name.arrow.prev[this.settings.lang]) !== null && _this$name$arrow$prev3 !== void 0 ? _this$name$arrow$prev3 : this.name.arrow.prev.en, "\n\t\t\t\t</button>\n\t\t\t\t<div class=\"vanilla-calendar-header__content\">\n\t\t\t\t\t<b class=\"vanilla-calendar-month vanilla-calendar-month_not-active").concat(this.settings.selection.month ? '' : ' vanilla-calendar-month_disabled', "\"></b>\n\t\t\t\t\t<b class=\"vanilla-calendar-year\"></b>\n\t\t\t\t</div>\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\tclass=\"vanilla-calendar-arrow vanilla-calendar-arrow_next\">\n\t\t\t\t\t").concat((_this$name$arrow$next3 = this.name.arrow.next[this.settings.lang]) !== null && _this$name$arrow$next3 !== void 0 ? _this$name$arrow$next3 : this.name.arrow.next.en, "\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"vanilla-calendar-content\">\n\t\t\t\t<div class=\"vanilla-calendar-years\"></div>\n\t\t\t</div>");
      }
    }
  }, {
    key: "controlArrows",
    value: function controlArrows() {
      var _this = this;

      if (!['default', 'year'].includes(this.currentType)) return;
      var arrowPrev = this.HTMLElement.querySelector('.vanilla-calendar-arrow_prev');
      var arrowNext = this.HTMLElement.querySelector('.vanilla-calendar-arrow_next');

      var defaultControl = function defaultControl() {
        if (_this.currentType !== 'default') return;

        var isSelectedMinMount = _this.selectedMonth === _this.dateMin.getMonth();

        var isSelectedMaxMount = _this.selectedMonth === _this.dateMax.getMonth();

        var isSelectedMinYear = _this.selectedYear === _this.dateMin.getFullYear();

        var isSelectedMaxYear = _this.selectedYear === _this.dateMax.getFullYear();

        if (isSelectedMinMount && isSelectedMinYear || !_this.settings.selection.month) {
          arrowPrev.style.visibility = 'hidden';
        } else {
          arrowPrev.style.visibility = null;
        }

        if (isSelectedMaxMount && isSelectedMaxYear || !_this.settings.selection.month) {
          arrowNext.style.visibility = 'hidden';
        } else {
          arrowNext.style.visibility = null;
        }
      };

      var yearControl = function yearControl() {
        if (_this.currentType !== 'year') return;

        if (_this.dateMin.getFullYear() && _this.viewYear - 7 <= _this.dateMin.getFullYear()) {
          arrowPrev.style.visibility = 'hidden';
        } else {
          arrowPrev.style.visibility = null;
        }

        if (_this.dateMax.getFullYear() && _this.viewYear + 7 >= _this.dateMax.getFullYear()) {
          arrowNext.style.visibility = 'hidden';
        } else {
          arrowNext.style.visibility = null;
        }
      };

      defaultControl();
      yearControl();
    }
  }, {
    key: "writeYear",
    value: function writeYear() {
      var yearEl = this.HTMLElement.querySelector('.vanilla-calendar-year');
      yearEl.innerText = this.selectedYear;
    }
  }, {
    key: "writeMonth",
    value: function writeMonth() {
      var monthEl = this.HTMLElement.querySelector('.vanilla-calendar-month');
      monthEl.innerText = this.name.months.full[this.settings.lang][this.selectedMonth];
    }
  }, {
    key: "createWeek",
    value: function createWeek() {
      var weekEl = this.HTMLElement.querySelector('.vanilla-calendar-week');
      var week = this.name.week[this.settings.lang];
      week.push(week.shift());

      for (var i = 0; i < week.length; i++) {
        var weekDayName = week[i];
        var weekDay = document.createElement('span');
        weekDay.className = 'vanilla-calendar-week__day';

        if (this.settings.visibility.weekend && this.settings.iso8601) {
          if (i === 5 || i === 6) {
            weekDay.classList.add('vanilla-calendar-week__day_weekend');
          }
        } else if (this.settings.visibility.weekend && !this.settings.iso8601) {
          if (i === 0 || i === 6) {
            weekDay.classList.add('vanilla-calendar-week__day_weekend');
          }
        }

        weekDay.innerText = "".concat(weekDayName);
        weekEl.append(weekDay);
      }
    }
  }, {
    key: "createDays",
    value: function createDays() {
      var _this2 = this;

      var firstDay = new Date(this.selectedYear, this.selectedMonth, 1);
      var daysSelectedMonth = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();
      var firstDayWeek = Number(firstDay.getDay());
      if (this.settings.iso8601) firstDayWeek = Number((firstDay.getDay() !== 0 ? firstDay.getDay() : 7) - 1);
      var daysEl = this.HTMLElement.querySelector('.vanilla-calendar-days');
      if (['single', 'multiple'].includes(this.settings.selection.day)) daysEl.classList.add('vanilla-calendar-days_selecting');
      daysEl.innerHTML = '';

      var prevMonth = function prevMonth() {
        var prevMonthDays = new Date(_this2.selectedYear, _this2.selectedMonth, 0).getDate();
        var day = prevMonthDays - firstDayWeek;
        var year = _this2.selectedYear;
        var month = _this2.selectedMonth;

        if (_this2.selectedMonth === 0) {
          month = _this2.name.months.full[_this2.settings.lang].length;
          year = _this2.selectedYear - 1;
        } else if (_this2.selectedMonth < 10) {
          month = "0".concat(_this2.selectedMonth);
        }

        for (var i = 0; i < firstDayWeek; i++) {
          var dayEl = document.createElement('span');
          day += 1;
          dayEl.className = 'vanilla-calendar-day vanilla-calendar-day_prev';
          dayEl.innerText = "".concat(day);
          dayEl.dataset.calendarDay = "".concat(year, "-").concat(month, "-").concat(day);
          daysEl.append(dayEl);
        }
      };

      var selectedMonth = function selectedMonth() {
        var year = _this2.selectedYear;
        var month = _this2.selectedMonth < 9 ? "0".concat(_this2.selectedMonth + 1) : _this2.selectedMonth + 1;

        var _loop = function _loop(i) {
          var dayEl = document.createElement('span');
          var day = i < 10 ? "0".concat(i) : i;
          var date = "".concat(year, "-").concat(month, "-").concat(day);
          var dayID = new Date(date).getDay();
          dayEl.className = 'vanilla-calendar-day';
          dayEl.innerText = "".concat(i);
          dayEl.dataset.calendarDay = date; // if weekend

          if (_this2.settings.visibility.weekend && (dayID === 0 || dayID === 6)) {
            dayEl.classList.add('vanilla-calendar-day_weekend');
          } // if holidays


          if (Array.isArray(_this2.settings.selected.holidays)) {
            _this2.settings.selected.holidays.forEach(function (holiday) {
              if (holiday === date) {
                dayEl.classList.add('vanilla-calendar-day_holiday');
              }
            });
          } // if today


          var thisToday = i === _this2.date.today.getDate();

          var thisMonth = _this2.selectedMonth === _this2.date.today.getMonth();

          var thisYear = _this2.selectedYear === _this2.date.today.getFullYear();

          if (_this2.settings.visibility.today && thisToday && thisMonth && thisYear) {
            dayEl.classList.add('vanilla-calendar-day_today');
          } // if selected day


          if (_this2.selectedDates.find(function (selectedDate) {
            return selectedDate === date;
          })) {
            dayEl.classList.add('vanilla-calendar-day_selected');
          } // if range min/max


          if (_this2.settings.range.min > date || _this2.settings.range.max < date) {
            dayEl.classList.add('vanilla-calendar-day_disabled');
          } // if range values


          if (Array.isArray(_this2.settings.range.disabled)) {
            _this2.settings.range.disabled.forEach(function (dateDisabled) {
              if (dateDisabled === date) {
                dayEl.classList.add('vanilla-calendar-day_disabled');
              }
            });
          }

          daysEl.append(dayEl);
        };

        for (var i = 1; i <= daysSelectedMonth; i++) {
          _loop(i);
        }
      };

      var nextMonth = function nextMonth() {
        var total = firstDayWeek + daysSelectedMonth;
        var rows = Math.ceil(total / _this2.name.week[_this2.settings.lang].length);
        var nextDays = _this2.name.week[_this2.settings.lang].length * rows - total;
        var year = _this2.selectedYear;
        var month = _this2.selectedMonth + 2;

        if (_this2.selectedMonth + 1 === _this2.name.months.full[_this2.settings.lang].length) {
          month = '01';
          year = _this2.selectedYear + 1;
        } else if (_this2.selectedMonth + 2 < 10) {
          month = "0".concat(_this2.selectedMonth + 2);
        }

        for (var i = 1; i <= nextDays; i++) {
          var dayEl = document.createElement('span');
          var day = i < 10 ? "0".concat(i) : i;
          dayEl.className = 'vanilla-calendar-day vanilla-calendar-day_next';
          dayEl.innerText = "".concat(i);
          dayEl.dataset.calendarDay = "".concat(year, "-").concat(month, "-").concat(day);
          daysEl.append(dayEl);
        }
      };

      prevMonth();
      selectedMonth();
      nextMonth();
    }
  }, {
    key: "changeMonth",
    value: function changeMonth(element) {
      var lastMonth = this.name.months.full[this.settings.lang].length - 1;

      if (element.closest('.vanilla-calendar-arrow_prev')) {
        if (this.selectedMonth !== 0) {
          this.selectedMonth -= 1;
        } else if (this.settings.selection.year) {
          this.selectedYear -= 1;
          this.selectedMonth = lastMonth;
        }
      } else if (element.closest('.vanilla-calendar-arrow_next')) {
        if (this.selectedMonth !== lastMonth) {
          this.selectedMonth += 1;
        } else if (this.settings.selection.year) {
          this.selectedYear += 1;
          this.selectedMonth = 0;
        }
      }

      this.settings.selected.month = this.selectedMonth;
      this.controlArrows();
      this.writeYear();
      this.writeMonth();
      this.createDays();
    }
  }, {
    key: "createYears",
    value: function createYears() {
      this.currentType = 'year';
      this.createDOM();
      this.controlArrows();
      this.writeYear();
      this.writeMonth();
      var yearsEl = this.HTMLElement.querySelector('.vanilla-calendar-years');
      if (this.settings.selection.year) yearsEl.classList.add('vanilla-calendar-years_selecting');

      for (var i = this.viewYear - 7; i < this.viewYear + 8; i++) {
        var year = i;
        var yearEl = document.createElement('span');
        yearEl.className = 'vanilla-calendar-years__year';

        if (year === this.selectedYear) {
          yearEl.classList.add('vanilla-calendar-years__year_selected');
        }

        if (year < this.dateMin.getFullYear()) {
          yearEl.classList.add('vanilla-calendar-years__year_disabled');
        }

        if (year > this.dateMax.getFullYear()) {
          yearEl.classList.add('vanilla-calendar-years__year_disabled');
        }

        yearEl.dataset.calendarYear = year;
        yearEl.innerText = "".concat(year);
        yearsEl.append(yearEl);
      }
    }
  }, {
    key: "createMonths",
    value: function createMonths() {
      this.currentType = 'month';
      this.createDOM();
      this.writeYear();
      this.writeMonth();
      var monthsEl = this.HTMLElement.querySelector('.vanilla-calendar-months');
      if (this.settings.selection.month) monthsEl.classList.add('vanilla-calendar-months_selecting');
      var months = this.name.months.reduction[this.settings.lang];

      for (var i = 0; i < months.length; i++) {
        var month = months[i];
        var monthEl = document.createElement('span');
        monthEl.className = 'vanilla-calendar-months__month';

        if (i === this.selectedMonth) {
          monthEl.classList.add('vanilla-calendar-months__month_selected');
        }

        if (i < this.dateMin.getMonth() && this.selectedYear === this.dateMin.getFullYear()) {
          monthEl.classList.add('vanilla-calendar-months__month_disabled');
        }

        if (i > this.dateMax.getMonth() && this.selectedYear === this.dateMax.getFullYear()) {
          monthEl.classList.add('vanilla-calendar-months__month_disabled');
        }

        monthEl.dataset.calendarMonth = i;
        monthEl.innerText = "".concat(month);
        monthsEl.append(monthEl);
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.setVariablesDates();
      this.createDOM();
      this.controlArrows();
      this.writeYear();
      this.writeMonth();

      if (this.currentType === 'default') {
        this.createWeek();
        this.createDays();
      } else if (this.currentType === 'month') {
        this.createMonths();
      } else if (this.currentType === 'year') {
        this.createYears();
      }
    }
  }, {
    key: "click",
    value: function click() {
      var _this3 = this;

      this.HTMLElement.addEventListener('click', function (e) {
        var arrowEl = e.target.closest('.vanilla-calendar-arrow');
        var arrowPrevEl = e.target.closest('.vanilla-calendar-arrow_prev');
        var arrowNextEl = e.target.closest('.vanilla-calendar-arrow_next');
        var dayEl = e.target.closest('.vanilla-calendar-day');
        var dayPrevEl = e.target.closest('.vanilla-calendar-day_prev');
        var dayNextEl = e.target.closest('.vanilla-calendar-day_next');
        var yearHeaderEl = e.target.closest('.vanilla-calendar-year');
        var yearItemEl = e.target.closest('.vanilla-calendar-years__year');
        var monthHeaderEl = e.target.closest('.vanilla-calendar-month');
        var monthItemEl = e.target.closest('.vanilla-calendar-months__month');

        var clickDefault = function clickDefault() {
          if (['single', 'multiple'].includes(_this3.settings.selection.day) && dayEl) {
            if (!dayPrevEl && !dayNextEl) {
              if (_this3.actions.clickDay) _this3.actions.clickDay(e);

              if (dayEl.classList.contains('vanilla-calendar-day_selected')) {
                _this3.selectedDates.splice(_this3.selectedDates.indexOf(dayEl.dataset.calendarDay), 1);
              } else {
                if (_this3.settings.selection.day === 'single') {
                  _this3.selectedDates = [];
                }

                _this3.selectedDates.push(dayEl.dataset.calendarDay);
              }

              _this3.createDays();
            }
          } else if (arrowEl && _this3.currentType !== 'year' && _this3.currentType !== 'month') {
            _this3.changeMonth(e.target);
          }
        };

        var clickYear = function clickYear() {
          if (!_this3.settings.selection.year) return;

          if (arrowEl && _this3.currentType === 'year') {
            if (arrowNextEl) {
              _this3.viewYear += 15;
            } else if (arrowPrevEl) {
              _this3.viewYear -= 15;
            }

            _this3.createYears();
          } else if (_this3.currentType !== 'year' && yearHeaderEl) {
            _this3.createYears();
          } else if (_this3.currentType === 'year' && yearHeaderEl) {
            _this3.currentType = _this3.type;

            _this3.update();
          } else if (yearItemEl) {
            if (_this3.actions.clickYear) _this3.actions.clickYear(e);
            var year = Number(yearItemEl.dataset.calendarYear);
            _this3.currentType = _this3.type;

            if (_this3.selectedMonth < _this3.dateMin.getMonth() && year === _this3.dateMin.getFullYear()) {
              _this3.settings.selected.month = _this3.dateMin.getMonth();
            }

            if (_this3.selectedMonth > _this3.dateMax.getMonth() && year === _this3.dateMax.getFullYear()) {
              _this3.settings.selected.month = _this3.dateMax.getMonth();
            }

            _this3.settings.selected.year = year;

            _this3.update();
          }
        };

        var clickMonth = function clickMonth() {
          if (!_this3.settings.selection.month) return;

          if (_this3.currentType !== 'month' && monthHeaderEl) {
            _this3.createMonths();
          } else if (_this3.currentType === 'month' && monthHeaderEl) {
            _this3.currentType = _this3.type;

            _this3.update();
          } else if (monthItemEl) {
            if (_this3.actions.clickMonth) _this3.actions.clickMonth(e);
            var month = Number(monthItemEl.dataset.calendarMonth);
            _this3.currentType = _this3.type;
            _this3.settings.selected.month = month;

            _this3.update();
          }
        };

        clickDefault();
        clickYear();
        clickMonth();
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.update();
      this.click();
    }
  }]);

  return VanillaCalendar;
}();


window.VanillaCalendar = VanillaCalendar;
/******/ 	return __webpack_exports__;
/******/ })()
;
});