/// <reference path="../typings/browser.d.ts" />
import "../style/style";
import "babel-polyfill";

import * as React from "react";
import {render} from "react-dom";

render(
	<h1>Hello World</h1>,
	document.querySelector(".container")
);