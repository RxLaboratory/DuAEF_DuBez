/*
	Dubez - Bézier & Shape tools for After Effects

	Copyright (c) 2019 Nicolas Dufresne, Rainbox Productions

	https://rainboxprod.coop

	This file is part of Dubez.

		Dubez is free software: you can redistribute it and/or modify
		it under the terms of the GNU General Public License as published by
		the Free Software Foundation, either version 3 of the License, or
		(at your option) any later version.

		Dubez is distributed in the hope that it will be useful,
		but WITHOUT ANY WARRANTY; without even the implied warranty of
		MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
		GNU General Public License for more details.

		You should have received a copy of the GNU General Public License
		along with Dubez. If not, see <http://www.gnu.org/licenses/>.

*/

//encapsulate the script in a function to avoid global variables
( function ( thisObj ) {

    //================
    var version = '0.0.1';
    var scriptName = "Dubez";
    //================
    #include DuAEF.jsxinc

    // _______ UI SETUP _______
    var ui = DuAEF.DuScriptUI.createUI( thisObj, scriptName );

    //INIT
    DuAEF.DuScriptUI.askFilesAndNetworkAccess( ui, launch, scriptName );

    //MAIN UI
    #include "dubez_required/Dubez_ui.jsxinc"

} )( this );
