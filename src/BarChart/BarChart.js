"use strict";
exports.__esModule = true;
var react_1 = require("react");
var BarChart_scss_1 = require("./BarChart.scss");
var XAxis_1 = require("../XAxis/XAxis");
var YAxis_1 = require("../YAxis/YAxis");
var BarPlot_1 = require("../BarPlot/BarPlot");
var BarChart = function (props) {
    return (<div className={BarChart_scss_1["default"].BarChart}>
            <div className={BarChart_scss_1["default"].BarChart__title}>{props.title}</div>
            <YAxis_1["default"] title={'YAxis'} data={props.data} config={props.yAxisConfig} padding={props.padding}/>
            <BarPlot_1["default"] data={props.data} padding={props.padding} xAxisConfig={props.xAxisConfig} yAxisConfig={props.yAxisConfig}/>
            <XAxis_1["default"] title={'XAxis'} data={props.data} config={props.xAxisConfig} padding={props.padding}/>
        </div>);
};
exports["default"] = BarChart;
