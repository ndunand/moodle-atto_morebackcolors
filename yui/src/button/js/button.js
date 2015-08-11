// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/*
 * @package    atto_morebackcolors
 * @copyright  2015 University of Strathclyde
 * @author     Michael Aherne <michael.aherne@strath.ac.uk>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_morebackcolors-button
 */

/**
 * Atto text editor morebackcolors plugin.
 *
 * @namespace M.atto_morebackcolors
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

Y.namespace('M.atto_morebackcolors').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    initializer: function(config) {
        var items = [];
        Y.Array.each(config.colors, function(color) {
            items.push({
                text: '<div style="width: 20px; height: 20px; border: 1px solid #CCC; background-color: ' +
                    color + '"></div>',
                callbackArgs: color,
                callback: this._changeStyle
            });
        });

        this.addToolbarMenu({
            icon: 'e/text_highlight',
            overlayWidth: '4',
            globalItemConfig: {
                callback: this._changeStyle
            },
            items: items
        });
    },

    /**
     * Change the background color to the specified color.
     *
     * @method _changeStyle
     * @param {EventFacade} e
     * @param {string} color The new background color
     * @private
     */
    _changeStyle: function(e, color) {
        this.get('host').formatSelectionInlineStyle({
            backgroundColor: color
        });
    }
});
